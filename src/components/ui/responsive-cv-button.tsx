'use client';

import React from 'react';
import { ResponsiveButton } from './responsive-container';
import { useResponsiveAnimationContext } from '../providers/responsive-animation-provider';

export function ResponsiveCVButton() {
  const { isMobile, isTablet, isDesktop } = useResponsiveAnimationContext();

  const handleCVAction = () => {
    // Open CV in new tab
    window.open('https://drive.google.com/file/d/1JfBTFSFQZ2_gj-bvGqZ7TeHuIbprDrJJ/view?usp=drivesdk', '_blank');
    
    // Trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1JfBTFSFQZ2_gj-bvGqZ7TeHuIbprDrJJ';
    downloadLink.download = 'Bahaa_Mohamed_Akl_Gaballah_CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Responsive button size based on device
  const buttonSize = isMobile ? 'sm' : isTablet ? 'md' : 'lg';

  return (
    <div className="w-full space-y-3">
      {/* Main Download Button */}
      <ResponsiveButton
        size={buttonSize}
        variant="default"
        responsive={true}
        onClick={handleCVAction}
        className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl">📄</span>
          <span>Download CV</span>
          <span className="text-sm opacity-80">(PDF)</span>
        </div>
      </ResponsiveButton>

      {/* Alternative View Button */}
      <ResponsiveButton
        size={buttonSize}
        variant="outline"
        responsive={true}
        onClick={() => window.open('https://drive.google.com/file/d/1JfBTFSFQZ2_gj-bvGqZ7TeHuIbprDrJJ/view?usp=drivesdk', '_blank')}
        className="w-full border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950/20 transition-all duration-300"
      >
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg">👁️</span>
          <span>View CV Online</span>
        </div>
      </ResponsiveButton>

      {/* Info Text */}
      <div className="text-center">
        <p className="text-xs text-emerald-600/70 dark:text-green-400/70 font-mono">
          {isMobile ? 'Tap to download or view' : 'Click to download or view CV in new tab'}
        </p>
        <p className="text-xs text-emerald-500/60 dark:text-green-400/60 mt-1">
          File: Bahaa_Mohamed_Akl_Gaballah_CV.pdf
        </p>
      </div>
    </div>
  );
}

// Alternative simple version
export function SimpleCVButton() {
  const handleCVAction = () => {
    // Open CV in new tab
    window.open('https://drive.google.com/file/d/1JfBTFSFQZ2_gj-bvGqZ7TeHuIbprDrJJ/view?usp=drivesdk', '_blank');
    
    // Trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1JfBTFSFQZ2_gj-bvGqZ7TeHuIbprDrJJ';
    downloadLink.download = 'Bahaa_Mohamed_Akl_Gaballah_CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button
      onClick={handleCVAction}
      className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-400 hover:border-emerald-300"
    >
      <div className="flex items-center justify-center space-x-3">
        <span className="text-2xl">📄</span>
        <div className="text-center">
          <div className="text-lg font-bold">Download CV</div>
          <div className="text-sm opacity-90">Bahaa Mohamed Akl Gaballah</div>
        </div>
        <span className="text-lg">⬇️</span>
      </div>
    </button>
  );
}
