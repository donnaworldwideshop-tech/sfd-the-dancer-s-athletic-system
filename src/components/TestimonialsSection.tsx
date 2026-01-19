import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import yaelHendel from "@/assets/testimonials/yael-hendel.jpeg";
import orSegev from "@/assets/testimonials/or-segev.jpeg";
import michalBinish from "@/assets/testimonials/michal-binish.jpeg";
import tamarLanger from "@/assets/testimonials/tamar-langer.jpeg";

const testimonials = [
  {
    name: "יעל הנדל",
    title: "רקדנית בת 22, מורה לריקוד, זמרת ושחקנית",
    image: yaelHendel,
    quote: "מאז שהתחלתי את התכנית התחזקתי ברמות שלא הכרתי קודם. התחטבתי, אני מצליחה להחזיק את העומס של השבוע, ועדיין נשארת עם אנרגיות. פתאום הרגל עולה לגובה שתמיד רציתי בארבסק.",
    extended: "שנים הייתי רוקדת בסטודיו ומרגישה שמשהו חסר. בדיעבד אני מבינה שחוץ משיעורים בסטודיו לא עשיתי אימוני חיזוק."
  },
  {
    name: "אור שגב",
    title: "רקדנית בת 18, רוקדת בסטודיו EDANCE",
    image: orSegev,
    quote: "במהלך עשר השנים שאני רוקדת למדתי טכניקה וסגנונות ריקוד מגוונים, אבל רק בשנתיים האחרונות הבנתי עד כמה אימונים משלימים לרקדנים חיוניים לגוף שלי.",
    extended: "האימונים עזרו לי להתאושש מפציעות מהר יותר, ללמוד על הגוף שלי ועל היכולות שלו, ולמנוע פציעות עתידיות."
  },
  {
    name: "מיכל ביניש",
    title: "רקדנית בת 19, לומדת ב-London Studio Centre",
    image: michalBinish,
    quote: "אני הכי שמחה בעולם שהגעתי אלייך. נהניתי בטירוף מכל אימון, שתמיד נגמר בחיוך, ורק חיכיתי כבר לאימון הבא.",
    extended: "בכל אימון הרגשתי מאה אחוז אכפתיות ותשומת לב לפרטים הקטנים. תמיד הרגשתי שאת רואה אותי באמת."
  },
  {
    name: "תמר לנגר",
    title: "מתעמלת אומנותית בת 15, נבחרת ישראל",
    image: tamarLanger,
    quote: "האימונים עם שחר עזרו לי להתחזק ולהשתפר בדברים שרציתי לעבוד עליהם. שחר מקצועית, נעימה וקשובה, והרגשתי שיש מי שמלווה אותי בצורה מדויקת.",
    extended: ""
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  // Auto-advance on mobile
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 bg-card relative" dir="rtl" ref={ref}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto relative">
        <motion.div 
          className="mb-14 md:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-eyebrow mb-4">ביקורות</p>
            <h2 className="text-section-title">
              מה אומרות <span className="text-foreground/50">הרקדניות</span>
            </h2>
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={prevTestimonial} 
              className="w-12 h-12 rounded-full border border-border bg-background hover:border-foreground/30 hover:bg-foreground/5 flex items-center justify-center transition-all duration-300 group"
              aria-label="ביקורת קודמת"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="w-12 h-12 rounded-full border border-border bg-background hover:border-foreground/30 hover:bg-foreground/5 flex items-center justify-center transition-all duration-300 group"
              aria-label="ביקורת הבאה"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* Desktop Grid - 2x2 */}
        <motion.div 
          className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group bg-background rounded-xl border border-border relative overflow-hidden 
                transition-all duration-500 hover:border-foreground/15 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="flex flex-col lg:flex-row lg:items-stretch">
                {/* Image */}
                <div className="lg:w-2/5 aspect-[4/5] relative overflow-hidden flex-none">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5 p-7 lg:p-8 relative flex flex-col">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-foreground/[0.06] absolute top-6 left-6" strokeWidth={1} />
                  
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className="text-lg font-medium mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="flex-1">
                    <p className="text-base font-light leading-[1.8] text-foreground/80 mb-4">
                      "{testimonial.quote}"
                    </p>
                    {testimonial.extended && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {testimonial.extended}
                      </p>
                    )}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel - Premium */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex} 
              className="bg-background rounded-xl border border-border overflow-hidden shadow-sm"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <Quote className="w-6 h-6 text-foreground/[0.06] absolute top-5 left-5" strokeWidth={1} />
                
                <div className="mb-4">
                  <h3 className="text-base font-medium mb-1">{testimonials[activeIndex].name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonials[activeIndex].title}</p>
                </div>
                
                <p className="text-sm font-light leading-relaxed text-foreground/80">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevTestimonial} 
              className="w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="ביקורת קודמת"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => { setActiveIndex(index); setIsAutoPlaying(false); }}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    index === activeIndex 
                      ? 'bg-foreground w-8' 
                      : 'bg-foreground/20 w-2 hover:bg-foreground/40'
                  }`}
                  aria-label={`ביקורת ${index + 1}`} 
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className="w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="ביקורת הבאה"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;