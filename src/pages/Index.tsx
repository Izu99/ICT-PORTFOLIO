
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Trends from "@/components/Trends";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle initial mount with a smooth fade-in
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme class to body (helps with full-screen styling)
  useEffect(() => {
    if (!mounted) return;
    
    document.body.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.body.classList.add(systemTheme);
    } else {
      document.body.classList.add(theme);
    }
  }, [theme, mounted]);

  // Handle scroll animations
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;
        
        if (sectionTop < triggerPoint) {
          section.classList.add('animate-fadeIn');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>; // Prevent flash of unstyled content
  }

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-500 ${theme}`}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trends />
      <Team />
      <CTA />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
