# Touron Landing Page

A conversion-optimized landing page for Touron - AI travel concierge for Iceland trips. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Features

### FOMO-Driven Conversion Strategy
- **Trust-first approach** with sample itinerary (no email required)
- **Progressive disclosure** lead capture forms
- **Scarcity elements** with countdown timers
- **Exit-intent modal** with planning checklist

### Core Sections
- ⚡ **Hero Section** - Magnetic headline with FOMO trigger
- 😰 **FOMO Section** - "What Others Are Missing" timeline
- ❌ **Problem Section** - Why 73% of Iceland trips disappoint
- ✅ **Solution Section** - How Touron works (3 steps)
- 🏆 **Social Proof** - Testimonials and traveler counter
- ⏰ **Scarcity** - Limited availability with countdown
- 📝 **Lead Capture** - Quick and detailed forms

### Technical Features
- 📊 **Google Sheets Integration** - Lead capture and analytics
- 📧 **Email Confirmation** - Automated welcome emails
- 📱 **Mobile-First Design** - Fully responsive
- 🛡️ **Admin Dashboard** - Submission metrics and analytics
- 🎨 **Iceland Branding** - Aurora greens, glacier blues, volcanic blacks

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone [repository-url]
cd touron-landing
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```

Fill in your environment variables:

#### Required for Google Sheets:
- `GOOGLE_SHEET_ID` - Your Google Sheets ID
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Service account email
- `GOOGLE_PRIVATE_KEY` - Service account private key

#### Optional for Email:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - Email configuration

### 3. Google Sheets Setup

#### Create Sheet:
1. Create a new Google Sheet
2. Add headers in row 1: `Timestamp | Type | Email | Travel Month | Travel Dates | Budget | Group Size | Must See | How Heard`
3. Name the sheet "Leads"

#### Service Account:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google Sheets API
4. Create service account credentials
5. Download JSON key file
6. Share your Google Sheet with the service account email

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📊 Admin Dashboard

Access at `/admin` with password: `touron2025`

Features:
- Lead metrics and analytics
- Conversion tracking
- Traffic source breakdown
- Recent submissions table
- Direct Google Sheets access

## 🎨 Design System

### Colors (Iceland-Inspired)
- **Primary**: Deep Atlantic Blue (`#0f172a`)
- **Secondary**: Glacier Ice (`#f1f5f9`)
- **Accent**: Aurora Green (`#059669`)
- **Warning**: Geothermal Orange (`#ea580c`)
- **Text**: Volcanic Black (`#1e293b`)

### Typography
- **Primary**: Inter (400, 500, 700, 900)
- **Accent**: Poppins (600) for headlines and CTAs

### Visual Elements
- Northern Lights animations
- Waterfall imagery
- Ice crystal patterns
- Minimalist Iceland landmark icons

## 📝 Conversion Strategy

### Customer Flow
1. **Hook** - Magnetic headline and instant FOMO
2. **Trust** - Sample itinerary (no form required)
3. **Urgency** - Create fear of missing out
4. **Capture** - Minimal friction lead forms
5. **Nurture** - Email follow-up sequence

### Psychological Triggers
- ⏰ **Time scarcity**: "40+ hours vs 2 minutes"
- 💸 **Money loss**: "Overpay by $800-1500"
- 🌌 **Experience loss**: "Miss Northern Lights"
- 👥 **Social proof**: "847+ travelers"
- 🎯 **Authority**: Founder expertise
- 🎁 **Reciprocity**: Free planning guide

## 🛠️ Deployment

### Vercel (Recommended)
1. Connect your Git repository to Vercel
2. Add environment variables in dashboard
3. Deploy automatically

### Environment Variables
Set in Vercel dashboard or hosting platform:
- All variables from `.env.example`
- Make sure `NEXT_PUBLIC_SITE_URL` matches your domain

## 📈 Success Metrics

Track these KPIs:
- Page views to form starts
- Form starts to completions  
- Email open rates
- Sample itinerary modal opens
- Traffic source conversion rates

## 🔧 Customization

### Content Updates
- Update traveler count in `page.tsx` (line 17)
- Modify testimonials in `SocialProofSection.tsx`
- Adjust pricing in `ItineraryModal.tsx`
- Update countdown timer duration in `ScarcitySection.tsx`

### Styling
- Colors: `tailwind.config.js` and `globals.css`
- Fonts: Update Google Fonts import in `globals.css`
- Spacing: Tailwind utilities throughout components

### Forms
- Add/remove fields in `LeadCaptureForm.tsx`
- Update Google Sheets headers accordingly
- Modify email templates in API route

## 🚨 Important Notes

- **Admin password**: Change in `src/app/admin/page.tsx`
- **FOMO elements**: Update dates and numbers regularly
- **Images**: Replace placeholder images with branded content
- **Legal**: Add privacy policy and terms of service
- **Analytics**: Integrate Google Analytics or similar

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/              # Admin dashboard
│   ├── api/               # API routes
│   │   ├── admin/         # Analytics API
│   │   └── submit-lead/   # Form submission
│   ├── globals.css        # Global styles
│   └── page.tsx          # Main landing page
└── components/           # React components
    ├── HeroSection.tsx
    ├── FOMOSection.tsx
    ├── ItineraryModal.tsx
    ├── ProblemSection.tsx
    ├── SolutionSection.tsx
    ├── SocialProofSection.tsx
    ├── ScarcitySection.tsx
    ├── LeadCaptureForm.tsx
    └── ExitIntentModal.tsx
```

## 🎯 Conversion Optimization

### A/B Test Ideas
- Headlines and value propositions
- CTA button colors and text
- Form field requirements
- Countdown timer durations
- Social proof numbers

### Performance
- Image optimization with Next.js
- Font preloading
- Code splitting by route
- Lazy loading for components

## 📞 Support

For questions about implementation or customization, please check the code documentation or create an issue in the repository.

---

Built with ❤️ for converting Iceland travel dreamers into Touron customers.