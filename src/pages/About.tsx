import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6" data-testid="text-title">About FastTech</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to FastTech, your trusted partner for electronics repair and quality replacement parts. 
            Since our founding, we've been dedicated to providing the best tools, parts, and services for 
            repairing smartphones, tablets, laptops, gaming consoles, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower individuals and businesses with the highest quality repair parts and tools, 
                making electronics repair accessible and affordable for everyone. We believe in extending 
                the life of devices and reducing electronic waste.
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
              <p className="text-muted-foreground">
                Quality, reliability, and customer satisfaction are at the core of everything we do. 
                We stand behind our products with lifetime warranties and provide expert support to 
                ensure your repair projects are successful.
              </p>
            </Card>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Why Choose FastTech?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground">
                All our products come with a comprehensive lifetime warranty, giving you complete peace of mind.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our team of experienced technicians is here to help you with any questions or repair challenges.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Quality Parts</h3>
              <p className="text-muted-foreground">
                We source only the highest quality replacement parts and professional-grade tools for your repairs.
              </p>
            </Card>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            FastTech was born from a simple belief: electronics should be repairable, not disposable. 
            Our founders, experienced electronics repair technicians, recognized the need for a reliable 
            source of quality parts and tools that wouldn't break the bank.
          </p>
          <p className="text-muted-foreground mb-4">
            Today, we serve thousands of customers worldwide, from DIY enthusiasts to professional repair 
            shops. We're proud to offer free worldwide shipping, competitive prices, and the most comprehensive 
            warranties in the industry.
          </p>
          
          <h2 className="text-3xl font-bold mb-4 mt-8">What We Offer</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>High-quality replacement parts for smartphones, tablets, laptops, and gaming consoles</li>
            <li>Professional repair tools and toolkits</li>
            <li>Gaming accessories and controllers</li>
            <li>Expert repair services with certified technicians</li>
            <li>Free worldwide shipping on all orders</li>
            <li>Lifetime warranty on all products</li>
            <li>24/7 customer support</li>
          </ul>
          
          <p className="text-muted-foreground mt-6">
            Join thousands of satisfied customers who trust FastTech for all their electronics repair needs. 
            If it has a power button, we can help you fix it!
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
