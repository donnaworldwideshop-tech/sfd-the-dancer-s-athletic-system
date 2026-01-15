import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutVideo from "@/assets/about-video.mp4";
import { Volume2, VolumeX } from "lucide-react";

const About = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" });
  const isSection4InView = useInView(section4Ref, { once: true, margin: "-100px" });
  const isSection5InView = useInView(section5Ref, { once: true, margin: "-100px" });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        {/* Hero Section with Video */}
        <section className="section-container mb-16 sm:mb-20 md:mb-28">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3" style={{ color: 'hsl(var(--text-muted))' }}>אודות</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-3 sm:mb-4">
                שחר מיטרה
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                רקדנית מקצועית ומאמנת כוח לרקדנים.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-sm overflow-hidden bg-card shadow-xl">
                <video 
                  ref={videoRef}
                  src={aboutVideo} 
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-auto"
                >
                  הדפדפן שלך לא תומך בתגית וידאו.
                </video>
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground flex items-center justify-center transition-all shadow-lg"
                  aria-label={isMuted ? "הפעל שמע" : "השתק"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Journey - Full Width Background */}
        <section 
          ref={section1Ref}
          className="py-16 sm:py-20 md:py-28 bg-card mb-16 sm:mb-20 md:mb-28"
        >
          <div className="section-container">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <motion.div 
                className="md:col-span-4"
                initial={{ opacity: 0, x: -30 }}
                animate={isSection1InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="sticky top-32">
                  <div className="w-12 h-1 bg-primary mb-6" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                    רקדן הוא אתלט
                  </h2>
                </div>
              </motion.div>
              <motion.div 
                className="md:col-span-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                  <p>
                    אחרי למעלה מעשור כרקדנית מקצועית - בבלט קלאסי ובמחול מודרני, 
                    הבנתי דבר אחד חשוב: רקדן הוא אתלט. והגוף שלו צריך אימון שמדבר בדיוק את השפה הזו.
                  </p>
                  <p>
                    רקדנים עובדים תחת עומסים קיצוניים, דורשים דיוק מוחלט, שליטה גבוהה ותנועה אינטנסיבית יום-יום.
                  </p>
                  <p className="text-foreground font-normal">
                    כשמערכת האימון אינה מותאמת למציאות הזו - הגוף משלם מחיר: 
                    פציעות, חוסר יציבות, ירידה בביצועים ולעיתים גם עצירה בהתפתחות המקצועית.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SFD Birth - With accent border */}
        <section 
          ref={section2Ref}
          className="section-container mb-16 sm:mb-20 md:mb-28"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isSection2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <div className="w-12 h-1 bg-primary mb-6" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                  כך נולד SFD
                </h2>
                <p className="text-sm mt-3" style={{ color: 'hsl(var(--text-muted))' }}>
                  Strength for Dancers
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border-r-4 border-primary pr-6 sm:pr-8 space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                <p>
                  מהצורך האישי שלי נבנתה ההתמחות שלי. 
                  הוסמכתי כמאמנת כושר, מאמנת פילאטיס ומדריכת קטינים, 
                  והתמחיתי באימוני כוח מותאמים לרקדנים - בשיטות מתקדמות מחו״ל ובסטנדרטים מקצועיים מהגבוהים בתחום.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Method - Card style */}
        <section 
          ref={section3Ref}
          className="section-container mb-16 sm:mb-20 md:mb-28"
        >
          <motion.div 
            className="bg-primary text-primary-foreground p-8 sm:p-10 md:p-16 rounded-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <p className="text-xs sm:text-sm font-normal tracking-wide uppercase mb-3 text-primary-foreground/60">
                  השיטה
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                  מערכת אימונים מקצועית ושלמה
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed text-primary-foreground/80">
                <p>
                  מערכת אימוני כוח מקצועית ושלמה, שנבנתה מהגוף הרקדני - החוצה.
                </p>
                <p>
                  זו לא התאמה נקודתית ולא פתרון זמני. 
                  זו דרך עבודה חכמה, עקבית ומעמיקה, שנבנתה במיוחד למאפיינים הפיזיים, 
                  הדרישות הביצועיות והקצב המנטלי של רקדנים.
                </p>
                <p className="text-primary-foreground font-normal">
                  שיטה שמבינה את הגוף הרקדני - ומכבדת אותו.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Approach */}
        <section 
          ref={section4Ref}
          className="section-container mb-16 sm:mb-20 md:mb-28"
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isSection4InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <div className="w-12 h-1 bg-primary mb-6" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                  הגישה שלי
                </h2>
              </div>
            </motion.div>
            <motion.div 
              className="md:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isSection4InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-base sm:text-lg md:text-xl font-light leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                <p>
                  אימוני כוח מדויקים, עם הבנה עמוקה של תנועה ושל הצרכים הייחודיים של כל רקדן, 
                  בונים בסיס חזק, יציב ובטוח - כזה שמאפשר לפרוץ קדימה.
                </p>
                <p>
                  כיום אני עובדת בשיתוף פעולה עם הסטודיואים המובילים בארץ.
                </p>
                <p className="text-foreground font-normal">
                  המטרה שלנו היא לאפשר לכל רקדן לממש את הפוטנציאל שלו - 
                  עם כלים מקצועיים לאימוני כוח שמאפשרים לעבוד חזק, מדויק ובטוח, 
                  לשמור על גוף בריא לאורך זמן ולהגיע להישגים גבוהים כרקדנים.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section ref={section5Ref} className="section-container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isSection5InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/product" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-normal text-base transition-all duration-300 hover:opacity-90 mb-6"
            >
              לערכת האימון
            </Link>
            <div className="pt-8 border-t border-border">
              <Link 
                to="/" 
                className="inline-flex items-center text-sm hover:text-foreground/70 transition-colors"
                style={{ color: 'hsl(var(--text-muted))' }}
              >
                חזרה לעמוד הראשי
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
