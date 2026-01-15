const MethodSection = () => {
  return (
    <section className="section-spacing section-container">
      <div className="divider-line mb-16 md:mb-24" />
      
      <div className="max-w-3xl">
        <p className="text-caption mb-6">הגישה</p>
        <h2 className="text-section-title mb-12">
          SFD היא שיטת אימון כוח<br />
          ייעודית לרקדנים.
        </h2>
        
        <p className="text-body mb-12" style={{ color: 'hsl(var(--text-secondary))' }}>
          השיטה מבוססת על עקרונות מקצועיים מעולם אימון הכוח,
          ומתורגמת לצרכים הפיזיים והמבניים של גוף רקדן.
        </p>
        
        <div className="space-y-8">
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">מותאמת לעולם הריקוד</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              לא כושר כללי, אלא עבודה שמבינה טכניקה, עומסים ותנועה.
            </p>
          </div>
          
          <div className="border-r-2 border-foreground/20 pr-6">
            <h3 className="text-lg font-normal mb-2">מתאימה לשלבי התפתחות שונים</h3>
            <p className="text-body" style={{ color: 'hsl(var(--text-secondary))' }}>
              השיטה נבנתה כך שניתן לעבוד לפיה ברמות שונות –
              מרקדנים צעירים ועד רקדנים פעילים ומתקדמים.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
