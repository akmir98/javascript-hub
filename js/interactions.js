// Enhanced Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll with Progress Indicator
    const header = document.querySelector('.main-nav');
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    header.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // Interactive Timeline Items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
            const character = item.querySelector('.timeline-character');
            character.style.transform = 'scale(1.1) rotate(5deg)';
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
            const character = item.querySelector('.timeline-character');
            character.style.transform = 'none';
        });
    });

    // Method Cards Interaction
    const methodCards = document.querySelectorAll('.methods-card');
    methodCards.forEach(card => {
        card.addEventListener('click', () => {
            methodCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Dynamic Progress Update
    const progressCircles = document.querySelectorAll('.progress-circle');
    let progress = 0;

    function updateProgress() {
        progress = Math.min(progress + 1, 100);
        progressCircles.forEach(circle => {
            circle.style.setProperty('--progress', `${progress}%`);
            circle.querySelector('.progress-number').textContent = `${progress}%`;
        });

        if (progress < 100) {
            requestAnimationFrame(updateProgress);
        }
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('progress-circle')) {
                    progress = 0;
                    requestAnimationFrame(updateProgress);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.animate-on-scroll, .progress-circle').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Enhancement
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        navToggle.setAttribute('aria-expanded', 
            navLinks.classList.contains('active'));
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            body.style.overflow = '';
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Responsive Image Loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Theme Toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    header.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });

    // Resize Handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                body.style.overflow = '';
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }, 250);
    });
}); 