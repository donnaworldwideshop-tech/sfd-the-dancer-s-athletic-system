import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problemPoints = [
    "רקדנים מתאמנים שעות ביום, אך אימון טכני לבדו לא בונה את הכוח שנדרש כדי לתמוך בתנועה.",
    "אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד - לטווחי התנועה, לדפוסי העומס ולדיוק הביצוע.",
    "כוח שלא נבנה מתוך הבנה של התנועה הרקדנית לא ישרת את הרקדן לאורך זמן."
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="divider-line mb-16 md:mb-20 lg:mb-28" />
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-28">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.p 
              className="text-caption mb-5 md:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              הבעיה
            </motion.p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] text-balance">
              עולם הריקוד ואימוני הכוח
              <br className="hidden sm:block" />
              לא מדברים באותה השפה.
            </h2>
          </motion.div>
          
          {/* Right Column - Problem Points */}
          <div className="space-y-5 md:space-y-6">
            {problemPoints.map((text, index) => (
              <motion.p 
                key={index}
                className="text-base sm:text-lg md:text-xl font-light leading-relaxed" 
                style={{ color: 'hsl(var(--text-secondary))' }}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.25 + index * 0.12,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {text}
              </motion.p>
            ))}
            
            {/* Result Callout - Premium styling */}
            <motion.div 
              className="relative p-6 sm:p-8 bg-primary/[0.03] border-r-2 border-primary mt-8 md:mt-10"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase mb-3" style={{ color: 'hsl(var(--text-muted))' }}>
                התוצאה
              </p>
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                פערים בכוח, פציעות חוזרות, ותחושה שהגוף לא תומך בעבודה האמנותית.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;