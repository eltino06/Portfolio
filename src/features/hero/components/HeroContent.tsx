'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { DownloadModal } from '@/components/ui/DownloadModal';
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
        dict.roles?.java || 'Arquitectura Backend',
        dict.roles?.fullstack || 'Ingeniería de Producto',
        dict.roles?.backend || 'Sistemas Escalables',
        dict.roles?.solver || 'Resolución de Problemas'
    ];
    const typedText = useTypewriter(typewriterRoles, 60, 2500);


    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <>
            <ParticleCanvas />

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center pt-20 pb-16 sm:pt-24 sm:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
                    <motion.div
                        className="flex flex-col gap-4 text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p variants={itemVariants} className="font-code text-[var(--accent-hex)] text-sm tracking-widest">
                            {dict.greeting}
                        </motion.p>

                        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            {personalInfo.firstName}
                            <span className="gradient-text"> Bondioni</span>
                        </motion.h1>



                        <motion.p variants={itemVariants} className="text-[hsl(var(--muted-foreground))] max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg lg:text-xl">
                            {dict.subtitle}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex min-h-[40px] items-center justify-center lg:justify-start">
                            <Badge variant="accent" className="text-sm px-4 py-1.5 font-medium tracking-wide select-none">
                                {typedText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-[2px] h-[14px] bg-current ml-1 align-middle"
                                />
                            </Badge>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mt-2 justify-center lg:justify-start">
                            <Link
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('projects', 1000);
                                }}
                            >
                                <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base sm:text-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--muted-foreground))] rounded-none">
                                    {dict.viewProjects}
                                </Button>
                            </Link>
                            <Link
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('contact', 1200);
                                }}
                                className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors text-sm font-bold border-b border-transparent hover:border-[hsl(var(--foreground))] pb-1 uppercase tracking-wider"
                            >
                                <Mail size={16} />
                                {dict.contact}
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
                            {personalInfo.socials.linkedin && (
                                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[#0a66c2] transition-colors duration-200">
                                    <Linkedin size={18} />
                                    <span className="hidden sm:inline">LinkedIn</span>
                                </a>
                            )}
                            {personalInfo.socials.github && (
                                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200">
                                    <Github size={18} />
                                    <span className="hidden sm:inline">GitHub</span>
                                </a>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Right side spacer for desktop to maintain layout balance if needed, or leave empty */}
                    <div className="hidden lg:block h-1" />
                </div>

                <motion.div
                    className="w-full max-w-7xl mt-8 sm:mt-12 lg:mt-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--border))] border border-[hsl(var(--border))] rounded-[2px] overflow-hidden shadow-2xl">
                        {stats.map((stat: any, i: number) => (
                            <motion.div
                                key={stat.label}
                                className="bg-[hsl(var(--background))] group p-4 flex flex-col items-center justify-center text-center h-[100px] relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                            >
                                <div className="flex flex-col items-center justify-center flex-1 w-full gap-1 z-10 font-code">
                                    <div className="text-3xl sm:text-4xl font-bold text-[hsl(var(--foreground))]">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-[9px] sm:text-[10px] text-[hsl(var(--muted-foreground))] tracking-[0.2em] uppercase px-2 w-full leading-tight font-bold opacity-70">
                                        {statsDict?.[stat.label.split('.')[1]] || stat.label}
                                    </div>
                                </div>

                                {/* Subtle hover effect background */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent-hex)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

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
                    <span className="text-xs tracking-widest font-code group-hover:text-[var(--accent-hex)] transition-colors">{dict.scroll}</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="group-hover:text-[var(--accent-hex)] transition-colors"
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </a>
        </>
    );
}
