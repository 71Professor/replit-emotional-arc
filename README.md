# Metal Mood Packs - Website

A dark, cinematic web presence for **The Emotional Arc** - seven emotion-driven inspiration packs for heavy music.

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Complete styling with dark aesthetic
- `script.js` - Interactive features and animations

## Features

### Design
- **Dark, cinematic aesthetic** with refined typography
- **Grain texture overlay** for atmospheric depth
- **Pack-specific accent colors** that activate on hover
- **Smooth animations** throughout the experience
- **Fully responsive** design for all devices

### Typography
- **Cinzel** - Elegant serif for titles and headings
- **Crimson Pro** - Refined serif for body text
- Loaded from Google Fonts (no additional setup required)

### Interactions
- Smooth scrolling navigation
- Expandable pack details
- Scroll-triggered animations
- Hover effects on pack cards
- Keyboard navigation (ESC to close expanded sections)
- Active navigation highlighting

### Sections
1. **Hero** - Dramatic introduction with The Emotional Arc
2. **Introduction** - Philosophy and approach
3. **The Seven States** - All mood packs with expandable details
4. **Bundle** - Complete collection information
5. **Statement** - Closing message
6. **Footer** - Navigation and branding

## Deployment

### Option 1: Direct Upload
Simply upload all three files to your web server:
- `index.html`
- `styles.css`
- `script.js`

Keep them in the same directory. The HTML file references the CSS and JS files relatively.

### Option 2: Customize Domain
If deploying to a specific domain, no changes are needed. The site uses relative paths and will work anywhere.

## Customization

### Colors
Pack-specific accent colors are defined in CSS variables at the top of `styles.css`:

```css
--color-despair: #8b6f47;      /* Rust brown */
--color-fury: #a83232;         /* Deep red */
--color-triumph: #b8956e;      /* Faded gold */
--color-pagan: #6b8e5f;        /* Moss green */
--color-nihilistic: #7a8e9e;   /* Ice blue */
--color-cosmic: #6b5b8e;       /* Dark violet */
--color-apocalyptic: #7e9b7e;  /* Dusty green */
```

### Adding Shop/Purchase Links
Replace the `#` in the bundle CTA button (line 374 in index.html):

```html
<a href="#" class="btn btn-primary btn-large">Get The Emotional Arc</a>
```

Change to your Gumroad, Stripe, or shop URL:

```html
<a href="https://your-shop.com/product" class="btn btn-primary btn-large">Get The Emotional Arc</a>
```

### Typography
To change fonts, update the Google Fonts link in the `<head>` and the CSS variables in `styles.css`.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

All modern browsers with CSS Grid and Intersection Observer support.

## Performance

- Minimal external dependencies (only Google Fonts)
- Pure CSS animations (no heavy libraries)
- Optimized for fast loading
- Lazy-loaded scroll animations

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing
- Focus states on interactive elements

## Future Enhancements (Optional)

Consider adding:
- Individual pack pages for more detailed content
- Image placeholders for pack visuals
- Newsletter signup form
- Social media links
- Blog/news section
- Video backgrounds or trailers

## License

This website template is created for Metal Mood Packs. Customize as needed for your project.

## Technical Notes

### CSS Architecture
- CSS Custom Properties for theming
- Mobile-first responsive design
- BEM-inspired naming convention
- Organized by component sections

### JavaScript
- Vanilla JS (no frameworks required)
- Event delegation where appropriate
- Intersection Observer for scroll animations
- Minimal DOM manipulation

### Design Philosophy
- Refined minimalism over maximalism
- Atmosphere through restraint
- High contrast, low saturation
- Generous negative space
- Cinematic presentation

---

**Ready to deploy.** Upload to your web server and it's live.

For questions or customization help, refer to the inline comments in the code.
