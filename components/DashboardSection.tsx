"use client";

import { useState, useEffect } from "react";

export default function DashboardSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedTab, setSelectedTab] = useState("Overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("dashboard");
    if (element) {
      observer.observe(element);
    }

    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  const activities = [
    {
      action: "Completed project",
      project: "E-commerce Platform",
      time: "2 hours ago",
      icon: "ri-check-line",
      color: "text-green-600",
    },
    {
      action: "Code review",
      project: "Task Management App",
      time: "5 hours ago",
      icon: "ri-code-s-slash-line",
      color: "text-blue-600",
    },
    {
      action: "Client meeting",
      project: "Weather Dashboard",
      time: "1 day ago",
      icon: "ri-video-line",
      color: "text-purple-600",
    },
    {
      action: "Bug fix deployed",
      project: "Portfolio Website",
      time: "2 days ago",
      icon: "ri-bug-line",
      color: "text-orange-600",
    },
  ];

  const techStack = [
    { name: "React", usage: 95, trend: "+5%" },
    { name: "TypeScript", usage: 88, trend: "+12%" },
    { name: "Next.js", usage: 82, trend: "+8%" },
    { name: "Tailwind", usage: 90, trend: "+3%" },
  ];

  const projectMetrics = [
    { label: "Active Projects", value: 8, change: "+2", trend: "up" },
    { label: "Completed Tasks", value: 142, change: "+15", trend: "up" },
    { label: "Code Reviews", value: 23, change: "+5", trend: "up" },
    { label: "Client Meetings", value: 12, change: "+3", trend: "up" },
  ];

  const tabs = ["Overview", "Projects", "Analytics"];
  const stats = [
    {
      label: "Active Projects",
      value: 8,
      change: "+2",
      bgColor: "bg-blue-100",
      icon: "ri-file-paper-2-line",
    },
    {
      label: "Completed Tasks",
      value: 142,
      change: "+15",
      bgColor: "bg-green-100",
      icon: "ri-check-double-line",
    },
    {
      label: "Code Reviews",
      value: 23,
      change: "+5",
      bgColor: "bg-purple-100",
      icon: "ri-code-s-slash-line",
    },
    {
      label: "Client Meetings",
      value: 12,
      change: "+3",
      bgColor: "bg-orange-100",
      icon: "ri-video-line",
    },
  ];
  const recentActivity = [
    {
      title: "Completed project",
      time: "2 hours ago",
      icon: "ri-check-line",
      bgColor: "bg-green-600",
    },
    {
      title: "Code review",
      time: "5 hours ago",
      icon: "ri-code-s-slash-line",
      bgColor: "bg-blue-600",
    },
    {
      title: "Client meeting",
      time: "1 day ago",
      icon: "ri-video-line",
      bgColor: "bg-purple-600",
    },
    {
      title: "Bug fix deployed",
      time: "2 days ago",
      icon: "ri-bug-line",
      bgColor: "bg-orange-600",
    },
  ];
  const quickActions = [
    {
      label: "New Project",
      icon: "ri-file-paper-2-line",
      bgColor: "bg-blue-600",
    },
    { label: "Task Management", icon: "ri-task-line", bgColor: "bg-green-600" },
    {
      label: "Team Collaboration",
      icon: "ri-team-line",
      bgColor: "bg-purple-600",
    },
    { label: "Reports", icon: "ri-file-chart-line", bgColor: "bg-orange-600" },
  ];
  const projects = [
    { name: "E-commerce Platform", progress: 80, color: "bg-blue-600" },
    { name: "Task Management App", progress: 60, color: "bg-green-600" },
    { name: "Weather Dashboard", progress: 40, color: "bg-purple-600" },
    { name: "Portfolio Website", progress: 20, color: "bg-orange-600" },
  ];

  return (
    <section
      id="dashboard"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dashboard
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 dark:border-gray-700/30 shadow-xl mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, Rahul Kumar!
                </h3>
                <p
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400"
                  suppressHydrationWarning={true}
                >
                  {currentTime}
                </p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedTab === tab
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Stats Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? "animate-fadeInUp" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {stat.label}
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                        <p
                          className={`text-xs sm:text-sm ${
                            stat.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </p>
                      </div>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg`}
                      >
                        <i
                          className={`${stat.icon} text-lg sm:text-xl text-white`}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Recent Activity
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${activity.bgColor} rounded-lg flex-shrink-0`}
                      >
                        <i
                          className={`${activity.icon} text-sm sm:text-base text-white`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                          {activity.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      className={`p-3 sm:p-4 ${action.bgColor} rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-sm sm:text-base`}
                    >
                      <i
                        className={`${action.icon} text-lg sm:text-xl mb-2 block`}
                      ></i>
                      <span className="block text-xs sm:text-sm leading-tight">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Progress */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 dark:border-gray-700/30 shadow-lg">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Project Progress
                </h4>
                <div className="space-y-4 sm:space-y-6">
                  {projects.map((project) => (
                    <div key={project.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                          {project.name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${project.color} transition-all duration-1000`}
                          style={{
                            width: isVisible ? `${project.progress}%` : "0%",
                          }}
                        ></div>
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
