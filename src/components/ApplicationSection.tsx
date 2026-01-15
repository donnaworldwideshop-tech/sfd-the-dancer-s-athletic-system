import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Calendar, BookOpen, Smartphone, Clock, TrendingUp } from "lucide-react";
import productKit from "@/assets/product-kit.png";

const ApplicationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kitFeatures = [
    { icon: Calendar, text: "תוכנית אימון מובנית לעבודה שבועית" },
    { icon: Video, text: "סרטוני הדגמה לכל תרגיל" },
    { icon: BookOpen, text: "הנחיות ברורות לביצוע מדויק" },
    { icon: Smartphone, text: "גישה מלאה לתכנים מכל מכשיר" }
  ];

  return (
    <section className="section-spacing section-container" dir="rtl" ref={ref}>
      <div className="divider-line mb-16 md:mb-24" />
      
      {/* איך זה עובד */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption mb-6">איך זה עובד</p>
          <h2 className="text-section-title mb-8">
            השיטה מיושמת באמצעות ערכת אימון פיזית
            וגישה לתכנים דיגיטליים מלווים.
          </h2>
          <p className="text-body mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
            ערכת האימון כוללת ציוד פיזי ייעודי לעבודה לפי השיטה.
            התרגול מונחה באמצעות סרטוני הדגמה ברורים,
            ומאפשר עבודה עצמאית, מדויקת ובטוחה.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            הגישה לתכנים היא דיגיטלית,
            ומאפשרת להתאמן בכל מקום ובקצב שמתאים לרקדן.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={productKit} 
            alt="SFD Training Kit" 
            className="w-full rounded-sm"
          />
        </motion.div>
      </div>

      {/* הערכה כוללת */}
      <motion.div 
        className="bg-card p-8 md:p-12 rounded-sm border border-border mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-caption mb-8">הערכה כוללת</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kitFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5" />
              </div>
              <span className="text-body">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* עבודה לאורך זמן והתאמה לשלב בקריירה */}
      <div className="grid md:grid-cols-2 gap-8">
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
            className="p-6 bg-card rounded-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2">{item.title}</h3>
                <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationSection;