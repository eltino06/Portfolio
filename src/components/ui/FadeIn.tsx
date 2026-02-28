'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    scale?: number;
    whileHover?: any;
}

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = "",
    scale = 1,
    whileHover
}: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    };

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction],
                scale: scale
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1
            }}
            whileHover={whileHover}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
}

export { Section };
