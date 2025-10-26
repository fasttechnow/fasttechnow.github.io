export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
}

export const products: Product[] = [
  // Tools Category
  {
    id: "tool-001",
    name: "FastTech Pro Toolkit V2",
    category: "tools",
    price: 44.99,
    originalPrice: 54.99,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 523,
    inStock: true,
    badge: "SALE",
    description: "Professional electronics repair toolkit with 64 precision bits and magnetic storage case. Perfect for repairing smartphones, laptops, tablets, and gaming consoles.",
    features: [
      "64 precision screwdriver bits",
      "Magnetic storage case",
      "Anti-static wrist strap",
      "Precision tweezers",
      "Opening tools and spudgers",
      "Lifetime warranty"
    ],
    specifications: {
      "Bits Included": "64 pieces",
      "Case Material": "Aluminum alloy",
      "Weight": "850g",
      "Dimensions": "20cm x 15cm x 5cm"
    }
  },
  {
    id: "tool-002",
    name: "FastTech Pro Auto Kit V2",
    category: "tools",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 412,
    inStock: true,
    badge: "SALE",
    description: "Comprehensive automotive repair toolkit designed for professional mechanics and DIY enthusiasts.",
    features: [
      "48 automotive bits",
      "Ratchet handle",
      "Extension bars",
      "Socket set included",
      "Durable carrying case"
    ],
    specifications: {
      "Bits Included": "48 pieces",
      "Drive Size": "1/4 inch",
      "Material": "Chrome vanadium steel",
      "Weight": "1.2kg"
    }
  },
  {
    id: "tool-003",
    name: "Precision Screwdriver Set Pro",
    category: "tools",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 356,
    inStock: true,
    description: "Premium precision screwdriver set with 32 bits for all your electronics repair needs.",
    features: [
      "32 precision bits",
      "Ergonomic handle",
      "Magnetic tip",
      "Portable case"
    ],
    specifications: {
      "Bits Included": "32 pieces",
      "Handle Material": "Aluminum",
      "Tip Type": "Magnetic",
      "Weight": "280g"
    }
  },
  {
    id: "tool-004",
    name: "Professional Soldering Station",
    category: "tools",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 287,
    inStock: true,
    badge: "POPULAR",
    description: "Digital soldering station with temperature control for precision electronics work.",
    features: [
      "Digital temperature display",
      "200-480°C temperature range",
      "Quick heating",
      "ESD safe design",
      "Multiple tip options"
    ],
    specifications: {
      "Power": "60W",
      "Temperature Range": "200-480°C",
      "Display": "LED digital",
      "Voltage": "110V/220V"
    }
  },
  {
    id: "tool-005",
    name: "Heat Gun Kit Professional",
    category: "tools",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 198,
    inStock: true,
    description: "Variable temperature heat gun perfect for phone screen repairs and component removal.",
    features: [
      "Variable temperature control",
      "Multiple nozzle attachments",
      "Ergonomic design",
      "Overheat protection"
    ],
    specifications: {
      "Power": "1800W",
      "Temperature Range": "50-650°C",
      "Airflow": "250-500 L/min",
      "Weight": "0.8kg"
    }
  },
  {
    id: "tool-006",
    name: "Anti-Static Mat Kit",
    category: "tools",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 445,
    inStock: true,
    description: "Professional ESD anti-static work mat with wrist strap for safe electronics repair.",
    features: [
      "ESD protection",
      "Large work surface",
      "Wrist strap included",
      "Heat resistant up to 500°C"
    ],
    specifications: {
      "Size": "55cm x 35cm",
      "Material": "Silicone",
      "Resistance": "10^6 - 10^9 Ohms",
      "Thickness": "2mm"
    }
  },

  // Parts Category
  {
    id: "part-001",
    name: "iPhone 13 Pro Max Screen LCD",
    category: "parts",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 634,
    inStock: true,
    badge: "SALE",
    description: "Original quality LCD display replacement for iPhone 13 Pro Max with digitizer.",
    features: [
      "OLED display",
      "Touch digitizer included",
      "Pre-assembled",
      "Lifetime warranty",
      "Easy installation"
    ],
    specifications: {
      "Screen Size": "6.7 inch",
      "Resolution": "2778 x 1284",
      "Type": "OLED",
      "Compatibility": "iPhone 13 Pro Max"
    }
  },
  {
    id: "part-002",
    name: "Samsung Galaxy S23 Battery",
    category: "parts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609592806630-b8d5ec41c16a?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 523,
    inStock: true,
    description: "High capacity replacement battery for Samsung Galaxy S23 with installation tools.",
    features: [
      "5000mAh capacity",
      "Built-in IC protection",
      "Installation kit included",
      "CE certified"
    ],
    specifications: {
      "Capacity": "5000mAh",
      "Voltage": "3.85V",
      "Type": "Li-Polymer",
      "Compatibility": "Samsung Galaxy S23"
    }
  },
  {
    id: "part-003",
    name: "MacBook Pro 13\" A2251 Battery",
    category: "parts",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 287,
    inStock: true,
    badge: "POPULAR",
    description: "Genuine quality replacement battery for MacBook Pro 13 inch 2020 model.",
    features: [
      "58.2Wh capacity",
      "Grade A cells",
      "Installation manual included",
      "1 year warranty"
    ],
    specifications: {
      "Capacity": "58.2Wh",
      "Voltage": "11.4V",
      "Model": "A2251",
      "Year": "2020"
    }
  },
  {
    id: "part-004",
    name: "iPad Pro 11\" Digitizer Glass",
    category: "parts",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 412,
    inStock: true,
    description: "High quality digitizer touch screen glass replacement for iPad Pro 11 inch.",
    features: [
      "Oleophobic coating",
      "Pre-installed adhesive",
      "Touch sensitive",
      "Scratch resistant"
    ],
    specifications: {
      "Size": "11 inch",
      "Type": "Capacitive",
      "Material": "Tempered glass",
      "Compatibility": "iPad Pro 11\""
    }
  },
  {
    id: "part-005",
    name: "iPhone 14 Camera Module",
    category: "parts",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 198,
    inStock: true,
    description: "Original quality rear camera replacement module for iPhone 14.",
    features: [
      "12MP dual camera",
      "Tested before shipping",
      "Easy plug and play",
      "Full functionality"
    ],
    specifications: {
      "Resolution": "12MP",
      "Type": "Dual camera",
      "Features": "Wide + Ultra Wide",
      "Compatibility": "iPhone 14"
    }
  },
  {
    id: "part-006",
    name: "Universal USB-C Charging Port",
    category: "parts",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1625281427568-6f0cb82d8392?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 756,
    inStock: true,
    description: "Universal USB-C charging port replacement compatible with multiple devices.",
    features: [
      "Fast charging support",
      "Durable construction",
      "Easy installation",
      "Wide compatibility"
    ],
    specifications: {
      "Type": "USB-C",
      "Current": "3A max",
      "Material": "Metal alloy",
      "Compatibility": "Universal"
    }
  },
  {
    id: "part-007",
    name: "Laptop Keyboard Dell Inspiron",
    category: "parts",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 289,
    inStock: true,
    description: "Replacement keyboard for Dell Inspiron 15 series with backlight.",
    features: [
      "Backlit keys",
      "US layout",
      "Easy installation",
      "OEM quality"
    ],
    specifications: {
      "Layout": "US QWERTY",
      "Backlight": "Yes",
      "Color": "Black",
      "Compatibility": "Dell Inspiron 15 5000/7000"
    }
  },

  // Gaming Category
  {
    id: "game-001",
    name: "PS5 DualSense Controller",
    category: "gaming",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 1245,
    inStock: true,
    badge: "BESTSELLER",
    description: "Official Sony DualSense wireless controller for PlayStation 5 with haptic feedback.",
    features: [
      "Haptic feedback",
      "Adaptive triggers",
      "Built-in microphone",
      "USB-C charging",
      "3.5mm audio jack"
    ],
    specifications: {
      "Battery Life": "Up to 12 hours",
      "Connectivity": "Bluetooth 5.1",
      "Charging": "USB-C",
      "Weight": "280g"
    }
  },
  {
    id: "game-002",
    name: "Xbox Series X/S Controller",
    category: "gaming",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 987,
    inStock: true,
    description: "Official Xbox wireless controller compatible with Series X/S and PC.",
    features: [
      "Textured grip",
      "Bluetooth connectivity",
      "3.5mm stereo headset jack",
      "Share button",
      "Hybrid D-pad"
    ],
    specifications: {
      "Battery Life": "Up to 40 hours",
      "Connectivity": "Bluetooth + wireless",
      "Power": "2 AA batteries",
      "Weight": "287g"
    }
  },
  {
    id: "game-003",
    name: "Nintendo Switch Joy-Con Pair",
    category: "gaming",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 756,
    inStock: true,
    description: "Official Nintendo Switch Joy-Con controllers - Neon Red and Neon Blue.",
    features: [
      "Motion controls",
      "HD Rumble",
      "IR Motion Camera",
      "Amiibo compatible",
      "Wireless or attached"
    ],
    specifications: {
      "Battery Life": "Up to 20 hours",
      "Connectivity": "Bluetooth",
      "Charging": "Attached to console",
      "Color": "Neon Red/Blue"
    }
  },
  {
    id: "game-004",
    name: "PS5 Console Cooling Stand",
    category: "gaming",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 534,
    inStock: true,
    description: "Professional cooling stand for PS5 with dual controller charging station.",
    features: [
      "Dual cooling fans",
      "Charge 2 controllers",
      "LED indicators",
      "Game storage",
      "USB hub"
    ],
    specifications: {
      "Fans": "2 x high-speed",
      "USB Ports": "3 additional",
      "Controller Charging": "2 slots",
      "Material": "ABS plastic"
    }
  },
  {
    id: "game-005",
    name: "Gaming Headset Pro RGB",
    category: "gaming",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 892,
    inStock: true,
    badge: "POPULAR",
    description: "Professional gaming headset with 7.1 surround sound and RGB lighting.",
    features: [
      "7.1 surround sound",
      "Noise-canceling mic",
      "RGB lighting",
      "Memory foam cushions",
      "Multi-platform compatible"
    ],
    specifications: {
      "Driver": "50mm",
      "Frequency": "20Hz-20KHz",
      "Impedance": "32 Ohm",
      "Cable Length": "2m"
    }
  },
  {
    id: "game-006",
    name: "Xbox Series X 1TB SSD",
    category: "gaming",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 423,
    inStock: true,
    description: "Official Seagate Storage Expansion Card for Xbox Series X/S.",
    features: [
      "1TB capacity",
      "Quick Resume",
      "Plug and play",
      "Matches console performance",
      "Compact design"
    ],
    specifications: {
      "Capacity": "1TB",
      "Speed": "2.4 GB/s",
      "Interface": "PCIe Gen4 x2",
      "Compatibility": "Xbox Series X/S"
    }
  },
  {
    id: "game-007",
    name: "PS5 HD Camera",
    category: "gaming",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1614107151491-6876eecbff89?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 312,
    inStock: true,
    description: "Official PlayStation 5 HD Camera with background removal tools.",
    features: [
      "Dual 1080p lenses",
      "Built-in stand",
      "Background removal",
      "Picture-in-picture mode",
      "Easy streaming"
    ],
    specifications: {
      "Resolution": "1080p",
      "Lenses": "Dual wide-angle",
      "Connection": "USB Type-A",
      "Field of View": "Ultra-wide"
    }
  },
  {
    id: "game-008",
    name: "Racing Wheel Pro Simulator",
    category: "gaming",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 267,
    inStock: true,
    badge: "SALE",
    description: "Professional racing wheel with force feedback and pedal set for ultimate racing simulation.",
    features: [
      "Force feedback",
      "900° rotation",
      "3-pedal set included",
      "Leather-wrapped wheel",
      "PC and console compatible"
    ],
    specifications: {
      "Rotation": "900 degrees",
      "Force Feedback": "Dual-motor",
      "Pedals": "3-pedal set",
      "Compatibility": "PS5/PS4/Xbox/PC"
    }
  },

  // Accessories Category
  {
    id: "acc-001",
    name: "Premium USB-C Hub 7-in-1",
    category: "accessories",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 892,
    inStock: true,
    badge: "SALE",
    description: "7-in-1 USB-C hub with HDMI 4K, USB 3.0 ports, SD/TF card reader, and 100W PD charging.",
    features: [
      "4K HDMI output",
      "3x USB 3.0 ports",
      "SD/TF card reader",
      "100W power delivery",
      "Aluminum housing"
    ],
    specifications: {
      "Ports": "7 total",
      "HDMI Output": "4K@30Hz",
      "USB Speed": "5Gbps",
      "Material": "Aluminum alloy"
    }
  },
  {
    id: "acc-006",
    name: "Webcam 4K Pro Streaming",
    category: "accessories",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 456,
    inStock: true,
    badge: "POPULAR",
    description: "Professional 4K webcam with auto-focus and dual microphones for streaming and video calls.",
    features: [
      "4K resolution",
      "Auto-focus technology",
      "Dual built-in microphones",
      "Wide-angle lens",
      "USB plug-and-play"
    ],
    specifications: {
      "Resolution": "4K 30fps",
      "Field of View": "90 degrees",
      "Connection": "USB 3.0",
      "Compatibility": "Windows/Mac/Linux"
    }
  },
  {
    id: "acc-007",
    name: "Cable Management Kit Pro",
    category: "accessories",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 678,
    inStock: true,
    description: "Complete cable management solution with clips, sleeves, and organizers.",
    features: [
      "Cable clips included",
      "Cable sleeves",
      "Velcro straps",
      "Adhesive cable holders",
      "Desk organizer tray"
    ],
    specifications: {
      "Package": "50+ pieces",
      "Material": "Silicone & ABS",
      "Color": "Black",
      "Compatibility": "Universal"
    }
  },
  {
    id: "acc-008",
    name: "Dual Monitor Arm Mount",
    category: "accessories",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    description: "Heavy-duty dual monitor arm with full motion adjustment and cable management.",
    features: [
      "Dual monitor support",
      "Full motion adjustment",
      "Cable management system",
      "VESA compatible",
      "Supports up to 32 inch monitors"
    ],
    specifications: {
      "Max Weight": "10kg per arm",
      "VESA": "75x75, 100x100",
      "Adjustment": "360° rotation",
      "Clamp Type": "C-clamp & Grommet"
    }
  },
  {
    id: "acc-009",
    name: "RGB LED Strip Lights 5M",
    category: "accessories",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    badge: "BESTSELLER",
    description: "Smart RGB LED strip lights with app control and music sync for ambient lighting.",
    features: [
      "5 meter length",
      "RGB color changing",
      "App & remote control",
      "Music sync mode",
      "Adhesive backing"
    ],
    specifications: {
      "Length": "5 meters",
      "LEDs": "150 LED beads",
      "Control": "WiFi/Bluetooth",
      "Power": "12V adapter included"
    }
  },
  {
    id: "acc-010",
    name: "Ergonomic Mouse Pad XXL",
    category: "accessories",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    description: "Extra large gaming mouse pad with wrist rest and anti-slip rubber base.",
    features: [
      "XXL size (900x400mm)",
      "Memory foam wrist rest",
      "Anti-slip rubber base",
      "Water-resistant surface",
      "Stitched edges"
    ],
    specifications: {
      "Size": "900 x 400 x 4mm",
      "Material": "Fabric + Rubber",
      "Surface": "Micro-textured",
      "Color": "Black"
    }
  },
  {
    id: "acc-002",
    name: "Wireless Charging Pad 15W",
    category: "accessories",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1591290619762-9f2a877c94e1?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    features: [
      "15W fast charging",
      "Qi certified",
      "LED indicator",
      "Foreign object detection",
      "Non-slip surface"
    ],
    specifications: {
      "Max Power": "15W",
      "Input": "9V/2A",
      "Compatibility": "Qi-enabled devices",
      "Size": "10cm diameter"
    }
  },
  {
    id: "acc-003",
    name: "Screen Protector Kit Universal",
    category: "accessories",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 567,
    inStock: true,
    description: "Tempered glass screen protector kit with installation tools and cleaning cloth.",
    features: [
      "9H hardness",
      "2.5D rounded edges",
      "Oleophobic coating",
      "Bubble-free installation",
      "Installation kit included"
    ],
    specifications: {
      "Hardness": "9H",
      "Thickness": "0.33mm",
      "Material": "Tempered glass",
      "Package": "3 pack"
    }
  },
  {
    id: "acc-004",
    name: "Laptop Stand Aluminum Adjustable",
    category: "accessories",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 445,
    inStock: true,
    badge: "POPULAR",
    description: "Ergonomic laptop stand with adjustable height and angle for better posture.",
    features: [
      "6 adjustable heights",
      "Foldable design",
      "Heat dissipation",
      "Non-slip pads",
      "Supports up to 17\" laptops"
    ],
    specifications: {
      "Material": "Aluminum alloy",
      "Max Load": "10kg",
      "Adjustable Heights": "6 levels",
      "Compatibility": "10-17 inch laptops"
    }
  },
  {
    id: "acc-005",
    name: "Phone Grip & Stand 2-Pack",
    category: "accessories",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop",
    rating: 4.4,
    reviews: 789,
    inStock: true,
    description: "Multi-functional phone grip and stand with 360° rotation.",
    features: [
      "360° rotation",
      "Collapsible design",
      "Works as stand",
      "Secure grip",
      "Reusable adhesive"
    ],
    specifications: {
      "Rotation": "360 degrees",
      "Material": "ABS plastic",
      "Adhesive": "Reusable gel",
      "Package": "2 pack"
    }
  },
  {
    id: "acc-011",
    name: "Fast Charging Cable 3-Pack USB-C",
    category: "accessories",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 1456,
    inStock: true,
    badge: "BESTSELLER",
    description: "Durable braided USB-C charging cables with fast charging support.",
    features: [
      "3 pack (3ft, 6ft, 10ft)",
      "Braided nylon cable",
      "100W power delivery",
      "Data transfer 480Mbps",
      "Universal compatibility"
    ],
    specifications: {
      "Lengths": "0.9m, 1.8m, 3m",
      "Power": "100W PD",
      "Material": "Braided nylon",
      "Connector": "USB-C to USB-C"
    }
  },
  {
    id: "acc-012",
    name: "Multi-Device Charging Station",
    category: "accessories",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1591290619762-9f2a877c94e1?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 678,
    inStock: true,
    badge: "POPULAR",
    description: "6-port USB charging station with smart IC technology for multiple devices.",
    features: [
      "6 USB ports",
      "60W total output",
      "Smart IC technology",
      "Surge protection",
      "LED indicators"
    ],
    specifications: {
      "Ports": "6x USB-A",
      "Total Output": "60W",
      "Input": "100-240V",
      "Protection": "Over-current, Over-voltage"
    }
  },
  {
    id: "acc-013",
    name: "Portable Power Bank 20000mAh",
    category: "accessories",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1609592806630-b8d5ec41c16a?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 2134,
    inStock: true,
    description: "High-capacity portable charger with dual USB outputs and LED display.",
    features: [
      "20000mAh capacity",
      "Dual USB outputs",
      "LED digital display",
      "Fast charging support",
      "Compact design"
    ],
    specifications: {
      "Capacity": "20000mAh",
      "Input": "USB-C 18W",
      "Output": "2x USB-A 18W",
      "Battery Type": "Li-Polymer"
    }
  },
  {
    id: "acc-014",
    name: "Bluetooth Keyboard & Mouse Combo",
    category: "accessories",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 892,
    inStock: true,
    description: "Wireless keyboard and mouse combo with silent keys and ergonomic design.",
    features: [
      "Bluetooth 5.0",
      "Silent keys",
      "Ergonomic design",
      "Rechargeable batteries",
      "Multi-device pairing"
    ],
    specifications: {
      "Connectivity": "Bluetooth 5.0",
      "Battery Life": "3 months",
      "Range": "10 meters",
      "Compatibility": "Windows/Mac/iOS/Android"
    }
  },
  {
    id: "acc-015",
    name: "HDMI Cable 4K 6ft Braided",
    category: "accessories",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 1234,
    inStock: true,
    description: "Premium braided HDMI cable supporting 4K@60Hz with HDR.",
    features: [
      "4K@60Hz support",
      "HDR compatible",
      "Braided cable",
      "Gold-plated connectors",
      "24K gold-plated"
    ],
    specifications: {
      "Resolution": "4K@60Hz",
      "Length": "6 feet (1.8m)",
      "Version": "HDMI 2.0",
      "HDR": "Yes"
    }
  },
  {
    id: "acc-016",
    name: "USB Flash Drive 128GB 3-Pack",
    category: "accessories",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 567,
    inStock: true,
    description: "High-speed USB 3.0 flash drives with 128GB capacity each.",
    features: [
      "128GB per drive",
      "USB 3.0 speed",
      "Capless design",
      "LED indicator",
      "Metal housing"
    ],
    specifications: {
      "Capacity": "128GB each",
      "Interface": "USB 3.0",
      "Read Speed": "100MB/s",
      "Package": "3 pack"
    }
  },
  {
    id: "acc-017",
    name: "Desk Organizer with Wireless Charger",
    category: "accessories",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 445,
    inStock: true,
    description: "Multi-functional desk organizer with built-in wireless charging pad.",
    features: [
      "10W wireless charging",
      "Multiple compartments",
      "Phone stand",
      "Cable management",
      "Premium PU leather"
    ],
    specifications: {
      "Charging": "10W Qi wireless",
      "Material": "PU Leather",
      "Dimensions": "25cm x 15cm x 10cm",
      "Color": "Black"
    }
  },
  {
    id: "acc-018",
    name: "Tablet Stand Adjustable Aluminum",
    category: "accessories",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 678,
    inStock: true,
    description: "Universal tablet stand with adjustable angles for all tablet sizes.",
    features: [
      "Universal compatibility",
      "Multi-angle adjustment",
      "Aluminum construction",
      "Non-slip base",
      "Portable design"
    ],
    specifications: {
      "Material": "Aluminum alloy",
      "Compatibility": "4-13 inch tablets",
      "Angles": "Fully adjustable",
      "Weight": "250g"
    }
  },
  {
    id: "acc-019",
    name: "Blue Light Blocking Glasses",
    category: "accessories",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 1567,
    inStock: true,
    description: "Computer glasses with blue light blocking lenses to reduce eye strain.",
    features: [
      "Blue light blocking",
      "UV protection",
      "Anti-glare coating",
      "Lightweight frame",
      "Carrying case included"
    ],
    specifications: {
      "Frame Material": "TR90",
      "Lens Type": "Blue light blocking",
      "UV Protection": "100%",
      "Style": "Unisex"
    }
  },
  {
    id: "acc-020",
    name: "Microfiber Cleaning Cloths 10-Pack",
    category: "accessories",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 2345,
    inStock: true,
    badge: "BESTSELLER",
    description: "Premium microfiber cloths for cleaning screens, lenses, and electronics.",
    features: [
      "10 pack",
      "Lint-free",
      "Scratch-resistant",
      "Washable & reusable",
      "Multiple colors"
    ],
    specifications: {
      "Size": "6 x 6 inches",
      "Material": "Microfiber",
      "Package": "10 cloths",
      "Machine Washable": "Yes"
    }
  },

  // Computers Category
  {
    id: "comp-001",
    name: "Gaming PC RGB Build Kit",
    category: "computers",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    badge: "SALE",
    description: "Complete gaming PC build kit with RGB lighting, powerful GPU, and liquid cooling.",
    features: [
      "Intel i7 processor",
      "RTX 4060 Ti graphics",
      "16GB DDR5 RAM",
      "1TB NVMe SSD",
      "RGB lighting system",
      "Liquid cooling"
    ],
    specifications: {
      "CPU": "Intel Core i7-13700K",
      "GPU": "NVIDIA RTX 4060 Ti 8GB",
      "RAM": "16GB DDR5",
      "Storage": "1TB NVMe SSD"
    }
  },
  {
    id: "comp-006",
    name: "RAM Kit DDR5 32GB (2x16GB)",
    category: "computers",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 445,
    inStock: true,
    badge: "POPULAR",
    description: "High-performance DDR5 RAM kit with RGB lighting and XMP 3.0 support.",
    features: [
      "32GB total capacity",
      "6000MHz speed",
      "RGB lighting",
      "XMP 3.0 support",
      "Low latency CL30"
    ],
    specifications: {
      "Capacity": "32GB (2x16GB)",
      "Speed": "6000MHz",
      "Type": "DDR5",
      "Latency": "CL30"
    }
  },
  {
    id: "comp-007",
    name: "Graphics Card RTX 4070 Ti",
    category: "computers",
    price: 799.99,
    originalPrice: 899.99,
    image: "https://images.unsplash.com/photo-1587202372583-49330a15584d?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 312,
    inStock: true,
    badge: "SALE",
    description: "NVIDIA RTX 4070 Ti graphics card with ray tracing and DLSS 3.0.",
    features: [
      "12GB GDDR6X memory",
      "Ray tracing support",
      "DLSS 3.0",
      "Triple fan cooling",
      "RGB lighting"
    ],
    specifications: {
      "Memory": "12GB GDDR6X",
      "Core Clock": "2610MHz boost",
      "Interface": "PCIe 4.0",
      "Power": "285W TDP"
    }
  },
  {
    id: "comp-008",
    name: "NVMe SSD 1TB Gen4",
    category: "computers",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 789,
    inStock: true,
    description: "Ultra-fast PCIe Gen4 NVMe SSD with heatsink for optimal performance.",
    features: [
      "1TB capacity",
      "PCIe Gen4 x4",
      "Up to 7000MB/s read",
      "Aluminum heatsink",
      "5-year warranty"
    ],
    specifications: {
      "Capacity": "1TB",
      "Interface": "PCIe 4.0 x4",
      "Read Speed": "7000 MB/s",
      "Write Speed": "5000 MB/s"
    }
  },
  {
    id: "comp-009",
    name: "CPU Cooler AIO 240mm RGB",
    category: "computers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 523,
    inStock: true,
    badge: "POPULAR",
    description: "All-in-one liquid CPU cooler with 240mm radiator and RGB fans.",
    features: [
      "240mm radiator",
      "RGB lighting",
      "Quiet operation",
      "Universal socket support",
      "Easy installation"
    ],
    specifications: {
      "Radiator": "240mm",
      "Fan Speed": "2000 RPM max",
      "Noise Level": "25 dBA",
      "Compatibility": "Intel/AMD"
    }
  },
  {
    id: "comp-010",
    name: "PC Case Mid Tower RGB",
    category: "computers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 356,
    inStock: true,
    description: "Mid-tower gaming case with tempered glass panel and RGB fans.",
    features: [
      "Tempered glass side panel",
      "3x RGB fans included",
      "Cable management system",
      "ATX support",
      "USB-C front panel"
    ],
    specifications: {
      "Form Factor": "Mid Tower ATX",
      "Material": "Steel + Glass",
      "Max GPU Length": "380mm",
      "Max CPU Cooler": "165mm"
    }
  },
  {
    id: "comp-002",
    name: "Mechanical Keyboard RGB Pro",
    category: "computers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 1567,
    inStock: true,
    badge: "BESTSELLER",
    description: "Professional mechanical keyboard with RGB backlighting and customizable switches.",
    features: [
      "Mechanical switches",
      "Full RGB backlighting",
      "Hot-swappable",
      "Programmable keys",
      "Detachable cable"
    ],
    specifications: {
      "Switch Type": "Cherry MX Red",
      "Backlighting": "Per-key RGB",
      "Layout": "Full size (104 keys)",
      "Connection": "USB-C"
    }
  },
  {
    id: "comp-003",
    name: "4K Monitor 27\" IPS Gaming",
    category: "computers",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 678,
    inStock: true,
    description: "27-inch 4K IPS gaming monitor with 144Hz refresh rate and HDR support.",
    features: [
      "4K UHD resolution",
      "144Hz refresh rate",
      "HDR10 support",
      "1ms response time",
      "FreeSync & G-Sync compatible"
    ],
    specifications: {
      "Resolution": "3840 x 2160",
      "Refresh Rate": "144Hz",
      "Panel Type": "IPS",
      "Response Time": "1ms"
    }
  },
  {
    id: "comp-004",
    name: "Gaming Mouse Wireless Pro",
    category: "computers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 923,
    inStock: true,
    badge: "POPULAR",
    description: "Professional wireless gaming mouse with high precision sensor and RGB lighting.",
    features: [
      "25,600 DPI sensor",
      "Wireless 2.4GHz",
      "RGB lighting",
      "8 programmable buttons",
      "80-hour battery life"
    ],
    specifications: {
      "DPI": "25,600 max",
      "Connectivity": "Wireless 2.4GHz",
      "Battery": "Up to 80 hours",
      "Weight": "80g"
    }
  },
  {
    id: "comp-005",
    name: "External SSD 2TB Portable",
    category: "computers",
    price: 179.99,
    originalPrice: 219.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 1123,
    inStock: true,
    badge: "SALE",
    description: "Ultra-fast portable SSD with USB 3.2 Gen 2 for lightning-fast file transfers.",
    features: [
      "2TB capacity",
      "Up to 1050MB/s speed",
      "USB 3.2 Gen 2",
      "Compact design",
      "Hardware encryption"
    ],
    specifications: {
      "Capacity": "2TB",
      "Interface": "USB 3.2 Gen 2",
      "Read Speed": "1050 MB/s",
      "Write Speed": "1000 MB/s"
    }
  },

  // Audio Category
  {
    id: "audio-001",
    name: "Wireless Earbuds Pro ANC",
    category: "audio",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 2134,
    inStock: true,
    badge: "BESTSELLER",
    description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
    features: [
      "Active noise cancellation",
      "Spatial audio support",
      "30-hour battery life",
      "Wireless charging case",
      "IPX4 water resistant"
    ],
    specifications: {
      "Battery": "30 hours total",
      "Bluetooth": "5.3",
      "Driver": "10mm dynamic",
      "Water Resistance": "IPX4"
    }
  },
  {
    id: "audio-006",
    name: "Soundbar 5.1 Surround System",
    category: "audio",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 567,
    inStock: true,
    badge: "SALE",
    description: "Premium 5.1 channel soundbar with wireless subwoofer and Dolby Atmos.",
    features: [
      "5.1 channel audio",
      "Dolby Atmos support",
      "Wireless subwoofer",
      "HDMI ARC/eARC",
      "Bluetooth connectivity"
    ],
    specifications: {
      "Channels": "5.1",
      "Power": "500W total",
      "Connectivity": "HDMI/Optical/Bluetooth",
      "Subwoofer": "Wireless 8 inch"
    }
  },
  {
    id: "audio-007",
    name: "DJ Headphones Professional",
    category: "audio",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 445,
    inStock: true,
    badge: "POPULAR",
    description: "Professional DJ headphones with swivel design and powerful bass response.",
    features: [
      "Swivel ear cups",
      "50mm drivers",
      "Detachable cable",
      "Gold-plated connectors",
      "Carrying case included"
    ],
    specifications: {
      "Driver": "50mm",
      "Frequency": "5Hz-30kHz",
      "Impedance": "32 Ohm",
      "Cable": "3m coiled"
    }
  },
  {
    id: "audio-008",
    name: "Audio Interface USB-C 2x2",
    category: "audio",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 312,
    inStock: true,
    description: "Professional USB-C audio interface with phantom power and direct monitoring.",
    features: [
      "2 XLR/TRS inputs",
      "48V phantom power",
      "Direct monitoring",
      "USB-C connectivity",
      "Studio-quality preamps"
    ],
    specifications: {
      "Inputs": "2x combo XLR/TRS",
      "Outputs": "2x TRS",
      "Sample Rate": "192kHz/24bit",
      "Connection": "USB-C"
    }
  },
  {
    id: "audio-009",
    name: "Smart Speaker with Alexa",
    category: "audio",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 1890,
    inStock: true,
    description: "Smart speaker with Alexa voice control and premium sound quality.",
    features: [
      "Alexa built-in",
      "360° sound",
      "Smart home control",
      "Multi-room audio",
      "AUX input"
    ],
    specifications: {
      "Voice Assistant": "Alexa",
      "Connectivity": "WiFi/Bluetooth",
      "Power": "30W",
      "Compatibility": "iOS/Android"
    }
  },
  {
    id: "audio-010",
    name: "Record Player Vintage Style",
    category: "audio",
    price: 199.99,
    image: "https://images.unsplash.com/photo-160175822992-86f6be8e6be3?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    badge: "POPULAR",
    description: "Vintage-style turntable with Bluetooth output and built-in speakers.",
    features: [
      "3-speed turntable",
      "Bluetooth output",
      "Built-in speakers",
      "RCA outputs",
      "Auto-stop function"
    ],
    specifications: {
      "Speeds": "33/45/78 RPM",
      "Drive": "Belt drive",
      "Cartridge": "Ceramic",
      "Output": "Bluetooth/RCA"
    }
  },
  {
    id: "audio-002",
    name: "Studio Monitor Speakers Pair",
    category: "audio",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 456,
    inStock: true,
    badge: "POPULAR",
    description: "Professional studio monitor speakers with flat frequency response for music production.",
    features: [
      "5-inch woofer",
      "Balanced frequency response",
      "Multiple inputs",
      "Room control EQ",
      "Magnetic shielding"
    ],
    specifications: {
      "Woofer": "5 inch",
      "Tweeter": "1 inch silk dome",
      "Frequency Response": "45Hz-20kHz",
      "Power": "50W per speaker"
    }
  },
  {
    id: "audio-003",
    name: "Condenser Microphone USB",
    category: "audio",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 889,
    inStock: true,
    description: "Professional USB condenser microphone perfect for streaming, podcasting, and recording.",
    features: [
      "Cardioid polar pattern",
      "Plug-and-play USB",
      "Adjustable arm stand",
      "Pop filter included",
      "Mute button"
    ],
    specifications: {
      "Polar Pattern": "Cardioid",
      "Frequency Response": "20Hz-20kHz",
      "Sample Rate": "96kHz/24bit",
      "Connection": "USB"
    }
  },
  {
    id: "audio-004",
    name: "Bluetooth Speaker Portable 40W",
    category: "audio",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 1567,
    inStock: true,
    description: "Powerful portable Bluetooth speaker with 360° sound and long battery life.",
    features: [
      "40W power output",
      "360° sound",
      "24-hour battery",
      "IPX7 waterproof",
      "TWS pairing"
    ],
    specifications: {
      "Power": "40W",
      "Battery Life": "24 hours",
      "Bluetooth": "5.0",
      "Water Resistance": "IPX7"
    }
  },
  {
    id: "audio-005",
    name: "Over-Ear Headphones Studio",
    category: "audio",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 723,
    inStock: true,
    badge: "SALE",
    description: "Professional studio headphones with superior sound isolation and comfort.",
    features: [
      "50mm drivers",
      "Closed-back design",
      "Memory foam cushions",
      "Detachable cable",
      "Foldable design"
    ],
    specifications: {
      "Driver Size": "50mm",
      "Impedance": "32 Ohm",
      "Frequency": "15Hz-28kHz",
      "Cable": "3m detachable"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badge === "POPULAR" || product.badge === "BESTSELLER").slice(0, 4);
};

export const getAllCategories = (): string[] => {
  const categories = [...new Set(products.map(p => p.category))];
  return categories;
};

export const getCategoryStats = () => {
  const categories = getAllCategories();
  return categories.map(category => ({
    name: category,
    count: products.filter(p => p.category === category).length,
    avgPrice: Math.round(products.filter(p => p.category === category).reduce((acc, p) => acc + p.price, 0) / products.filter(p => p.category === category).length * 100) / 100
  }));
};
