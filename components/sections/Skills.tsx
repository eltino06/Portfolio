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

function SkillCard({
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

    // Horizontal fan-out: first card (index 0) stays at x: 0
    const xOffset = isHovered ? index * 140 : index * 10;

    // Subtle stack effect when NOT hovered
    const rotation = isHovered ? 0 : index * 2;
    const yOffset = isHovered ? 0 : index * 3;

    return (
        <motion.div
            className={cn(
                "absolute top-0 left-0 w-28 h-28 rounded-2xl glass border flex flex-col items-center justify-center p-2 shadow-xl pointer-events-none",
                isHovered ? "border-[var(--accent-hex)] shadow-[0_10px_30px_-10px_var(--accent-glow)]" : "border-[hsl(var(--border))]"
            )}
            animate={{
                x: xOffset,
                y: yOffset,
                rotate: rotation,
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
                "font-bold text-[10px] text-center uppercase tracking-tight line-clamp-1 transition-colors duration-300",
                isHovered ? "text-[hsl(var(--foreground))]" : "text-[hsl(var(--muted-foreground))]"
            )}>
                {skill.name}
            </span>
        </motion.div>
    );
}

function SkillStack({ category }: { category: SkillCategory }) {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="hidden sm:flex flex-col gap-6 w-full">
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

            <div
                className="relative h-32 w-full cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {category.skills.map((skill, i) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={i}
                        isHovered={isHovered}
                        total={category.skills.length}
                    />
                ))}
            </div>
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

            {/* Desktop Stack Layout */}
            <div className="hidden sm:flex flex-col gap-y-24 mt-12">
                {skillCategories.map((category) => (
                    <SkillStack key={category.id} category={category} />
                ))}
            </div>

            {/* Mobile 4-Column Vertical Layout */}
            <div className="grid grid-cols-4 gap-2 sm:hidden mt-8 w-full items-start">
                {skillCategories.map(category => (
                    <div key={category.id} className="flex flex-col gap-3">
                        <div className="text-center mb-1">
                            <span className={cn(
                                'text-[8px] font-bold uppercase tracking-widest text-center w-full break-words',
                                categoryColors[category.color]?.split(' ')[0]
                            )}>
                                {t(`skills.categories.${category.id}`)}
                            </span>
                        </div>

                        <div className="flex flex-col gap-2">
                            {category.skills.map(skill => {
                                const IconComponent = iconMap[skill.icon];
                                return (
                                    <div key={skill.name} className="flex flex-col items-center justify-center p-2 rounded-xl glass border border-[hsl(var(--border))] w-full aspect-square">
                                        <div className="w-6 h-6 rounded-[8px] bg-[hsl(var(--muted))] flex items-center justify-center mb-1.5">
                                            {IconComponent ? (
                                                <IconComponent size={14} className="text-[hsl(var(--foreground))]" />
                                            ) : (
                                                <span className="text-[10px]">💻</span>
                                            )}
                                        </div>
                                        <span className="font-bold text-[7px] text-center uppercase tracking-tight line-clamp-1 text-[hsl(var(--muted-foreground))] w-full px-0.5">
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
