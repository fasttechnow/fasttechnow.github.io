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
    image: "https://images.unsplash.com/photo-1581092583537-20d51b2e4b8f?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1592286927505-5e3c7abfe1e1?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1591290619762-9f2a877c94e1?w=800&h=600&fit=crop",
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

  // Computers Category
  {
    id: "comp-001",
    name: "Gaming PC RGB Build Kit",
    category: "computers",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&h=600&fit=crop",
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
    id: "comp-002",
    name: "Mechanical Keyboard RGB Pro",
    category: "computers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop",
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
