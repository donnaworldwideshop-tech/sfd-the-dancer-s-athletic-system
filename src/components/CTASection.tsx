import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-spacing section-container" dir="rtl" ref={ref}>
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="max-w-3xl mx-auto text-center">
        <motion.p 
          className="text-caption mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          הצעד הראשון
        </motion.p>
        <motion.h2 
          className="text-section-title mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          רכישת ערכת האימון היא נקודת הכניסה לשיטת SFD.
        </motion.h2>
        <motion.p 
          className="text-body mb-4" 
          style={{ color: 'hsl(var(--text-secondary))' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          לאחר הרכישה ניתן להתחיל להתאמן כבר מהיום הראשון.
        </motion.p>
        <motion.p 
          className="text-body mb-12" 
          style={{ color: 'hsl(var(--text-secondary))' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          יש שאלות לפני? אפשר לפנות אלינו ישירות.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            to="/product" 
            className="btn-primary inline-flex items-center justify-center gap-2 group"
          >
            לרכישת ערכת האימון
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
          <a 
            href="mailto:contact@sfd.co.il" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground hover:border-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            ליצירת קשר
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;