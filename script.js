document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('#home');

    // ====================================
    // FLOATING DECORATIONS
    // ====================================
    function createFloatingDecorations() {
        const container = document.querySelector('.floating-decorations');
        if (!container) return;

        // Food-themed emojis for decorations
        const foodEmojis = ['🥐', '🍞', '🧁', '☕', '🥖', '🥙', '🥨', '🍰', '🥯'];
        const numElements = window.innerWidth > 768 ? 15 : 8; // Fewer on mobile

        for (let i = 0; i < numElements; i++) {
            const floatingItem = document.createElement('div');
            floatingItem.className = 'floating-item';
            floatingItem.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
            
            // Random positioning
            floatingItem.style.left = `${Math.random() * 100}%`;
            floatingItem.style.top = `${100 + Math.random() * 50}%`; // Start below viewport
            
            // Random animation duration (15-30 seconds)
            const duration = 15 + Math.random() * 15;
            floatingItem.style.animationDuration = `${duration}s`;
            
            // Random delay to stagger animations
            floatingItem.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random horizontal offset
            floatingItem.style.setProperty('--drift-x', `${-50 + Math.random() * 100}px`);
            
            container.appendChild(floatingItem);
        }
    }

    // ====================================
    // MENU ITEMS SCROLL ANIMATION
    // ====================================
    const itemObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on position
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    menuItems.forEach(item => itemObserver.observe(item));

    // ====================================
    // NAVIGATION HIGHLIGHT
    // ====================================
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        const target = link.getAttribute('href').replace('#', '');
                        if (target === id) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        },
        {
            threshold: 0.4
        }
    );

    sections.forEach(section => sectionObserver.observe(section));
    if (header) {
        sectionObserver.observe(header);
    }

    // ====================================
    // ENHANCED HOVER EFFECTS
    // ====================================
    menuItems.forEach(item => {
        // Add subtle tilt effect on mouse move
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });

    // ====================================
    // SMOOTH SCROLL WITH OFFSET
    // ====================================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // Offset for fixed headers if any
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ====================================
    // INITIALIZE FLOATING DECORATIONS
    // ====================================
    // Only create on desktop for performance
    if (window.innerWidth > 768) {
        createFloatingDecorations();
    }

    // ====================================
    // PARALLAX EFFECT ON SCROLL
    // ====================================
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const floatingItems = document.querySelectorAll('.floating-item');
                
                floatingItems.forEach((item, index) => {
                    const speed = 0.5 + (index % 3) * 0.2;
                    const yPos = -(scrolled * speed);
                    item.style.transform = `translateY(${yPos}px)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // ====================================
    // PERFORMANCE: CLEANUP
    // ====================================
    // Remove floating items when they're far off screen
    setInterval(() => {
        const floatingItems = document.querySelectorAll('.floating-item');
        floatingItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.bottom < -500) {
                // Reset position to bottom for continuous animation
                item.style.top = `${window.innerHeight + 100}px`;
            }
        });
    }, 5000);
});
