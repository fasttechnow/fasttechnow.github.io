import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6" data-testid="text-title">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last Updated:</strong> October 26, 2025
          </p>
          
          <p className="text-muted-foreground mb-6">
            Welcome to FastTech. By accessing or using our website and services, you agree to be bound 
            by these Terms of Service ("Terms"). Please read them carefully.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By using FastTech's website, products, or services, you agree to these Terms and our Privacy 
            Policy. If you do not agree to these Terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">2. Products and Services</h2>
          <p className="text-muted-foreground mb-4">
            FastTech provides electronics repair parts, tools, gaming accessories, and repair services. 
            All product descriptions, specifications, and prices are subject to change without notice.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">3. Ordering and Payment</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>All orders are subject to acceptance and availability</li>
            <li>We reserve the right to refuse or cancel any order</li>
            <li>Prices are in USD and do not include applicable taxes</li>
            <li>Payment must be received before order processing</li>
            <li>We accept major credit cards and other payment methods as displayed</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">4. Shipping and Delivery</h2>
          <p className="text-muted-foreground mb-4">
            We offer free worldwide shipping on all orders. Delivery times vary by location. We are 
            not responsible for delays caused by customs, weather, or other circumstances beyond our control.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">5. Lifetime Warranty</h2>
          <p className="text-muted-foreground mb-4">
            All FastTech products come with a lifetime warranty against manufacturing defects. The 
            warranty does not cover damage from misuse, accidents, or unauthorized modifications. 
            To claim warranty service, please contact our support team with proof of purchase.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">6. Returns and Refunds</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>Returns accepted within 30 days of delivery</li>
            <li>Products must be in original condition with packaging</li>
            <li>Refunds processed within 7-10 business days</li>
            <li>Return shipping costs are the customer's responsibility unless the product is defective</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">7. User Accounts</h2>
          <p className="text-muted-foreground mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and 
            for all activities under your account. Notify us immediately of any unauthorized use.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">8. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            All content on our website, including text, graphics, logos, and images, is the property 
            of FastTech or its licensors and is protected by copyright and trademark laws.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">9. Prohibited Activities</h2>
          <p className="text-muted-foreground mb-4">
            You may not:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>Use our services for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit viruses, malware, or harmful code</li>
            <li>Engage in fraudulent activities</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">10. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            To the maximum extent permitted by law, FastTech shall not be liable for any indirect, 
            incidental, special, or consequential damages arising from your use of our products or services.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">11. Disclaimers</h2>
          <p className="text-muted-foreground mb-4">
            Our products and services are provided "as is" without warranties of any kind. We do not 
            guarantee that our website will be error-free or uninterrupted.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">12. Modifications to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective upon 
            posting to the website. Your continued use constitutes acceptance of the modified Terms.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">13. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
            in which FastTech operates, without regard to conflict of law principles.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">14. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            For questions about these Terms, please contact us:
          </p>
          <ul className="list-none text-muted-foreground space-y-2 mb-4">
            <li><strong>Email:</strong> support@fasttech.com</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94102</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
