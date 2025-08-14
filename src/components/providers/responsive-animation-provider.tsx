'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useResponsiveAnimation } from '@/hooks/use-responsive-animation';

interface ResponsiveAnimationContextType {
  deviceInfo: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isTouch: boolean;
    screenWidth: number;
    screenHeight: number;
    orientation: 'portrait' | 'landscape';
    prefersReducedMotion: boolean;
  };
  getCurrentConfig: () => any;
  getAnimationStyles: () => any;
  getAnimationClasses: (baseClass: string) => string;
  getHoverClasses: (type: 'scale' | 'lift' | 'rotate' | 'glow') => string;
  getTouchClasses: () => string;
  getSpacingClasses: (type: 'padding' | 'margin' | 'gap') => any;
  getTextClasses: (sizes: { mobile: string; tablet: string; desktop: string }) => string;
  getGridClasses: (cols: { mobile: number; tablet: number; desktop: number }) => string;
  shouldAnimate: () => boolean;
  getPerformanceSettings: () => any;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  prefersReducedMotion: boolean;
}

const ResponsiveAnimationContext = createContext<ResponsiveAnimationContextType | undefined>(undefined);

interface ResponsiveAnimationProviderProps {
  children: ReactNode;
  customConfig?: any;
}

export function ResponsiveAnimationProvider({ 
  children, 
  customConfig 
}: ResponsiveAnimationProviderProps) {
  const responsiveAnimation = useResponsiveAnimation(customConfig);

  return (
    <ResponsiveAnimationContext.Provider value={responsiveAnimation}>
      {children}
    </ResponsiveAnimationContext.Provider>
  );
}

export function useResponsiveAnimationContext() {
  const context = useContext(ResponsiveAnimationContext);
  if (context === undefined) {
    throw new Error('useResponsiveAnimationContext must be used within a ResponsiveAnimationProvider');
  }
  return context;
}

// Higher-order component for responsive animations
export function withResponsiveAnimation<P extends object>(
  Component: React.ComponentType<P>,
  animationConfig?: any
) {
  return function ResponsiveAnimationWrapper(props: P) {
    return (
      <ResponsiveAnimationProvider customConfig={animationConfig}>
        <Component {...props} />
      </ResponsiveAnimationProvider>
    );
  };
}

// Hook for conditional animations based on device
export function useConditionalAnimation(
  mobileAnimation: string,
  tabletAnimation: string,
  desktopAnimation: string
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileAnimation;
  if (isTablet) return tabletAnimation;
  if (isDesktop) return desktopAnimation;
  
  return desktopAnimation; // fallback
}

// Hook for responsive animation delays
export function useResponsiveDelay(
  mobileDelay: number = 0,
  tabletDelay: number = 100,
  desktopDelay: number = 200
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileDelay;
  if (isTablet) return tabletDelay;
  if (isDesktop) return desktopDelay;
  
  return desktopDelay; // fallback
}

// Hook for responsive animation durations
export function useResponsiveDuration(
  mobileDuration: number = 400,
  tabletDuration: number = 600,
  desktopDuration: number = 800
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileDuration;
  if (isTablet) return tabletDuration;
  if (isDesktop) return desktopDuration;
  
  return desktopDuration; // fallback
}

// Hook for responsive hover effects
export function useResponsiveHover(
  mobileHover: string = 'scale-102',
  tabletHover: string = 'scale-105',
  desktopHover: string = 'scale-110'
) {
  const { isMobile, isTablet, isDesktop, isTouch, prefersReducedMotion } = useResponsiveAnimationContext();
  
  if (prefersReducedMotion || isTouch) return '';
  
  if (isMobile) return `hover:${mobileHover}`;
  if (isTablet) return `hover:${tabletHover}`;
  if (isDesktop) return `hover:${desktopHover}`;
  
  return `hover:${desktopHover}`; // fallback
}

// Hook for responsive spacing
export function useResponsiveSpacing(
  mobileSpacing: string = '4',
  tabletSpacing: string = '6',
  desktopSpacing: string = '8'
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileSpacing;
  if (isTablet) return tabletSpacing;
  if (isDesktop) return desktopSpacing;
  
  return desktopSpacing; // fallback
}

// Hook for responsive text sizes
export function useResponsiveText(
  mobileSize: string = 'sm',
  tabletSize: string = 'base',
  desktopSize: string = 'lg'
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return `text-${mobileSize}`;
  if (isTablet) return `text-${tabletSize}`;
  if (isDesktop) return `text-${desktopSize}`;
  
  return `text-${desktopSize}`; // fallback
}

// Hook for responsive grid columns
export function useResponsiveGrid(
  mobileCols: number = 1,
  tabletCols: number = 2,
  desktopCols: number = 3
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileCols;
  if (isTablet) return tabletCols;
  if (isDesktop) return desktopCols;
  
  return desktopCols; // fallback
}

// Hook for responsive shadows
export function useResponsiveShadow(
  mobileShadow: string = 'shadow-md',
  tabletShadow: string = 'shadow-lg',
  desktopShadow: string = 'shadow-xl'
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileShadow;
  if (isTablet) return tabletShadow;
  if (isDesktop) return desktopShadow;
  
  return desktopShadow; // fallback
}

// Hook for responsive borders
export function useResponsiveBorder(
  mobileBorder: string = 'border',
  tabletBorder: string = 'border-2',
  desktopBorder: string = 'border-2'
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileBorder;
  if (isTablet) return tabletBorder;
  if (isDesktop) return desktopBorder;
  
  return desktopBorder; // fallback
}

// Hook for responsive rounded corners
export function useResponsiveRounded(
  mobileRounded: string = 'rounded',
  tabletRounded: string = 'rounded-lg',
  desktopRounded: string = 'rounded-xl'
) {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();
  
  if (isMobile) return mobileRounded;
  if (isTablet) return tabletRounded;
  if (isDesktop) return desktopRounded;
  
  return desktopRounded; // fallback
}
