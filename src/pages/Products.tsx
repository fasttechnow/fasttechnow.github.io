import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredProducts = products.filter(product => 
    filterCategory === "all" ? true : product.category === filterCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground text-lg">
            Browse our complete collection of electronics repair tools and parts
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between">
            <div className="flex flex-wrap gap-3">
              <Button
                variant={filterCategory === "all" ? "default" : "outline"}
                onClick={() => setFilterCategory("all")}
                className={filterCategory === "all" ? "bg-primary hover:bg-primary-hover" : ""}
              >
                All Products
              </Button>
              <Button
                variant={filterCategory === "tools" ? "default" : "outline"}
                onClick={() => setFilterCategory("tools")}
                className={filterCategory === "tools" ? "bg-primary hover:bg-primary-hover" : ""}
              >
                Tools
              </Button>
              <Button
                variant={filterCategory === "parts" ? "default" : "outline"}
                onClick={() => setFilterCategory("parts")}
                className={filterCategory === "parts" ? "bg-primary hover:bg-primary-hover" : ""}
              >
                Parts
              </Button>
              <Button
                variant={filterCategory === "gaming" ? "default" : "outline"}
                onClick={() => setFilterCategory("gaming")}
                className={filterCategory === "gaming" ? "bg-primary hover:bg-primary-hover" : ""}
              >
                Gaming
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Featured" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
