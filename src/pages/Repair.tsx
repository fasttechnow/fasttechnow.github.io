import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Laptop, Tablet, Watch, Gamepad2, Check } from "lucide-react";
import { toast } from "sonner";

const Repair = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Repair request submitted!", {
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
  };

  const repairServices = [
    {
      icon: Smartphone,
      title: "Smartphone Repair",
      description: "Screen replacement, battery, charging port, camera and more",
      price: "From $49"
    },
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Hardware upgrades, keyboard replacement, screen repair",
      price: "From $89"
    },
    {
      icon: Tablet,
      title: "Tablet Repair",
      description: "Screen digitizer, battery replacement, port repair",
      price: "From $79"
    },
    {
      icon: Watch,
      title: "Smartwatch Repair",
      description: "Screen replacement, battery service, button repair",
      price: "From $69"
    },
    {
      icon: Gamepad2,
      title: "Gaming Console",
      description: "HDMI port, disc drive, controller repair and cleaning",
      price: "From $59"
    }
  ];

  const features = [
    "Fast turnaround time (24-48 hours)",
    "Certified technicians",
    "Original quality parts",
    "90-day warranty on all repairs",
    "Free diagnostics",
    "Data protection guaranteed"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Repair Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert technicians ready to fix any electronic device. Fast, reliable, and affordable repair services with lifetime warranty.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-hover transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Repair Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Book a Repair</h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Device Type *</label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select device type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smartphone">Smartphone</SelectItem>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                    <SelectItem value="smartwatch">Smartwatch</SelectItem>
                    <SelectItem value="console">Gaming Console</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Device Model</label>
                <Input placeholder="e.g., iPhone 13 Pro, MacBook Air M1" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Problem Description *</label>
                <Textarea
                  placeholder="Please describe the issue with your device..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date</label>
                <Input type="date" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-lg py-6">
                Submit Repair Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Repair;
