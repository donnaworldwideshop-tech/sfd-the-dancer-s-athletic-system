import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Calendar, BookOpen, Smartphone, Clock, TrendingUp } from "lucide-react";
import productKit from "@/assets/product-kit.png";

const ApplicationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const kitFeatures = [
    { icon: Calendar, text: "תוכנית אימון מובנית לעבודה שבועית" },
    { icon: Video, text: "סרטוני הדגמה לכל תרגיל" },
    { icon: BookOpen, text: "הנחיות ברורות לביצוע מדויק" },
    { icon: Smartphone, text: "גישה מלאה לתכנים מכל מכשיר" }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-12 lg:px-16" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="divider-line mb-12 md:mb-16 lg:mb-24" />
        
        {/* איך זה עובד */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <p className="text-caption mb-4 md:mb-6">איך זה עובד</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-6 md:mb-8">
              השיטה מיושמת באמצעות ערכת אימון פיזית
              וגישה לתכנים דיגיטליים מלווים.
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed mb-4 md:mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
              ערכת האימון כוללת ציוד פיזי ייעודי לעבודה לפי השיטה.
              התרגול מונחה באמצעות סרטוני הדגמה ברורים,
              ומאפשר עבודה עצמאית, מדויקת ובטוחה.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
              הגישה לתכנים היא דיגיטלית,
              ומאפשרת להתאמן בכל מקום ובקצב שמתאים לרקדן.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-6 md:p-8 rounded-sm">
              <img 
                src={productKit} 
                alt="SFD Training Kit" 
                className="w-full rounded-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* הערכה כוללת */}
        <motion.div 
          className="bg-card p-5 sm:p-6 md:p-8 lg:p-12 rounded-sm border border-border mb-12 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-caption mb-6 md:mb-8">הערכה כוללת</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {kitFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base font-light leading-relaxed">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* עבודה לאורך זמן והתאמה לשלב בקריירה */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
          {[
            {
              icon: Clock,
              title: "עבודה לאורך זמן",
              description: "אימון כוח אפקטיבי דורש רצף ועקביות. השיטה נבנתה כך שתשתלב לצד שיעורי הריקוד – לא במקומם."
            },
            {
              icon: TrendingUp,
              title: "התאמה לשלב בקריירה",
              description: "רקדן צעיר בונה בסיס. רקדן מתקדם מחזק, מייצב ושומר על הגוף לאורך זמן. התוכן והשיטה מאפשרים עבודה מדורגת."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="p-5 sm:p-6 bg-card rounded-sm border border-border hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-normal mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;