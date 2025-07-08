import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <Card className="shadow-medium border-0 bg-card">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="text-xl font-medium text-foreground">
                  Creative and detail-oriented Architectural Visualizer with a passion for merging technology with design.
                </p>
                
                <p>
                  With a <strong className="text-foreground">Diploma in Civil Engineering</strong> and specialized training under the <strong className="text-foreground">IsDB-BISEW IT Scholarship</strong>, I bring a unique blend of technical expertise and creative vision to every project.
                </p>

                <p>
                  I'm proficient in industry-leading software including <strong className="text-foreground">Revit, AutoCAD, 3ds Max, and Photoshop</strong>, with hands-on experience in architectural design, 3D visualization, and project management. My expertise extends to integrating emerging technologies, particularly AI tools, to enhance design automation, visualization workflows, and project efficiency.
                </p>

                <p>
                  As an <strong className="text-foreground">enthusiastic learner of AI tools</strong>, I'm constantly exploring how artificial intelligence can revolutionize the architectural visualization process, from automated design generation to enhanced rendering techniques.
                </p>

                <div className="flex flex-wrap gap-3 pt-6">
                  {[
                    "Architectural Visualization",
                    "3D Modeling & Rendering", 
                    "AI Integration",
                    "Project Management",
                    "Design Automation"
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;