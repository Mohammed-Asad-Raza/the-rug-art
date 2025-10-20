import { useState } from "react";
import { Zap, Paintbrush, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handTuftedMain from "@/assets/hand-tufted-main.jpeg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import handTufted1 from "@/assets/hand-tufted-1.jpg";
import handTufted2 from "@/assets/hand-tufted-2.png";
import handTufted3 from "@/assets/hand-tufted-3.jpg";
import handTufted4 from "@/assets/hand-tufted-4.jpg";
import handTufted5 from "@/assets/hand-tufted-5.jpg";
import handTufted6 from "@/assets/hand-tufted-6.jpg";
import handTufted7 from "@/assets/hand-tufted-7.jpg";
import handTufted8 from "@/assets/hand-tufted-8.jpg";
import handTufted9 from "@/assets/hand-tufted-9.jpg";
import handTufted10 from "@/assets/hand-tufted-10.jpg";
import handTufted11 from "@/assets/hand-tufted-11.jpg";
import handTufted12 from "@/assets/hand-tufted-12.jpg";
import handTufted13 from "@/assets/hand-tufted-13.jpg";
import handTufted14 from "@/assets/hand-tufted-14.jpg";
import handTufted15 from "@/assets/hand-tufted-15.jpg";
import handKnotted6 from "@/assets/hand-knotted-6.png";
import flatWeave10 from "@/assets/flat-weave-10.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: "1",
    title: "TRA HT 001",
    image: handTufted1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA HT 002",
    image: handTufted2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA HT 003",
    image: handTufted3,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "4",
    title: "TRA HT 004",
    image: handTufted4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "5",
    title: "TRA HT 005",
    image: handTufted5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "6",
    title: "TRA HT 006",
    image: handTufted6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "7",
    title: "TRA HT 007",
    image: handTufted7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "8",
    title: "TRA HT 008",
    image: handTufted8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "9",
    title: "TRA HT 009",
    image: handTufted9,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "10",
    title: "TRA HT 010",
    image: handTufted10,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "11",
    title: "TRA HT 011",
    image: handTufted11,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "12",
    title: "TRA HT 012",
    image: handTufted12,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "13",
    title: "1TRA HT 013",
    image: handTufted13,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "14",
    title: "TRA HT 014",
    image: handTufted14,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "15",
    title: "TRA HT 015",
    image: handTufted15,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
];

const HandTufted = () => {
  const navigate = useNavigate();
  // Generic handler for all buttons
  const handleNavigation = (path: string) => {
    navigate(path);
    // Add a small delay to ensure the new page renders first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  const [openModal, setOpenModal] = useState<string | null>(null);
  const activeCollection = collections.find((col) => col.id === openModal);
  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}

      <section className="py-5 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={handTuftedMain}
            alt="Hand Tufted Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={300}
            height={300}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Hand Tufted Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the perfect balance of craftsmanship and contemporary style
            with our hand tufted collection. These rugs offer exceptional
            comfort, modern designs, and superior durability for today's
            lifestyle.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hand Tufted Rugs Collections
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
              Hand Tufted Advantages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining traditional techniques with modern innovation for
              contemporary living
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Production</h3>
                <p className="text-muted-foreground">
                  Faster creation process while maintaining handmade quality and
                  attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Paintbrush className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Contemporary Designs
                </h3>
                <p className="text-muted-foreground">
                  Modern patterns and color palettes perfect for today's
                  interior design trends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comfort Focus</h3>
                <p className="text-muted-foreground">
                  Luxurious pile height and soft textures for maximum comfort
                  underfoot.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Design Flexibility
                </h3>
                <p className="text-muted-foreground">
                  Versatile technique allowing for creative patterns and texture
                  variations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Hand tufting process"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Tufting Process
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Hand tufting involves pushing yarn through a canvas backing
                using a specialized tufting gun, creating loops that are then
                cut to form the pile. This process allows for greater design
                flexibility and faster production.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pattern Transfer</h4>
                    <p className="text-muted-foreground">
                      Design traced onto canvas backing
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Yarn Tufting</h4>
                    <p className="text-muted-foreground">
                      Skilled artisans tuft yarn following the pattern
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full p-2 flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Finishing Touches</h4>
                    <p className="text-muted-foreground">
                      Shearing, carving, and final quality control
                    </p>
                  </div>
                </div>
              </div>

              <Button className="hover-lift">Watch Process Video</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Collections */}
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

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={handTufted1}
                  alt="Modern Abstract"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Modern Abstract</h3>
                <p className="text-muted-foreground mb-4">
                  Bold geometric patterns and contemporary color schemes perfect
                  for modern spaces.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/products/hand-tufted")}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={handKnotted6}
                  alt="Transitional Style"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Transitional Style
                </h3>
                <p className="text-muted-foreground mb-4">
                  Classic patterns with contemporary updates, bridging
                  traditional and modern aesthetics.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/products/hand-knotted")}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={flatWeave10}
                  alt="Texture Focus"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Texture Focus</h3>
                <p className="text-muted-foreground mb-4">
                  Emphasizing tactile experiences with varied pile heights and
                  textural contrasts.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/products/flatweave")}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Perfect Hand Tufted Rug
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our extensive collection of hand tufted rugs designed for
            modern living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              Browse All Styles
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandTufted;
