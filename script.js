/**
 * LOKA BRANDS — CORPORATE WEBSITE INTERACTIVE ENGINE
 * Features: Ambient Canvas Particles, Scroll Counter, Tabbed Ecosystem, Modal System, Form Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileMenu();
    initAmbientCanvas();
    initScrollCounters();
    initEcosystemTabs();
    initModalHandlers();
});

/* ==========================================================================
   NAVBAR & SCROLL SPY
   ========================================================================== */

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Sticky bar background shadow
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link scroll spy
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-active');
            });
        });
    }
}

/* ==========================================================================
   AMBIENT GOLD CANVAS PARTICLES
   ========================================================================== */

function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            color: 'rgba(212, 175, 55, ' + (Math.random() * 0.4 + 0.1) + ')',
            vx: (Math.random() - 0.5) * 0.3,
            vy: -Math.random() * 0.4 - 0.1
        });
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.y < 0) {
                p.y = height;
                p.x = Math.random() * width;
            }
            if (p.x < 0 || p.x > width) {
                p.vx *= -1;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(render);
    }

    render();
}

/* ==========================================================================
   SCROLL STATISTICAL COUNTER ANIMATION
   ========================================================================== */

function initScrollCounters() {
    const counters = document.querySelectorAll('.trust-number');
    let animated = false;

    function checkScroll() {
        const triggerPos = window.innerHeight * 0.85;
        counters.forEach(counter => {
            const top = counter.getBoundingClientRect().top;
            if (top < triggerPos && !animated) {
                animated = true;
                animateCounter(counter);
            }
        });
    }

    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        let count = 0;
        const speed = target / 35;

        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(update, 35);
            } else {
                counter.innerText = target;
            }
        };

        update();
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // initial check
}

/* ==========================================================================
   OMNICHANNEL ECOSYSTEM TABS
   ========================================================================== */

function initEcosystemTabs() {
    const tabs = document.querySelectorAll('.eco-tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const activePanel = document.getElementById(targetTab);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   MODAL CONTROLLER SYSTEM
   ========================================================================== */

function initModalHandlers() {
    // Close modal on escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ==========================================================================
   FORM HANDLING & TOAST NOTIFICATIONS
   ========================================================================== */

function applyJob(jobTitle) {
    const form = document.getElementById('job-app-form');
    const title = document.getElementById('job-app-title');
    if (form && title) {
        title.innerText = `Apply for: ${jobTitle}`;
        form.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function submitJobForm(event) {
    event.preventDefault();
    const name = document.getElementById('applicant-name').value;
    
    closeModal('careers-modal');
    showToast(`Thank you, ${name}! Your application has been submitted to Loka Talent Acquisition.`);
    
    // Reset form
    document.getElementById('job-app-form').reset();
    document.getElementById('job-app-form').classList.add('hidden');
}

function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const inquiry = document.getElementById('contact-inquiry').value;

    closeModal('contact-modal');
    showToast(`Thank you, ${name}. Your ${inquiry} message has been sent to Loka Corporate HQ.`);

    // Reset form
    document.getElementById('contact-form').reset();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');

    if (toast && msgEl) {
        msgEl.innerText = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    }
}
