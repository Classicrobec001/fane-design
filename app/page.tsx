import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Works />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
