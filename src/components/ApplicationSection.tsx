import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Calendar, BookOpen, Smartphone, Clock, TrendingUp } from "lucide-react";
import productKit from "@/assets/product-kit.png";

const ApplicationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const kitFeatures = [
    { icon: Calendar, text: "תוכנית אימון מובנית לעבודה שבועית", number: "01" },
    { icon: Video, text: "סרטוני הדגמה לכל תרגיל", number: "02" },
    { icon: BookOpen, text: "הנחיות ברורות לביצוע מדויק", number: "03" },
    { icon: Smartphone, text: "גישה מלאה לתכנים מכל מכשיר", number: "04" }
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

        {/* הערכה כוללת - New Design */}
        <div className="mb-16 md:mb-24">
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-caption mb-3">הערכה כוללת</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light">כל מה שצריך כדי להתחיל</h3>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {kitFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-background p-5 sm:p-6 md:p-8 flex flex-col group hover:bg-primary/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-light text-primary/20 group-hover:text-primary/40 transition-colors mb-4 md:mb-6">
                  {feature.number}
                </span>
                <div className="flex-1">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-3" />
                  <p className="text-sm sm:text-base font-normal leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* עבודה לאורך זמן והתאמה לשלב בקריירה - New Design */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-px bg-transparent md:bg-primary overflow-hidden rounded-sm">
          {[
            {
              icon: Clock,
              title: "עבודה לאורך זמן",
              description: "אימון כוח אפקטיבי דורש רצף ועקביות. השיטה נבנתה כך שתשתלב לצד שיעורי הריקוד - לא במקומם."
            },
            {
              icon: TrendingUp,
              title: "התאמה לשלב בקריירה",
              description: "רקדן צעיר בונה בסיס. רקדן מתקדם מחזק, מייצב ושומר על הגוף לאורך זמן. התוכן והשיטה מאפשרים עבודה מדורגת."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`p-6 sm:p-8 md:p-10 lg:p-12 ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-card border border-border md:border-0'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-4 md:mb-6 ${index === 0 ? 'text-primary-foreground/70' : 'text-primary'}`} strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mb-3 md:mb-4">{item.title}</h3>
              <p className={`text-sm sm:text-base md:text-lg font-light leading-relaxed ${index === 0 ? 'text-primary-foreground/80' : ''}`} style={index === 1 ? { color: 'hsl(var(--text-secondary))' } : {}}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
