"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedDiv } from "@/components/animated-div";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const HeroSectionDemo = () => {
  // Generate array of banner paths from banner1 to banner7
  const logoImages = Array.from({ length: 7 }, (_, index) => ({
    src: `/images/banner/banner${index + 1}.jpg`,
    alt: `Banner ${index + 1}`,
    id: `banner${index + 1}`
  }));

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Swiper Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.hero-swiper-pagination',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          allowTouchMove={true}
          touchRatio={1}
          grabCursor={true}
          className="w-full h-full"
        >
          {logoImages.map((logo, index) => (
            <SwiperSlide key={logo.id}>
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
                {/* Additional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons with proper styling and positioning */}
        <button 
          className="hero-swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="hero-swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="hero-swiper-pagination absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex space-x-2"></div>
      </div>

      {/* Content Layer - Lower z-index to allow swipe interaction */}
      <div className="container relative z-5 text-center pointer-events-none">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            Get Quality OEM Parts <br /> at{" "}
            <span className="text-primary">50% Less Cost</span>
          </h1>
        </AnimatedDiv>
        
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-3xl mx-auto text-lg text-white/90 drop-shadow-md"
        >
          <p>
            Stop overpaying for new parts. Our rigorously inspected OEM used
            parts offer guaranteed compatibility, quality assurance, and massive
            savings with fast nationwide delivery.
          </p>
        </AnimatedDiv>
        
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-wrap justify-center gap-4 pointer-events-auto"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#find-part">Find Your Parts Now</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-white/30  hover:bg-white/10 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="#get-quote">Request a Quote</Link>
          </Button>
        </AnimatedDiv>
        
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 text-sm text-white/80 drop-shadow-md"
        >
          <p>
            ✓ Over 50,000+ satisfied customers • ✓ 90-day warranty • ✓ Free
            nationwide shipping on orders over $99
          </p>
        </AnimatedDiv>
      </div>

      {/* Custom CSS for pagination styling */}
      <style jsx>{`
        .hero-swiper-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .hero-swiper-pagination .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};

export default HeroSectionDemo;
