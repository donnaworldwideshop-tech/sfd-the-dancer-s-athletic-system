import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import productKit from "@/assets/product-kit.png";

const Product = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-caption mb-4 opacity-0 fade-in-up">ערכת האימון</p>
              <h1 className="text-hero-display mb-8 opacity-0 fade-in-up stagger-1">
                SFD Training Kit
              </h1>
              <p className="text-body-large opacity-0 fade-in-up stagger-2" style={{ color: 'hsl(var(--text-secondary))' }}>
                כלי עבודה מקצועי ליישום שיטת SFD –
                <br />
                אימון כוח ייעודי לרקדנים.
              </p>
            </div>
            <div className="opacity-0 fade-in-up stagger-3">
              <img 
                src={productKit} 
                alt="SFD Training Kit - ערכת האימון" 
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* What's Included */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-section-title mb-6">מה כוללת הערכה</h2>
              <p className="text-body mb-8" style={{ color: 'hsl(var(--text-secondary))' }}>
                ערכת האימון כוללת את הציוד הפיזי הדרוש לעבודה לפי השיטה,
                יחד עם גישה מלאה לתכנים דיגיטליים מלווים.
              </p>
            </div>
            <div className="space-y-8">
              <div className="p-6 bg-card rounded-sm border border-border">
                <h3 className="text-lg font-normal mb-3">ציוד פיזי</h3>
                <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                  ציוד אימון ייעודי שנבחר במיוחד לעבודה לפי שיטת SFD.
                  הציוד מאפשר ביצוע מדויק של התרגילים בכל סביבה.
                </p>
              </div>
              <div className="p-6 bg-card rounded-sm border border-border">
                <h3 className="text-lg font-normal mb-3">גישה דיגיטלית</h3>
                <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                  גישה מיידית לסרטוני הדגמה, תוכנית אימון מובנית,
                  והנחיות מפורטות לביצוע נכון של כל תרגיל.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* Digital Content Details */}
        <section className="section-container mb-20">
          <h2 className="text-section-title mb-10">התכנים הדיגיטליים</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "תוכנית אימון", desc: "מבנה שבועי ברור לעבודה עצמאית" },
              { title: "סרטוני הדגמה", desc: "הדגמה מפורטת לכל תרגיל בשיטה" },
              { title: "הנחיות ביצוע", desc: "הסברים לביצוע מדויק ובטוח" },
              { title: "גישה מכל מכשיר", desc: "צפייה בתכנים בכל זמן ומקום" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-secondary/30 rounded-sm"
              >
                <h3 className="text-base font-normal mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* How It Works */}
        <section className="section-container mb-20">
          <div className="max-w-3xl">
            <h2 className="text-section-title mb-6">איך עובדים עם הערכה</h2>
            <div className="space-y-6 text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              <p>
                ערכת האימון נועדה לשילוב לצד שיעורי הריקוד – לא במקומם.
                התוכנית מאפשרת עבודה עצמאית, שבועית, בקצב שמתאים לך.
              </p>
              <p>
                הציוד הפיזי משמש לביצוע התרגילים.
                סרטוני ההדגמה מנחים את הביצוע הנכון.
                התוכנית המובנית מארגנת את העבודה לאורך השבוע.
              </p>
              <p>
                אין צורך בידע מוקדם באימון כוח –
                ההנחיות מפורטות ומאפשרות עבודה עצמאית מהיום הראשון.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* Who Is It For */}
        <section className="section-container mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-section-title mb-6">למי הערכה מתאימה</h2>
              <div className="space-y-4 text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                <p>• רקדנים שרוצים לבנות בסיס כוח מקצועי</p>
                <p>• רקדנים מתקדמים שמחפשים לחזק ולייצב את הגוף</p>
                <p>• רקדנים שחווים פציעות חוזרות או תחושת חוסר יציבות</p>
                <p>• מורים לריקוד שמבקשים כלי עבודה לתלמידים</p>
              </div>
            </div>
            <div>
              <h2 className="text-section-title mb-6">למי הערכה לא מתאימה</h2>
              <div className="space-y-4 text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                <p>• מי שמחפש תוכנית אימון כושר כללית</p>
                <p>• מי שמצפה לליווי אישי או אימון פרטי</p>
                <p>• מי שזקוק לפיקוח רפואי או שיקומי</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* Pricing & Purchase */}
        <section className="section-container mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section-title mb-4">ערכת האימון</h2>
            <p className="text-body mb-8" style={{ color: 'hsl(var(--text-secondary))' }}>
              רכישה אחת. גישה מלאה. ציוד + תכנים דיגיטליים.
            </p>
            
            <div className="p-8 bg-card rounded-sm border border-border mb-8">
              <div className="text-4xl font-light mb-2">₪450</div>
              <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>כולל מע"מ ומשלוח</p>
            </div>

            <button 
              className="btn-primary w-full md:w-auto mb-4"
              onClick={() => {
                // Placeholder for future payment integration
                alert('מערכת התשלום תחובר בקרוב');
              }}
            >
              לרכישת הערכה
              <ArrowRight className="mr-2 h-4 w-4" />
            </button>
            
            <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
              לאחר הרכישה תקבלו גישה מיידית לתכנים הדיגיטליים.
              <br />
              הציוד הפיזי יישלח תוך 3-5 ימי עסקים.
            </p>
          </div>
        </section>

        <div className="divider-line section-container mb-20" />

        {/* Shipping Info */}
        <section className="section-container mb-20">
          <h2 className="text-section-title mb-8">משלוח ואספקה</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-normal mb-3">משלוח בישראל</h3>
              <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                משלוח חינם לכל הארץ.
                <br />
                זמן אספקה: 3-5 ימי עסקים.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal mb-3">גישה דיגיטלית</h3>
              <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                מיד לאחר הרכישה תקבלו גישה לתכנים הדיגיטליים באמצעות מייל.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal mb-3">שאלות?</h3>
              <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                לכל שאלה ניתן לפנות אלינו בעמוד הבית.
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

export default Product;
