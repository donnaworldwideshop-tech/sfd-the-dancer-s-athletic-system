import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import sfdLogo from "@/assets/sfd-header-logo.svg";
import { User, Menu, X, ShoppingBag } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/about", label: "אודות" },
    { to: "/product", label: "ערכת האימון" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 bg-background ${
        isScrolled 
          ? "py-3 border-b border-border shadow-sm" 
          : "py-4 md:py-6"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Left Icons - Shopping & User */}
          <div className="flex items-center gap-4">
            <Link 
              to="/product" 
              aria-label="ערכת האימון"
              className="p-2 -m-2 transition-transform duration-300 hover:scale-110"
            >
              <ShoppingBag className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
            </Link>
            <Link 
              to={user ? "/members" : "/auth"} 
              aria-label={user ? 'אזור אישי' : 'כניסה'}
              className="p-2 -m-2 transition-transform duration-300 hover:scale-110"
            >
              <User className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
            </Link>
          </div>
          
          {/* Center Logo */}
          <Link 
            to="/" 
            className="absolute left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={sfdLogo} 
              alt="SFD - Strength For Dancers" 
              className="h-5"
              style={{ width: 'auto' }}
            />
          </Link>
          
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
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Desktop Layout */}
        <Link 
          to="/" 
          className="hidden md:block transition-all duration-300 hover:opacity-70"
        >
          <img 
            src={sfdLogo} 
            alt="SFD - Strength For Dancers" 
            className="h-5 md:h-6"
            style={{ width: 'auto', minWidth: '100px' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300 link-underline"
            >
              {link.label}
            </Link>
          ))}
          {isHomePage ? (
            <a 
              href="#contact" 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300 link-underline"
            >
              צור קשר
            </a>
          ) : (
            <Link 
              to="/#contact" 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300 link-underline"
            >
              צור קשר
            </Link>
          )}
          <Link 
            to={user ? "/members" : "/auth"} 
            className="flex items-center gap-2 text-sm font-normal text-foreground/70 hover:text-foreground transition-all duration-300 group"
          >
            <User className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <span>{user ? 'אזור אישי' : 'כניסה'}</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-premium border-b border-border overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 py-8 space-y-1" dir="rtl">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={link.to} 
                    className="block text-lg font-light text-foreground/80 hover:text-foreground transition-colors py-3"
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
                    className="block text-lg font-light text-foreground/80 hover:text-foreground transition-colors py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    צור קשר
                  </a>
                ) : (
                  <Link 
                    to="/#contact" 
                    className="block text-lg font-light text-foreground/80 hover:text-foreground transition-colors py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    צור קשר
                  </Link>
                )}
              </motion.div>
              <motion.div 
                className="pt-6 mt-4 border-t border-border/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link 
                  to={user ? "/members" : "/auth"} 
                  className="flex items-center gap-3 text-lg font-light text-foreground py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5" strokeWidth={1.5} />
                  <span>{user ? 'אזור אישי' : 'כניסה'}</span>
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