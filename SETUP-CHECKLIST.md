# Zentreks V3 - Setup Checklist

This checklist covers the remaining setup tasks for email services and security.

---

## 1. Resend (Transactional Email)

Resend sends contact form notifications to you and delivers lead magnet downloads to subscribers.

### Setup Steps

- [ ] **Create Account**: Go to [resend.com](https://resend.com) and sign up
  - Free tier: 3,000 emails/month, 100 emails/day

- [ ] **Verify Your Domain**:
  1. Go to Settings → Domains → Add Domain
  2. Enter: `zentreksconsulting.com`
  3. Add the DNS records Resend provides (usually 3 records)
  4. Wait for verification (can take up to 48 hours)

- [ ] **Get API Key**:
  1. Go to Settings → API Keys
  2. Click "Create API Key"
  3. Name it: `zentreks-v3-production`
  4. Copy the key (starts with `re_`)

### Resend Environment Variable
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## 2. ConvertKit (Email Marketing CRM)

ConvertKit stores your subscriber list and lets you send newsletters/campaigns.

### Setup Steps

- [ ] **Create Account**: Go to [convertkit.com](https://convertkit.com) and sign up
  - Free tier: Up to 10,000 subscribers

- [ ] **Create a Form**:
  1. Go to Grow → Landing Pages & Forms
  2. Click "Create New" → Form
  3. Name it: `Website Signups`
  4. Design doesn't matter (we use the API, not the embed)
  5. Save the form

- [ ] **Get Form ID**:
  1. Open the form you created
  2. Look at the URL: `https://app.convertkit.com/forms/designers/XXXXXXX/edit`
  3. The number is your Form ID

- [ ] **Get API Key**:
  1. Go to Settings → Developer
  2. Copy your API Key (or create one if needed)

### ConvertKit Environment Variables
```
CONVERTKIT_API_KEY=xxxxxxxxxxxxxx
CONVERTKIT_FORM_ID=1234567
```

---

## 3. Add Environment Variables to Vercel

- [ ] Go to [vercel.com](https://vercel.com) → Your Project → Settings → Environment Variables

- [ ] Add each variable for **Production** environment:

| Variable | Value | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxx...` | From Resend dashboard |
| `CONVERTKIT_API_KEY` | `xxxx...` | From ConvertKit settings |
| `CONVERTKIT_FORM_ID` | `1234567` | From ConvertKit form URL |
| `NOTIFICATION_EMAIL` | `graham@zentreksconsulting.com` | Where contact submissions go |
| `NEXT_PUBLIC_SITE_URL` | `https://zentreksconsulting.com` | Your production domain |

- [ ] Click "Save" for each variable

- [ ] **Redeploy**: Go to Deployments → Click "..." on latest → Redeploy

---

## 4. Security - Rotate Tokens (If Needed)

If you previously had API keys exposed in `.env.local`:

- [ ] **Vercel OIDC Token**:
  1. Vercel Dashboard → Settings → Tokens
  2. Revoke old token, create new one

- [ ] **Resend**: Generate new API key, delete old one

- [ ] **ConvertKit**: Generate new API key, delete old one

---

## 5. Test Everything

### Contact Form Test
- [ ] Go to your site's `/contact` page
- [ ] Fill out and submit the form
- [ ] Check that:
  - [ ] You receive an email at your notification address
  - [ ] The contact appears in ConvertKit with "contact-form" tag

### Newsletter Test
- [ ] Find the newsletter signup on your homepage
- [ ] Enter a test email and subscribe
- [ ] Check that:
  - [ ] The subscriber appears in ConvertKit with "newsletter" tag

### Security Headers Test
Run this command to verify security headers:
```bash
curl -I https://zentreksconsulting.com
```

You should see:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy: ...`

---

## Current Status

Without API keys configured:
- ✅ Forms work (show success to users)
- ⚠️ Emails don't send (warnings logged)
- ⚠️ Subscribers not added to ConvertKit (warnings logged)

With API keys configured:
- ✅ Contact form sends email notification
- ✅ Contact form adds subscriber to ConvertKit
- ✅ Newsletter adds subscriber to ConvertKit
- ✅ Lead magnets send download emails

---

## Need Help?

- **Resend Docs**: https://resend.com/docs
- **ConvertKit API Docs**: https://developers.convertkit.com/
- **Vercel Env Vars**: https://vercel.com/docs/environment-variables
