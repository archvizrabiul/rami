import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Villa Exterior",
      category: "Exterior",
      image: "https://placehold.co/600x400/e5e7eb/6b7280?text=Modern+Villa",
      description: "Contemporary residential design with clean lines and natural materials"
    },
    {
      title: "Cozy Living Room",
      category: "Interior", 
      image: "https://placehold.co/600x400/e5e7eb/6b7280?text=Living+Room",
      description: "Warm and inviting interior space with modern furnishings"
    },
    {
      title: "Office Building",
      category: "3D Model",
      image: "https://placehold.co/600x400/e5e7eb/6b7280?text=Office+Building",
      description: "Commercial architecture visualization with detailed modeling"
    },
    {
      title: "Kitchen Design",
      category: "Interior",
      image: "https://placehold.co/600x400/e5e7eb/6b7280?text=Kitchen+Design", 
      description: "Modern kitchen with sleek finishes and functional layout"
    },
    {
      title: "Landscape View",
      category: "Exterior",
      image: "https://placehold.co/600x400/e5e7eb/6b7280?text=Landscape+View",
      description: "Outdoor architectural visualization with landscaping elements"
    },
    {
      title: "3D Floor Plan",
      category: "3D Model",
      image: "https://placehold.co/600x400/e5e7eb/6b7280?text=Floor+Plan",
      description: "Detailed architectural floor plan with realistic rendering"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my work in architectural visualization, 3D modeling, and AI-driven design. 
              Click a project to see more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-soft border border-border hover:shadow-medium transition-all duration-300 overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;