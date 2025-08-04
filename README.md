# LifeServe Solutions Website

A professional, responsive website for LifeServe Solutions - a home care services company built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional UI**: Clean, modern design with smooth animations
- **Contact Form**: Integrated email functionality using EmailJS
- **Service Showcase**: Comprehensive display of care services
- **About Section**: Company information and team details
- **Staffing Information**: Career opportunities and application process
- **Loading Screen**: Professional branded loader

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Email Service**: EmailJS for contact form
- **Build Tool**: Vite
- **Deployment**: Ready for production deployment

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure EmailJS (for contact form)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Contact person's name
   - `{{from_email}}` - Contact person's email
   - `{{phone}}` - Contact person's phone
   - `{{subject}}` - Selected subject
   - `{{message}}` - Contact message
   - `{{to_email}}` - Your receiving email

4. Update the configuration in `src/pages/Contact.tsx`:
   ```typescript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── Loader.tsx      # Loading screen component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero slider
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About us page
│   ├── Staffing.tsx    # Career opportunities
│   └── Contact.tsx     # Contact form and info
├── utils/              # Utility functions
│   └── emailConfig.ts  # EmailJS configuration
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and animations
```

## Key Features

### Contact Form Email Integration
- Sends form data directly to your email using EmailJS
- Form validation and error handling
- Success/error status messages
- Professional email templates

### Professional Design
- Modern gradient backgrounds
- Smooth hover animations and transitions
- Responsive grid layouts
- Professional typography using Inter font
- Custom loading animations

### Performance Optimized
- Lazy loading for images
- Optimized bundle size
- Fast loading times
- SEO-friendly structure

## Customization

### Colors and Branding
- Primary colors are defined in Tailwind classes (blue-600, blue-700)
- Logo and branding can be updated in components
- Images can be replaced with your own assets

### Content Updates
- All content is easily editable within the component files
- Service information in `Services.tsx`
- Company information in `About.tsx`
- Contact details throughout the site

### Email Configuration
- Update email addresses in `Contact.tsx` and `Footer.tsx`
- Configure EmailJS service for contact form functionality
- Customize email templates as needed

## Deployment

The project is ready for deployment to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Build the project with `npm run build` and deploy the `dist` folder.

## Support

For questions or support with this website, please contact the development team or refer to the documentation for the technologies used:
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs)