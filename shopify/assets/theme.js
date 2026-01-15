/**
 * SFD Theme JavaScript
 * Handles interactive components and dynamic behavior
 */

(function() {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const menuIcon = this.querySelector('.menu-icon');
      const closeIcon = this.querySelector('.close-icon');
      if (menuIcon) menuIcon.classList.toggle('hidden');
      if (closeIcon) closeIcon.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
        const closeIcon = mobileMenuToggle.querySelector('.close-icon');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      }
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);

  // Observe elements with fade-in classes
  document.querySelectorAll('.fade-in-section, .feature-card, .application-card, .content-block, .studio-logo-wrapper').forEach(el => {
    observer.observe(el);
  });

  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src], img[data-srcset]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Handle Shopify design mode
  if (window.Shopify && Shopify.designMode) {
    document.addEventListener('shopify:section:load', function(event) {
      // Re-initialize any JS components in the loaded section
      console.log('Section loaded:', event.detail.sectionId);
    });

    document.addEventListener('shopify:section:select', function(event) {
      console.log('Section selected:', event.detail.sectionId);
    });
  }

  // Form validation helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Contact form handling (if needed)
  const contactForms = document.querySelectorAll('form.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && !validateEmail(emailInput.value)) {
        e.preventDefault();
        alert('נא להזין כתובת אימייל תקינה');
        emailInput.focus();
      }
    });
  });

  // Video autoplay with intersection observer
  const videos = document.querySelectorAll('video[autoplay]');
  if (videos.length > 0) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.5 });

    videos.forEach(video => {
      videoObserver.observe(video);
    });
  }

  // Console message for developers
  console.log('%cSFD - Strength For Dancers', 'font-size: 20px; font-weight: bold; color: #000;');
  console.log('%cTheme by Horizon OS 2.0', 'font-size: 12px; color: #555;');

})();
