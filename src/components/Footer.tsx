import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8ecee] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-16 mb-16">
          <div className="space-y-6">
            <div className="relative w-[120px] h-[120px]">
              <Image 
                src="/logo.svg" 
                alt="Haven Eye Logo" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#5e6468] text-sm leading-relaxed max-w-[280px]">
              Expert eye care at Ridge. Clear vision, honest advice, every visit.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-[13px] font-semibold text-[#5e6468] tracking-[1.56px] uppercase">Services</h5>
            <div className="flex flex-col gap-3">
              <Link href="#services" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Eye exams</Link>
              <Link href="#services" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Contact lens fitting</Link>
              <Link href="#services" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Treatment</Link>
              <Link href="#services" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Paediatric care</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[13px] font-semibold text-[#5e6468] tracking-[1.56px] uppercase">Eyewear</h5>
            <div className="flex flex-col gap-3">
              <Link href="#eyewear" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Prescription glasses</Link>
              <Link href="#eyewear" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Sunglasses</Link>
              <Link href="#eyewear" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">Contact lenses</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[13px] font-semibold text-[#5e6468] tracking-[1.56px] uppercase">Contact Us</h5>
            <div className="flex flex-col gap-3">
              <p className="text-[14.5px] text-[#12171a]">Ridge, Accra</p>
              <p className="text-[14.5px] text-[#12171a]">Greater Accra Region, Ghana</p>
              <Link href="tel:0557767766" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">0557 767 766</Link>
              <Link href="mailto:info@haveneyeltd.com" className="text-[14.5px] text-[#12171a] hover:text-[#304aec] transition-colors">info@haveneyeltd.com</Link>
              <Link href="#book" className="text-[14.5px] text-[#304aec] hover:underline transition-colors font-medium mt-2">Book appointment</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e8ecee] flex flex-col md:flex-row justify-between gap-4">
          <span className="text-[13px] text-[#5e6468]">© 2026 Haven Eye Ltd. All rights reserved.</span>
          <span className="text-[13px] text-[#5e6468]">Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
