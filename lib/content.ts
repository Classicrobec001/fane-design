export type RelatedWork = { category: string; name: string; image: string };
export type ServiceTestimonial = {
  brand: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};
export type ServiceDetail = {
  deliverables: string[];
  relatedWork: RelatedWork[];
  testimonial: ServiceTestimonial;
};

export type Service = {
  no: string;
  title: string;
  desc: string;      // short (home accordion)
  longDesc: string;  // services overview page
  slug: string;
  cta: string;
  href: string;
  gallery?: [string, string, string]; // omitted where there's no imagery yet
  capabilities: string[];
  action: "detail" | "request"; // DIVE DEEPER vs REQUEST SERVICE
  detail?: ServiceDetail;       // dive-deeper page content
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Brand /Graphic Design",
    desc: "Strategy-first identities that communicate your brand's vision with precision and purpose.",
    longDesc:
      "For founders preparing to launch or raise — and for established companies ready for a strategic rebrand. Whether you need a polished brand foundation in weeks or a comprehensive identity system over months, we bring senior-level craft and strategy-first thinking to every engagement.",
    slug: "brand-design",
    cta: "View brand design",
    href: "/services/brand-design",
    gallery: [
      "/assets/gallery/brand-design-1.png",
      "/assets/gallery/brand-design-2.png",
      "/assets/gallery/brand-design-3.png",
    ],
    capabilities: [
      "Naming strategy",
      "Brand strategy & positioning",
      "Style discovery & moodboards",
      "Logo & identity systems",
      "Brand presentations",
      "Collateral & packaging",
      "Brand guidelines",
      "Logo animation & motion",
    ],
    action: "detail",
    detail: {
      deliverables: [
        "Typography system",
        "Icon & illustration set",
        "Social media templates",
        "Logo suite & variations",
        "Brand stationery",
        "Pitch deck template",
        "Motion logo",
      ],
      relatedWork: [
        {
          category: "Social media template",
          name: "Yumee_Treetz",
          image: "/assets/services/brand-design/work-1.png",
        },
        {
          category: "Brand design",
          name: "Fame Laundry",
          image: "/assets/services/brand-design/work-2.png",
        },
        {
          category: "Social media template",
          name: "PinPoint",
          image: "/assets/services/brand-design/work-3.png",
        },
      ],
      testimonial: {
        brand: "PinPoint",
        quote:
          "You guys are amazing. Over the years, I've seen our competitors try to copy our templates and that's just a testament of the amazing visual design you guys have done for us.",
        name: "Ernest Daviva",
        role: "CEO, PinPoint Kitchen & Lounge",
        image: "/assets/services/brand-design/testimonial.png",
      },
    },
  },
  {
    no: "02",
    title: "Web Design & Development",
    desc: "Your 24/7 sales representative — high-converting websites that work while you sleep.",
    longDesc:
      "For growth-stage teams with a strong product but an underperforming site — and for businesses that need a full marketing website built for conversion. We design and build websites that sharpen your positioning, elevate trust, and work as your best salesperson around the clock.",
    slug: "web",
    cta: "View web design",
    href: "/services/web",
    gallery: [
      "/assets/gallery/web-1.png",
      "/assets/gallery/web-2.png",
      "/assets/gallery/web-3.png",
    ],
    capabilities: [
      "Copywriting & content strategy",
      "Responsive web design",
      "Prototyping & interactions",
      "WordPress development",
      "Webflow development",
      "Custom web development",
      "Stylescapes & visual direction",
      "Wireframes & information architecture",
    ],
    action: "detail",
    detail: {
      deliverables: [
        "WordPress development",
        "Responsive website design",
        "Content strategy & copy",
        "Custom illustrations",
        "Custom web development",
        "Webflow development",
        "Interactive prototypes",
        "Launch support",
      ],
      relatedWork: [
        {
          category: "Automotive",
          name: "Laferay Website",
          image: "/assets/services/web/work-1.png",
        },
        {
          category: "Creative services",
          name: "Portfolio Website",
          image: "/assets/services/web/work-2.png",
        },
        {
          category: "Web3",
          name: "Ectinum Website",
          image: "/assets/services/web/work-3.png",
        },
      ],
      testimonial: {
        brand: "AcePlayHouse",
        quote:
          "The Fane Designs & Development team didn't meet the project expectations, they SHATTERED the ceiling of our expectations. We got beyond what we thought we would get.",
        name: "Daniel Ace",
        role: "Founder, AcePlayHouse",
        image: "/assets/services/web/testimonial.png",
      },
    },
  },
  {
    no: "03",
    title: "Product & UI/UX Design",
    desc: "Thoughtful UX and beautiful UI that users love and businesses rely on.",
    longDesc:
      "For early-stage teams who need to validate fast — and for established product teams that need a design system or a full UX overhaul. We solve the problems your users feel but can't articulate, through research-led design that balances beauty with measurable function.",
    slug: "product-design",
    cta: "View product design",
    href: "/services/product-design",
    gallery: [
      "/assets/gallery/product-design-1.png",
      "/assets/gallery/product-design-2.png",
      "/assets/gallery/product-design-3.png",
    ],
    capabilities: [
      "UX research & audits",
      "User flows & journey mapping",
      "Wireframing",
      "Interface design & UI systems",
      "Prototyping & micro-interactions",
      "Design systems",
      "Mobile & web applications",
      "Stakeholder interviews",
    ],
    action: "detail",
    detail: {
      deliverables: [
        "UX research report",
        "User flow diagrams",
        "High fidelity design",
        "Interactive prototypes",
        "Wireframes",
        "Developer handoff specs",
        "Usability testing",
      ],
      relatedWork: [
        {
          category: "Laundry & dry cleaning",
          name: "Fame Laundry",
          image: "/assets/services/product-design/work-1.png",
        },
        {
          category: "Food & beverage",
          name: "Food Rush",
          image: "/assets/services/product-design/work-2.png",
        },
        {
          category: "Logistics",
          name: "Zenvoy",
          image: "/assets/services/product-design/work-3.png",
        },
      ],
      testimonial: {
        brand: "Food Rush",
        quote:
          "SLOW CLAP!! Way to go! We were all impressed. This was the exact goal. Take a bow and pop something.",
        name: "Marian Ade",
        role: "CEO, Food Rush & Treats",
        image: "/assets/services/product-design/testimonial.png",
      },
    },
  },
  {
    no: "04",
    title: "Mobile Application",
    desc: "Your business in every customer's pocket — powerful mobile apps that keep users engaged anytime, anywhere.",
    longDesc:
      "For startups bringing new ideas to life — and for established businesses ready to extend their digital presence. Whether you need a polished MVP in weeks or a feature-rich mobile application built for scale, we combine thoughtful design with expert development to deliver apps users love.",
    slug: "mobile",
    cta: "View mobile apps",
    href: "/services/mobile",
    gallery: [
      "/assets/gallery/mobile-1.png",
      "/assets/gallery/mobile-2.png",
      "/assets/gallery/mobile-3.png",
    ],
    capabilities: [
      "UI/UX design",
      "Mobile app strategy",
      "Wireframes & user flows",
      "Prototyping & interactions",
      "iOS app development",
      "Cross-platform development",
      "App testing & QA",
      "App store deployment",
      "Maintenance",
      "Android app development",
    ],
    action: "detail",
    detail: {
      deliverables: [
        "UI/UX design",
        "Interactive prototype",
        "iOS & Android mobile app",
        "Backend API & database",
        "Admin dashboard",
        "Source code repository",
        "App Store & Google Play submission",
        "Technical documentation",
      ],
      relatedWork: [
        {
          category: "Ecommerce",
          name: "Moderno",
          image: "/assets/services/mobile/work-1.png",
        },
        {
          category: "Fintech",
          name: "Bankie",
          image: "/assets/services/mobile/work-2.png",
        },
        {
          category: "Laundry & dry cleaning",
          name: "Fame Laundry",
          image: "/assets/services/mobile/work-3.png",
        },
      ],
      testimonial: {
        brand: "Moderno",
        quote:
          "I would not hesitate to recommend Fane Designs & Development to anyone looking for a design & development company.",
        name: "Mo Lauren",
        role: "CEO, Moderno Furnitures",
        image: "/assets/services/mobile/testimonial.png",
      },
    },
  },
  {
    no: "05",
    title: "AI Video Creation",
    desc: "Create professional, engaging videos with AI — perfect for marketing, social media, and growing your business.",
    longDesc:
      "For startups introducing new products — and for established businesses scaling their digital marketing. Whether you need high-converting promotional videos, product demos, or AI-generated brand content, we combine creative direction with advanced AI tools to produce videos that inspire, engage, and convert.",
    slug: "ai-video",
    cta: "Request service",
    href: "https://calendly.com/fanedesigns",
    capabilities: [
      "AI video strategy",
      "Scriptwriting",
      "AI voiceovers",
      "Promotional videos",
      "Product demos",
      "Social media reels",
      "Brand story videos",
      "Product explainers",
      "AI video production",
      "Motion graphics",
      "Video editing & optimization",
    ],
    action: "request",
  },
  {
    no: "06",
    title: "Custom Software",
    desc: "Custom software built around your business — streamlining operations, boosting productivity, and helping you scale with confidence.",
    longDesc:
      "For startups transforming ambitious ideas into scalable software — and for established businesses looking to streamline operations and accelerate growth. Whether you need an MVP to validate your concept or a fully customized software solution built for your business, we combine strategic thinking, design and expert engineering to deliver software that performs.",
    slug: "software",
    cta: "Request service",
    href: "https://calendly.com/fanedesigns",
    capabilities: [
      "Software consulting",
      "Requirements analysis",
      "System architecture",
      "UI/UX design",
      "Custom software development",
      "API development & integration",
      "Database design",
      "Cloud deployment",
      "Software testing & QA",
      "System maintenance",
    ],
    action: "request",
  },
];

// Services overview page intro
export const SERVICES_INTRO = {
  eyebrow: "WHAT WE DO",
  title: "We fill the design & development gap, quickly.",
  body: "Through our collaborative approach to brand, web, product design, and development — we help our partners promote brand awareness, increase engagement, and raise more money.",
};

// "The Method" — our process
export const METHOD = [
  {
    no: "01",
    title: "Discover",
    desc: "Deep immersion into your world. We understand your business, vertical, and demographic before a single pixel is placed.",
  },
  {
    no: "02",
    title: "Define",
    desc: "Strategy-first. We create frameworks that ensure every visual decision is purposeful and aligned with your industry position.",
  },
  {
    no: "03",
    title: "Design",
    desc: "Considered, intentional craft. Every screen and asset is designed to move your audience toward a single, clear action.",
  },
  {
    no: "04",
    title: "Develop",
    desc: "We deliver scalable digital solutions that ensure every technical decision supports your business goals and long-term growth.",
  },
  {
    no: "05",
    title: "Deliver",
    desc: "Meticulous execution. From QA to handoff, every detail is polished to our quality standards before it reaches your audience.",
  },
];

export const INDUSTRIES = [
  { no: "01", name: "Ecommerce" },
  { no: "02", name: "Finance" },
  { no: "03", name: "Real Estate" },
  { no: "04", name: "Health" },
  { no: "05", name: "AI" },
  { no: "06", name: "Education" },
  { no: "07", name: "Tech" },
  { no: "08", name: "Entertainment" },
  { no: "09", name: "Crypto" },
];

export const INDUSTRY_TAGS = ["Startups", "Established", "Enterprise", "Local Businesses"];

export const TESTIMONIALS = [
  {
    quote:
      "SLOW CLAP!! Way to go! We were all impressed. This was the exact goal. Take a bow and pop something.",
    name: "Marian,",
    company: "Food Rush & Treats",
    avatar: "/assets/avatar-1.png",
  },
  {
    quote:
      "Highly talented and creative team. They delivered something unique while remaining open to feedback.",
    name: "Julius T,",
    company: "Healthco",
    avatar: "/assets/avatar-2.png",
  },
  {
    quote:
      "I would not hesitate to recommend Fane Designs & Development to anyone looking for a design & development company.",
    name: "Mo Lauren,",
    company: "Moderno Furnitures",
    avatar: "/assets/avatar-3.png",
  },
  {
    quote:
      "If you need to revamp your website or build a website, work with them. It's five out of five stars every day of the week.",
    name: "Daniel Ace,",
    company: "AcePlayHouse",
    avatar: "/assets/avatar-4.png",
  },
];

export const WORKS = [
  {
    title: "UI/UX Design for Moderno App — A Furniture Eco...",
    image: "/assets/work-1.png",
    href: "/works/moderno",
  },
  {
    title: "Product Design for Zenvoy App — A Smart Logist...",
    image: "/assets/work-2.png",
    href: "/works/zenvoy",
  },
  {
    title: "Marketing website for car parts... Laferay is a co...",
    image: "/assets/work-3.png",
    href: "/works/laferay",
  },
  {
    title: "Designing the visual Identity and product experie...",
    image: "/assets/work-4.png",
    href: "/works/fame-laundry",
  },
];

export type CaseSection =
  | { type: "text"; eyebrow: string; title: string; body: string }
  | { type: "image"; src: string }
  | { type: "split"; eyebrow: string; title: string; body: string; src: string }
  | { type: "splitText"; eyebrow: string; title: string; body: string };

export type CaseStudy = {
  tag: string;
  duration: string;
  role: string;
  industry: string;
  timeline: string;
  hero: string;
  sections: CaseSection[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  caseStudy?: CaseStudy;
};

// Full portfolio shown on /works
export const PROJECTS: Project[] = [
  {
    slug: "fame-laundry",
    name: "Fame Laundry",
    category: "Laundry & dry cleaning",
    image: "/assets/projects/fame-laundry.png",
    caseStudy: {
      tag: "Brand & Platform Design",
      duration: "6 Months",
      role: "Brand & Mobile",
      industry: "Laundry & Dry Cleaning",
      timeline: "2024",
      hero: "/assets/works/fame-laundry/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "BRANDING",
          title: "A Complete Branding",
          body: "We built Fame Laundry's brand from the ground up — logo, identity system, color palette, typography, and brand guidelines. Every element was designed to communicate boldness, independence, and a platform that redefines laundry care.",
        },
        { type: "image", src: "/assets/works/fame-laundry/branding.png" },
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "End-to-End Design",
          body: "Fame Laundry came to us for everything. We designed and delivered the complete brand identity, the mobile app, and all marketing collateral. Brand, mobile, and marketing — a unified design system across every platform.",
        },
        { type: "image", src: "/assets/works/fame-laundry/end-to-end.png" },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Mobile App",
          body: "We designed the native mobile app from scratch. The mobile app brings the full power of the platform into your hand, it delivers a great experience that feels premium and effortless.",
          src: "/assets/works/fame-laundry/mobile.png",
        },
        {
          type: "splitText",
          eyebrow: "COLLATERAL",
          title: "Marketing",
          body: "Beyond digital, we produced the full suite of marketing collateral — social templates, advertising assets, and presentation decks. Every piece reinforces the brand system, ensuring Fame Laundry looks and feels consistent everywhere it shows up.",
        },
      ],
    },
  },
  {
    slug: "laferay",
    name: "Laferay Website",
    category: "Automotive",
    image: "/assets/projects/laferay.png",
    caseStudy: {
      tag: "Website Design",
      duration: "1 Month",
      role: "Web Design",
      industry: "Automotive",
      timeline: "2024",
      hero: "/assets/works/laferay/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "Automotive Website",
          body: "Laferay needed a brand that inspires confidence in the used auto parts market. We crafted a complete brand identity, from logo design to digital presence — creating a seamless experience that makes finding reliable, affordable car parts simple and trustworthy.",
        },
        { type: "image", src: "/assets/works/laferay/website.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Customer-First Design",
          body: "We crafted a visual system centered on trust and usability. Bold colors, clean typography, and intuitive interfaces create a seamless experience, making it easy for customers to find and purchase the right used car parts with confidence.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The website and digital touchpoints were designed to simplify the parts-buying experience. Intuitive navigation, clear product information, and a seamless checkout flow make it easy for customers to find the right used car parts without unnecessary friction.",
          src: "/assets/works/laferay/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Quality at Every Touchpoint",
          body: "The brand now presents a stronger, more professional presence that reflects the quality and reliability of its used car parts. Every touchpoint, from product discovery to checkout, was designed to build trust and make purchasing the right parts effortless.",
        },
        { type: "image", src: "/assets/works/laferay/mockup.png" },
      ],
    },
  },
  {
    slug: "zenvoy",
    name: "Zenvoy",
    category: "Logistics",
    image: "/assets/projects/zenvoy.png",
    caseStudy: {
      tag: "Mobile App Design",
      duration: "2 Months",
      role: "Mobile Design",
      industry: "Logistics",
      timeline: "2026",
      hero: "/assets/works/zenvoy/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "End-to-End Design",
          body: "We designed and delivered a modern logistics platform that makes shipping and delivery fast, transparent, and reliable. Zenvoy needed a mobile experience that reflects speed and dependability at every stage — making it easy to schedule deliveries, track shipments in real time, and manage logistics from anywhere.",
        },
        { type: "image", src: "/assets/works/zenvoy/app.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Customer-First Design",
          body: "We built a visual identity focused on clarity and efficiency. Modern design elements and user-friendly interfaces create a seamless experience for scheduling deliveries, tracking shipments, and staying informed every step of the way.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The mobile app was designed to simplify the shipping and delivery experience. Intuitive navigation, real-time shipment tracking, and a streamlined booking flow make it easy for customers to schedule deliveries, monitor their packages, and manage shipments without unnecessary friction.",
          src: "/assets/works/zenvoy/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Trust at Every Touchpoint",
          body: "The brand now communicates professionalism and dependability through a seamless mobile experience. From scheduling deliveries to tracking shipments, every touchpoint was crafted to make logistics simple, transparent, and efficient.",
        },
        { type: "image", src: "/assets/works/zenvoy/showcase.png" },
      ],
    },
  },
  {
    slug: "moderno",
    name: "Moderno",
    category: "Ecommerce",
    image: "/assets/projects/moderno.png",
    caseStudy: {
      tag: "Landing Page & Mobile Design",
      duration: "3 Months",
      role: "Landing Page & Mobile",
      industry: "Ecommerce",
      timeline: "2024",
      hero: "/assets/works/moderno/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "DEEP DIVE",
          title: "Landing Page",
          body: "We designed a landing page that showcases Moderno's premium furniture collection through clean visuals, intuitive navigation, and a conversion-focused experience. Every element was crafted to make browsing, exploring, and purchasing effortless.",
        },
        { type: "image", src: "/assets/works/moderno/landing.png" },
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "End-to-End Design",
          body: "Moderno came to us for modern designs. We designed and delivered the landing page and mobile app design — a unified design system across every platform.",
        },
        { type: "image", src: "/assets/works/moderno/mobile-showcase.png" },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Mobile App",
          body: "We designed the mobile app from the ground up to make furniture shopping simple, inspiring, and effortless. From discovering curated collections to completing purchases, every interaction was crafted to deliver a premium shopping experience.",
          src: "/assets/works/moderno/mobile.png",
        },
      ],
    },
  },
  {
    slug: "healthco",
    name: "Healthco",
    category: "Healthcare",
    image: "/assets/projects/healthco.png",
    caseStudy: {
      tag: "Website Design",
      duration: "1 Month",
      role: "Web Design",
      industry: "Healthcare",
      timeline: "2024",
      hero: "/assets/works/healthco/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "Healthcare Website",
          body: "HealthCo needed a brand that communicates care, expertise, and modernity. We built a comprehensive identity from logo to digital presence — ensuring every patient touchpoint reflects the quality of care they provide.",
        },
        { type: "image", src: "/assets/works/healthco/website.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Patient-First Design",
          body: "We crafted a visual system centered on clarity and warmth. Soft color palettes, clean typography, and intuitive digital interfaces create a seamless experience from first impression to ongoing care.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The website and digital touchpoints were designed to make healthcare accessible. Clear navigation, empathetic copy, and a booking flow that respects the patient's time and emotional state.",
          src: "/assets/works/healthco/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Care at Every Touchpoint",
          body: "HealthCo delivers a patient experience that feels as compassionate as the medical professionals behind it. Every interaction is designed to build trust, improve accessibility, and make quality healthcare feel more personal.",
        },
        { type: "image", src: "/assets/works/healthco/showcase.png" },
      ],
    },
  },
  {
    slug: "ectinum",
    name: "Ectinum",
    category: "Web3",
    image: "/assets/projects/ectinum.png",
    caseStudy: {
      tag: "Website Design",
      duration: "1 Month",
      role: "Web Design",
      industry: "Web3",
      timeline: "2025",
      hero: "/assets/works/ectinum/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "Web3 Platform",
          body: "Ectinum needed a community platform designed to empower entrepreneurs with the tools they need to stay productive, grow their businesses, achieve goals and scale faster. A platform to simplify the path to success by combining cutting-edge software with human connection.",
        },
        { type: "image", src: "/assets/works/ectinum/platform.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Entrepreneur-Centered Design",
          body: "We crafted a visual system centered on clarity and productivity. A modern color palette, clean typography, and intuitive interfaces create a seamless experience that helps entrepreneurs stay focused, collaborate effortlessly, and grow their businesses.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The website and digital touchpoints were designed to make entrepreneurship more accessible. Clear navigation, straightforward messaging, and intuitive workflows help entrepreneurs find the right tools, connect with their community, and stay focused on growing their businesses.",
          src: "/assets/works/ectinum/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Productivity at Every Touchpoint",
          body: "Ectinum creates a digital experience that reflects the ambition and collaboration of the entrepreneurs it serves. Every touchpoint is designed to foster trust, simplify access to resources, and support business growth at every stage.",
        },
        { type: "image", src: "/assets/works/ectinum/showcase.png" },
      ],
    },
  },
  {
    slug: "food-rush",
    name: "Food Rush",
    category: "Food & beverage",
    image: "/assets/projects/food-rush.png",
    caseStudy: {
      tag: "Mobile App Design",
      duration: "1 Month",
      role: "Mobile Design",
      industry: "Food & Beverage",
      timeline: "2024",
      hero: "/assets/works/food-rush/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "End-to-End Design",
          body: "We built a visual identity centered on speed, freshness, and simplicity. Modern design elements, clean typography, and intuitive interfaces create a seamless experience that makes discovering great food, placing orders, and tracking deliveries fast, easy, and enjoyable.",
        },
        { type: "image", src: "/assets/works/food-rush/app.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Customer-First Design",
          body: "We crafted a visual system centered on freshness, speed, and convenience. Vibrant colors, clean typography, and intuitive digital interfaces create a seamless experience that makes discovering restaurants, ordering delicious meals, and enjoying fast delivery effortless.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The Food Rush mobile app was crafted to deliver a fast and delightful ordering experience. Clear navigation, intuitive interactions, and a seamless ordering flow ensure users can browse menus, complete purchases, and follow their deliveries effortlessly.",
          src: "/assets/works/food-rush/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Designed for Every Order",
          body: "Food Rush delivers a mobile food ordering experience that is fast, intuitive, and dependable. Every interaction is designed to build trust, simplify the ordering process, and make discovering restaurants, ordering meals, and enjoying fresh food feel effortless.",
        },
        { type: "image", src: "/assets/works/food-rush/showcase.png" },
      ],
    },
  },
  {
    slug: "bankie",
    name: "Bankie",
    category: "Fintech",
    image: "/assets/projects/bankie.png",
    caseStudy: {
      tag: "Mobile App Design",
      duration: "1 Month",
      role: "Mobile Design",
      industry: "Fintech",
      timeline: "2024",
      hero: "/assets/works/bankie/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "Mobile App Design",
          body: "Bankie needed a brand that communicates trust, security, and simplicity. We built a comprehensive identity, from logo to mobile experience — ensuring every user interaction reflects the confidence and reliability of modern financial management.",
        },
        { type: "image", src: "/assets/works/bankie/app.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "User-First Design",
          body: "We crafted a visual system centered on clarity, trust, and financial confidence. A modern color palette, clean typography, and intuitive digital interfaces create a seamless experience that helps users budget smarter, track expenses effortlessly, and stay in control of their money.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The Bankie mobile app was designed to make personal finance simple and accessible. Clear navigation, intuitive interactions, and streamlined user flows help users budget smarter, track expenses, and manage their money with confidence.",
          src: "/assets/works/bankie/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Designed for Every Money Moment",
          body: "Bankie delivers a mobile finance experience that is secure, intuitive, and empowering. Every interaction is designed to build trust, simplify budgeting and expense tracking, and help users take control of their financial future with confidence.",
        },
        { type: "image", src: "/assets/works/bankie/showcase.png" },
      ],
    },
  },
  {
    slug: "aceplayhouse",
    name: "AcePlayHouse",
    category: "Entertainment",
    image: "/assets/projects/aceplayhouse.png",
    caseStudy: {
      tag: "Website Design",
      duration: "1 Month",
      role: "Web Design",
      industry: "Entertainment",
      timeline: "2025",
      hero: "/assets/works/aceplayhouse/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "Website Design",
          body: "AcePlayHouse needed a brand that captures celebration, creativity, and unforgettable moments. We created a great website experience, that ensures every interaction reflects the joy, energy, and premium service behind every event.",
        },
        { type: "image", src: "/assets/works/aceplayhouse/website.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Event-First Design",
          body: "We crafted a visual system centered on fun and simplicity. Vibrant colors, clean typography, and intuitive digital interfaces create a seamless experience from the first visit to booking a photo booth for any celebration.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The website was designed to make booking a photo booth simple and stress-free. Clear navigation, engaging copy, and a streamlined booking process help customers find the perfect package and reserve it with ease.",
          src: "/assets/works/aceplayhouse/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Every Event, Every Smile",
          body: "AcePlayHouse delivers an event experience that feels as exciting and memorable as the celebrations it helps create. Every interaction is designed to build trust, simplify booking, and make capturing unforgettable moments effortless.",
        },
        { type: "image", src: "/assets/works/aceplayhouse/showcase.png" },
      ],
    },
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    category: "Creative services",
    image: "/assets/projects/portfolio.png",
    caseStudy: {
      tag: "Website Design",
      duration: "1 Month",
      role: "Web Design",
      industry: "Creative Services",
      timeline: "2024",
      hero: "/assets/works/portfolio/hero.png",
      sections: [
        {
          type: "text",
          eyebrow: "OVERVIEW",
          title: "Portfolio Website",
          body: "The portfolio needed a brand that reflects creativity, professionalism, and attention to detail. We designed a website with a seamless digital experience that showcases the designer's work, highlights their expertise, and makes connecting with potential clients and employers effortless.",
        },
        { type: "image", src: "/assets/works/portfolio/website.png" },
        {
          type: "splitText",
          eyebrow: "DEEP DIVE",
          title: "Experience-First Design",
          body: "We crafted a visual system centered on creativity, clarity, and professionalism. Modern visuals, clean typography, and intuitive interactions create a seamless browsing experience that allows visitors to discover projects, understand the design process, and connect effortlessly.",
        },
        {
          type: "split",
          eyebrow: "APPROACH",
          title: "Digital Presence",
          body: "The portfolio website was designed to highlight creativity without compromising usability. Clear navigation, thoughtful storytelling, and seamless user flows make it effortless for visitors to explore case studies, discover services, and connect with the designer.",
          src: "/assets/works/portfolio/digital.png",
        },
        {
          type: "splitText",
          eyebrow: "RESULT",
          title: "Purpose at Every Touchpoint",
          body: "The portfolio now communicates creativity, professionalism, and attention to detail through a seamless web experience. From discovering featured projects to exploring case studies and connecting with the designer, every touchpoint was crafted to make the experience intuitive, engaging, and memorable.",
        },
        { type: "image", src: "/assets/works/portfolio/showcase.png" },
      ],
    },
  },
];
