import { useState } from "react";
import { Crown, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import leatherRugsMain from "@/assets/leather-rugs.jpg";
import leatherRugs1 from "@/assets/leather-rugs-1.jpg";
import leatherRugs2 from "@/assets/leather-rugs-2.jpg";
// import leatherRugs3 from "@/assets/leather-rugs-3.jpg";
import leatherRugs4 from "@/assets/leather-rugs-4.jpg";
import leatherRugs5 from "@/assets/leather-rugs-5.jpg";
import leatherRugs6 from "@/assets/leather-rugs-6.jpg";
import leatherRugs7 from "@/assets/leather-rugs-7.jpg";
import leatherRugs8 from "@/assets/leather-rugs-8.jpg";
import leatherRugs9 from "@/assets/leather-rugs-9.jpg";
import leatherRugs10 from "@/assets/leather-rugs-10.jpg";
import leatherRugs11 from "@/assets/leather-rugs-11.png";
import handTufted1 from "@/assets/hand-tufted-1.jpg";
import handKnotted6 from "@/assets/hand-knotted-6.png";
import flatWeave10 from "@/assets/flat-weave-10.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    id: "1",
    title: "TRA LT 001",
    image: leatherRugs1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA LT 002",
    image: leatherRugs2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA LT 003",
    image: leatherRugs4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "4",
    title: "TRA LT 004",
    image: leatherRugs5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "5",
    title: "TRA LT 005",
    image: leatherRugs6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "6",
    title: "TRA LT 006",
    image: leatherRugs7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "7",
    title: "TRA LT 007",
    image: leatherRugs8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "8",
    title: "TRA LT 008",
    image: leatherRugs9,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "9",
    title: "TRA LT 010",
    image: leatherRugs10,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "10",
    title: "TRA LT 010",
    image: leatherRugs11,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
];

const LeatherRugs = () => {
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
            src={leatherRugsMain}
            alt="Leather Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={500}
            height={500}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Leather Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A luxurious hairon leather carpet with exquisite handstitched
            patchwork to give your personal space a contemporary look. The
            visually appealing design will give your room a luxurious feel.
            These premium rugs can be used as living room rugs, bedroom rugs,
            dining room rugs, etc. For both household and office use, these
            handmade carpets and rugs are magnificent. Carpets and Rugs are
            commonly thought of as a way to complement home décor and
            furnishings. A bold statement can be rendered with a whimsical or
            brightly coloured rug. A neutral or traditional patterned rug, on
            the other hand, might be the ideal complement to a room. For added
            contrast, consider putting a dark rug on a light floor and vice
            versa. Grey Weave has the best handmade leather carpets and rugs for
            creating a retro, but classy look. This Weave collection features
            high-quality rugs handwoven by skilled Indian artisans in a variety
            of designs, patterns, texture, style, color, size, and price
            options.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leather Rugs Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most sought-after leather rug styles
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

      {/* Popular Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most sought-after popular rug styles
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
    </div>
  );
};

export default LeatherRugs;
