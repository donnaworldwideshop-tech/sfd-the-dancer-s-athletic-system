import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import sfdLogo from "@/assets/sfd-logo-white.svg";
import { User } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { user } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 py-6 px-6 md:px-12 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/">
          <img 
            src={sfdLogo} 
            alt="SFD – Strength For Dancers" 
            className="h-8 md:h-10"
            style={{ width: 'auto', minWidth: '100px' }}
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            to="/product" 
            className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            ערכת האימון
          </Link>
          {isHomePage ? (
            <a 
              href="#contact" 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              צור קשר
            </a>
          ) : (
            <Link 
              to="/#contact" 
              className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              צור קשר
            </Link>
          )}
          <Link 
            to={user ? "/members" : "/auth"} 
            className="flex items-center gap-2 text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            <User className="w-4 h-4" />
            <span className="hidden md:inline">{user ? 'אזור אישי' : 'כניסה'}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;