import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 sm:py-28 md:py-36 lg:py-44 bg-card" dir="rtl" ref={ref}>
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto">
        <motion.div 
          className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div>
            <p className="text-caption mb-4">ביקורות</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2]">מה אומרות הרקדניות</h2>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button onClick={prevTestimonial} className="w-11 h-11 rounded-full border border-border bg-background hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="ביקורת קודמת">
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button onClick={nextTestimonial} className="w-11 h-11 rounded-full border border-border bg-background hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-all duration-300 hover:scale-105" aria-label="ביקורת הבאה">
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="bg-background rounded-sm border border-border relative overflow-hidden transition-all duration-500 hover:border-primary/25 hover:shadow-lg hover:translate-y-[-4px] group" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}>
              <div className="flex flex-col lg:flex-row lg:items-start">
                <div className="lg:w-2/5 aspect-square relative overflow-hidden flex-none img-zoom">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="lg:w-3/5 p-6 lg:p-7 relative">
                  <Quote className="w-6 h-6 text-primary/15 absolute top-5 left-5" strokeWidth={1.5} />
                  <div className="mb-4">
                    <h3 className="text-lg font-normal mb-1">{testimonial.name}</h3>
                    <p className="text-xs" style={{ color: 'hsl(var(--text-muted))' }}>{testimonial.title}</p>
                  </div>
                  <blockquote className="space-y-3">
                    <p className="text-sm lg:text-base font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>"{testimonial.quote}"</p>
                    {testimonial.extended && <p className="text-xs leading-relaxed" style={{ color: 'hsl(var(--text-muted))' }}>{testimonial.extended}</p>}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} className="bg-background rounded-sm border border-border overflow-hidden" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}>
              <div className="aspect-[4/3] overflow-hidden img-zoom">
                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 relative">
                <Quote className="w-5 h-5 text-primary/15 absolute top-5 left-5" strokeWidth={1.5} />
                <div className="mb-4">
                  <h3 className="text-base font-normal mb-1">{testimonials[activeIndex].name}</h3>
                  <p className="text-xs" style={{ color: 'hsl(var(--text-muted))' }}>{testimonials[activeIndex].title}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>"{testimonials[activeIndex].quote}"</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-5 mt-8">
            <button onClick={prevTestimonial} className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 active:scale-95" aria-label="ביקורת קודמת"><ChevronRight className="w-4 h-4" strokeWidth={1.5} /></button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (<button key={index} onClick={() => setActiveIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-6' : 'bg-primary/20 w-2'}`} aria-label={`ביקורת ${index + 1}`} />))}
            </div>
            <button onClick={nextTestimonial} className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 active:scale-95" aria-label="ביקורת הבאה"><ChevronLeft className="w-4 h-4" strokeWidth={1.5} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;