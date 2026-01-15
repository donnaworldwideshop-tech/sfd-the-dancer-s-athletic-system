import sfdLogo from "@/assets/sfd-logo-white.svg";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 py-6 px-6 md:px-12 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <img 
          src={sfdLogo} 
          alt="SFD – Strength For Dancers" 
          className="h-8 md:h-10"
          style={{ width: 'auto', minWidth: '100px' }}
        />
        <a 
          href="#contact" 
          className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors duration-300"
        >
          צור קשר
        </a>
      </nav>
    </header>
  );
};

export default Header;