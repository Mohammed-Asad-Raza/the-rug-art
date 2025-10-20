import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@/assets/logo.png";
import { ScrollArea } from "./ui/scroll-area";

const productCategories = [
  { name: "Hand Knotted", href: "/products/hand-knotted" },
  { name: "Hand Tufted", href: "/products/hand-tufted" },
  { name: "Indo Nepali", href: "/products/indo-nepali" },
  { name: "Handloom/Broadloom", href: "/products/handloom-broadloom" },
  { name: "Flatweave", href: "/products/flatweave" },
  { name: "Berber Rugs", href: "/products/berber-rugs" },
  { name: "Printed Rugs", href: "/products/printed-rugs" },
  { name: "Jute Rugs", href: "/products/jute-rugs" },
  { name: "Leather Rugs", href: "/products/leather-rugs" },
  { name: "Round Rugs", href: "/products/round-rugs" },
  { name: "Unshaped Rugs", href: "/products/unshaped-rugs" },
  { name: "Pouf", href: "/products/pouf" },
  { name: "Cushion Cover", href: "/products/cushion-cover" },
];

const mainNavItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Product Categories",
    href: "/product-categories",
    hasDropdown: true,
  },
  { name: "Rug Making Process", href: "/rug-making-process" },
  { name: "Custom Rugs", href: "/custom-rugs" },
  { name: "News & Events", href: "/news-events" },
  // { name: "Infrastructure", href: "/infrastructure" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();
  // Generic handler for all buttons
  const handleNavigation = (path: string) => {
    navigate(path);
    // Add a small delay to ensure the new page renders first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      {/* Top contact bar */}
      <div className="bg-muted/50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 8858930010</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@therugart.com</span>
            </div>
          </div>
          <div className="hidden md:block text-muted-foreground">
            Manufacturers & Exporters of Premium Handmade Rugs
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <img src={logoImage} alt="The Rug Art" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">
                The Rug Art
              </span>
              <span className="text-xs text-muted-foreground">
                Luxury Handmade Rugs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="hover:text-primary transition-colors">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] grid-cols-3 gap-3 p-6">
                          {productCategories.map((category) => (
                            <NavigationMenuLink key={category.name} asChild>
                              <Link
                                to={category.href}
                                onClick={() => handleNavigation(category.href)}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {category.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Premium quality {category.name.toLowerCase()}{" "}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <ScrollArea className="h-full pr-4">
                <nav className="flex flex-col space-y-4">
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
