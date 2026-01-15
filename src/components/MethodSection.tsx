import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users } from "lucide-react";

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      icon: Target,
      title: "מותאמת לעולם הריקוד",
      description: "לא כושר כללי, אלא עבודה שמבינה טכניקה, עומסים ותנועה."
    },
    {
      icon: Users,
      title: "מתאימה לשלבי התפתחות שונים",
      description: "השיטה נבנתה כך שניתן לעבוד לפיה ברמות שונות - מרקדנים צעירים ועד רקדנים פעילים ומתקדמים."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-12 lg:px-16 bg-primary text-primary-foreground" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-normal tracking-wide uppercase mb-4 md:mb-6 text-primary-foreground/60">הגישה</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug mb-6 md:mb-8">
              SFD היא שיטת אימון כוח<br className="hidden sm:block" />
              ייעודית לרקדנים.
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-primary-foreground/70">
              השיטה מבוססת על עקרונות מקצועיים מעולם אימון הכוח,
              ומתורגמת לצרכים הפיזיים והמבניים של גוף רקדן.
            </p>
          </motion.div>
          
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-5 sm:p-6 bg-primary-foreground/10 rounded-sm border border-primary-foreground/10 hover:border-primary-foreground/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-normal mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base font-light leading-relaxed text-primary-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;