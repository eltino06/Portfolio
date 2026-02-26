'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAVIGATION_POINTS = [
    { x: '20%', y: '30%', label: 'Hero Section', delay: 2000 },
    { x: '80%', y: '20%', label: 'Tech Badges', delay: 3000 },
    { x: '50%', y: '90%', label: 'Scroll Down', delay: 4000 },
    { x: '30%', y: '150%', label: 'Sobre Mí', delay: 6000 },
    { x: '70%', y: '160%', label: 'Dato Rápido', delay: 8000 },
    { x: '50%', y: '300%', label: 'Skills Grid', delay: 10000 },
];

export function GhostCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: '50%', y: '50%' });
    const lastUserActivity = useRef(Date.now());
    const isActive = useRef(true);

    useEffect(() => {
        const handleInteraction = () => {
            lastUserActivity.current = Date.now();
            setIsVisible(false); // Hide ghost when real human is active
        };

        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('mousedown', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        const checkInactivity = setInterval(() => {
            const now = Date.now();
            // Show ghost after 4 seconds of inactivity
            if (now - lastUserActivity.current > 4000) {
                setIsVisible(true);
            }
        }, 1000);

        return () => {
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('mousedown', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            clearInterval(checkInactivity);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let currentIndex = 0;
        const moveSequence = () => {
            if (!isVisible) return;

            const point = NAVIGATION_POINTS[currentIndex];
            setPosition({ x: point.x, y: point.y });

            currentIndex = (currentIndex + 1) % NAVIGATION_POINTS.length;
            setTimeout(moveSequence, 3000);
        };

        const timeout = setTimeout(moveSequence, 500);
        return () => clearTimeout(timeout);
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed pointer-events-none z-[9999]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        left: position.x,
                        top: position.y
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        left: { type: 'spring', damping: 30, stiffness: 50 },
                        top: { type: 'spring', damping: 30, stiffness: 50 },
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.3 }
                    }}
                >
                    {/* The Cursor Circle */}
                    <div className="relative">
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-hex)] opacity-50 blur-[2px]" />
                        <div className="absolute inset-0 w-5 h-5 rounded-full border border-white opacity-80" />

                        {/* Pulse effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-[var(--accent-hex)] opacity-30"
                            animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />

                        {/* Leading Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
