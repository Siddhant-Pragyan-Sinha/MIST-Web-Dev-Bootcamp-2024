document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form fields
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Form submission success
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Email validation helper
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Scroll Animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation to sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Mobile Navigation Toggle (if needed)
    function toggleMobileNav() {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('hidden');
    }

    // Add event listener for mobile navigation toggle (if needed)
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', toggleMobileNav);
    }
});