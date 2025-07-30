
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Rahul
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-github-line text-sm sm:text-base"></i>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-sm sm:text-base"></i>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-twitter-line text-sm sm:text-base"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm sm:text-base">rahul@example.com</p>
              <p className="text-gray-300 text-sm sm:text-base">+91 98765 43210</p>
              <p className="text-gray-300 text-sm sm:text-base">Mumbai, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2024 Rahul Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
