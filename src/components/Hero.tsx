
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      
      {/* Enhanced glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              ICT WITH BHANUKA EKANAYAKA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">Master A/L ICT</span>
              <br /> Online Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join thousands of students who have excelled in A/L ICT with expert guidance. 
              Learn from experienced teacher Bhanuka Ekanayaka and achieve your academic goals with comprehensive online lessons.
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
          
          {/* Enhanced 3D visualization with parallax effect */}
          <div className="hidden lg:block relative animate-float overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
            <img 
              src="/lovable-uploads/5df207b8-50bf-4d15-ad4c-4ff13684c573.png" 
              alt="3D Technology Cube" 
              className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
