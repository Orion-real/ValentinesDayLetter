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