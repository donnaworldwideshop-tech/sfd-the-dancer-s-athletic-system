import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="divider-line mb-12 md:mb-16 lg:mb-24" />
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caption mb-4 md:mb-6">הבעיה</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug">
              עולם הריקוד ואימוני הכוח<br className="hidden sm:block" />
              לא מדברים באותה השפה.
            </h2>
          </motion.div>
          
          <div className="space-y-4 md:space-y-6">
            {[
              "רקדנים מתאמנים שעות ביום, אך אימון טכני לבדו לא בונה את הכוח שנדרש כדי לתמוך בתנועה.",
              "אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד - לטווחי התנועה, לדפוסי העומס ולדיוק הביצוע.",
              "כוח שלא נבנה מתוך הבנה של התנועה הרקדנית לא ישרת את הרקדן לאורך זמן."
            ].map((text, index) => (
              <motion.p 
                key={index}
                className="text-sm sm:text-base md:text-lg font-light leading-relaxed" 
                style={{ color: 'hsl(var(--text-secondary))' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
            <motion.div 
              className="p-4 sm:p-6 bg-primary/5 border-r-4 border-primary rounded-sm mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm sm:text-base md:text-lg font-medium" style={{ color: 'hsl(var(--foreground))' }}>
                התוצאה:<br />
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