import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-muted-foreground text-lg">
            Review your items before checkout
          </p>
        </div>
      </section>

      {/* Empty Cart */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-md">
          <Card className="p-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Continue Shopping
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
