import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
