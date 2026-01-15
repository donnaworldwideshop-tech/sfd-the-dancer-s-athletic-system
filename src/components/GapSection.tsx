const GapSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <p className="text-caption mb-6">הבעיה</p>
          <h2 className="text-section-title">
            עולם הריקוד והאימון הפיזי<br />
            מדברים בשפות שונות.
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            רקדנים מתאמנים שעות ביום, אבל לרוב ללא תוכנית אימון מובנית שמתייחסת לגוף כמערכת שלמה.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            אימוני כושר גנריים לא מותאמים לדרישות הספציפיות של ריקוד – לטווחי התנועה, לדפוסי העומס, לצורת הביצוע.
          </p>
          <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
            התוצאה: פערים בכוח, פציעות חוזרות, והרגשה שהגוף לא תומך בחזון האמנותי.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GapSection;