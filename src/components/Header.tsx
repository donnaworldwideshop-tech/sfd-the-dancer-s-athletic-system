import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/about", label: "אודות" },
    { to: "/product", label: "ערכת האימון" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 py-4 sm:py-6 px-4 sm:px-6 md:px-12 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img 
            src={sfdLogo} 
            alt="SFD – Strength For Dancers" 
            className="h-4 sm:h-5 md:h-6"
            style={{ width: 'auto', minWidth: '100px' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {isHomePage ? (
            <a 
              href="#contact" 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors"
            >
              צור קשר
            </a>
          ) : (
            <Link 
              to="/#contact" 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors"
            >
              צור קשר
            </Link>
          )}
          <Link 
            to={user ? "/members" : "/auth"} 
            className="flex items-center gap-2 text-sm font-normal text-foreground/70 hover:text-foreground transition-colors"
          >
            <User className="w-4 h-4" />
            <span>{user ? 'אזור אישי' : 'כניסה'}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="px-4 py-6 space-y-4" dir="rtl">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="block text-base font-normal text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isHomePage ? (
              <a 
                href="#contact" 
                className="block text-base font-normal text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </a>
            ) : (
              <Link 
                to="/#contact" 
                className="block text-base font-normal text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </Link>
            )}
            <div className="pt-4 border-t border-border">
              <Link 
                to={user ? "/members" : "/auth"} 
                className="flex items-center gap-2 text-base font-normal text-foreground py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>{user ? 'אזור אישי' : 'כניסה'}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;