import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import productKit from "@/assets/product-kit.png";

const ApplicationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "ערכת התנגדות מקצועית",
    "מדריך תרגילים מודפס",
    "גישה ל-50+ סרטוני תרגול",
    "תמיכה מקצועית אישית",
    "גומיות ייעודיות לרקדנים",
    "עדכונים שוטפים לתוכן"
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white" dir="rtl" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="divider-with-text max-w-xs mx-auto mb-8">
            <span className="text-label px-4">המוצר שלנו</span>
          </div>
          <h2 className="text-title mb-2">
            ערכת האימון
          </h2>
          <div className="text-title-outline mb-6">
            המקצועית
          </div>
          <p className="text-body-lg max-w-xl mx-auto">
            כל מה שצריך להתחיל להתאמן - ערכה מקצועית עם גישה לספריית סרטונים מלאה
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-semibold mb-8">הערכה כוללת</h3>
            <p className="text-body-lg mb-8">
              ערכה מלאה להתחלת האימונים בבית - כוללת ציוד מקצועי וגישה לספריית סרטוני התרגול שלנו עם
              הדרכות מפורטות.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-ballet-light flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-foreground" strokeWidth={2} />
                  </div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl md:text-5xl font-bold">₪349</span>
              <span className="text-xl text-muted-foreground line-through">₪449</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">*משלוח חינם לכל הארץ</p>

            <Link to="/product" className="btn-primary">
              לרכישת הערכה
            </Link>
          </motion.div>
          
          {/* Right - Product Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-muted p-8 md:p-12 lg:p-16 rounded-sm">
              <img 
                src={productKit} 
                alt="SFD Training Kit" 
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
