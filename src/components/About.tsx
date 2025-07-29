import { Check, Monitor, Code, Database, Wifi, Cpu, Globe, Shield } from 'lucide-react'; 
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>About | Prabath Wickramasinghe ICT Portfolio</title>
        <meta name="description" content="Learn more about Prabath Wickramasinghe, an expert in A/L ICT education, and his teaching philosophy." />
        <meta property="og:title" content="About | Prabath Wickramasinghe ICT Portfolio" />
        <meta property="og:description" content="Learn more about Prabath Wickramasinghe, an expert in A/L ICT education." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>
      <section id="about" className="py-20 bg-background relative overflow-hidden" aria-label="About Section">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-accent/10 pointer-events-none"></div>
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
          {/* Content - Now on Left */}
          <div className="space-y-6 order-1 lg:order-1">
            <p className="text-lg text-gray-300 leading-relaxed">
              Prabath Wickramasinghe is an experienced A/L ICT teacher with years of expertise in 
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
          
          {/* ICT Technology Glassmorphism Container - Now on Right */}
          <div className="relative group cursor-pointer order-2 lg:order-2">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-1">
                {[...Array(48)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-sm"
                    style={{ 
                      animation: `pulse ${2 + (i % 3)}s infinite`,
                      animationDelay: `${(i % 8) * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-8 left-8 p-2 rounded-lg bg-primary/20 backdrop-blur-sm animate-bounce" style={{ animationDelay: "0s" }}>
                <Monitor className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute top-16 right-12 p-2 rounded-lg bg-accent/20 backdrop-blur-sm animate-bounce" style={{ animationDelay: "0.5s" }}>
                <Code className="h-4 w-4 text-accent" />
              </div>
              <div className="absolute bottom-16 left-16 p-2 rounded-lg bg-primary/30 backdrop-blur-sm animate-bounce" style={{ animationDelay: "1s" }}>
                <Database className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute bottom-24 right-6 p-2 rounded-lg bg-accent/25 backdrop-blur-sm animate-bounce" style={{ animationDelay: "1.5s" }}>
                <Wifi className="h-4 w-4 text-accent" />
              </div>
              <div className="absolute top-1/2 left-4 p-2 rounded-lg bg-primary/25 backdrop-blur-sm animate-bounce" style={{ animationDelay: "2s" }}>
                <Cpu className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute top-1/3 right-16 p-2 rounded-lg bg-accent/30 backdrop-blur-sm animate-bounce" style={{ animationDelay: "2.5s" }}>
                <Globe className="h-4 w-4 text-accent" />
              </div>
              <div className="absolute top-2/3 left-1/2 p-2 rounded-lg bg-primary/20 backdrop-blur-sm animate-bounce" style={{ animationDelay: "3s" }}>
                <Shield className="h-4 w-4 text-primary" />
              </div>
            </div>
            
            {/* Multi-Layer Glassmorphism Container */}
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-700 overflow-hidden group-hover:border-white/30">
              {/* Animated Circuit Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 300">
                  <path 
                    d="M50 50 L150 50 L150 100 L250 100 L250 150 L350 150" 
                    stroke="url(#circuit-gradient)" 
                    strokeWidth="2" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M100 200 L200 200 L200 250 L300 250" 
                    stroke="url(#circuit-gradient2)" 
                    strokeWidth="2" 
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <defs>
                    <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                      <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
                    </linearGradient>
                    <linearGradient id="circuit-gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Layered Glass Effect */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Central ICT Dashboard */}
              <div className="relative z-10 text-center p-6">
                <div className="relative mb-6">
                  {/* Central Processing Unit Visual */}
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-white/20 group-hover:rotate-180 transition-transform duration-1000"></div>
                    <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-lg flex items-center justify-center">
                      <Cpu className="h-12 w-12 text-white group-hover:animate-pulse" />
                    </div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-4 h-4 bg-primary rounded-full group-hover:animate-ping"></div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                      <div className="w-4 h-4 bg-accent rounded-full group-hover:animate-ping" style={{ animationDelay: "0.5s" }}></div>
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                      <div className="w-4 h-4 bg-primary/70 rounded-full group-hover:animate-ping" style={{ animationDelay: "1s" }}></div>
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                      <div className="w-4 h-4 bg-accent/70 rounded-full group-hover:animate-ping" style={{ animationDelay: "1.5s" }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stats */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    ICT Learning Hub
                  </h4>
                  <p className="text-gray-300 text-sm mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Advanced Technology Education Platform
                  </p>
                  
                  {/* Tech Indicators */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-gradient-to-br from-primary/10 to-transparent border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-center mb-2">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-xs text-gray-300">Interactive</div>
                    </div>
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-gradient-to-br from-accent/10 to-transparent border border-white/10 group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: "0.1s" }}>
                      <div className="flex items-center justify-center mb-2">
                        <Code className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-xs text-gray-300">Practical</div>
                    </div>
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-gradient-to-br from-primary/10 to-transparent border border-white/10 group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: "0.2s" }}>
                      <div className="flex items-center justify-center mb-2">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-xs text-gray-300">Comprehensive</div>
                    </div>
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-gradient-to-br from-accent/10 to-transparent border border-white/10 group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: "0.3s" }}>
                      <div className="flex items-center justify-center mb-2">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-xs text-gray-300">Modern</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data Flow Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-0 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: "0s" }}></div>
                <div className="absolute top-2/4 right-0 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/70 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent/70 rounded-full animate-ping" style={{ animationDelay: "1.5s" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats with Different Style */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Stat - Hexagonal Style */}
          <div className="relative group cursor-pointer">
            <div className="flex-1 p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-primary/10 via-white/5 to-accent/10 border-2 border-white/10 hover:border-primary/40 transition-all duration-700 group relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-primary/30 transform rotate-45 group-hover:rotate-90 transition-transform duration-1000"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-accent/30 transform -rotate-45 group-hover:-rotate-90 transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1K+</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">1000+</h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Students successfully guided through A/L ICT examinations</p>
                <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50 mt-4 rounded-full group-hover:h-2 transition-all duration-500"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-primary/60 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-accent/60 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>
          
          {/* Second Stat - Circuit Board Style */}
          <div className="relative group cursor-pointer">
            <div className="flex-1 p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-accent/10 via-white/5 to-primary/10 border-2 border-white/10 hover:border-accent/40 transition-all duration-700 group relative overflow-hidden">
              {/* Circuit Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <svg className="w-full h-full" viewBox="0 0 200 150">
                  <path d="M20 20 L80 20 L80 60 L140 60 L140 100 L180 100" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="2" fill="none" className="animate-pulse"/>
                  <path d="M40 130 L100 130 L100 90 L160 90" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: "0.5s" }}/>
                  <circle cx="80" cy="20" r="4" fill="rgba(147, 51, 234, 0.5)" className="animate-pulse"/>
                  <circle cx="140" cy="60" r="4" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse" style={{ animationDelay: "0.3s" }}/>
                  <circle cx="100" cy="130" r="4" fill="rgba(147, 51, 234, 0.5)" className="animate-pulse" style={{ animationDelay: "0.8s" }}/>
                </svg>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">95%</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">95%</h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Student success rate in A/L ICT examinations with excellent results</p>
                <div className="w-full h-1 bg-gradient-to-r from-accent/50 to-primary/50 mt-4 rounded-full group-hover:h-2 transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Third Stat - Holographic Style */}
          <div className="relative group cursor-pointer">
            <div className="flex-1 p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-primary/10 via-accent/5 to-white/5 border-2 border-white/10 hover:border-primary/40 transition-all duration-700 group relative overflow-hidden">
              {/* Holographic Grid */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <div className="grid grid-cols-6 grid-rows-4 h-full w-full gap-1 p-4">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-sm group-hover:animate-pulse"
                      style={{ animationDelay: `${(i % 4) * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-180 transition-all duration-700">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5+</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">5+</h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Years of dedicated experience in ICT education and teaching</p>
                <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50 mt-4 rounded-full group-hover:h-2 transition-all duration-500"></div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full group-hover:animate-ping"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full group-hover:animate-ping" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-primary/70 rounded-full group-hover:animate-ping" style={{ animationDelay: "1s" }}></div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-accent/70 rounded-full group-hover:animate-ping" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
} 