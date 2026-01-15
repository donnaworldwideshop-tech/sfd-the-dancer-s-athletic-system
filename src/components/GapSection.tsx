const GapSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <p className="text-caption mb-6">הבעיה</p>
          <h2 className="text-section-title">
            עולם הריקוד ואימוני הכוח<br />
            לא מדברים באותה השפה.
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            רקדנים מתאמנים שעות ביום, אך אימון טכני לבדו לא בונה את הכוח שנדרש כדי לתמוך בתנועה.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד –
            לטווחי התנועה, לדפוסי העומס ולדיוק הביצוע.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            כוח שלא נבנה מתוך הבנה של התנועה הרקדנית
            לא ישרת את הרקדן לאורך זמן.
          </p>
          <p className="text-body font-medium" style={{ color: 'hsl(var(--foreground))' }}>
            התוצאה:<br />
            פערים בכוח, פציעות חוזרות, ותחושה שהגוף לא תומך בעבודה האמנותית.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
