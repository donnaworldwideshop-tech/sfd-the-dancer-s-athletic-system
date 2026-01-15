import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users } from "lucide-react";

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "מותאמת לעולם הריקוד",
      description: "לא כושר כללי, אלא עבודה שמבינה טכניקה, עומסים ותנועה."
    },
    {
      icon: Users,
      title: "מתאימה לשלבי התפתחות שונים",
      description: "השיטה נבנתה כך שניתן לעבוד לפיה ברמות שונות – מרקדנים צעירים ועד רקדנים פעילים ומתקדמים."
    }
  ];

  return (
    <section className="section-spacing section-container" dir="rtl" ref={ref}>
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption mb-6">הגישה</p>
          <h2 className="text-section-title mb-8">
            SFD היא שיטת אימון כוח<br />
            ייעודית לרקדנים.
          </h2>
          
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            השיטה מבוססת על עקרונות מקצועיים מעולם אימון הכוח,
            ומתורגמת לצרכים הפיזיים והמבניים של גוף רקדן.
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-card rounded-sm border border-border hover:border-foreground/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-normal mb-2">{feature.title}</h3>
                  <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {feature.description}
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

export default MethodSection;