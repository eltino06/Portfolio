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

// Find the maximum number of skills across all categories to calculate a uniform stack depth
const maxSkillsCount = Math.max(...skillCategories.map(c => c.skills.length));
const maxCollapsedOffset = (maxSkillsCount - 1) * 8; // 40px total depth for the biggest stack
const globalCollapsedHeight = maxCollapsedOffset + 130; // 130px is base card height roughly

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

    // Collapsed offset: calculated so every stack reaches exactly maxCollapsedOffset (40px) at the bottom
    const collapsedStep = total > 1 ? maxCollapsedOffset / (total - 1) : 0;
    const collapsedOffset = index * collapsedStep;

    // Vertical fan-out: Increased from 105 -> 125 so they overlap less
    const yOffset = isHovered ? index * 125 : collapsedOffset;

    return (
        <motion.div
            className={cn(
                "absolute top-0 left-0 right-0 mx-auto w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-32 lg:h-32 rounded-2xl bg-[hsl(var(--card))] border flex flex-col items-center justify-center p-2 shadow-md pointer-events-none",
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
                "w-12 h-12 rounded-xl flex items-center justify-center mb-1.5 transition-colors duration-300",
                isHovered ? "bg-[var(--accent-hex)]/10" : "bg-[hsl(var(--muted))]"
            )}>
                {IconComponent ? (
                    <IconComponent size={24} className={cn(
                        "transition-colors duration-300",
                        isHovered ? "text-[var(--accent-hex)]" : "text-[hsl(var(--foreground))]"
                    )} />
                ) : (
                    <span className="text-xl">💻</span>
                )}
            </div>

            <span className={cn(
                "font-bold text-[10px] lg:text-xs text-center uppercase tracking-tight line-clamp-1 transition-colors duration-300",
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

    // Dynamic expanded height, but global collapsed height for perfect grid symmetry
    const expandedHeight = (category.skills.length - 1) * 125 + 130;
    const collapsedHeight = globalCollapsedHeight;

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            {/* Category header */}
            <div className="flex flex-col items-center gap-2">
                <span
                    className={cn(
                        'px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] border whitespace-nowrap',
                        categoryColors[category.color] ?? categoryColors['accent']
                    )}
                >
                    {t(`skills.categories.${category.id}`)}
                </span>
            </div>

            <motion.div
                className="relative w-[110px] sm:w-[130px] lg:w-32 cursor-pointer mx-auto"
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
        </div>
    );
}

export function SkillsSection() {
    const { t } = useLanguage();

    return (
        <Section id="skills">
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
                                        className="w-24 h-24 shrink-0 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex flex-col items-center justify-center p-2 shadow-sm snap-center"
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
