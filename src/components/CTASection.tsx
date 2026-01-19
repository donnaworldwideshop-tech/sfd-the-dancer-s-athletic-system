import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, Instagram, Send } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-white" dir="rtl" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Right Column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label with line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-label">צור קשר</span>
              <div className="w-16 h-px bg-border" />
            </div>
            
            <h2 className="text-title mb-2">
              רוצים לשמוע
            </h2>
            <div className="text-title-outline mb-8">
              עוד פרטים?
            </div>
            
            <p className="text-body-lg mb-12 max-w-md">
              יש לכם שאלות? רוצים להתאים את התוכנית אליכם? דברו איתנו ונשמח לעזור.
            </p>
            
            {/* Contact methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">אימייל</p>
                  <a href="mailto:info@strengthfordancers.com" className="font-medium hover:underline">
                    info@strengthfordancers.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">טלפון</p>
                  <a href="tel:050-123-4567" className="font-medium hover:underline">
                    050-123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">וואטסאפ</p>
                  <a href="https://wa.me/972501234567" className="font-medium hover:underline">
                    שלחו הודעה
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <a href="https://instagram.com/strengthfordancers" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                    @strengthfordancers
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Left Column - Form */}
          <motion.div 
            className="bg-muted p-8 md:p-10 lg:p-12"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-semibold mb-8 text-center">השאירו פרטים</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">שם מלא</label>
                <input 
                  type="text" 
                  placeholder="השם שלכם"
                  className="input-clean bg-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">טלפון</label>
                <input 
                  type="tel" 
                  placeholder="050-000-0000"
                  className="input-clean bg-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">אימייל</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="input-clean bg-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">הודעה</label>
                <textarea 
                  placeholder="איך נוכל לעזור?"
                  rows={4}
                  className="input-clean bg-white resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button type="submit" className="btn-primary w-full justify-center">
                שליחה
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
