'use client';

import { useState, useEffect, useRef } from 'react';
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
import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
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

function GiftBoxAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let anim: any;
    
    import('lottie-web').then((lottieModule) => {
      const lottie = lottieModule.default;
      if (!containerRef.current) return;
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/giftbox.json',
      });
    });

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  return <span ref={containerRef} className="w-5 h-5 inline-block shrink-0 align-middle" />;
}

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
      scrolled ? "bg-white/60 backdrop-blur-xl shadow-sm" : "bg-transparent"
    )}>
      {promoVisible && (
        <div className="bg-[#12171a] text-white py-2 px-10 relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 overflow-hidden min-h-[40px]">
          <div className="text-[12px] sm:text-[13px] tracking-[0.26px] text-center flex items-center justify-center gap-1.5">
            <GiftBoxAnimation />
            <span>
              <strong>Free eye test</strong> when you book before May 31
            </span>
          </div>
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
                <span className="text-xl font-semibold tracking-tight text-[#12171a] hidden min-[400px]:block">Haven Eye</span>
              </Link>
            </div>

            {/* Navigation Column - Centered */}
            <nav className="hidden md:flex items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex w-[600px] p-6 md:w-[700px] lg:w-[750px] bg-white gap-8">
                        {/* Eyewear Column */}
                        <div className="w-[160px] shrink-0">
                          <h4 className="text-[12px] font-medium text-[#888] tracking-[1.5px] uppercase mb-4">
                            Eyewear
                          </h4>
                          <ul className="space-y-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="/products/eyewear/glasses" className="text-[15px] font-medium text-[#12171a] hover:text-[#304aec] transition-colors block">
                                  Glasses
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="/products/eyewear/contacts" className="text-[15px] font-medium text-[#12171a] hover:text-[#304aec] transition-colors block">
                                  Contact
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="/products/eyewear/sunglasses" className="text-[15px] font-medium text-[#12171a] hover:text-[#304aec] transition-colors block">
                                  Sunglasses
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        {/* Hearing Aids Column */}
                        <div className="w-[160px] shrink-0">
                          <h4 className="text-[12px] font-medium text-[#888] tracking-[1.5px] uppercase mb-4">
                            Hearing Aids
                          </h4>
                          <ul className="space-y-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="/products/hearing-aids/devices" className="text-[15px] font-medium text-[#12171a] hover:text-[#304aec] transition-colors block">
                                  Hearing Devices
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="/products/hearing-aids/accessories" className="text-[15px] font-medium text-[#12171a] hover:text-[#304aec] transition-colors block">
                                  Accessories
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        {/* CTA Column */}
                        <div className="flex-1 bg-[#F9F9F6] p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                          <div>
                            <h4 className="text-[18px] font-semibold text-[#12171a] mb-4">
                              Not sure what you need?
                            </h4>
                            <p className="text-[15px] text-[#4a4a4a] leading-relaxed relative z-10 max-w-[240px]">
                              Browse our full catalog of products to find your perfect fit.
                            </p>
                          </div>
                          <NavigationMenuLink asChild>
                            <Link href="/products" className="mt-8 inline-flex items-center justify-center rounded-full bg-white border border-[#e4e4e7] text-[#12171a] px-5 py-2 text-[14px] font-medium hover:bg-gray-50 transition-colors w-fit shadow-sm relative z-10">
                              View All Products
                            </Link>
                          </NavigationMenuLink>
                          
                          {/* Optional Glasses Decor Image */}
                          <div 
                            className="absolute opacity-100 pointer-events-none"
                            style={{ left: '160px', top: '129px', width: '240px', height: '160px' }}
                          >
                            <Image 
                              src="/cta-glasses.png" 
                              alt="Decorative Glasses" 
                              fill 
                              sizes="240px"
                              quality={80}
                              className="object-contain" 
                            />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/services" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]")}>
                      Services
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]")}>
                      Contact Us
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-medium text-[#12171a]/70 hover:text-[#12171a]")}>
                      About
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
                    <SheetHeader className="p-4 border-b border-[#e8ecee]/50 flex-row items-center justify-end space-y-0 relative">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <SheetDescription className="sr-only">
                        Navigate through our services and products.
                      </SheetDescription>
                      <SheetClose className="p-2 -mr-2">
                        <X className="w-6 h-6 text-[#12171a]" />
                      </SheetClose>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto p-4">
                      <nav className="flex flex-col">
                        <MobileAccordion type="single" collapsible className="w-full">
                          <AccordionItem value="products" className="border-none">
                            <AccordionTrigger className="text-[20px] font-semibold hover:no-underline py-4">
                              Products
                            </AccordionTrigger>
                            <AccordionContent className="pb-2">
                              <ul className="space-y-6 pl-4">
                                <li className="space-y-3">
                                  <Link
                                    href="/products/eyewear"
                                    className="text-[16px] font-bold text-[#12171a] hover:text-[#304aec] transition-colors block"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    Eyewear
                                  </Link>
                                  <ul className="space-y-3 pl-4 border-l border-slate-100">
                                    <li>
                                      <Link
                                        href="/products/eyewear/glasses"
                                        className="text-[15px] font-medium text-[#5e6468] hover:text-[#304aec] transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Glasses
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products/eyewear/contacts"
                                        className="text-[15px] font-medium text-[#5e6468] hover:text-[#304aec] transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Contacts
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products/eyewear/sunglasses"
                                        className="text-[15px] font-medium text-[#5e6468] hover:text-[#304aec] transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Sunglasses
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="space-y-3">
                                  <Link
                                    href="/products/hearing-aids"
                                    className="text-[16px] font-bold text-[#12171a] hover:text-[#304aec] transition-colors block"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    Hearing Aids
                                  </Link>
                                  <ul className="space-y-3 pl-4 border-l border-slate-100">
                                    <li>
                                      <Link
                                        href="/products/hearing-aids/devices"
                                        className="text-[15px] font-medium text-[#5e6468] hover:text-[#304aec] transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Hearing Devices
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/products/hearing-aids/accessories"
                                        className="text-[15px] font-medium text-[#5e6468] hover:text-[#304aec] transition-colors block"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Accessories
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="pt-2">
                                  <Link
                                    href="/products"
                                    className="text-[16px] font-bold text-[#304aec] hover:text-[#304aec]/80 transition-colors flex items-center gap-1"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    View all products &rarr;
                                  </Link>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </MobileAccordion>

                        <Link
                          href="/services"
                          className="text-[20px] font-semibold py-4 border-b border-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Services
                        </Link>
                        <Link
                          href="/contact"
                          className="text-[20px] font-semibold py-4 border-b border-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                        <Link
                          href="/about"
                          className="text-[20px] font-semibold py-4 border-b border-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          About
                        </Link>
                      </nav>
                    </div>

                    <div className="p-4 border-t border-[#e8ecee]/50 flex flex-col gap-3 bg-slate-50/50">
                      <Button asChild size="lg" className="rounded-full w-full bg-[#304aec] text-white h-[52px] text-lg font-medium shadow-md">
                        <Link href="#book" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
                      </Button>
                      <Button variant="outline" asChild size="lg" className="rounded-full w-full h-[52px] text-lg font-medium border-[#e4e4e7] bg-white">
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
