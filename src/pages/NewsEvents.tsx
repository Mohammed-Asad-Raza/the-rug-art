import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import rugShowcase1 from "@/assets/rug-showcase-1.jpg";
import rugShowcase2 from "@/assets/rug-showcase-2.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import newsEventMain from "@/assets/news-events-main.jpeg";

const newsItems = [
  {
    id: 1,
    title: "New Sustainable Collection Launch",
    excerpt:
      "Introducing our eco-friendly rug collection made from 100% recycled materials and natural dyes.",
    date: "March 15, 2024",
    category: "Product Launch",
    image: rugShowcase1,
    featured: true,
  },
  {
    id: 2,
    title: "International Design Awards Recognition",
    excerpt:
      "The Rug Art wins three prestigious awards at the International Interior Design Awards 2024.",
    date: "February 28, 2024",
    category: "Awards",
    image: rugShowcase2,
    featured: true,
  },
  {
    id: 3,
    title: "Master Craftsman Workshop Series",
    excerpt:
      "Join our exclusive workshop series to learn traditional rug-making techniques from master artisans.",
    date: "February 10, 2024",
    category: "Events",
    image: craftsmanshipImage,
    featured: true,
  },
  {
    id: 4,
    title: "Expansion to European Markets",
    excerpt:
      "The Rug Art announces expansion into European markets with new showrooms in London and Paris.",
    date: "January 20, 2024",
    category: "Company News",
    image: rugShowcase1,
  },
  {
    id: 5,
    title: "Partnership with Interior Designers",
    excerpt:
      "New partnership program offers exclusive benefits to interior designers and decorators.",
    date: "January 5, 2024",
    category: "Partnership",
    image: rugShowcase2,
  },
  {
    id: 6,
    title: "Holiday Collection Preview",
    excerpt:
      "Get an exclusive preview of our upcoming holiday collection featuring festive patterns and colors.",
    date: "December 15, 2023",
    category: "Product Preview",
    image: craftsmanshipImage,
  },
];

const upcomingEvents = [
  {
    title: "Home & Design Expo 2024",
    date: "April 15-17, 2024",
    location: "New York Convention Center",
    description:
      "Visit us at booth #A127 to see our latest collections and meet our design team.",
  },
  {
    title: "Virtual Design Consultation Week",
    date: "April 22-26, 2024",
    location: "Online Event",
    description:
      "Free virtual consultations with our design experts. Book your slot now!",
  },
  {
    title: "Artisan Workshop Experience",
    date: "May 5, 2024",
    location: "The Rug Art Showroom",
    description:
      "Hands-on workshop where you can try traditional rug-making techniques.",
  },
];

const NewsEvents = () => {
  const featuredNews = newsItems.filter((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}

      <section className="py-5 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src={newsEventMain}
            alt="News & Events Rugs"
            className="rounded-lg shadow-elegant hover-lift mx-auto"
            width={300}
            height={300}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-10 pb-3 text-gradient">
            News & Events Rugs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay updated with the latest news, product launches, events, and
            insights from The Rug Art. Discover what's happening in our world of
            handmade craftsmanship.
          </p>
        </div>
      </section>

      {/* Featured News */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured News
            </h2>
            <p className="text-lg text-muted-foreground">
              The latest and most important updates from The Rug Art
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredNews.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {/* <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us at these exciting events and exhibitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="bg-primary text-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* All News */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-lg text-muted-foreground">
              All the latest updates and announcements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{item.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter to receive the latest news, events, and
            exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
