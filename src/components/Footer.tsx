import { Link } from "react-router-dom";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden" dir="rtl">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          <div className="sm:col-span-2">
            <img src={sfdLogo} alt="SFD - Strength For Dancers" className="h-6 md:h-7 w-auto mb-5 md:mb-6 invert" />
            <p className="text-primary-foreground/60 text-sm sm:text-base leading-relaxed max-w-md">
              שיטת אימון כוח מקצועית ייעודית לרקדנים.
              בונים בסיס כוח שמשרת את התנועה הרקדנית.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-5 md:mb-6 text-primary-foreground/40">ניווט</h4>
            <nav className="space-y-3">
              {[{ to: "/", label: "עמוד הבית" }, { to: "/about", label: "אודות השיטה" }, { to: "/product", label: "ערכת האימון" }, { to: "/auth", label: "אזור אישי" }].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">{link.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-5 md:mb-6 text-primary-foreground/40">יצירת קשר</h4>
            <div className="space-y-4">
              <a href="mailto:contact@sfd.co.il" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 group">
                <Mail className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <span>contact@sfd.co.il</span>
              </a>
              <a href="https://instagram.com/strengthfordancers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 group">
                <Instagram className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <span>@strengthfordancers</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/40 text-center sm:text-right">© {currentYear} SFD - Strength For Dancers. כל הזכויות שמורות.</p>
            <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
              <Link to="/terms" className="hover:text-primary-foreground/60 transition-colors duration-300">תנאי שימוש</Link>
              <Link to="/privacy" className="hover:text-primary-foreground/60 transition-colors duration-300">מדיניות פרטיות</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;