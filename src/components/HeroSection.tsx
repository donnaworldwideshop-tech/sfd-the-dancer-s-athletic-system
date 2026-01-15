import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dancerHero from "@/assets/dancer-hero.png";
import dancerIcon from "@/assets/dancer-icon.svg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[100svh] relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={dancerHero} 
          alt="Dancer" 
          className="w-full h-full object-cover object-[20%_top] sm:object-[40%_center] md:object-[30%_center]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/90 md:via-background/80 to-background/20 md:to-transparent" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 pt-20 md:pt-0 flex items-center justify-center">
        <div className="max-w-xl text-center" dir="rtl">
          <motion.p 
            className="text-caption mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SFD - STRENGTH FOR DANCERS
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            רקדן הוא ספורטאי.
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto"
            style={{ color: 'hsl(var(--text-secondary))' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            הגוף של הרקדן דורש אימון מקצועי.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator - Dancer Icon in Circle */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img 
            src={dancerIcon}
            alt="גלול למטה"
            className="w-8 h-8 md:w-10 md:h-10 invert"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;