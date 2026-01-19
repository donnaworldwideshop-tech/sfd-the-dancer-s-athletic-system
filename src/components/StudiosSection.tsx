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
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="flex items-center justify-center gap-12 md:gap-20 lg:gap-28 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {studios.map((studio, index) => (
            <motion.div
              key={studio.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={studio.logo}
                alt={studio.name}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain 
                  opacity-30 grayscale
                  transition-all duration-500 ease-out
                  group-hover:opacity-60 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudiosSection;
