import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-accent/10 pointer-events-none"></div>
      
      {/* Enhanced glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      {/* <div className="absolute top-80 left-1/4 w-10 h-10 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div> */}
     {/* <div className="absolute bottom-40right-1/4 w-8 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div> */}
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm animate-bounce animate-duration-1000 animate-ease-in-out animate-infinite">
            ICT WITH PRABATH WICKRAMASINGHE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Master A/L ICT</span>
              <br /> Online Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join thousands of students who have excelled in A/L ICT with expert guidance. 
              Learn from experienced teacher Prabath Wickramasinghe and achieve your academic goals with comprehensive online lessons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group transition-all duration-300 hover:shadow-lg">
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="transition-all duration-300 hover:bg-primary/5">
                View Course Gallery
              </Button>
            </div>
          </div>
          
          {/* Enhanced Teacher Image with Advanced Effects */}
          {/* <div className="hidden lg:block relative animate-float overflow-hidden"> */}
            {/* Interactive Animated Background Dots */}
            <div className="absolute inset-0">
              {/* <div className="absolute top-10 left-10 w-3 h-3 bg-primary/30 rounded-full animate-dotPulse dot-interactive cursor-pointer"></div>
              <div className="absolute top-20 right-16 w-2 h-2 bg-accent/40 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute bottom-20 left-20 w-4 h-4 bg-primary/20 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-32 right-8 w-2.5 h-2.5 bg-accent/30 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-primary/40 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-1/3 right-20 w-3.5 h-3.5 bg-accent/25 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "2.5s" }}></div> */}
            </div>
            
            {/* Glassmorphism Container */}
            <div className="relative p-8 rounded-3xl backdrop-blur-lg bg-white/0 border-0 border-white/20 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/10 rounded-3xl"></div>
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
              
              {/* Teacher Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="./hero-img.png" 
                  alt="Prabath Wickramasinghe - A/L ICT Teacher" 
                  className="w-full max-w-lg mx-auto transform transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div> */}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}