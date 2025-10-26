import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    };

    loadCart();
    
    // Listen for cart updates
    window.addEventListener("cartUpdated", loadCart);
    
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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

      {/* Cart Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center max-w-md mx-auto">
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
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-semibold text-lg hover:text-primary">{item.name}</h3>
                        </Link>
                        <p className="text-muted-foreground text-sm">{item.category}</p>
                        <p className="text-xl font-bold text-primary mt-2">${item.price}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-20">
                  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold text-success">FREE</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-hover" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Link to="/products">
                    <Button variant="outline" className="w-full mt-3">
                      Continue Shopping
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
