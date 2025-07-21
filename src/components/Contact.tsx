import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, GraduationCap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    // For now, just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="text-gradient">Excel</span> in A/L ICT?
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Contact us today to enroll in our A/L ICT program and start your journey toward academic excellence
          </p>
        </div>
        
        {/* Personal Details and Contact Form - One Responsive Row, Balanced Height */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 w-full justify-center items-stretch">
          {/* Personal Details Cards - Two Rows, Smaller, Balanced Height */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 flex-1 max-w-lg h-full">
            {/* Education Card */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 min-w-[140px] bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-cyan-500/30 bg-transparent">
                  <GraduationCap className="h-7 w-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Qualification</p>
                  <p className="text-base text-cyan-300 font-semibold group-hover:text-cyan-200 transition-colors duration-300 leading-tight">BIT(Hons) University of Lincoln</p>
                </div>
              </div>
            </div>
            {/* Email Card */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl border border-purple-500/40 hover:border-purple-400/80 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 min-w-[140px] bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-purple-500/30 bg-transparent">
                  <Mail className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Email</p>
                  <p className="text-base text-purple-300 font-semibold group-hover:text-purple-200 transition-colors duration-300 leading-tight break-all">Prabath.hanshaka@gmail.com</p>
                </div>
              </div>
            </div>
            {/* Phone 1 Card - Mobile (Brown/orange style) */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl border border-orange-700/40 hover:border-orange-600/80 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-orange-700/20 min-w-[140px] bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-700/0 via-orange-700/20 to-orange-700/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl border border-orange-700/30 group-hover:border-orange-600/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-700/30 bg-transparent">
                  <Phone className="h-7 w-7 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Mobile</p>
                  <p className="text-base text-orange-300 font-semibold group-hover:text-orange-200 transition-colors duration-300 leading-tight">072 693 53 42</p>
                </div>
              </div>
            </div>
            {/* Phone 2 Card - WhatsApp Alternative */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl border border-green-500/40 hover:border-green-400/80 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-green-500/20 min-w-[140px] bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 transform -translate-x-full group-hover:translate-x-0 group-hover:animate-[slide-right_1s_ease-in-out_forwards] transition-transform duration-1000 pointer-events-none"></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl border border-green-500/30 group-hover:border-green-400/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-green-500/30 bg-transparent">
                  {/* WhatsApp SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="mx-auto text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">WhatsApp</p>
                  <a
                    href="https://wa.me/940716935342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-green-300 font-semibold group-hover:text-green-200 transition-colors duration-300 leading-tight flex items-center gap-2"
                  >
                    071 693 53 42
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form - Responsive, Larger, Centered, Balanced Height */}
          <div className="flex-2 w-full max-w-full lg:min-w-[600px] lg:max-w-2xl flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8 md:p-10 rounded-xl border border-white/10 bg-card/50 backdrop-blur w-full">
              <div className="space-y-6">
                <div className="space-y-2 w-full">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 w-full text-base px-4 py-3 rounded-lg"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 w-full text-base px-4 py-3 rounded-lg"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="min-h-[120px] bg-background/50 w-full text-base px-4 py-3 rounded-lg"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <Button type="submit" className="w-full max-w-xs mx-auto text-base py-3 rounded-lg">
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
