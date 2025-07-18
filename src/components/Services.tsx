
import { Code, Database, Server, Smartphone, Globe, Shield, Gamepad, Cloud, Tablet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom Software Development",
    description: "Bespoke solutions crafted with precision and care. We transform complex requirements into elegant, intuitive software that drives your business forward."
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Web Application Development",
    description: "Beautiful, responsive web experiences that work flawlessly across all devices. We combine cutting-edge technology with timeless design principles."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile experiences with exceptional attention to detail. Every tap, swipe, and interaction is thoughtfully designed and implemented."
  },
  {
    icon: <Gamepad className="h-8 w-8 text-primary" />,
    title: "Game Development",
    description: "Immersive gaming experiences built with modern engines and optimization techniques. We bring worlds to life through thoughtful gameplay mechanics and stunning visuals."
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable cloud architectures designed for performance and reliability. We leverage serverless computing and managed services to create efficient, cost-effective solutions."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Security Services",
    description: "Comprehensive protection for your digital assets. We implement robust security measures that safeguard your data while maintaining a seamless user experience."
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
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Thoughtfully Crafted</span> Solutions
          </h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We approach every project with care and precision, focusing on the details that make your product extraordinary
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
