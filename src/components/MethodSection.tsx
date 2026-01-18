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
      description: "השיטה נבנתה כך שניתן לעבוד לפיה ברמות שונות - מרקדנים צעירים ועד רקדנים פעילים ומתקדמים."
    }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-12 lg:px-16 bg-primary text-primary-foreground relative overflow-hidden" dir="rtl" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} 
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-28">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.p 
              className="text-xs font-medium tracking-[0.15em] uppercase mb-5 md:mb-6 text-primary-foreground/50"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              הגישה
            </motion.p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] mb-8 md:mb-10 text-balance">
              SFD היא שיטת אימון כוח
              <br className="hidden sm:block" />
              ייעודית לרקדנים.
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-primary-foreground/70">
              השיטה מבוססת על עקרונות מקצועיים מעולם אימון הכוח,
              ומתורגמת לצרכים הפיזיים והמבניים של גוף רקדן.
            </p>
          </motion.div>
          
          {/* Right Column - Feature Cards */}
          <div className="space-y-5 md:space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-6 sm:p-8 bg-primary-foreground/[0.06] rounded-sm border border-primary-foreground/[0.08] 
                  transition-all duration-500 ease-out
                  hover:bg-primary-foreground/[0.1] hover:border-primary-foreground/[0.15]
                  hover:translate-y-[-2px]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.25 + index * 0.12,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/[0.08] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-primary-foreground/70">
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