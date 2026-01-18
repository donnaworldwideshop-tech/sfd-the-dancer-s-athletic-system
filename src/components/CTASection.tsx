import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="contact" className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden" dir="rtl" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Animated divider */}
        <motion.div 
          className="h-px mb-16 md:mb-24 lg:mb-32 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-border to-transparent"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '0%' } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow with icon */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles className="w-4 h-4 text-muted-foreground" />
            <span className="text-eyebrow">הצעד הראשון</span>
          </motion.div>
          
          {/* Main headline */}
          <motion.h2 
            className="text-section-title mb-8 md:mb-10 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            רכישת ערכת האימון היא נקודת הכניסה
            <span className="text-foreground/50"> לשיטת SFD.</span>
          </motion.h2>
          
          {/* Description */}
          <motion.div 
            className="space-y-3 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-body-large">
              לאחר הרכישה ניתן להתחיל להתאמן כבר מהיום הראשון.
            </p>
            <p className="text-body-large">
              יש שאלות לפני? אפשר לפנות אלינו ישירות.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/product" className="btn-primary group">
              לרכישת ערכת האימון
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
            <a href="mailto:contact@sfd.co.il" className="btn-outline group">
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              ליצירת קשר
            </a>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            className="mt-14 md:mt-20 pt-10 border-t border-border/50 flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1 number-display">100+</div>
              <div className="text-sm text-muted-foreground">רקדניות מרוצות</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1 number-display">5★</div>
              <div className="text-sm text-muted-foreground">דירוג ממוצע</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-semibold mb-1 number-display">24/7</div>
              <div className="text-sm text-muted-foreground">תמיכה זמינה</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;