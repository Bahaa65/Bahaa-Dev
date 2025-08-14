import { useState, useEffect, useCallback } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  screenWidth: number;
  screenHeight: number;
  orientation: 'portrait' | 'landscape';
  prefersReducedMotion: boolean;
}

interface AnimationConfig {
  mobile: {
    duration: number;
    delay: number;
    scale: number;
    translateY: number;
    rotate: number;
  };
  tablet: {
    duration: number;
    delay: number;
    scale: number;
    translateY: number;
    rotate: number;
  };
  desktop: {
    duration: number;
    delay: number;
    scale: number;
    translateY: number;
    rotate: number;
  };
}

const defaultAnimationConfig: AnimationConfig = {
  mobile: {
    duration: 400,
    delay: 100,
    scale: 1.02,
    translateY: -2,
    rotate: 2,
  },
  tablet: {
    duration: 600,
    delay: 150,
    scale: 1.05,
    translateY: -4,
    rotate: 3,
  },
  desktop: {
    duration: 800,
    delay: 200,
    scale: 1.1,
    translateY: -8,
    rotate: 6,
  },
};

export function useResponsiveAnimation(customConfig?: Partial<AnimationConfig>) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouch: false,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'portrait',
    prefersReducedMotion: false,
  });

  const config = { ...defaultAnimationConfig, ...customConfig };

  // Detect device type and capabilities
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;
      const isDesktop = width >= 1024;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const orientation = width > height ? 'landscape' : 'portrait';
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        screenWidth: width,
        screenHeight: height,
        orientation,
        prefersReducedMotion,
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    window.addEventListener('orientationchange', detectDevice);

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('orientationchange', detectDevice);
    };
  }, []);

  // Get current device config
  const getCurrentConfig = useCallback(() => {
    if (deviceInfo.isMobile) return config.mobile;
    if (deviceInfo.isTablet) return config.tablet;
    return config.desktop;
  }, [deviceInfo, config]);

  // Generate CSS variables for animations
  const getAnimationStyles = useCallback(() => {
    const currentConfig = getCurrentConfig();
    
    if (deviceInfo.prefersReducedMotion) {
      return {
        '--animation-duration': '0ms',
        '--animation-delay': '0ms',
        '--hover-scale': '1',
        '--hover-translate-y': '0px',
        '--hover-rotate': '0deg',
      };
    }

    return {
      '--animation-duration': `${currentConfig.duration}ms`,
      '--animation-delay': `${currentConfig.delay}ms`,
      '--hover-scale': currentConfig.scale.toString(),
      '--hover-translate-y': `${currentConfig.translateY}px`,
      '--hover-rotate': `${currentConfig.rotate}deg`,
    };
  }, [deviceInfo, getCurrentConfig]);

  // Get responsive animation classes
  const getAnimationClasses = useCallback((baseClass: string) => {
    if (deviceInfo.prefersReducedMotion) {
      return `${baseClass} motion-reduce:animate-none`;
    }

    const currentConfig = getCurrentConfig();
    
    return `${baseClass} transition-all duration-${currentConfig.duration}ms`;
  }, [deviceInfo, getCurrentConfig]);

  // Get hover animation classes
  const getHoverClasses = useCallback((type: 'scale' | 'lift' | 'rotate' | 'glow') => {
    if (deviceInfo.prefersReducedMotion || deviceInfo.isTouch) {
      return '';
    }

    const currentConfig = getCurrentConfig();
    
    switch (type) {
      case 'scale':
        return `hover:scale-[${currentConfig.scale}] transition-transform`;
      case 'lift':
        return `hover:translate-y-[${currentConfig.translateY}px] transition-transform`;
      case 'rotate':
        return `hover:rotate-[${currentConfig.rotate}deg] transition-transform`;
      case 'glow':
        return 'hover:shadow-lg hover:shadow-emerald-500/25 transition-all';
      default:
        return '';
    }
  }, [deviceInfo, getCurrentConfig]);

  // Get touch-friendly animation classes
  const getTouchClasses = useCallback(() => {
    if (!deviceInfo.isTouch) return '';
    
    return 'active:scale-95 transition-transform touch-manipulation';
  }, [deviceInfo.isTouch]);

  // Get responsive spacing classes
  const getSpacingClasses = useCallback((type: 'padding' | 'margin' | 'gap') => {
    const base = type === 'padding' ? 'p' : type === 'margin' ? 'm' : 'gap';
    
    return {
      mobile: `${base}-4`,
      tablet: `sm:${base}-6`,
      desktop: `lg:${base}-8`,
    };
  }, []);

  // Get responsive text classes
  const getTextClasses = useCallback((sizes: { mobile: string; tablet: string; desktop: string }) => {
    return `${sizes.mobile} sm:${sizes.tablet} lg:${sizes.desktop}`;
  }, []);

  // Get responsive grid classes
  const getGridClasses = useCallback((cols: { mobile: number; tablet: number; desktop: number }) => {
    return `grid-cols-${cols.mobile} sm:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop}`;
  }, []);

  // Check if animation should be enabled
  const shouldAnimate = useCallback(() => {
    return !deviceInfo.prefersReducedMotion;
  }, [deviceInfo.prefersReducedMotion]);

  // Get performance-optimized animation settings
  const getPerformanceSettings = useCallback(() => {
    const currentConfig = getCurrentConfig();
    
    return {
      willChange: shouldAnimate() ? 'transform, opacity' : 'auto',
      backfaceVisibility: 'hidden' as const,
      perspective: '1000px',
      transformStyle: 'preserve-3d' as const,
      transitionDuration: `${currentConfig.duration}ms`,
      transitionDelay: `${currentConfig.delay}ms`,
    };
  }, [getCurrentConfig, shouldAnimate]);

  return {
    deviceInfo,
    getCurrentConfig,
    getAnimationStyles,
    getAnimationClasses,
    getHoverClasses,
    getTouchClasses,
    getSpacingClasses,
    getTextClasses,
    getGridClasses,
    shouldAnimate,
    getPerformanceSettings,
    
    // Utility functions
    isMobile: deviceInfo.isMobile,
    isTablet: deviceInfo.isTablet,
    isDesktop: deviceInfo.isDesktop,
    isTouch: deviceInfo.isTouch,
    prefersReducedMotion: deviceInfo.prefersReducedMotion,
  };
}

// Hook for intersection observer animations
export function useIntersectionAnimation(
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -50px 0px'
) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, rootMargin]);

  return { ref: setRef, isVisible };
}

// Hook for scroll-based animations
export function useScrollAnimation(offset: number = 100) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > offset;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return { isScrolled };
}

// Hook for device orientation changes
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
    };

    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);

    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return { orientation, isPortrait: orientation === 'portrait', isLandscape: orientation === 'landscape' };
}
