import { Link } from "react-router-dom";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" dir="rtl">
      <div className="section-container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src={sfdLogo} 
              alt="SFD – Strength For Dancers" 
              className="h-8 w-auto mb-6 invert"
            />
            <p className="text-primary-foreground/70 text-base leading-relaxed max-w-md">
              שיטת אימון כוח מקצועית ייעודית לרקדנים.
              בונים בסיס כוח שמשרת את התנועה הרקדנית.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-primary-foreground/50">
              ניווט
            </h4>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                עמוד הבית
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                אודות השיטה
              </Link>
              <Link 
                to="/product" 
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                ערכת האימון
              </Link>
              <Link 
                to="/auth" 
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                אזור אישי
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-primary-foreground/50">
              יצירת קשר
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:contact@sfd.co.il" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@sfd.co.il</span>
              </a>
              <a 
                href="https://instagram.com/strengthfordancers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@strengthfordancers</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} SFD – Strength For Dancers. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/50">
              <Link to="/terms" className="hover:text-primary-foreground/70 transition-colors">
                תנאי שימוש
              </Link>
              <Link to="/privacy" className="hover:text-primary-foreground/70 transition-colors">
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;