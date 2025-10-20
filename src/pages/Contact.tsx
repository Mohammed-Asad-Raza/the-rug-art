import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import rugShowcase1 from "@/assets/contact-us-1.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      {/* <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for inquiries, custom orders, or any
              questions about our handmade rug collections. We're here to help
              you find the perfect rug.
            </p>

            <div className="animate-slide-up">
              <img
                src={rugShowcase1}
                alt="The Rug Art Showroom"
                className="rounded-lg shadow-elegant hover-lift"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-1">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-3 text-gradient">
                  Contact Us
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get in touch with our team for inquiries, custom orders, or
                  any questions about our handmade rug collections. We're here
                  to help you find the perfect rug.
                </p>
              </div>
            </div>

            <div className="animate-slide-up">
              <img
                src={rugShowcase1}
                alt="The Rug Art Showroom"
                className="rounded-lg shadow-elegant hover-lift"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We'd love to hear from you. Reach out to us through any of the
                  following channels, and our team will respond promptly to
                  assist you with your rug needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Visit Our Showroom
                        </h3>
                        <p className="text-muted-foreground">
                          The Rug Art, Station Road Bhadohi,
                          <br />
                          Uttar Pradesh, 221401
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-muted-foreground">
                          WhatsApp: +91 8858930010
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-muted-foreground">
                          General: info@theruggart.com
                          <br />
                          Sales: sales@theruggart.com
                          <br />
                          Custom Orders: custom@theruggart.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Business Hours
                        </h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 6:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 (234) 567-8900" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="General Inquiry, Custom Order, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full hover-lift"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Our Showroom
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us to see our complete collection and speak with our design
              experts
            </p>
          </div>

          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm">
                123 Artisan Avenue, Craft District, CD 12345
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
