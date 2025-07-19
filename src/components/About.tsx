import { Check } from 'lucide-react';

interface StatProps {
  value: string;
  description: string;
}

function Stat({ value, description }: StatProps) {
  return (
    <div className="flex-1 p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 group">
      <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{value}</h3>
      <p className="text-sm text-gray-300 max-w-xs group-hover:text-gray-200 transition-colors duration-300">{description}</p>
      <div className="w-20 h-1 bg-gradient-to-r from-primary/50 to-accent/50 mt-4 group-hover:w-32 transition-all duration-500"></div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-600/5 to-background pointer-events-none"></div>
      <div className="absolute top-20 left-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2 animate-pulse">About the Teacher</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Expert A/L ICT <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Bhanuka Ekanayaka is an experienced A/L ICT teacher with years of expertise in 
              Information and Communication Technology education, helping students achieve excellence in their studies.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                "Comprehensive A/L ICT curriculum covering all syllabus requirements",
                "Expert guidance with deep knowledge of ICT concepts and applications",
                "Interactive online learning sessions for better understanding",
                "Personalized support and exam preparation strategies"
              ].map((item, index) => (
                <li key={index} className="flex items-start group hover:translate-x-2 transition-transform duration-300">
                  <div className="mr-3 mt-1 p-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Advanced Glassmorphism Container */}
          <div className="relative group cursor-pointer">
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-8 left-8 w-3 h-3 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
              <div className="absolute top-16 right-12 w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              <div className="absolute bottom-16 left-16 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
              <div className="absolute bottom-24 right-6 w-2.5 h-2.5 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: "0.9s" }}></div>
              <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "1.2s" }}></div>
              <div className="absolute top-1/3 right-16 w-3.5 h-3.5 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            </div>
            
            {/* Main Glassmorphism Container */}
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/0 via-white/0 to-transparent border-0 border-white/20 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-700 overflow-hidden">
              {/* Background Layers */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 rounded-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 animate-pulse"></div>
                <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl z-10">
                <img 
                  src="https://tse4.mm.bing.net/th/id/OIP.zASds478FCUUrnSjo4MrKgHaDt?w=800&h=400&rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Advanced ICT Learning Environment" 
                  className="w-full h-80 object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/20 via-white/10 to-transparent border border-white/30">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-white/60 to-white/40 rounded-full animate-pulse"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Interactive Learning</h4>
                    <p className="text-sm text-white/80">Advanced ICT Education</p>
                  </div>
                </div>
              </div>
              
              {/* Corner Decorations */}
              {/* <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full animate-bounce backdrop-blur-sm border border-white/20"></div>
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-accent/50 to-primary/50 rounded-full animate-bounce backdrop-blur-sm border border-white/25" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary/35 to-accent/35 rounded-full animate-bounce backdrop-blur-sm border border-white/15" style={{ animationDelay: "1s" }}></div>
              <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-gradient-to-br from-accent/45 to-primary/45 rounded-full animate-bounce backdrop-blur-sm border border-white/30" style={{ animationDelay: "1.5s" }}></div> */}
            </div>
            
            {/* Orbital Elements */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full animate-spin backdrop-blur-sm border border-white/20"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-accent/50 to-primary/50 rounded-full animate-spin backdrop-blur-sm border border-white/25" style={{ animationDelay: "0.7s" }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-gradient-to-br from-primary/35 to-accent/35 rounded-full animate-spin backdrop-blur-sm border border-white/15" style={{ animationDelay: "1.4s" }}></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gradient-to-br from-accent/45 to-primary/45 rounded-full animate-spin backdrop-blur-sm border border-white/30" style={{ animationDelay: "2.1s" }}></div> */}
          </div>
        </div>
        
        {/* Enhanced Stats */}
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