import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Software",
      skills: [
        { name: "Revit", level: 90 },
        { name: "AutoCAD", level: 95 },
        { name: "3ds Max", level: 85 },
        { name: "Photoshop", level: 80 }
      ]
    },
    {
      title: "Rendering Tools",
      skills: [
        { name: "Corona", level: 85 },
        { name: "V-ray", level: 80 },
        { name: "Enscape", level: 70 }
      ]
    },
    {
      title: "Project Management",
      skills: [
        { name: "MS Project", level: 75 },
        { name: "MS Office", level: 90 },
        { name: "Communication", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-playfair text-foreground text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;