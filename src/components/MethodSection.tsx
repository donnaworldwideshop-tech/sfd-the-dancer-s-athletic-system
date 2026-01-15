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
        
        <p className="text-body mb-12" style={{ color: 'hsl(var(--text-secondary))' }}>
          המערכת בנויה סביב שאלה אחת: איזה כוח צריך הרקדן כדי לעשות את מה שהוא כבר עושה – טוב יותר, ולאורך זמן.
        </p>
        
        <div className="space-y-8">
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">כוח ספציפי לתנועה</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              אנחנו לא בונים כוח כללי. אנחנו בונים כוח שמתורגם ישירות לביצוע – בזוויות הנכונות, בטווחים הנכונים.
            </p>
          </div>
          
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">עקביות לאורך זמן</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              אימון כוח אמיתי דורש רצף. המערכת בנויה לשימוש יומיומי לצד שיעורי הריקוד – לא במקומם.
            </p>
          </div>
          
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">התאמה לשלב בקריירה</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              רקדן צעיר צריך לבנות בסיס. רקדן מקצועי צריך לתחזק ולמנוע שחיקה. כל שלב דורש תוכנית אחרת.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;