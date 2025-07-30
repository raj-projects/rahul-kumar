"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI, secure payments, and real-time inventory management.",
      category: "Full Stack",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20platform%20interface%20with%20clean%20product%20listings%2C%20shopping%20cart%2C%20and%20checkout%20process%2C%20professional%20web%20design%2C%20contemporary%20layout%2C%20high-quality%20UI%20showcase&width=600&height=400&seq=project1&orientation=landscape",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      category: "React",
      image:
        "https://readdy.ai/api/search-image?query=Task%20management%20application%20dashboard%20with%20project%20boards%2C%20team%20collaboration%20features%2C%20clean%20interface%20design%2C%20professional%20productivity%20app%20layout&width=600&height=400&seq=project2&orientation=landscape",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description:
        "Data visualization dashboard for weather patterns with interactive charts and predictive analytics.",
      category: "Dashboard",
      image:
        "https://readdy.ai/api/search-image?query=Weather%20analytics%20dashboard%20with%20interactive%20charts%2C%20data%20visualization%2C%20weather%20maps%2C%20modern%20interface%20design%2C%20professional%20data%20presentation&width=600&height=400&seq=project3&orientation=landscape",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media API",
      description:
        "RESTful API for social media platform with authentication, real-time messaging, and content management.",
      category: "API",
      image:
        "https://readdy.ai/api/search-image?query=API%20documentation%20interface%20with%20code%20examples%2C%20endpoint%20listings%2C%20technical%20documentation%20layout%2C%20clean%20developer%20tools%20design&width=600&height=400&seq=project4&orientation=landscape",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with dark mode, smooth animations, and optimized performance.",
      category: "Frontend",
      image:
        "https://readdy.ai/api/search-image?query=Portfolio%20website%20design%20with%20modern%20layout%2C%20project%20showcase%2C%20professional%20presentation%2C%20clean%20interface%2C%20responsive%20design%20elements&width=600&height=400&seq=project5&orientation=landscape",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Crypto Trading Bot",
      description:
        "Automated trading bot with machine learning algorithms for cryptocurrency market analysis.",
      category: "ML",
      image:
        "https://readdy.ai/api/search-image?query=Cryptocurrency%20trading%20bot%20interface%20with%20charts%2C%20market%20analysis%2C%20trading%20algorithms%2C%20financial%20data%20visualization%2C%20professional%20trading%20platform&width=600&height=400&seq=project6&orientation=landscape",
      technologies: ["Python", "TensorFlow", "Pandas", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Full Stack",
    "React",
    "Dashboard",
    "API",
    "Frontend",
    "ML",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
            <i className="ri-code-box-line text-blue-600 dark:text-blue-400 mr-2"></i>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in modern web
            development, from concept to deployment
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {filteredProjects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Actions */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium hover:bg-white transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-github-line w-4 h-4 flex items-center justify-center"></i>
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line w-4 h-4 flex items-center justify-center"></i>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium text-sm transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line w-4 h-4 flex items-center justify-center"></i>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
