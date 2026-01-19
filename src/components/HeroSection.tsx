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
    <section className="min-h-screen relative overflow-hidden" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Main dancer image - positioned on the left side */}
      <motion.div 
        className="absolute top-0 bottom-0 left-0 w-[45%] md:w-[40%] lg:w-[35%]"
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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80" />
      </motion.div>

      {/* Small image grid - right side thumbnails */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[38%] md:left-[35%] hidden lg:flex flex-col gap-3">
        <motion.div 
          className="w-28 h-36 overflow-hidden bg-card"
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
          className="w-28 h-36 overflow-hidden bg-card"
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
            {/* Small label */}
            <motion.p 
              className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-foreground/50 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              • STRENGTH FOR DANCERS
            </motion.p>

            {/* Large display text */}
            <div className="mb-10 md:mb-14">
              <motion.h1 
                className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] font-extralight leading-[0.9] tracking-tight text-foreground"
                style={{ letterSpacing: '-0.04em' }}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                רקדן
              </motion.h1>
              <motion.div 
                className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] font-extralight leading-[0.9] tracking-tight"
                style={{ 
                  letterSpacing: '-0.04em',
                  WebkitTextStroke: '1.5px hsl(0 0% 8% / 0.3)',
                  WebkitTextFillColor: 'transparent'
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.45 }}
              >
                הוא ספורטאי
              </motion.div>
            </div>

            {/* Subtitle with line */}
            <motion.div 
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="w-12 md:w-16 h-px bg-foreground/30 mt-4 flex-shrink-0" />
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-foreground/60 max-w-md">
                הגוף של הרקדן דורש אימון כוח מקצועי,
                מותאם לצרכים הייחודיים של התנועה הרקדנית.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border/30 z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <div className="px-8 md:px-16 lg:px-24 py-6 md:py-8">
          <div className="flex items-center gap-10 md:gap-16 lg:gap-24">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extralight">100+</span>
              <span className="text-xs text-foreground/50 leading-tight">רקדניות<br />בתוכנית</span>
            </div>
            <div className="w-px h-8 bg-border/50" />
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extralight">5+</span>
              <span className="text-xs text-foreground/50 leading-tight">שנות<br />ניסיון</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50" />
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extralight">4</span>
              <span className="text-xs text-foreground/50 leading-tight">סטודיואים<br />שותפים</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={scrollToContent}
        className="absolute left-1/2 -translate-x-1/2 bottom-32 z-20 w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center bg-background/50 backdrop-blur-sm hover:border-foreground/30 hover:bg-background/80 transition-all duration-300"
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
          <ArrowDown className="w-4 h-4 text-foreground/40" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
