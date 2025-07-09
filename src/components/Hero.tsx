import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-background flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center justify-center max-w-6xl mx-auto">
          {/* Mobile: Profile Image First */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-muted border-4 border-card shadow-large">
                <img 
                  src="/lovable-uploads/6150e2ec-77e1-41e3-a182-edc53748a388.png"
                  alt="Rabiul Hasan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center lg:text-left order-last lg:order-first">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                Rabiul Hasan
              </h1>
              <p className="text-xl text-muted-foreground">
                Architectural Visualizer | AI Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Welcome to my creative space where architecture meets artistry and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;