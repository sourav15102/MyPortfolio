import React from 'react';
import { CheckIcon, Star, StarHalf } from 'lucide-react';
import './skill.component.css'

function SkillRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < fullStars ? (
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          ) : index === fullStars && hasHalfStar ? (
            <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
          ) : (
            <Star className="w-5 h-5 text-gray-400" />
          )}
        </span>
      ))}
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="skill-block bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg border border-green-500/30 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold text-green-400 mb-6 pb-2 border-b border-green-500/30">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-800/50 transition-colors duration-200">
            <div className="flex items-center space-x-4">
              <CheckIcon className="text-green-500 h-6 w-6" />
              <span className="text-gray-300 text-xl">{skill.name}</span>
            </div>
            <SkillRating rating={skill.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", rating: 4.5 },
        { name: "JavaScript", rating: 4 },
        { name: "TypeScript", rating: 3.5 }
      ]
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        { name: "Spring Boot", rating: 4.5 },
        { name: "Spring Security", rating: 4 },
        { name: "Angular", rating: 3.5 },
        { name: "React", rating: 4 },
        { name: "Node.js", rating: 3.5 }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", rating: 4 },
        { name: "Kubernetes", rating: 3.5 },
        { name: "Jenkins", rating: 3 },
        { name: "AWS", rating: 4 },
        { name: "Terraform", rating: 3.5 }
      ]
    },
    {
      title: "Other Tools/Technologies",
      skills: [
        { name: "JPA", rating: 4 },
        { name: "Kafka", rating: 3.5 },
        { name: "Git", rating: 4.5 },
        { name: "MySQL", rating: 4 },
        { name: "REST", rating: 4.5 }
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-20 md:py-32 lg:py-48 bg-gray-800">
      <div className="container max-w-full mx-auto px-4 md:px-8">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-center mb-16 text-green-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;