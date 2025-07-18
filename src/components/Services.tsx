
import { Code, Database, Server, Smartphone, Globe, Shield, Gamepad, Cloud, Tablet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Database Systems",
    description: "Master database design, SQL queries, and data management. Learn to create efficient database structures and understand data relationships."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Technologies",
    description: "Comprehensive coverage of HTML, CSS, JavaScript, and web development concepts. Build dynamic websites and understand client-server architecture."
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Programming Fundamentals",
    description: "Learn programming logic, algorithms, and problem-solving techniques. Master programming languages and software development principles."
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Network Systems",
    description: "Understand computer networks, internet protocols, and network security. Learn about LAN, WAN, and network troubleshooting techniques."
  },
  {
    icon: <Tablet className="h-8 w-8 text-primary" />,
    title: "System Analysis",
    description: "Study system design, analysis methodologies, and project management. Learn to analyze requirements and design efficient IT solutions."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "IT Security",
    description: "Essential cybersecurity concepts, data protection, and ethical computing. Understand security threats and implement protection measures."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      
      {/* Subtle background elements */}
      <div className="absolute -left-20 top-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Learning Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            A/L ICT <span className="text-gradient">Curriculum</span>
          </h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage of all A/L ICT topics with expert guidance and practical learning approaches
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full group overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6 p-3 bg-primary/10 rounded-lg inline-block transition-all duration-300 group-hover:bg-primary/15">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
