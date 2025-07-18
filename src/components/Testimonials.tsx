
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Bitfuzed delivered our project on time and exceeded our expectations. Their team's technical expertise and communication made the entire process smooth.",
    author: "Jennifer Miller",
    company: "FinTech Innovations",
    logo: "/placeholder.svg"
  },
  {
    quote: "We've been working with Bitfuzed for over 3 years now. They've become an integral part of our development process and have helped us scale efficiently.",
    author: "Michael Robertson",
    company: "HealthTech Solutions",
    logo: "/placeholder.svg"
  },
  {
    quote: "The quality of work from the Bitfuzed team is exceptional. They don't just follow requirements; they contribute valuable insights to improve the product.",
    author: "David Chang",
    company: "E-commerce Platform",
    logo: "/placeholder.svg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient">Clients</span> Say
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border border-white/5 hover:border-primary/20 transition-all">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/40">
                    <path d="M12.76 31.92C8.84 31.92 5.96 30.6 4.12 27.96C2.32 25.32 1.42 21.96 1.42 17.88C1.42 13 2.6 8.96 4.96 5.76C7.36 2.56 10.96 0.559999 15.76 -0.240001L17.72 3.96C14.52 4.68 12.12 6 10.52 7.92C8.92 9.84 8.12 12.16 8.12 14.88C8.12 15.76 8.16 16.4 8.24 16.8C8.64 16.48 9.44 16.32 10.64 16.32C12.96 16.32 14.88 17.12 16.4 18.72C17.92 20.28 18.68 22.36 18.68 24.96C18.68 27.4 17.92 29.36 16.4 30.84C14.88 31.56 13 31.92 10.76 31.92H12.76ZM31.16 31.92C27.24 31.92 24.36 30.6 22.52 27.96C20.72 25.32 19.82 21.96 19.82 17.88C19.82 13 21 8.96 23.36 5.76C25.76 2.56 29.36 0.559999 34.16 -0.240001L36.12 3.96C32.92 4.68 30.52 6 28.92 7.92C27.32 9.84 26.52 12.16 26.52 14.88C26.52 15.76 26.56 16.4 26.64 16.8C27.04 16.48 27.84 16.32 29.04 16.32C31.36 16.32 33.28 17.12 34.8 18.72C36.32 20.28 37.08 22.36 37.08 24.96C37.08 27.4 36.32 29.36 34.8 30.84C33.28 31.56 31.4 31.92 29.16 31.92H31.16Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="h-8 w-auto opacity-70"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
