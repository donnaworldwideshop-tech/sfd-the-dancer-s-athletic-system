import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "יעל הנדל",
    title: "רקדנית בת 22, מורה לריקוד, זמרת ושחקנית",
    quote: "מאז שהתחלתי את התכנית התחזקתי ברמות שלא הכרתי קודם. התחטבתי, אני מצליחה להחזיק את העומס של השבוע, ועדיין נשארת עם אנרגיות. פתאום הרגל עולה לגובה שתמיד רציתי בארבסק, אני מחזיקה את הגוף, ויכולה לתת מאה אחוז בכל אימון ובכל חזרה.",
    extended: "שנים הייתי רוקדת בסטודיו ומרגישה שמשהו חסר. בדיעבד אני מבינה שחוץ משיעורים בסטודיו לא עשיתי אימוני חיזוק, וזה הוביל לא פעם לקריסה של הגוף."
  },
  {
    name: "אור שגב",
    title: "רקדנית בת 18, רוקדת בסטודיו EDANCE",
    quote: "במהלך עשר השנים שאני רוקדת למדתי טכניקה וסגנונות ריקוד מגוונים, אבל רק בשנתיים האחרונות הבנתי עד כמה אימונים משלימים לרקדנים חיוניים לגוף שלי.",
    extended: "האימונים עזרו לי להתאושש מפציעות מהר יותר, ללמוד על הגוף שלי ועל היכולות שלו, ולמנוע פציעות עתידיות. היום אני בטוחה שהאימונים האלה הם השקעה בעתיד שלי כרקדנית."
  },
  {
    name: "מיכל ביניש",
    title: "רקדנית בת 19, לומדת ב-London Studio Centre",
    quote: "אני הכי שמחה בעולם שהגעתי אלייך. נהניתי בטירוף מכל אימון, שתמיד נגמר בחיוך, ורק חיכיתי כבר לאימון הבא. למדתי ממך המון – התחזקתי, צברתי ידע על החזקת הגוף.",
    extended: "בכל אימון הרגשתי מאה אחוז אכפתיות ותשומת לב לפרטים הקטנים. כל שאלה שהייתה לי הוסברה בצורה ברורה, ותמיד הרגשתי שאת רואה אותי באמת."
  },
  {
    name: "תמר לנגר",
    title: "מתעמלת אומנותית בת 15, נבחרת ישראל",
    quote: "האימונים עם שחר עזרו לי להתחזק ולהשתפר בדברים שרציתי לעבוד עליהם. שחר מקצועית, נעימה וקשובה, והרגשתי שיש מי שמלווה אותי בצורה מדויקת.",
    extended: ""
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing bg-card" dir="rtl" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="mb-16 flex items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-caption mb-4">ביקורות</p>
            <h2 className="text-section-title">מה אומרות הרקדניות</h2>
          </div>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground/50 flex items-center justify-center transition-colors"
              aria-label="ביקורת קודמת"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground/50 flex items-center justify-center transition-colors"
              aria-label="ביקורת הבאה"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="p-8 bg-background rounded-sm border border-border relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-foreground/10 absolute top-6 left-6" />
              
              <div className="mb-6">
                <h3 className="text-lg font-normal mb-1">{testimonial.name}</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                  {testimonial.title}
                </p>
              </div>
              
              <blockquote className="space-y-4">
                <p className="text-body leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {testimonial.quote}
                </p>
                {testimonial.extended && (
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--text-muted))' }}>
                    {testimonial.extended}
                  </p>
                )}
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div 
            className="p-6 bg-background rounded-sm border border-border relative overflow-hidden"
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Quote className="w-8 h-8 text-foreground/10 absolute top-4 left-4" />
            
            <div className="mb-6">
              <h3 className="text-lg font-normal mb-1">{testimonials[activeIndex].name}</h3>
              <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                {testimonials[activeIndex].title}
              </p>
            </div>
            
            <blockquote>
              <p className="text-body leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                {testimonials[activeIndex].quote}
              </p>
            </blockquote>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground/50 flex items-center justify-center transition-colors"
              aria-label="ביקורת קודמת"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-foreground' : 'bg-foreground/20'
                  }`}
                  aria-label={`ביקורת ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-border hover:border-foreground/50 flex items-center justify-center transition-colors"
              aria-label="ביקורת הבאה"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;