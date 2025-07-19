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
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Trends', href: '#trends' },
  { name: 'Partnership', href: '#partnership' },
  { name: 'Portfolio', href: '#portfolio' },
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
        ? 'bg-background/80 backdrop-blur-md shadow-md' 
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
        
        {/* Theme Toggle & Contact Button (Desktop) */}
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
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
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
