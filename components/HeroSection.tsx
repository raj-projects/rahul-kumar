"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Designer",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/rahul-kumar-cv.pdf";
    link.download = "Rahul-Kumar-CV.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/30 dark:bg-pink-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-indigo-500/20 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Available for new opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                  Rahul Kumar
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-in-out_0.5s_forwards]"></div>
              </span>
            </h1>

            {/* Dynamic Role */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-10 flex items-center justify-center lg:justify-start">
              <span className="mr-2">A passionate</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold min-w-[200px] text-left">
                {roles[currentRole]}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I create exceptional digital experiences through clean code,
              innovative design, and user-centered solutions. Let’s build
              something amazing together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              {/* <Link href="#contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  <span className="flex items-center gap-2">
                    <i className="ri-mail-line mr-2"></i> Hire Me
                  </span>
                </button>
              </Link>

              <Link href="">
                <button className="px-8 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
                  <i className="ri-download-line mr-2"></i>Download CV
                </button>
              </Link> */}
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                Hire Me
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-download-line mr-2"></i>
                Download CV
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-center">
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  8+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="group">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                  25+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div
            className={`lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Professional Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-800/50 shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20portrait%2C%20clean%20modern%20workspace%20background%2C%20confident%20smile%2C%20contemporary%20business%20casual%20attire%2C%20minimalist%20lighting%2C%20high-quality%20headshot%20photography&width=450&height=450&seq=hero-profile&orientation=squarish"
                    alt="Rahul Kumar - Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <i className="ri-reactjs-line text-blue-500 text-xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-500">
                  <i className="ri-nodejs-line text-green-500 text-xl"></i>
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <i className="ri-javascript-line text-yellow-500 text-lg"></i>
                </div>
                <div className="absolute top-1/4 -left-8 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-pulse delay-700">
                  <i className="ri-html5-line text-orange-500 text-lg"></i>
                </div>
              </div>

              {/* Status Card */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Currently available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
