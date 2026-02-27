'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeading } from '@/components/ui/Section';
import { skillCategories, type SkillCategory } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiTypescript,
    SiNodedotjs, SiOpenjdk, SiExpress, SiMysql, SiGit, SiDocker,
    SiFigma, SiPostman, SiAmazonwebservices, SiSpringboot, SiNextdotjs,
    SiTailwindcss, SiPostgresql, SiPrisma, SiGithub, SiLinux
} from 'react-icons/si';
import { cn } from '@/lib/utils';

// Map icon names to actual components
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiTypescript,
    SiNodedotjs, SiOpenjdk, SiExpress, SiMysql, SiGit, SiDocker,
    SiFigma, SiPostman, SiAmazonwebservices, SiSpringboot, SiNextdotjs,
    SiTailwindcss, SiPostgresql, SiPrisma, SiGithub, SiLinux
};

const categoryColors: Record<string, string> = {
    accent: 'text-[var(--accent-hex)] bg-[hsl(258,90%,66%,0.1)] border-[hsl(258,90%,66%,0.3)]',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    orange: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    green: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
};



export function SkillsSection() {
    const { t } = useLanguage();

    return (
        <Section id="skills">
            <SectionHeading
                label={t('skills.title')}
                title={t('skills.subtitle')}
                subtitle={t('skills.subtitle')} // Using subtitle key from translations
            />

            {/* Desktop 4-Column Vertical Layout */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-8 mt-12 w-full items-start">
                {skillCategories.map(category => (
                    <div key={category.id} className="flex flex-col gap-6">
                        {/* Category Header */}
                        <div className="flex items-center gap-3">
                            <span className={cn(
                                'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border whitespace-nowrap',
                                categoryColors[category.color] ?? categoryColors['accent']
                            )}>
                                {t(`skills.categories.${category.id}`)}
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-[hsl(var(--border))] to-transparent" />
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {category.skills.map(skill => {
                                const IconComponent = iconMap[skill.icon];
                                return (
                                    <motion.div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center p-3 rounded-2xl glass border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] hover:shadow-[0_4px_20px_-10px_var(--accent-glow)] transition-all duration-300 w-full aspect-square group"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center mb-2 group-hover:bg-[var(--accent-hex)]/10 transition-colors duration-300">
                                            {IconComponent ? (
                                                <IconComponent size={20} className="text-[hsl(var(--foreground))] group-hover:text-[var(--accent-hex)] transition-colors duration-300" />
                                            ) : (
                                                <span className="text-xl">💻</span>
                                            )}
                                        </div>
                                        <span className="font-bold text-[9px] text-center uppercase tracking-tight line-clamp-1 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] transition-colors duration-300 w-full px-1">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Scroll Layout */}
            <div className="flex flex-col gap-12 sm:hidden mt-12 w-full">
                {skillCategories.map((category) => (
                    <div key={category.id} className="flex flex-col gap-6 w-full">
                        {/* Category header */}
                        <div className="flex items-center gap-3">
                            <span
                                className={cn(
                                    'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border whitespace-nowrap',
                                    categoryColors[category.color] ?? categoryColors['accent']
                                )}
                            >
                                {t(`skills.categories.${category.id}`)}
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-[hsl(var(--border))] to-transparent" />
                        </div>

                        {/* Mobile Scroll Sequence */}
                        <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x no-scrollbar">
                            {category.skills.map((skill) => {
                                const IconComponent = iconMap[skill.icon];
                                return (
                                    <div
                                        key={skill.name}
                                        className="w-24 h-24 shrink-0 rounded-2xl glass border border-[hsl(var(--border))] flex flex-col items-center justify-center p-2 shadow-sm snap-center"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center mb-1.5">
                                            {IconComponent ? (
                                                <IconComponent size={24} className="text-[hsl(var(--foreground))]" />
                                            ) : (
                                                <span className="text-xl">💻</span>
                                            )}
                                        </div>
                                        <span className="font-bold text-[9px] text-center uppercase tracking-tight line-clamp-1 text-[hsl(var(--muted-foreground))]">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
