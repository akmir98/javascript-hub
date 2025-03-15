// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.toggle('active'));
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-toggle') && !e.target.closest('.nav-links')) {
            navLinks.forEach(link => link.classList.remove('active'));
            navToggle?.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                navLinks.forEach(link => link.classList.remove('active'));
                navToggle?.classList.remove('active');
            }
        });
    });

    // Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));

    // Character Card Hover Effects
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for subscribing!';
                successMessage.style.color = 'var(--accent-color)';
                newsletterForm.appendChild(successMessage);
                
                // Clear the form
                newsletterForm.reset();
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    }

    // Practice Arena Code Execution
    const runButton = document.querySelector('.run-button');
    const codeInput = document.querySelector('#code-input');
    const codeOutput = document.querySelector('#code-output');

    if (runButton && codeInput && codeOutput) {
        runButton.addEventListener('click', () => {
            try {
                // Create a safe evaluation environment
                const code = codeInput.value;
                const output = [];
                
                // Override console.log
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };

                // Evaluate the code
                eval(code);

                // Restore console.log
                console.log = originalLog;

                // Display output
                codeOutput.textContent = output.join('\n');
                codeOutput.className = 'success';
            } catch (error) {
                codeOutput.textContent = `Error: ${error.message}`;
                codeOutput.className = 'error';
            }
        });
    }

    // Progress Animation
    function animateProgress() {
        const progressCircles = document.querySelectorAll('.progress-circle');
        progressCircles.forEach(circle => {
            const progress = circle.getAttribute('data-progress');
            circle.style.setProperty('--progress', `${progress}%`);
        });

        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }

    // Animate progress when elements are in view
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress();
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.progress-grid').forEach(grid => {
        progressObserver.observe(grid);
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Start Learning Button Animation
    const startLearningBtn = document.querySelector('.start-learning-btn');
    if (startLearningBtn) {
        // Add initial animation class
        startLearningBtn.classList.add('animate');

        // Handle button click
        startLearningBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove animation temporarily
            startLearningBtn.classList.remove('animate');
            
            // Scroll to curriculum section
            const curriculumSection = document.querySelector('.curriculum');
            if (curriculumSection) {
                curriculumSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Add animation back after click
            setTimeout(() => {
                startLearningBtn.classList.add('animate');
            }, 100);
        });

        // Add hover effect
        startLearningBtn.addEventListener('mouseenter', () => {
            startLearningBtn.classList.remove('animate');
        });

        startLearningBtn.addEventListener('mouseleave', () => {
            setTimeout(() => {
                startLearningBtn.classList.add('animate');
            }, 300);
        });
    }

    // Progress Circle Animation
    function updateProgressCircles() {
        document.querySelectorAll('.progress-circle').forEach(circle => {
            const progress = circle.dataset.progress;
            circle.style.setProperty('--progress', `${progress}%`);
        });
    }

    // Progress Bar Animation
    function updateProgressBars() {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const progress = bar.dataset.progress;
            bar.style.setProperty('--progress', `${progress}%`);
        });
    }

    // Initialize progress indicators
    updateProgressCircles();
    updateProgressBars();

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.section-title, .character-grid, .timeline, .practice-grid, .resource-grid').forEach(element => {
        animationObserver.observe(element);
    });

    // Window resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle resize-specific updates
            if (window.innerWidth > 768) {
                navLinks.forEach(link => link.classList.remove('active'));
            }
        }, 250);
    });

    // Scroll-based animations
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;

        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `50% ${scrolled * 0.5}px`;
        }

        // Animate elements on scroll
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            }
        });

        // Get navigation elements
        const sections = document.querySelectorAll('section');

        // Add active class to nav links on scroll
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 