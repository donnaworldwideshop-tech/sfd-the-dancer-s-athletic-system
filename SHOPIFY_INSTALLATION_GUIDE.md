# SFD - Shopify Theme Conversion
## Complete Installation & Upload Guide

This guide will help you upload the SFD Horizon theme to Shopify.

---

## 📦 What's Included

The Shopify theme has been created from the original React/LOVABLE AI code with the following structure:

```
shopify/
├── assets/          → CSS, JavaScript, and images
├── config/          → Theme configuration and settings
├── layout/          → Main theme layout (theme.liquid)
├── locales/         → Language files (English & Hebrew)
├── sections/        → Reusable Liquid sections
├── snippets/        → Small reusable code blocks
└── templates/       → Page templates (JSON format)
```

---

## 🚀 Quick Upload Instructions

### Option 1: Using the Build Script (Recommended)

1. **Run the build script:**
   ```bash
   ./build-shopify-theme.sh
   ```

2. **This creates:** `sfd-horizon-theme.zip` in the root directory

3. **Upload to Shopify:**
   - Log in to your Shopify Admin
   - Go to **Online Store** → **Themes**
   - Click **Add theme** → **Upload ZIP file**
   - Select `sfd-horizon-theme.zip`
   - Wait for upload to complete
   - Click **Publish** to make it live

### Option 2: Manual ZIP Creation

If the script doesn't work, create the ZIP manually:

1. **Navigate to the shopify directory:**
   ```bash
   cd shopify
   ```

2. **Create ZIP file:**
   ```bash
   zip -r sfd-horizon-theme.zip assets config layout locales sections snippets templates
   ```

3. **Upload as described above**

---

## 📝 Post-Installation Setup

### 1. Configure Header & Footer

**Set Logo:**
1. Go to **Customize** → Click on **Header** section
2. Upload your logo in the "Logo" field
3. Save changes

**Configure Navigation:**
1. Go to **Online Store** → **Navigation**
2. Create/edit the "Main menu"
3. Add links:
   - Home → `/`
   - About → `/pages/about`
   - Product → `/pages/product`
   - Contact → `#contact` (on homepage)

### 2. Create Pages

**About Page:**
1. Go to **Online Store** → **Pages** → **Add page**
2. Title: "About" (אודות)
3. Template: `page.about`
4. Add your content
5. Save

**Product Page:**
1. Create another page
2. Title: "Product" (ערכת האימון)
3. Template: `page.product`
4. Add product information
5. Save

### 3. Upload Images

**Required Images:**
- Hero background image (recommended size: 2000x1200px)
- Studio logos (4 partner studios)
- Testimonial photos (4 customer photos)
- Product kit image
- Footer logo

**Upload Process:**
1. Go to **Settings** → **Files**
2. Upload all images
3. In theme customizer, select uploaded images for each section

### 4. Configure Homepage Sections

Go to **Online Store** → **Themes** → **Customize**

**Hero Section:**
- Upload background image
- Set heading: "רקדן הוא ספורטאי."
- Set subheading: "הגוף של הרקדן דורש אימון מקצועי."

**Studios Section:**
- Add 4 studio logo blocks
- Upload each logo
- Add studio names and links

**Method Section:**
- Add feature blocks
- Set titles and descriptions

**Testimonials Section:**
- Add testimonial blocks
- Upload customer photos
- Add quotes and names

**CTA Section:**
- Set button text and links
- Configure call-to-action message

---

## 🎨 Customization

### Change Colors

Edit `shopify/assets/theme.css` and modify CSS variables:

```css
:root {
  --color-background: #fffaf3;  /* Background cream */
  --color-foreground: #000000;  /* Text black */
  --color-primary: #000000;     /* Primary black */
  --color-secondary: #555657;   /* Secondary gray */
}
```

### Change Fonts

The theme uses Heebo font. To change:

1. Edit `shopify/layout/theme.liquid`
2. Find the Google Fonts link
3. Replace with your preferred font
4. Update CSS variable in `theme.css`

### Add Custom Styles

Add custom CSS to `shopify/assets/custom.css`

---

## 📱 Mobile & RTL Testing

### Mobile Testing
1. Use Shopify's mobile preview in the theme editor
2. Test on real devices (iPhone, Android)
3. Check all sections scroll and display correctly

### RTL Testing
1. All Hebrew text should align right
2. Navigation should work in RTL
3. Animations should flow correctly

---

## ⚠️ Important Notes

### Video Files
- Video files (`.mp4`) are excluded from the theme ZIP (too large)
- Upload videos separately:
  1. Go to **Settings** → **Files**
  2. Upload video files
  3. In theme code, update video URLs

### Performance Optimization
- Compress images before upload (use tools like TinyPNG)
- Recommended image formats: WebP or optimized JPG
- Keep images under 500KB each

### Asset Limitations
- Individual asset file size limit: 5MB
- Total theme size limit: 50MB
- Video assets should be hosted externally or in Files section

---

## 🔧 Troubleshooting

### Theme Won't Upload
- **Check ZIP structure:** Ensure folders are at root level
- **Check file sizes:** Remove any files over 5MB
- **Check file types:** Only allowed file types (liquid, css, js, images)

### Images Not Showing
- Verify images are uploaded to **Settings** → **Files**
- Check image URLs in section settings
- Ensure correct image picker selections

### Sections Not Appearing
- Verify JSON template includes section
- Check section is not hidden
- Look for Liquid syntax errors in browser console

### RTL Issues
- Ensure `dir="rtl"` is present on sections
- Check CSS for proper RTL support
- Test with Hebrew content

---

## 📞 Support Resources

### Shopify Documentation
- Theme development: https://shopify.dev/themes
- Liquid reference: https://shopify.dev/api/liquid
- Theme editor: https://help.shopify.com/en/manual/online-store/themes/customizing-themes

### Theme Support
- Email: contact@sfd.co.il
- Review shopify/README.md for detailed documentation

---

## ✅ Checklist

Before going live, ensure:

- [ ] Theme uploaded and published
- [ ] Logo uploaded and set in header
- [ ] Navigation menu configured
- [ ] About page created and content added
- [ ] Product page created and content added
- [ ] All hero images uploaded
- [ ] Studio logos uploaded (4)
- [ ] Testimonial photos uploaded (4)
- [ ] Footer settings configured
- [ ] Social media links added
- [ ] Tested on mobile devices
- [ ] Tested RTL layout with Hebrew text
- [ ] All internal links working
- [ ] Contact form tested (if applicable)
- [ ] Checkout flow tested
- [ ] Performance tested (Lighthouse score)

---

## 🎉 Launch Day

Once everything is configured and tested:

1. **Final Review:**
   - Check all pages on desktop and mobile
   - Verify all links work
   - Test checkout process
   - Check loading speed

2. **Go Live:**
   - Click **Publish** on your theme
   - Monitor for any issues
   - Have a backup plan (keep old theme)

3. **Post-Launch:**
   - Monitor analytics
   - Collect user feedback
   - Make iterative improvements

---

**Built with ❤️ for SFD - Strength For Dancers**

Version 1.0.0 | Shopify Theme OS 2.0
