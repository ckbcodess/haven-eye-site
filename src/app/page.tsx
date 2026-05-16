'use client';

import { useState, useEffect } from 'react';
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
import { ArrowRight, Star, MapPin, Eye, Home as HomeIcon, Target, Microscope, Focus, Calendar, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    icon: <Eye className="w-6 h-6 text-[#304aec]" />,
    title: 'Comprehensive Eye Examination',
    description: 'A thorough evaluation of your visual system and eye health, including tests for vision and detection of eye diseases.',
    price: 'Standard',
    duration: '30 min'
  },
  {
    icon: <Microscope className="w-6 h-6 text-[#304aec]" />,
    title: 'Optical Coherence Tomography (OCT)',
    description: 'Advanced imaging capturing cross-sectional pictures of the retina for early detection of glaucoma and ocular conditions.',
    price: 'Premium',
    duration: '15 min'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-[#304aec]" />,
    title: 'Eye Test at Home',
    description: 'Comprehensive examinations available in the comfort of your home for those with medical or mobility challenges.',
    price: 'Mobile',
    duration: '45 min'
  },
  {
    icon: <Target className="w-6 h-6 text-[#304aec]" />,
    title: 'Visual Field Test',
    description: 'Measures your entire scope of vision, including peripheral vision, essential for detecting glaucoma and neurological conditions.',
    price: 'Diagnostic',
    duration: '20 min'
  },
  {
    icon: <Focus className="w-6 h-6 text-[#304aec]" />,
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
    image: "/why_haven_specialists.png"
  },
  {
    title: "Same-day bookings",
    description: "Walk-in friendly, but book ahead and skip the wait entirely.",
    image: "/why_haven_bookings.png"
  },
  {
    title: "One-stop care",
    description: "Exam, prescription and eyewear fitting in a single visit.",
    image: "/why_haven_care.png"
  },
  {
    title: "Insurance accepted",
    description: "We work with all major providers, so you pay less out of pocket.",
    image: "/why_haven_insurance.png"
  }
];

const FAQS = [
  { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but booking ahead means no wait.' },
  { q: 'Which insurance do you accept?', a: 'We accept all major providers including NHIS and private insurers like Star Health.' },
  { q: 'How long does an exam take?', a: 'A standard comprehensive exam takes about 30 minutes.' }
];

export default function Home() {
  const [activeReasonIndex, setActiveReasonIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReasonIndex(prev => (prev + 1) % REASONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <section className="relative pt-[100px] pb-8 md:pt-[120px] md:pb-12 overflow-hidden">
        <div className="container mx-auto px-6 md:px-[96px]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-8 max-w-[615px]">
              <div className="space-y-8">
                <h1 className="text-[48px] md:text-[54px] font-heading font-medium leading-[1.2] tracking-[-2px] text-[#12171a]">
                  Expert eye care &<br />
                  <span className="text-[#12171a]">modern precision.</span>
                </h1>
                <p className="text-lg md:text-[19px] text-[#5e6468] leading-[1.6] max-w-[500px]">
                  A straightforward approach to vision. Comprehensive exams, designer eyewear, and specialized medical treatments.
                </p>
              </div>

              <div className="flex flex-wrap gap-[16px] pt-2">
                <Button asChild size="lg" className="rounded-full px-8 bg-[#304aec] hover:bg-[#304aec]/90 text-white text-[16px] font-medium h-[40px] shadow-sm">
                  <Link href="#book">Book appointment</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="rounded-full px-8 text-[16px] font-medium border-[#e4e4e7] h-[40px] bg-[#fefefe] hover:bg-slate-50 shadow-sm">
                  <Link href="tel:0557767766">Call Us Today</Link>
                </Button>
              </div>

              <div className="pt-8 border-t border-[#e8ecee] relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-[#e8ecee]" />
                <div className="flex items-center gap-[48px] pt-8">
                  <div className="flex items-start gap-[16px]">
                    <Star className="w-4 h-4 mt-1" style={{ fill: 'url(#star-gradient)', stroke: 'url(#star-gradient)' }} />
                    <div className="space-y-2">
                      <div className="font-semibold text-[18px] leading-none">4.9/5</div>
                      <p className="text-[13px] text-[#5e6468] leading-[20.8px]">Patient rating</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-[16px]">
                    <div className="mt-1">
                      <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-[18px]">
                        <path d="M5.33333 6.66667C5.7 6.66667 6.01389 6.53611 6.275 6.275C6.53611 6.01389 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.53611 4.65278 6.275 4.39167C6.01389 4.13056 5.7 4 5.33333 4C4.96667 4 4.65278 4.13056 4.39167 4.39167C4.13056 4.65278 4 4.96667 4 5.33333C4 5.7 4.13056 6.01389 4.39167 6.275C4.65278 6.53611 4.96667 6.66667 5.33333 6.66667ZM5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333Z" fill="url(#location-gradient-new)" />
                        <defs>
                          <linearGradient id="location-gradient-new" x1="5.33333" y1="0" x2="5.33333" y2="13.3333" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DF2E54" />
                            <stop offset="1" stopColor="#FF5C7F" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-[18px] leading-none">Ridge, Accra</div>
                      <p className="text-[13px] text-[#5e6468] leading-[20.8px]">Local clinic</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-[18px] leading-none">10+ years</div>
                    <p className="text-[13px] text-[#5e6468] leading-[20.8px]">Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="relative w-[582px] h-[582px]">
                <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-gradient-to-b from-[#00b2ff] via-[#00e1ff] to-[#00ffff]">
                  <Image
                    src="/hero-background.jpg"
                    alt="Modern Haven Eye Clinic Interior"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Haven Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-[96px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#00218e] font-medium text-[20px]">
                <div className="w-2 h-2 rounded-full bg-[#00218e]" />
                <span>Why Haven Eye</span>
              </div>
              <h2 className="text-4xl md:text-[48px] font-heading leading-[1.2] tracking-tight max-w-[627px]">
                Your vision is our primary focus.
              </h2>
            </div>
            <p className="text-lg md:text-[20px] text-[#5e6468] leading-relaxed max-w-[465px]">
              From routine eye exams to specialised treatments, every service is bookable online.
            </p>
          </div>

          <div className="bg-[#faf9f6] rounded-2xl p-8 md:p-12 flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden shadow-sm transition-opacity duration-500">
              <Image
                key={activeReasonIndex}
                src={REASONS[activeReasonIndex].image}
                alt={REASONS[activeReasonIndex].title}
                fill
                className="object-cover animate-in fade-in duration-500"
              />
            </div>
            <div className="space-y-8 w-full max-w-[500px]">
              {REASONS.map((reason, i) => {
                const isActive = i === activeReasonIndex;
                return (
                  <div
                    key={i}
                    className="relative pb-6 transition-all cursor-pointer group"
                    onClick={() => setActiveReasonIndex(i)}
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
                    {/* Progress Bar Track - Only show when active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#12171a]/10 overflow-hidden rounded-full">
                        {/* Progress Bar Fill */}
                        <div
                          key={activeReasonIndex}
                          className="h-full bg-[#12171a] animate-progress"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#fafdff]">
        <div className="container mx-auto px-6 md:px-[96px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#00218e] font-medium text-[20px]">
                <div className="w-2 h-2 rounded-full bg-[#00218e]" />
                <span>Services</span>
              </div>
              <h2 className="text-4xl md:text-[48px] font-heading leading-[1.2] tracking-tight">
                Our Eye Care Services
              </h2>
            </div>
            <p className="text-lg md:text-[20px] text-[#5e6468] leading-relaxed max-w-[460px]">
              Comprehensive eye care services tailored to meet all your vision and eye health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Card key={i} className="border-none shadow-none bg-white p-8 flex flex-col rounded-[16px] hover:bg-white transition-all hover:shadow-sm">
                <div className="space-y-6 flex-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#fafdff] rounded-lg">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl font-semibold text-[#2e2e38] tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-base text-[#71717a] leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50 mt-16">
                  <span className="text-sm font-medium text-[#2e2e38]">From {service.price}</span>
                  <span className="text-sm text-[#71717a]">{service.duration}</span>
                </div>
              </Card>
            ))}

            {/* View All Services Card */}
            <Card className="border-none shadow-none bg-[#304aec] p-8 flex flex-col justify-between rounded-[16px] text-white relative overflow-hidden group min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              <div className="relative space-y-4">
                <CardTitle className="text-xl font-semibold tracking-tight">Explore all services</CardTitle>
                <CardDescription className="text-base text-white/60 leading-relaxed">
                  Haven Eye is trusted for their quality care & easy experiences.
                </CardDescription>
              </div>
              <div className="relative self-end">
                <ArrowRight className="w-8 h-8 opacity-90" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Eyewear Section */}
      {/* Products Section */}
      <section className="py-20 bg-white" id="eyewear">
        <div className="container mx-auto px-6 md:px-[96px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#00218e] font-medium text-[20px]">
                <div className="w-2 h-2 rounded-full bg-[#00218e]" />
                <span>Our Products</span>
              </div>
              <h2 className="text-4xl md:text-[48px] font-heading leading-[1.2] tracking-tight">
                Modern styles, medical precision.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#f1f5f9] rounded-[12px] p-8 text-center space-y-4 shadow-sm">
              <div className="text-[36px]">👓</div>
              <h3 className="text-[16px] font-semibold tracking-tight">Prescription</h3>
              <p className="text-[14px] text-[#71717a]">200+ designer frames with precision lenses.</p>
              <Button variant="outline" className="rounded-full h-[36px] px-6 text-[14px] bg-[#fefefe] border-[#e4e4e7]">Browse catalog</Button>
            </div>
            <div className="bg-white border border-[#f1f5f9] rounded-[12px] p-8 text-center space-y-4 shadow-sm">
              <div className="text-[36px]">🕶️</div>
              <h3 className="text-[16px] font-semibold tracking-tight">Sunglasses</h3>
              <p className="text-[14px] text-[#71717a]">Premium UV protection and polarized styles.</p>
              <Button variant="outline" className="rounded-full h-[36px] px-6 text-[14px] bg-[#fefefe] border-[#e4e4e7]">Shop collection</Button>
            </div>
            <div className="bg-white border border-[#f1f5f9] rounded-[12px] p-8 text-center space-y-4 shadow-sm">
              <div className="text-[36px]">💧</div>
              <h3 className="text-[16px] font-semibold tracking-tight">Contacts</h3>
              <p className="text-[14px] text-[#71717a]">Daily and monthly lenses from top brands.</p>
              <Button variant="outline" className="rounded-full h-[36px] px-6 text-[14px] bg-[#fefefe] border-[#e4e4e7]">Order trial</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6 md:px-[96px] max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-heading leading-[1.2] tracking-tight">
              Frequently asked questions.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[#f1f5f9] border-b">
                <AccordionTrigger className="text-lg font-medium py-6 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#5e6468] pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-[96px]">
          <div className="bg-[#304aec] rounded-[40px] px-12 md:px-24 py-32 text-center text-white relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-[48px] md:text-[48px] font-heading font-medium leading-[1.2] tracking-tight">Ready to see clearly?</h2>
              <p className="text-lg md:text-[20px] opacity-90 max-w-2xl mx-auto leading-[1.4]">
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
