// Form validation using Bootstrap's built-in validation
(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
                form.classList.remove('was-validated');
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(section => {
    observer.observe(section);
});