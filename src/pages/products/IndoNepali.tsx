import { useState } from "react";
import { Mountain, Flower, Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rugShowcase1 from "@/assets/indo-nepali-main.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import indoNepali1 from "@/assets/indo-nepali-rug-1.jpeg";
import indoNepali2 from "@/assets/indo-nepali-rug-2.jpg";
import indoNepali3 from "@/assets/indo-nepali-rug-3.jpg";
import indoNepali4 from "@/assets/indo-nepali-rug-4.png";
import indoNepali5 from "@/assets/indo-nepali-rug-5.png";
import indoNepali6 from "@/assets/indo-nepali-rug-6.png";
import indoNepali7 from "@/assets/indo-nepali-rug-7.png";
import indoNepali8 from "@/assets/indo-nepali-rug-8.png";
import indoNepali9 from "@/assets/indo-nepali-rug-9.png";
import indoNepali10 from "@/assets/indo-nepali-rug-10.jpg";
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
    title: "TRA IN 001",
    image: indoNepali1,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "2",
    title: "TRA IN 002",
    image: indoNepali2,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "3",
    title: "TRA IN 003",
    image: indoNepali3,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "4",
    title: "TRA IN 004",
    image: indoNepali4,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "5",
    title: "TRA IN 005",
    image: indoNepali5,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "6",
    title: "TRA IN 006",
    image: indoNepali6,
    description:
      "Emphasizing tactile experiences with varied pile heights and textural contrasts. This collection celebrates the sensory dimension of hand-tufted rugs through innovative texture combinations.",
  },
  {
    id: "7",
    title: "TRA IN 007",
    image: indoNepali7,
    description:
      "Bold geometric patterns and contemporary color schemes perfect for modern spaces. Our Modern Abstract collection features cutting-edge designs that push the boundaries of traditional rug craftsmanship.",
  },
  {
    id: "8",
    title: "TRA IN 008",
    image: indoNepali8,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "8",
    title: "TRA IN 009",
    image: indoNepali9,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
  {
    id: "8",
    title: "TRA IN 010",
    image: indoNepali10,
    description:
      "Classic patterns with contemporary updates, bridging traditional and modern aesthetics. The Transitional collection offers versatile designs that complement both classic and contemporary interiors.",
  },
];

const IndoNepali = () => {
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
            src={rugShowcase1}
            alt="Indo Nepali Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={300}
            height={300}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            Indo Nepali Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Immerse yourself in the rich cultural heritage of the Himalayas with
            our Indo Nepali collection. These rugs combine traditional Tibetan
            designs with contemporary craftsmanship, creating pieces that tell
            stories of ancient traditions.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Indo Nepali Rugs Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our most sought-after indo nepali rug styles
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

      {/* Heritage Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cultural Heritage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each Indo Nepali rug carries the spiritual and artistic traditions
              of the Himalayan region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mountain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Himalayan Origins
                </h3>
                <p className="text-muted-foreground">
                  Designs inspired by the majestic landscapes and spiritual
                  traditions of the Himalayas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Flower className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sacred Symbols</h3>
                <p className="text-muted-foreground">
                  Traditional motifs with deep spiritual meaning, bringing
                  positive energy to your space.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Artisan Stories</h3>
                <p className="text-muted-foreground">
                  Each rug tells the story of skilled artisans preserving
                  centuries-old traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="bg-primary text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Crown className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Finest highland wool and traditional techniques ensuring
                  exceptional durability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traditional Techniques */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftsmanshipImage}
                alt="Traditional weaving"
                className="rounded-lg shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ancient Traditions
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Indo Nepali rugs are woven using traditional Tibetan techniques
                that have been passed down through generations. These methods
                create rugs with unique character and exceptional durability,
                making each piece a work of art.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Highland Wool</h4>
                  <p className="text-muted-foreground">
                    Premium wool from high-altitude sheep, naturally resilient
                    and lustrous.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Natural Dyes</h4>
                  <p className="text-muted-foreground">
                    Colors derived from traditional plants and minerals of the
                    region.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Hand Spinning</h4>
                  <p className="text-muted-foreground">
                    Yarn spun by hand for optimal texture and consistency.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Traditional Loom</h4>
                  <p className="text-muted-foreground">
                    Woven on traditional Tibetan looms using ancestral
                    techniques.
                  </p>
                </div>
              </div>

              <Button className="hover-lift">Learn More About Heritage</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional Patterns
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the meaning behind classic Indo Nepali rug designs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Dragon Motifs</h3>
                <p className="text-muted-foreground mb-4">
                  Powerful symbols of strength and good fortune, intricately
                  woven with traditional colors.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Symbolizes: Power, Wisdom, Protection
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Lotus Flowers</h3>
                <p className="text-muted-foreground mb-4">
                  Sacred symbols of purity and enlightenment, beautifully
                  rendered in soft pastels.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Symbolizes: Purity, Rebirth, Enlightenment
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Mandala Designs</h3>
                <p className="text-muted-foreground mb-4">
                  Geometric patterns representing the universe and cosmic
                  harmony.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Symbolizes: Unity, Harmony, Balance
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Snow Lions</h3>
                <p className="text-muted-foreground mb-4">
                  Mythical creatures symbolizing fearlessness and the power of
                  truth.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Symbolizes: Courage, Joy, Fearlessness
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cloud Patterns</h3>
                <p className="text-muted-foreground mb-4">
                  Flowing designs representing the ever-changing nature of life.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Symbolizes: Change, Adaptability, Freedom
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Buddhist Knots</h3>
                <p className="text-muted-foreground mb-4">
                  Endless knots symbolizing the interconnectedness of all
                  things.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Symbolizes: Eternity, Unity, Wisdom
                </div>
              </CardContent>
            </Card>
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
            Bring Himalayan Heritage Home
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the spiritual beauty and cultural richness of our Indo
            Nepali collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              Explore Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Cultural Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndoNepali;
