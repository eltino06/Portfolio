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
}

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
            VisualEffects.createShockwave(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
            );

            // Animación de click
            floatingMenu.style.transform = 'scale(0.95)';
            HapticFeedback.medium();

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
            HapticFeedback.light();
        });

        floatingMenu.addEventListener('mouseleave', () => {
            floatingMenu.style.transform = 'scale(1) translateY(0)';
        });
    }
}

// Detección de dispositivo móvil mejorada
const DeviceDetector = {
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            window.innerWidth <= 768 ||
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0);
    },
    isTablet: () => {
        return /iPad|Android.*(?!.*Mobile)/i.test(navigator.userAgent) ||
            (window.innerWidth > 768 && window.innerWidth <= 1024);
    },
    isDesktop: () => {
        return !DeviceDetector.isMobile() && !DeviceDetector.isTablet();
    },
    getViewportSize: () => {
        return {
            width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
            height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        };
    }
};

// Sistema de efectos visuales optimizado para móviles
const VisualEffects = {
    createStarBurst: (x, y, element = document.body) => {
        // Reducir partículas en móviles para mejor rendimiento
        const particleCount = DeviceDetector.isMobile() ? 6 : 12;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const angle = (360 / particleCount) * i;
            const distance = DeviceDetector.isMobile() ? 30 : 50;

            particle.style.cssText = `
                position: fixed;
                width: ${DeviceDetector.isMobile() ? '4px' : '6px'};
                height: ${DeviceDetector.isMobile() ? '4px' : '6px'};
                background: var(--primary-color, #00d4ff);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 9999;
                --end-x: ${Math.cos(angle * Math.PI / 180) * distance}px;
                --end-y: ${Math.sin(angle * Math.PI / 180) * distance}px;
                animation: starBurst 0.6s ease-out forwards;
            `;

            document.body.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 600);
        }
    },

    createShockwave: (x, y) => {
        const shockwave = document.createElement('div');
        const size = DeviceDetector.isMobile() ? '100px' : '200px';

        shockwave.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary-color, #00d4ff);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 9999;
            animation: shockwave 0.8s ease-out forwards;
        `;

        document.body.appendChild(shockwave);

        setTimeout(() => {
            if (shockwave.parentNode) {
                shockwave.parentNode.removeChild(shockwave);
            }
        }, 800);
    },

    createFloatingText: (text, x, y) => {
        const floatingText = document.createElement('div');
        const fontSize = DeviceDetector.isMobile() ? '14px' : '18px';

        floatingText.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            color: var(--primary-color, #00d4ff);
            font-weight: bold;
            font-size: ${fontSize};
            pointer-events: none;
            z-index: 9999;
            animation: floatUp 2s ease-out forwards;
        `;

        floatingText.textContent = text;
        document.body.appendChild(floatingText);

        setTimeout(() => {
            if (floatingText.parentNode) {
                floatingText.parentNode.removeChild(floatingText);
            }
        }, 2000);
    }
};

// Sistema de feedback háptico
const HapticFeedback = {
    isSupported: () => {
        return 'vibrate' in navigator;
    },

    light: () => {
        if (HapticFeedback.isSupported()) {
            navigator.vibrate(10);
        }
    },

    medium: () => {
        if (HapticFeedback.isSupported()) {
            navigator.vibrate(25);
        }
    },

    heavy: () => {
        if (HapticFeedback.isSupported()) {
            navigator.vibrate([50, 10, 50]);
        }
    },

    success: () => {
        if (HapticFeedback.isSupported()) {
            navigator.vibrate([20, 10, 20, 10, 20]);
        }
    }
};

// Animaciones mejoradas con optimización móvil
function initializeEnhancedAnimations() {
    // Reducir animaciones en móviles para mejor rendimiento
    const animationIntensity = DeviceDetector.isMobile() ? 0.5 : 1;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';

                // Añadir clase de animación responsiva
                if (DeviceDetector.isMobile()) {
                    entry.target.classList.add('mobile-animation');
                } else {
                    entry.target.classList.add('desktop-animation');
                }
            }
        });
    }, {
        threshold: DeviceDetector.isMobile() ? 0.1 : 0.3
    });

    document.querySelectorAll('.card, .project-card, .skill-item').forEach(el => {
        observer.observe(el);
    });
}

// Menú flotante optimizado para móviles
function initializeFloatingMenu() {
    const floatingMenu = document.createElement('div');
    floatingMenu.className = 'floating-menu';

    const menuSize = DeviceDetector.isMobile() ? '50px' : '60px';
    const menuPosition = DeviceDetector.isMobile() ? '15px' : '30px';

    floatingMenu.style.cssText = `
        position: fixed;
        bottom: ${menuPosition};
        right: ${menuPosition};
        width: ${menuSize};
        height: ${menuSize};
        background: linear-gradient(135deg, var(--primary-color, #00d4ff), var(--secondary-color, #ff6b6b));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    `;

    floatingMenu.innerHTML = `
        <div style="
            width: 24px; 
            height: 24px; 
            display: flex; 
            flex-direction: column; 
            justify-content: space-around;
            align-items: center;
        ">
            <div style="width: 20px; height: 2px; background: white; border-radius: 1px; transition: all 0.3s;"></div>
            <div style="width: 20px; height: 2px; background: white; border-radius: 1px; transition: all 0.3s;"></div>
            <div style="width: 20px; height: 2px; background: white; border-radius: 1px; transition: all 0.3s;"></div>
        </div>
    `;

    document.body.appendChild(floatingMenu);

    let isMenuOpen = false;
    const menuItems = [];

    // Crear elementos del menú
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section, index) => {
        const menuItem = document.createElement('div');
        const itemSize = DeviceDetector.isMobile() ? '40px' : '45px';
        const distance = DeviceDetector.isMobile() ? 60 : 70;

        menuItem.style.cssText = `
            position: fixed;
            bottom: ${menuPosition};
            right: ${menuPosition};
            width: ${itemSize};
            height: ${itemSize};
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 999;
            transform: scale(0);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            color: #333;
            font-weight: bold;
            font-size: ${DeviceDetector.isMobile() ? '10px' : '12px'};
            text-align: center;
            line-height: 1;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        `;

        // Texto del menú según la sección
        const sectionId = section.id.toLowerCase();
        let menuText = '•';
        if (sectionId.includes('home') || sectionId.includes('inicio')) menuText = '🏠';
        else if (sectionId.includes('about') || sectionId.includes('sobre')) menuText = '👤';
        else if (sectionId.includes('skill') || sectionId.includes('habilidad')) menuText = '⚡';
        else if (sectionId.includes('project') || sectionId.includes('proyecto')) menuText = '💼';
        else if (sectionId.includes('contact') || sectionId.includes('contacto')) menuText = '📧';

        menuItem.textContent = menuText;

        menuItem.addEventListener('click', () => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: DeviceDetector.isMobile() ? 'start' : 'center'
            });
            HapticFeedback.medium();
            toggleMenu();
        });

        document.body.appendChild(menuItem);
        menuItems.push({
            element: menuItem,
            angle: (index * 45) - 90,
            distance: distance
        });
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        const hamburgerLines = floatingMenu.querySelectorAll('div > div');

        if (isMenuOpen) {
            // Transformar hamburguesa en X
            hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

            // Mostrar elementos del menú
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    const radian = item.angle * (Math.PI / 180);
                    const x = Math.cos(radian) * item.distance;
                    const y = Math.sin(radian) * item.distance;

                    item.element.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                }, index * 50);
            });
        } else {
            // Restaurar hamburguesa
            hamburgerLines.forEach(line => {
                line.style.transform = '';
                line.style.opacity = '1';
            });

            // Ocultar elementos del menú
            menuItems.forEach(item => {
                item.element.style.transform = 'scale(0)';
            });
        }

        HapticFeedback.light();
    }

    floatingMenu.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (isMenuOpen) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (isMenuOpen) toggleMenu();
            }, 1000);
        }
    }, { passive: true });
}

// Tarjetas de proyecto optimizadas para móviles
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;

        // Eventos optimizados para móviles
        if (DeviceDetector.isMobile()) {
            // Usar touchstart para mejor respuesta en móviles
            card.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const rect = card.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;

                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(0, 212, 255, 0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.4s linear;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                `;

                card.appendChild(ripple);
                HapticFeedback.light();

                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 400);

                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.25)';
            }, { passive: false });

            card.addEventListener('touchend', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '';
            });

        } else {
            // Eventos para desktop
            card.addEventListener('mouseenter', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

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

                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);

                card.style.transform = 'translateY(-15px) scale(1.03)';
                card.style.boxShadow = '0 25px 80px rgba(0, 212, 255, 0.25)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '';
            });
        }

        // Evento de click común
        card.addEventListener('click', (e) => {
            const rect = card.getBoundingClientRect();
            VisualEffects.createStarBurst(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                card
            );

            const scale = DeviceDetector.isMobile() ? 1.01 : 1.01;
            const translateY = DeviceDetector.isMobile() ? -8 : -12;

            card.style.transform = `translateY(${translateY}px) scale(${scale})`;
            HapticFeedback.medium();

            setTimeout(() => {
                const hoverScale = DeviceDetector.isMobile() ? 1.02 : 1.03;
                const hoverTranslateY = DeviceDetector.isMobile() ? -8 : -15;
                card.style.transform = `translateY(${hoverTranslateY}px) scale(${hoverScale})`;
            }, 150);
        });
    });

    // Estilos CSS optimizados
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
                    transform: scale(${DeviceDetector.isMobile() ? '15' : '20'});
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
                    transform: translate(-50%, -50%) scale(${DeviceDetector.isMobile() ? '15' : '20'});
                    opacity: 0;
                }
            }

            /* Optimizaciones para móviles */
            @media (max-width: 768px) {
                .project-card {
                    transform-origin: center center;
                    will-change: transform, box-shadow;
                }
                
                .mobile-animation {
                    animation-duration: 0.4s !important;
                }
                
                .floating-menu {
                    -webkit-tap-highlight-color: transparent;
                    touch-action: manipulation;
                }
            }

            /* Mejoras de rendimiento */
            .project-card, .card {
                will-change: transform, box-shadow;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
            }

            /* Estilos para dispositivos con hover */
            @media (hover: hover) and (pointer: fine) {
                .project-card:hover {
                    transform: translateY(-15px) scale(1.03);
                }
            }

            /* Estilos para dispositivos táctiles */
            @media (hover: none) and (pointer: coarse) {
                .project-card:active {
                    transform: translateY(-8px) scale(1.02);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Smooth scroll mejorado y optimizado
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                HapticFeedback.light();

                // Indicador visual adaptado a móviles
                const indicator = document.createElement('div');
                const indicatorSize = DeviceDetector.isMobile() ? '3px' : '4px';
                const indicatorHeight = DeviceDetector.isMobile() ? '30px' : '40px';
                const indicatorPosition = DeviceDetector.isMobile() ? '15px' : '30px';

                indicator.style.cssText = `
                    position: fixed;
                    top: 50%;
                    right: ${indicatorPosition};
                    width: ${indicatorSize};
                    height: ${indicatorHeight};
                    background: var(--gradient-primary, linear-gradient(135deg, #00d4ff, #ff6b6b));
                    border-radius: 2px;
                    z-index: 1001;
                    animation: slideIndicator 1s ease-out;
                `;

                document.body.appendChild(indicator);

                // Scroll suave con offset para móviles
                const yOffset = DeviceDetector.isMobile() ? -60 : -80;
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    if (indicator.parentNode) {
                        indicator.parentNode.removeChild(indicator);
                    }
                }, 1000);
            }
        });
    });

    // Estilos para el indicador
    if (!document.getElementById('indicator-styles')) {
        const style = document.createElement('style');
        style.id = 'indicator-styles';
        style.textContent = `
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

// Efecto parallax optimizado
function initializeParallax() {
    // Deshabilitar parallax en móviles para mejor rendimiento
    if (DeviceDetector.isMobile()) {
        return;
    }

    let ticking = false;

    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const heroLogo = document.querySelector('.hero-logo');
        const cards = document.querySelectorAll('.card');

        if (heroLogo) {
            const speed = scrolled * 0.03; // Reducido para suavidad
            const rotation = scrolled * 0.02;
            heroLogo.style.transform = `translateY(${speed}px) rotate(${rotation}deg)`;
        }

        cards.forEach((card, index) => {
            const speed = (scrolled * 0.01) * (index % 2 === 0 ? 1 : -1);
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

// Sistema de partículas optimizado para móviles
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.isActive = false;
        this.mouseParticles = [];
        this.animationId = null;
    }

    init() {
        // Reducir partículas en móviles
        if (DeviceDetector.isMobile() && window.innerWidth < 480) {
            return; // Deshabilitar en móviles muy pequeños
        }

        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: ${DeviceDetector.isMobile() ? '0.3' : '0.6'};
        `;

        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.resize();
        this.createParticles();
        this.setupMouseTracking();
        this.animate();

        window.addEventListener('resize', () => this.resize());

        // Pausar animaciones cuando la página no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.resume();
            }
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = DeviceDetector.isMobile() ? 20 : 50;

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * (DeviceDetector.isMobile() ? 1.5 : 2) + 0.5,
                speedX: (Math.random() - 0.5) * (DeviceDetector.isMobile() ? 0.3 : 0.5),
                speedY: (Math.random() - 0.5) * (DeviceDetector.isMobile() ? 0.3 : 0.5),
                opacity: Math.random() * 0.5 + 0.2,
                color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`
            });
        }
    }

    setupMouseTracking() {
        const createMouseParticle = (x, y) => {
            if (Math.random() < (DeviceDetector.isMobile() ? 0.05 : 0.1)) {
                this.mouseParticles.push({
                    x: x,
                    y: y,
                    size: Math.random() * (DeviceDetector.isMobile() ? 2 : 3) + 1,
                    life: 1,
                    decay: DeviceDetector.isMobile() ? 0.03 : 0.02,
                    color: `hsl(${200 + Math.random() * 40}, 80%, 70%)`
                });
            }
        };

        if (DeviceDetector.isMobile()) {
            document.addEventListener('touchmove', (e) => {
                const touch = e.touches[0];
                createMouseParticle(touch.clientX, touch.clientY);
            }, { passive: true });
        } else {
            document.addEventListener('mousemove', (e) => {
                createMouseParticle(e.clientX, e.clientY);
            }, { passive: true });
        }
    }

    animate() {
        if (!this.isActive) return;

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

        // Animar partículas del mouse/touch
        this.mouseParticles = this.mouseParticles.filter(particle => {
            particle.life -= particle.decay;
            particle.y -= 0.5;
            particle.x += (Math.random() - 0.5) * 1;

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
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    pause() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    resume() {
        if (!this.isActive) {
            this.isActive = true;
            this.animate();
        }
    }
}

// Continuación del código desde NotificationSystem...

// Sistema de notificaciones optimizado para móviles
class NotificationSystem {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        const colors = {
            success: '#00ff88',
            error: '#ff6b6b',
            warning: '#ffa726',
            info: '#00d4ff'
        };

        const fontSize = DeviceDetector.isMobile() ? '14px' : '16px';
        const padding = DeviceDetector.isMobile() ? '12px 16px' : '15px 20px';
        const position = DeviceDetector.isMobile() ? 'top: 10px; left: 10px; right: 10px;' : 'top: 20px; right: 20px;';

        notification.style.cssText = `
            position: fixed;
            ${position}
            background: linear-gradient(135deg, ${colors[type]}, ${colors[type]}dd);
            color: white;
            padding: ${padding};
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            font-size: ${fontSize};
            font-weight: 500;
            transform: translateY(-100px);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            user-select: none;
            -webkit-tap-highlight-color: transparent;
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        // Animación de entrada
        requestAnimationFrame(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        });

        // Vibración para móviles
        if (type === 'success') {
            HapticFeedback.success();
        } else if (type === 'error') {
            HapticFeedback.heavy();
        } else {
            HapticFeedback.light();
        }

        // Auto-remove
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';

            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);

        // Click para cerrar
        notification.addEventListener('click', () => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
            HapticFeedback.light();

            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
}

// Gestos táctiles avanzados
class TouchGestureHandler {
    constructor() {
        this.startX = 0;
        this.startY = 0;
        this.startTime = 0;
        this.isScrolling = false;
        this.threshold = {
            distance: 50,
            time: 300,
            velocity: 0.3
        };
    }

    init() {
        if (!DeviceDetector.isMobile()) return;

        document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    }

    handleTouchStart(e) {
        const touch = e.touches[0];
        this.startX = touch.clientX;
        this.startY = touch.clientY;
        this.startTime = Date.now();
        this.isScrolling = false;
    }

    handleTouchMove(e) {
        if (this.isScrolling) return;

        const touch = e.touches[0];
        const deltaX = Math.abs(touch.clientX - this.startX);
        const deltaY = Math.abs(touch.clientY - this.startY);

        // Determinar si es scroll vertical
        if (deltaY > deltaX && deltaY > 10) {
            this.isScrolling = true;
            return;
        }

        // Prevenir scroll horizontal accidental
        if (deltaX > 30 && deltaY < 30) {
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (this.isScrolling) return;

        const touch = e.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;
        const endTime = Date.now();

        const deltaX = endX - this.startX;
        const deltaY = endY - this.startY;
        const deltaTime = endTime - this.startTime;
        const velocity = Math.abs(deltaX) / deltaTime;

        // Detectar swipe horizontal
        if (Math.abs(deltaX) > this.threshold.distance &&
            Math.abs(deltaY) < 100 &&
            deltaTime < this.threshold.time * 2 &&
            velocity > this.threshold.velocity) {

            if (deltaX > 0) {
                this.onSwipeRight();
            } else {
                this.onSwipeLeft();
            }
        }

        // Detectar swipe vertical
        if (Math.abs(deltaY) > this.threshold.distance &&
            Math.abs(deltaX) < 100 &&
            deltaTime < this.threshold.time * 2) {

            if (deltaY > 0) {
                this.onSwipeDown();
            } else {
                this.onSwipeUp();
            }
        }
    }

    onSwipeLeft() {
        // Navegar a la siguiente sección
        this.navigateSection(1);
        HapticFeedback.medium();
    }

    onSwipeRight() {
        // Navegar a la sección anterior
        this.navigateSection(-1);
        HapticFeedback.medium();
    }

    onSwipeUp() {
        // Scroll suave hacia arriba
        window.scrollBy({
            top: -window.innerHeight * 0.5,
            behavior: 'smooth'
        });
        HapticFeedback.light();
    }

    onSwipeDown() {
        // Scroll suave hacia abajo
        window.scrollBy({
            top: window.innerHeight * 0.5,
            behavior: 'smooth'
        });
        HapticFeedback.light();
    }

    navigateSection(direction) {
        const sections = document.querySelectorAll('section[id]');
        const currentScroll = window.pageYOffset;
        let currentSection = 0;

        // Encontrar sección actual
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                currentSection = index;
            }
        });

        const targetSection = currentSection + direction;
        if (targetSection >= 0 && targetSection < sections.length) {
            sections[targetSection].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Sistema de carga diferida optimizado
class LazyLoader {
    constructor() {
        this.imageObserver = null;
        this.animationObserver = null;
    }

    init() {
        this.setupImageLazyLoading();
        this.setupAnimationLazyLoading();
    }

    setupImageLazyLoading() {
        const imageObserverOptions = {
            root: null,
            rootMargin: DeviceDetector.isMobile() ? '50px' : '100px',
            threshold: 0.1
        };

        this.imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    if (img.dataset.src) {
                        // Crear imagen placeholder mientras carga
                        const placeholder = document.createElement('div');
                        placeholder.style.cssText = `
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                            background-size: 200% 100%;
                            animation: loading 1.5s infinite;
                        `;

                        img.parentNode.style.position = 'relative';
                        img.parentNode.appendChild(placeholder);

                        // Cargar imagen real
                        const realImg = new Image();
                        realImg.onload = () => {
                            img.src = img.dataset.src;
                            img.style.opacity = '0';
                            img.style.transition = 'opacity 0.3s ease';

                            // Fade in
                            setTimeout(() => {
                                img.style.opacity = '1';
                                if (placeholder.parentNode) {
                                    placeholder.parentNode.removeChild(placeholder);
                                }
                            }, 50);
                        };

                        realImg.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }

                    this.imageObserver.unobserve(img);
                }
            });
        }, imageObserverOptions);

        // Observar todas las imágenes con data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            this.imageObserver.observe(img);
        });
    }

    setupAnimationLazyLoading() {
        const animationObserverOptions = {
            root: null,
            rootMargin: DeviceDetector.isMobile() ? '20px' : '50px',
            threshold: DeviceDetector.isMobile() ? 0.1 : 0.3
        };

        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;

                    // Añadir clase de animación según el dispositivo
                    if (DeviceDetector.isMobile()) {
                        element.classList.add('animate-mobile');
                    } else {
                        element.classList.add('animate-desktop');
                    }

                    // Efectos especiales para elementos importantes
                    if (element.classList.contains('project-card')) {
                        setTimeout(() => {
                            element.style.transform = 'translateY(0) scale(1)';
                            element.style.opacity = '1';
                        }, Math.random() * 200);
                    }

                    this.animationObserver.unobserve(element);
                }
            });
        }, animationObserverOptions);

        // Observar elementos animables
        document.querySelectorAll('.card, .project-card, .skill-item, .fade-in').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            this.animationObserver.observe(element);
        });
    }
}

// Optimizador de rendimiento
class PerformanceOptimizer {
    constructor() {
        this.rafId = null;
        this.scrollCallbacks = [];
        this.resizeCallbacks = [];
        this.isScrolling = false;
        this.isResizing = false;
    }

    init() {
        this.setupScrollOptimization();
        this.setupResizeOptimization();
        this.setupImageOptimization();
        this.setupMemoryOptimization();
    }

    setupScrollOptimization() {
        let scrollTimeout;

        const optimizedScrollHandler = () => {
            if (!this.isScrolling) {
                this.isScrolling = true;
                document.body.classList.add('scrolling');
            }

            // Ejecutar callbacks de scroll
            this.scrollCallbacks.forEach(callback => callback());

            // Detectar fin de scroll
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.isScrolling = false;
                document.body.classList.remove('scrolling');
            }, 150);
        };

        // Throttled scroll usando requestAnimationFrame
        window.addEventListener('scroll', () => {
            if (!this.rafId) {
                this.rafId = requestAnimationFrame(() => {
                    optimizedScrollHandler();
                    this.rafId = null;
                });
            }
        }, { passive: true });
    }

    setupResizeOptimization() {
        let resizeTimeout;

        const optimizedResizeHandler = () => {
            this.isResizing = true;
            this.resizeCallbacks.forEach(callback => callback());

            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.isResizing = false;
            }, 250);
        };

        window.addEventListener('resize', optimizedResizeHandler, { passive: true });
    }

    setupImageOptimization() {
        // Optimizar imágenes según el dispositivo
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            if (DeviceDetector.isMobile()) {
                // Reducir calidad en móviles si es necesario
                if (img.src && !img.src.includes('webp')) {
                    img.loading = 'lazy';
                }
            }

            // Añadir event listeners para optimización
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });

            img.addEventListener('error', () => {
                img.style.display = 'none';
            });
        });
    }

    setupMemoryOptimization() {
        // Limpiar elementos no visibles periódicamente
        setInterval(() => {
            this.cleanupInvisibleElements();
        }, 30000); // Cada 30 segundos

        // Detectar cuando la página se oculta para pausar animaciones
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimations();
            } else {
                this.resumeAnimations();
            }
        });
    }

    cleanupInvisibleElements() {
        // Remover partículas y efectos que ya no son visibles
        const particles = document.querySelectorAll('[style*="animation"]');
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }
        });
    }

    pauseAnimations() {
        document.body.classList.add('animations-paused');
    }

    resumeAnimations() {
        document.body.classList.remove('animations-paused');
    }

    addScrollCallback(callback) {
        this.scrollCallbacks.push(callback);
    }

    addResizeCallback(callback) {
        this.resizeCallbacks.push(callback);
    }
}

// Inicialización completa del portfolio
class PortfolioManager {
    constructor() {
        this.particleSystem = new ParticleSystem();
        this.touchHandler = new TouchGestureHandler();
        this.lazyLoader = new LazyLoader();
        this.performanceOptimizer = new PerformanceOptimizer();
        this.isInitialized = false;
    }

    async init() {
        if (this.isInitialized) return;

        try {
            // Mostrar loader de carga
            this.showLoader();

            // Inicializar componentes básicos primero
            await this.initializeCore();

            // Inicializar componentes avanzados
            await this.initializeAdvanced();

            // Aplicar estilos CSS finales
            this.injectFinalCSS();

            // Ocultar loader
            this.hideLoader();

            this.isInitialized = true;
            console.log('Portfolio initialized successfully');

            // Mostrar notificación de bienvenida
            setTimeout(() => {
                NotificationSystem.show(
                    DeviceDetector.isMobile() ?
                    '¡Desliza para navegar! 👆' :
                    '¡Portfolio cargado correctamente! 🚀',
                    'success'
                );
            }, 1000);

        } catch (error) {
            console.error('Error initializing portfolio:', error);
            NotificationSystem.show('Error al cargar el portfolio', 'error');
        }
    }

    showLoader() {
        const loader = document.createElement('div');
        loader.id = 'portfolio-loader';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            color: white;
            font-family: Arial, sans-serif;
        `;

        loader.innerHTML = `
            <div style="
                width: ${DeviceDetector.isMobile() ? '50px' : '80px'};
                height: ${DeviceDetector.isMobile() ? '50px' : '80px'};
                border: 4px solid rgba(255,255,255,0.3);
                border-top: 4px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 20px;
            "></div>
            <p style="
                font-size: ${DeviceDetector.isMobile() ? '16px' : '20px'};
                margin: 0;
                opacity: 0.9;
            ">Cargando Portfolio...</p>
        `;

        document.body.appendChild(loader);
    }

    hideLoader() {
        const loader = document.getElementById('portfolio-loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }
    }

    async initializeCore() {
        // Componentes básicos
        initializeEnhancedAnimations();
        initializeFloatingMenu();
        initializeProjectCards();
        initializeSmoothScroll();

        // Optimizador de rendimiento
        this.performanceOptimizer.init();

        // Carga diferida
        this.lazyLoader.init();
    }

    async initializeAdvanced() {
        // Componentes avanzados (solo si el dispositivo puede manejarlos)
        if (!DeviceDetector.isMobile() || window.innerWidth > 480) {
            this.particleSystem.isActive = true;
            this.particleSystem.init();
        }

        // Parallax solo en desktop
        if (DeviceDetector.isDesktop()) {
            initializeParallax();
        }

        // Gestos táctiles en móviles
        if (DeviceDetector.isMobile()) {
            this.touchHandler.init();
        }
    }

    injectFinalCSS() {
        const finalStyles = document.createElement('style');
        finalStyles.id = 'portfolio-final-styles';
        finalStyles.textContent = `
            /* Estilos de carga */
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes loading {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }

            /* Animaciones optimizadas para móviles */
            .animate-mobile {
                animation: slideInMobile 0.4s ease-out forwards;
            }

            .animate-desktop {
                animation: slideInDesktop 0.6s ease-out forwards;
            }

            @keyframes slideInMobile {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes slideInDesktop {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            /* Optimizaciones de scroll */
            .scrolling * {
                pointer-events: none;
            }

            .scrolling .project-card {
                transition-duration: 0.1s !important;
            }

            /* Pausar animaciones cuando no es visible */
            .animations-paused * {
                animation-play-state: paused !important;
            }

            /* Mejoras para dispositivos táctiles */
            @media (hover: none) {
                .project-card:hover {
                    transform: none !important;
                }
                
                .project-card:active {
                    transform: translateY(-5px) scale(1.01) !important;
                    transition: transform 0.1s ease !important;
                }
            }

            /* Optimizaciones para pantallas pequeñas */
            @media (max-width: 480px) {
                .floating-menu {
                    bottom: 10px !important;
                    right: 10px !important;
                    width: 45px !important;
                    height: 45px !important;
                }
                
                .project-card {
                    margin-bottom: 15px !important;
                }
                
                .notification {
                    font-size: 13px !important;
                    padding: 10px 14px !important;
                }
            }

            /* Mejoras de accesibilidad */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }

            /* Mejoras de contraste para pantallas OLED */
            @media (prefers-contrast: high) {
                .project-card {
                    border: 2px solid var(--primary-color, #00d4ff);
                }
                
                .floating-menu {
                    border: 2px solid white;
                }
            }
        `;

        document.head.appendChild(finalStyles);
    }
}

// Auto-inicialización cuando el DOM esté listo
const portfolioManager = new PortfolioManager();

// Inicializar cuando todo esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => portfolioManager.init(), 100);
    });
} else {
    setTimeout(() => portfolioManager.init(), 100);
}

// Manejo de errores globales
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
    NotificationSystem.show('Se produjo un error inesperado', 'error');
});

// Exportar para uso externo si es necesario
window.PortfolioManager = portfolioManager;
window.DeviceDetector = DeviceDetector;
window.VisualEffects = VisualEffects;
window.HapticFeedback = HapticFeedback;
window.NotificationSystem = NotificationSystem;