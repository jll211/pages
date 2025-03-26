// Hauptfunktionen für die Persona Engineering System Website

document.addEventListener('DOMContentLoaded', function() {
  // Aktuelle Zeit und Datum zur Footer-Anzeige hinzufügen
  const footerYear = document.querySelector('footer p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace(/\d{4}/, currentYear);
  }
  
  // Kontaktformular Funktionalität
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
      contactForm.reset();
    });
  }
  
  // Animationen für Feature-Elemente
  const featureItems = document.querySelectorAll('.features .bg-gray-50');
  if (featureItems.length > 0) {
    featureItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.classList.add('shadow-md');
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });
      
      item.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-md');
        this.style.transform = 'translateY(0)';
      });
    });
  }
});
