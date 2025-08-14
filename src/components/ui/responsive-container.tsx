import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'rotate-in';
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
  hover?: 'scale' | 'rotate' | 'lift' | 'glow' | 'none';
}

export function ResponsiveContainer({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 'normal',
  hover = 'scale',
  ...props
}: ResponsiveContainerProps) {
  // Animation classes
  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'scale-in': 'animate-scale-in',
    'rotate-in': 'animate-rotate-in',
  };

  // Duration classes
  const durationClasses = {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
  };

  // Hover classes
  const hoverClasses = {
    scale: 'hover:scale-105 transition-transform',
    rotate: 'hover:rotate-3 transition-transform',
    lift: 'hover:translate-y-1 transition-transform',
    glow: 'hover:shadow-lg hover:shadow-emerald-500/25 transition-all',
    none: '',
  };

  const baseClasses = cn(
    // Base responsive container
    'w-full mx-auto px-4 sm:px-6 lg:px-8',
    'transition-all duration-300 ease-in-out',
    
    // Animation
    animationClasses[animation],
    
    // Duration
    durationClasses[duration],
    
    // Hover effects
    hoverClasses[hover],
    
    // Responsive design
    'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl',
    
    // Mobile first
    'text-sm sm:text-base lg:text-lg',
    'space-y-2 sm:space-y-3 lg:space-y-4',
    
    // Touch device optimizations
    'touch-manipulation',
    
    className
  );

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      className={baseClasses}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

// Responsive Grid Component
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

export function ResponsiveGrid({
  children,
  className,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = { mobile: 'gap-4', tablet: 'gap-6', desktop: 'gap-8' },
}: ResponsiveGridProps) {
  const gridCols = {
    mobile: `grid-cols-${cols.mobile}`,
    tablet: `sm:grid-cols-${cols.tablet}`,
    desktop: `lg:grid-cols-${cols.desktop}`,
  };

  const gridGap = {
    mobile: gap.mobile,
    tablet: `sm:${gap.tablet}`,
    desktop: `lg:${gap.desktop}`,
  };

  return (
    <div
      className={cn(
        'grid w-full',
        gridCols.mobile,
        gridCols.tablet,
        gridCols.desktop,
        gridGap.mobile,
        gridGap.tablet,
        gridGap.desktop,
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}

// Responsive Text Component
interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  weight?: string;
  color?: string;
}

export function ResponsiveText({
  children,
  className,
  size = { mobile: 'text-sm', tablet: 'text-base', desktop: 'text-lg' },
  weight = 'font-normal',
  color = 'text-foreground',
}: ResponsiveTextProps) {
  return (
    <div
      className={cn(
        'transition-all duration-300',
        size.mobile,
        `sm:${size.tablet}`,
        `lg:${size.desktop}`,
        weight,
        color,
        className
      )}
    >
      {children}
    </div>
  );
}

// Responsive Card Component
interface ResponsiveCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  shadow?: string;
  hover?: boolean;
}

export function ResponsiveCard({
  children,
  className,
  padding = { mobile: 'p-4', tablet: 'p-6', desktop: 'p-8' },
  shadow = 'shadow-md',
  hover = true,
}: ResponsiveCardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-lg border border-border',
        'transition-all duration-300 ease-in-out',
        padding.mobile,
        `sm:${padding.tablet}`,
        `lg:${padding.desktop}`,
        shadow,
        hover && 'hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105',
        'backdrop-blur-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

// Responsive Button Component
interface ResponsiveButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  responsive?: boolean;
  onClick?: () => void;
}

export function ResponsiveButton({
  children,
  className,
  size = 'md',
  variant = 'default',
  responsive = true,
  onClick,
}: ResponsiveButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs sm:text-sm',
    md: 'px-4 py-2 text-sm sm:text-base',
    lg: 'px-6 py-3 text-base sm:text-lg',
  };

  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const responsiveClasses = responsive ? {
    mobile: 'w-full sm:w-auto',
    tablet: 'sm:px-6 sm:py-2.5',
    desktop: 'lg:px-8 lg:py-3',
  } : {};

  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium',
        'transition-all duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        'active:scale-95',
        sizeClasses[size],
        variantClasses[variant],
        responsiveClasses.mobile,
        responsiveClasses.tablet,
        responsiveClasses.desktop,
        'touch-manipulation',
        className
      )}
    >
      {children}
    </button>
  );
}
