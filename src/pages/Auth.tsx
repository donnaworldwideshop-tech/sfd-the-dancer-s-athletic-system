import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().email('כתובת אימייל לא תקינה');
const passwordSchema = z.string().min(6, 'הסיסמה חייבת להכיל לפחות 6 תווים');

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate('/members');
    }
  }, [user, navigate]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      newErrors.email = emailResult.error.errors[0].message;
    }
    
    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      newErrors.password = passwordResult.error.errors[0].message;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: 'שגיאה בהתחברות',
              description: 'אימייל או סיסמה לא נכונים',
              variant: 'destructive',
            });
          } else {
            toast({
              title: 'שגיאה',
              description: error.message,
              variant: 'destructive',
            });
          }
        } else {
          toast({
            title: 'התחברת בהצלחה',
            description: 'ברוכים הבאים לאזור האישי',
          });
          navigate('/members');
        }
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          if (error.message.includes('already registered')) {
            toast({
              title: 'משתמש קיים',
              description: 'כתובת האימייל הזו כבר רשומה במערכת. נסו להתחבר.',
              variant: 'destructive',
            });
          } else {
            toast({
              title: 'שגיאה בהרשמה',
              description: error.message,
              variant: 'destructive',
            });
          }
        } else {
          toast({
            title: 'נרשמת בהצלחה',
            description: 'ברוכים הבאים לאזור האישי',
          });
          navigate('/members');
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="section-container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-section-title mb-4">
                {isLogin ? 'כניסה לאזור האישי' : 'הרשמה'}
              </h1>
              <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
                {isLogin 
                  ? 'התחברו כדי לצפות בתכני האימון' 
                  : 'הרשמו כדי לגשת לתכני האימון לאחר הרכישה'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">שם מלא</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="הכניסו את שמכם"
                    className="bg-card border-border"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">אימייל</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  placeholder="your@email.com"
                  className="bg-card border-border"
                  dir="ltr"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">סיסמה</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors(prev => ({ ...prev, password: undefined }));
                  }}
                  placeholder="••••••••"
                  className="bg-card border-border"
                  dir="ltr"
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading 
                  ? 'טוען...' 
                  : isLogin 
                    ? 'כניסה' 
                    : 'הרשמה'}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                }}
                className="text-sm hover:text-foreground transition-colors"
                style={{ color: 'hsl(var(--text-muted))' }}
              >
                {isLogin 
                  ? 'אין לכם חשבון? הרשמו כאן' 
                  : 'יש לכם חשבון? התחברו כאן'}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
