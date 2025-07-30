
'use client';

import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: 'ri-reactjs-line', color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, icon: 'ri-code-s-slash-line', color: 'bg-blue-600' },
        { name: 'Next.js', level: 88, icon: 'ri-nextjs-line', color: 'bg-gray-800' },
        { name: 'Vue.js', level: 85, icon: 'ri-vuejs-line', color: 'bg-green-500' }
      ]
    },
    {
      title: 'Styling',
      skills: [
        { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line', color: 'bg-cyan-500' },
        { name: 'Sass', level: 88, icon: 'ri-css3-line', color: 'bg-pink-500' },
        { name: 'Styled Components', level: 85, icon: 'ri-palette-line', color: 'bg-purple-500' },
        { name: 'CSS3', level: 93, icon: 'ri-css3-line', color: 'bg-blue-500' }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 85, icon: 'ri-nodejs-line', color: 'bg-green-600' },
        { name: 'Git', level: 87, icon: 'ri-git-branch-line', color: 'bg-orange-500' },
        { name: 'Docker', level: 78, icon: 'ri-computer-line', color: 'bg-blue-600' },
        { name: 'AWS', level: 75, icon: 'ri-cloud-line', color: 'bg-yellow-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white/60 dark:bg-gray-700/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 dark:border-gray-600/30 shadow-xl transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 flex items-center justify-center ${skill.color} rounded-lg`}>
                            <i className={`${skill.icon} text-white text-sm`}></i>
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certification Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2024', icon: 'ri-award-line' },
                { title: 'React Professional', issuer: 'Meta', year: '2023', icon: 'ri-medal-line' },
                { title: 'TypeScript Expert', issuer: 'Microsoft', year: '2023', icon: 'ri-trophy-line' }
              ].map((cert) => (
                <div key={cert.title} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-gray-700/30">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    <i className={`${cert.icon} text-xl text-blue-600 dark:text-blue-400`}></i>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
