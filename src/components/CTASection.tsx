const CTASection = () => {
  return (
    <section id="contact" className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-caption mb-6">הצעד הראשון</p>
        <h2 className="text-section-title mb-8">
          רכישת ערכת האימון היא נקודת הכניסה לשיטת SFD.
        </h2>
        <p className="text-body mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
          לאחר הרכישה ניתן להתחיל להתאמן כבר מהיום הראשון.
        </p>
        <p className="text-body mb-12" style={{ color: 'hsl(var(--text-secondary))' }}>
          יש שאלות לפני?<br />
          אפשר לפנות אלינו ישירות.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#" 
            className="btn-primary"
          >
            לרכישת ערכת האימון
          </a>
          <a 
            href="mailto:contact@sfd.co.il" 
            className="px-8 py-3 border border-foreground/30 text-foreground hover:border-foreground transition-colors"
          >
            ליצירת קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
