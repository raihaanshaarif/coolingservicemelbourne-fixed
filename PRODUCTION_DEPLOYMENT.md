# Production Deployment Guide for Contact Form

## Overview

The contact forms have been updated to use Next.js API routes instead of PHP for better reliability and integration with the Next.js application.

## Changes Made

1. **Replaced PHP backend** with Next.js API route (`/api/send-email`)
2. **Installed nodemailer** for email sending
3. **Updated all forms** (Form1, Form2, Form3) to use the new API endpoint
4. **Added environment variables** for SMTP configuration

## Environment Variables

Set the following environment variables on your production server:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=nihaanexpertise@gmail.com
SMTP_PASSWORD=gummdyuuunmzadnt
SMTP_FROM=nihaanexpertise@gmail.com
SMTP_TO=nihaanexpertise@gmail.com
```

### For PM2 Deployment

If using PM2, create an ecosystem file or set environment variables:

```bash
# In your PM2 ecosystem file or startup script
export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=587
export SMTP_USER=nihaanexpertise@gmail.com
export SMTP_PASSWORD=gummdyuuunmzadnt
export SMTP_FROM=nihaanexpertise@gmail.com
export SMTP_TO=nihaanexpertise@gmail.com
```

### For Docker

Add to your Dockerfile or docker-compose.yml:

```yaml
environment:
  - SMTP_HOST=smtp.gmail.com
  - SMTP_PORT=587
  - SMTP_USER=nihaanexpertise@gmail.com
  - SMTP_PASSWORD=gummdyuuunmzadnt
  - SMTP_FROM=nihaanexpertise@gmail.com
  - SMTP_TO=nihaanexpertise@gmail.com
```

## Build and Deploy

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Start with PM2:**

   ```bash
   pm2 start npm --name "cooling-service" -- start
   ```

3. **Or use PM2 ecosystem file:**
   ```javascript
   // ecosystem.config.js
   module.exports = {
     apps: [
       {
         name: "cooling-service",
         script: "npm start",
         env: {
           SMTP_HOST: "smtp.gmail.com",
           SMTP_PORT: "587",
           SMTP_USER: "nihaanexpertise@gmail.com",
           SMTP_PASSWORD: "gummdyuuunmzadnt",
           SMTP_FROM: "nihaanexpertise@gmail.com",
           SMTP_TO: "nihaanexpertise@gmail.com",
         },
       },
     ],
   };
   ```

## Nginx Configuration

Ensure your Nginx configuration proxies API requests correctly:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # API routes
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Testing

1. **Test the contact form** on your production site
2. **Check email delivery** to the configured SMTP_TO address
3. **Monitor server logs** for any errors

## Troubleshooting

### Common Issues:

1. **Emails not sending**: Check SMTP credentials and Gmail app password
2. **API 500 errors**: Check server logs for nodemailer errors
3. **CORS issues**: Ensure proper headers in API response
4. **Environment variables**: Verify they are set correctly in production

### Gmail SMTP Notes:

- Use an **App Password** instead of your regular Gmail password
- Enable **2-Factor Authentication** on the Gmail account
- Generate an App Password from Google Account settings

## Security Considerations

- Store SMTP credentials securely (not in code)
- Consider using a dedicated email service for production
- Implement rate limiting on the API endpoint
- Validate all form inputs on both client and server side

## Support

The contact form should now work seamlessly in production with the Next.js API route handling email delivery.
