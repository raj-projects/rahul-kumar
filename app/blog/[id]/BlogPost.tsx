"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ThemeProvider } from "../../../components/ThemeProvider";

interface BlogPostProps {
  postId: string;
}

export default function BlogPost({ postId }: BlogPostProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with Next.js 14",
      excerpt:
        "Exploring the latest features and best practices for building scalable web applications with Next.js 14 and React Server Components.",
      category: "Web Development",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Rahul Kumar",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20Next.js%20code%20on%20multiple%20monitors%2C%20clean%20minimalist%20setup%2C%20professional%20coding%20environment%2C%20soft%20lighting%2C%20contemporary%20design&width=800&height=400&seq=blogpost1&orientation=landscape",
      content: `
        <p>Next.js 14 has revolutionized the way we build modern web applications, introducing groundbreaking features that enhance both developer experience and application performance. In this comprehensive guide, we'll explore the latest capabilities and best practices for building scalable applications.</p>
        
        <h2>What's New in Next.js 14</h2>
        <p>The latest version of Next.js brings several exciting features that make development more efficient and applications more performant. Let's dive into the most significant improvements.</p>
        
        <h3>Server Components Revolution</h3>
        <p>React Server Components represent a paradigm shift in how we think about React applications. Unlike traditional components that run on the client, Server Components execute on the server, enabling:</p>
        <ul>
          <li>Reduced bundle sizes by keeping heavy dependencies on the server</li>
          <li>Improved SEO through server-side rendering</li>
          <li>Better performance with less JavaScript shipped to the client</li>
          <li>Direct access to backend resources without API calls</li>
        </ul>
        
        <h3>App Router Enhancements</h3>
        <p>The App Router continues to evolve with new features that make routing more intuitive and powerful. Key improvements include:</p>
        <ul>
          <li>Nested layouts for better code organization</li>
          <li>Loading and error states with built-in UI</li>
          <li>Parallel and intercepted routes for complex UIs</li>
          <li>Enhanced metadata API for better SEO</li>
        </ul>
        
        <h2>Best Practices for Production</h2>
        <p>When building production applications with Next.js 14, following these best practices will ensure optimal performance and maintainability:</p>
        
        <h3>1. Optimize Your Bundle</h3>
        <p>Use dynamic imports for code splitting and tree shaking to reduce bundle sizes. Consider using Next.js built-in optimizations like automatic image optimization and font optimization.</p>
        
        <h3>2. Leverage Caching Strategies</h3>
        <p>Implement proper caching strategies using Next.js caching mechanisms, including static generation, incremental static regeneration, and edge caching.</p>
        
        <h3>3. Performance Monitoring</h3>
        <p>Set up comprehensive performance monitoring using tools like Vercel Analytics, Google PageSpeed Insights, and Core Web Vitals tracking.</p>
        
        <h2>Getting Started</h2>
        <p>To get started with Next.js 14, create a new project using the latest create-next-app:</p>
        
        <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>
        
        <p>This will set up a new Next.js 14 project with all the latest features and best practices configured out of the box.</p>
        
        <h2>Conclusion</h2>
        <p>Next.js 14 represents a significant step forward in web development, offering powerful tools for building modern, performant applications. By embracing Server Components, leveraging the App Router, and following best practices, developers can create exceptional user experiences while maintaining clean, maintainable codebases.</p>
        
        <p>As the framework continues to evolve, staying updated with the latest features and best practices will be crucial for building competitive web applications in 2024 and beyond.</p>
      `,
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt:
        "How artificial intelligence is transforming the way we write code, from automated testing to intelligent code completion.",
      category: "AI & Technology",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      author: "Rahul Kumar",
      image:
        "https://readdy.ai/api/search-image?query=Futuristic%20AI%20technology%20concept%20with%20neural%20networks%2C%20machine%20learning%20visualization%2C%20digital%20brain%20patterns%2C%20blue%20and%20purple%20gradients%2C%20high-tech%20atmosphere&width=800&height=400&seq=blogpost2&orientation=landscape",
      content: `
        <p>Artificial Intelligence is reshaping the software development landscape in ways we never imagined. From intelligent code completion to automated testing and deployment, AI is becoming an indispensable tool for modern developers.</p>
        
        <h2>Current AI Tools Transforming Development</h2>
        <p>Today's developers have access to an impressive array of AI-powered tools that enhance productivity and code quality:</p>
        
        <h3>Code Completion and Generation</h3>
        <p>Tools like GitHub Copilot, CodeT5, and Tabnine are revolutionizing how we write code. These AI assistants can:</p>
        <ul>
          <li>Generate entire functions based on comments</li>
          <li>Suggest context-aware code completions</li>
          <li>Refactor existing code for better performance</li>
          <li>Translate code between different programming languages</li>
        </ul>
        
        <h3>Automated Testing</h3>
        <p>AI-powered testing tools are making it easier to ensure code quality and catch bugs before they reach production. These tools can automatically generate test cases, identify edge cases, and even predict potential failure points.</p>
        
        <h2>The Future Landscape</h2>
        <p>Looking ahead, we can expect even more revolutionary changes in how AI integrates with software development:</p>
        
        <h3>Intelligent Code Review</h3>
        <p>AI systems will soon be able to perform comprehensive code reviews, identifying not just syntax errors but also architectural issues, security vulnerabilities, and performance bottlenecks.</p>
        
        <h3>Automated Architecture Design</h3>
        <p>Future AI tools will help architects design entire system architectures based on requirements, automatically suggesting the best technologies, patterns, and scaling strategies.</p>
        
        <h3>Natural Language Programming</h3>
        <p>We're moving toward a future where developers can describe what they want to build in natural language, and AI will generate the corresponding code, tests, and documentation.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While AI offers tremendous benefits, there are important challenges to consider:</p>
        
        <h3>Code Quality and Reliability</h3>
        <p>AI-generated code may not always follow best practices or handle edge cases properly. Developers must remain vigilant about code quality and continue to apply critical thinking.</p>
        
        <h3>Security Implications</h3>
        <p>AI tools trained on public code repositories may inadvertently suggest insecure patterns or expose sensitive information. Security reviews become even more critical.</p>
        
        <h3>Developer Skill Evolution</h3>
        <p>As AI handles more routine tasks, developers will need to focus on higher-level problem-solving, system design, and AI collaboration skills.</p>
        
        <h2>Preparing for the AI-Driven Future</h2>
        <p>To thrive in an AI-enhanced development environment, developers should:</p>
        <ul>
          <li>Learn to effectively prompt and collaborate with AI tools</li>
          <li>Develop strong code review and quality assessment skills</li>
          <li>Focus on system design and architectural thinking</li>
          <li>Stay updated with the latest AI developments in software engineering</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of software development is undoubtedly intertwined with AI. Rather than replacing developers, AI is augmenting human capabilities, allowing us to build more sophisticated applications faster and with fewer errors. By embracing these tools while maintaining critical thinking and quality standards, developers can leverage AI to reach new heights of productivity and innovation.</p>
      `,
    },
  ];

  const post = blogPosts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <div className="pt-20 sm:pt-24 pb-12 text-center px-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Post not found
            </h1>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
            >
              Back to Blog
            </Link>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />

        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-6 sm:pb-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </Link>
                <i className="ri-arrow-right-s-line"></i>
                <Link
                  href="/blog"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Blog
                </Link>
                <i className="ri-arrow-right-s-line"></i>
                <span className="text-gray-700 dark:text-gray-300 truncate">
                  {post.category}
                </span>
              </nav>

              {/* Category Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                    liked
                      ? "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <i
                    className={`w-4 h-4 flex items-center justify-center ${
                      liked ? "ri-heart-fill" : "ri-heart-line"
                    }`}
                  ></i>
                  <span className="hidden sm:inline">Like</span>
                </button>

                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                    bookmarked
                      ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <i
                    className={`w-4 h-4 flex items-center justify-center ${
                      bookmarked ? "ri-bookmark-fill" : "ri-bookmark-line"
                    }`}
                  ></i>
                  <span className="hidden sm:inline">Bookmark</span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShareDropdown(!shareDropdown)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-sm sm:text-base"
                  >
                    <i className="ri-share-line w-4 h-4 flex items-center justify-center"></i>
                    <span className="hidden sm:inline">Share</span>
                  </button>

                  {shareDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-10 min-w-[120px] sm:min-w-[150px]">
                      <button className="w-full px-3 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        Copy Link
                      </button>
                      <button className="w-full px-3 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        Twitter
                      </button>
                      <button className="w-full px-3 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        LinkedIn
                      </button>
                      <button className="w-full px-3 sm:px-4 py-2 text-left text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        Facebook
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 sm:mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 sm:h-64 md:h-96 object-cover object-top rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-code:text-sm prose-pre:text-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
                  Related Posts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                      <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer">
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-4 sm:p-6">
                          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                            <span>{relatedPost.date}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </ThemeProvider>
  );
}
