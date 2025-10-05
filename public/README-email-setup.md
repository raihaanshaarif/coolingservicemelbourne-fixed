# Email Setup Instructions for Service First Website

## Overview

This directory contains the email handling system for the Service First contact forms. The system is designed to work with both simple PHP mail() function and PHPMailer for better reliability.

## Files

- `sendmail.php` - Main email handler that processes form submissions
- `composer.json` - Dependencies for PHPMailer (optional but recommended)

## Email Configuration

The system is configured to send emails to: `servicefirsthampton@gmail.com`
From: `inquiryservicefirstau@gmail.com`

## Installation Options

### Option 1: Basic Setup (Uses PHP mail() function)

The current setup will work immediately with any PHP server that has the mail() function enabled. No additional installation required.

### Option 2: Enhanced Setup with PHPMailer (Recommended)

For better reliability and SMTP support:

1. Install Composer (if not already installed):
   - Download from https://getcomposer.org/
2. Install PHPMailer:

   ```bash
   cd public
   composer install
   ```

3. If composer install fails, manually download PHPMailer:
   - Download PHPMailer from: https://github.com/PHPMailer/PHPMailer
   - Extract to `public/vendor/phpmailer/phpmailer/`

## SMTP Credentials

The system is configured with the following SMTP settings for Gmail:

- Host: smtp.gmail.com
- Port: 587
- Security: STARTTLS
- Username: inquiryservicefirstau@gmail.com
- Password: ualrphismhfjdcam

## Form Integration

All three form components (Form1, Form2, Form3) are now configured to submit to `/sendmail.php`:

- Form1: Main contact form with full details
- Form2: Quick service availability checker
- Form3: Alternative contact form layout

## Testing

To test the email system:

1. Fill out any contact form on the website
2. Check if the email is received at servicefirsthampton@gmail.com
3. Check browser console for any JavaScript errors
4. Check server logs for PHP errors

## Troubleshooting

### Common Issues:

1. **Email not being sent**: Check server mail configuration
2. **CORS errors**: Ensure the domain allows cross-origin requests
3. **PHP errors**: Check server error logs
4. **Form not submitting**: Check browser console for JavaScript errors

### Server Requirements:

- PHP 7.4 or higher
- Mail function enabled OR SMTP support
- JSON extension enabled
- cURL extension (for PHPMailer SMTP)

## Security Notes

- All form inputs are sanitized and validated
- Email addresses are validated using PHP filter_var()
- HTML content is escaped to prevent XSS attacks
- Rate limiting should be implemented on the server level

## Support

For technical support or modifications, contact the development team.
