import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex-1">
            <DialogTitle className="text-2xl font-playfair mb-2">{project.title}</DialogTitle>
            <Badge variant="secondary" className="mb-4">{project.category}</Badge>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSoftware(!showSoftware)}
            className="ml-4"
          >
            Used Software
          </Button>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Project Description</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            
            {showSoftware && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Software Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((software, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
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