const ApplicationSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-caption mb-6">איך זה עובד</p>
          <h2 className="text-section-title mb-8">
            ערכת אימון מותאמת אישית.
          </h2>
          <p className="text-body mb-8" style={{ color: 'hsl(var(--text-secondary))' }}>
            כל רקדן מקבל ערכת אימון מותאמת שכוללת תוכנית מובנית, הדגמות וידאו, ומעקב התקדמות.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            הגישה לחומרים היא דיגיטלית ומלאה – אפשר להתאמן בכל מקום, בכל זמן, עם הנחיות ברורות ומדויקות.
          </p>
        </div>
        
        <div className="bg-card p-8 md:p-12">
          <p className="text-caption mb-8">כולל</p>
          <ul className="space-y-4">
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>תוכנית אימון שבועית מובנית</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>סרטוני הדגמה לכל תרגיל</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>מעקב התקדמות ומדדים</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>עדכונים והתאמות לפי התקדמות</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>גישה מלאה מכל מכשיר</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;