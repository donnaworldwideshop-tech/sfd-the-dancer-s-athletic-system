import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import productKit from "@/assets/product-kit.png";
import { ArrowLeft } from "lucide-react";

const ApplicationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { number: "01", text: "תוכנית אימון מובנית לעבודה שבועית" },
    { number: "02", text: "סרטוני הדגמה לכל תרגיל" },
    { number: "03", text: "הנחיות ברורות לביצוע מדויק" },
    { number: "04", text: "גישה מלאה לתכנים מכל מכשיר" }
  ];

  return (
    <section className="py-28 md:py-40 lg:py-52" dir="rtl" ref={ref}>
      <div className="section-container">
        {/* Main grid - Image and description */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28 md:mb-40">
          {/* Product Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-card p-8 md:p-12 lg:p-16">
              <img 
                src={productKit} 
                alt="SFD Training Kit" 
                className="w-full"
              />
            </div>
          </motion.div>
          
          {/* Description */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-label mb-8">• איך זה עובד</p>
            <h2 className="text-title mb-10 text-balance">
              השיטה מיושמת באמצעות ערכת אימון
              <span className="block text-foreground/40">פיזית ותכנים דיגיטליים.</span>
            </h2>
            <p className="text-body-lg mb-8 max-w-md">
              ערכת האימון כוללת ציוד פיזי ייעודי לעבודה לפי השיטה.
              התרגול מונחה באמצעות סרטוני הדגמה ברורים,
              ומאפשר עבודה עצמאית, מדויקת ובטוחה.
            </p>
            <Link 
              to="/product" 
              className="inline-flex items-center gap-3 text-sm hover:text-foreground transition-colors duration-300 group"
            >
              <span>לפרטים נוספים על הערכה</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <span className="text-4xl md:text-5xl font-extralight text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500 block mb-6 number-display">
                {feature.number}
              </span>
              <p className="text-body text-foreground">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationSection;
