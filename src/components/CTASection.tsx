import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="contact" className="py-28 md:py-40 lg:py-52" dir="rtl" ref={ref}>
      <div className="section-container">
        {/* Top divider */}
        <div className="divider mb-20 md:mb-28" />
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label mb-8">• הצעד הראשון</p>
            
            <h2 className="text-title mb-10 text-balance">
              רכישת ערכת האימון היא נקודת הכניסה
              <span className="block text-foreground/40">לשיטת SFD.</span>
            </h2>
            
            <p className="text-body-lg mb-12 max-w-md">
              לאחר הרכישה ניתן להתחיל להתאמן כבר מהיום הראשון.
              יש שאלות לפני? אפשר לפנות אלינו ישירות.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product" className="btn-primary group">
                לרכישת ערכת האימון
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
              <a href="mailto:contact@sfd.co.il" className="btn-outline group">
                <Mail className="w-4 h-4" />
                ליצירת קשר
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Trust indicators */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-3 gap-px bg-border/50">
              <div className="bg-background p-8 md:p-10 text-center">
                <span className="text-4xl md:text-5xl font-extralight block mb-3 number-display">100+</span>
                <span className="text-sm text-muted-foreground">רקדניות מרוצות</span>
              </div>
              <div className="bg-background p-8 md:p-10 text-center">
                <span className="text-4xl md:text-5xl font-extralight block mb-3 number-display">5★</span>
                <span className="text-sm text-muted-foreground">דירוג ממוצע</span>
              </div>
              <div className="bg-background p-8 md:p-10 text-center">
                <span className="text-4xl md:text-5xl font-extralight block mb-3 number-display">24/7</span>
                <span className="text-sm text-muted-foreground">תמיכה זמינה</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
