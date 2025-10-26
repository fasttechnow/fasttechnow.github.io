import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, X, Power } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "TOOLS", path: "/category/tools" },
    { name: "PARTS", path: "/category/parts" },
    { name: "GAMING", path: "/category/gaming" },
    { name: "ACCESSORIES", path: "/category/accessories" },
    { name: "COMPUTERS", path: "/category/computers" },
    { name: "AUDIO", path: "/category/audio" },
    { name: "REPAIR", path: "/repair" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        LIFETIME WARRANTY AND FREE WORLDWIDE SHIPPING ON ALL PARTS | We accept all major payment methods
      </div>

      {/* Main Navbar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Power className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">fasttech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Button className="hidden sm:flex bg-primary hover:bg-primary-hover">
                CART
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
