'use client';
// Final UI synchronization push

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function useSlowerTypewriter(text: string, speed = 130, startDelay = 500) {
    const [displayed, setDisplayed] = useState('');
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => setIsStarted(true), startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted) return;
        if (displayed.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayed(text.slice(0, displayed.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [displayed, text, speed, isStarted]);

    return displayed;
}

const ParticleCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const PARTICLE_COUNT = 55;
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            r: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
        }));

        const isLight = document.documentElement.classList.contains('light');
        const colorBase = isLight ? '0, 0, 0' : '255, 255, 255';

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${colorBase}, ${isLight ? Math.min(1, p.opacity * 1.8) : p.opacity * 0.5})`;
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${colorBase}, ${(isLight ? 0.7 : 0.05) * (1 - dist / 140)})`;
                        ctx.lineWidth = isLight ? 0.6 : 0.4;
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
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />;
};

interface LoadingScreenProps {
    onLoadingComplete?: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [showShimmer, setShowShimmer] = useState(false);

    const mainText = "LOADING PORTFOLIO";
    const subText = "created by Santino";

    const displayedMain = useSlowerTypewriter(mainText, 80, 400);
    const displayedSub = useSlowerTypewriter(subText, 70, 1800);

    useEffect(() => {
        if (isVisible) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
        return () => {
            document.documentElement.classList.remove('no-scroll');
        };
    }, [isVisible]);

    useEffect(() => {
        if (displayedMain === mainText) {
            const delayTimer = setTimeout(() => setShowShimmer(true), 500);
            return () => clearTimeout(delayTimer);
        }
    }, [displayedMain, mainText]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 6500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#000000] overflow-hidden"
                    style={{ willChange: 'opacity' }}
                    exit={{ opacity: 0 }}
                    onAnimationComplete={() => {
                        if (!isVisible && onLoadingComplete) {
                            onLoadingComplete();
                        }
                    }}
                >
                    {/* Overlay Panels for elegant transition */}
                    <div className="absolute inset-0 z-[50] flex flex-col pointer-events-none">
                        <motion.div
                            initial={{ x: '-100%' }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="h-1/2 w-full bg-[#0a0a0a]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="h-1/2 w-full bg-[#0a0a0a]"
                        />
                    </div>

                    <ParticleCanvas />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-center gap-8 z-10 px-6 text-center"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <h2
                                className="text-[2rem] sm:text-[3.15rem] lg:text-[5rem] font-black tracking-tighter font-inter select-none leading-none text-transparent bg-clip-text transition-[background-image] duration-1000 pr-2"
                                style={{
                                    backgroundImage: showShimmer
                                        ? 'var(--loader-shimmer-bg)'
                                        : 'var(--loader-idle-bg)',
                                    backgroundSize: showShimmer ? '200% auto' : '100% auto',
                                    animation: showShimmer ? 'shimmer 4s linear infinite' : 'none'
                                }}
                            >
                                {displayedMain}
                                {displayedMain.length < mainText.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-[4px] h-[26px] sm:h-[42px] lg:h-[64px] bg-[var(--accent-hex)] ml-2 align-middle shadow-[0_0_15px_var(--accent-hex)]"
                                    />
                                )}
                            </h2>

                            <div className="h-8 flex items-center justify-center">
                                <p className="text-[10px] sm:text-xs lg:text-sm font-code text-[#737373] tracking-[0.5em] font-medium uppercase select-none">
                                    {displayedSub.slice(0, 11)}
                                    <span className="text-black dark:text-white font-black tracking-[0.6em] ml-1">
                                        {displayedSub.slice(11)}
                                    </span>
                                    {displayedSub.length > 0 && displayedSub.length < subText.length && (
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="inline-block w-[2px] h-[12px] bg-[var(--accent-hex)] ml-2 align-middle"
                                        />
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Progress Bar */}
                        <div className="fixed bottom-0 left-0 w-full h-[5px] bg-black/5 dark:bg-white/5">
                            <motion.div
                                className="h-full bg-[var(--accent-hex)]"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 6.5, ease: 'linear' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
