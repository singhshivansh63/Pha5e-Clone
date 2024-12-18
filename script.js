// GSAP Animations
gsap.from('.hero-title', { duration: 1.5, y: -50, opacity: 0, ease: 'power3.out' });
gsap.from('.hero-description', { duration: 1.5, y: -30, opacity: 0, delay: 0.5, ease: 'power3.out' });
gsap.from('.hero-button', { duration: 1.5, y: -20, opacity: 0, delay: 1, ease: 'power3.out' });

// Mousemove Effect
const floatingElement = document.querySelector('.floating-element');
document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const moveX = (x / window.innerWidth) * 20 - 10;
    const moveY = (y / window.innerHeight) * 20 - 10;
    floatingElement.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
});
 
