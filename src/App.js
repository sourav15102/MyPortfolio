import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, CheckIcon, ExternalLinkIcon, DownloadIcon, CodeIcon } from 'lucide-react';
import './App.css'
import SkillsSection from './Components/skills/skill.component';
import Timeline from './Components/timeline/timeline.component';

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
            <a href="#timeline" className="text-lg font-medium hover:text-green-400 transition-colors">Experience</a>
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
      <main className="flex-1 mt-20">
        <section className="w-full py-20 md:py-32 lg:py-48 xl:py-64">
          <div className="container max-w-full mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center space-y-8 text-center">
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
        <section id="about" className="w-full py-20 md:py-32 lg:py-48 bg-gray-800">
          <div className="container max-w-full mx-auto px-4 md:px-8">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-8 text-green-400">About Me</h2>
            <p className="mx-auto max-w-[1000px] text-gray-300 text-xl md:text-2xl text-center leading-relaxed">
              &gt; Software Developer with experience in Java and Spring Boot, specializing in microservices, cloud infrastructure (AWS), and Agile methodologies. Proven track record of optimizing performance and implementing robust security practices.
            </p>
          </div>
        </section>
        <Timeline />
        <SkillsSection />
        <section id="projects" className="w-full py-20 md:py-32 lg:py-48 bg-gray-800">
          <div className="container max-w-full mx-auto px-4 md:px-8">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-12 text-green-400">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Code Labeller",
                  description: "Developed a survey publishing web app using Java, Spring Boot, and MySQL, with an emphasis on secure REST APIs, Agile practices, and CI/CD integration.",
                  link: "https://github.com/sourav15102/CodeLabeller",
                },
                {
                  title: "Trivia Game",
                  description: "Created a real-time multiplayer quiz game using AWS and GCP services, enhancing performance with automated question tagging and leaderboard tracking.",
                  link: "https://github.com/sourav15102/Trivia-Game",
                },
                {
                  title: "Course Alert",
                  description: "Built a cloud-based notification app for students, leveraging Spring Boot, MongoDB, and Terraform to ensure high availability and efficient deployment.",
                  link: "https://github.com/sourav15102/Course-Alert",
                },
              ].map((project, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-green-400 mb-4">{project.title}</h3>
                    <p className="text-gray-400 text-lg mb-6">{project.description}</p>
                  </div>
                  <div className="p-8 bg-gray-800">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-12 px-6 py-2 border-green-700 text-green-400 hover:bg-green-800">
                      View Project <ExternalLinkIcon className="ml-2 h-6 w-6" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 lg:py-48">
          <div className="container max-w-full mx-auto px-4 md:px-8">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-12 text-green-400">Contact Me</h2>
            <form className="max-w-[800px] mx-auto space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="flex h-14 w-full rounded-md border border-input bg-background px-6 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex h-14 w-full rounded-md border border-input bg-background px-6 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
              />
              <textarea
                placeholder="Your Message"
                className="flex w-full rounded-md border border-input bg-background px-6 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500 min-h-[150px]"
              ></textarea>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-green-700 text-white hover:bg-green-600 h-14 px-8 py-2 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 border-t border-gray-800">
        <div className="container max-w-full mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-gray-500">© 2023 Sourav Ghai. All rights reserved.</p>
          <nav className="flex gap-6 sm:gap-8 mt-4 sm:mt-0">
            <a className="text-gray-500 hover:text-green-400 transition-colors" href="https://github.com/sourav15102" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a className="text-gray-500 hover:text-green-400 transition-colors" href="https://www.linkedin.com/in/sghai96" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a className="text-gray-500 hover:text-green-400 transition-colors" href="mailto:souravghai96@gmail.com">
              <MailIcon className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;