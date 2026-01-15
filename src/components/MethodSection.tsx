const MethodSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="max-w-3xl">
        <p className="text-caption mb-6">הגישה</p>
        <h2 className="text-section-title mb-12">
          SFD היא מערכת אימון מקצועית<br />
          שתוכננה במיוחד לרקדנים.
        </h2>
        
        <div className="space-y-8">
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">מבוססת על עקרונות מדע האימון</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              כל תוכנית בנויה על בסיס עקרונות פיזיולוגיים מוכחים, עם התאמה לעולם הריקוד.
            </p>
          </div>
          
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">מותאמת לסגנונות ריקוד שונים</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              בלט, מודרני, עכשווי, היפ-הופ – לכל סגנון דרישות שונות. המערכת מתאימה את האימון בהתאם.
            </p>
          </div>
          
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">מתייחסת לכל שלבי ההתפתחות</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              מרקדנים צעירים ועד מקצוענים בקריירה מתקדמת – כל שלב דורש גישה אחרת.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;