import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCarousel = () => {
  const carouselImages = [
    {
      id: 1,
      image: "https://placehold.co/800x600/e5e7eb/6b7280?text=Exterior+Render+1",
      title: "Exterior View 1"
    },
    {
      id: 2,
      image: "https://placehold.co/800x600/e5e7eb/6b7280?text=Interior+Render+1",
      title: "Interior View 1"
    },
    {
      id: 3,
      image: "https://placehold.co/800x600/e5e7eb/6b7280?text=Night+Render",
      title: "Night View"
    },
    {
      id: 4,
      image: "https://placehold.co/800x600/e5e7eb/6b7280?text=Aerial+View",
      title: "Aerial View"
    },
    {
      id: 5,
      image: "https://placehold.co/800x600/e5e7eb/6b7280?text=Detail+Render",
      title: "Detail View"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Project Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different angles and perspectives of our architectural visualizations
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselImages.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-center mt-3 font-medium text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;