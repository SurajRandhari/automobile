"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  CheckCircle,
  Star,
  ShieldCheck,
  Truck,
  CreditCard,
  Search,
  Wrench,
  Users,
  Award,
  Tag,
  ShoppingCart,
  Phone,
  Mail,
  Clock10,
  ArrowUp,
  CircleCheckBig,
  Sun,
  Disc,
  Circle,
  Car,
  Component,
  Settings2,
  Wind,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatedDiv } from "@/components/animated-div";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  whyChooseUsFeatures,
  stats,
  premiumParts,
  qualityProcess,
  testimonials,
  trustFeatures,
  certifications,
  securityFeatures,
  footerNav,
  popularCategories,
  companyLogos,
} from "@/lib/data";
import { AnimatedCounter } from "@/components/animated-counter";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import HeroSectionDemo from "@/components/HeroSection";
import AutoPopupDialog from "@/components/AutoPopupDialog";
import FindPartSection from "@/components/FindPartSection";
import GetQuoteSection from "@/components/GetQuoteSection ";

const heroImage = PlaceHolderImages.find((p) => p.id === "hero-car");

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSectionDemo />
        <FindPartSection />
        <CompanyLogosSection />
        <WhyChooseUsSection />
        <StatsSection />
        <PremiumPartsSection />
        <PopularCategoriesSection />
        <QualityProcessSection />
        <TestimonialsSection />
        <TrustSection />
        <HappyCustomersSection />
        <GetQuoteSection />
        <CallToActionSection />
        <AutoPopupDialog /> {/* <= HERE */}
      </main>
      <Footer />
    </div>
  );
}


const CompanyLogosSection = () => {
  // Generate array of brand logos from logo1.png to logo13.png
  const brandLogos = Array.from({ length: 14 }, (_, index) => ({
    src: `/images/brands/logo${index + 1}.png`,
    alt: `Brand Logo ${index + 1}`,
    id: `brand-logo-${index + 1}`
  }));

  // Duplicate the logos array for seamless infinite scroll
  const allLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8">
          TRUSTED BY TOP BRANDS
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
                style={{ width: "160px", minWidth: "160px" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={48}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 max-w-full"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};


const WhyChooseUsSection = () => (
  <section
  id="why-us"
  className="relative py-16 md:py-24 bg-gradient-to-b from-background to-primary/40 overflow-hidden"
>
  {/* Curvy wave at bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
        className="fill-white"
      ></path>
    </svg>
  </div>

  <div className="container relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose Global Auto Connect?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          We've revolutionized the used auto parts industry with unmatched
          quality, service, and savings that traditional suppliers simply can't
          match.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseUsFeatures.map((feature, index) => (
          <AnimatedDiv
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full text-center transition-all hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </div>
    </div>
</section>

);

const StatsSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <AnimatedDiv
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center space-x-2">
              <stat.icon className="h-8 w-8 text-primary" />
              <p className="text-4xl font-bold font-headline text-foreground">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </p>
            </div>
            <p className="mt-2 text-muted-foreground">{stat.label}</p>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  </section>
);

const PremiumPartsSection = () => (
  <section
    id="parts"
    className="relative py-16 md:py-24  bg-gradient-to-b from-blue-50 to-primary/40 overflow-hidden"
  >
    {/* Curvy wave at top */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-16"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
          className="fill-white"
        ></path>
      </svg>
    </div>

    <div className="container relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Premium Quality Parts You Can Trust
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Every part in our inventory undergoes rigorous inspection and testing
          to ensure you receive only the highest quality OEM components for your
          vehicle.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {premiumParts.map((part, index) => {
          const partImage = PlaceHolderImages.find(
            (p) => p.id === part.imageId
          );
          return (
            <AnimatedDiv
              key={part.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden">
                    {partImage && (
                      <Image
                        src={partImage.imageUrl}
                        alt={part.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={partImage.imageHint}
                      />
                    )}
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-primary text-primary-foreground"
                    >
                      {part.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">
                    {part.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground">
                    {part.description}
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {part.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedDiv>
          );
        })}
      </div>
    </div>
  </section>
);


const PopularCategoriesSection = () => (
  <section
    id="categories"
    className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  >
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Popular Categories
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Browse our wide selection of OEM parts across all major categories.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {popularCategories.map((category, index) => {
          const catImage = PlaceHolderImages.find(
            (p) => p.id === category.imageId
          );
          return (
            <AnimatedDiv
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href="#find-part">
                <Card className="relative overflow-hidden group h-48 md:h-64 flex items-end justify-start p-4 text-white">
                  {catImage && (
                    <Image
                      src={catImage.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      data-ai-hint={catImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <category.icon className="h-8 w-8 mb-2 text-primary drop-shadow-lg" />
                    <h3 className="font-headline text-lg font-bold">
                      {category.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/80">
                      {category.count}
                    </p>
                  </div>
                </Card>
              </Link>
            </AnimatedDiv>
          );
        })}
      </div>
    </div>
  </section>
);

const QualityProcessSection = () => {
  return (
    <section
      id="process"
      className="py-16 md:py-24"
     style={{
     background: "#ffffff",
     backgroundImage: `
       radial-gradient(circle at top center, rgba(59, 130, 246, 0.5),transparent 70%)
     `,
   }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Uncompromising Quality Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We don&apos;t just sell parts; we deliver peace of mind. Our
            meticulous four-step quality assurance process guarantees
            excellence.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          />
          {qualityProcess.map((step, index) => (
            <AnimatedDiv
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 md:mb-20"
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-5/12 flex justify-center">
                  <Card className="p-6 shadow-lg bg-card/70 backdrop-blur-sm border-primary/10">
                    <CardHeader className="p-0 text-center md:text-left">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl flex-shrink-0">
                          {step.step}
                        </div>
                        <CardTitle className="font-headline text-xl">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-2/12 hidden md:flex justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
                </div>
                <div className="md:w-5/12" />
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section
    id="testimonials"
    className="py-16 md:py-24 bg-gradient-to-b from-primary/40 to-background"
  >
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Join thousands of satisfied customers who trust Global Auto Connect
          for their auto part needs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const avatarImage = PlaceHolderImages.find(
            (p) => p.id === testimonial.avatarId
          );
          return (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6 flex-grow">
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-0">
                  {avatarImage && (
                    <Avatar>
                      <AvatarImage
                        src={avatarImage.imageUrl}
                        alt={testimonial.author}
                        data-ai-hint={avatarImage.imageHint}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <CardTitle className="text-base font-semibold">
                      {testimonial.author}
                    </CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </AnimatedDiv>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <div className="inline-flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm p-4 shadow-md border-primary/10 border">
          <p className="font-bold text-lg">4.9 / 5</p>
          <div className="flex text-primary ml-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Based on 12,450+ verified reviews
        </p>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section
    id="trust"
//     className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5"
//   >
     className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-primary/40 overflow-hidden"
>
  {/* Curvy wave at bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg
      className="relative block w-full h-16"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1200 120"
    >
      <path
        d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
        className="fill-white"
      ></path>
    </svg>
  </div>
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Your Trust is Our Priority
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          We stand behind every part with industry-leading warranties,
          certifications, and guarantees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {trustFeatures.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-foreground">
                {feature.title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-12 bg-primary/10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-semibold text-xl mb-4">
            Industry Certifications
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-2 bg-secondary rounded-full">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Security &amp; Trust</h3>
          <div className="grid grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HappyCustomersSection = () => {
  const engineDetailImage = PlaceHolderImages.find(
    (p) => p.id === "engine-detail"
  );
  return (
    <section className="py-16 md:py-24 ">
      <div className="container">
        <div className="relative rounded-lg overflow-hidden p-8 md:p-12 text-center text-primary-foreground">
          {engineDetailImage && (
            <Image
              src={engineDetailImage.imageUrl}
              alt={engineDetailImage.description}
              fill
              className="object-cover"
              data-ai-hint={engineDetailImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-primary/90"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Over 50,000 Happy Customers Trust Global Auto Connect
            </h2>
            <p className="mx-auto mt-4 max-w-2xl md:text-lg">
              Join the thousands of mechanics, auto enthusiasts, and everyday
              drivers who rely on us for quality OEM parts, exceptional service,
              and unbeatable prices.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="#find-part">Find Parts</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className=" text-primary-foreground bg-primary-foreground/10"
              >
                <Link href="#get-quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const GetQuoteSection = () => {
//   const contactImage = PlaceHolderImages.find((p) => p.id === "contact-us");
//   return (
//     <section
//       id="get-quote"
//       className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-primary/40 overflow-hidden"
//     >
//       {/* Curvy wave at top */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//         <svg
//           className="relative block w-full h-16"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           viewBox="0 0 1200 120"
//         >
//           <path
//             d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
//             className="fill-white"
//           ></path>
//         </svg>
//       </div>

//       {/* Curvy wave at bottom */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg
//           className="relative block w-full h-16"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           viewBox="0 0 1200 120"
//         >
//           <path
//             d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
//             className="fill-white"
//           ></path>
//         </svg>
//       </div>

//       <div className="container relative z-10 py-4">
//         <div className="text-center mb-12">
//           <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
//             Get Your Quote Today
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
//             Ready to save big on quality OEM parts? Contact our experts for a
//             personalized quote and let us help you find exactly what you need.
//           </p>
//         </div>

//         <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0 shadow-2xl bg-card/50 backdrop-blur-sm border-primary/10">
//           <CardContent className="p-6 md:p-10 flex flex-col justify-center">
//             <h3 className="font-headline text-2xl font-bold mb-2">
//               Request a Quote
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               We typically respond within 2 business hours.
//             </p>
//             <form className="space-y-4">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <Input placeholder="Your Name *" required />
//                 <Input type="email" placeholder="Your Email *" required />
//               </div>
//               <Input type="tel" placeholder="Your Phone" />
//               <Textarea
//                 placeholder="Tell us about the part you need - include your vehicle year, make, model, and specific part requirements... *"
//                 required
//                 rows={5}
//               />
//               <Button type="submit" className="w-full" size="lg">
//                 Send Quote Request
//               </Button>
//             </form>
//           </CardContent>

//           <div className="relative min-h-[300px] lg:min-h-full">
//             {contactImage && (
//               <Image
//                 src="/images/contact.png"
//                 alt={contactImage.description}
//                 fill
//                 className="object-cover"
//                 data-ai-hint={contactImage.imageHint}
//               />
//             )}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 p-8 text-white">
//               <h3 className="font-headline text-2xl font-bold">
//                 Contact Information
//               </h3>
//               <div className="mt-4 space-y-4 text-sm">
//                 <div className="flex items-center">
//                   <Phone className="h-5 w-5 mr-3" />
//                   <span>+1 (979) 452-4280</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="h-5 w-5 mr-3" />
//                   <span>info@connectglobalauto.site</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Clock10 className="h-5 w-5 mr-3" />
//                   <span>Mon-Fri: 7AM-9PM EST</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// };


const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <AnimatedDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="bg-primary text-primary-foreground shadow-2xl">
            <CardContent className="p-10 text-center flex flex-col items-center">
              <h2 className="font-headline text-3xl font-bold">
                Need Parts Right Now?
              </h2>
              <p className="mt-2 max-w-2xl mx-auto">
                Call our experts for immediate assistance and same-day quotes.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="tel:+19794524280">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 (979) 452-4280
                </a>
              </Button>
            </CardContent>
          </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};
