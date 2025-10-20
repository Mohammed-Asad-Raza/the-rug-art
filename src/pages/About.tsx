import { Award, Users, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import rugShowcase1 from "@/assets/about-us-1.jpeg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-3 text-gradient">
                  About The Rug Art
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Rug Art was born in 1997. We're four generations into
                  manufacturing and designing rugs for both the domestic and
                  international markets. Having grown up in a world of weaving,
                  handicraft, riots of colors, beautiful craftmanship and a very
                  genuine appreciation for authenticity we intend to create
                  quintessential product that have character and are admired for
                  their quality. We stay abreast with current global trends
                  while crafting our design language through our rich experience
                  and constant investment into research & development of
                  aesthetics, materials, and processes. We work on both
                  residential and commercial projects with leading interior
                  designers and architects.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The Rug Art has been at the forefront of handmade rug
                manufacturing and export for over two decades. Our journey began
                with a simple vision: to preserve the ancient art of rug making
                while adapting to modern aesthetic sensibilities.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, we are proud to be one of the leading manufacturers and
                exporters of premium handmade rugs, serving discerning customers
                across 50+ countries worldwide. Our commitment to quality,
                craftsmanship, and customer satisfaction has made us a trusted
                name in the global textile industry.
              </p>
            </div>

            <div className="animate-slide-up">
              <img
                src={rugShowcase1}
                alt="The Rug Art Showroom"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at The Rug Art
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Quality Excellence
                </h3>
                <p className="text-muted-foreground">
                  Uncompromising commitment to the highest standards in
                  materials and craftsmanship
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Master Craftsmanship
                </h3>
                <p className="text-muted-foreground">
                  Preserving traditional techniques passed down through
                  generations of artisans
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Vision</h3>
                <p className="text-muted-foreground">
                  Bringing beautiful handmade rugs to homes and businesses
                  worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships through exceptional service and
                  support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Artisan at work"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

              <p className="text-muted-foreground leading-relaxed">
                Ours is a closely held family business that started in 1997 and
                we are committed to preserve and uphold the age old traditions
                and heritage of hand crafted carpet manufacturing that showcases
                the intricate skills of the local craftsmen. Our carpets are
                very well accepted in the overseas markets and we have regularly
                participated in the prestigious Domotex Hannover Fair for the
                past thirteen years to make our presence felt to the customers
                worldwide.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We take utmost care in maintaining the high quality of our
                products and pay close attention to every detail related to
                manufacturing to ensure that the customers are always fully
                satisfied. Our quality systems comply with the international
                standard ISO 9001:2015, and the entire manufacturing process
                comprising of designing, dyeing, screen printing and weaving are
                undertaken in-house with no scope of outsourcing. The designs
                are developed by our in-house designers but we also welcome your
                ideas to be converted into attractive designs.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our products bear the mark of Certifications in conformity to
                our compliance with fair labor practices that strictly abhors
                the use of child labor. Our commitment towards other social
                causes is exemplified in the engagement of a large section of
                women workforce with the purpose of women empowerment that also
                contributes to the local economy. We are fully compliant with
                all the requirements necessary for manufacturing and exporting
                carpets across the world that bear the indigenous traits of
                Indian craftsmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">28+</div>
              <div className="text-primary-foreground/80">
                Years of Excellence
              </div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">21</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">26</div>
              <div className="text-primary-foreground/80">Master Artisans</div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl md:text-5xl font-bold mb-2">243</div>
              <div className="text-primary-foreground/80">
                Satisfied Customers
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
