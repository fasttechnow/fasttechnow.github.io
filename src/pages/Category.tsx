import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Wrench, Package, Gamepad2 } from "lucide-react";

const Category = () => {
  const { category } = useParams();
  const products = getProductsByCategory(category || "");

  const categoryInfo = {
    tools: {
      title: "Tools & Supplies",
      description: "Professional electronics repair tools and equipment for all your fixing needs",
      icon: Wrench,
      color: "text-primary"
    },
    parts: {
      title: "Replacement Parts",
      description: "Original quality replacement parts for smartphones, tablets, laptops and more",
      icon: Package,
      color: "text-success"
    },
    gaming: {
      title: "Gaming Consoles",
      description: "Gaming console parts, accessories, and peripherals for all major platforms",
      icon: Gamepad2,
      color: "text-warning"
    },
    accessories: {
      title: "Accessories",
      description: "Essential accessories including cables, hubs, chargers, and more to enhance your electronics",
      icon: Package,
      color: "text-blue-500"
    },
    computers: {
      title: "Computers & Components",
      description: "High-performance computer components and peripherals for gaming and productivity",
      icon: Package,
      color: "text-purple-500"
    },
    audio: {
      title: "Audio Equipment",
      description: "Professional audio gear including headphones, speakers, and recording equipment",
      icon: Package,
      color: "text-indigo-500"
    }
  };

  const info = categoryInfo[category as keyof typeof categoryInfo];
  const Icon = info?.icon || Package;

  if (!info) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Category Header */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className={`w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 ${info.color}`}>
            <Icon className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{info.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {info.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {products.length} products in {info.title}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;
