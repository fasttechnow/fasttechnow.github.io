import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Package, Gamepad2, Shield, Truck, Award, Headphones, Monitor, Cable } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            IF IT HAS A POWER BUTTON <br />
            <span className="text-primary">WE FIX IT</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional electronics repair services and quality parts supplier. Get the best tools and parts for your repair needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/category/parts">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8">
                BUY PARTS
              </Button>
            </Link>
            <Link to="/category/tools">
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                BUY TOOLS
              </Button>
            </Link>
            <Link to="/repair">
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                GET REPAIR
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Provide The Best Customer Service In The Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-hover transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                All our products come with lifetime warranty for your peace of mind
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-hover transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Free Worldwide Shipping</h3>
              <p className="text-muted-foreground">
                Enjoy free shipping on all orders, anywhere in the world
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-hover transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Original quality parts tested before shipping
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Check out our most popular tools and parts
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/category/tools" data-testid="link-category-tools">
              <Card className="group relative overflow-hidden h-64 cursor-pointer hover:shadow-hover transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-hover/90 flex flex-col items-center justify-center text-primary-foreground">
                  <Wrench className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Tools & Supplies</h3>
                  <p className="mt-2">Professional repair tools</p>
                </div>
              </Card>
            </Link>
            <Link to="/category/parts" data-testid="link-category-parts">
              <Card className="group relative overflow-hidden h-64 cursor-pointer hover:shadow-hover transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-success/90 to-success/70 flex flex-col items-center justify-center text-success-foreground">
                  <Package className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Replacement Parts</h3>
                  <p className="mt-2">Original quality parts</p>
                </div>
              </Card>
            </Link>
            <Link to="/category/gaming" data-testid="link-category-gaming">
              <Card className="group relative overflow-hidden h-64 cursor-pointer hover:shadow-hover transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-warning/90 to-warning/70 flex flex-col items-center justify-center text-warning-foreground">
                  <Gamepad2 className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Gaming Consoles</h3>
                  <p className="mt-2">Console parts & accessories</p>
                </div>
              </Card>
            </Link>
            <Link to="/category/accessories" data-testid="link-category-accessories">
              <Card className="group relative overflow-hidden h-64 cursor-pointer hover:shadow-hover transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-blue-600/90 flex flex-col items-center justify-center text-white">
                  <Cable className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Accessories</h3>
                  <p className="mt-2">Cables, hubs & more</p>
                </div>
              </Card>
            </Link>
            <Link to="/category/computers" data-testid="link-category-computers">
              <Card className="group relative overflow-hidden h-64 cursor-pointer hover:shadow-hover transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/90 to-purple-600/90 flex flex-col items-center justify-center text-white">
                  <Monitor className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Computers</h3>
                  <p className="mt-2">PCs, peripherals & storage</p>
                </div>
              </Card>
            </Link>
            <Link to="/category/audio" data-testid="link-category-audio">
              <Card className="group relative overflow-hidden h-64 cursor-pointer hover:shadow-hover transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/90 to-indigo-600/90 flex flex-col items-center justify-center text-white">
                  <Headphones className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold">Audio</h3>
                  <p className="mt-2">Headphones, speakers & mics</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
