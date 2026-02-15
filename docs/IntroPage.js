let clickCount = 0;
const checkboxes = [
    document.getElementById('clickcounter1'),
    document.getElementById('clickcounter2'),
    document.getElementById('clickcounter3'),
    document.getElementById('clickcounter4'),
    document.getElementById('clickcounter5')
];
const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.btn-yes');
const parentContainer = document.querySelector('.ParentContainer');

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Uncheck all checkboxes first
    checkboxes.forEach(cb => cb.checked = false);
    
    // Check the next one
    if (clickCount < checkboxes.length) {
        checkboxes[clickCount].checked = true;
        clickCount++;
    }
    
    // Update the label's "for" attribute to point to the next checkbox
    if (clickCount < checkboxes.length) {
        noBtn.htmlFor = `clickcounter${clickCount + 1}`;
    } else {
        // If we've used all checkboxes, YES fills the screen
        noBtn.style.pointerEvents = 'none';
        noBtn.style.opacity = '0';
        
        // Make YES button fill the entire viewport
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '0';
        yesBtn.style.left = '0';
        yesBtn.style.width = '100vw';
        yesBtn.style.height = '100vh';
        yesBtn.style.display = 'flex';
        yesBtn.style.alignItems = 'center';
        yesBtn.style.justifyContent = 'center';
        yesBtn.style.zIndex = '9999';
        yesBtn.style.fontSize = '10vw';
        yesBtn.style.margin = '0';
        yesBtn.style.borderRadius = '0';
        yesBtn.style.backgroundColor = '#4CAF50';
        parentContainer.style.overflow = 'visible';
    }
});

// Simple version - just play on any click
window.addEventListener('load', function() {
    var music = document.getElementById('BGmusic');
    music.volume = 0.3; // Set volume to 30%
    
    // Play on first click anywhere
    document.body.addEventListener('click', function once() {
        music.play();
        document.body.removeEventListener('click', once);
    }, { once: true });
});