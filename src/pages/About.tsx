import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="section-container mb-20">
          <div className="max-w-3xl">
            <p className="text-caption mb-4 opacity-0 fade-in-up">אודות</p>
            <h1 className="text-hero-display mb-8 opacity-0 fade-in-up stagger-1">
              שיטת SFD
            </h1>
            <p className="text-body-large opacity-0 fade-in-up stagger-2" style={{ color: 'hsl(var(--text-secondary))' }}>
              שיטה מקצועית לאימון כוח ייעודי לרקדנים.
            </p>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* Why the Method */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-section-title mb-6">למה השיטה פותחה</h2>
            </div>
            <div className="space-y-6 text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              <p>
                עולם הריקוד מכיר בחשיבות האימון הגופני, אבל לרוב מציע 
                פתרונות שאינם מותאמים לצרכים הספציפיים של רקדנים.
              </p>
              <p>
                אימוני כוח קונבנציונליים לא תוכננו לדרישות הייחודיות של ריקוד –
                טווחי תנועה קיצוניים, שליטה במהירויות משתנות, ויציבות דינמית.
              </p>
              <p>
                שיטת SFD פותחה כדי לגשר על הפער הזה:
                להציע מסגרת אימון מקצועית שמדברת את שפת הגוף של הרקדן.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* The Gap */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-section-title mb-6">הפער המקצועי</h2>
            </div>
            <div className="space-y-6 text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              <p>
                רקדנים רבים מתאמנים שנים ללא בסיס כוח מתאים.
                התוצאה: פציעות חוזרות, תחושת חוסר יציבות, ומגבלות טכניות שלא נפתרות.
              </p>
              <p>
                הבעיה אינה חוסר מאמץ – אלא חוסר כלים מקצועיים.
                אימון כוח לרקדנים דורש הבנה מעמיקה של הגוף הרוקד,
                לא רק של עקרונות כושר כלליים.
              </p>
              <p>
                השיטה נבנתה על בסיס הבנה זו, ומציעה כלי עבודה פרקטי
                שמשתלב לצד שיעורי הריקוד – לא במקומם.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* About Shahar */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-section-title mb-6">שחר מיטרה</h2>
              <p className="text-caption">מפתחת השיטה</p>
            </div>
            <div className="space-y-6 text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              <p>
                שחר מיטרה פיתחה את שיטת SFD מתוך עבודה מעשית עם רקדנים
                ומתוך הבנת הפער בין עולם האימון לעולם הריקוד.
              </p>
              <p>
                השיטה מבוססת על ידע מקצועי באימון כוח, ביומכניקה,
                ועל הכרות עמוקה עם הדרישות הגופניות של הריקוד.
              </p>
              <p>
                המטרה: להנגיש כלי עבודה מקצועי לרקדנים שרוצים לבנות
                בסיס כוח איכותי – בצורה עצמאית, בטוחה ומדויקת.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="section-container">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm hover:text-foreground/70 transition-colors"
            style={{ color: 'hsl(var(--text-muted))' }}
          >
            חזרה לעמוד הראשי
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
