
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    image: "/lovable-uploads/9b9980ff-9e67-449a-ad8d-f1ffbce9bef8.png",
    name: "Alex Johnson",
    title: "CEO & Co-Founder",
    description: "Over 10 years of experience in international IT sales, ensured client satisfaction, driven revenue growth, and infused a personal touch into sales presentations."
  },
  {
    image: "/placeholder.svg",
    name: "Sarah Williams",
    title: "CTO & Co-Founder",
    description: "Over 10 years in software professional services and R&D project delivery. Played many parts in software development, from managing the R&D team to delivering cutting-edge solutions."
  },
  {
    image: "/placeholder.svg",
    name: "Michael Chen",
    title: "VP of Engineering",
    description: "15+ years of experience building scalable software solutions and leading development teams across multiple industries and technologies."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Meet the <span className="text-gradient">Founders</span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our leadership team brings decades of experience in software development, business strategy, and client satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border border-white/5 hover:shadow-lg transition duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-primary text-sm mb-3">{member.title}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-xl border border-white/10 bg-blue-gradient">
          <h4 className="text-xl md:text-2xl font-bold mb-4">Individual Approach</h4>
          <p className="text-gray-300">
            We build global teams customized to meet clients' specific needs across various industries. 
            Whether you're in healthcare, finance, e-commerce, logistics, or any other business domain, 
            we connect you with the right talent to drive your business forward.
          </p>
        </div>
      </div>
    </section>
  );
}
