import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
                RABIUL
                <br />
                <span className="text-accent">HASAN</span>
              </h1>
              <p className="text-xl lg:text-2xl font-inter font-light opacity-90">
                Architectural Visualizer | AI enthusiast
              </p>
            </div>
            
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+88015 189 25074</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>rabiulrami@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>378/1, West Shewrapara, Dhaka</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 transition-smooth"
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 transition-smooth"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-large">
                <img 
                  src="/lovable-uploads/0a0e75a7-5771-4883-82e9-fed89b51fe1f.png"
                  alt="Rabiul Hasan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center shadow-medium">
                <span className="text-2xl font-bold text-accent-foreground">RH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;