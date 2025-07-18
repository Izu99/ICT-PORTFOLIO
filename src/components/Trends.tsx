
import { Brain, Cloud, Code, Server, Layers, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const trends = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Leveraging artificial intelligence and machine learning to automate complex tasks, personalize user experiences, and build intelligent applications that adapt to user behavior.",
    link: "#"
  },
  {
    icon: Code,
    title: "Low-Code Development",
    description: "Rapidly build and deploy applications with minimal coding, increasing agility and reducing time-to-market for critical business solutions while maintaining flexibility.",
    link: "#"
  },
  {
    icon: Cloud,
    title: "Serverless Architecture",
    description: "Building scalable, resilient applications with serverless computing that automatically scales resources based on demand, reducing operational overhead.",
    link: "#"
  },
  {
    icon: Lock,
    title: "Zero-Trust Security",
    description: "Implementing comprehensive security frameworks that verify every user and system, protecting sensitive data and ensuring compliance with regulations.",
    link: "#"
  },
  {
    icon: Layers,
    title: "Microservices",
    description: "Developing modular, independently deployable services that enable faster development cycles, better scalability, and improved resilience.",
    link: "#"
  },
  {
    icon: Server,
    title: "Edge Computing",
    description: "Processing data closer to where it's generated to reduce latency, enhance performance, and enable real-time applications in IoT and mobile environments.",
    link: "#"
  }
];

export default function Trends() {
  return (
    <section id="trends" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Innovation</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Latest Software Development Trends</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with cutting-edge technologies and methodologies that define the future of software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <trend.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{trend.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {trend.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center group"
          >
            Learn more about our innovative approach
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
