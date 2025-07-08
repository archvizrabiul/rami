import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Software",
      skills: [
        { name: "Revit", level: 90 },
        { name: "AutoCAD", level: 95 },
        { name: "3ds Max", level: 85 },
        { name: "Photoshop", level: 80 },
        { name: "MS Project", level: 75 },
        { name: "MS Office", level: 90 }
      ]
    },
    {
      title: "Technical",
      skills: [
        { name: "Corona", level: 85 },
        { name: "V-ray", level: 80 },
        { name: "Enscape", level: 70 }
      ]
    },
    {
      title: "Personal",
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Management Skills", level: 80 },
        { name: "Time Management", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-medium border-0 hover:shadow-large transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-playfair text-foreground text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16">
            <h3 className="text-2xl font-playfair font-semibold text-center text-foreground mb-8">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Architectural Visualization",
                "3D Modeling & Rendering",
                "Construction Documentation",
                "Project Planning",
                "Site Supervision",
                "Structural Analysis",
                "BIM Implementation",
                "Quality Assurance",
                "Team Leadership",
                "Client Communication"
              ].map((competency, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gradient-accent text-accent-foreground rounded-full font-medium shadow-soft hover:shadow-medium transition-all duration-300 cursor-default"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;