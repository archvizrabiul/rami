import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectDialogProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    software: string[];
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  const [showSoftware, setShowSoftware] = useState(false);

  if (!project) return null;

  const projectGallery = project.title === "Serene Bedroom Sanctuary" ? [
    "/lovable-uploads/f55d0697-cbf9-4b31-a8eb-9f8ac12add55.png",
    "/lovable-uploads/cd71e653-0f88-4daf-ac80-e43d7d6d9523.png",
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Additional+Render+1",
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Additional+Render+2",
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Additional+Render+3"
  ] : [
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Project+Render+1",
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Project+Render+2", 
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Project+Render+3",
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Project+Render+4",
    "https://placehold.co/800x600/e5e7eb/6b7280?text=Project+Render+5"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-muted/20">
        <DialogHeader className="flex flex-row items-start justify-between space-y-0 pb-6 border-b border-border/50">
          <div className="flex-1">
            <DialogTitle className="text-3xl font-playfair mb-3 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {project.title}
            </DialogTitle>
            <Badge variant="secondary" className="text-sm px-4 py-1.5 bg-accent/10 text-accent-foreground border border-accent/20">
              {project.category}
            </Badge>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSoftware(!showSoftware)}
            className="ml-4 bg-card hover:bg-accent/10 border-accent/20"
          >
            Used Software
          </Button>
        </DialogHeader>
        
        <div className="space-y-8 pt-6">
          {/* Main Project Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-large border border-border/50">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Project Gallery Carousel */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Project Gallery</h3>
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {projectGallery.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border/30 shadow-soft">
                      <img 
                        src={image}
                        alt={`${project.title} render ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-card/80 backdrop-blur-sm border-accent/20 hover:bg-accent/10" />
              <CarouselNext className="bg-card/80 backdrop-blur-sm border-accent/20 hover:bg-accent/10" />
            </Carousel>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card/30 rounded-xl p-6 border border-border/30">
              <h3 className="font-semibold text-xl mb-3 text-foreground">Project Description</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
            </div>
            
            {showSoftware && (
              <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                <h3 className="font-semibold text-xl mb-4 text-foreground">Software Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.software.map((software, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 text-sm bg-card hover:bg-accent/10 border-accent/30">
                      {software}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;