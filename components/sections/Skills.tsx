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

// Removed categoryColors

import { ChevronDown, Server, MonitorSmartphone, Database, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server size={11} className="opacity-80" />,
    frontend: <MonitorSmartphone size={11} className="opacity-80" />,
    database: <Database size={11} className="opacity-80" />,
    tools: <Wrench size={11} className="opacity-80" />,
};
const maxSkillsCount = Math.max(...skillCategories.map(c => c.skills.length));
const maxCollapsedOffset = (maxSkillsCount - 1) * 5;
const globalCollapsedHeight = maxCollapsedOffset + 90;

function SkillVerticalCard({
    skill,
    index,
    isHovered,
    total
}: {
    skill: { name: string; icon: string; level: number };
    index: number;
    isHovered: boolean;
    total: number;
}) {
    const IconComponent = iconMap[skill.icon];

    // Collapsed offset
    const collapsedStep = total > 1 ? maxCollapsedOffset / (total - 1) : 0;
    const collapsedOffset = index * collapsedStep;

    // Vertical fan-out: Reduced to 90 to match original slight overlap with smaller cards
    const yOffset = isHovered ? index * 90 : collapsedOffset;

    return (
        <motion.div
            className={cn(
                "absolute top-0 left-0 right-0 mx-auto w-[78px] h-[78px] sm:w-[90px] sm:h-[90px] lg:w-[90px] lg:h-[90px] rounded-2xl bg-[hsl(var(--card))] border flex flex-col items-center justify-center p-2 shadow-md pointer-events-none",
                isHovered ? "border-[var(--accent-hex)] shadow-[0_10px_30px_-10px_var(--accent-glow)] bg-[hsl(var(--background))]" : "border-[hsl(var(--border))]"
            )}
            animate={{
                y: yOffset,
                zIndex: (total - index) * 10,
                scale: isHovered && index === 0 ? 1.05 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20
            }}
        >
            <div className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center mb-1 transition-colors duration-300",
                isHovered ? "bg-[var(--accent-hex)]/10" : "bg-[hsl(var(--muted))]"
            )}>
                {IconComponent ? (
                    <IconComponent size={18} className={cn(
                        "transition-colors duration-300",
                        isHovered ? "text-[var(--accent-hex)]" : "text-[hsl(var(--foreground))]"
                    )} />
                ) : (
                    <span className="text-xl">💻</span>
                )}
            </div>

            <span className={cn(
                "font-bold text-[8px] lg:text-[9px] text-center uppercase tracking-tight line-clamp-1 transition-colors duration-300",
                isHovered ? "text-[hsl(var(--foreground))]" : "text-[hsl(var(--muted-foreground))]"
            )}>
                {skill.name}
            </span>
        </motion.div>
    );
}

function SkillVerticalStack({ category }: { category: SkillCategory }) {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic expanded height
    const expandedHeight = (category.skills.length - 1) * 90 + 90;
    const collapsedHeight = globalCollapsedHeight;

    return (
        <div className="flex flex-col items-center gap-6 w-full relative">
            {/* Category header */}
            <div className="flex flex-col items-center gap-2">
                <span
                    className={cn(
                        'flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] border whitespace-nowrap transition-all duration-300',
                        'text-white border-transparent animate-moving-gradient',
                        'bg-gradient-to-r from-[var(--accent-hex)] via-purple-500 to-[var(--accent-hex)]',
                        isHovered && 'shadow-[0_0_20px_var(--accent-glow)] scale-105'
                    )}
                >
                    {categoryIcons[category.id]}
                    {t(`skills.categories.${category.id}`)}
                </span>
            </div>

            <div className="relative w-full flex flex-col items-center">
                <motion.div
                    className="relative w-[78px] sm:w-[90px] lg:w-[90px] cursor-pointer mx-auto z-10"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    animate={{ height: isHovered ? expandedHeight : collapsedHeight }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    {category.skills.map((skill, i) => (
                        <SkillVerticalCard
                            key={skill.name}
                            skill={skill}
                            index={i}
                            isHovered={isHovered}
                            total={category.skills.length}
                        />
                    ))}
                </motion.div>

                {/* Animated Hover Hint */}
                <AnimatePresence>
                    {!isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -bottom-8 flex flex-col items-center justify-center text-[hsl(var(--muted-foreground))] pointer-events-none"
                        >
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ChevronDown size={16} className="opacity-50" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export function SkillsSection() {
    const { t } = useLanguage();

    return (
        <Section id="skills" className="pb-12 lg:pb-16">
            <SectionHeading
                label={t('skills.title')}
                title={t('skills.subtitle')}
                subtitle={t('skills.subtitle')} // Using subtitle key from translations
            />

            {/* Desktop 4-Column Vertical Stack Layout */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-4 lg:gap-8 mt-16 w-full items-start">
                {skillCategories.map((category) => (
                    <SkillVerticalStack key={category.id} category={category} />
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
                                    'flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border whitespace-nowrap',
                                    'text-white border-transparent animate-moving-gradient bg-gradient-to-r from-[var(--accent-hex)] via-purple-500 to-[var(--accent-hex)]'
                                )}
                            >
                                {categoryIcons[category.id]}
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
                                        className="w-20 h-20 shrink-0 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex flex-col items-center justify-center p-2 shadow-sm snap-center"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center mb-1.5">
                                            {IconComponent ? (
                                                <IconComponent size={20} className="text-[hsl(var(--foreground))]" />
                                            ) : (
                                                <span className="text-xl">💻</span>
                                            )}
                                        </div>
                                        <span className="font-bold text-[8px] text-center uppercase tracking-tight line-clamp-1 text-[hsl(var(--muted-foreground))]">
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
