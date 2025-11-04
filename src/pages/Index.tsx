import Hero from "@/components/Hero";
import ForWho from "@/components/ForWho";
import HowItWorks from "@/components/HowItWorks";
import Bonus from "@/components/Bonus";
import WhyDifferent from "@/components/WhyDifferent";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ForWho />
      <HowItWorks />
      <Bonus />
      <WhyDifferent />
      <About />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
