import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="py-28 md:py-40 lg:py-52" dir="rtl" ref={ref}>
      <div className="section-container">
        {/* Top divider */}
        <div className="divider mb-20 md:mb-28" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column - Title */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label mb-8">• הבעיה</p>
            <h2 className="text-title text-balance">
              עולם הריקוד ואימוני הכוח
              <span className="block text-foreground/40">לא מדברים באותה השפה.</span>
            </h2>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-body-lg">
              רקדנים מתאמנים שעות ביום, אך אימון טכני לבדו לא בונה את הכוח שנדרש כדי לתמוך בתנועה.
            </p>
            <p className="text-body-lg">
              אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד - לטווחי התנועה, לדפוסי העומס ולדיוק הביצוע.
            </p>
            <p className="text-body-lg">
              כוח שלא נבנה מתוך הבנה של התנועה הרקדנית לא ישרת את הרקדן לאורך זמן.
            </p>
            
            {/* Result callout */}
            <motion.div 
              className="mt-16 pt-10 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-label mb-6">התוצאה</p>
              <p className="text-subtitle text-foreground">
                פערים בכוח, פציעות חוזרות, ותחושה שהגוף לא תומך בעבודה האמנותית.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
