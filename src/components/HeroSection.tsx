import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dancerHero from "@/assets/dancer-hero-new.png";
import dancerPose1 from "@/assets/dancer-pose-1.png";
import dancerPose2 from "@/assets/dancer-pose-2.png";
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
    <section className="min-h-screen relative overflow-hidden bg-white" dir="rtl">
      {/* Main dancer image - left side */}
      <motion.div 
        className="absolute top-0 bottom-0 left-0 w-[50%] md:w-[45%] lg:w-[40%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src={dancerHero} 
          alt="Dancer" 
          className="h-full w-full object-cover object-[60%_center]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90" />
      </motion.div>

      {/* Small image grid */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[42%] md:left-[38%] hidden lg:flex flex-col gap-3">
        <motion.div 
          className="w-28 h-36 overflow-hidden border border-border/30"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <img 
            src={dancerPose1} 
            alt="Dancer pose 1" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <motion.div 
          className="w-28 h-36 overflow-hidden border border-border/30"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          <img 
            src={dancerPose2} 
            alt="Dancer pose 2" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Content - right side */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="mr-auto md:mr-0 md:ml-auto max-w-2xl lg:max-w-xl xl:max-w-2xl">
            {/* Label with lines */}
            <motion.div 
              className="flex items-center gap-4 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-label">SFD - STRENGTH FOR DANCERS</span>
              <div className="w-16 h-px bg-border" />
            </motion.div>

            {/* Large display text */}
            <div className="mb-10 md:mb-12">
              <motion.h1 
                className="text-display text-foreground"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                רקדן
              </motion.h1>
              <motion.div 
                className="text-display-outline"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.45 }}
              >
                הוא ספורטאי
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-body-lg max-w-md mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              הגוף של הרקדן דורש אימון כוח מקצועי,
              מותאם לצרכים הייחודיים של התנועה הרקדנית.
            </motion.p>

            {/* CTA Button */}
            <motion.a 
              href="/product"
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              לרכישת הערכה
            </motion.a>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border/50 z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <div className="px-8 md:px-16 lg:px-24 py-6">
          <div className="flex items-center gap-10 md:gap-16 lg:gap-20">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold">100+</span>
              <span className="text-xs text-muted-foreground leading-tight">רקדניות<br />בתוכנית</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold">5+</span>
              <span className="text-xs text-muted-foreground leading-tight">שנות<br />ניסיון</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold">50+</span>
              <span className="text-xs text-muted-foreground leading-tight">סרטוני<br />הדרכה</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={scrollToContent}
        className="absolute left-1/2 -translate-x-1/2 bottom-28 z-20 w-10 h-10 rounded-full border border-border flex items-center justify-center bg-white hover:border-foreground/30 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        aria-label="גלול למטה"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
