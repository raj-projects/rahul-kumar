"use client";

import { ThemeProvider } from "../components/ThemeProvider";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import DashboardSection from "../components/DashboardSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
// import ProjectsSection from "../components/ProjectsSection";
// import BlogSection from "../components/BlogSection";
// import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <HeroSection />
        <DashboardSection />
        <AboutSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
        {/* <BlogSection /> */}
        {/* <TestimonialsSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
