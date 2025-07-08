import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+88015 189 25074",
      action: "tel:+8801518925074"
    },
    {
      icon: Mail,
      title: "Email",
      details: "rabiulrami@gmail.com",
      action: "mailto:rabiulrami@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "378/1, West Shewrapara, Dhaka",
      action: "https://maps.google.com"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your architectural vision to life? Let's discuss your next project and create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                        <CardContent className="p-6">
                          <a 
                            href={info.action}
                            className="flex items-center gap-4 group"
                          >
                            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
                              <IconComponent className="w-6 h-6 text-accent-foreground" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                                {info.title}
                              </h4>
                              <p className="text-muted-foreground">
                                {info.details}
                              </p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Card className="shadow-medium border-0 bg-gradient-hero">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-playfair font-semibold text-primary-foreground mb-4">
                    Available for Projects
                  </h4>
                  <p className="text-primary-foreground/80 mb-6">
                    I'm currently available for new architectural visualization projects and collaborations.
                  </p>
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                  >
                    Schedule a Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-medium border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="border-border focus:border-accent transition-colors duration-300"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-border focus:border-accent transition-colors duration-300"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="border-border focus:border-accent transition-colors duration-300"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="border-border focus:border-accent transition-colors duration-300 resize-none"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground font-medium py-3 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;