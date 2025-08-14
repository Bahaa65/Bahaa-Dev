# 🚀 Bahaa Gaballah Portfolio - Terminal Edition

A high-performance, SEO-optimized portfolio website built with Next.js 15, featuring a terminal aesthetic and advanced performance optimizations.

## ✨ Features

### 🎯 Core Features
- **Terminal Aesthetic**: Complete terminal-style UI with typewriter effects
- **Responsive Design**: Mobile-first approach with dark/light theme support
- **Interactive Elements**: 3D hover effects, particle systems, and animations
- **Performance Optimized**: 90+ Lighthouse scores with aggressive code splitting

### 🚀 Performance Optimizations
- **Bundle Optimization**: Tree shaking, code splitting, and dynamic imports
- **Image Optimization**: WebP/AVIF support with Next.js Image component
- **Font Optimization**: Preload with display swap for better performance
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1

### 🔍 SEO Features
- **Complete Metadata**: OpenGraph, Twitter Cards, and structured data
- **Dynamic Sitemap**: Auto-generated sitemap.xml and robots.txt
- **Performance Monitoring**: Vercel Analytics and Speed Insights
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### 🎨 Visual Effects
- **Three.js Particles**: Interactive particle background
- **Constellation Canvas**: Dynamic connection animations
- **Skills Radar**: D3.js interactive skills visualization
- **Framer Motion**: Smooth animations and transitions

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: App Router with React 19
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations

### UI Components
- **shadcn/ui**: Modern component library
- **Radix UI**: Accessible primitives
- **Lucide React**: Beautiful icons

### 3D & Graphics
- **Three.js**: 3D graphics and particles
- **React Three Fiber**: React renderer for Three.js
- **D3.js**: Data visualization

### Performance & Monitoring
- **Vercel Analytics**: User behavior tracking
- **Speed Insights**: Performance monitoring
- **Bundle Analyzer**: Bundle size optimization

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   ├── experience/        # Work experience
│   ├── achievements/      # Accomplishments
│   ├── contact/           # Contact form
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── terminal/         # Terminal-themed components
│   ├── visual/           # 3D and visual effects
│   ├── sections/         # Page sections
│   └── motion/           # Animation components
├── data/                 # Static data
├── lib/                  # Utilities and helpers
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bahaa65/bahaa-portfolio.git
   cd bahaa-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

### Environment Variables

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=your_verified_email
CONTACT_TO=your_email

# GitHub (Optional)
GITHUB_TOKEN=your_github_token
```

## 📊 Performance Monitoring

### Bundle Analysis
```bash
npm run analyze        # Analyze bundle size
npm run build:analyze  # Build with bundle analysis
```

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms  
- **CLS (Cumulative Layout Shift)**: <0.1

### Performance Tools
- Vercel Analytics integration
- Speed Insights monitoring
- Custom performance tracking
- Bundle size optimization

## 🎨 Customization

### Theme Colors
The portfolio uses a terminal-inspired color scheme:
- **Primary**: Emerald/Green (#10b981)
- **Secondary**: Green variations
- **Background**: White/Black with transparency

### Animations
- **Typewriter Effect**: Configurable speed and delay
- **3D Hover**: Tilt effects on project cards
- **Particle Systems**: Interactive backgrounds
- **Smooth Transitions**: Framer Motion animations

### Content
- **Skills**: Edit `src/data/skills.ts`
- **Projects**: Update `src/data/featured-projects.ts`
- **Experience**: Modify `src/data/experience.ts`
- **Achievements**: Edit `src/data/achievements.ts`

## 🔧 Development

### Code Quality
- **ESLint**: Strict TypeScript rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Full type safety

### Performance Best Practices
- **Dynamic Imports**: Lazy load heavy components
- **Image Optimization**: WebP/AVIF with placeholders
- **Code Splitting**: Route-based and component-based
- **Tree Shaking**: Remove unused code

### SEO Best Practices
- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Complete OpenGraph implementation
- **Structured Data**: JSON-LD schemas
- **Sitemap**: Dynamic generation

## 📱 Responsive Design

### Breakpoints
- **Mobile**: <640px
- **Tablet**: 640px - 1024px
- **Desktop**: >1024px

### Mobile Optimizations
- Touch-friendly interactions
- Optimized images for mobile
- Reduced animations on mobile
- Responsive typography

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Static export support
- **AWS**: S3 + CloudFront
- **Docker**: Containerized deployment

## 📈 Analytics & Monitoring

### Vercel Analytics
- Page views and user behavior
- Performance metrics
- Real-time insights

### Custom Tracking
- Component render times
- User interactions
- Performance metrics
- Error boundaries

## 🔒 Security

### Best Practices
- Environment variables for secrets
- API route protection
- CORS configuration
- Input validation

### Dependencies
- Regular security updates
- Dependency scanning
- Minimal attack surface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bahaa Mohamed Akl Gaballah**
- Software Engineer
- Full Stack Developer
- React/Next.js Specialist
- Performance Enthusiast
- USAID Scholar at Cairo University
- Class of 2026

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful components
- **Framer Motion** for smooth animations
- **Three.js** for 3D graphics
- **Next.js** team for the amazing framework

## 📞 Contact

- **Email**: [bahaamohammed955@gmail.com]
- **LinkedIn**: [Bahaa Akl](https://www.linkedin.com/in/bahaa-akl)
- **GitHub**: [Bahaa65](https://github.com/Bahaa65)
- **Phone**: [+201205085742]
- **Portfolio**: [https://bahaagaballah.com]

---

⭐ **Star this repository if you found it helpful!**
