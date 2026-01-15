import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="divider-line mb-12 md:mb-16 lg:mb-24" />
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.p 
            className="text-caption mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            הצעד הראשון
          </motion.p>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            רכישת ערכת האימון היא נקודת הכניסה לשיטת SFD.
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed mb-3 md:mb-4" 
            style={{ color: 'hsl(var(--text-secondary))' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            לאחר הרכישה ניתן להתחיל להתאמן כבר מהיום הראשון.
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12" 
            style={{ color: 'hsl(var(--text-secondary))' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            יש שאלות לפני? אפשר לפנות אלינו ישירות.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/product" 
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-normal text-sm sm:text-base transition-all duration-300 hover:opacity-90 group"
            >
              לרכישת ערכת האימון
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
            <a 
              href="mailto:contact@sfd.co.il" 
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              ליצירת קשר
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;