import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyHaven from "@/components/WhyHaven";
import Eyewear from "@/components/Eyewear";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Main home page for Haven Eye
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyHaven />
      <Eyewear />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
