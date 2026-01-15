const ApplicationSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      {/* איך זה עובד */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start mb-24">
        <div>
          <p className="text-caption mb-6">איך זה עובד</p>
          <h2 className="text-section-title mb-8">
            השיטה מיושמת באמצעות ערכת אימון פיזית
            וגישה לתכנים דיגיטליים מלווים.
          </h2>
          <p className="text-body mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
            ערכת האימון כוללת ציוד פיזי ייעודי לעבודה לפי השיטה.
            התרגול מונחה באמצעות סרטוני הדגמה ברורים,
            ומאפשר עבודה עצמאית, מדויקת ובטוחה.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            הגישה לתכנים היא דיגיטלית,
            ומאפשרת להתאמן בכל מקום ובקצב שמתאים לרקדן.
          </p>
        </div>
        
        <div className="bg-card p-8 md:p-12">
          <p className="text-caption mb-8">הערכה כוללת</p>
          <ul className="space-y-4">
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>תוכנית אימון מובנית לעבודה שבועית</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>סרטוני הדגמה לכל תרגיל</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>הנחיות ברורות לביצוע מדויק</span>
            </li>
            <li className="text-body flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 flex-shrink-0" />
              <span>גישה מלאה לתכנים מכל מכשיר</span>
            </li>
          </ul>
        </div>
      </div>

      {/* עבודה לאורך זמן והתאמה לשלב בקריירה */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24">
        <div className="border-r-2 border-foreground/20 pr-6">
          <h3 className="text-lg font-normal mb-4">עבודה לאורך זמן</h3>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            אימון כוח אפקטיבי דורש רצף ועקביות.
            השיטה נבנתה כך שתשתלב לצד שיעורי הריקוד – לא במקומם.
          </p>
        </div>
        
        <div className="border-r-2 border-foreground/20 pr-6">
          <h3 className="text-lg font-normal mb-4">התאמה לשלב בקריירה</h3>
          <p className="text-body mb-4" style={{ color: 'hsl(var(--text-secondary))' }}>
            רקדן צעיר בונה בסיס.
            רקדן מתקדם מחזק, מייצב ושומר על הגוף לאורך זמן.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            התוכן והשיטה מאפשרים עבודה מדורגת,
            בהתאם לרמה ולשלב המקצועי.
          </p>
        </div>
      </div>

      {/* ערכת האימון */}
      <div className="max-w-2xl">
        <p className="text-caption mb-6">ערכת האימון</p>
        <p className="text-body mb-6" style={{ color: 'hsl(var(--text-secondary))' }}>
          ערכת האימון היא כלי עבודה שבועי,
          שמאפשר ליישם את השיטה בפועל לצד שגרת הריקוד.
        </p>
        <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
          הרכישה פותחת גישה מלאה לתכנים הדיגיטליים,
          ומאפשרת להתחיל לעבוד לפי השיטה באופן מיידי.
        </p>
      </div>
    </section>
  );
};

export default ApplicationSection;
