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
    <TerminalButton 
      variant="outline"
      onClick={handleCVAction}
      className="w-full border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black transition-all font-mono"
      delay={4700}
      speed={25}
      textType="terminal"
    >
      [6] CV
    </TerminalButton>
  );
}
