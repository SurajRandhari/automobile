import type { NavItem } from './types';
import { Cog, ShieldCheck, Truck, Clock, CreditCard, Search, Wrench, Users, Award, Tag, ShoppingCart, MessageSquare, Phone, Mail, Clock10, CheckCircle, CircleCheckBig, Car, Component, Settings2, Wind, Sun, Disc, Circle } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Parts', href: '#parts' },
  { label: 'Categories', href: '#categories' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#get-quote' },
];

export const companyLogos = [
    { name: "Bosch", imageId: "bosch-logo" },
    { name: "Denso", imageId: "denso-logo" },
    { name: "Magna", imageId: "magna-logo" },
    { name: "ZF", imageId: "zf-logo" },
    { name: "Aisin", imageId: "aisin-logo" },
    { name: "Valeo", imageId: "valeo-logo" },
];

export const whyChooseUsFeatures = [
    {
        icon: Wrench,
        title: "Rigorous OEM Inspections",
        description: "Every part undergoes comprehensive quality testing by certified technicians to ensure optimal performance and reliability.",
    },
    {
        icon: Award,
        title: "Warranty-Backed Parts",
        description: "90-day warranty on all parts with hassle-free returns. Your satisfaction and peace of mind are guaranteed.",
    },
    {
        icon: Truck,
        title: "Fast Nationwide Shipping",
        description: "Same-day processing with 7-10 working day delivery across the US. Free shipping on orders over $99.",
    },
    {
        icon: Users,
        title: "24/7 Expert Support",
        description: "Our automotive specialists are available around the clock to help you find the right part and answer any questions.",
    },
    {
        icon: CreditCard,
        title: "Secure Payments",
        description: "SSL-encrypted checkout with multiple payment options. Your financial information is always protected.",
    },
    {
        icon: CircleCheckBig,
        title: "Perfect Compatibility",
        description: "Search by VIN, make, model, and year for guaranteed fitment. No more guessing or compatibility issues.",
    },
    {
        icon: ShoppingCart,
        title: "Massive Inventory",
        description: "Access to over 1 million OEM parts from top manufacturers. If we don't have it, we'll find it for you.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Assurance",
        description: "Each part is cleaned, tested, and photographed before shipping. What you see is exactly what you get.",
    },
];

export const stats = [
    { value: 1000000, suffix: "+", label: "Parts Available", icon: Cog },
    { value: 50000, suffix: "+", label: "Happy Customers", icon: Users },
    { value: 98, suffix: "%", label: "Satisfaction Rate", icon: Award },
    { value: 24, suffix: "/7", label: "Expert Support", icon: MessageSquare },
];

export const premiumParts = [
    {
        title: "Premium Used Engines",
        description: "Thoroughly tested and certified OEM engines with verified performance history.",
        features: ["90-Day Warranty", "Performance Tested", "Low Mileage"],
        badge: "Most Popular",
        imageId: "engine-part",
    },
    {
        title: "Quality Transmissions",
        description: "Precision-engineered transmissions rebuilt to OEM specifications.",
        features: ["Rebuilt to OEM Spec", "Smooth Operation", "Road Tested"],
        badge: "Certified Quality",
        imageId: "transmission-part",
    },
    {
        title: "Engine Components",
        description: "Individual engine parts and components for precise repairs.",
        features: ["OEM Standards", "Perfect Fit", "Quality Inspected"],
        badge: "Best Value",
        imageId: "engine-components",
    },
];

export const qualityProcess = [
    {
        step: 1,
        title: "Sourcing & Selection",
        description: "We carefully source parts from reputable suppliers and select only the best components.",
    },
    {
        step: 2,
        title: "Inspection & Testing",
        description: "Every part undergoes comprehensive inspection by ASE-certified technicians.",
    },
    {
        step: 3,
        title: "Cleaning & Preparation",
        description: "Parts are professionally cleaned and prepared to meet our strict quality standards.",
    },
    {
        step: 4,
        title: "Final Quality Check",
        description: "A final quality assessment ensures each part meets OEM specifications before shipping.",
    },
];


export const popularParts = [
    "Engines", "Transmissions", "Headlights", "Bumpers", "Doors", "Mirrors", "Wheels", "Airbags", "ECU Modules", "Catalytic Converters"
];


export const testimonials = [
  {
    quote: "Saved over $800 on a transmission for my Honda Accord. The part arrived exactly as described and works perfectly. The 90-day warranty gave me peace of mind.",
    author: 'Sarah Johnson',
    location: 'Phoenix, AZ',
    avatarId: 'testimonial-avatar-1',
  },
  {
    quote: "Amazing customer service! They helped me find the exact engine part I needed using my VIN. Shipped fast and the quality exceeded my expectations.",
    author: 'Mike Rodriguez',
    location: 'Dallas, TX',
    avatarId: 'testimonial-avatar-2',
  },
  {
    quote: "As a mechanic, I've used many parts suppliers. Global Auto Connect's quality control is top-notch. My customers are always satisfied with the parts.",
    author: 'Jennifer Chen',
    location: 'Seattle, WA',
    avatarId: 'testimonial-avatar-3',
  },
  {
    quote: "The VIN lookup feature is incredible. Found my BMW part in seconds and it fit perfectly. Will definitely use them again for all my auto part needs.",
    author: 'David Thompson',
    location: 'Miami, FL',
    avatarId: 'testimonial-avatar-4',
  },
  {
    quote: "Excellent experience from start to finish. The part was cleaned, inspected, and packaged perfectly. Saved me thousands compared to the dealership.",
    author: 'Lisa Martinez',
    location: 'Denver, CO',
    avatarId: 'testimonial-avatar-5',
  },
  {
    quote: "Their 24/7 support team is fantastic. Called at midnight with a question and got immediate help. The expertise and friendliness is unmatched.",
    author: 'Robert Kim',
    location: 'Atlanta, GA',
    avatarId: 'testimonial-avatar-6',
  }
];


export const trustFeatures = [
    { icon: Award, title: "90-Day Warranty", description: "Every part comes with our comprehensive 90-day warranty covering defects and performance issues." },
    { icon: Tag, title: "Easy Returns", description: "Hassle-free 30-day return policy. If you're not satisfied, we'll make it right or provide a full refund." },
    { icon: Truck, title: "Free Shipping", description: "Free nationwide shipping on orders over $99. Most orders ship same day and arrive within 7-10 working days." },
    { icon: Users, title: "24/7 Support", description: "Our automotive experts are available around the clock to help with parts identification and installation guidance." }
];

export const certifications = [
    { name: "ISO 9001 Certified", icon: Award },
    { name: "ASE Certified Technicians", icon: Users },
    { name: "Better Business Bureau A+", icon: ShieldCheck },
    { name: "Automotive Recyclers Association", icon: Cog }
];

export const securityFeatures = [
    "SSL Encrypted Checkout", "Secure Payment Processing", "Verified Business", "Industry Certified", "Money Back Guarantee"
];

export const footerNav = [
    {
        title: "Quick Links",
        items: [
            { label: "Search Parts", href: "#find-part" },
            { label: "Request Quote", href: "#get-quote" },
            { label: "Back to Top", href: "#" }
        ]
    },
    {
        title: "Our Services",
        items: [
            { label: "OEM Used Auto Parts", href: "#parts" },
            { label: "VIN-Based Part Lookup", href: "#find-part" },
            { label: "Quality Inspections", href: "#process" },
            { label: "90-Day Warranty", href: "#trust" },
            { label: "Fast Shipping", href: "#why-us" },
            { label: "24/7 Expert Support", href: "#why-us" }
        ]
    },
    {
        title: "Our Promise",
        items: [
            { label: "✓ Quality Guaranteed", href: "#process" },
            { label: "✓ 90-Day Warranty", href: "#trust" },
            { label: "✓ Free Returns", href: "#trust" },
            { label: "✓ Secure Payments", href: "#why-us" },
            { label: "✓ Fast Shipping", href: "#why-us" },
            { label: "✓ Expert Support", href: "#why-us" }
        ]
    }
];

export const popularCategories = [
    { name: "Body Parts", count: "3,200+ parts", imageId: "body-parts", icon: Car },
    { name: "Engine Parts", count: "1,500+ parts", imageId: "engine-parts", icon: Cog },
    { name: "Suspension", count: "2,800+ parts", imageId: "suspension-parts", icon: Settings2 },
    { name: "Transmission", count: "1,200+ parts", imageId: "transmission-parts-cat", icon: Component },
    { name: "Lighting", count: "4,500+ parts", imageId: "lighting-parts", icon: Sun },
    { name: "Brakes", count: "2,100+ parts", imageId: "brake-parts", icon: Disc },
    { name: "Exhaust", count: "800+ parts", imageId: "exhaust-parts", icon: Wind },
    { name: "Wheels & Tires", count: "3,500+ parts", imageId: "wheel-parts", icon: Circle },
];
