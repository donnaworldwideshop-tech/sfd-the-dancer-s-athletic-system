import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import MethodSection from "@/components/MethodSection";
import ApplicationSection from "@/components/ApplicationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StudiosSection from "@/components/StudiosSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <StudiosSection />
        <GapSection />
        <MethodSection />
        <ApplicationSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;