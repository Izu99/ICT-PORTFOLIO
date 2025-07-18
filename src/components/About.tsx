
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
          
          <div>
            <img 
              src="/lovable-uploads/1f1f06c6-8844-456c-96f2-93879a7d0212.png" 
              alt="About Bitfuzed" 
              className="rounded-lg shadow-xl w-full"
            />
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
