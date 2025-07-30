"use client";

import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The final product was both beautiful and highly functional.",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20business%20woman%2C%20product%20manager%2C%20modern%20office%20setting%2C%20friendly%20smile%2C%20professional%20attire%2C%20natural%20lighting%2C%20corporate%20portrait%20photography&width=100&height=100&seq=testimonial-001&orientation=squarish",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "Working with Alex was a game-changer for our startup. He transformed our vision into a stunning, user-friendly application. His communication skills and technical knowledge are outstanding.",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20CEO%20entrepreneur%2C%20startup%20founder%2C%20modern%20business%20attire%2C%20confident%20expression%2C%20clean%20background%2C%20professional%20photography&width=100&height=100&seq=testimonial-002&orientation=squarish",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at DesignStudio",
      content:
        "Alex seamlessly translated our designs into pixel-perfect code. His understanding of both design and development made collaboration effortless. Highly recommended for any web project.",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20creative%20UX%20designer%2C%20modern%20design%20studio%20environment%2C%20artistic%20background%2C%20professional%20yet%20creative%20attire%2C%20natural%20lighting%2C%20contemporary%20portrait&width=100&height=100&seq=testimonial-003&orientation=squarish",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 shadow-xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <i
                        key={i}
                        className="ri-star-fill text-yellow-400 text-xl"
                      ></i>
                    )
                  )}
                </div>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
