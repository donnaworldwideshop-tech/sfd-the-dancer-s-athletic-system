import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import yaelHendel from "@/assets/testimonials/yael-hendel.jpeg";
import orSegev from "@/assets/testimonials/or-segev.jpeg";
import michalBinish from "@/assets/testimonials/michal-binish.jpeg";
import tamarLanger from "@/assets/testimonials/tamar-langer.jpeg";

const testimonials = [
  {
    name: "יעל הנדל",
    title: "רקדנית בת 22, מורה לריקוד",
    image: yaelHendel,
    quote: "מאז שהתחלתי את התכנית התחזקתי ברמות שלא הכרתי קודם. התחטבתי, אני מצליחה להחזיק את העומס של השבוע, ועדיין נשארת עם אנרגיות."
  },
  {
    name: "אור שגב",
    title: "רקדנית בת 18, EDANCE",
    image: orSegev,
    quote: "במהלך עשר השנים שאני רוקדת למדתי טכניקה וסגנונות ריקוד מגוונים, אבל רק בשנתיים האחרונות הבנתי עד כמה אימונים משלימים לרקדנים חיוניים."
  },
  {
    name: "מיכל ביניש",
    title: "רקדנית בת 19, London Studio Centre",
    image: michalBinish,
    quote: "אני הכי שמחה בעולם שהגעתי אלייך. נהניתי בטירוף מכל אימון, שתמיד נגמר בחיוך, ורק חיכיתי כבר לאימון הבא."
  },
  {
    name: "תמר לנגר",
    title: "מתעמלת אומנותית, נבחרת ישראל",
    image: tamarLanger,
    quote: "האימונים עם שחר עזרו לי להתחזק ולהשתפר בדברים שרציתי לעבוד עליהם. שחר מקצועית, נעימה וקשובה."
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
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

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-28 md:py-40 lg:py-52 bg-card" dir="rtl" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-label mb-6">• ביקורות</p>
            <h2 className="text-title">
              מה אומרות הרקדניות
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button 
              onClick={prevTestimonial} 
              className="w-12 h-12 border border-border bg-background hover:border-foreground/30 flex items-center justify-center transition-all duration-300"
              aria-label="ביקורת קודמת"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="w-12 h-12 border border-border bg-background hover:border-foreground/30 flex items-center justify-center transition-all duration-300"
              aria-label="ביקורת הבאה"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>
        </motion.div>

        {/* Testimonial display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              className="grid md:grid-cols-2 gap-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image */}
              <div className="aspect-[4/5] md:aspect-auto relative overflow-hidden bg-muted">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              
              {/* Content */}
              <div className="bg-background p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-normal mb-1">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
                  </div>
                  
                  {/* Dots indicator */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => { setActiveIndex(index); setIsAutoPlaying(false); }}
                        className={`h-1.5 rounded-full transition-all duration-400 ${
                          index === activeIndex 
                            ? 'bg-foreground w-8' 
                            : 'bg-foreground/20 w-1.5 hover:bg-foreground/40'
                        }`}
                        aria-label={`ביקורת ${index + 1}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small testimonial cards - visible on larger screens */}
        <motion.div 
          className="hidden lg:grid grid-cols-4 gap-px mt-px bg-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => { setActiveIndex(index); setIsAutoPlaying(false); }}
              className={`bg-background p-6 text-right transition-all duration-300 ${
                index === activeIndex ? 'bg-muted' : 'hover:bg-muted/50'
              }`}
            >
              <p className="text-sm text-muted-foreground mb-2">{testimonial.title}</p>
              <p className="font-normal">{testimonial.name}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
