// Einfaches JavaScript für die Demo-Seite
document.addEventListener('DOMContentLoaded', function() {
    // Aktuelle Zeit und Datum zur Footer-Anzeige hinzufügen
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    
    // Aktualisiere das Jahr im Copyright
    footer.textContent = footer.textContent.replace('2025', currentYear);
    
    // Füge einen Gruß basierend auf der Tageszeit hinzu
    const greeting = getGreeting();
    const header = document.querySelector('header h1');
    header.textContent = `${greeting} - ${header.textContent}`;
    
    // Füge einen einfachen Hover-Effekt für die Feature-Liste hinzu
    const features = document.querySelectorAll('.features li');
    features.forEach(feature => {
        feature.addEventListener('mouseover', function() {
            this.style.color = '#4a6baf';
            this.style.fontWeight = 'bold';
        });
        
        feature.addEventListener('mouseout', function() {
            this.style.color = '#333';
            this.style.fontWeight = 'normal';
        });
    });
});

// Funktion, um einen Gruß basierend auf der Tageszeit zu generieren
function getGreeting() {
    const hour = new Date().getHours();
    
    if (hour < 12) {
        return "Guten Morgen";
    } else if (hour < 18) {
        return "Guten Tag";
    } else {
        return "Guten Abend";
    }
}
