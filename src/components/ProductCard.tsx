import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${product.name} added to cart!`);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 border border-border">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.badge && (
            <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
              {product.badge}
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <span className="text-lg font-semibold text-destructive">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-warning text-warning"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary-hover" 
          disabled={!product.inStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
