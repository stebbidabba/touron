import { NextRequest, NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';
import { sheets_v4 } from 'googleapis';
import nodemailer from 'nodemailer';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

async function getGoogleSheetsClient() {
  const auth = new GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const authClient = await auth.getClient();
  return new sheets_v4.Sheets({ auth: authClient });
}

async function sendConfirmationEmail(email: string, type: string) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('SMTP not configured, skipping email');
    return;
  }

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = type === 'exit-intent' 
    ? '🗂️ Your Free Iceland Planning Checklist (Avoid These $1,000+ Mistakes)'
    : '🏔️ Your Iceland Planning Guide + What Happens Next';

  const htmlContent = type === 'exit-intent' ? `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669, #0d9488); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e5e5e5; }
        .checklist { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .checklist-item { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
        .highlight { color: #dc2626; font-weight: bold; }
        .cta { text-align: center; margin: 30px 0; }
        .btn { background: #ea580c; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🗂️ Your Iceland Planning Checklist</h1>
          <p>Avoid the mistakes that cost travelers $1,000+ and ruin trips</p>
        </div>
        <div class="content">
          <p>Hi there!</p>
          <p>Here's your free "Iceland Planning Mistakes" checklist. These are the most expensive and trip-ruining mistakes we see:</p>
          
          <div class="checklist">
            <h3>❌ Critical Mistakes to Avoid:</h3>
            
            <div class="checklist-item">
              <strong>Weather Mistake #1:</strong> <span class="highlight">Booking Northern Lights tours without checking cloud cover patterns</span><br>
              <em>Cost: $200+ for tours that see nothing + missed opportunities</em>
            </div>
            
            <div class="checklist-item">
              <strong>Driving Danger #1:</strong> <span class="highlight">Following Google Maps on winter roads without checking road.is</span><br>
              <em>Cost: Rental car damage, rescue fees, potential injury</em>
            </div>
            
            <div class="checklist-item">
              <strong>Tourist Trap #1:</strong> <span class="highlight">Booking generic Reykjavik tours instead of local experiences</span><br>
              <em>Cost: $150+ per day extra for inferior experiences</em>
            </div>
            
            <div class="checklist-item">
              <strong>Booking Mistake #1:</strong> <span class="highlight">Waiting to book accommodations and tours</span><br>
              <em>Cost: 40-60% price premiums + sold-out experiences</em>
            </div>
            
            <div class="checklist-item">
              <strong>Route Planning #1:</strong> <span class="highlight">Underestimating driving times in winter conditions</span><br>
              <em>Cost: Wasted days, missed experiences, unsafe driving</em>
            </div>
          </div>

          <p><strong>The Smart Alternative:</strong></p>
          <p>This is exactly why we created Touron. Instead of spending 40+ hours researching and still making these mistakes, our AI handles everything and saves you thousands.</p>

          <div class="cta">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://touron.com'}" class="btn">Get Your Perfect Iceland Plan →</a>
          </div>

          <p>Questions? Just reply to this email - we read every message!</p>
          
          <p>Safe travels,<br>
          Alex & the Touron Team</p>
        </div>
      </div>
    </body>
    </html>
  ` : `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669, #0d9488); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e5e5e5; }
        .steps { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .step { margin: 15px 0; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #059669; }
        .cta { text-align: center; margin: 30px 0; }
        .btn { background: #ea580c; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏔️ Welcome to Touron!</h1>
          <p>Your Iceland planning journey starts now</p>
        </div>
        <div class="content">
          <p>Hi there!</p>
          <p>Thanks for trusting us with your Iceland trip planning. You've just joined 800+ smart travelers who chose to avoid the stress and save time & money.</p>
          
          <div class="steps">
            <h3>📋 What Happens Next:</h3>
            
            <div class="step">
              <strong>Step 1 (Right Now):</strong> You're reading this email ✅
            </div>
            
            <div class="step">
              <strong>Step 2 (Next 24 Hours):</strong> Our AI analyzes your travel preferences, weather patterns, and optimal routes for your dates
            </div>
            
            <div class="step">
              <strong>Step 3 (Within 48 Hours):</strong> We'll send you a custom itinerary preview with accommodation recommendations and must-do experiences
            </div>
            
            <div class="step">
              <strong>Step 4:</strong> If you love it (and you will), we'll handle all the bookings and send you your mobile-ready travel guide
            </div>
          </div>

          <p><strong>🎁 Bonus:</strong> While you wait, grab our free "Iceland Planning Mistakes" guide to see what pitfalls we're helping you avoid:</p>

          <div class="cta">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://touron.com'}/planning-guide" class="btn">Download Planning Guide</a>
          </div>

          <p><strong>Questions or need to update your travel details?</strong> Just reply to this email - we read every message and respond within a few hours!</p>
          
          <p>Talk soon,<br>
          Alex Magnusson<br>
          Founder, Touron</p>

          <p><em>P.S. Keep an eye out for your custom itinerary preview - our travelers are always amazed by how much thought goes into every recommendation!</em></p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Touron - Iceland Travel" <${process.env.SMTP_USER}>`,
      to: email,
      subject,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Email send error:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, travelMonth, travelDates, budget, groupSize, mustSee, howHeard } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    let success = false;

    try {
      if (SHEET_ID && SERVICE_ACCOUNT_EMAIL && PRIVATE_KEY) {
        const sheets = await getGoogleSheetsClient();
        
        const timestamp = new Date().toISOString();
        const values = type === 'full' 
          ? [timestamp, type, email, travelMonth || '', travelDates || '', budget?.toString() || '', groupSize || '', mustSee?.join(', ') || '', howHeard || '']
          : [timestamp, type, email, travelMonth || '', '', '', '', '', ''];

        await sheets.spreadsheets.values.append({
          spreadsheetId: SHEET_ID,
          range: 'Leads!A:I',
          valueInputOption: 'RAW',
          requestBody: {
            values: [values],
          },
        });
        success = true;
      }
    } catch (sheetsError) {
      console.error('Google Sheets error:', sheetsError);
    }

    try {
      await sendConfirmationEmail(email, type);
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    if (!success && (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY)) {
      console.log('Google Sheets not configured, but request processed');
      success = true;
    }

    return NextResponse.json({ 
      success,
      message: success ? 'Lead captured successfully' : 'Partial success - some services unavailable'
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}