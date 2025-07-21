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
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl backdrop-blur-sm bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 min-w-[140px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/30 group-hover:from-blue-400/30 group-hover:to-blue-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-blue-500/30">
                  <GraduationCap className="h-7 w-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Qualification</p>
                  <p className="text-base text-blue-300 font-semibold group-hover:text-blue-200 transition-colors duration-300 leading-tight">BIT(Hons) University of Lincoln</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Email Card */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl backdrop-blur-sm bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 min-w-[140px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ animationDelay: "100ms" }}></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/30 group-hover:from-purple-400/30 group-hover:to-purple-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-purple-500/30">
                  <Mail className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Email</p>
                  <p className="text-base text-purple-300 font-semibold group-hover:text-purple-200 transition-colors duration-300 leading-tight break-all">Prabath.hanshaka@gmail.com</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Phone 1 Card */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-emerald-500/20 min-w-[140px]">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ animationDelay: "200ms" }}></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/30 group-hover:from-emerald-400/30 group-hover:to-emerald-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-emerald-500/30">
                  <Phone className="h-7 w-7 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Mobile</p>
                  <p className="text-base text-emerald-300 font-semibold group-hover:text-emerald-200 transition-colors duration-300 leading-tight">071 693 53 42</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Phone 2 Card */}
            <div className="flex flex-col justify-center h-full group relative p-4 rounded-xl backdrop-blur-sm bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 hover:border-orange-400/40 transition-all duration-700 cursor-pointer overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 min-w-[140px]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ animationDelay: "300ms" }}></div>
              <div className="relative flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-400/30 group-hover:from-orange-400/30 group-hover:to-orange-300/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-orange-500/30">
                  <Phone className="h-7 w-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider">Alternative</p>
                  <p className="text-base text-orange-300 font-semibold group-hover:text-orange-200 transition-colors duration-300 leading-tight">072 693 53 42</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
