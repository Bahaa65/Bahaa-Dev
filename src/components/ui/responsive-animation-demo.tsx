'use client';

import React from 'react';
import { ResponsiveContainer, ResponsiveCard, ResponsiveButton } from './responsive-container';
import { useResponsiveAnimationContext } from '../providers/responsive-animation-provider';

export function ResponsiveAnimationDemo() {
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
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Device Info Display */}
      <ResponsiveCard className="mb-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            🎯 Responsive Animation Demo
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-primary/10 p-3 rounded-lg">
              <div className="font-semibold">Device</div>
              <div className="text-primary">
                {isMobile ? '📱 Mobile' : isTablet ? '📱 Tablet' : '💻 Desktop'}
              </div>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <div className="font-semibold">Touch</div>
              <div className="text-secondary">
                {isTouch ? '👆 Touch' : '🖱️ Mouse'}
              </div>
            </div>
            <div className="bg-accent/10 p-3 rounded-lg">
              <div className="font-semibold">Motion</div>
              <div className="text-accent">
                {prefersReducedMotion ? '🚫 Reduced' : '✨ Full'}
              </div>
            </div>
            <div className="bg-muted/10 p-3 rounded-lg">
              <div className="font-semibold">Screen</div>
              <div className="text-muted-foreground">
                {isMobile ? 'Small' : isTablet ? 'Medium' : 'Large'}
              </div>
            </div>
          </div>
        </div>
      </ResponsiveCard>

      {/* Animation Examples Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Fade In Animation */}
        <ResponsiveCard
          animation="fade-in"
          delay={0}
          hover="scale"
          className="text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">✨</div>
            <h3 className="text-lg font-semibold">Fade In</h3>
            <p className="text-sm text-muted-foreground">
              Smooth fade in animation with responsive timing
            </p>
          </div>
        </ResponsiveCard>

        {/* Slide Up Animation */}
        <ResponsiveCard
          animation="slide-up"
          delay={100}
          hover="lift"
          className="text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="text-lg font-semibold">Slide Up</h3>
            <p className="text-sm text-muted-foreground">
              Slides up from bottom with device-specific delays
            </p>
          </div>
        </ResponsiveCard>

        {/* Scale In Animation */}
        <ResponsiveCard
          animation="scale-in"
          delay={200}
          hover="glow"
          className="text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">🎪</div>
            <h3 className="text-lg font-semibold">Scale In</h3>
            <p className="text-sm text-muted-foreground">
              Scales in from center with responsive scaling
            </p>
          </div>
        </ResponsiveCard>

        {/* Rotate In Animation */}
        <ResponsiveCard
          animation="rotate-in"
          delay={300}
          hover="rotate"
          className="text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">🔄</div>
            <h3 className="text-lg font-semibold">Rotate In</h3>
            <p className="text-sm text-muted-foreground">
              Rotates in with device-specific rotation angles
            </p>
          </div>
        </ResponsiveCard>

        {/* Bounce Animation */}
        <ResponsiveCard
          animation="bounce-gentle"
          delay={400}
          hover="scale"
          className="text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">🎈</div>
            <h3 className="text-lg font-semibold">Bounce</h3>
            <p className="text-sm text-muted-foreground">
              Gentle bouncing with responsive duration
            </p>
          </div>
        </ResponsiveCard>

        {/* Float Animation */}
        <ResponsiveCard
          animation="float"
          delay={500}
          hover="lift"
          className="text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl">🌊</div>
            <h3 className="text-lg font-semibold">Float</h3>
            <p className="text-sm text-muted-foreground">
              Floating motion with device-optimized timing
            </p>
          </div>
        </ResponsiveCard>
      </div>

      {/* Interactive Buttons */}
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-center">🎮 Interactive Elements</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ResponsiveButton
            size="md"
            variant="default"
            responsive={true}
            onClick={() => console.log('Button clicked!')}
          >
            🎯 Hover Me
          </ResponsiveButton>
          
          <ResponsiveButton
            size="md"
            variant="outline"
            responsive={true}
            onClick={() => console.log('Outline clicked!')}
          >
            ✨ Scale Effect
          </ResponsiveButton>
          
          <ResponsiveButton
            size="md"
            variant="ghost"
            responsive={true}
            onClick={() => console.log('Ghost clicked!')}
          >
            🌟 Glow Effect
          </ResponsiveButton>
          
          <ResponsiveButton
            size="md"
            variant="link"
            responsive={true}
            onClick={() => console.log('Link clicked!')}
          >
            🚀 Lift Effect
          </ResponsiveButton>
        </div>
      </div>

      {/* Performance Info */}
      <ResponsiveCard className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">⚡ Performance Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold">Hardware Acceleration</div>
              <div className="text-muted-foreground">GPU-optimized transforms</div>
            </div>
            <div>
              <div className="font-semibold">Reduced Motion</div>
              <div className="text-muted-foreground">Accessibility support</div>
            </div>
            <div>
              <div className="font-semibold">Touch Optimized</div>
              <div className="text-muted-foreground">Mobile-friendly interactions</div>
            </div>
          </div>
        </div>
      </ResponsiveCard>

      {/* Responsive Text Demo */}
      <div className="mt-8 space-y-4">
        <h3 className="text-center text-xl font-semibold">📱 Responsive Typography</h3>
        
        <ResponsiveContainer
          animation="slide-up"
          delay={600}
          className="text-center space-y-4"
        >
          <div className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            This text automatically adjusts its size based on your device
          </div>
          
          <div className="text-base sm:text-lg lg:text-xl font-medium">
            Medium weight text that scales responsively
          </div>
          
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Larger text for better readability on all devices
          </div>
          
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
            Bold primary text with responsive scaling
          </div>
        </ResponsiveContainer>
      </div>

      {/* Animation Controls */}
      <div className="mt-8 space-y-4">
        <h3 className="text-center text-xl font-semibold">🎛️ Animation Controls</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ResponsiveButton
            size="sm"
            variant="outline"
            onClick={() => {
              // Toggle animations
              document.documentElement.classList.toggle('motion-reduce');
            }}
          >
            Toggle Motion
          </ResponsiveButton>
          
          <ResponsiveButton
            size="sm"
            variant="outline"
            onClick={() => {
              // Add animation delay
              document.documentElement.style.setProperty('--animation-delay', '500ms');
            }}
          >
            Add Delay
          </ResponsiveButton>
          
          <ResponsiveButton
            size="sm"
            variant="outline"
            onClick={() => {
              // Reset animations
              document.documentElement.style.removeProperty('--animation-delay');
            }}
          >
            Reset
          </ResponsiveButton>
          
          <ResponsiveButton
            size="sm"
            variant="outline"
            onClick={() => {
              // Toggle reduced motion
              const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
              console.log('Reduced motion preferred:', mediaQuery.matches);
            }}
          >
            Check Motion
          </ResponsiveButton>
        </div>
      </div>
    </div>
  );
}

// Export for use in other components
export default ResponsiveAnimationDemo;
