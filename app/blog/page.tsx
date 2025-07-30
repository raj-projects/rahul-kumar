"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../../components/ThemeProvider";

export default function BlogPage() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with Next.js 14",
      excerpt:
        "Exploring the latest features and best practices for building scalable web applications with Next.js 14 and React Server Components.",
      category: "Web Development",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20Next.js%20code%20on%20multiple%20monitors%2C%20clean%20minimalist%20setup%2C%20professional%20coding%20environment%2C%20soft%20lighting%2C%20contemporary%20design&width=400&height=250&seq=blog1&orientation=landscape",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt:
        "How artificial intelligence is transforming the way we write code, from automated testing to intelligent code completion.",
      category: "AI & Technology",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      image:
        "https://readdy.ai/api/search-image?query=Futuristic%20AI%20technology%20concept%20with%20neural%20networks%2C%20machine%20learning%20visualization%2C%20digital%20brain%20patterns%2C%20blue%20and%20purple%20gradients%2C%20high-tech%20atmosphere&width=400&height=250&seq=blog2&orientation=landscape",
      featured: true,
    },
    {
      id: 3,
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt:
        "Essential techniques for improving React application performance, including memoization, lazy loading, and bundle optimization.",
      category: "React",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      image:
        "https://readdy.ai/api/search-image?query=React%20performance%20optimization%20visualization%20with%20code%20snippets%2C%20performance%20graphs%2C%20clean%20developer%20workspace%2C%20modern%20UI%20components%2C%20professional%20coding%20setup&width=400&height=250&seq=blog3&orientation=landscape",
      featured: false,
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Best practices for creating robust and scalable backend APIs using Node.js, Express, and modern development patterns.",
      category: "Backend",
      readTime: "15 min read",
      date: "Nov 28, 2024",
      image:
        "https://readdy.ai/api/search-image?query=Node.js%20backend%20development%20setup%20with%20API%20documentation%2C%20server%20architecture%20diagrams%2C%20clean%20coding%20environment%2C%20professional%20workspace%2C%20technical%20illustrations&width=400&height=250&seq=blog4&orientation=landscape",
      featured: false,
    },
    {
      id: 5,
      title: "Design Systems in Modern Frontend",
      excerpt:
        "Creating consistent and maintainable design systems that scale across large applications and teams.",
      category: "Design",
      readTime: "7 min read",
      date: "Nov 20, 2024",
      image:
        "https://readdy.ai/api/search-image?query=Design%20system%20components%20layout%20with%20UI%20elements%2C%20color%20palettes%2C%20typography%20samples%2C%20clean%20workspace%2C%20modern%20design%20tools%2C%20professional%20setup&width=400&height=250&seq=blog5&orientation=landscape",
      featured: false,
    },
    {
      id: 6,
      title: "DevOps Best Practices for 2024",
      excerpt:
        "Essential DevOps practices including CI/CD pipelines, containerization, and cloud deployment strategies.",
      category: "DevOps",
      readTime: "11 min read",
      date: "Nov 15, 2024",
      image:
        "https://readdy.ai/api/search-image?query=DevOps%20workflow%20visualization%20with%20CI%2FCD%20pipelines%2C%20cloud%20infrastructure%20diagrams%2C%20deployment%20processes%2C%20modern%20tech%20workspace%2C%20professional%20development%20environment&width=400&height=250&seq=blog6&orientation=landscape",
      featured: false,
    },
    {
      id: 7,
      title: "Mastering TypeScript: Advanced Patterns",
      excerpt:
        "Deep dive into advanced TypeScript patterns, generics, and type manipulation techniques for better code quality.",
      category: "TypeScript",
      readTime: "14 min read",
      date: "Nov 10, 2024",
      image:
        "https://readdy.ai/api/search-image?query=TypeScript%20code%20patterns%20with%20advanced%20type%20definitions%2C%20clean%20IDE%20interface%2C%20professional%20development%20setup%2C%20modern%20coding%20environment%2C%20technical%20documentation&width=400&height=250&seq=blog7&orientation=landscape",
      featured: false,
    },
    {
      id: 8,
      title: "Building Real-time Applications with WebSockets",
      excerpt:
        "Learn how to implement real-time features in your applications using WebSockets, Socket.IO, and modern protocols.",
      category: "Web Development",
      readTime: "13 min read",
      date: "Nov 5, 2024",
      image:
        "https://readdy.ai/api/search-image?query=Real-time%20application%20development%20with%20WebSocket%20connections%2C%20live%20data%20streams%2C%20modern%20web%20interface%2C%20professional%20coding%20workspace%2C%20network%20visualization&width=400&height=250&seq=blog8&orientation=landscape",
      featured: false,
    },
    {
      id: 9,
      title: "Mobile-First Design Principles",
      excerpt:
        "Essential principles for creating responsive, mobile-first designs that work seamlessly across all devices.",
      category: "Design",
      readTime: "9 min read",
      date: "Oct 30, 2024",
      image:
        "https://readdy.ai/api/search-image?query=Mobile-first%20design%20process%20with%20responsive%20layouts%2C%20device%20mockups%2C%20UI%2FUX%20design%20tools%2C%20clean%20workspace%2C%20modern%20design%20methodology&width=400&height=250&seq=blog9&orientation=landscape",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "AI & Technology",
    "React",
    "Backend",
    "Design",
    "DevOps",
    "TypeScript",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />

        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Developer{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Blog
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4">
                Insights, tutorials, and thoughts on modern web development,
                technology trends, and best practices from my journey as a
                software developer.
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {blogPosts.length}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Articles
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {categories.length - 1}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Categories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                    50K+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Readers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <div
                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredPost(post.id)}
                    onMouseLeave={() => setHoveredPost(null)}
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {post.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <i className="ri-time-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center"></i>
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm">
                        Read More
                        <i
                          className={`ri-arrow-right-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center transition-transform duration-300 ${
                            hoveredPost === post.id
                              ? "transform translate-x-1"
                              : ""
                          }`}
                        ></i>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Stay Updated
                </h3>
                <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get the latest articles and insights delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/30 outline-none text-sm sm:text-base"
                  />
                  <button className="px-4 sm:px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
