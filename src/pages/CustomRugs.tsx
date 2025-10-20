import { CheckCircle, Palette, Ruler, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import customRugs from "@/assets/custom-rugs-main.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const CustomRugs = () => {
  return (
    <div className="min-h-screen pt-15">
      {/* Hero Section */}

      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={customRugs}
            alt="Custom Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Custom Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Create your perfect rug with our bespoke design service. From
            concept to completion, we'll work with you to craft a unique piece
            that perfectly matches your vision and space.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final delivery, we guide you through
              every step of creating your custom rug
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Design Consultation
                </h3>
                <p className="text-muted-foreground">
                  Share your vision, preferences, and requirements with our
                  design experts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Ruler className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  2. Design & Approval
                </h3>
                <p className="text-muted-foreground">
                  Receive detailed designs and specifications for your review
                  and approval.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Crafting</h3>
                <p className="text-muted-foreground">
                  Our master artisans bring your design to life with meticulous
                  craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Delivery</h3>
                <p className="text-muted-foreground">
                  Quality inspection, packaging, and delivery to your doorstep
                  worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Custom rug being crafted"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Custom?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Perfect Size & Shape</h4>
                    <p className="text-muted-foreground">
                      Designed to fit your exact space requirements and room
                      layout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Unique Patterns</h4>
                    <p className="text-muted-foreground">
                      Create one-of-a-kind designs that reflect your personal
                      style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Color Matching</h4>
                    <p className="text-muted-foreground">
                      Perfect color coordination with your existing decor and
                      palette.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Premium Materials</h4>
                    <p className="text-muted-foreground">
                      Choose from the finest wool, silk, and sustainable fibers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Custom Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your vision and we'll get back to you with ideas and
              a quote
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Approximate Size</Label>
                    <Input id="size" placeholder="e.g., 8x10 feet" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="style">Preferred Style/Pattern</Label>
                  <Input
                    id="style"
                    placeholder="Traditional, Modern, Abstract, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your space, color preferences, design ideas, timeline, and any other details..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full hover-lift">
                  Submit Design Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CustomRugs;
