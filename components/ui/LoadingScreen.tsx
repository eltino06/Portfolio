'use client';

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
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - dist / 140)})`;
                        ctx.lineWidth = 0.4;
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

    const displayedMain = useSlowerTypewriter(mainText, 130, 500);
    const displayedSub = useSlowerTypewriter(subText, 110, 2300);

    useEffect(() => {
        if (displayedMain === mainText) {
            const delayTimer = setTimeout(() => setShowShimmer(true), 1000);
            return () => clearTimeout(delayTimer);
        }
    }, [displayedMain, mainText]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) {
                setTimeout(onLoadingComplete, 200);
            }
        }, 7500);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050507] overflow-hidden"
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: 'blur(20px)',
                        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
                    }}
                >
                    <ParticleCanvas />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-center gap-8 z-10 px-6 text-center"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <h2
                                className="text-3xl sm:text-5xl lg:text-[4.75rem] font-black tracking-tighter font-inter select-none leading-none text-transparent bg-clip-text transition-[background-image] duration-1000 pr-2"
                                style={{
                                    backgroundImage: showShimmer
                                        ? 'linear-gradient(90deg, #525252 0%, #525252 40%, #ffffff 50%, #525252 60%, #525252 100%)'
                                        : 'linear-gradient(90deg, #525252, #525252)',
                                    backgroundSize: showShimmer ? '200% auto' : '100% auto',
                                    animation: showShimmer ? 'shimmer 2s linear infinite' : 'none'
                                }}
                            >
                                {displayedMain}
                                {displayedMain.length < mainText.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-[4px] h-[30px] sm:h-[50px] lg:h-[72px] bg-[var(--accent-hex)] ml-2 align-middle shadow-[0_0_15px_var(--accent-hex)]"
                                    />
                                )}
                            </h2>

                            <div className="h-8 flex items-center justify-center">
                                <p className="text-[10px] sm:text-xs lg:text-sm font-code text-[#737373] tracking-[0.5em] font-medium uppercase select-none">
                                    {displayedSub.slice(0, 11)}
                                    <span className="text-white relative">
                                        {displayedSub.slice(11)}
                                        {displayedSub.length >= subText.length && (
                                            <motion.span
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 0.5, duration: 1 }}
                                                className="absolute -bottom-1 left-0 w-full h-px bg-white/40 origin-left"
                                            />
                                        )}
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

                        {/* Video Game Style Corner Spinner - Ultra Minimalist */}
                        <div className="fixed bottom-4 right-4 flex items-center justify-center">
                            <motion.div
                                className="w-4 h-4 rounded-full border-[2px] border-transparent border-t-[var(--accent-hex)] border-r-[var(--accent-hex)]"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'translateZ(0)',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            <div className="absolute w-4 h-4 rounded-full border-[2px] border-white/[0.05]" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
