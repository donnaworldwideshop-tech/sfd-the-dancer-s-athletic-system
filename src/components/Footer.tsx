import sfdLogoBlack from "@/assets/sfd-logo-black.png";

const Footer = () => {
  return (
    <footer className="py-16 section-container">
      <div className="divider-line mb-12" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img 
          src={sfdLogoBlack} 
          alt="SFD – Strength For Dancers" 
          className="h-5 w-auto opacity-60"
        />
        <p className="text-sm" style={{ color: 'hsl(var(--text-muted))' }}>
          © {new Date().getFullYear()} SFD – Strength For Dancers. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;