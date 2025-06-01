document.addEventListener('DOMContentLoaded', function () {
    // Simple fade-in animation
    const content = document.querySelector('.home-content');
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = 'opacity 0.8s ease';
        content.style.opacity = 1;
    }, 100);
});