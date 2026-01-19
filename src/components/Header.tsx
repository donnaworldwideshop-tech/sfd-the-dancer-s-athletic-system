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
    { to: "/about", label: "השיטה" },
    { to: "/product", label: "הערכה" },
    { to: "/#testimonials", label: "יתרונות" },
    { to: "/#contact", label: "צור קשר" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-white/95 backdrop-blur-sm border-b border-border/50" 
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="section-container flex items-center justify-between" dir="rtl">
        
        {/* Logo */}
        <Link to="/" className="z-10">
          <img 
            src={sfdLogo} 
            alt="SFD" 
            className="h-6 md:h-7"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Link 
          to="/product" 
          className="hidden md:inline-flex btn-primary py-3 px-6 text-xs"
        >
          לרכישת הערכה
        </Link>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -m-2 z-10"
          whileTap={{ scale: 0.95 }}
          aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
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
                <X className="w-6 h-6" strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-0 bg-white z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8" dir="rtl">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-2xl font-light text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link 
                  to="/product" 
                  className="btn-primary mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  לרכישת הערכה
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
