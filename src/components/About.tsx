import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const About = () => {
  const sections = [
    {
      icon: GraduationCap,
      title: "Education",
      content: {
        institution: "Narsingdi Polytechnic Institute",
        period: "2018-2022",
        description: "Diploma in Civil Engineering",
        details: "Focus: Studied structural design, construction materials, and CAD; completed hands-on projects and site internships"
      }
    },
    {
      icon: Award,
      title: "Certification", 
      content: {
        institution: "ISDB-BISEW IT SCHOLARSHIP",
        period: "Oct, 2024 - Aug, 2025",
        description: "Architectural with Civil CAD",
        details: "Skills: Trained in Revit, AutoCAD, 3ds Max, Photoshop, and MS Project with a focus on architectural drafting, 3D modeling, and civil engineering applications."
      }
    },
    {
      icon: Briefcase,
      title: "Experience",
      content: {
        institution: "Junior Instructor - Civil Department",
        period: "Recent",
        description: "Teaching & Training",
        details: "Conducted classes and provided guidance to Civil Engineering students"
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              About Me
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Creative and detail-oriented Architectural Visualizer with a Diploma in Civil Engineering and 
              certified training under the IsDB-BISEW IT Scholarship. Passionate about leveraging technology 
              and AI to create stunning and realistic architectural representations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {section.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">
                        {section.content.institution}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {section.content.period}
                      </p>
                      <p className="text-sm font-medium text-accent">
                        {section.content.description}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {section.content.details}
                      </p>
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

export default About;