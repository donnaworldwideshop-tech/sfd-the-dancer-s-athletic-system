import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="divider-line mb-16 md:mb-20 lg:mb-28" />
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.p className="text-caption mb-5" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
            הצעד הראשון
          </motion.p>
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] mb-8 md:mb-10 text-balance" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}>
            רכישת ערכת האימון היא נקודת הכניסה לשיטת SFD.
          </motion.h2>
          <motion.div className="space-y-3 mb-10 md:mb-14" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              לאחר הרכישה ניתן להתחיל להתאמן כבר מהיום הראשון.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              יש שאלות לפני? אפשר לפנות אלינו ישירות.
            </p>
          </motion.div>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}>
            <Link to="/product" className="btn-primary group">
              לרכישת ערכת האימון
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
            <a href="mailto:contact@sfd.co.il" className="btn-outline group">
              <Mail className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:scale-110" />
              ליצירת קשר
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;