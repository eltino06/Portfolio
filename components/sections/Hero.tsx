'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { personalInfo, stats } from '@/lib/data';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/context/LanguageContext';
import { DownloadModal } from '@/components/ui/DownloadModal';
import { Download } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

function useTypewriter(words: readonly string[], speed = 100, pause = 2000) {
    const [displayed, setDisplayed] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const nextDisplayed = currentWord.slice(0, displayed.length + 1);
                setDisplayed(nextDisplayed);
                if (nextDisplayed.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                const nextDisplayed = currentWord.slice(0, displayed.length - 1);
                setDisplayed(nextDisplayed);
                if (nextDisplayed.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, wordIndex, words, speed, pause]);

    return displayed;
}


// ─── Particle Canvas (lightweight, no Three.js needed) ───────
const ParticleCanvas = () => {
    const { isDark } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const isInteracting = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let time = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            isInteracting.current = true;
        };
        const handleMouseLeave = () => {
            isInteracting.current = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const PARTICLE_COUNT = 150; // Increased to 150 per user request
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.35, // Slightly slower
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.2 + 0.05,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.008; // Slightly slower movement

            // Virtual mouse position when not interacting (auto-movement)
            let mx = mouseRef.current.x;
            let my = mouseRef.current.y;

            const particleColor = isDark ? '255, 255, 255' : '150, 150, 150'; // White or Grayish for light mode
            const alphaMultiplier = isDark ? 1.5 : 4.5; // Boosted in light mode

            if (!isInteracting.current) {
                // Smooth circular path in the middle
                mx = canvas.width / 2 + Math.cos(time * 0.5) * (canvas.width * 0.12);
                my = canvas.height / 2 + Math.sin(time * 0.8) * (canvas.height * 0.08);
            }

            // Update and draw particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce or wrap
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Virtual/Real mouse interaction - slight attraction
                const dxm = mx - p.x;
                const dym = my - p.y;
                const distM = Math.sqrt(dxm * dxm + dym * dym);
                if (distM < 150) {
                    p.x += dxm * 0.01;
                    p.y += dym * 0.01;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.globalAlpha = p.opacity * alphaMultiplier;
                ctx.fillStyle = `rgb(${particleColor})`;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                const dxm = mx - particles[i].x;
                const dym = my - particles[i].y;
                const distM = Math.sqrt(dxm * dxm + dym * dym);
                if (distM < 200) {
                    ctx.beginPath();
                    ctx.globalAlpha = 0.2 * (1 - distM / 200) * (isDark ? 1 : 2.5);
                    ctx.strokeStyle = `rgb(${particleColor})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mx, my);
                    ctx.stroke();
                }

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.globalAlpha = 0.15 * (1 - dist / 120) * (isDark ? 1 : 2.5);
                        ctx.strokeStyle = `rgb(${particleColor})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
            aria-hidden="true"
        />
    );
};

// ─── Hero Section ─────────────────────────────────────────────
export function HeroSection() {
    const { t } = useLanguage();
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const typedText = useTypewriter(personalInfo.roles.map(role => t(role)));
    const techBadges = ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker'];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        >
            {/* Particle background */}
            <ParticleCanvas />

            {/* Gradient blobs (Very low intensity) */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--accent-hex)] opacity-[0.015] dark:opacity-[0.01] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--accent-hex)] opacity-[0.015] dark:opacity-[0.01] blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-24">
                {/* ─── Left: Text Content ─── */}
                <motion.div
                    className="flex flex-col gap-6 text-center lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={itemVariants}
                        className="font-code text-[var(--accent-hex)] text-sm tracking-widest"
                    >
                        {t('hero.greeting')}
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                    >
                        {personalInfo.firstName}
                        <span className="gradient-text"> Bondioni</span>
                    </motion.h1>

                    {/* Typewriter role (Hidden for Premium Minimal, replaced by subtext) */}
                    <div className="h-4" />

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[hsl(var(--muted-foreground))] max-w-md mx-auto lg:mx-0 leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* Tech badges */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-2 justify-center lg:justify-start"
                    >
                        {techBadges.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + i * 0.08 }}
                            >
                                <Badge variant="accent">
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Single strong CTA + Secondary Link */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-6 mt-4 justify-center lg:justify-start"
                    >
                        <Link href="#projects">
                            <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base sm:text-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--muted-foreground))] rounded-none">
                                {t('hero.viewProjects')}
                            </Button>
                        </Link>
                        <Link
                            href="#experience"
                            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors text-sm font-medium border-b border-transparent hover:border-[hsl(var(--foreground))] pb-1"
                        >
                            {t('hero.viewExperience')}
                        </Link>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200"
                        >
                            <Github size={18} />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* ─── Right: Stats / Abstract Visual ─── */}
                <motion.div
                    className="relative flex flex-col items-center justify-center min-h-[400px]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Background Decorative Element (Removed for brutalism) */}

                    {/* Floating Abstract "Code" Shapes or Higher-Fi Stats */}
                    <div className="relative w-full grid grid-cols-2 gap-px bg-[hsl(var(--border))] border border-[hsl(var(--border))] max-w-sm rounded-[2px] overflow-hidden">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="bg-[hsl(var(--background))] group p-5 flex flex-col items-center justify-center text-center h-[120px] relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                <div className="flex flex-col items-center justify-center flex-1 w-full gap-2 z-10">
                                    <div className="text-3xl font-medium text-[hsl(var(--foreground))]">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-[10px] text-[hsl(var(--muted-foreground))] tracking-wider uppercase px-2 w-full leading-tight">
                                        {t(stat.label)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo('about', 1200);
                }}
            >
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))] cursor-pointer group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-xs tracking-widest font-code group-hover:text-[var(--accent-hex)] transition-colors">{t('hero.scroll')}</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="group-hover:text-[var(--accent-hex)] transition-colors"
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </a>

            <DownloadModal
                isOpen={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
            />
        </section >
    );
}
