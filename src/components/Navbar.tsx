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
        ? 'backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/049/674/611/small_2x/a-blue-book-with-a-blank-page-png.png" alt="ICT Portfolio Logo" className="h-8 md:h-9" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Theme Toggle, Contact & WhatsApp Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem]" />}
                {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem]" />}
                {theme === 'system' && <Laptop className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="flex" size="sm">
            Get in Touch
          </Button>
          <a href="https://wa.me/94711098530" target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.657.404 3.237 1.174 4.646L2 22l5.354-1.174A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.522 0-3.004-.366-4.312-1.062l-.307-.162-3.176.697.677-3.099-.162-.307A7.963 7.963 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.297-5.021c-.237-.119-1.398-.691-1.615-.77-.217-.079-.375-.119-.532.119-.158.237-.609.77-.747.928-.138.158-.276.178-.513.059-.237-.119-.999-.368-1.903-1.174-.703-.627-1.179-1.402-1.318-1.639-.138-.237-.015-.365.104-.484.107-.106.237-.276.355-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.059-.119-.532-1.287-.729-1.762-.192-.462-.388-.399-.532-.406l-.453-.009c-.158 0-.414.059-.631.276-.217.217-.827.808-.827 1.969 0 1.161.846 2.285.963 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.084.124 1.492.075.455-.055 1.398-.571 1.597-1.123.198-.552.198-1.025.139-1.123-.059-.099-.217-.158-.454-.277z"/></svg>
              WhatsApp
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <a href="https://wa.me/94YOURNUMBER" target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg shadow-md transition-all" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.657.404 3.237 1.174 4.646L2 22l5.354-1.174A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.522 0-3.004-.366-4.312-1.062l-.307-.162-3.176.697.677-3.099-.162-.307A7.963 7.963 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.297-5.021c-.237-.119-1.398-.691-1.615-.77-.217-.079-.375-.119-.532.119-.158.237-.609.77-.747.928-.138.158-.276.178-.513.059-.237-.119-.999-.368-1.903-1.174-.703-.627-1.179-1.402-1.318-1.639-.138-.237-.015-.365.104-.484.107-.106.237-.276.355-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.059-.119-.532-1.287-.729-1.762-.192-.462-.388-.399-.532-.406l-.453-.009c-.158 0-.414.059-.631.276-.217.217-.827.808-.827 1.969 0 1.161.846 2.285.963 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.084.124 1.492.075.455-.055 1.398-.571 1.597-1.123.198-.552.198-1.025.139-1.123-.059-.099-.217-.158-.454-.277z"/></svg>
            </Button>
          </a>
          <button
            className="text-foreground/80 hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-40 animate-in fade-in">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary py-2 text-lg font-medium border-b border-border/30 transition-colors"
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
                      className="w-16"
                    >
                      Light
                    </Button>
                    <Button 
                      variant={theme === 'dark' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setTheme('dark')}
                      className="w-16"
                    >
                      Dark
                    </Button>
                  </div>
                </div>
                <Button className="mt-3 w-full" size="lg">
                  Get in Touch
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
