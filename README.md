# Psychology Consultancy Website - Mahjabeen Qazi, MC, LPC

A professional, modern website for psychology consultation services built with React and Vite.

## 🚀 Quick Start

### Running Locally
```bash
npm install
npm run dev
```
Visit `http://localhost:5173/`

### Building for Production
```bash
npm run build
```

## 📝 Customization Guide

### 1. Replace Images
See **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** for detailed instructions on replacing images.

**Quick Summary:**
- Hero background: `src/assets/hero-bg.jpg` (1920x1080)
- Profile photo: `src/assets/profile-placeholder.jpg` (800x1000)
- Wellness background: `src/assets/wellness-bg.jpg` (1200x800)

### 2. Update Contact Information

**Email & Phone:**
Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Search for: `contact@mahjabeenqazi.com`
- Replace with: Your actual email
- Search for: `(555) 123-4567`
- Replace with: Your actual phone

**Calendly Booking Link:**
Edit all files containing `https://calendly.com/`
- `src/components/Navbar.jsx`
- `src/pages/Home.jsx`
- `src/pages/Contact.jsx`
- Replace with: Your actual Calendly URL

### 3. Update Bio & Content

**About Page:**
- File: `src/pages/About.jsx`
- Update philosophy, background, specializations

**Home Page:**
- File: `src/pages/Home.jsx`
- Update hero text, intro content, services preview

**Services Page:**
- File: `src/pages/Services.jsx`
- Update service descriptions, insurance list

### 4. Customize Colors

**Global Colors:**
Edit `src/index.css` - CSS variables at the top:
```css
--color-primary: #4A5D5E;      /* Main teal/green */
--color-accent: #B5838D;        /* Pink accent */
--color-secondary: #D0CFC0;     /* Beige */
```

## 🎨 Design Features

✅ Responsive (mobile-friendly)
✅ Smooth animations
✅ Professional color palette
✅ SEO optimized
✅ Accessibility friendly
✅ Premium typography (Google Fonts)

## 📄 Pages

- **Home** (`/`) - Hero, about preview, services, CTA
- **About** (`/about`) - Full bio and credentials  
- **Services** (`/services`) - Therapy offerings and insurance
- **Contact** (`/contact`) - Contact form and booking

## 🔧 Tech Stack

- **React** 18
- **Vite** 7.2
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Dependencies

```json
{
  "react-router-dom": "Latest",
  "lucide-react": "Latest",
  "framer-motion": "Latest"
}
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Option 3: GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🔐 Next Steps for Production

### High Priority
- [ ] Replace all placeholder images with professional photos
- [ ] Update Calendly link with actual booking URL
- [ ] Update contact information (email, phone)
- [ ] Connect contact form to backend (FormSpree/Netlify Forms)
- [ ] Add Google Analytics tracking code

### Optional Enhancements
- [ ] Add testimonials section
- [ ] Integrate payment system (Stripe/Square/SimplePractice)
- [ ] Add blog/resources section
- [ ] Set up HIPAA-compliant form handling
- [ ] Add live chat widget (optional)
- [ ] Create FAQ page

## 📱 Payment Integration Options

**For accepting payments:**
1. **SimplePractice** - Built for therapists, HIPAA compliant
2. **Stripe** - General payment processing
3. **Square** - Simple integration
4. **IvyPay** - Healthcare-specific

## 🛡️ HIPAA Compliance Notes

**Important:** If collecting any protected health information (PHI):
- Use HIPAA-compliant form services (JotForm HIPAA, SimplePractice, etc.)
- Ensure SSL/TLS encryption (automatic with Netlify/Vercel)
- Add privacy policy page
- Consider BAA (Business Associate Agreement) with service providers

## 📞 Support

For questions or customization help, refer to:
- [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) - Image replacement guide
- Component files have comments for easy customization

## 📄 License

This website template is for Mahjabeen Qazi's private use.

---

**Built with ❤️ for Mahjabeen Qazi Psychology Consultancy**
