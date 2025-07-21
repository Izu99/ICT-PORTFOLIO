import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-background relative overflow-hidden">
      {/* Glassmorphism & Colorful Particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-accent/10 pointer-events-none"></div>
      <div className="absolute top-16 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm mb-4">
            A/L ICT with Prabath Wickramasinghe
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Unlock Your Potential in A/L ICT
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our advanced ICT learning program and get expert guidance, interactive online lessons, and personalized support to excel in your A/L ICT exams.
          </p>
          <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/0 via-white/0 to-transparent border-0 border-white/20 shadow-2xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 rounded-3xl animate-pulse"></div>
            <div className="relative z-10">
              <Button size="lg" className="group text-lg px-8 py-6 sm:px-10 font-semibold">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>         
        </div>
      </div>
    </section>
  );
}
