import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Instructor - Civil Department",
      company: "Narsingdi Institute of Science And Technology (NIST)",
      period: "June, 2024 - Sep, 2024",
      location: "Narsingdi",
      description: [
        "Conducted classes on Structural Mechanics, Surveying, and Estimating for diploma-level Civil Engineering students",
        "Delivered both theoretical and practical lessons, guided student projects, and provided academic support in lab and fieldwork",
        "Assisted in curriculum implementation and promoted hands-on learning in civil engineering fundamentals"
      ],
      type: "current"
    },
    {
      title: "Support Trainer",
      company: "Global Computer Academy",
      period: "Feb, 2021 - Jan, 2022",
      location: "Dhaka",
      description: [
        "Assisted in training students in MS Office (Word, Excel, PowerPoint) and internet browsing",
        "Supported lead trainers in class preparation, student guidance, and technical troubleshooting",
        "Helped maintain a smooth learning environment during the post-pandemic transition"
      ],
      type: "past"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-medium border-0 hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="space-y-2 mb-4 lg:mb-0">
                      <h3 className="text-2xl font-playfair font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-medium text-accent">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="space-y-2 lg:text-right">
                      <Badge 
                        variant={exp.type === 'current' ? 'default' : 'secondary'}
                        className="mb-2"
                      >
                        {exp.type === 'current' ? 'Recent Role' : 'Previous Role'}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;