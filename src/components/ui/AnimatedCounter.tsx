'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function AnimatedCounter({
    value,
    suffix = '',
    duration = 2000,
    className,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
            {suffix}
        </span>
    );
}
