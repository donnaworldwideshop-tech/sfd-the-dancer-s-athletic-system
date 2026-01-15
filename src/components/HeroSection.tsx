import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dancerHero from "@/assets/dancer-hero.png";

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
          className="w-full h-full object-cover object-[70%_center] md:object-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-background/80 md:via-background/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 pt-20 md:pt-0">
        <div className="max-w-xl mx-auto md:mx-0 md:mr-auto text-center md:text-right" dir="rtl">
          <motion.p 
            className="text-caption mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SFD – STRENGTH FOR DANCERS
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            רקדן הוא ספורטאי.
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ color: 'hsl(var(--text-secondary))' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            הגוף של הרקדן דורש אימון מקצועי.
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1.5 md:p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-1.5 md:h-2 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;