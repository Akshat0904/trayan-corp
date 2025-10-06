# EmailJS Setup Instructions

## 🚀 Overview

This project uses EmailJS to handle enquiry form submissions. Follow these steps to complete the setup:

## 📝 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

## ⚙️ Step 2: Set up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy your Service ID** (you'll need this later)

## 📧 Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. **IMPORTANT: Configure the destination email**:
   - In the template settings, look for **"To Email"** field
   - Set it to: `info@trayancorp.com`
   - This is where all enquiries will be sent to your company
4. Use this template content:

### Template Subject:

```
New Enquiry from {{user_name}} - Trayan Corporation Website
```

### Template Body:

```
New enquiry received from Trayan Corporation website:

Contact Information:
- Name: {{user_name}}
- Email: {{user_email}}
- Phone: {{user_phone}}
- Company: {{user_company}}

Product Interest:
- Category: {{product_category}}
- Specific Product: {{specific_product}}

Message:
{{message}}

Enquiry Source: {{source}}

---
This enquiry was sent from the Trayan Corporation website contact form.
Reply directly to: {{user_email}}
```

5. **Save the template** and **Copy your Template ID** (you'll need this later)

## 🔑 Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy this key** (you'll need this later)

## 🌍 Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 🧪 Step 6: Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Open your website and click "Get a Quote" button
3. Fill out the form and submit
4. Check your email to confirm receipt

## 📋 Features Included

### ✅ Form Fields

- **Required**: Name, Email, Message
- **Optional**: Phone, Company, Product Category, Specific Product

### ✅ Dynamic Product Selection

- Category dropdown populated from your existing product categories
- Product dropdown filters based on selected category
- Form remembers selections when modal reopens

### ✅ Modal Functionality

- Opens from "Get a Quote" buttons in header and contact page
- Responsive design for mobile and desktop
- Escape key and click-outside-to-close
- Success/error messaging
- Form validation

### ✅ Email Configuration

**Destination Email**: `info@trayancorp.com` (Your company email)

All form fields are sent to `info@trayancorp.com` including:

- Contact information (name, email, phone, company)
- Product interest (category + specific product if selected)
- Customer message
- Source tracking (header/contact/product)
- Reply-to field set to customer's email for easy response

## 🎨 Design Integration

The form matches your existing website design:

- Primary color scheme
- Consistent typography and spacing
- Smooth animations with Framer Motion
- Responsive mobile design

## 🔍 Troubleshooting

### EmailJS Not Sending Emails:

1. Check environment variables are set correctly
2. Verify EmailJS service is active
3. Check browser console for errors
4. Ensure template variables match exactly

### Modal Not Opening:

1. Check browser console for errors
2. Verify EnquiryProvider is wrapping the app
3. Check button click handlers

### Form Validation Issues:

1. Required fields: name, email, message
2. Email format validation included
3. Form prevents submission with errors

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Verify all environment variables
3. Test with EmailJS dashboard directly
4. Contact EmailJS support if needed

## 🚀 Ready to Go!

Your enquiry form is now fully functional and integrated with your existing design system. Users can submit enquiries from:

- Header "Get a Quote" button
- Contact page "Send Enquiry" button
- Future product-specific quote requests

All enquiries will be sent to `info@trayancorp.com` with complete form data including product interest tracking.
