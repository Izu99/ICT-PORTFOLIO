import { GraduationCap, Award, BookOpen, School, University, FileText } from 'lucide-react';

export default function Qualifications() {
  const qualifications = [
    {
      title: "BIT (Hons) University of Lincoln",
      type: "Bachelor's Degree",
      description: "Bachelor of Information Technology with Honours from University of Lincoln",
      icon: University,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10"
    },
    {
      title: "Dip in Teaching ICT (NCoE)",
      type: "Professional Diploma",
      description: "Diploma in Teaching ICT from National College of Education, Ruwanpura",
      icon: FileText,
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-600/10 to-pink-500/10"
    },
    {
      title: "Government National School Teacher",
      type: "Professional Status",
      description: "Certified Government National School Teacher with official teaching credentials",
      icon: School,
      gradient: "from-pink-500 to-blue-500",
      bgGradient: "from-pink-500/10 to-blue-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 via-background/80 to-accent/10 relative overflow-hidden" aria-label="Qualifications Section">
      {/* Enhanced Background */}
      
      {/* Floating Academic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-8 opacity-10 animate-float">
          <GraduationCap className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-1/2 right-12 opacity-10 animate-float" style={{ animationDelay: "1s" }}>
          <BookOpen className="h-10 w-10 text-accent" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
          <Award className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent font-semibold mb-2 animate-pulse">Academic Excellence</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Educational <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Qualifications</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Academic Timeline Style */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30 hidden md:block"></div>
          
          {/* Central Timeline Orb */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-xl animate-pulse hidden md:block"></div>

          <div className="space-y-16">
            {qualifications.map((qual, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
              >
                {/* Qualification Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 hover:border-white/20 transition-all duration-700 group-hover:scale-105 overflow-hidden">
                    {/* Dynamic Background Pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${qual.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    {/* Floating Geometric Shapes */}
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/10 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${qual.bgGradient} backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <qual.icon className={`h-10 w-10 bg-gradient-to-r ${qual.gradient} bg-clip-text text-transparent`} />
                      </div>

                      {/* Content */}
                      <div className="text-left md:text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${qual.bgGradient} border border-white/10 text-gray-300 mb-3 group-hover:scale-105 transition-transform duration-300`}>
                          {qual.type}
                        </span>
                        
                        <h4 className={`text-xl font-bold mb-3 bg-gradient-to-r ${qual.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {qual.title}
                        </h4>
                        
                        <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {qual.description}
                        </p>

                        {/* Animated Progress Bar */}
                        <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${qual.gradient} rounded-full group-hover:w-full transition-all duration-1000 w-0`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-full md:w-2/12 flex justify-center py-4 md:py-0">
                  <div className="relative">
                    {/* Pulsing Orb */}
                    <div className={`w-6 h-6 bg-gradient-to-br ${qual.gradient} rounded-full border-4 border-background shadow-xl group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    {/* Expanding Ring */}
                    <div className={`absolute inset-0 w-6 h-6 bg-gradient-to-br ${qual.gradient} rounded-full animate-ping opacity-0 group-hover:opacity-75`}></div>
                    
                    {/* Connection Lines */}
                    <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-full' : 'right-full'} w-8 h-0.5 bg-gradient-to-r ${qual.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block`}></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl backdrop-blur-sm bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-white/10">
            <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-gray-300 font-medium">Committed to Excellence in ICT Education</span>
            <Award className="h-6 w-6 text-accent animate-pulse" />
          </div>
        </div>
      </div>

    </section>
  );
}