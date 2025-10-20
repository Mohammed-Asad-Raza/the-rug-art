import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rugShowcase1 from "@/assets/rug-showcase-1.jpg";
import rugShowcase2 from "@/assets/rug-showcase-2.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const productCategories = [
  {
    name: "Hand Knotted",
    href: "/products/hand-knotted",
    description:
      "Exquisite rugs with intricate patterns, knotted by skilled artisans for lasting beauty.",
    image: rugShowcase1,
    featured: true,
  },
  {
    name: "Hand Tufted",
    href: "/products/hand-tufted",
    description:
      "Contemporary designs with superior comfort and modern appeal.",
    image: rugShowcase2,
    featured: true,
  },
  {
    name: "Indo Nepali",
    href: "/products/indo-nepali",
    description: "Traditional Tibetan designs with rich cultural heritage.",
    image: craftsmanshipImage,
    featured: true,
  },
  {
    name: "Handloom/Broadloom",
    href: "/products/handloom-broadloom",
    description:
      "Woven with precision on traditional looms for authentic texture.",
    image: rugShowcase1,
  },
  {
    name: "Flatweave",
    href: "/products/flatweave",
    description: "Versatile, durable rugs perfect for high-traffic areas.",
    image: rugShowcase2,
  },
  {
    name: "Berber Rugs",
    href: "/products/berber-rugs",
    description:
      "Traditional North African designs with natural wool textures.",
    image: craftsmanshipImage,
  },
  {
    name: "Printed Rugs",
    href: "/products/printed-rugs",
    description:
      "Modern printing techniques creating vibrant, detailed patterns.",
    image: rugShowcase1,
  },
  {
    name: "Jute Rugs",
    href: "/products/jute-rugs",
    description: "Eco-friendly natural fiber rugs with organic appeal.",
    image: rugShowcase2,
  },
  {
    name: "Leather Rugs",
    href: "/products/leather-rugs",
    description: "Luxurious leather craftsmanship for sophisticated interiors.",
    image: craftsmanshipImage,
  },
  {
    name: "Round Rugs",
    href: "/products/round-rugs",
    description: "Circular designs that add unique focal points to any space.",
    image: rugShowcase1,
  },
  {
    name: "Unshaped Rugs",
    href: "/products/unshaped-rugs",
    description: "Unshaped designs that add unique focal points to any space.",
    image: rugShowcase1,
  },
  {
    name: "Pouf",
    href: "/products/pouf",
    description: "Versatile seating and decor accessories in various styles.",
    image: rugShowcase2,
  },
  {
    name: "Cushion Cover",
    href: "/products/cushion-cover",
    description: "Complementary accessories to complete your interior design.",
    image: craftsmanshipImage,
  },
];

const ProductCategories = () => {
  const featuredCategories = productCategories.filter((cat) => cat.featured);
  const otherCategories = productCategories.filter((cat) => !cat.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Product Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive collection of handmade rugs, each
            category representing unique craftsmanship techniques and design
            traditions from around the world.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most popular and sought-after rug categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredCategories.map((category) => (
              <Card
                key={category.name}
                className="hover-lift overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <Link to={category.href}>
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our complete range of rug categories and styles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Card
                key={category.name}
                className="hover-lift overflow-hidden group cursor-pointer"
              >
                <Link to={category.href}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our experts are here to help you find the perfect rug for your space
            and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-lift">
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              Request Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategories;
