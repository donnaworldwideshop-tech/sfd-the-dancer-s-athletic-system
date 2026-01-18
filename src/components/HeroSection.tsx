import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dancerHero from "@/assets/dancer-hero.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for hero image
  const imageY = useTransform(scrollY, [0, 800], [0, 200]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, 60]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-[100svh] relative flex items-center justify-center overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 z-0">
        {/* Image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, scale: imageScale }}
        >
          <motion.img 
            src={dancerHero} 
            alt="Dancer" 
            className="w-full h-full object-cover object-[20%_top] sm:object-[40%_center] md:object-[30%_center]"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        
        {/* Multi-layer gradient for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/30 md:bg-gradient-to-l md:from-background md:via-background/85 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.3) 100%)'
        }} />
        
        {/* Noise texture */}
        <div className="noise-overlay" />
      </div>
      
      {/* Content with parallax */}
      <motion.div 
        className="section-container relative z-10 pt-20 md:pt-0 flex items-center justify-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-2xl text-center" dir="rtl">
          {/* Animated eyebrow */}
          <motion.div
            className="inline-block mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-eyebrow inline-flex items-center gap-3">
              <span className="w-8 h-px bg-current opacity-50" />
              SFD — STRENGTH FOR DANCERS
              <span className="w-8 h-px bg-current opacity-50" />
            </span>
          </motion.div>
          
          {/* Main Headline with dramatic reveal */}
          <div className="overflow-hidden mb-6 md:mb-8">
            <motion.h1 
              className="text-hero-display text-balance"
              initial={{ opacity: 0, y: 80 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              רקדן הוא ספורטאי.
            </motion.h1>
          </div>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-foreground/70"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            הגוף של הרקדן דורש אימון מקצועי.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="w-px h-16 md:h-24 bg-gradient-to-b from-foreground/30 to-transparent mx-auto mt-12 md:mt-16"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isVisible ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      </motion.div>

      {/* Premium scroll indicator */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.button 
          onClick={scrollToContent}
          className="group flex flex-col items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="גלול למטה"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/40 group-hover:text-foreground/60 transition-colors">
            גלול
          </span>
          <motion.div 
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-foreground/40 group-hover:bg-foreground/5 transition-all"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-foreground/50 group-hover:text-foreground/70 transition-colors" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom gradient for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default HeroSection;