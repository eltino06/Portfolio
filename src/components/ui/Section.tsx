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
                'relative w-full px-6 lg:px-8 py-20 lg:py-28',
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
            <div className="relative max-w-6xl mx-auto">{children}</div>
        </motion.section>
    );
}

/** Reusable section heading with accent numbering */
export function SectionHeading({
    label,
    title,
    subtitle,
    number,
}: {
    label: string;
    title: string;
    subtitle?: string;
    number?: string;
}) {
    return (
        <div className="mb-12 lg:mb-16">
            <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {number && (
                    <span className="font-mono text-[var(--accent-hex)] text-sm">{number}.</span>
                )}
                <span className="font-mono text-[var(--accent-hex)] text-xs tracking-widest uppercase">
                    {label}
                </span>
                <div className="h-px flex-1 max-w-[200px] bg-[hsl(var(--border))]" />
            </motion.div>
            <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    className="mt-3 text-[hsl(var(--muted-foreground))] max-w-xl leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
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
