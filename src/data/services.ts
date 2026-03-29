import {
  GlassWater,
  Building2,
  ShowerHead,
  LayoutGrid,
  Fence,
  Wrench,
} from "lucide-react";

export const services = [
  {
    title: "Glass Doors",
    slug: "glass-doors",
    icon: GlassWater,
    desc: "Premium tempered glass doors with modern aesthetics.",
    image: "/images/services/glass-door/glass-door-1.webp",

    details:
      "Our glass doors are made with high-quality tempered glass, providing safety, durability, and a modern luxurious look for homes and offices.",

    overview:
      "Glass doors enhance natural light, create open spaces, and give a premium feel to interiors and commercial areas.",

    materials: [
      "Tempered safety glass",
      "Aluminium frames (optional)",
      "Stainless steel fittings",
    ],

    benefits: [
      "Modern & stylish look",
      "Increases natural light",
      "Easy maintenance",
      "Long-lasting durability",
    ],

    process: [
      "Site measurement",
      "Custom design selection",
      "Glass cutting & finishing",
      "Professional installation",
    ],

    features: [
      "High-quality tempered glass",
      "Custom sizes available",
      "Frameless & framed options",
      "Scratch-resistant finish",
    ],

    faqs: [
      {
        q: "Is tempered glass safe?",
        a: "Yes, it is highly durable and breaks into small non-sharp pieces.",
      },
      {
        q: "Can I customize the design?",
        a: "Yes, fully customizable sizes and styles are available.",
      },
    ],

    gallery: [
      "/images/services/glass-door/glass-door.jpg",
      "/images/services/glass-door/glass-door-2.webp",
      "/images/services/glass-door/glass-door-3.webp",
    ],
  },

  {
    title: "Aluminium Windows",
    slug: "aluminium-windows",
    icon: Building2,
    desc: "High-quality aluminium windows with thermal efficiency.",
    image: "/images/services/aluminium-window/aluminium-window-1.jpg",

    details:
      "Durable aluminium windows designed for insulation, strength, and modern appearance.",

    overview:
      "Aluminium windows are lightweight, rust-resistant, and perfect for modern architecture.",

    materials: [
      "Powder-coated aluminium",
      "Double-glazed glass",
      "Rubber sealing",
    ],

    benefits: [
      "Rust-proof & weather resistant",
      "Thermal insulation",
      "Low maintenance",
      "Modern slim design",
    ],

    process: [
      "Measurement",
      "Frame fabrication",
      "Glass fitting",
      "Installation",
    ],

    features: [
      "Thermal insulation",
      "Rust-resistant",
      "Noise reduction",
      "Energy efficient",
    ],

    faqs: [
      {
        q: "Do aluminium windows rust?",
        a: "No, they are completely rust-resistant.",
      },
      {
        q: "Are they energy efficient?",
        a: "Yes, especially with double glazing.",
      },
    ],

    gallery: [
      "/images/services/aluminium-window/aluminium-window.jpg",
      "/images/services/aluminium-window/aluminium-window-2.jpg",
      "/images/services/aluminium-window/aluminium-window-3.jpg",
    ],
  },

  {
    title: "Shower Cabins",
    slug: "shower-cabins",
    icon: ShowerHead,
    desc: "Elegant and customized shower enclosures.",
    image: "/images/services/shower-cabin/shower-cabin.webp",

    details:
      "Stylish shower cabins that provide a clean, modern, and waterproof bathroom experience.",

    overview:
      "Designed to enhance bathroom aesthetics while preventing water leakage.",

    materials: ["Tempered glass", "Aluminium frame", "Waterproof seals"],

    benefits: ["Keeps bathroom dry", "Modern appearance", "Easy cleaning"],

    process: ["Design selection", "Glass cutting", "Installation"],

    features: ["Waterproof design", "Custom sizes", "Sliding doors"],

    faqs: [
      {
        q: "Is it easy to clean?",
        a: "Yes, glass surface is easy to maintain.",
      },
    ],

    gallery: [
      "/images/services/shower-cabin/shower-cabin-1.webp",
      "/images/services/shower-cabin/shower-cabin-2.webp",
      "/images/services/shower-cabin/shower-cabin-3.jpg",
    ],
  },

  {
    title: "Office Partitions",
    slug: "office-partitions",
    icon: LayoutGrid,
    desc: "Stylish glass partitions for offices.",
    image: "/images/services/office-partition/office-partition-3.jpg",

    details:
      "Modern office partitions that improve productivity and workspace aesthetics.",

    overview: "Perfect for dividing office space while maintaining openness.",

    materials: ["Glass panels", "Aluminium frames"],

    benefits: [
      "Better space utilization",
      "Noise reduction",
      "Professional look",
    ],

    process: ["Planning", "Design", "Installation"],

    features: ["Sound insulation", "Modern look"],

    faqs: [
      {
        q: "Do partitions reduce noise?",
        a: "Yes, they help in sound reduction.",
      },
    ],

    gallery: [
      "/images/services/office-partition/office-partition-1.jpg",
      "/images/services/office-partition/office-partition-2.webp",
      "/images/services/office-partition/office-partition.jpg",
    ],
  },

  {
    title: "Glass Railings",
    slug: "glass-railings",
    icon: Fence,
    desc: "Modern railing solutions.",
    image: "/images/services/glass-railing/glass-railing-3.webp",

    details: "Safe and stylish railing solutions for stairs and balconies.",

    overview:
      "Glass railings provide safety while maintaining a sleek modern design.",

    materials: ["Tempered glass", "Steel supports"],

    benefits: ["Strong & safe", "Modern design", "Weather resistant"],

    process: ["Measurement", "Fabrication", "Installation"],

    features: ["Strong glass", "Outdoor resistant"],

    faqs: [
      {
        q: "Are glass railings safe?",
        a: "Yes, they use strong tempered glass.",
      },
    ],

    gallery: [
      "/images/services/glass-railing/glass-railing-1.jpeg",
      "/images/services/glass-railing/glass-railing.jpg",
      "/images/services/glass-railing/glass-railing-2.jpg",
    ],
  },

  {
    title: "Custom Glass Work",
    slug: "custom-glass-work",
    icon: Wrench,
    desc: "Tailor-made glass solutions.",
    image: "/images/services/custom-glass/custom-glass.jpeg",

    details:
      "Fully customized glass solutions designed according to your specific needs.",

    overview:
      "From unique designs to custom installations, we provide complete flexibility.",

    materials: ["Custom glass", "Premium fittings"],

    benefits: ["Fully customized", "Premium finish", "Unique designs"],

    process: ["Consultation", "Design", "Execution"],

    features: ["Custom shapes", "Premium quality"],

    faqs: [
      {
        q: "Can I request custom designs?",
        a: "Yes, everything is customizable.",
      },
    ],

    gallery: [
      "/images/services/custom-glass/custom-glass-1.avif",
      "/images/services/custom-glass/custom-glass-2.avif",
      "/images/services/custom-glass/custom-glass-3.webp",
    ],
  },
];
