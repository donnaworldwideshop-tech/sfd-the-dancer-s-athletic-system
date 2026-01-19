import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import dancerPose1 from "@/assets/dancer-pose-1.png";

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const features = [
    {
      number: "01",
      title: "מיקוד בשרירים הנכונים",
      description: "אימונים מותאמים לצרכים הספציפיים של רקדנים - חיזוק הליבה, יציבות הקרסול, וגמישות מבוקרת."
    },
    {
      number: "02",
      title: "מניעת פציעות",
      description: "שיטה שפותחה על ידי מומחים למניעת הפציעות הנפוצות ביותר בקרב רקדנים."
    },
    {
      number: "03",
      title: "שיפור ביצועים",
      description: "עלייה ברמת הכוח והשליטה בגוף מובילה לביצועים טובים יותר על הבמה."
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-40 bg-white" 
      dir="rtl" 
      ref={ref}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label with line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-label">השיטה שלנו</span>
              <div className="w-16 h-px bg-border" />
            </div>
            
            <h2 className="text-title mb-2">
              אימון כוח
            </h2>
            <div className="text-title-outline mb-10">
              מותאם לרקדנים
            </div>
            
            <p className="text-body-lg mb-12 max-w-md">
              השיטה שלנו פותחה במיוחד עבור רקדנים - לא סתם אימון כוח, אלא תוכנית מקצועית
              שמבינה את הצרכים הייחודיים של הגוף הרוקד.
            </p>
            
            {/* Features with numbers */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-number">
                    {feature.number}
                  </span>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div 
              className="flex items-center gap-8 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold">+7</span>
                <span className="text-sm text-muted-foreground">שנות פיתוח ומחקר</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img 
                src={dancerPose1} 
                alt="Dancer training" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
