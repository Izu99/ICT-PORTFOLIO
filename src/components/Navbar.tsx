import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/hooks/use-theme';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  
  // CORRECT WhatsApp number format - Replace with your actual number
  const whatsappNumber = "94787110000"; // Sri Lankan number format: 94 + mobile number without leading 0
  const whatsappMessage = "Hi Sir! I'm interested in your A/L ICT online classes. Can you provide more information?";
  
  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Stop body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-background/80 shadow-md border-b border-border/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          {/* <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/049/674/611/small_2x/a-blue-book-with-a-blank-page-png.png" 
            alt="ICT Portfolio Logo" 
            className="h-8 md:h-9 transition-transform duration-300 group-hover:scale-110" 
          /> */}
          <p className="text-purple-200 font-semibold">Prabath Wickramasinghe</p>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Theme Toggle, WhatsApp Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 transition-all duration-300">
                {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-12" />}
                {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:rotate-12" />}
                {theme === 'system' && <Laptop className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 hover:scale-110" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* WhatsApp Button - theme color update */}
          <Button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 border border-green-500/40 hover:border-green-400/80 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent relative px-4 py-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 overflow-hidden group focus:outline-none focus:ring-0"
            size="sm"
          >
            {/* Your existing green sliding animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none rounded-xl"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-green-400 group-hover:text-green-300 transition-colors duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            <span className="relative z-10">WhatsApp</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile WhatsApp Button - Fixed */}
          <Button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 border border-green-500/40 hover:border-green-400/80 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent relative p-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 overflow-hidden group focus:outline-none focus:ring-0"
            size="icon"
          >
            {/* Add same left-to-right sliding effect for mobile */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none rounded-xl"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-green-400 group-hover:text-green-300 transition-colors duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
          </Button>
          
          <button
            className="text-foreground/80 hover:text-foreground transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-md z-50 animate-in fade-in">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary py-2 text-lg font-medium border-b border-border/30 transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-border/30 pb-3">
                  <span className="font-medium">Theme</span>
                  <div className="flex gap-2">
                    <Button 
                      variant={theme === 'light' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setTheme('light')}
                      className="w-16 transition-all duration-300"
                    >
                      Light
                    </Button>
                    <Button 
                      variant={theme === 'dark' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setTheme('dark')}
                      className="w-16 transition-all duration-300"
                    >
                      Dark
                    </Button>
                  </div>
                </div>
                {/* Remove Get in Touch button, update WhatsApp button color in mobile menu */}
                {/* <Button className="mt-3 w-full transition-all duration-300 hover:scale-105" size="lg">
                  Get in Touch
                </Button> */}
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary hover:bg-transparent focus:bg-transparent active:bg-transparent text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-0 overflow-hidden group"
                  size="lg"
                >
                  {/* Add same left-to-right sliding effect for mobile menu */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none rounded-md"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                  </svg>
                  <span className="relative z-10">Contact via WhatsApp</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}