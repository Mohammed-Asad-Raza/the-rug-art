import { useState } from "react";
import { Zap, Paintbrush, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import unShapedRugMain from "@/assets/unshaped-rugs-main.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import unshapedRug1 from "@/assets/unshaped-rugs-1.jpg";
import unshapedRug2 from "@/assets/unshaped-rugs-2.jpg";
import unshapedRug3 from "@/assets/unshaped-rugs-3.jpg";
import unshapedRug4 from "@/assets/unshaped-rugs-4.jpg";
import unshapedRug5 from "@/assets/unshaped-rugs-5.jpg";
import unshapedRug6 from "@/assets/unshaped-rugs-6.jpg";
import unshapedRug7 from "@/assets/unshaped-rugs-7.jpg";
import unshapedRug8 from "@/assets/unshaped-rugs-8.jpg";
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

const collections = [
  {
    id: "1",
    title: "TRA US 001",
    image: unshapedRug1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA US 002",
    image: unshapedRug2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA US 003",
    image: unshapedRug3,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "4",
    title: "TRA US 004",
    image: unshapedRug4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "5",
    title: "TRA US 005",
    image: unshapedRug5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "6",
    title: "TRA US 006",
    image: unshapedRug6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "7",
    title: "TRA US 007",
    image: unshapedRug7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "8",
    title: "TRA US 008",
    image: unshapedRug8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
];

const UnshapedRugs = () => {
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
            src={unShapedRugMain}
            alt="Unshaped Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={300}
            height={300}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Unshaped Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ditching boring squares & rectangles to embrace the unexpected with
            stunning unshaped rugs. They celebrate imperfection and artisanal
            craftsmanship, breathing new life into any room. With a variety of
            colors, patterns, and materials available, unshaped rugs can
            complement any aesthetic while providing the same comfort and warmth
            as conventional rugs. Whether placed under a coffee table, by the
            bedside or as a standalone statement piece, unshaped rugs create a
            visually engaging ambiance. Scroll down to shop the ideal irregular
            shaped rugs for your space with us!
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unshaped Rugs Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most sought-after unshaped rug styles
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

export default UnshapedRugs;
