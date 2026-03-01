'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { smoothScrollTo } from '@/lib/utils';
import { useTypewriter } from '../hooks/useTypewriter';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroContentProps {
    personalInfo: any;
    stats: any;
    dict: any;
    statsDict: any;
}

export function HeroContent({ personalInfo, stats, dict, statsDict }: HeroContentProps) {
    const typewriterRoles = [
        dict.roles?.java || 'Backend Architecture',
        dict.roles?.fullstack || 'Product Development',
        dict.roles?.backend || 'Scalable Systems',
        dict.roles?.solver || 'Problem Solving'
    ];
    const typedText = useTypewriter(typewriterRoles, 60, 2500);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <>
            <ParticleCanvas />

            <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start py-24 lg:py-0">
                <motion.div
                    className="flex flex-col gap-5 max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Greeting mono label */}
                    <motion.p variants={itemVariants} className="font-mono text-[var(--accent-hex)] text-sm tracking-wide">
                        {dict.greeting}
                    </motion.p>

                    {/* Name - massive heading */}
                    <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] text-balance">
                        {personalInfo.firstName}
                        <span className="gradient-text"> Bondioni.</span>
                    </motion.h1>

                    {/* Typewriter role */}
                    <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--muted-foreground))] tracking-tight leading-tight text-balance">
                        {typedText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-[3px] h-[0.8em] bg-[var(--accent-hex)] ml-1 align-middle"
                        />
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p variants={itemVariants} className="text-[hsl(var(--muted-foreground))] max-w-lg leading-relaxed text-base">
                        {dict.subtitle}
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
                        <Link
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                smoothScrollTo('projects', 1000);
                            }}
                            className="inline-flex items-center justify-center h-12 px-7 font-mono text-sm border border-[var(--accent-hex)] text-[var(--accent-hex)] rounded-md hover:bg-[var(--accent-glow)] transition-all duration-200"
                        >
                            {dict.viewProjects}
                        </Link>
                        <Link
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                smoothScrollTo('contact', 1200);
                            }}
                            className="inline-flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors text-sm font-mono"
                        >
                            <Mail size={14} />
                            {dict.contact}
                        </Link>
                    </motion.div>

                    {/* Social links */}
                    <motion.div variants={itemVariants} className="flex items-center gap-5 mt-2">
                        {personalInfo.socials.github && (
                            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] hover:-translate-y-0.5 transition-all duration-200" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        )}
                        {personalInfo.socials.linkedin && (
                            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] hover:-translate-y-0.5 transition-all duration-200" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        )}
                    </motion.div>
                </motion.div>

                {/* Stats row at the bottom */}
                <motion.div
                    className="mt-16 lg:mt-20 w-full grid grid-cols-2 sm:grid-cols-4 gap-px border border-[hsl(var(--border))] rounded-md overflow-hidden bg-[hsl(var(--border))]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    {stats.map((stat: any, i: number) => (
                        <motion.div
                            key={stat.label}
                            className="bg-[hsl(var(--background))] flex flex-col items-center justify-center text-center py-6 px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                        >
                            <div className="text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] text-[hsl(var(--muted-foreground))] tracking-widest uppercase mt-1 font-mono">
                                {statsDict?.[stat.label.split('.')[1]] || stat.label}
                            </div>
                        </motion.div>
                    ))}
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
                    <span className="text-[10px] tracking-[0.3em] font-mono group-hover:text-[var(--accent-hex)] transition-colors uppercase">{dict.scroll}</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="group-hover:text-[var(--accent-hex)] transition-colors"
                    >
                        <ArrowDown size={14} />
                    </motion.div>
                </motion.div>
            </a>
        </>
    );
}
