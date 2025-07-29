import { useState, useEffect } from 'react'; 
import { Menu, X, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from '@/hooks/use-theme';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Class Locations', href: '#class-locations' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Enroll', href: '#cta' },
  { name: 'Contact', href: '#contact' }
];

// Data for notifications
const notificationData = [
  {
    id: 1,
    // imageSrc: './bill.jpg',
    alt: 'New class schedule',
    description: 'Siyora-Delgoda',
    timetable: {
      '2025': [
        {
          title: 'Paper & Revision',
          day: 'Sunday',
          time: '10.30a.m - 6.30p.m',
        },
        {
          title: 'Theory',
          day: 'Saturday',
          time: '1.30p.m - 5.30p.m',
        },
        {
          title: 'Online paper class',
          day: 'Friday',
          time: '9.00p.m - 11.00p.m',
        },
      ],
      '2026': [
        {
          title: 'Theory',
          day: 'Saturday',
          time: '8.00a.m - 10.30a.m',
        },
      ],
      '2027': [
        {
          title: 'Theory',
          day: 'Saturday',
          time: '11.00a.m - 1.00p.m',
        },
      ],
    },
  },
  {
    id: 2,
    // imageSrc: './bill.jpg',
    alt: 'New class schedule',
    description: 'Wasity-Kiribathgoda',
    timetable: {
      '2025': [
        {
          title: 'Paper & Revision',
          day: 'Monday',
          time: '10.30a.m-6.30p.m',
        },
        {
          title: 'Theory Group 01',
          day: 'Tuesday',
          time: '3.30-6.30p.m',
        },
        {
          title: 'Theory Group 02',
          day: 'Wednesday',
          time: '6.00-9.00p.m',
        },
        {
          title: 'Online paper class',
          day: 'Friday',
          time: '9.00-11.00p.m',
        },
        {
          title: 'Pehonix class',
          day: 'Saturday',
          time: '6.00-10.00p.m',
        },
      ],
      '2026': [
        {
          title: 'Theory',
          day: 'Wednesday',
          time: '3.30-6.00p.m',
        },
      ],
      '2027': [
        {
          title: 'Theory Group 01',
          day: 'Sunday',
          time: '10.30-12.30',
        },
        {
          title: 'Theory Group 02',
          day: 'Tuesday',
          time: '3.30-5.30',
        },
      ],
    },
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  
  // CORRECT WhatsApp number format - Replace with your actual number
  const whatsappNumber = "94716935342"; // Sri Lankan number format: 94 + mobile number without leading 0
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

  // Stop body scrolling when a modal is open
  useEffect(() => {
    if (isMenuOpen || isNotificationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isNotificationOpen]);

  // Handle closing animation for notification popup
  const handleCloseNotification = () => {
    if (isAnimatingOut) return; // Prevent double-triggering
    localStorage.setItem('hasSeenNotification', 'true');
    setIsAnimatingOut(true);
    // Duration should match the animation duration.
    setTimeout(() => {
      setIsNotificationOpen(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  return (
    <>
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setIsNotificationOpen(true)}
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="View notifications"
                >
                  <Bell size={24} className="animate-on-hover-ring" />
                  <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-800 ring-2 ring-background animate-sonar-pulse"></span>
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>You have a new notification!</p></TooltipContent>
            </Tooltip>

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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setIsNotificationOpen(true)}
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="View notifications"
                >
                  <Bell size={24} className="animate-on-hover-ring" />
                  <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-800 ring-2 ring-background animate-sonar-pulse"></span>
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>You have a new notification!</p></TooltipContent>
            </Tooltip>

            <Button 
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 border border-green-500/40 hover:border-green-400/80 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent relative p-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 overflow-hidden group focus:outline-none focus:ring-0"
              size="icon"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none rounded-xl"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
            </Button>
            
            <button
              className="text-foreground/80 hover:text-foreground transition-colors duration-300 relative z-[9999]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation - Moved outside header with higher z-index */}
      {isMenuOpen && (
        <>
          {/* Simplified Mobile Menu Overlay */}
          <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-[9998] animate-in fade-in">
            <div className="container mx-auto px-4 pt-24 pb-8 relative h-full flex flex-col">
              <nav className="flex flex-col gap-5 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary py-3 text-xl font-semibold border-b border-border/20 transition-all duration-300 hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Notification Popup */}
      {isNotificationOpen && (
        <div 
          className={`fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300
            ${isAnimatingOut ? 'animate-out fade-out' : ''}`}
          onClick={handleCloseNotification}
        >
          <button
            onClick={handleCloseNotification}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10"
          >
            <X size={24} />
          </button>

          <div 
            className={`relative bg-card p-4 rounded-2xl shadow-2xl border border-border/20 max-w-3xl w-full m-4 
              animate-in fade-in-90 zoom-in-95 slide-in-from-bottom-4 sm:slide-in-from-bottom-0 duration-300
              ${isAnimatingOut ? 'animate-out fade-out-95 zoom-out-95 slide-out-to-bottom-4 sm:slide-out-to-bottom-0' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[80vh] md:overflow-y-hidden md:max-h-full">
              {notificationData.sort((a, b) => a.id === 2 ? -1 : 1).map((data) => (
                <div key={data.id}>
                  {(data.description || data.timetable) && (
                    <div className="mt-4 text-center">
                      {data.description && (
                        <p className="text-lg text-muted-foreground mb-4">
                          {data.description}
                        </p>
                      )}
                      {data.timetable && (
                        <div className="text-left">
                          {Object.entries(data.timetable).map(([year, classes]) => (
                            <div key={year} className="mb-4">
                              <h5 className="text-xl font-semibold text-foreground mb-2">{year}</h5>
                              <ul className="space-y-2">
                                {classes.map((classInfo, index) => (
                                  <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-muted p-3 rounded-lg">
                                    <span className="font-medium text-foreground">{classInfo.title}</span>
                                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{classInfo.day} {classInfo.time}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}   
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 border border-green-500/40 hover:border-green-400/80 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent relative px-4 py-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 overflow-hidden group focus:outline-none focus:ring-0"
                size="sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none rounded-xl"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
                <span className="relative z-10">Contact on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      )} 
    </>
  );
}