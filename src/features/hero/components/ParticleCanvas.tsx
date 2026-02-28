'use client';

import { useTheme } from '@/hooks/useTheme';
import { useEffect, useRef } from 'react';

export const ParticleCanvas = () => {
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

        const density = window.innerWidth < 768 ? 80 : 350;
        const PARTICLE_COUNT = density;
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            r: Math.random() * 2.0 + 1.0,
            opacity: Math.random() * 0.5 + 0.3,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.008;

            let mx = mouseRef.current.x;
            let my = mouseRef.current.y;

            const particleColor = isDark ? '255, 255, 255' : '30, 30, 30';
            const alphaMultiplier = 1.6;

            if (!isInteracting.current) {
                mx = canvas.width / 2 + Math.cos(time * 0.5) * (canvas.width * 0.12);
                my = canvas.height / 2 + Math.sin(time * 0.8) * (canvas.height * 0.08);
            }

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const dxm = mx - p.x;
                const dym = my - p.y;
                const distM = Math.sqrt(dxm * dxm + dym * dym);

                if (distM < 150 && distM > 85) {
                    p.x += dxm * 0.003;
                    p.y += dym * 0.003;
                } else if (distM <= 85 && distM > 0) {
                    const repelPower = 0.02 * (1 - distM / 85);
                    p.x -= dxm * repelPower;
                    p.y -= dym * repelPower;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.globalAlpha = p.opacity * alphaMultiplier;
                ctx.fillStyle = `rgb(${particleColor})`;
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
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
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
            }}
            aria-hidden="true"
        />
    );
};
