import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import rawMaterialImage from "@/assets/raw-material.jpg";
import spinningImage from "@/assets/spinning.jpg";
import designingImage from "@/assets/designing.jpg";
import dyeingImage from "@/assets/dyeing.png";

const RugMakingProcess = () => {
  const earlyStages = [
    {
      id: 1,
      title: "Raw Material Selection",
      description:
        "The journey begins with carefully selecting premium quality wool, silk, or natural fibers. Each material is hand-picked to ensure the finest quality for our rugs.",
      image: rawMaterialImage,
    },
    {
      id: 2,
      title: "Spinning",
      description:
        "Skilled artisans transform raw fibers into yarn using traditional spinning techniques passed down through generations. This process ensures consistent quality and strength.",
      image: spinningImage,
    },
    {
      id: 4,
      title: "Dyeing",
      description:
        "Natural and eco-friendly dyes are used to color the yarn. The dyeing process is carefully monitored to achieve vibrant, long-lasting colors that won't fade.",
      image: dyeingImage,
    },
    {
      id: 3,
      title: "Designing",
      description:
        "Master designers create intricate patterns and color palettes, carefully planning every detail. Each design tells a story through its motifs and symbolism.",
      image: designingImage,
    },
  ];

  const finishingSteps = [
    {
      step: 1,
      title: "Measurement",
      description:
        "Due to the discrepancies of hand-knotting, the carpet tends to vary in length and width. The carpet is measured to ensure that the variation comes within limits so that the size of the carpet fits the intended standard sizing.",
    },
    {
      step: 2,
      title: "Knot Counting",
      description:
        "To ensure that every knot from the map has been woven into the carpet, each and every knot is counted by hand. The craftsman goes through line by line, knowing how many knots should be there in every line to make sure that it has every part of its intended design.",
    },
    {
      step: 3,
      title: "Pile Height Checking",
      description:
        "Pile Height Checking is the first step in ensuring that yarn is not wasted, and that the carpet's quality can be assured after all the finishing steps. If the pile of the carpet is too heavy, the quality supervisor would work with the weaver in developing a skillset to help them reduce the usage of yarn.",
    },
    {
      step: 4,
      title: "Raffu - Repairing",
      description:
        "For discrepancies in the knot count and if there are some sections of the carpet where the pile is below the minima, an extremely technical artisan steps in. The doctors of rugs, these artisans use a large needle and thread to surgically repair the carpet. It's a painstakingly long process, and each quality check strives to ensure that errors are not made that require this repair.",
    },
    {
      step: 5,
      title: "Thukai - Knot Beating",
      description:
        "Since the hand-knotting process is imprecise, the varying width of the yarn and the differences in each knot tend to warp the design that was intended to come out on the carpet. Craftsmen in the finishing centre measure out the warped segments and then use a large iron nail and hammer to knock the knots along the warp and weft to align the pattern.",
    },
    {
      step: 6,
      title: "Kachi Kainchi – First Shear",
      description:
        "This is the first phase of shearing done to the carpet. Its only purpose is to ensure the pile of the entire carpet is made to one height. Since the yarn is cut by hand during the weaving process, the size of the pile has minor differences which are evened out by a shearing machine with a gyro.",
    },
    {
      step: 7,
      title: "Sua Birai – Design Correction",
      description:
        "With a longer pile height and because of the weaving process, yarn intermixes with the neighbouring yarn, which can blur its design. Craftsmen go over line by line of the rug with a large skewer, untangling the yarn and giving the design its intended definition.",
    },
    {
      step: 8,
      title: "Back-burning",
      description:
        "A carpet is placed at a distance from a flame, or a torch is taken over it. The flame singes the back of the carpet which clears out any loose strands, but more importantly tightens all the knots in place. When exposed to heat, the yarn recoils and shrinks which increases its durability immensely.",
    },
    {
      step: 9,
      title: "Back-burn Cleaning",
      description:
        "The singed particles that collect on the back of the carpet are brushed off to give the carpet a pristine look at the back.",
    },
    {
      step: 10,
      title: "Dipping",
      description:
        "Dipping is when a carpet is placed in a cleansing wash. The carpet soaks and sanitises to clear out any impurities that were lodged in. The carpet absorbs all the fluid for it to throw out all the impurities when washed.",
    },
    {
      step: 11,
      title: "Washing",
      description:
        "Washers lay the carpets onto the floor, and methodically pour water and mild cleansing solution, using a unique oar-like paddle to flush out the dirt trapped inside. Each stroke takes out what is unnecessary and at the same time increases the strength of the underlying knots. The strokes are done in unison and perfect coordination.",
    },
    {
      step: 12,
      title: "Khinchai – Stretching",
      description:
        "Once washed, yarn and the underlying cotton warp & weft shrink. This helps tighten the carpet, but also changes its size. To bring it to its prescribed size, the carpet is stretched out on an iron frame to the precise size requirement. The knots stay tight but are now balanced and even.",
    },
    {
      step: 13,
      title: "Cutting",
      description:
        "When the carpet is taken off the loom, artisans bind the edges of the carpet with the warp and weft they use. To allow freedom of design and creating more durable binding, the original binding done on the loom is cut off the carpet.",
    },
    {
      step: 14,
      title: "Binding",
      description:
        "The edges of the carpet are binded together to give it its finishing look and durability. The style of binding done along the width of the carpet has a range of patterns to style the carpet, but uses a standard style along the length to hold the carpet together.",
    },
    {
      step: 15,
      title: "Pucci Kainchi – Final Shearing",
      description:
        "In this final phase of shearing, the intended pile height is set onto the shearing machine before the craftsman goes over the carpet. This measured pile height is what the carpet is then categorised under before sale.",
    },
    {
      step: 16,
      title: "Kalam Birai – Detailing",
      description:
        "This is considered the second phase of design correction, when an artisan takes a carpet needle and sharpens the design. The interlocked yarn is separated knot by knot to make the image clear, perfecting its look. The name Kalam Birai means correcting by pen, and perfectly describes its intricacy.",
    },
    {
      step: 17,
      title: "Chinte Nikalna – Snipping Visible Cotton",
      description:
        "This step is common across textiles, where an artisan goes over the entire rug, removing and snipping extra strands of cotton thread. While this may be an easy task on cloth, in a rug the artisan must brush through the pile searching for the smallest hints of imperfection.",
    },
    {
      step: 18,
      title: "Carving & Embossing",
      description:
        "Khadi Gultarash (carving) is a method to give cuts in the design. Put Gultarash (embossing) is used to give a high and low effect on the rug, providing a three-dimensional look. During this process, the artisan keeps the scissors bent and moves it around the design.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-4 text-sm px-4 py-1" variant="secondary">
            Traditional Craftsmanship
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-3 text-gradient">
            The Art of Rug Making
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the meticulous journey from raw materials to masterpiece.
            Each rug undergoes over 22 distinct stages, combining centuries-old
            techniques with modern quality standards.
          </p>
        </div>
      </section>

      {/* Early Stages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Raw Materials to Woven Art
            </h2>
            <p className="text-muted-foreground text-lg">
              The foundation of every masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earlyStages.map((stage) => (
              <Card
                key={stage.id}
                className="group hover-scale overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Stage {stage.id}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{stage.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {stage.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              18 Steps to Perfection
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              When all these steps are done by hand, it can take up to a month
              for a carpet to glisten in perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishingSteps.map((step) => (
              <Card key={step.step} className="hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {step.step}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every rug we create carries the legacy of skilled artisans and
            time-honored traditions. This dedication to craftsmanship ensures
            that each piece is not just a rug, but a work of art.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RugMakingProcess;
