import { useState } from "react";
import { Armchair, Home, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import poufMain from "@/assets/pouf.jpg";
import pouf1 from "@/assets/pouf-1.png";
import pouf2 from "@/assets/pouf-2.png";
import pouf3 from "@/assets/pouf-3.png";
import pouf4 from "@/assets/pouf-4.png";
import pouf5 from "@/assets/pouf-5.jpg";
import pouf6 from "@/assets/pouf-6.png";
import pouf7 from "@/assets/pouf-7.jpg";
import pouf8 from "@/assets/pouf-8.png";
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
    title: "TRA PF 001",
    image: pouf1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA PF 002",
    image: pouf2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA PF 003",
    image: pouf3,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "4",
    title: "TRA PF 004",
    image: pouf4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "5",
    title: "TRA PF 005",
    image: pouf5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "6",
    title: "TRA PF 006",
    image: pouf6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "7",
    title: "TRA PF 007",
    image: pouf7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "8",
    title: "TRA PF 008",
    image: pouf8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
];

const Pouf = () => {
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
            src={poufMain}
            alt="Pouf Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={450}
            height={450}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Pouf Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A luxury pouf is extra than simply a piece of fixtures; it is a
            assertion of sophistication and beauty. Crafted with splendid
            materials and notable craftsmanship, luxury poufs exude attraction
            and charm. Unlike regular ottomans, luxury poufs boast elaborate
            designs, plush upholstery, and attention to detail that increase
            them to a league of their own. Whether you're lounging inside the
            dwelling room or unwinding in the bedroom, a luxurious pouf adds a
            hint of opulence to any area.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pouf Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most sought-after pouf styles
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

export default Pouf;
