import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

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
              company="Dalhousie University"
              description="Earned a Master’s degree in Computer Science from Dalhousie University"
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

export default Timeline;