import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const problemPoints = [
    "רקדנים מתאמנים שעות ביום, אך אימון טכני לבדו לא בונה את הכוח שנדרש כדי לתמוך בתנועה.",
    "אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד - לטווחי התנועה, לדפוסי העומס ולדיוק הביצוע.",
    "כוח שלא נבנה מתוך הבנה של התנועה הרקדנית לא ישרת את הרקדן לאורך זמן."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Animated divider */}
        <motion.div 
          className="h-px mb-16 md:mb-24 lg:mb-32 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-border to-transparent"
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '0%' } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p 
              className="text-eyebrow mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              הבעיה
            </motion.p>
            <h2 className="text-subsection-title text-balance">
              עולם הריקוד ואימוני הכוח
              <br className="hidden sm:block" />
              <span className="text-foreground/60">לא מדברים באותה השפה.</span>
            </h2>
          </motion.div>
          
          {/* Right Column - Problem Points */}
          <motion.div 
            className="md:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {problemPoints.map((text, index) => (
              <motion.p 
                key={index}
                className="text-body-large"
                variants={itemVariants}
              >
                {text}
              </motion.p>
            ))}
            
            {/* Result Callout - Premium styling */}
            <motion.div 
              className="relative mt-10 md:mt-14"
              variants={itemVariants}
            >
              <div className="absolute -right-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-foreground via-foreground/50 to-transparent rounded-full" />
              <div className="pr-8 py-6">
                <p className="text-eyebrow mb-4">
                  התוצאה
                </p>
                <p className="text-xl md:text-2xl font-normal leading-relaxed text-foreground">
                  פערים בכוח, פציעות חוזרות, ותחושה שהגוף לא תומך בעבודה האמנותית.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;