'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { X, ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion as MobileAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SERVICE_CATEGORIES = [
  {
    title: 'Primary Vision Care',
    services: [
      { name: 'Comprehensive Eye Examination', href: '#services' },
      { name: 'Refraction', href: '#services' },
      { name: 'Paediatric Eye Care', href: '#services' },
    ]
  },
  {
    title: 'Advanced Diagnostics',
    services: [
      { name: 'OCT (Retinal Imaging)', href: '#services' },
      { name: 'Visual Field Test', href: '#services' },
      { name: 'Pachymetry', href: '#services' },
    ]
  },
  {
    title: 'Clinical & Surgical',
    services: [
      { name: 'Pre-operative Assessment', href: '#services' },
      { name: 'Glaucoma Management', href: '#services' },
      { name: 'Treatment & Consultation', href: '#services' },
    ]
  },
  {
    title: 'Specialized Access',
    services: [
      { name: 'Eye Test at Home', href: '#services' },
      { name: 'Corporate & Insurance', href: '#services' },
    ]
  }
];

export default function Navbar() {
  const [promoVisible, setPromoVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      {promoVisible && (
        <div className="bg-[#12171a] text-white py-2 px-10 relative flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 overflow-hidden min-h-[40px]">
          <p className="text-[12px] sm:text-[13px] tracking-[0.26px] text-center">
            🎁 <strong>Free eye test</strong> when you book before May 31
          </p>
          <Link href="#book" className="text-[12px] sm:text-[13px] underline underline-offset-4 hover:text-white/80 transition-colors shrink-0">
            Book now →
          </Link>
          <button 
            onClick={() => setPromoVisible(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Close promo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
        <header className={cn(
        "transition-all duration-300",
        scrolled ? "border-b border-[#e8ecee]/50" : "border-b border-transparent"
      )}>
        <div className="container mx-auto px-4 md:px-[96px]">
          <div className="grid grid-cols-2 md:grid-cols-[200px_1fr_auto] lg:grid-cols-[250px_1fr_250px] h-[84px] items-center gap-4">
            {/* Logo Column */}
            <div className="flex justify-start">
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <Image 
                  src="/logo.svg" 
                  alt="Haven Eye Logo" 
                  width={34} 
                  height={34} 
                  priority
                />
                <span className="text-xl font-semibold tracking-tight text-[#12171a]">Haven Eye</span>
              </Link>
            </div>

            {/* Navigation Column - Centered */}
            <nav className="hidden md:flex items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-6 p-8 md:w-[700px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-4 bg-white">
                        {SERVICE_CATEGORIES.map((cat, i) => (
                          <div key={i} className="space-y-4">
                            <h4 className="text-[12px] font-bold text-[#5e6468] tracking-[1.5px] uppercase">
                              {cat.title}
                            </h4>
                            <ul className="space-y-3">
                              {cat.services.map((svc, j) => (
                                <li key={j}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={svc.href}
                                      className="text-[14px] text-[#12171a] hover:text-[#304aec] transition-colors block"
                                    >
                                      {svc.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#eyewear" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]")}>
                      Eyewear
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#faq" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]")}>
                      FAQ
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]")}>
                      Contact Us
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Actions Column - Right Aligned */}
            <div className="flex items-center justify-end gap-4 shrink-0">
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" asChild className="text-[15px] font-medium text-[#12171a]">
                  <Link href="#location">Find a store</Link>
                </Button>
                <Button 
                  asChild 
                  variant={scrolled ? "default" : "ghost"}
                  className={cn(
                    "rounded-full px-6 h-[40px] transition-all duration-300",
                    scrolled 
                      ? "bg-[#304aec] hover:bg-[#304aec]/90 text-white shadow-sm" 
                      : "text-[#12171a] font-medium"
                  )}
                >
                  <Link href="#book">Book appointment</Link>
                </Button>
              </div>

              {/* Mobile CTA (Scroll triggered) */}
              <div className={cn(
                "md:hidden transition-all duration-300 transform",
                scrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
              )}>
                <Button 
                  asChild 
                  size="sm" 
                  className="rounded-full bg-[#304aec] hover:bg-[#304aec]/90 text-white text-[13px] font-medium h-[32px] px-4 shadow-sm"
                >
                  <Link href="#book">Book appointment</Link>
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2" aria-label="Open menu">
                    <div className="w-6 h-0.5 bg-[#12171a] mb-1.5" />
                    <div className="w-6 h-0.5 bg-[#12171a] mb-1.5" />
                    <div className="w-6 h-0.5 bg-[#12171a]" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-none p-0 border-none bg-white hide-close">
                  <div className="flex flex-col h-full">
                    <SheetHeader className="p-6 border-b border-[#e8ecee]/50 flex-row items-center justify-end space-y-0 relative">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <SheetClose className="p-2 -mr-2">
                        <X className="w-6 h-6 text-[#12171a]" />
                      </SheetClose>
                    </SheetHeader>
                    
                    <div className="flex-1 overflow-y-auto p-6">
                      <nav className="flex flex-col gap-2">
                        <MobileAccordion type="single" collapsible className="w-full">
                          <AccordionItem value="services" className="border-none">
                            <AccordionTrigger className="text-[20px] font-semibold hover:no-underline py-4">
                              Services
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid gap-8 pt-4 pb-4">
                                {SERVICE_CATEGORIES.map((cat, i) => (
                                  <div key={i} className="space-y-4">
                                    <h4 className="text-[12px] font-bold text-[#5e6468] tracking-[1.5px] uppercase">
                                      {cat.title}
                                    </h4>
                                    <ul className="space-y-4 pl-2">
                                      {cat.services.map((svc, j) => (
                                        <li key={j}>
                                          <Link
                                            href={svc.href}
                                            className="text-[16px] text-[#12171a] font-medium"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {svc.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </MobileAccordion>
                        
                        <Link 
                          href="#eyewear" 
                          className="text-[20px] font-semibold py-4 border-b border-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Eyewear
                        </Link>
                        <Link 
                          href="#faq" 
                          className="text-[20px] font-semibold py-4 border-b border-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          FAQ
                        </Link>
                        <Link 
                          href="#contact" 
                          className="text-[20px] font-semibold py-4 border-b border-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </nav>
                    </div>

                    <div className="p-6 border-t border-[#e8ecee]/50 flex flex-col gap-4 bg-slate-50/50">
                      <Button asChild size="lg" className="rounded-full w-full bg-[#304aec] text-white h-[56px] text-lg font-medium shadow-md">
                        <Link href="#book" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
                      </Button>
                      <Button variant="outline" asChild size="lg" className="rounded-full w-full h-[56px] text-lg font-medium border-[#e4e4e7] bg-white">
                        <Link href="tel:0557767766">Call Us Now</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
