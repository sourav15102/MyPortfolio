My Portfolio

import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, BriefcaseIcon } from 'lucide-react';
import './App.css'
import SkillsSection from './Components/skills/skill.component';

function TimelineItem({ year, company, description, isLeft }) {
  return (
    <div className={`flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} w-full items-center justify-between`}>
      <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="text-3xl font-bold text-green-400 mb-2">{year}</div>
        <div className="text-xl font-semibold text-green-300 mb-2">{company}</div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
      </div>
      <div className={`w-5/12 bg-gray-800 p-4 rounded-lg shadow-lg border border-green-500/30 hover:border-green-500/50 transition-all duration-300`}>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="w-full py-20 md:py-32 lg:py-48 bg-gray-900">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-16 text-green-400 flex items-center justify-center">
          <BriefcaseIcon className="w-12 h-12 mr-4" />
          Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500/30"></div>
          <div className="space-y-20">
            <TimelineItem 
              year="2024 - Current"
              company="Canada Revenue Agency"
              description="Contributed to the File a Formal Dispute (FFD) release by coordinating teams to engineer microservice-based APIs with Spring Boot, developing Angular components, and integrating internationalization; engineered scalable solutions reducing load by 30% and improved security/performance; developed Playwright and JUnit automated tests achieving 90% coverage, reducing manual testing time by 40%, and increasing bug detection by 25%."
              isLeft={false}
            />
            <TimelineItem 
              year="2022 - 2023"
              company="Transition Period"
              description="Period of skill enhancement and preparation for next role. Focused on deepening knowledge in cloud technologies, microservices architecture, and modern frontend frameworks."
              isLeft={true}
            />
            <TimelineItem 
              year="2019 - 2022"
              company="MathWorks"
              description="Created a baseline generation tool in Java, reducing redundant baselines by 25% and technical debt through code refactoring, collaborated with QA to enhance Simulink-MATLAB integration and reduce bugs by 40%, and developed an internal managerial tool with REST APIs and JWT authentication using Spring Framework, achieving 80% code coverage with JUnit."
              isLeft={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
            <a href="#timeline" className="text-lg font-medium hover:text-green-400 transition-colors">Timeline</a>
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
      <main className="flex-1 mt-20">
        <section className="w-full py-20 md:py-32 lg:py-48 xl:py-64">
          <div className="container max-w-full mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center space-y-8 text-center">
              <CodeIcon className="w-24 h-24 text-green-400" />
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none text-green-400">
                  {text}<span className="animate-pulse">|</span>
                </h1>
                <p className="mx-auto max-w-[1000px] text-gray-400 text-2xl md:text-3xl">
                  Canada Revenue Agency | Ex-MathWorks
                </p>
              </div>
              <div className="space-x-6">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-green-700 text-white hover:bg-green-600 h-14 px-8 py-3">
                  Contact Me
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-md text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-14 px-8 py-3 border-green-700 text-green-400 hover:bg-green-800">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About section */}
        <SkillsSection />
        <Timeline />
        {/* Projects section */}
        {/* Contact section */}
      </main>
      {/* Footer */}
    </div>
  );
}

export default App;