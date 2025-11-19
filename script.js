document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('#home');

    // Animate menu cards on scroll
    const itemObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    menuItems.forEach(item => itemObserver.observe(item));

    // Highlight active navigation link
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
});

