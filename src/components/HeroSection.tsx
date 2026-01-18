import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dancerHero from "@/assets/dancer-hero.png";
import dancerIcon from "@/assets/dancer-icon.svg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[100svh] relative flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img 
            src={dancerHero} 
            alt="Dancer" 
            className="w-full h-full object-cover object-[20%_top] sm:object-[40%_center] md:object-[30%_center]"
          />
        </motion.div>
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/95 md:via-background/85 to-background/30 md:to-transparent" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} 
        />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 pt-20 md:pt-0 flex items-center justify-center">
        <div className="max-w-xl text-center" dir="rtl">
          {/* Badge/Tag */}
          <motion.div
            className="inline-block mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-caption tracking-[0.2em]">
              SFD — STRENGTH FOR DANCERS
            </span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6 text-balance"
            style={{ letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            רקדן הוא ספורטאי.
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-light leading-relaxed max-w-md mx-auto"
            style={{ color: 'hsl(var(--text-secondary))' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            הגוף של הרקדן דורש אימון מקצועי.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator - Premium floating button */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-500 group cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="גלול למטה"
        >
          <img 
            src={dancerIcon}
            alt=""
            className="w-7 h-7 md:w-8 md:h-8 invert transition-transform duration-300 group-hover:scale-110"
          />
        </motion.button>
      </motion.div>

      {/* Subtle bottom gradient for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
    </section>
  );
};

export default HeroSection;