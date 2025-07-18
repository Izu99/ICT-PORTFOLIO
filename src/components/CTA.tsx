
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section id="partnership" className="py-20 bg-purple-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to accelerate your software development?
          </h2>
          <p className="text-xl dark:text-gray-200 light:text-gray-700 mb-8 max-w-2xl mx-auto">
            Partner with Bitfuzed to access top-tier development talent and deliver exceptional software solutions
          </p>
          <Button size="lg" className="group text-lg px-6 py-6 sm:px-8">
            Let's work together
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
