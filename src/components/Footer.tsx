import { Link } from "react-router-dom";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" dir="rtl">
      <div className="section-container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src={sfdLogo} 
              alt="SFD" 
              className="h-5 w-auto mb-6 invert opacity-80" 
            />
            <p className="text-background/50 font-light max-w-sm">
              שיטת אימון כוח מקצועית ייעודית לרקדנים.
              בונים בסיס כוח שמשרת את התנועה הרקדנית.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-background/30 mb-6">ניווט</p>
            <nav className="space-y-4">
              {[
                { to: "/", label: "עמוד הבית" }, 
                { to: "/about", label: "אודות" }, 
                { to: "/product", label: "ערכת האימון" }, 
                { to: "/auth", label: "אזור אישי" }
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="block text-sm text-background/50 hover:text-background transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-background/30 mb-6">יצירת קשר</p>
            <div className="space-y-4">
              <a 
                href="mailto:contact@sfd.co.il" 
                className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors duration-300"
              >
                <Mail className="w-4 h-4" strokeWidth={1} />
                <span>contact@sfd.co.il</span>
              </a>
              <a 
                href="https://instagram.com/strengthfordancers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1} />
                <span>@strengthfordancers</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/30">
              © {currentYear} SFD - Strength For Dancers. כל הזכויות שמורות.
            </p>
            <div className="flex items-center gap-8 text-xs text-background/30">
              <Link to="/terms" className="hover:text-background/50 transition-colors duration-300">
                תנאי שימוש
              </Link>
              <Link to="/privacy" className="hover:text-background/50 transition-colors duration-300">
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
