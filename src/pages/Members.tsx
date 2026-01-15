import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Lock } from 'lucide-react';

// Video library organized by training purpose
const videoCategories = [
  {
    id: 'foundations',
    title: 'יסודות התנועה',
    description: 'תרגילי בסיס לבניית יציבות ושליטה',
    videos: [
      { id: 'f1', title: 'יציבות מרכז הגוף', duration: '8:30' },
      { id: 'f2', title: 'שליטה בברכיים', duration: '7:15' },
      { id: 'f3', title: 'עבודה על הקרסוליים', duration: '6:45' },
    ]
  },
  {
    id: 'upper-body',
    title: 'פלג גוף עליון',
    description: 'חיזוק כתפיים, ידיים וגב עליון',
    videos: [
      { id: 'u1', title: 'יציבות כתפיים', duration: '9:00' },
      { id: 'u2', title: 'כוח ידיים', duration: '7:30' },
      { id: 'u3', title: 'גמישות גב עליון', duration: '8:15' },
    ]
  },
  {
    id: 'lower-body',
    title: 'פלג גוף תחתון',
    description: 'חיזוק רגליים, ירכיים ואגן',
    videos: [
      { id: 'l1', title: 'כוח ירכיים', duration: '10:00' },
      { id: 'l2', title: 'יציבות אגן', duration: '8:45' },
      { id: 'l3', title: 'עבודה על כפות הרגליים', duration: '6:00' },
    ]
  },
  {
    id: 'integration',
    title: 'תנועה משולבת',
    description: 'תרגילים המשלבים את כל הגוף',
    videos: [
      { id: 'i1', title: 'רצפי תנועה', duration: '12:00' },
      { id: 'i2', title: 'קואורדינציה', duration: '9:30' },
      { id: 'i3', title: 'שילוב נשימה ותנועה', duration: '7:00' },
    ]
  },
];

const Members = () => {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">טוען...</div>
      </div>
    );
  }

  const hasPurchased = profile?.has_purchased ?? false;

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="section-container mb-16">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-caption mb-2">אזור אישי</p>
              <h1 className="text-section-title mb-2">
                {profile?.full_name ? `שלום, ${profile.full_name}` : 'ספריית האימון'}
              </h1>
              <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                סרטוני הדגמה לביצוע נכון ובטוח של התרגילים
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="text-sm hover:text-foreground transition-colors"
              style={{ color: 'hsl(var(--text-muted))' }}
            >
              התנתקות
            </button>
          </div>
        </section>

        {!hasPurchased && (
          <>
            <div className="divider-line section-container mb-16" />
            
            {/* Locked State Message */}
            <section className="section-container mb-16">
              <div className="p-8 bg-card rounded-sm border border-border text-center">
                <Lock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-normal mb-3">התכנים נעולים</h2>
                <p className="text-body mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
                  הגישה לסרטוני האימון נפתחת לאחר רכישת ערכת האימון
                </p>
                <Link to="/product" className="btn-primary inline-flex">
                  לרכישת הערכה
                </Link>
              </div>
            </section>
          </>
        )}

        <div className="divider-line section-container mb-16" />

        {/* Video Library */}
        <section className="section-container">
          <div className="space-y-16">
            {videoCategories.map((category) => (
              <div key={category.id}>
                <div className="mb-8">
                  <h2 className="text-xl font-normal mb-2">{category.title}</h2>
                  <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.videos.map((video) => (
                    <div
                      key={video.id}
                      className={`group relative p-6 bg-card rounded-sm border border-border transition-all duration-300 ${
                        hasPurchased 
                          ? 'hover:border-foreground/30 cursor-pointer' 
                          : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-normal mb-1">{video.title}</h3>
                          <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
                            {video.duration}
                          </p>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          hasPurchased 
                            ? 'bg-foreground/10 group-hover:bg-foreground/20' 
                            : 'bg-muted'
                        }`}>
                          {hasPurchased ? (
                            <Play className="w-4 h-4" />
                          ) : (
                            <Lock className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Note */}
        <section className="section-container mt-20">
          <div className="p-6 bg-secondary/30 rounded-sm">
            <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
              <strong className="text-foreground">הערה חשובה:</strong>{' '}
              הסרטונים מיועדים להנחיה לביצוע נכון ובטוח של השיטה.
              הם אינם מהווים תחליף לאימון בסטודיו או ליווי מקצועי.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Members;
