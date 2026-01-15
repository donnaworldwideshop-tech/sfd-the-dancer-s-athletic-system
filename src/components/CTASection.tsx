const CTASection = () => {
  return (
    <section id="contact" className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-caption mb-6">הצעד הבא</p>
        <h2 className="text-section-title mb-8">
          מוכנים להתחיל?
        </h2>
        <p className="text-body mb-12" style={{ color: 'hsl(var(--text-secondary))' }}>
          השאירו פרטים ונחזור אליכם עם פרטים נוספים על המערכת ואיך היא יכולה להתאים לכם.
        </p>
        
        <form className="space-y-6 max-w-md mx-auto text-right">
          <div>
            <input
              type="text"
              placeholder="שם מלא"
              className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="אימייל"
              className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="טלפון"
              className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="ספרו לנו קצת על עצמכם (אופציונלי)"
              rows={3}
              className="w-full bg-transparent border-b border-foreground/30 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>
          <div className="pt-4">
            <button type="submit" className="btn-primary w-full md:w-auto">
              שליחה
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTASection;