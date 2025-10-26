import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6" data-testid="text-title">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last Updated:</strong> October 26, 2025
          </p>
          
          <p className="text-muted-foreground mb-6">
            At FastTech ("we," "our," or "us"), we respect your privacy and are committed to protecting 
            your personal information. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you visit our website and use our services.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">1.1 Personal Information</h3>
          <p className="text-muted-foreground mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>Make a purchase or place an order</li>
            <li>Create an account on our website</li>
            <li>Contact us for customer support</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Participate in surveys, contests, or promotions</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            This information may include: name, email address, phone number, shipping address, 
            billing address, payment information, and other similar contact data.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">1.2 Automatically Collected Information</h3>
          <p className="text-muted-foreground mb-4">
            When you visit our website, we automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Device identifiers</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send you order confirmations, shipping updates, and invoices</li>
            <li>Improve our website and services</li>
            <li>Personalize your shopping experience</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Detect and prevent fraud or unauthorized transactions</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">3. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar tracking technologies to enhance your browsing experience, 
            analyze site traffic, and understand user preferences. You can control cookie settings 
            through your browser preferences.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">4. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share 
            your information with:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li><strong>Service Providers:</strong> Payment processors, shipping companies, and other 
            service providers who assist in operating our business</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition 
            of all or part of our business</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">5. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational security measures to protect your 
            personal information from unauthorized access, disclosure, alteration, or destruction. 
            However, no method of transmission over the Internet is 100% secure.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">6. Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Disable cookies through your browser settings</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">7. Third-Party Links</h2>
          <p className="text-muted-foreground mb-4">
            Our website may contain links to third-party websites. We are not responsible for the 
            privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">8. Children's Privacy</h2>
          <p className="text-muted-foreground mb-4">
            Our services are not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">9. International Users</h2>
          <p className="text-muted-foreground mb-4">
            If you are accessing our website from outside your country, please note that your information 
            may be transferred to, stored, and processed in our operating country. By using our services, 
            you consent to such transfer.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">10. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8">11. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <ul className="list-none text-muted-foreground space-y-2 mb-4">
            <li><strong>Email:</strong> privacy@fasttech.com</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Address:</strong> 123 Tech Street, Suite 100, San Francisco, CA 94102</li>
          </ul>
          
          <p className="text-muted-foreground mt-8">
            By using our website and services, you acknowledge that you have read and understood 
            this Privacy Policy.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
