import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Calendar, BookOpen, Smartphone } from "lucide-react";
import productKit from "@/assets/product-kit.png";

const ApplicationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kitFeatures = [
    { icon: Calendar, text: "תוכנית אימון מובנית לעבודה שבועית", number: "01" },
    { icon: Video, text: "סרטוני הדגמה לכל תרגיל", number: "02" },
    { icon: BookOpen, text: "הנחיות ברורות לביצוע מדויק", number: "03" },
    { icon: Smartphone, text: "גישה מלאה לתכנים מכל מכשיר", number: "04" }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="divider-line mb-16 md:mb-20 lg:mb-28" />
        
        {/* How It Works */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center mb-20 md:mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 md:order-1"
          >
            <motion.p 
              className="text-caption mb-5 md:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              איך זה עובד
            </motion.p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] mb-8 md:mb-10 text-balance">
              השיטה מיושמת באמצעות ערכת אימון פיזית
              וגישה לתכנים דיגיטליים מלווים.
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                ערכת האימון כוללת ציוד פיזי ייעודי לעבודה לפי השיטה.
                התרגול מונחה באמצעות סרטוני הדגמה ברורים,
                ומאפשר עבודה עצמאית, מדויקת ובטוחה.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                הגישה לתכנים היא דיגיטלית,
                ומאפשרת להתאמן בכל מקום ובקצב שמתאים לרקדן.
              </p>
            </div>
          </motion.div>
          
          {/* Product Image */}
          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative bg-gradient-to-br from-primary/[0.03] to-primary/[0.08] p-6 sm:p-8 md:p-10 rounded-sm overflow-hidden group">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent" />
              <img 
                src={productKit} 
                alt="SFD Training Kit" 
                className="w-full rounded-sm transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* The Kit Includes */}
        <div>
          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-caption mb-4">הערכה כוללת</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">כל מה שצריך כדי להתחיל</h3>
          </motion.div>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {kitFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="relative bg-card p-6 sm:p-8 flex flex-col border border-border rounded-sm
                  transition-all duration-500 ease-out group
                  hover:border-primary/20 hover:bg-primary/[0.02] hover:translate-y-[-4px] hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.08,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {/* Number */}
                <span className="text-4xl sm:text-5xl font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-500 mb-5 md:mb-6 number-display">
                  {feature.number}
                </span>
                
                {/* Icon & Text */}
                <div className="flex-1">
                  <feature.icon 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" 
                    strokeWidth={1.5} 
                  />
                  <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;