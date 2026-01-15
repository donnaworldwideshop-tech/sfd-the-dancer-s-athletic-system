# SFD - Strength For Dancers
## Shopify Horizon Theme

This is the Shopify Liquid-based theme for SFD (Strength For Dancers), converted from the LOVABLE AI React application.

### 📁 Directory Structure

```
shopify/
├── assets/              # CSS, JS, and static files
│   ├── theme.css       # Main theme styles
│   ├── custom.css      # Custom styles and overrides
│   └── theme.js        # JavaScript functionality
├── config/             # Theme configuration
│   └── settings_data.json
├── layout/             # Layout templates
│   └── theme.liquid    # Main layout file
├── sections/           # Reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-section.liquid
│   ├── gap-section.liquid
│   ├── method-section.liquid
│   ├── application-section.liquid
│   ├── testimonials-section.liquid
│   ├── studios-section.liquid
│   ├── cta-section.liquid
│   └── main-page.liquid
├── snippets/           # Reusable code snippets
│   ├── meta-tags.liquid
│   └── social-meta-tags.liquid
└── templates/          # Page templates
    ├── index.json      # Homepage
    ├── page.about.json # About page
    └── page.product.json # Product page
```

### 🚀 Installation Instructions

#### Method 1: Manual Upload (ZIP File)

1. **Create a ZIP file:**
   ```bash
   cd shopify
   zip -r sfd-theme.zip assets config layout sections snippets templates
   ```

2. **Upload to Shopify:**
   - Go to your Shopify Admin
   - Navigate to **Online Store > Themes**
   - Click **Add theme** > **Upload ZIP file**
   - Select the `sfd-theme.zip` file
   - Wait for upload to complete

3. **Publish the theme:**
   - Click **Actions** > **Publish** on the uploaded theme

#### Method 2: Theme Kit (Recommended for Development)

1. **Install Shopify Theme Kit:**
   ```bash
   brew install themekit  # macOS
   # or download from: https://shopify.github.io/themekit/
   ```

2. **Configure Theme Kit:**
   ```bash
   cd shopify
   theme configure --password=[your-password] --store=[your-store.myshopify.com] --themeid=[theme-id]
   ```

3. **Deploy the theme:**
   ```bash
   theme deploy
   ```

4. **Watch for changes (development):**
   ```bash
   theme watch
   ```

### 🎨 Theme Features

#### RTL Support
- Full right-to-left (RTL) layout support for Hebrew text
- Proper text alignment and direction
- Mobile-optimized RTL navigation

#### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)
- Fully responsive components
- Touch-friendly mobile menu

#### Customizable Sections
All sections are fully editable through Shopify's theme editor:
- **Header**: Logo, navigation menu, custom links
- **Hero Section**: Background image, heading, subheading, scroll indicator
- **Method Section**: Title, description, feature blocks
- **Testimonials**: Customer reviews with images and quotes
- **Studios Section**: Partner logos with links
- **CTA Section**: Call-to-action buttons and text
- **Footer**: Contact info, social links, navigation

#### Performance Optimized
- Lazy loading for images
- Minimal CSS and JavaScript
- Optimized animations
- Efficient Liquid code

### 📝 Customization Guide

#### Adding Images

1. **Upload images to Shopify:**
   - Go to **Settings > Files**
   - Upload your images

2. **Set images in sections:**
   - Go to **Online Store > Themes > Customize**
   - Select the section you want to edit
   - Click on image pickers to select uploaded images

#### Editing Colors

Colors are defined in `assets/theme.css` using CSS variables:

```css
:root {
  --color-background: #fffaf3;  /* Cream/off-white */
  --color-foreground: #000000;  /* Pure black */
  --color-primary: #000000;     /* Primary button color */
  --color-secondary: #555657;   /* Gray */
}
```

To change colors, edit these variables in the CSS file.

#### Creating Navigation Menus

1. **In Shopify Admin:**
   - Go to **Online Store > Navigation**
   - Create or edit menus

2. **Assign to header:**
   - Go to **Online Store > Themes > Customize**
   - Click on **Header** section
   - Select your menu from the dropdown

#### Adding Content

1. **Homepage:**
   - Customize through **Online Store > Themes > Customize**
   - Edit each section individually
   - Reorder sections by dragging

2. **About Page:**
   - Create a new page: **Online Store > Pages > Add page**
   - Set template to "page.about"
   - Add content using the rich text editor

3. **Product Page:**
   - Create a new page with template "page.product"
   - Add product information and images

### 🔧 Technical Details

#### Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

#### Accessibility
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader optimized
- Semantic HTML structure
- Skip to content link

#### RTL Languages Supported
- Hebrew (עברית)
- Arabic (العربية)
- Can be extended for other RTL languages

### 📱 Mobile Optimization

The theme is fully optimized for mobile devices:
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading times
- Proper viewport configuration
- Mobile-specific styles

### 🎯 SEO Features

- Semantic HTML5 structure
- Open Graph meta tags
- Twitter Card support
- Customizable page titles and descriptions
- Alt text support for images
- Structured data ready

### 🛠️ Maintenance

#### Updating Content
1. Use Shopify's theme editor for visual changes
2. Edit Liquid files for structural changes
3. Modify CSS files for styling updates
4. Update JS files for functionality changes

#### Backup
Always create a backup before making changes:
- In Shopify Admin: **Online Store > Themes > Actions > Download**

### 📞 Support

For issues or questions about the theme:
- Check Shopify's theme documentation: https://shopify.dev/themes
- Review Liquid documentation: https://shopify.dev/api/liquid
- Contact: contact@sfd.co.il

### 📄 License

© 2024 SFD - Strength For Dancers. All rights reserved.

### 🎨 Brand Guidelines

**Colors:**
- Primary Black: #000000
- Secondary Gray: #555657
- Background Cream: #fffaf3

**Typography:**
- Font Family: Heebo (Google Fonts)
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)

**Logo:**
- Use the SVG version for best quality
- Maintain proper spacing around logo
- Use inverted version on dark backgrounds

### ⚡ Performance Tips

1. **Optimize images before upload:**
   - Use WebP format when possible
   - Compress images (recommended: 80-90% quality)
   - Resize to appropriate dimensions

2. **Minimize custom code:**
   - Keep CSS and JS files lean
   - Remove unused code
   - Use Shopify's built-in features when possible

3. **Test regularly:**
   - Use Lighthouse for performance audits
   - Test on real mobile devices
   - Check loading times

### 🔄 Version History

**Version 1.0.0** (Current)
- Initial conversion from React to Shopify Liquid
- Full RTL support
- All sections converted and editable
- Mobile responsive
- SEO optimized

---

**Built with Shopify Theme OS 2.0**
