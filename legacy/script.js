// METAL MOOD PACKS - SCRIPT
// Interactive features and animations

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scroll for navigation links
    initSmoothScroll();
    
    // Pack expand/collapse functionality
    initPackExpansion();
    
    // Scroll animations
    initScrollAnimations();
    
    // Navigation background on scroll
    initNavScroll();
    
});

// Smooth scroll for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Don't prevent default for # only
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Pack expansion functionality
function initPackExpansion() {
    const expandButtons = document.querySelectorAll('.pack-expand');
    const closeButtons = document.querySelectorAll('.pack-close');
    
    // Open pack details
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            // Close all other expanded sections
            document.querySelectorAll('.pack-expanded').forEach(section => {
                if (section.id !== targetId) {
                    section.classList.remove('active');
                }
            });
            
            // Toggle current section
            if (targetSection) {
                targetSection.classList.toggle('active');
                
                // Scroll to the expanded section
                if (targetSection.classList.contains('active')) {
                    setTimeout(() => {
                        const navHeight = document.querySelector('.nav').offsetHeight;
                        const targetPosition = targetSection.offsetTop - navHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            }
        });
    });
    
    // Close pack details
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expandedSection = button.closest('.pack-expanded');
            if (expandedSection) {
                expandedSection.classList.remove('active');
            }
        });
    });
    
    // Close expanded sections when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.pack-expanded') && 
            !e.target.closest('.pack-expand')) {
            document.querySelectorAll('.pack-expanded').forEach(section => {
                section.classList.remove('active');
            });
        }
    });
}

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe pack articles
    const packs = document.querySelectorAll('.pack');
    packs.forEach((pack, index) => {
        pack.style.opacity = '0';
        pack.style.transform = 'translateY(30px)';
        pack.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(pack);
    });
    
    // Observe sections
    const sections = document.querySelectorAll('.intro, .bundle, .statement');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Navigation background on scroll
function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add solid background when scrolled
        if (currentScroll > 100) {
            nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        }
        
        lastScroll = currentScroll;
    });
}

// Parallax effect for hero (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add hover effect to pack visuals
document.querySelectorAll('.pack').forEach(pack => {
    const visual = pack.querySelector('.pack-visual');
    
    pack.addEventListener('mouseenter', () => {
        if (visual) {
            visual.style.transform = 'scale(1.05)';
            visual.style.opacity = '1';
        }
    });
    
    pack.addEventListener('mouseleave', () => {
        if (visual) {
            visual.style.transform = 'scale(1)';
            visual.style.opacity = '0.8';
        }
    });
});

// Keyboard navigation for expanded packs
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.pack-expanded').forEach(section => {
            section.classList.remove('active');
        });
    }
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
