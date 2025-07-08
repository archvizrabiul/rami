import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-foreground hover:text-accent transition-smooth"
          >
            Rabiul Hasan
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;