import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/about", label: "אודות" },
    { to: "/product", label: "ערכת האימון" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-background/90 backdrop-blur-premium border-b border-border/30" 
          : "py-6 md:py-8 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="section-container flex items-center justify-between">
        
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Right - Menu Toggle */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            className="p-2 -m-2"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" strokeWidth={1} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" strokeWidth={1} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          
          {/* Center Logo */}
          <Link 
            to="/" 
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img 
              src={sfdLogo} 
              alt="SFD" 
              className="h-4"
            />
          </Link>
          
          {/* Left - User */}
          <Link 
            to={user ? "/members" : "/auth"} 
            aria-label={user ? 'אזור אישי' : 'כניסה'}
            className="p-2 -m-2"
          >
            <User className="w-5 h-5 text-foreground/60" strokeWidth={1} />
          </Link>
        </div>

        {/* Desktop Layout */}
        {/* Right - Navigation */}
        <div className="hidden md:flex items-center gap-8" dir="rtl">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-light text-foreground/60 hover:text-foreground transition-colors duration-300 link-hover"
            >
              {link.label}
            </Link>
          ))}
          {isHomePage ? (
            <a 
              href="#contact" 
              className="text-sm font-light text-foreground/60 hover:text-foreground transition-colors duration-300 link-hover"
            >
              צור קשר
            </a>
          ) : (
            <Link 
              to="/#contact" 
              className="text-sm font-light text-foreground/60 hover:text-foreground transition-colors duration-300 link-hover"
            >
              צור קשר
            </Link>
          )}
        </div>

        {/* Center - Logo (Desktop) */}
        <Link 
          to="/" 
          className="hidden md:block absolute left-1/2 -translate-x-1/2"
        >
          <img 
            src={sfdLogo} 
            alt="SFD" 
            className="h-5"
          />
        </Link>

        {/* Left - Contact & User (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to={user ? "/members" : "/auth"} 
            className="flex items-center gap-2 text-sm font-light text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            <span>{user ? 'אזור אישי' : 'כניסה'}</span>
            <User className="w-4 h-4" strokeWidth={1} />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 py-10 space-y-1" dir="rtl">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={link.to} 
                    className="block text-2xl font-extralight text-foreground py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {isHomePage ? (
                  <a 
                    href="#contact" 
                    className="block text-2xl font-extralight text-foreground py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    צור קשר
                  </a>
                ) : (
                  <Link 
                    to="/#contact" 
                    className="block text-2xl font-extralight text-foreground py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    צור קשר
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
