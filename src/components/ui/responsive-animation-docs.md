# 🎯 Responsive Animation System Documentation

## 📱 Overview

The Responsive Animation System ensures that all animations, transitions, and visual effects work consistently across all devices and screen sizes. It automatically adapts animations based on device capabilities, user preferences, and performance considerations.

## 🚀 Key Features

### **Device Detection**
- **Mobile**: < 640px (optimized for touch)
- **Tablet**: 640px - 1024px (balanced performance)
- **Desktop**: > 1024px (full animation capabilities)

### **Accessibility Support**
- Respects `prefers-reduced-motion` user preference
- Touch device optimizations
- Performance-aware animations

### **Performance Optimization**
- Hardware acceleration with GPU transforms
- Optimized animation durations per device
- Reduced motion support

## 🎨 Available Animations

### **Base Animations**
```css
.animate-fade-in      /* Fade in from transparent */
.animate-slide-up     /* Slide up from bottom */
.animate-slide-down   /* Slide down from top */
.animate-slide-left   /* Slide in from right */
.animate-slide-right  /* Slide in from left */
.animate-scale-in     /* Scale from 0.8 to 1 */
.animate-rotate-in    /* Rotate and scale in */
.animate-bounce-gentle /* Gentle bouncing */
.animate-float        /* Floating motion */
.animate-pulse-glow   /* Pulsing glow effect */
```

### **Hover Effects**
```css
.hover:scale-105      /* Scale up on hover */
.hover:scale-110      /* Scale up more on hover */
.hover:rotate-3       /* Rotate 3 degrees */
.hover:rotate-6       /* Rotate 6 degrees */
.hover:translate-y-1  /* Lift up slightly */
.hover:translate-y-2  /* Lift up more */
.hover:shadow-lg      /* Add shadow on hover */
.hover:shadow-xl      /* Add larger shadow */
.hover:shadow-2xl     /* Add largest shadow */
```

## 🛠️ Usage Examples

### **1. Basic Responsive Container**
```tsx
import { ResponsiveContainer } from '@/components/ui/responsive-container';

<ResponsiveContainer
  animation="fade-in"
  delay={200}
  hover="scale"
  className="my-custom-class"
>
  <div>Your content here</div>
</ResponsiveContainer>
```

### **2. Responsive Card**
```tsx
import { ResponsiveCard } from '@/components/ui/responsive-container';

<ResponsiveCard
  padding={{ mobile: 'p-4', tablet: 'p-6', desktop: 'p-8' }}
  shadow="shadow-lg"
  hover={true}
>
  <div>Card content</div>
</ResponsiveCard>
```

### **3. Responsive Button**
```tsx
import { ResponsiveButton } from '@/components/ui/responsive-container';

<ResponsiveButton
  size="md"
  variant="default"
  responsive={true}
  onClick={() => console.log('Clicked!')}
>
  Click Me
</ResponsiveButton>
```

### **4. Responsive Grid**
```tsx
import { ResponsiveGrid } from '@/components/ui/responsive-container';

<ResponsiveGrid
  cols={{ mobile: 1, tablet: 2, desktop: 3 }}
  gap={{ mobile: 'gap-4', tablet: 'gap-6', desktop: 'gap-8' }}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ResponsiveGrid>
```

### **5. Responsive Text**
```tsx
import { ResponsiveText } from '@/components/ui/responsive-container';

<ResponsiveText
  size={{ mobile: 'text-sm', tablet: 'text-base', desktop: 'text-lg' }}
  weight="font-semibold"
  color="text-primary"
>
  Responsive text that scales with device
</ResponsiveText>
```

## 🎭 Using the Responsive Animation Hook

### **Basic Usage**
```tsx
import { useResponsiveAnimationContext } from '@/components/providers/responsive-animation-provider';

function MyComponent() {
  const {
    isMobile,
    isTablet,
    isDesktop,
    isTouch,
    prefersReducedMotion,
    getHoverClasses,
    getTouchClasses,
    getAnimationClasses,
  } = useResponsiveAnimationContext();

  return (
    <div className={getAnimationClasses('animate-fade-in')}>
      <button className={getHoverClasses('scale')}>
        Hover me!
      </button>
    </div>
  );
}
```

### **Conditional Animations**
```tsx
import { useConditionalAnimation } from '@/components/providers/responsive-animation-provider';

function MyComponent() {
  const animation = useConditionalAnimation(
    'animate-fade-in',      // Mobile
    'animate-slide-up',     // Tablet
    'animate-scale-in'      // Desktop
  );

  return (
    <div className={animation}>
      Content with device-specific animation
    </div>
  );
}
```

### **Responsive Delays**
```tsx
import { useResponsiveDelay } from '@/components/providers/responsive-animation-provider';

function MyComponent() {
  const delay = useResponsiveDelay(0, 100, 200);

  return (
    <div style={{ animationDelay: `${delay}ms` }} className="animate-fade-in">
      Content with responsive delay
    </div>
  );
}
```

### **Responsive Hover Effects**
```tsx
import { useResponsiveHover } from '@/components/providers/responsive-animation-provider';

function MyComponent() {
  const hoverClass = useResponsiveHover('scale-102', 'scale-105', 'scale-110');

  return (
    <div className={`transition-transform ${hoverClass}`}>
      Hover effect that adapts to device
    </div>
  );
}
```

## 📱 Device-Specific Optimizations

### **Mobile (< 640px)**
- Faster animations (400ms)
- Smaller hover effects (scale: 1.02)
- Touch-optimized interactions
- Reduced motion support

### **Tablet (640px - 1024px)**
- Medium animations (600ms)
- Balanced hover effects (scale: 1.05)
- Hybrid touch/mouse support
- Optimized performance

### **Desktop (> 1024px)**
- Full animations (800ms)
- Enhanced hover effects (scale: 1.1)
- Mouse-optimized interactions
- Full visual effects

## ♿ Accessibility Features

### **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up,
  .animate-scale-in {
    animation: none;
  }
}
```

### **Touch Device Optimizations**
```css
@media (hover: none) and (pointer: coarse) {
  .hover:scale-105:hover {
    transform: none;
  }
  
  .touch:scale-105:active {
    transform: scale(1.05);
  }
}
```

### **Focus States**
```css
.focus:scale-105:focus {
  transform: scale(1.05);
}

.focus:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
```

## 🚀 Performance Best Practices

### **1. Use Hardware Acceleration**
```css
.animate-element {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}
```

### **2. Optimize Animation Properties**
```css
/* Good: Only animate transform and opacity */
.animate-good {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Avoid: Animating layout properties */
.animate-bad {
  transition: width 0.3s ease, height 0.3s ease;
}
```

### **3. Use Intersection Observer**
```tsx
import { useIntersectionAnimation } from '@/hooks/use-responsive-animation';

function MyComponent() {
  const { ref, isVisible } = useIntersectionAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Content that animates when visible
    </div>
  );
}
```

## 🎨 Custom Animation Configuration

### **Custom Animation Config**
```tsx
const customConfig = {
  mobile: {
    duration: 300,
    delay: 50,
    scale: 1.01,
    translateY: -1,
    rotate: 1,
  },
  tablet: {
    duration: 500,
    delay: 100,
    scale: 1.03,
    translateY: -2,
    rotate: 2,
  },
  desktop: {
    duration: 700,
    delay: 150,
    scale: 1.05,
    translateY: -4,
    rotate: 3,
  },
};

<ResponsiveAnimationProvider customConfig={customConfig}>
  <YourApp />
</ResponsiveAnimationProvider>
```

### **Custom CSS Variables**
```css
:root {
  --animation-duration: 300ms;
  --animation-delay: 100ms;
  --hover-scale: 1.05;
  --hover-translate-y: -4px;
  --hover-rotate: 3deg;
}

.custom-animation {
  animation-duration: var(--animation-duration);
  animation-delay: var(--animation-delay);
}

.custom-hover:hover {
  transform: scale(var(--hover-scale)) translateY(var(--hover-translate-y)) rotate(var(--hover-rotate));
}
```

## 🔧 Troubleshooting

### **Common Issues**

1. **Animations not working on mobile**
   - Check if `prefers-reduced-motion` is enabled
   - Verify touch device detection
   - Ensure CSS classes are properly applied

2. **Performance issues**
   - Use `will-change` property sparingly
   - Avoid animating layout properties
   - Use `transform` and `opacity` for animations

3. **Hover effects not working on touch devices**
   - Use `:active` pseudo-class for touch
   - Implement touch-specific interactions
   - Test on actual mobile devices

### **Debug Mode**
```tsx
import { useResponsiveAnimationContext } from '@/components/providers/responsive-animation-provider';

function DebugComponent() {
  const context = useResponsiveAnimationContext();
  
  console.log('Device Info:', context.deviceInfo);
  console.log('Current Config:', context.getCurrentConfig());
  
  return <div>Check console for debug info</div>;
}
```

## 📚 Additional Resources

- [CSS Animations Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Reduced Motion Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Touch Device Detection](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)
- [Performance Optimization](https://web.dev/animations-guide/)

## 🎯 Quick Reference

### **Animation Classes**
```css
/* Fade animations */
.animate-fade-in
.animate-slide-up
.animate-slide-down
.animate-slide-left
.animate-slide-right

/* Transform animations */
.animate-scale-in
.animate-rotate-in

/* Motion animations */
.animate-bounce-gentle
.animate-float
.animate-pulse-glow
```

### **Hover Effects**
```css
/* Scale effects */
.hover:scale-105
.hover:scale-110

/* Movement effects */
.hover:translate-y-1
.hover:translate-y-2

/* Rotation effects */
.hover:rotate-3
.hover:rotate-6

/* Shadow effects */
.hover:shadow-lg
.hover:shadow-xl
.hover:shadow-2xl
```

### **Responsive Breakpoints**
```css
/* Mobile first approach */
.sm:  /* 640px and up */
.md:  /* 768px and up */
.lg:  /* 1024px and up */
.xl:  /* 1280px and up */
.2xl: /* 1536px and up */
```

This system ensures that your animations work beautifully on all devices while maintaining performance and accessibility standards! 🚀✨
