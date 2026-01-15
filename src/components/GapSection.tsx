import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing section-container" dir="rtl" ref={ref}>
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption mb-6">הבעיה</p>
          <h2 className="text-section-title">
            עולם הריקוד ואימוני הכוח<br />
            לא מדברים באותה השפה.
          </h2>
        </motion.div>
        
        <div className="space-y-6">
          {[
            "רקדנים מתאמנים שעות ביום, אך אימון טכני לבדו לא בונה את הכוח שנדרש כדי לתמוך בתנועה.",
            "אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד – לטווחי התנועה, לדפוסי העומס ולדיוק הביצוע.",
            "כוח שלא נבנה מתוך הבנה של התנועה הרקדנית לא ישרת את הרקדן לאורך זמן."
          ].map((text, index) => (
            <motion.p 
              key={index}
              className="text-body" 
              style={{ color: 'hsl(var(--text-secondary))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {text}
            </motion.p>
          ))}
          <motion.p 
            className="text-body font-medium pt-4" 
            style={{ color: 'hsl(var(--foreground))' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            התוצאה:<br />
            פערים בכוח, פציעות חוזרות, ותחושה שהגוף לא תומך בעבודה האמנותית.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default GapSection;