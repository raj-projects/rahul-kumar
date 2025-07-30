"use client";

import Link from "next/link";
import { useState } from "react";

export default function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

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
  ];

  const categories = [
    "All",
    "Web Development",
    "AI & Technology",
    "React",
    "Backend",
    "Design",
    "DevOps",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section
      id="blog"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Blog Posts
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Insights, tutorials, and thoughts on modern web development,
            technology trends, and best practices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
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

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredPosts
            .filter((post) => post.featured)
            .map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <div
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full mb-2">
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

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">
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
                </div>
              </Link>
            ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
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
                    <div className="absolute top-3 left-3">
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

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link href="/blog">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
