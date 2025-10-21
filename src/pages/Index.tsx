import { ArrowRight, Star, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/home-main.jpg";
import aboutRugArt from "@/assets/home-few-words-img.jpg";
import rugShowcase1 from "@/assets/rug-showcase-1.jpg";
import rugShowcase2 from "@/assets/rug-showcase-2.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import heroImage2 from "@/assets/home-main-2.png";
import handTufted1 from "@/assets/hand-tufted-1.jpg";
import handKnotted6 from "@/assets/hand-knotted-6.png";
import flatWeave10 from "@/assets/flat-weave-10.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  // Generic handler for all buttons
  const handleNavigation = (path: string) => {
    navigate(path);
    // Add a small delay to ensure the new page renders first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen">
            {/* Slide 1 - Expert on Interior Decor */}
            <CarouselItem className="relative h-screen flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-gradient py-3 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Rugs, It's what we do.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  And we do it better than anyone else.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button
                    size="lg"
                    className="hover-lift bg-primary hover:bg-primary-glow text-white"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-primary"
                  >
                    Custom Design
                  </Button> */}
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 - Handcrafted Excellence */}
            <CarouselItem className="relative h-screen flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage2})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Handcrafted
                  <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  28+ Years of Artisan Craftsmanship
                  <br />
                  Creating Timeless Masterpieces
                </p>
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="hover-lift bg-primary hover:bg-primary-glow text-white"
                  >
                    View Process
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-primary"
                  >
                    Our Story
                  </Button>
                </div> */}
              </div>
            </CarouselItem>

            {/* Slide 3 - Premium Quality */}
            {/* <CarouselItem className="relative h-screen flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${rugShowcase2})` }}
              >
                <div className="absolute inset-0 bg-black/45" />
              </div>

              <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Premium Quality
                  <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Worldwide
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Exporting to 50+ Countries
                  <br />
                  Trusted by 10,000+ Customers
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="hover-lift bg-primary hover:bg-primary-glow text-white"
                  >
                    Browse Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-primary"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </CarouselItem> */}

            {/* Slide 4 - Custom Designs */}
            {/* <CarouselItem className="relative h-screen flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${craftsmanshipImage})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Your Vision
                  <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Our Craft
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Bespoke Rugs Tailored to Your Style
                  <br />
                  From Concept to Creation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="hover-lift bg-primary hover:bg-primary-glow text-white"
                  >
                    Start Custom Order
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </CarouselItem> */}
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8" />
          <CarouselNext className="right-4 md:right-8" />
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src={aboutRugArt}
                alt="Beautiful handcrafted rug"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-primary font-semibold mb-2">
                  A Few Words About
                </h3>
                <h2 className="text-4xl font-bold mb-6 pb-3 text-gradient">
                  The Rug Art
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The Rug Art has grown step by step to become one of the market
                leading Manufacturers and Exporters of vast assortments of
                handmade rugs and custom carpets. With our classy designs and
                top notch quality, The Rug Art has become a household name
                across the world.
              </p>

              <p className="text-muted-foreground">
                Our products are made with 100% authentic and best grade
                materials. They are decorated with beautiful artwork from
                exclusive and wide range of design portfolio which is constantly
                escalating in line with the new trends.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
                "We collaborate with professionals that build great
                relationships with clients"
              </blockquote>

              <Button
                className="hover-lift"
                onClick={() => handleNavigation("/rug-making-process")}
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">28+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">21</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">26</div>
              <div className="text-primary-foreground/80">Impressive Minds</div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">243</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <h3 className="text-2xl text-gradient mb-6">Rug Process</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are Manufacturers and Exporters of Hand Tufted, Hand Knotted,
              Hand Loom, Flatweave, etc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Artisan crafting a rug"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Premium Quality Materials
                  </h4>
                  <p className="text-muted-foreground">
                    We use only the finest wool, silk, and cotton to ensure
                    durability and luxury.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    Master Craftsmen
                  </h4>
                  <p className="text-muted-foreground">
                    Our skilled artisans bring generations of traditional
                    techniques to every piece.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
                  <p className="text-muted-foreground">
                    Exporting premium rugs to discerning customers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most popular handcrafted rug collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={handKnotted6}
                  alt="Hand Knotted Rugs"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hand Knotted</h3>
                <p className="text-muted-foreground mb-4">
                  Timeless elegance with intricate patterns and premium
                  materials.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/products/hand-knotted")}
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={handTufted1}
                  alt="Hand Tufted Rugs"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hand Tufted</h3>
                <p className="text-muted-foreground mb-4">
                  Contemporary designs with superior comfort and durability.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/products/hand-tufted")}
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={flatWeave10}
                  alt="Custom Rugs"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-muted-foreground mb-4">
                  Bespoke rugs tailored to your unique vision and space.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/products/flatweave")}
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the perfect rug that reflects your style and enhances your
            home.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Get Quote
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Index;
