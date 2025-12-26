# 📸 Image Replacement Guide

This guide helps you easily replace placeholder images with your own photos.

## 🖼️ Image Locations

All images are stored in the `src/assets/` folder:

```
src/assets/
├── hero-bg.jpg          - Original Stock Hero background
├── profile-placeholder.jpg - Profile photo placeholder
└── wellness-bg.jpg      - Original Stock Wellness background

public/
├── hero-abstract.png    - Generated Abstract Hero Background
├── texture-bg.png       - Generated Subtle Texture for Services
├── teal-abstract.png    - Generated Teal Abstract for Info Strip
├── growth-img.png       - Generated Growth/Healing Concept
└── mahjabeen-real.png   - Real Profile Photo
```

## 🔄 How to Replace Images

### Method 1: Direct File Replacement (Easiest)
1. Navigate to `src/assets/` folder
2. Replace the existing image file with your new image
3. **Keep the same filename** (e.g., replace `hero-bg.jpg` with your image, but name it `hero-bg.jpg`)
4. The website will automatically use your new image

### Method 2: Use Different Filenames
1. Add your new image to `src/assets/`
2. Update the image paths in the CSS files:

**For Hero Background:**
- File: `src/pages/Home.css`
- Line: Look for `background-image: url('/src/assets/hero-bg.jpg')`
- Replace with: `background-image: url('/src/assets/YOUR-IMAGE.jpg')`

**For Profile Photo:**
- File: `src/pages/Home.jsx`
- Line: Look for the `<img>` tag in the intro section
- Replace the `src` attribute

## 📐 Recommended Image Sizes

| Image Purpose | Recommended Size | Aspect Ratio | Format |
|--------------|------------------|--------------|--------|
| Hero Background | 1920 x 1080px | 16:9 | JPG/WebP |
| Profile Photo | 800 x 1000px | 4:5 | JPG/PNG |
| Section Backgrounds | 1200 x 800px | 3:2 | JPG/WebP |

## 🎨 Image Guidelines for Psychology Website

### Hero Background
- **Theme**: Calming, professional, welcoming
- **Colors**: Soft greens, beiges, blues
- **Avoid**: Busy patterns, harsh colors, text overlays
- **Examples**: Nature scenes, abstract gradients, peaceful office settings

### Profile Photo
- **Theme**: Professional headshot
- **Background**: Neutral or soft colors
- **Lighting**: Well-lit, professional
- **Expression**: Warm, approachable, confident

### Section Backgrounds
- **Theme**: Supportive, healing imagery
- **Style**: Subtle, not distracting from text
- **Opacity**: Often used with overlay (50-70% opacity)

## 🔗 Free Stock Photo Resources

If you need more images:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

Search terms: "therapy", "wellness", "calm office", "professional counselor", "peaceful nature"

## ⚡ Quick Tips

1. **Optimize images** before uploading:
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target file size: < 500KB for backgrounds, < 200KB for portraits

2. **Test on mobile**: Always check how images look on phone screens

3. **Accessibility**: Use descriptive alt text in the HTML for all images

4. **Consistency**: Keep a consistent color palette across all images
