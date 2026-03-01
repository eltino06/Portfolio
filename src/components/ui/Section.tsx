'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    id?: string;
    alternate?: boolean;
    noAnimate?: boolean;
}

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

export function Section({
    id,
    className,
    alternate = false,
    noAnimate = false,
    children,
    ...props
}: SectionProps) {
    return (
        <motion.section
            id={id}
            className={cn(
                'relative w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32',
                alternate && 'section-bg-alt',
                className
            )}
            initial={noAnimate ? undefined : 'hidden'}
            whileInView={noAnimate ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
            variants={noAnimate ? undefined : sectionVariants}
            {...(props as Parameters<typeof motion.section>[0])}
        >
            {/* Subtle grid pattern overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            <div className="relative max-w-7xl mx-auto">{children}</div>
        </motion.section>
    );
}

/** Reusable section heading with gradient accent */
export function SectionHeading({
    label,
    title,
    subtitle,
}: {
    label: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="text-center mb-16">
            <motion.span
                className="inline-block font-code text-xs tracking-widest uppercase text-[var(--accent-hex)] mb-3 px-3 py-1 rounded-full border border-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.3)] bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.08)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {label}
            </motion.span>
            <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    className="mt-4 text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
