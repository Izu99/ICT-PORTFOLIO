import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-primary/10 via-background/80 to-accent/10">
      {/* Dynamic Background with Mouse Interaction */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
      
      {/* Floating Orbs with Advanced Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-70 animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                i % 2 === 0 ? 'rgba(147, 51, 234, 0.1)' : 'rgba(59, 130, 246, 0.1)'
              }, transparent)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div 
            className={`space-y-8 max-w-2xl transition-all duration-1500 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Animated Badge */}
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-300 text-sm font-medium tracking-wide">
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  ICT WITH PRABATH WICKRAMASINGHE
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </span>
              </div>
            </div>

            {/* Main Heading with Staggered Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <div 
                  className={`transition-all duration-1000 ease-out ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-300% relative">
                    Unlock Your Potential in A/L ICT
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent blur-sm opacity-50 animate-gradient-x bg-300%">
                      Unlock Your Potential in A/L ICT
                    </div>
                  </span>
                </div>
                <div 
                  className={`text-white transition-all duration-1000 ease-out ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ animationDelay: '0.4s' }}
                >
                  Online Learning
                </div>
              </h1>
            </div>

            {/* Description with Typewriter Effect */}
            <p 
              className={`text-xl text-slate-300 leading-relaxed transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              Join thousands of students who have excelled in A/L ICT with expert guidance. 
              Learn from experienced teacher <span className="text-purple-400 font-semibold">Prabath Wickramasinghe</span> and achieve your academic goals with comprehensive online lessons.
            </p>

            {/* Enhanced Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              
              <a href="#gallery"><Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden border-purple-500/30 text-purple-300 hover: transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/50 backdrop-blur-sm bg-slate-900/20"
                 style={{ boxShadow: '0 4px 20px rgba(147, 51, 234, 0.2)' }}              
              >
               
                <span className="relative z-10">View Gallery</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </Button> </a>
            </div>
          </div>
          
          {/* Enhanced Image Section */}
          <div 
            className={`relative flex justify-center items-center transition-all duration-1500 ease-out ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
              <div className="absolute top-0 left-0 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 md:w-96 md:h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>
            </div>
            {/* Main Image Container */}
            <div className="relative group w-48 h-48 md:w-[28rem] md:h-auto flex items-center justify-center">
              <img 
                src="./hero-img.png" 
                alt="Prabath Wickramasinghe - A/L ICT Teacher" 
                className="w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-tilt { animation: tilt 10s infinite linear; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .bg-300% { background-size: 300% 300%; }
      `}</style>
    </section>
  );
}

