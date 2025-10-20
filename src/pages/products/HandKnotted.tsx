import { useState } from "react";
import { Star, Award, Clock, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handKnottedMain from "@/assets/hand-knotted-main.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import handKnotted1 from "@/assets/hand-knotted-1.jpg";
import handKnotted2 from "@/assets/hand-knotted-2.png";
import handKnotted3 from "@/assets/hand-knotted-3.jpg";
import handKnotted4 from "@/assets/hand-knotted-4.png";
import handKnotted5 from "@/assets/hand-knotted-5.jpg";
import handKnotted6 from "@/assets/hand-knotted-6.png";
import handKnotted7 from "@/assets/hand-knotted-7.jpg";
import handKnotted8 from "@/assets/hand-knotted-8.png";
import handKnotted9 from "@/assets/hand-knotted-9.jpg";
import handKnotted10 from "@/assets/hand-knotted-10.png";
import handKnotted11 from "@/assets/hand-knotted-11.jpg";
import handKnotted12 from "@/assets/hand-knotted-12.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const collections = [
  {
    id: "1",
    title: "TRA HK 001",
    image: handKnotted1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA HK 002",
    image: handKnotted2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA HK 003",
    image: handKnotted3,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "4",
    title: "TRA HK 004",
    image: handKnotted4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "5",
    title: "TRA HK 005",
    image: handKnotted5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "6",
    title: "TRA HK 006",
    image: handKnotted6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "7",
    title: "TRA HK 007",
    image: handKnotted7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "8",
    title: "TRA HK 008",
    image: handKnotted8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "9",
    title: "TRA HK 009",
    image: handKnotted9,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "10",
    title: "TRA HK 010",
    image: handKnotted10,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "11",
    title: "TRA HK 011",
    image: handKnotted11,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "12",
    title: "TRA HK 012",
    image: handKnotted12,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
];

const HandKnotted = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const activeCollection = collections.find((col) => col.id === openModal);
  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
      {/* <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-3 text-gradient">
                Hand Knotted Rugs
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the pinnacle of rug craftsmanship with our hand
                knotted collection. Each rug represents months of meticulous
                work by master artisans, creating timeless pieces of exceptional
                beauty and durability.
              </p>
            </div>

            <div className="animate-slide-up">
              <img
                src={handKnottedMain}
                alt="Hand Knotted Rugs"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-5 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={handKnottedMain}
            alt="Hand Knotted Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Hand Knotted Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the pinnacle of rug craftsmanship with our hand knotted
            collection. Each rug represents months of meticulous work by master
            artisans, creating timeless pieces of exceptional beauty and
            durability.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hand Knotted Rugs Collections
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

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Hand Knotted?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique qualities that make hand knotted rugs the
              ultimate choice for luxury interiors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Superior Quality</h3>
                <p className="text-muted-foreground">
                  Highest quality materials and craftsmanship ensuring decades
                  of beauty.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Intricate Patterns
                </h3>
                <p className="text-muted-foreground">
                  Complex designs with exceptional detail only possible through
                  hand knotting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Lasting Investment
                </h3>
                <p className="text-muted-foreground">
                  Durable construction that improves with age, becoming family
                  heirlooms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rich Colors</h3>
                <p className="text-muted-foreground">
                  Premium dyes and natural materials creating vibrant, lasting
                  colors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Hand knotting process"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Master Craftsmanship
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our hand knotted rugs are created using techniques passed down
                through generations. Each knot is individually tied by skilled
                artisans, creating patterns of extraordinary complexity and
                beauty that machine production cannot replicate.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pattern Design</h4>
                    <p className="text-muted-foreground">
                      Detailed cartoons guide every knot placement
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hand Knotting</h4>
                    <p className="text-muted-foreground">
                      Individual knots tied by master weavers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Finishing</h4>
                    <p className="text-muted-foreground">
                      Careful washing and grooming to perfection
                    </p>
                  </div>
                </div>
              </div>

              <Button className="hover-lift">Learn About Our Process</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product Specifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Technical details and options available for our hand knotted rugs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Materials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 100% Pure New Zealand Wool</li>
                  <li>• Silk highlights available</li>
                  <li>• Cotton foundation</li>
                  <li>• Natural dyes option</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Sizes Available</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2'x3' to 12'x18'</li>
                  <li>• Custom sizes available</li>
                  <li>• Runners and rounds</li>
                  <li>• Oversized options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Knot Density</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 100-400 knots per sq. inch</li>
                  <li>• Higher density = finer detail</li>
                  <li>• Various grades available</li>
                  <li>• Museum quality options</li>
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
            Ready to Own a Masterpiece?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover our hand knotted collection and find the perfect rug for
            your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              View Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandKnotted;
