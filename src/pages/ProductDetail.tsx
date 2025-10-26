import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { getProductById, products } from "@/data/products";
import { ShoppingCart, Star, Check, Truck, Shield, ArrowLeft, TrendingDown } from "lucide-react";
import { toast } from "sonner";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button className="bg-primary hover:bg-primary-hover">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryProducts = products
    .filter(p => p.category === product.category)
    .slice(0, 6);

  const priceComparisonData = categoryProducts.map(p => ({
    name: p.name.split(' ').slice(0, 3).join(' '),
    price: p.price,
    isCurrentProduct: p.id === product.id
  })).sort((a, b) => a.price - b.price);

  const handleAddToCart = () => {
    toast.success("Product added to cart!", {
      description: product.name,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.badge && (
              <Badge className="absolute top-4 right-4 text-lg px-4 py-2 bg-destructive text-destructive-foreground">
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-warning text-warning"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="outline" className="text-success border-success">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-3 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary-hover text-lg"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Buy Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">Worldwide</p>
                </div>
              </Card>
              <Card className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Lifetime Warranty</p>
                  <p className="text-sm text-muted-foreground">Guaranteed</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-16">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="price-comparison">Price Comparison</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-border pb-2">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="price-comparison" className="mt-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Price Comparison in {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Category</h3>
              </div>
              <p className="text-muted-foreground mb-6">See how this product compares to similar items in price</p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={priceComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      interval={0}
                    />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: number) => `$${value.toFixed(2)}`}
                      contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                    />
                    <Bar dataKey="price" radius={[8, 8, 0, 0]}>
                      {priceComparisonData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.isCurrentProduct ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(var(--primary))" }}></div>
                  <span>Current Product</span>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(var(--muted))" }}></div>
                  <span>Similar Products</span>
                </div>
              </div>
              {product.originalPrice && (
                <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                  <p className="font-semibold text-success">💰 Great Deal!</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You save ${(product.originalPrice - product.price).toFixed(2)} ({Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% off) compared to the original price
                  </p>
                </div>
              )}
            </Card>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <p>✓ Free worldwide shipping on all orders</p>
                <p>✓ Processing time: 1-2 business days</p>
                <p>✓ Shipping time: 5-10 business days (varies by location)</p>
                <p>✓ Express shipping available at checkout</p>
                <p>✓ Full tracking information provided</p>
                <p>✓ 30-day return policy</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
