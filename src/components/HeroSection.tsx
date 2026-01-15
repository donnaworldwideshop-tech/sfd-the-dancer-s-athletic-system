import { useEffect, useState } from "react";
import dancerHero from "@/assets/dancer-hero.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={dancerHero} 
          alt="Dancer" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-xl mr-auto text-right" dir="rtl">
          <p 
            className={`text-caption mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            SFD – STRENGTH FOR DANCERS
          </p>
          <h1 
            className={`text-hero-display mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            רקדן הוא ספורטאי.
          </h1>
          <p 
            className={`text-body-large max-w-md transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.3s', color: 'hsl(var(--text-secondary))' }}
          >
            הגוף של הרקדן דורש אימון מקצועי.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;