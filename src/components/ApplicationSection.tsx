const ApplicationSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        <div>
          <p className="text-caption mb-6">כלי העבודה</p>
          <h2 className="text-section-title mb-8">
            ערכת האימון היא נקודת הכניסה למערכת.
          </h2>
          <p className="text-body mb-8" style={{ color: 'hsl(var(--text-secondary))' }}>
            לא מוצר שקונים ושוכחים. ערכת האימון היא כלי עבודה יומיומי – תוכנית מובנית שמלווה את הרקדן לאורך השבוע, לצד שיעורי הריקוד.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            הרכישה פותחת גישה מלאה למערכת: תוכנית אימון, הדגמות, ומעקב התקדמות. כל מה שצריך כדי להתחיל לעבוד.
          </p>
        </div>
        
        <div className="bg-card p-8 md:p-12">
          <p className="text-caption mb-8">מה כולל</p>
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
              <span>מעקב התקדמות אישי</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>עדכונים והתאמות שוטפות</span>
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