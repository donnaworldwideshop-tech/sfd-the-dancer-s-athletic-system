import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import petitLogo from "@/assets/studios/petit.png";
import edanceLogo from "@/assets/studios/edance.png";
import muzaLogo from "@/assets/studios/muza.png";
import donaLogo from "@/assets/studios/dona.png";

const studios = [
  { name: "Petit Dance Studio", logo: petitLogo },
  { name: "Studio EDANCE", logo: edanceLogo },
  { name: "MUZA Dance Academy", logo: muzaLogo },
  { name: "DONA", logo: donaLogo },
];

const StudiosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative" dir="rtl" ref={ref}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="divider-line" />
      </div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-caption">סטודיואים שעובדים איתנו</p>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 flex-wrap md:flex-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {studios.map((studio, index) => (
            <motion.div
              key={studio.name}
              className="group relative flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={studio.logo}
                alt={studio.name}
                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[80px] sm:max-w-[110px] md:max-w-none object-contain 
                  transition-all duration-500 ease-out
                  grayscale opacity-50 
                  group-hover:grayscale-0 group-hover:opacity-100
                  group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudiosSection;