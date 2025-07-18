
import { Check } from 'lucide-react';

interface StatProps {
  value: string;
  description: string;
}

function Stat({ value, description }: StatProps) {
  return (
    <div className="flex-1">
      <h3 className="text-4xl md:text-5xl font-bold mb-2">{value}</h3>
      <p className="text-sm text-gray-400 max-w-xs">{description}</p>
      <div className="w-20 h-1 bg-primary/50 mt-4"></div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">About the Teacher</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Expert A/L ICT <span className="text-gradient">Education</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Bhanuka Ekanayaka is an experienced A/L ICT teacher with years of expertise in 
              Information and Communication Technology education, helping students achieve excellence in their studies.
            </p>
            
            <ul className="space-y-3 mt-6">
              {[
                "Comprehensive A/L ICT curriculum covering all syllabus requirements",
                "Expert guidance with deep knowledge of ICT concepts and applications",
                "Interactive online learning sessions for better understanding",
                "Personalized support and exam preparation strategies"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-2" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Advanced Glassmorphism Image Container */}
          <div className="relative group cursor-pointer">
            {/* Interactive Animated Background Dots */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-8 left-8 w-3 h-3 bg-primary/40 rounded-full animate-dotPulse dot-interactive cursor-pointer"></div>
              <div className="absolute top-16 right-12 w-2 h-2 bg-accent/50 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "0.3s" }}></div>
              <div className="absolute bottom-16 left-16 w-4 h-4 bg-primary/30 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "0.6s" }}></div>
              <div className="absolute bottom-24 right-6 w-2.5 h-2.5 bg-accent/40 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "0.9s" }}></div>
              <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "1.2s" }}></div>
              <div className="absolute top-1/3 right-16 w-3.5 h-3.5 bg-accent/35 rounded-full animate-dotPulse dot-interactive cursor-pointer" style={{ animationDelay: "1.5s" }}></div>
            </div>
            
            {/* Main Glassmorphism Frame */}
            <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-700 overflow-hidden">
              {/* Dynamic Background Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 animate-pulse"></div>
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl z-10">
                <img 
                  src="/lovable-uploads/1f1f06c6-8844-456c-96f2-93879a7d0212.png" 
                  alt="Advanced ICT Learning Environment" 
                  className="w-full transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              {/* Floating Interactive Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/30 rounded-full animate-bounce hover:animate-spin cursor-pointer transition-all duration-300"></div>
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-accent/40 rounded-full animate-bounce hover:animate-ping cursor-pointer transition-all duration-300" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -bottom-3 -left-3 w-7 h-7 bg-primary/25 rounded-full animate-bounce hover:animate-pulse cursor-pointer transition-all duration-300" style={{ animationDelay: "1s" }}></div>
              <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-accent/35 rounded-full animate-bounce hover:animate-spin cursor-pointer transition-all duration-300" style={{ animationDelay: "1.5s" }}></div>
            </div>
            
            {/* Additional Floating Dots Around Container */}
            <div className="absolute -top-8 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse hover:animate-bounce cursor-pointer transition-all duration-300"></div>
            <div className="absolute -right-8 top-1/4 w-3 h-3 bg-accent/30 rounded-full animate-pulse hover:animate-spin cursor-pointer transition-all duration-300"></div>
            <div className="absolute -bottom-8 right-1/3 w-2.5 h-2.5 bg-primary/35 rounded-full animate-pulse hover:animate-ping cursor-pointer transition-all duration-300"></div>
            <div className="absolute -left-8 bottom-1/3 w-1.5 h-1.5 bg-accent/45 rounded-full animate-pulse hover:animate-bounce cursor-pointer transition-all duration-300"></div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat 
            value="1000+" 
            description="Students successfully guided through A/L ICT examinations"
          />
          <Stat 
            value="95%" 
            description="Student success rate in A/L ICT examinations with excellent results"
          />
          <Stat 
            value="5+" 
            description="Years of dedicated experience in ICT education and teaching"
          />
        </div>
      </div>
    </section>
  );
}
