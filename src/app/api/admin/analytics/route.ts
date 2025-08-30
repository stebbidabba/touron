import { NextRequest, NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';
import { sheets_v4 } from 'googleapis';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

async function getGoogleSheetsClient() {
  if (!SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const authClient = await auth.getClient();
  return new sheets_v4.Sheets({ auth: authClient });
}

function generateMockData() {
  const mockLeads = [
    {
      timestamp: new Date().toISOString(),
      type: 'quick',
      email: 'demo@example.com',
      travelMonth: 'March 2025',
      travelDates: '',
      budget: '',
      groupSize: '',
      mustSee: '',
      howHeard: 'Google Search'
    },
    {
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      type: 'full',
      email: 'test@example.com',
      travelMonth: 'December 2024',
      travelDates: '2024-12-15',
      budget: '3500',
      groupSize: 'Couple',
      mustSee: 'Northern Lights, Ring Road',
      howHeard: 'Social Media'
    },
    {
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      type: 'exit-intent',
      email: 'exit@example.com',
      travelMonth: '',
      travelDates: '',
      budget: '',
      groupSize: '',
      mustSee: '',
      howHeard: ''
    }
  ];

  const totalLeads = 47;
  const todayLeads = 3;
  const conversionRate = 23.4;

  const sourceBreakdown = {
    'Google Search': 18,
    'Social Media': 12,
    'Friend Referral': 8,
    'Travel Blog': 5,
    'Other': 4
  };

  const typeBreakdown = {
    'quick': 25,
    'full': 15,
    'exit-intent': 7
  };

  return {
    totalLeads,
    todayLeads,
    conversionRate,
    sourceBreakdown,
    typeBreakdown,
    recentLeads: mockLeads
  };
}

export async function GET(request: NextRequest) {
  try {
    if (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      console.log('Google Sheets not configured, returning mock data');
      return NextResponse.json(generateMockData());
    }

    const sheets = await getGoogleSheetsClient();
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Leads!A:I',
    });

    const rows = response.data.values || [];
    
    if (rows.length <= 1) {
      return NextResponse.json(generateMockData());
    }

    const headerRow = rows[0];
    const leads = rows.slice(1).map(row => ({
      timestamp: row[0] || '',
      type: row[1] || '',
      email: row[2] || '',
      travelMonth: row[3] || '',
      travelDates: row[4] || '',
      budget: row[5] || '',
      groupSize: row[6] || '',
      mustSee: row[7] || '',
      howHeard: row[8] || ''
    }));

    const totalLeads = leads.length;
    const today = new Date().toISOString().split('T')[0];
    const todayLeads = leads.filter(lead => 
      lead.timestamp.startsWith(today)
    ).length;

    const conversionRate = leads.length > 0 ? (leads.filter(lead => lead.type === 'full').length / leads.length) * 100 : 0;

    const sourceBreakdown = leads.reduce((acc: { [key: string]: number }, lead) => {
      const source = lead.howHeard || 'Unknown';
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});

    const typeBreakdown = leads.reduce((acc: { [key: string]: number }, lead) => {
      acc[lead.type] = (acc[lead.type] || 0) + 1;
      return acc;
    }, {});

    const recentLeads = leads
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10);

    return NextResponse.json({
      totalLeads,
      todayLeads,
      conversionRate,
      sourceBreakdown,
      typeBreakdown,
      recentLeads
    });

  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(generateMockData());
  }
}