import { useState } from "react";
import { Layers, Grid, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handloomKnottedMain from "@/assets/handloom-knotted-main.png";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import handloom1 from "@/assets/handloom-1.jpg";
import handloom2 from "@/assets/handloom-2.jpg";
import handloom3 from "@/assets/handloom-3.jpg";
import handloom4 from "@/assets/handloom-4.jpg";
import handloom5 from "@/assets/handloom-5.jpg";
import handloom6 from "@/assets/handloom-6.jpg";
import handloom7 from "@/assets/handloom-7.jpg";
import handloom8 from "@/assets/handloom-8.jpg";
import handloom9 from "@/assets/handloom-9.jpg";
import handloom10 from "@/assets/handloom-10.jpg";
import handloom11 from "@/assets/handloom-11.jpg";
import handloom12 from "@/assets/handloom-12.jpg";
import handloom13 from "@/assets/handloom-13.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const collections = [
  {
    id: "1",
    title: "TRA HL 001",
    image: handloom1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA HL 002",
    image: handloom2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA HL 003",
    image: handloom3,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "4",
    title: "TRA HL 004",
    image: handloom4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "5",
    title: "TRA HL 005",
    image: handloom5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "6",
    title: "TRA HL 006",
    image: handloom6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "7",
    title: "TRA HL 007",
    image: handloom7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "8",
    title: "TRA HL 008",
    image: handloom8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "9",
    title: "TRA HL 009",
    image: handloom9,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "10",
    title: "TRA HL 010",
    image: handloom10,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "11",
    title: "TRA HL 011",
    image: handloom11,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "12",
    title: "TRA HL 012",
    image: handloom12,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "13",
    title: "TRA HL 013",
    image: handloom13,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
];

const HandloomBroadloom = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const activeCollection = collections.find((col) => col.id === openModal);
  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}

      <section className="py-5 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={handloomKnottedMain}
            alt="Handloom & Broadloom Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={400}
            height={400}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Handloom & Broadloom Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the precision and beauty of traditional loom weaving with
            our handloom and broadloom collection. These rugs showcase the art
            of traditional weaving techniques, creating pieces with exceptional
            structural integrity and timeless appeal.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most sought-after hand tufted rug styles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 py-4">
            {collections.map((collection) => (
              <Card key={collection.id} className="hover-lift overflow-hidden">
                <div
                  className="aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setOpenModal(collection.id)}
                >
                  <img
                    src={collection.image}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  {/* <h3 className="text-xl font-semibold mb-3">{"image"}</h3> */}
                  {/* <p className="text-muted-foreground mb-4">
                          {collection.description.split(".")[0]}.
                        </p> */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpenModal(collection.id)}
                  >
                    {collection.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dynamic Modal */}
          <Dialog open={!!openModal} onOpenChange={() => setOpenModal(null)}>
            <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
              {activeCollection && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl">
                      {activeCollection.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <img
                      src={activeCollection.image}
                      className="w-full rounded-lg object-cover"
                    />
                    {/* <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {activeCollection.description}
                          </p> */}
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Weaving Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loom Weaving Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why loom-woven rugs offer superior structure and lasting
              beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strong Structure</h3>
                <p className="text-muted-foreground">
                  Tight weave construction provides exceptional durability and
                  stability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Grid className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Precise Patterns</h3>
                <p className="text-muted-foreground">
                  Loom weaving allows for intricate geometric patterns with
                  perfect symmetry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Efficient Process
                </h3>
                <p className="text-muted-foreground">
                  Traditional loom techniques enable faster production without
                  compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Versatile Designs
                </h3>
                <p className="text-muted-foreground">
                  Suitable for both traditional and contemporary design
                  aesthetics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weaving Process */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Loom weaving process"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Traditional Loom Weaving
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our handloom and broadloom rugs are created using time-honored
                weaving techniques on traditional looms. This method produces
                rugs with exceptional structural integrity and allows for
                precise pattern execution.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Loom Setup</h4>
                    <p className="text-muted-foreground">
                      Careful preparation of warp threads on the loom frame
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pattern Weaving</h4>
                    <p className="text-muted-foreground">
                      Skilled weavers create patterns using weft threads
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Control</h4>
                    <p className="text-muted-foreground">
                      Continuous monitoring ensures perfect tension and pattern
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Finishing</h4>
                    <p className="text-muted-foreground">
                      Final treatments to enhance texture and appearance
                    </p>
                  </div>
                </div>
              </div>

              <Button className="hover-lift">See Weaving Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Different loom weaving techniques for various applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={handloomKnottedMain}
                  alt="Handloom Rugs"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Handloom Rugs</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional hand-operated looms create rugs with unique
                  character and artisanal touch. Perfect for residential spaces
                  seeking authentic craftsmanship.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Ideal for:
                    </span>
                    <span className="text-sm font-medium">
                      Living rooms, bedrooms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Sizes:
                    </span>
                    <span className="text-sm font-medium">2'x3' to 9'x12'</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Patterns:
                    </span>
                    <span className="text-sm font-medium">
                      Traditional, transitional
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Explore Handloom
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={craftsmanshipImage}
                  alt="Broadloom Rugs"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Broadloom Rugs</h3>
                <p className="text-muted-foreground mb-4">
                  Wide loom production enables larger sizes and consistent
                  patterns. Ideal for commercial spaces and large residential
                  areas.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Ideal for:
                    </span>
                    <span className="text-sm font-medium">
                      Hotels, offices, large homes
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Sizes:
                    </span>
                    <span className="text-sm font-medium">
                      Up to 15'x20' seamless
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Patterns:
                    </span>
                    <span className="text-sm font-medium">
                      Contemporary, geometric
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Explore Broadloom
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Details
            </h2>
            <p className="text-lg text-muted-foreground">
              Specifications for our loom-woven rug collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Materials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 100% Wool or Cotton</li>
                  <li>• Jute backing available</li>
                  <li>• Synthetic blends option</li>
                  <li>• Eco-friendly fibers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Construction</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flat weave structure</li>
                  <li>• Low to medium pile</li>
                  <li>• Tight weave density</li>
                  <li>• Reinforced edges</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-traffic areas</li>
                  <li>• Commercial spaces</li>
                  <li>• Outdoor use (treated)</li>
                  <li>• Easy maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Loom-Woven Excellence
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our handloom and broadloom collections for durable,
            beautiful rugs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              View All Weaves
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Technical Specs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandloomBroadloom;
