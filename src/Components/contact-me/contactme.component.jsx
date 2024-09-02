import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import './contactme.css'

const ContactMe = () => {
  const socialLinks = [
    { name: 'Email', icon: MailIcon, href: 'mailto:souravghai96@gmail.com' },
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/sourav15102' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sghai96' },
    { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com/souravghai96' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/souravghai1996/' },
  ];

  return (
    <footer id="contact" className="w-full py-12 bg-gray-800">
      <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-12 text-green-400">Contact Me</h2>
      <div className="container max-w-full mx-auto px-4 md:px-8">
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                <link.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="mt-2 text-xs text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default ContactMe;