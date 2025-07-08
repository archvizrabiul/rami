import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Narsingdi Polytechnic Institute",
      degree: "Diploma in Civil Engineering",
      period: "2018-2022",
      description: "Studied structural design, construction materials, and CAD; completed hands-on projects and site internships",
      type: "education",
      icon: GraduationCap
    },
    {
      institution: "ISDB-BISEW IT Scholarship",
      degree: "Architectural with Civil CAD",
      period: "Oct, 2024 - Aug, 2025",
      description: "Trained in Revit, AutoCAD, 3ds Max, Photoshop, and MS Project with a focus on architectural drafting, 3D modeling, and civil engineering applications",
      type: "certification",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Education & Certification
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {educationData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="shadow-medium border-0 hover:shadow-large transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft">
                          <IconComponent className="w-8 h-8 text-accent-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <h3 className="text-2xl font-playfair font-semibold text-foreground">
                              {item.degree}
                            </h3>
                            <Badge 
                              variant={item.type === 'education' ? 'default' : 'secondary'}
                              className="w-fit"
                            >
                              {item.type === 'education' ? 'Diploma' : 'Certification'}
                            </Badge>
                          </div>
                          
                          <p className="text-xl font-medium text-accent">
                            {item.institution}
                          </p>
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;