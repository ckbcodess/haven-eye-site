'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, Star, Eye, Home as HomeIcon, Target, Microscope, Focus } from "lucide-react";

const SERVICES = [
  {
    icon: <Eye className="w-6 h-6 text-current" />,
    title: 'Comprehensive Eye Examination',
    description: 'A thorough evaluation of your visual system and eye health, including tests for vision and detection of eye diseases.',
    price: 'Standard',
    duration: '30 min'
  },
  {
    icon: <Microscope className="w-6 h-6 text-current" />,
    title: 'Optical Coherence Tomography (OCT)',
    description: 'Advanced imaging capturing cross-sectional pictures of the retina for early detection of glaucoma and ocular conditions.',
    price: 'Premium',
    duration: '15 min'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-current" />,
    title: 'Eye Test at Home',
    description: 'Comprehensive examinations available in the comfort of your home for those with medical or mobility challenges.',
    price: 'Mobile',
    duration: '45 min'
  },
  {
    icon: <Target className="w-6 h-6 text-current" />,
    title: 'Visual Field Test',
    description: 'Measures your entire scope of vision, including peripheral vision, essential for detecting glaucoma and neurological conditions.',
    price: 'Diagnostic',
    duration: '20 min'
  },
  {
    icon: <Focus className="w-6 h-6 text-current" />,
    title: 'Refraction',
    description: 'Precisely measuring how light bends as it enters your eye to determine the exact lens power needed for clearest vision.',
    price: 'Precision',
    duration: '15 min'
  }
];

const REASONS = [
  {
    title: "Qualified specialists",
    description: "Optometrists with 10+ years experience handle every appointment.",
    image: "/why_haven_specialists.jpeg"
  },
  {
    title: "Same-day bookings",
    description: "Walk-in friendly, but book ahead and skip the wait entirely.",
    image: "/why_haven_bookings.png"
  },
  {
    title: "One-stop care",
    description: "Exam, prescription and eyewear fitting in a single visit.",
    image: "/why_haven_care.jpeg"
  },
  {
    title: "Insurance accepted",
    description: "We work with all major providers, so you pay less out of pocket.",
    image: "/why_haven_insurance.jpeg"
  }
];

const FAQS = [
  { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but booking ahead means no wait.' },
  { q: 'Which insurance do you accept?', a: 'We accept all major providers including NHIS and private insurers like Star Health.' },
  { q: 'How long does an exam take?', a: 'A standard comprehensive exam takes about 30 minutes.' }
];

const PRODUCTS_DATA = {
  eyewear: [
    {
      id: 'prescription',
      title: 'Prescription',
      description: '200+ designer frames with precision lenses.',
      image: '/product_prescription_v2.png',
      link: '#prescription',
      cta: 'View All Glasses'
    },
    {
      id: 'sunglasses',
      title: 'Sunglasses',
      description: 'Premium UV protection and polarized styles.',
      image: '/product_sunglasses_v2.png',
      link: '#sunglasses',
      cta: 'View All Sunglasses'
    },
    {
      id: 'contacts',
      title: 'Contacts',
      description: 'Daily and monthly lenses from top brands.',
      image: '/product_contacts_v2.png',
      link: '#contacts',
      cta: 'View All Contacts'
    }
  ],
  hearing: [
    {
      id: 'invisible',
      title: 'Invisible-in-canal',
      description: 'Ultra-discreet hearing aids that sit deep in the ear.',
      image: '/product_hearing_aids_v2.png',
      link: '#invisible',
      cta: 'Explore Models'
    },
    {
      id: 'behind-ear',
      title: 'Behind-the-ear',
      description: 'Powerful amplification with modern Bluetooth features.',
      image: '/product_hearing_aids_v2.png',
      link: '#behind-ear',
      cta: 'View Styles'
    },
    {
      id: 'rechargeable',
      title: 'Rechargeable',
      description: 'Never change a battery again with portable charging cases.',
      image: '/product_hearing_aids_v2.png',
      link: '#rechargeable',
      cta: 'Shop Now'
    }
  ]
};

const HERO_IMAGES = [
  "/hero-background.jpg",
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
  "/hero4.jpeg",
  "/hero5-new.jpeg"
];

export default function Home() {
  const [productCategory, setProductCategory] = useState<'eyewear' | 'hearing'>('eyewear');
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImageIndex]);

  return (
    <main className="min-h-screen bg-white font-sans text-[#12171a]">
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s linear forwards;
        }
        .animate-progress-hero {
          animation: progress 3s linear forwards;
        }
      `}</style>
      <Navbar />

      {/* Gradient Definition for Star */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC800" />
            <stop offset="100%" stopColor="#FF9000" />
          </linearGradient>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="relative pt-[160px] pb-8 md:pt-[180px] md:pb-12 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-[96px]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            <div className="w-full max-w-[615px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[34px] sm:text-[40px] md:text-[54px] font-heading font-medium leading-[1.15] md:leading-[1.2] tracking-[-1px] md:tracking-[-2px] text-[#12171a] mb-4 md:mb-6 text-center lg:text-left">
                Expert eye care &<br />
                <span className="text-[#12171a]">modern precision.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-[19px] text-[#5e6468] leading-[1.6] max-w-[500px] mb-6 md:mb-8 text-center lg:text-left mx-auto lg:mx-0">
                A straightforward approach to vision. Comprehensive exams, designer eyewear, and specialized medical treatments.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-[12px] w-full mb-8 md:mb-12">
                <Button asChild size="lg" className="rounded-full w-full sm:w-auto px-8 bg-[#304aec] hover:bg-[#304aec]/90 text-white text-[16px] font-medium h-[48px] shadow-sm">
                  <Link href="#book">Book appointment</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="rounded-full w-full sm:w-auto px-8 text-[16px] font-medium border-[#e4e4e7] h-[48px] bg-[#fefefe] shadow-sm">
                  <Link href="tel:0557767766">Call Us Today</Link>
                </Button>
              </div>

              <div className="pt-8 relative w-full">
                <div 
                  className="absolute top-0 left-0 right-0 h-px" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, #e8ecee 50%, transparent 50%)`,
                    backgroundSize: '24px 1px',
                    backgroundRepeat: 'repeat-x'
                  }} 
                />
                <div className="flex flex-wrap justify-between lg:justify-start items-center gap-x-2 gap-y-4 sm:gap-6 md:gap-[48px] pt-6 md:pt-8 w-full text-left">
                  <div className="flex items-start gap-3 md:gap-[16px] shrink-0">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 mt-1" style={{ fill: 'url(#star-gradient)', stroke: 'url(#star-gradient)' }} />
                    <div className="space-y-1 md:space-y-2">
                      <div className="font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-none">4.9/5</div>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px] text-[#5e6468] leading-[1.2] md:leading-[20.8px]">Patient rating</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-[16px] shrink-0">
                    <div className="mt-1">
                      <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-[14px] md:w-3.5 md:h-[18px]">
                        <path d="M5.33333 6.66667C5.7 6.66667 6.01389 6.53611 6.275 6.275C6.53611 6.01389 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.53611 4.65278 6.275 4.39167C6.01389 4.13056 5.7 4 5.33333 4C4.96667 4 4.65278 4.13056 4.39167 4.39167C4.13056 4.65278 4 4.96667 4 5.33333C4 5.7 4.13056 6.01389 4.39167 6.275C4.65278 6.53611 4.96667 6.66667 5.33333 6.66667ZM5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333Z" fill="url(#location-gradient-new)" />
                        <defs>
                          <linearGradient id="location-gradient-new" x1="5.33333" y1="0" x2="5.33333" y2="13.3333" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DF2E54" />
                            <stop offset="1" stopColor="#FF5C7F" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <div className="font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-none">Ridge, Accra</div>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px] text-[#5e6468] leading-[1.2] md:leading-[20.8px]">Local clinic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 w-full">
              <div className="relative w-full aspect-square max-w-[582px]">
                <div className="relative w-full h-full rounded-[24px] lg:rounded-[36px] overflow-hidden bg-slate-50">
                  {HERO_IMAGES.map((src, idx) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Haven Eye Clinic Interior ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                      className={cn(
                        "object-cover transition-opacity duration-1000 ease-in-out",
                        idx === heroImageIndex ? "opacity-100" : "opacity-0"
                      )}
                      priority={idx === 0}
                    />
                  ))}
                </div>
                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-10 px-4">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroImageIndex(i)}
                      className="group relative h-[5px] w-10 rounded-full bg-white/20 overflow-hidden backdrop-blur-[2px] transition-all duration-300 hover:bg-white/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      <div
                        className={cn(
                          "h-full bg-white rounded-full transition-all duration-300",
                          heroImageIndex === i ? "w-full animate-progress-hero" : "w-0"
                        )}
                        key={heroImageIndex === i ? `active-${i}` : `inactive-${i}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyHaven />

      {/* Services Section */}
      <section className="py-20 bg-[#f9f9f6]">
        <div className="container mx-auto px-6 md:px-[96px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
            <div className="space-y-4 md:space-y-6 text-left">
              <div className="flex items-center justify-start gap-3 text-[#00218e] font-medium text-[16px] md:text-[20px]">
                <div className="w-2 h-2 rounded-full bg-[#00218e]" />
                <span>Our Services</span>
              </div>
              <h2 className="text-[28px] md:text-[48px] font-heading leading-[1.2] tracking-tight">
                Clinical excellence,<br className="hidden md:block" /> personalized for you.
              </h2>
            </div>
            <p className="text-base md:text-[20px] text-[#5e6468] leading-relaxed max-w-[460px] text-left">
              Comprehensive eye care services tailored to meet all your vision and eye health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Card key={i} className="border border-transparent shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] bg-white p-6 md:p-8 flex flex-col rounded-[16px] hover:border-[#304aec]/15 hover:shadow-[0_8px_30px_-4px_rgba(48,74,236,0.08)] transition-all duration-400 ease-out group/service cursor-pointer">
                <div className="space-y-6 flex-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#f9f9f6] text-[#304aec] rounded-lg transition-colors duration-400 ease-out group-hover/service:bg-[#304aec] group-hover/service:text-white">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-lg md:text-xl font-semibold text-[#2e2e38] tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-[14px] md:text-base text-[#71717a] leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50 mt-16 transition-colors duration-400 group-hover/service:border-[#304aec]/10">
                  <span className="text-sm font-medium text-[#2e2e38]">From {service.price}</span>
                  <span className="text-sm text-[#71717a]">{service.duration}</span>
                </div>
              </Card>
            ))}

            {/* View All Services Card */}
            <Card className="border border-transparent shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] bg-[#304aec] p-6 md:p-8 flex flex-col justify-between rounded-[16px] text-white relative overflow-hidden group/explore cursor-pointer hover:shadow-[0_8px_30px_-4px_rgba(48,74,236,0.25)] transition-all duration-400 ease-out min-h-[250px] md:min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 transition-opacity duration-400 group-hover/explore:opacity-80" />
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover/explore:bg-white/10 transition-colors duration-500 ease-out" />
              <div className="relative space-y-4">
                <CardTitle className="text-xl font-semibold tracking-tight text-white">Explore all services</CardTitle>
                <CardDescription className="text-base text-white/70 leading-relaxed">
                  Haven Eye is trusted for their quality care & easy experiences.
                </CardDescription>
              </div>
              <div className="relative self-end">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover/explore:bg-white group-hover/explore:text-[#304aec] transition-all duration-400 ease-out">
                  <ArrowRight className="w-5 h-5 opacity-90 group-hover/explore:opacity-100 group-hover/explore:translate-x-0.5 transition-all duration-400 ease-out" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ProductsSection category={productCategory} setCategory={setProductCategory} />

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="w-full px-4 md:px-[96px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-heading leading-[1.2] tracking-tight">
              Frequently asked questions.
            </h2>
          </div>
          <div className="max-w-[600px] mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#f1f5f9] border-b">
                  <AccordionTrigger className="text-lg font-medium py-5 hover:no-underline text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#5e6468] pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-[96px]">
          <div className="bg-[#304aec] rounded-[40px] px-12 md:px-24 py-32 text-center text-white relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-[26px] sm:text-[32px] md:text-[48px] font-heading font-medium leading-[1.2] tracking-tight whitespace-nowrap">Ready to see clearly?</h2>
              <p className="text-base md:text-[20px] opacity-90 max-w-2xl mx-auto leading-[1.4]">
                Book your appointment online in less than 2 minutes. We&apos;re open Mon–Sat at Ridge.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-10 bg-white text-[#304aec] hover:bg-white/90 text-[18px] font-medium h-[40px] group shadow-sm">
                  <Link href="#book" className="flex items-center gap-2">
                    Book appointment now
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild size="lg" className="rounded-full px-10 text-white hover:bg-white/10 text-[18px] font-medium h-[40px]">
                  <Link href="tel:0557767766">Call us instead</Link>
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-48 -left-48 w-[384px] h-[384px] bg-white/5 rounded-full" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function WhyHaven() {
  const [activeReasonIndex, setActiveReasonIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate scroll progress through the pinned container on desktop
      const totalRange = rect.height - window.innerHeight;
      const current = -rect.top;
      const progress = totalRange > 0 ? Math.max(0, Math.min(1, current / totalRange)) : 0;
      
      setScrollProgress(progress);
      
      const numReasons = REASONS.length;
      const rawIndex = Math.floor(progress * numReasons);
      const newIndex = Math.max(0, Math.min(numReasons - 1, rawIndex));
      setActiveReasonIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReasonClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const totalRange = rect.height - window.innerHeight;
    
    // Position scroll progress in the middle of target reason's slot
    const targetProgress = (index + 0.5) / REASONS.length;
    const targetScroll = sectionTop + targetProgress * totalRange;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const width = container.offsetWidth;
    const newIndex = Math.round(scrollPosition / width);
    if (newIndex !== activeReasonIndex && newIndex < REASONS.length) {
      setActiveReasonIndex(newIndex);
    }
  };

  const getProgressForIndex = (index: number) => {
    const numReasons = REASONS.length;
    const range = 1 / numReasons;
    const start = index * range;
    const end = (index + 1) * range;
    
    if (scrollProgress <= start) return 0;
    if (scrollProgress >= end) return 100;
    
    return ((scrollProgress - start) / range) * 100;
  };

  return (
    <section ref={containerRef} className="relative py-20 lg:py-0 lg:h-[300vh] bg-white">
      {/* Top Spacer for Desktop Visual Padding */}
      <div className="h-20 hidden lg:block" />

      {/* Desktop Sticky View */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full flex-col justify-center pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 md:px-[96px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#00218e] font-medium text-[16px] md:text-[20px]">
                <div className="w-2 h-2 rounded-full bg-[#00218e]" />
                <span>Why Haven Eye</span>
              </div>
              <h2 className="text-[28px] sm:text-3xl md:text-[48px] font-heading leading-[1.1] md:leading-[1.2] tracking-tight max-w-[627px]">
                Your vision is our primary focus.
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-[20px] text-[#5e6468] leading-relaxed max-w-[465px]">
              From routine eye exams to specialised treatments, every service is bookable online.
            </p>
          </div>

          {/* Core Interactive Block */}
          <div className="bg-[#faf9f6] rounded-2xl p-12 grid grid-cols-[1.1fr_0.9fr] gap-20 items-center min-h-[480px]">
            {/* Left Column: Stacked Image Crossfade */}
            <div className="relative w-full aspect-square max-w-[420px] rounded-xl overflow-hidden shadow-sm mx-auto">
              {REASONS.map((reason, i) => (
                <Image
                  key={i}
                  src={reason.image}
                  alt={reason.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                  className={cn(
                    "object-cover transition-opacity duration-500 ease-in-out absolute inset-0",
                    activeReasonIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                />
              ))}
            </div>

            {/* Right Column: Clickable reasons list with smooth indicator bars */}
            <div className="space-y-8 w-full max-w-[500px]">
              {REASONS.map((reason, i) => {
                const isActive = i === activeReasonIndex;
                return (
                  <div
                    key={i}
                    className="relative pb-6 transition-all cursor-pointer group"
                    onClick={() => handleReasonClick(i)}
                  >
                    <div className={cn(
                      "space-y-2 transition-opacity duration-500",
                      isActive ? "opacity-100" : "opacity-40 group-hover:opacity-70"
                    )}>
                      <h4 className="text-[20px] font-medium text-[#12171a]">{reason.title}</h4>
                      <p className="text-[#5e6468] text-[15px] leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                    {/* Persistent scroll progress line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#12171a]/10 overflow-hidden rounded-full">
                      <div
                        className="h-full bg-[#12171a] transition-all duration-100 ease-out"
                        style={{ width: `${getProgressForIndex(i)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer for Desktop Visual Padding */}
      <div className="h-20 hidden lg:block" />

      {/* Mobile View (Standard vertical scroll with touch-friendly carousel) */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#00218e] font-medium text-[16px]">
                <div className="w-2 h-2 rounded-full bg-[#00218e]" />
                <span>Why Haven Eye</span>
              </div>
              <h2 className="text-[28px] sm:text-3xl font-heading leading-[1.1] tracking-tight">
                Your vision is our primary focus.
              </h2>
            </div>
            <p className="text-base text-[#5e6468] leading-relaxed">
              From routine eye exams to specialised treatments, every service is bookable online.
            </p>
          </div>

          <div className="-mx-4">
            <div 
              ref={scrollRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-4 pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {REASONS.map((reason, i) => (
                <div 
                  key={i} 
                  className="min-w-[85vw] snap-center bg-[#faf9f6] rounded-2xl p-6 flex flex-col gap-6"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 50vw"
                      quality={80}
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[18px] font-medium text-[#12171a]">{reason.title}</h4>
                    <p className="text-[#5e6468] text-[14px] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {REASONS.map((_, i) => (
                <div 
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeReasonIndex === i ? "w-6 bg-[#304aec]" : "w-1.5 bg-[#e2e8f0]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ category, setCategory }: { category: 'eyewear' | 'hearing', setCategory: (c: 'eyewear' | 'hearing') => void }) {
  return (
    <section className="py-20 bg-white" id="eyewear">
      <div className="container mx-auto px-4 md:px-[96px]">
        <div className="mb-12 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-[12px] text-[#00218e] font-medium text-[16px] md:text-[20px]">
              <div className="w-2 h-2 rounded-full bg-[#00218e]" />
              <span>Our Products</span>
            </div>
            <h2 className="text-[28px] md:text-[42px] font-heading leading-[1.2] tracking-[-1px] max-w-[800px] text-[#12171a]">
              A look at our best selling products
            </h2>
          </div>
          
          <div className="flex justify-start">
            <div className="bg-[#f9f9f6] flex gap-2 p-1.5 rounded-full items-center">
              <button 
                onClick={() => setCategory('eyewear')}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[16px] font-semibold leading-none tracking-tight transition-all",
                  category === 'eyewear' ? "bg-[#1e1e1e] text-white" : "text-[#12171a] opacity-30 hover:text-[#304aec] hover:opacity-100"
                )}
              >
                Eyewear
              </button>
              <button 
                onClick={() => setCategory('hearing')}
                className={cn(
                  "px-6 py-2.5 rounded-full text-[16px] font-semibold leading-none tracking-tight transition-all",
                  category === 'hearing' ? "bg-[#1e1e1e] text-white" : "text-[#12171a] opacity-30 hover:text-[#304aec] hover:opacity-100"
                )}
              >
                Hearing Aids
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS_DATA[category].map((product) => (
            <Link key={product.id} href={product.link} className="group/card block h-full">
              <div className="bg-white border border-[#f1f5f9] rounded-[12px] p-6 md:p-[33px] flex flex-col items-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-left h-full transition-all duration-300 hover:shadow-md hover:border-[#304aec]/10">
                <div className="w-full relative h-[167px] mb-4 transition-transform duration-500 group-hover/card:scale-105">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                    loading="lazy"
                    className="object-contain mix-blend-multiply" 
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#2e2e38] tracking-[-0.4px] leading-tight">{product.title}</h3>
                  <p className="text-[14px] text-[#71717a] leading-relaxed">{product.description}</p>
                </div>
                <div className="h-auto p-0 text-[#2e2e38] flex items-center gap-1.5 font-semibold text-[15px] mt-auto group-hover/card:text-[#304aec] transition-colors">
                  {product.cta} <ChevronRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="h-[44px] px-8 rounded-full bg-[#fefefe] border-[#e4e4e7] text-[15px] font-medium text-[#2e2e38] shadow-sm transition-all">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
