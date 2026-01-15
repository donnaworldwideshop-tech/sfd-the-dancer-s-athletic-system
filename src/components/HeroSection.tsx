import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-container pt-20">
      <div className="max-w-4xl text-center">
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
          className={`text-body-large max-w-2xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.3s', color: 'hsl(var(--text-secondary))' }}
        >
          הגוף של הרקדן דורש אימון מקצועי.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;