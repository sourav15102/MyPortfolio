My Portfolio
import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, CheckIcon, ExternalLinkIcon, DownloadIcon } from 'lucide-react';
import './App.css'
import SkillsSection from './Components/skills/skill.component';

function App() {
  const [text, setText] = useState('');
  const fullText = "Sourav - Full Stack Developer";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(fullText.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-green-500">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-md px-4 lg:px-8 h-20 flex items-center justify-center border-b border-gray-800">
        <div className="container max-w-full flex items-center justify-between">
          <a href="#" className="flex items-center justify-center">
            <span className="text-3xl font-mono">&gt;_</span>
            <span className="sr-only">Tech Portfolio</span>
          </a>
          <nav className="flex items-center gap-6 sm:gap-8">
            <a href="#about" className="text-lg font-medium hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="text-lg font-medium hover:text-green-400 transition-colors">Skills</a>
            <a href="#projects" className="text-lg font-medium hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="text-lg font-medium hover:text-green-400 transition-colors">Contact</a>
            <a 
              href="./assets/Sourav_Resume.pdf" 
              download 
              className="flex items-center justify-center px-4 py-2 bg-white text-gray-900 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <DownloadIcon className="w-6 h-6 mr-2" />
              Resume
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 mt-20"> {/* Add margin-top to account for fixed header */}
        {/* Rest of your main content */}
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;