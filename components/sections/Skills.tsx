'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeading } from '@/components/ui/Section';
import { skillCategories, type SkillCategory } from '@/lib/data';
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

function SkillCard({ skill, index }: { skill: { name: string; icon: string; level: number }; index: number }) {
    const IconComponent = iconMap[skill.icon];

    return (
        <motion.div
            className="group relative flex flex-col items-center justify-center p-4 rounded-2xl glass border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 cursor-default aspect-square sm:aspect-auto sm:h-28"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -5 }}
        >
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center group-hover:bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.15)] transition-colors duration-300 mb-2">
                {IconComponent ? (
                    <IconComponent size={28} className="text-[hsl(var(--foreground))] group-hover:text-[var(--accent-hex)] transition-colors duration-300" />
                ) : (
                    <span className="text-2xl">💻</span>
                )}
            </div>

            <span className="font-medium text-[11px] sm:text-xs text-center text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] transition-colors duration-300 uppercase tracking-wider">
                {skill.name}
            </span>

            {/* Subtle glow effect behind icon on hover */}
            <div className="absolute inset-0 rounded-2xl bg-[var(--accent-hex)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
        </motion.div>
    );
}

export function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState<string>('Todas');
    const categories = ['Todas', ...skillCategories.map((c) => c.category)];

    const filteredCategories: SkillCategory[] =
        activeCategory === 'Todas'
            ? skillCategories
            : skillCategories.filter((c) => c.category === activeCategory);

    return (
        <Section id="skills">
            <SectionHeading
                label="Habilidades"
                title="Tecnologías con las que Trabajo"
                subtitle="Stack técnico optimizado para el desarrollo de software moderno."
            />

            {/* Category filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            'px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all duration-200',
                            activeCategory === cat
                                ? 'bg-[var(--accent-hex)] text-white border-transparent shadow-[0_0_20px_var(--accent-glow)]'
                                : 'glass border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[var(--accent-hex)] hover:text-[hsl(var(--foreground))]'
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Skills grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                >
                    {filteredCategories.map((category) => (
                        <div key={category.category}>
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span
                                    className={cn(
                                        'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border',
                                        categoryColors[category.color] ?? categoryColors['accent']
                                    )}
                                >
                                    {category.category}
                                </span>
                                <div className="flex-1 h-px bg-gradient-to-r from-[hsl(var(--border))] to-transparent" />
                            </div>

                            {/* Skills Grid - More compact columns */}
                            <div
                                className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3"
                            >
                                {category.skills.map((skill, i) => (
                                    <SkillCard key={skill.name} skill={skill} index={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </Section>
    );
}
