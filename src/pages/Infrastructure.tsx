import { Factory, Truck, Award, Shield, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import rugShowcase1 from "@/assets/rug-showcase-1.jpg";
import rugShowcase2 from "@/assets/rug-showcase-2.jpg";

const Infrastructure = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the world-class facilities, advanced technology, and skilled workforce 
            that enable us to create exceptional handmade rugs and deliver them worldwide.
          </p>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Manufacturing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our manufacturing facility spans over 50,000 square feet and combines traditional 
                craftsmanship with modern infrastructure. We maintain the highest standards of 
                quality while preserving authentic handmade techniques.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Factory className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">50,000+ sq ft Production Floor</h4>
                    <p className="text-muted-foreground">Climate-controlled environment ensuring optimal working conditions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">100+ Skilled Artisans</h4>
                    <p className="text-muted-foreground">Master craftspeople with generations of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">ISO 9001:2015 Certified</h4>
                    <p className="text-muted-foreground">International quality management standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img
                src={craftsmanshipImage}
                alt="Manufacturing facility"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Advanced infrastructure supporting every aspect of rug production and delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Factory className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Production Capacity</h3>
                <p className="text-muted-foreground mb-4">
                  Capable of producing 10,000+ rugs monthly across all categories and sizes.
                </p>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Rugs per month</div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                <p className="text-muted-foreground mb-4">
                  Multi-stage quality inspection ensuring every rug meets our high standards.
                </p>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Quality pass rate</div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Logistics Network</h3>
                <p className="text-muted-foreground mb-4">
                  Global shipping network reaching customers in over 50 countries worldwide.
                </p>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries served</div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Skilled Workforce</h3>
                <p className="text-muted-foreground mb-4">
                  Experienced artisans and support staff committed to excellence.
                </p>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Team members</div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Export Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Decades of experience in international trade and export logistics.
                </p>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years exporting</div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                <p className="text-muted-foreground mb-4">
                  Multiple international certifications ensuring quality and sustainability.
                </p>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={rugShowcase1}
                alt="Quality control process"
                className="rounded-lg shadow-elegant hover-lift mb-6"
              />
              <img
                src={rugShowcase2}
                alt="Modern warehouse"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology & Innovation</h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                While we honor traditional craftsmanship, we also embrace modern technology 
                to enhance efficiency, quality, and customer experience. Our investment in 
                innovation ensures we stay at the forefront of the industry.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Digital Design Systems</h4>
                  <p className="text-muted-foreground">
                    Advanced CAD software for precise pattern development and customization.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Quality Monitoring</h4>
                  <p className="text-muted-foreground">
                    Digital tracking systems monitoring every stage of production.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Inventory Management</h4>
                  <p className="text-muted-foreground">
                    Real-time inventory tracking and automated supply chain management.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Customer Portal</h4>
                  <p className="text-muted-foreground">
                    Online platform for order tracking, design collaboration, and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Practices</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to environmental responsibility is reflected in every aspect 
              of our operations, from sustainable sourcing to eco-friendly production methods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Factory className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Green Manufacturing</h3>
              <p className="opacity-90">
                Solar-powered facilities and waste reduction programs minimizing environmental impact.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Sourcing</h3>
              <p className="opacity-90">
                Sustainable material sourcing and fair trade practices supporting local communities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <p className="opacity-90">
                OEKO-TEX and other environmental certifications ensuring product safety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;