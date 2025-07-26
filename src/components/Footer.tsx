import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Helmet>
        <title>Footer | Prabath Wickramasinghe ICT Portfolio</title>
        <meta name="description" content="Footer section for Prabath Wickramasinghe's A/L ICT portfolio." />
        <meta property="og:title" content="Footer | Prabath Wickramasinghe ICT Portfolio" />
        <meta property="og:description" content="Footer section for Prabath Wickramasinghe's A/L ICT portfolio." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
    <footer className="bg-background/90 backdrop-blur border-t border-border/20 py-8 px-4 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo & Copyright */}
        <div className="flex items-center gap-4">
          {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/049/674/611/small_2x/a-blue-book-with-a-blank-page-png.png" alt="ICT Portfolio Logo" className="h-8 w-8 rounded-lg" /> */}
          <span className="text-sm text-muted-foreground font-medium">&copy; {currentYear} Prabath Wickramasinghe | A/L ICT Online Learning</span>
        </div>
        {/* Center: Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <a href="mailto:Prabath.hanshaka@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
            <Mail className="w-4 h-4" /> Prabath.hanshaka@gmail.com
          </a>
          <a href="tel:+94716935342" className="flex items-center gap-2 text-primary hover:underline">
            <Phone className="w-4 h-4" /> 071 693 53 42
          </a>
          <a href="tel:+94726935342" className="flex items-center gap-2 text-primary hover:underline">
            <Phone className="w-4 h-4" /> 072 693 53 42
          </a>
        </div>
        {/* Right: Social/WhatsApp */}
        {/* <div className="flex items-center gap-3">
          <a href="https://wa.me/94787442884?text=Hi%20Sir!%20I'm%20interested%20in%20your%20A/L%20ICT%20online%20classes.%20Can%20you%20provide%20more%20information?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/></svg>
            WhatsApp
          </a>
        </div> */}
      </div>
    </footer>
    </>
  );
}
