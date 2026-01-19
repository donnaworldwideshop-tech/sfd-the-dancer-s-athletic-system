import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Sparkles, TrendingUp } from "lucide-react";

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const features = [
    {
      icon: Target,
      number: "01",
      title: "מותאמת לעולם הריקוד",
      description: "לא כושר כללי, אלא עבודה שמבינה טכניקה, עומסים ותנועה."
    },
    {
      icon: Users,
      number: "02",
      title: "מתאימה לשלבי התפתחות שונים",
      description: "השיטה נבנתה כך שניתן לעבוד לפיה ברמות שונות - מרקדנים צעירים ועד רקדנים פעילים ומתקדמים."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <section 
      className="py-24 sm:py-32 md:py-40 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-16 bg-foreground text-background relative overflow-hidden" 
      dir="rtl" 
      ref={ref}
    >
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-background/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-background/5 to-transparent blur-3xl" />
      </div>
      
      {/* Noise overlay */}
      <div className="noise-overlay opacity-[0.03]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Sparkles className="w-4 h-4 text-background/40" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-background/40">
                הגישה
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] mb-8 md:mb-10 text-balance" style={{ letterSpacing: '-0.02em' }}>
              SFD היא שיטת אימון כוח
              <br className="hidden sm:block" />
              <span className="text-background/60">ייעודית לרקדנים.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-background/65">
              השיטה מבוססת על עקרונות מקצועיים מעולם אימון הכוח,
              ומתורגמת לצרכים הפיזיים והמבניים של גוף רקדן.
            </p>
            
            {/* Stats or highlights */}
            <motion.div 
              className="flex gap-8 mt-10 md:mt-14 pt-8 border-t border-background/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="text-3xl md:text-4xl font-semibold mb-1 number-display">+100</div>
                <div className="text-sm text-background/50">רקדניות בתוכנית</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold mb-1 number-display">5+</div>
                <div className="text-sm text-background/50">שנות ניסיון</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Feature Cards */}
          <motion.div 
            className="md:col-span-7 space-y-5 md:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="group relative p-7 sm:p-8 rounded-lg bg-background/[0.06] border border-background/[0.08] 
                  transition-all duration-500 ease-out
                  hover:bg-background/[0.1] hover:border-background/[0.15]"
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Number indicator */}
                <div className="absolute top-6 left-6 text-sm font-medium text-background/20 number-display">
                  {feature.number}
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-background/[0.08] flex items-center justify-center flex-shrink-0 
                    group-hover:bg-background/[0.12] group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-base md:text-lg font-light leading-relaxed text-background/65">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <motion.div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-background/30 rounded-full"
                  whileHover={{ height: '60%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
            
            {/* Additional CTA card */}
            <motion.div 
              className="p-7 sm:p-8 rounded-lg border border-dashed border-background/20 
                flex items-center justify-between gap-4 group cursor-pointer
                hover:border-background/30 hover:bg-background/[0.03] transition-all duration-500"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4">
                <TrendingUp className="w-5 h-5 text-background/40" />
                <span className="text-background/60 font-light">גלו עוד על השיטה</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-background/20 flex items-center justify-center
                group-hover:bg-background/10 group-hover:border-background/30 transition-all duration-300">
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;