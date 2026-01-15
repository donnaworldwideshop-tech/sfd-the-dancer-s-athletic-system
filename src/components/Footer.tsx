import { Link } from "react-router-dom";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" dir="rtl">
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <img 
              src={sfdLogo} 
              alt="SFD - Strength For Dancers" 
              className="h-6 sm:h-7 md:h-8 w-auto mb-4 md:mb-6 invert"
            />
            <p className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed max-w-md">
              שיטת אימון כוח מקצועית ייעודית לרקדנים.
              בונים בסיס כוח שמשרת את התנועה הרקדנית.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 md:mb-6 text-primary-foreground/50">
              ניווט
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              <Link 
                to="/" 
                className="block text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                עמוד הבית
              </Link>
              <Link 
                to="/about" 
                className="block text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                אודות השיטה
              </Link>
              <Link 
                to="/product" 
                className="block text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                ערכת האימון
              </Link>
              <Link 
                to="/auth" 
                className="block text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                אזור אישי
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 md:mb-6 text-primary-foreground/50">
              יצירת קשר
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="mailto:contact@sfd.co.il" 
                className="flex items-center gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@sfd.co.il</span>
              </a>
              <a 
                href="https://instagram.com/strengthfordancers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <span>@strengthfordancers</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/50 text-center sm:text-right">
              © {currentYear} SFD - Strength For Dancers. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-primary-foreground/50">
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