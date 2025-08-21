'use client';

import React from 'react';

export function TerminalCVButton() {
  const handleCVDownload = () => {
    // Open CV in new tab
    window.open('https://drive.google.com/file/d/1L89gqXgClyggG3cyritw_WP259sKiCzi/view?usp=sharing', '_blank');
    
    // Trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1L89gqXgClyggG3cyritw_WP259sKiCzi';
    downloadLink.download = 'Bahaa_Mohamed_Akl_Gaballah_CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button
      onClick={handleCVDownload}
      className="w-full bg-transparent dark:bg-transparent border-2 border-emerald-500 dark:border-green-400 text-emerald-500 dark:text-green-400 hover:bg-emerald-500/20 hover:text-emerald-400 dark:hover:bg-green-400/20 dark:hover:text-green-300 font-mono text-lg py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-green-400/25 backdrop-blur-sm"
    >
      &gt; Download CV
    </button>
  );
}

export function TerminalOfficialButton() {
  const handleOpen = () => {
    // Open Official document in new tab
    window.open('https://drive.google.com/file/d/1yAcWf3r0XecUZeEupmNrHACZeMxolVrK/view?usp=sharing', '_blank');

    // Trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=1yAcWf3r0XecUZeEupmNrHACZeMxolVrK';
    downloadLink.download = 'Bahaa_Resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button
      onClick={handleOpen}
      className="w-full bg-transparent dark:bg-transparent border-2 border-emerald-500 dark:border-green-400 text-emerald-500 dark:text-green-400 hover:bg-emerald-500/20 hover:text-emerald-400 dark:hover:bg-green-400/20 dark:hover:text-green-300 font-mono text-lg py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-green-400/25 backdrop-blur-sm"
    >
      &gt; Download Resume
    </button>
  );
}
