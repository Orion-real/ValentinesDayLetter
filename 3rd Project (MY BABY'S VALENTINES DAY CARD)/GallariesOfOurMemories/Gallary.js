// Function to shuffle array (Fisher-Yates algorithm)
//Wako kagets ani HAHAHA nigamit kog AI pari ani cz I ain't smart enuf for this gng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to clone and randomize images
function setupConveyorBelt() {
    const set1 = document.getElementById('Set1');
    const set2 = document.getElementById('Set2');
    const set3 = document.getElementById('Set3');

    // Clone images from set1
    const originalImages = Array.from(set1.children);
    
    // Create shuffled copy
    const shuffledImages = shuffleArray([...originalImages]);
    
    // Clear and populate set2 with shuffled images
    set2.innerHTML = '';
    shuffledImages.forEach(img => {
        const clone = img.cloneNode(true);
        set2.appendChild(clone);
    })

    // Clear and populate set3 with shuffled images
    set3.innerHTML = '';
    shuffledImages.forEach(img => {
        const clone = img.cloneNode(true);
        set3.appendChild(clone);
    })
};

// Randomize set1 periodically
function randomizeSet1() {
    const currentImages = Array.from(set1.children);
    const shuffled = shuffleArray(currentImages);
        
    // Reorder in DOM
    shuffled.forEach(img => {
        set1.appendChild(img);
    });
    
    // Start randomizing
    randomizeSet1();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', setupConveyorBelt);

// Try to play da music inig open
window.addEventListener('load', function() {
    var music = document.getElementById('BGmusic');
    music.volume = 0.3; // Set volume to 30%
        
    // Browsers require user interaction first just in case she doesn't want music playing
    document.body.addEventListener('click', function once() {
        music.play();
        document.body.removeEventListener('click', once);
    }, { once: true });
});