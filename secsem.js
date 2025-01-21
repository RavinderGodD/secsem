document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const options = {
        threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});


// Prevent pinch-to-zoom on mobile
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(e) {
    if (e.scale !== 1) {  // Pinch to zoom detection
        e.preventDefault();
    }
}, { passive: false });