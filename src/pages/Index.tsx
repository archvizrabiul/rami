import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ProjectCarousel from "@/components/ProjectCarousel";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ProjectCarousel />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
