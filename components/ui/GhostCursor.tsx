'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function GhostCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const updateMousePosition = (e: MouseEvent) => {
            setIsVisible(true);
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Hide the cursor if the user stops moving for 2 seconds
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsVisible(false), 2000);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed pointer-events-none z-[9999]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: mousePosition.x - 10, // Center coordinate (20px width / 2)
                        y: mousePosition.y - 10,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        x: { type: 'spring', damping: 30, mass: 0.5, stiffness: 400 },
                        y: { type: 'spring', damping: 30, mass: 0.5, stiffness: 400 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 }
                    }}
                >
                    {/* The Cursor Circle */}
                    <div className="relative">
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-hex)] opacity-50 blur-[2px]" />
                        <div className="absolute inset-0 w-5 h-5 rounded-full border border-[var(--accent-hex)] opacity-80" />

                        {/* Pulse effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-[var(--accent-hex)] opacity-30"
                            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />

                        {/* Leading Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
