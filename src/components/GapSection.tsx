import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import dancerPose2 from "@/assets/dancer-pose-2.png";

const GapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const categories = [
    { name: "אימוני ליבה", count: "15 סרטונים" },
    { name: "חיזוק רגליים", count: "12 סרטונים" },
    { name: "יציבות ושיווי משקל", count: "10 סרטונים" },
    { name: "גמישות מבוקרת", count: "8 סרטונים" },
    { name: "מניעת פציעות", count: "5 סרטונים" }
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white" dir="rtl" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Video preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] bg-muted overflow-hidden relative group cursor-pointer">
              <img 
                src={dancerPose2} 
                alt="Training video preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground mr-[-2px]" fill="currentColor" />
                </div>
              </div>
            </div>
            {/* Quote below video */}
            <div className="bg-white border-t-0 p-6 border border-border/30">
              <p className="text-sm italic text-muted-foreground mb-2">
                "הסרטונים ברורים ומפורטים, קל מאוד לעקוב"
              </p>
              <p className="text-xs text-muted-foreground">- מיכל, רקדנית מקצועית</p>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label with line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-label">ספריית הסרטונים</span>
              <div className="w-16 h-px bg-border" />
            </div>
            
            <h2 className="text-title mb-2">
              +50 סרטוני
            </h2>
            <div className="text-title-outline mb-8">
              הדרכה מקצועיים
            </div>
            
            <p className="text-body-lg mb-10 max-w-md">
              עם רכישת הערכה תקבלו גישה מלאה לספריית הסרטונים שלנו - הדרכות מפורטות לכל
              תרגיל, עם הסברים מקצועיים והתאמות לרמות שונות.
            </p>
            
            {/* Categories */}
            <div className="space-y-4">
              {categories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="tag-ballet">{category.count}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
