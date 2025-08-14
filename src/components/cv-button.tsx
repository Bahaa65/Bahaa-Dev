"use client";

import { TerminalButton } from "@/components/ui/terminal-button";

export function CVButton() {
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
    <div className="w-full">
      <TerminalButton 
        variant="outline"
        onClick={handleCVAction}
        className="w-full border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black transition-all duration-300 font-mono text-lg py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        delay={4700}
        speed={25}
        textType="terminal"
      >
      📄 Download CV
      </TerminalButton>
      
      {/* Additional Info */}
      <div className="mt-2 text-center">
        <p className="text-xs text-emerald-600/70 dark:text-green-400/70 font-mono">
          Click to download or view CV in new tab
        </p>
      </div>
    </div>
  );
}
