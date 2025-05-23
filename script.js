// Configuración global de animaciones
const ANIMATION_CONFIG = {
    duration: 2000,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Sistema de efectos hápticos
class HapticFeedback {
    static isSupported() {
        return 'vibrate' in navigator;
    }

    static light() {
        if (this.isSupported()) {
            navigator.vibrate(10);
        }
    }

    static medium() {
        if (this.isSupported()) {
            navigator.vibrate(25);
        }
    }

    static heavy() {
        if (this.isSupported()) {
            navigator.vibrate([50, 30, 50]);
        }
    }

    static success() {
        if (this.isSupported()) {
            navigator.vibrate([100, 50, 100, 50, 300]);
        }
    }
}

// Sistema de efectos visuales avanzados
class VisualEffects {
    static createStarBurst(x, y, container = document.body) {
        const colors = ['#00d4ff', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];

        for (let i = 0; i < 8; i++) {
            const star = document.createElement('div');
            const angle = (i * 45) * Math.PI / 180;
            const distance = 100 + Math.random() * 50;

            star.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1000;
                animation: starBurst 1s ease-out forwards;
                --end-x: ${Math.cos(angle) * distance}px;
                --end-y: ${Math.sin(angle) * distance}px;
            `;

            container.appendChild(star);

            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 1000);
        }
    }

    static createFloatingText(text, x, y, container = document.body) {
        const floatingText = document.createElement('div');
        floatingText.textContent = text;
        floatingText.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            color: var(--accent-color, #00d4ff);
            font-weight: bold;
            font-size: 14px;
            pointer-events: none;
            z-index: 1001;
            animation: floatUp 2s ease-out forwards;
            transform: translate(-50%, -50%);
        `;

        container.appendChild(floatingText);

        setTimeout(() => {
            if (floatingText.parentNode) {
                floatingText.parentNode.removeChild(floatingText);
            }
        }, 2000);
    }

    static createShockwave(x, y, container = document.body) {
        const shockwave = document.createElement('div');
        shockwave.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 10px;
            height: 10px;
            border: 2px solid rgba(0, 212, 255, 0.6);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 999;
            animation: shockwave 0.8s ease-out forwards;
        `;

        container.appendChild(shockwave);

        setTimeout(() => {
            if (shockwave.parentNode) {
                shockwave.parentNode.removeChild(shockwave);
            }
        }, 800);
    }
}

// Utilidades para animaciones
const AnimationUtils = {
    // Función mejorada para animar contadores
    animateCounter(element, target, duration = ANIMATION_CONFIG.duration) {
        const start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Usar función de easing más suave
            const easeProgress = this.easeOutCubic(progress);
            const current = start + (target - start) * easeProgress;

            // Formatear según el tipo de número
            if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (element.textContent.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Efecto visual al completar
                const rect = element.getBoundingClientRect();
                VisualEffects.createStarBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
                HapticFeedback.light();
            }
        };

        requestAnimationFrame(animate);
    },

    // Función de easing suave
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    },

    // Animar círculo de progreso con mejor timing
    animateProgressCircle(progressBar, percentage) {
        const circumference = 314; // 2 * π * 50 (radio ajustado)
        const offset = circumference - (percentage / 100) * circumference;

        // Iniciar desde vacío
        progressBar.style.strokeDashoffset = circumference;
        progressBar.style.transition = `stroke-dashoffset ${ANIMATION_CONFIG.duration}ms ${ANIMATION_CONFIG.easing}`;

        // Animar con delay para mejor efecto
        setTimeout(() => {
            progressBar.style.strokeDashoffset = offset;
            HapticFeedback.medium();
        }, 300);
    },

    // Crear efecto de escritura para texto
    typeWriter(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;

        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                if (Math.random() < 0.1) { // 10% chance de haptic feedback
                    HapticFeedback.light();
                }
                i++;
                setTimeout(type, speed);
            }
        };

        type();
    },

    // Efecto de parpadeo para elementos
    createPulseEffect(element) {
        element.style.animation = 'pulse 2s ease-in-out infinite';
    }
};

// Gestor de intersección mejorado
class IntersectionManager {
    constructor() {
        this.observers = new Map();
        this.animatedElements = new Set();
    }

    createObserver(callback, options = {}) {
        const config = {
            threshold: options.threshold || ANIMATION_CONFIG.threshold,
            rootMargin: options.rootMargin || ANIMATION_CONFIG.rootMargin
        };

        return new IntersectionObserver(callback, config);
    }

    observeElements(selector, callback, options = {}) {
        const elements = document.querySelectorAll(selector);
        const observer = this.createObserver(callback, options);

        elements.forEach(element => {
            observer.observe(element);
        });

        this.observers.set(selector, observer);
        return observer;
    }

    disconnect(selector) {
        if (this.observers.has(selector)) {
            this.observers.get(selector).disconnect();
            this.observers.delete(selector);
        }
    }
}

// Instancia global del gestor
const intersectionManager = new IntersectionManager();

// Inicialización de animaciones mejoradas
function initializeEnhancedAnimations() {
    // Observar elementos fade-in con stagger effect
    intersectionManager.observeElements('.fade-in', (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !intersectionManager.animatedElements.has(entry.target)) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    HapticFeedback.light();
                    intersectionManager.animatedElements.add(entry.target);
                }, index * 100); // Efecto escalonado
            }
        });
    });

    // Observar contadores con mejor timing
    intersectionManager.observeElements('.stat-number', (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !intersectionManager.animatedElements.has(entry.target)) {
                const element = entry.target;
                const text = element.textContent;
                let target = 0;

                // Extraer número objetivo
                if (text.includes('2+')) target = 2;
                else if (text.includes('10+')) target = 10;
                else if (text.includes('50%')) target = 50;
                else if (text.includes('19')) target = 19;

                if (target > 0) {
                    // Delay para efecto más dramático
                    setTimeout(() => {
                        AnimationUtils.animateCounter(element, target, 2500);
                    }, 500);
                    intersectionManager.animatedElements.add(element);
                }
            }
        });
    });

    // Observar círculos de progreso
    intersectionManager.observeElements('.progress-circle', (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !intersectionManager.animatedElements.has(entry.target)) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progressText = entry.target.querySelector('.progress-text');

                if (progressBar && progressText) {
                    setTimeout(() => {
                        AnimationUtils.animateProgressCircle(progressBar, 50);
                        AnimationUtils.animateCounter(progressText, 50, 2500);
                    }, 800);
                    intersectionManager.animatedElements.add(entry.target);
                }
            }
        });
    });
} // Inicializar EmailJS con tu Public Key
(function() {
    emailjs.init("1xIo82HGvVGU1cRST");
})();

// Menú flotante mejorado
function initializeFloatingMenu() {
    const floatingMenu = document.querySelector('.floating-menu');
    let isScrolling = false;

    if (floatingMenu) {
        // Efecto de scroll
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                floatingMenu.style.transform = 'scale(0.9) translateY(5px)';
                isScrolling = true;

                setTimeout(() => {
                    floatingMenu.style.transform = 'scale(1) translateY(0)';
                    isScrolling = false;
                }, 150);
            }
        });

        // Click con animación y efectos
        floatingMenu.addEventListener('click', (e) => {
            e.preventDefault();

            // Efectos visuales
            const rect = floatingMenu.getBoundingClientRect();
            if (typeof VisualEffects !== 'undefined') {
                VisualEffects.createShockwave(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
            }

            // Animación de click
            floatingMenu.style.transform = 'scale(0.95)';
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.medium();
            }

            setTimeout(() => {
                floatingMenu.style.transform = 'scale(1)';
            }, 150);

            // Scroll suave mejorado
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Efecto de hover mejorado
        floatingMenu.addEventListener('mouseenter', () => {
            floatingMenu.style.transform = 'scale(1.05) translateY(-3px)';
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.light();
            }
        });

        floatingMenu.addEventListener('mouseleave', () => {
            floatingMenu.style.transform = 'scale(1) translateY(0)';
        });
    }
}

// Tarjetas de proyecto con efectos avanzados
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        // Efecto de entrada escalonado
        card.style.animationDelay = `${index * 0.1}s`;

        // Hover effects mejorados
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Crear efecto de ondas mejorado
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(0, 212, 255, 0.6);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;

            card.appendChild(ripple);
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.light();
            }

            // Limpiar después de la animación
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);

            // Transformación de la tarjeta
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.boxShadow = '0 25px 80px rgba(0, 212, 255, 0.25)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });

        // Efecto de click mejorado
        card.addEventListener('click', (e) => {
            const rect = card.getBoundingClientRect();
            if (typeof VisualEffects !== 'undefined') {
                VisualEffects.createStarBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2,
                    card
                );
            }

            card.style.transform = 'translateY(-12px) scale(1.01)';
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.medium();
            }

            setTimeout(() => {
                card.style.transform = 'translateY(-15px) scale(1.03)';
            }, 150);
        });
    });

    // Añadir estilos CSS para los efectos
    if (!document.getElementById('enhanced-effects-styles')) {
        const style = document.createElement('style');
        style.id = 'enhanced-effects-styles';
        style.textContent = `
            @keyframes ripple {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(20);
                    opacity: 0;
                }
            }

            @keyframes starBurst {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0);
                    opacity: 0;
                }
            }

            @keyframes floatUp {
                0% {
                    transform: translate(-50%, -50%) translateY(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) translateY(-50px);
                    opacity: 0;
                }
            }

            @keyframes shockwave {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(20);
                    opacity: 0;
                }
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes slideIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes slideOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-10px); }
            }

            @keyframes slideInLeft {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
            }

            @keyframes slideIndicator {
                0% {
                    transform: translateX(50px);
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateX(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Formulario de contacto mejorado y funcional
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');

        // Efectos de foco mejorados
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'scale(1.02)';
                input.style.transform = 'translateZ(0)';
                if (typeof HapticFeedback !== 'undefined') {
                    HapticFeedback.light();
                }
            });

            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'scale(1)';
            });

            // Validación en tiempo real con efectos
            input.addEventListener('input', () => {
                if (input.value.length > 0) {
                    input.style.borderColor = 'var(--accent-color)';
                    if (input.value.length === 1) {
                        if (typeof HapticFeedback !== 'undefined') {
                            HapticFeedback.light();
                        }
                    }
                } else {
                    input.style.borderColor = 'var(--border-color)';
                }
            });
        });

        // Manejo de envío con funcionalidad real de email
        contactForm.addEventListener('submit', async(e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const templateParams = {
                name: formData.get('name') || formData.get('nombre'),
                email: formData.get('email') || formData.get('correo'),
                title: formData.get('subject') || formData.get('asunto') || 'Nuevo mensaje desde el formulario de contacto',
                message: formData.get('message') || formData.get('mensaje')
            };

            // Validar campos requeridos
            if (!templateParams.name || !templateParams.email || !templateParams.message) {
                showMessage('Por favor completa todos los campos requeridos', 'error');
                return;
            }

            // Validar email
            if (!isValidEmail(templateParams.email)) {
                showMessage('Por favor ingresa un email válido', 'error');
                return;
            }

            // Efectos visuales de inicio
            const rect = submitBtn.getBoundingClientRect();
            if (typeof VisualEffects !== 'undefined') {
                VisualEffects.createShockwave(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
            }
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.medium();
            }

            // Animación de carga
            submitBtn.innerHTML = `
                <span style="display: inline-flex; align-items: center; gap: 10px;">
                    <div style="width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    Enviando...
                </span>
            `;
            submitBtn.disabled = true;
            submitBtn.style.transform = 'scale(0.98)';

            try {
                // Enviar email usando EmailJS con tus datos configurados
                const response = await emailjs.send(
                    'service_orkf6p3', // Tu Service ID de Gmail
                    'template_nv8fa3e', // Tu Template ID
                    templateParams
                );

                console.log('Email enviado exitosamente:', response);

                // Éxito con efectos
                submitBtn.innerHTML = '✓ ¡Mensaje Enviado!';
                submitBtn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)';
                submitBtn.style.transform = 'scale(1.02)';

                // Efectos de éxito
                if (typeof VisualEffects !== 'undefined') {
                    VisualEffects.createStarBurst(
                        rect.left + rect.width / 2,
                        rect.top + rect.height / 2
                    );
                    VisualEffects.createFloatingText(
                        '¡Éxito!',
                        rect.left + rect.width / 2,
                        rect.top - 20
                    );
                }
                if (typeof HapticFeedback !== 'undefined') {
                    HapticFeedback.success();
                }

                // Mostrar mensaje de éxito
                showMessage('¡Mensaje enviado exitosamente! Te responderemos pronto.', 'success');

                // Limpiar formulario con animación
                inputs.forEach((input, index) => {
                    setTimeout(() => {
                        input.style.transform = 'translateX(-10px)';
                        setTimeout(() => {
                            input.value = '';
                            input.style.transform = 'translateX(0)';
                            input.style.borderColor = 'var(--border-color)';
                        }, 100);
                    }, index * 100);
                });

            } catch (error) {
                console.error('Error al enviar email:', error);

                // Error con efectos
                submitBtn.innerHTML = '✗ Error al Enviar';
                submitBtn.style.background = 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)';

                // Mostrar mensaje de error
                showMessage('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
            }

            // Restaurar botón
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = 'var(--gradient-primary)';
                submitBtn.style.transform = 'scale(1)';
                submitBtn.disabled = false;
            }, 3000);
        });
    }
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar mensajes
function showMessage(text, type = 'info') {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const message = document.createElement('div');
    message.className = 'form-message';
    message.textContent = text;

    // Estilos según el tipo
    const styles = {
        success: 'background: linear-gradient(135deg, #00ff88 0%, #00cc66 100%); color: white;',
        error: 'background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%); color: white;',
        info: 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white;'
    };

    message.style.cssText = `
        ${styles[type]}
        padding: 15px;
        border-radius: 8px;
        margin-top: 15px;
        text-align: center;
        font-weight: 600;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    `;

    // Insertar mensaje después del formulario
    const form = document.querySelector('.contact-form');
    if (form && form.parentNode) {
        form.parentNode.insertBefore(message, form.nextSibling);
    }

    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        if (message && message.parentNode) {
            message.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (message && message.parentNode) {
                    message.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Smooth scroll mejorado para enlaces internos
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (typeof HapticFeedback !== 'undefined') {
                    HapticFeedback.light();
                }

                // Añadir indicador visual durante el scroll
                const indicator = document.createElement('div');
                indicator.style.cssText = `
                    position: fixed;
                    top: 50%;
                    right: 30px;
                    width: 4px;
                    height: 40px;
                    background: var(--gradient-primary);
                    border-radius: 2px;
                    z-index: 1001;
                    animation: slideIndicator 1s ease-out;
                `;

                document.body.appendChild(indicator);

                // Scroll suave
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Remover indicador
                setTimeout(() => {
                    if (indicator.parentNode) {
                        indicator.parentNode.removeChild(indicator);
                    }
                }, 1000);
            }
        });
    });
}

// Efecto parallax mejorado y optimizado
function initializeParallax() {
    let ticking = false;

    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const heroLogo = document.querySelector('.hero-logo');
        const cards = document.querySelectorAll('.card');

        if (heroLogo) {
            const speed = scrolled * 0.05;
            const rotation = scrolled * 0.05;
            heroLogo.style.transform = `translateY(${speed}px) rotate(${rotation}deg)`;
        }

        // Parallax sutil para las tarjetas
        cards.forEach((card, index) => {
            const speed = (scrolled * 0.02) * (index % 2 === 0 ? 1 : -1);
            card.style.transform = `translateY(${speed}px)`;
        });

        ticking = false;
    };

    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Gestor de partículas flotantes mejorado
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.isActive = false;
        this.mouseParticles = [];
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.6;
        `;

        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();
        this.createParticles();
        this.setupMouseTracking();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`
            });
        }
    }

    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.1) {
                this.mouseParticles.push({
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 3 + 1,
                    life: 1,
                    decay: 0.02,
                    color: `hsl(${200 + Math.random() * 40}, 80%, 70%)`
                });
            }
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Animar partículas de fondo
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }

            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Animar partículas del mouse
        this.mouseParticles = this.mouseParticles.filter(particle => {
            particle.life -= particle.decay;
            particle.y -= 1;
            particle.x += (Math.random() - 0.5) * 2;

            if (particle.life > 0) {
                this.ctx.globalAlpha = particle.life;
                this.ctx.fillStyle = particle.color;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
                return true;
            }
            return false;
        });

        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
}

// Sistema de notificaciones visuales
class NotificationSystem {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        const colors = {
            success: '#00ff88',
            error: '#ff6b6b',
            warning: '#ffa726',
            info: '#00d4ff'
        };

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, ${colors[type]}, ${colors[type]}dd);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
            backdrop-filter: blur(10px);
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);

        if (typeof HapticFeedback !== 'undefined') {
            HapticFeedback.light();
        }
    }
}

// Sistema de gestos táctiles para dispositivos móviles
class TouchGestureManager {
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50;
        this.init();
    }

    init() {
        document.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            this.touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe();
        }, { passive: true });

        // Double tap detection
        let lastTap = 0;
        document.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;

            if (tapLength < 500 && tapLength > 0) {
                this.handleDoubleTap(e);
            }
            lastTap = currentTime;
        }, { passive: true });
    }

    handleSwipe() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;

        if (Math.abs(deltaX) > this.minSwipeDistance || Math.abs(deltaY) > this.minSwipeDistance) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    this.onSwipeRight();
                } else {
                    this.onSwipeLeft();
                }
            } else {
                if (deltaY > 0) {
                    this.onSwipeDown();
                } else {
                    this.onSwipeUp();
                }
            }
        }
    }

    onSwipeLeft() {
        const sections = document.querySelectorAll('section[id]');
        const currentSection = this.getCurrentSection();
        const currentIndex = Array.from(sections).indexOf(currentSection);

        if (currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.medium();
            }
            NotificationSystem.show('Siguiente sección', 'info', 1500);
        }
    }

    onSwipeRight() {
        const sections = document.querySelectorAll('section[id]');
        const currentSection = this.getCurrentSection();
        const currentIndex = Array.from(sections).indexOf(currentSection);

        if (currentIndex > 0) {
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
            if (typeof HapticFeedback !== 'undefined') {
                HapticFeedback.medium();
            }
            NotificationSystem.show('Sección anterior', 'info', 1500);
        }
    }

    onSwipeUp() {
        window.scrollBy({ top: -window.innerHeight / 2, behavior: 'smooth' });
        if (typeof HapticFeedback !== 'undefined') {
            HapticFeedback.light();
        }
    }

    onSwipeDown() {
        window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
        if (typeof HapticFeedback !== 'undefined') {
            HapticFeedback.light();
        }
    }

    handleDoubleTap(e) {
        const touch = e.changedTouches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        if (typeof VisualEffects !== 'undefined') {
            VisualEffects.createStarBurst(x, y);
        }
        if (typeof HapticFeedback !== 'undefined') {
            HapticFeedback.heavy();
        }
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + window.innerHeight / 2;

        for (let section of sections) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;

            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                return section;
            }
        }
        return sections[0];
    }
}

// Inicialización completa mejorada
function initializeAll() {
    try {
        // Inicializar sistemas principales
        initializeFloatingMenu();
        initializeProjectCards();
        initializeContactForm();
        initializeSmoothScroll();
        initializeParallax();

        // Inicializar sistema de partículas
        const particleSystem = new ParticleSystem();
        particleSystem.init();

        // Inicializar gestor de gestos táctiles
        const touchManager = new TouchGestureManager();

        // Mostrar notificación de bienvenida
        setTimeout(() => {
            NotificationSystem.show('¡Portfolio by Santino!', 'success');
        }, 1000);

        // Detectar características del dispositivo
        if (typeof HapticFeedback !== 'undefined' && HapticFeedback.isSupported()) {
            console.log('🎮 Feedback háptico disponible');
        }

        console.log('✨ Sistema de animaciones mejoradas inicializado');
    } catch (error) {
        console.error('Error al inicializar sistemas:', error);
    }
}

// Auto-inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAll);
} else {
    initializeAll();
}

// Cargar EmailJS si no está disponible
if (typeof emailjs === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/emailjs-com/3.2.0/email.min.js';
    script.onload = () => {
        console.log('EmailJS cargado correctamente');
    };
    script.onerror = () => {
        console.error('Error al cargar EmailJS');
    };
    document.head.appendChild(script);
}