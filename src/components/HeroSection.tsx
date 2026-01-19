import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dancerHero from "@/assets/dancer-hero.png";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Clean cream background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Main dancer image - positioned right */}
      <motion.div 
        className="absolute bottom-0 left-0 md:left-auto md:right-[5%] w-full md:w-[55%] h-[70%] md:h-[85%]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src={dancerHero} 
          alt="Dancer" 
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* Content overlay */}
      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl" dir="rtl">
          {/* Small label */}
          <motion.p 
            className="text-label mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            • STRENGTH FOR DANCERS
          </motion.p>

          {/* Large display text - mixed solid and outline */}
          <div className="mb-8 md:mb-12">
            <motion.h1 
              className="text-display mb-2"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              רקדן
            </motion.h1>
            <motion.div 
              className="text-display-outline"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              הוא ספורטאי
            </motion.div>
          </div>

          {/* Subtitle with line */}
          <motion.div 
            className="flex items-start gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="w-12 h-px bg-foreground/30 mt-3 flex-shrink-0" />
            <p className="text-body-lg max-w-md">
              הגוף של הרקדן דורש אימון כוח מקצועי,
              מותאם לצרכים הייחודיים של התנועה הרקדנית.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-premium border-t border-border/30"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div className="section-container py-6">
          <div className="flex items-center justify-between md:justify-start gap-8 md:gap-16" dir="rtl">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-extralight number-display">100+</span>
              <span className="text-xs text-muted-foreground">רקדניות<br />בתוכנית</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50" />
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-extralight number-display">5+</span>
              <span className="text-xs text-muted-foreground">שנות<br />ניסיון</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50" />
            <div className="hidden md:flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-extralight number-display">4</span>
              <span className="text-xs text-muted-foreground">סטודיואים<br />שותפים</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={scrollToContent}
        className="absolute left-1/2 -translate-x-1/2 bottom-32 md:bottom-28 z-20 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        aria-label="גלול למטה"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
