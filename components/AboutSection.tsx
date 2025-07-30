"use client";

import { useState, useEffect } from "react";

export default function AboutSection() {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: "2019", role: "Junior Developer", company: "TechStart Inc." },
    { year: "2021", role: "Frontend Developer", company: "Digital Solutions" },
    { year: "2022", role: "Senior Developer", company: "Innovation Labs" },
    { year: "2024", role: "Lead Frontend Developer", company: "Future Corp" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Passionate about Creating Digital Experiences
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                With over 5 years of experience in frontend development, I
                specialize in creating modern, responsive, and user-friendly web
                applications. My expertise spans across React, TypeScript, and
                modern CSS frameworks.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about clean code architecture, performance
                optimization, and creating seamless user experiences. When I'm
                not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or mentoring junior
                developers.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-white/30 dark:border-gray-700/30 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-4">
                    <i className="ri-time-line text-xl text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Experience
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    5+ Years
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-white/30 dark:border-gray-700/30 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-lg mx-auto mb-4">
                    <i className="ri-folder-line text-xl text-green-600 dark:text-green-400"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Projects
                  </h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    47+ Done
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-white/30 dark:border-gray-700/30 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-lg mx-auto mb-4">
                    <i className="ri-user-smile-line text-xl text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Clients
                  </h4>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    23+ Happy
                  </p>
                </div>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-white/30 dark:border-gray-700/30 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-lg mx-auto mb-4">
                    <i className="ri-award-line text-xl text-orange-600 dark:text-orange-400"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Awards
                  </h4>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    8+ Won
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Professional Image */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20developer%20workspace%20with%20multiple%20monitors%2C%20clean%20coding%20environment%2C%20professional%20setup%2C%20natural%20lighting%2C%20contemporary%20furniture%2C%20minimalist%20aesthetic%2C%20productivity%20focused%20atmosphere%2C%20high-end%20equipment&width=600&height=400&seq=workspace-dashboard-001&orientation=landscape"
                  alt="Professional Workspace"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Career Timeline */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Career Timeline
                </h4>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-bold text-sm">
                        {item.year}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white">
                          {item.role}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
