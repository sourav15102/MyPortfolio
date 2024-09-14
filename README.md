My Portfolio

import React from 'react';
import { DownloadIcon } from 'lucide-react';

const Header: React.FC = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/assets/Sourav_Resume.pdf';
    link.download = 'Sourav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-md px-4 lg:px-8 h-20 flex items-center justify-center border-b border-gray-800">
      <div className="container max-w-full flex items-center justify-between">
        <a href="#" className="flex items-center justify-center">
          <span className="text-3xl font-mono">&gt;_</span>
          <span className="sr-only">Tech Portfolio</span>
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          <a href="#about" className="text-lg font-medium hover:text-green-400 transition-colors">About</a>
          <a href="#timeline" className="text-lg font-medium hover:text-green-400 transition-colors">Experience</a>
          <a href="#skills" className="text-lg font-medium hover:text-green-400 transition-colors">Skills</a>
          <a href="#projects" className="text-lg font-medium hover:text-green-400 transition-colors">Projects</a>
          <a href="#contact" className="text-lg font-medium hover:text-green-400 transition-colors">Contact</a>
          <a 
            href="#"
            onClick={handleDownload}
            className="flex items-center justify-center px-4 py-2 bg-white text-gray-900 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <DownloadIcon className="w-6 h-6 mr-2" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;