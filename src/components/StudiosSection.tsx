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
    <section className="py-12 sm:py-16 md:py-20 bg-background" dir="rtl" ref={ref}>
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption mb-3">סטודיואים מובילים</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light">עובדת עם הטובים ביותר</h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {studios.map((studio, index) => (
            <motion.div
              key={studio.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <img
                src={studio.logo}
                alt={studio.name}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudiosSection;
