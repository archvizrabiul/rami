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
      details: "+88015 189 25074"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "rabiulrami@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "378/1, West Shewrapara, Dhaka"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Contact
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your architectural vision to life? Let's discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="shadow-soft border border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-accent-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground text-sm">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {info.details}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-soft border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="border-border focus:border-accent"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-border focus:border-accent"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="border-border focus:border-accent"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="border-border focus:border-accent resize-none"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
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