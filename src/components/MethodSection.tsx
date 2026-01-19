import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const features = [
    {
      number: "01",
      title: "מותאמת לעולם הריקוד",
      description: "לא כושר כללי, אלא עבודה שמבינה טכניקה, עומסים ותנועה."
    },
    {
      number: "02",
      title: "מתאימה לשלבי התפתחות שונים",
      description: "השיטה נבנתה לעבודה ברמות שונות - מרקדנים צעירים ועד רקדנים מתקדמים."
    },
    {
      number: "03",
      title: "מבוססת על עקרונות מקצועיים",
      description: "הידע מגיע מעולם אימון הכוח והספורט, ומתורגם לשפה הרקדנית."
    }
  ];

  return (
    <section 
      className="py-28 md:py-40 lg:py-52 bg-foreground text-background relative overflow-hidden" 
      dir="rtl" 
      ref={ref}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column - Title & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label text-background/40 mb-8">• הגישה</p>
            
            <h2 className="text-title mb-10 text-balance">
              SFD היא שיטת אימון כוח
              <span className="block text-background/50">ייעודית לרקדנים.</span>
            </h2>
            
            <p className="text-body-lg text-background/60 mb-12 max-w-md">
              השיטה מבוססת על עקרונות מקצועיים מעולם אימון הכוח,
              ומתורגמת לצרכים הפיזיים והמבניים של גוף רקדן.
            </p>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors duration-300 group"
            >
              <span>קראו עוד על השיטה</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </motion.div>
          
          {/* Right Column - Feature List */}
          <div className="space-y-0">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="py-10 border-b border-background/10 first:pt-0 last:border-b-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-8">
                  <span className="text-sm text-background/30 number-display">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-body text-background/50">
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
