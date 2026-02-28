import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiTypescript,
    SiNodedotjs, SiOpenjdk, SiExpress, SiMysql, SiGit, SiDocker,
    SiFigma, SiPostman, SiAmazonwebservices, SiSpringboot, SiNextdotjs,
    SiTailwindcss, SiPostgresql, SiPrisma, SiGithub, SiLinux
} from 'react-icons/si';
import { Server, MonitorSmartphone, Database, Wrench } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { skillCategories } from '../data/skills';
import { FadeIn } from '@/components/ui/FadeIn';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiTypescript,
    SiNodedotjs, SiOpenjdk, SiExpress, SiMysql, SiGit, SiDocker,
    SiFigma, SiPostman, SiAmazonwebservices, SiSpringboot, SiNextdotjs,
    SiTailwindcss, SiPostgresql, SiPrisma, SiGithub, SiLinux
};

const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server size={14} className="text-[var(--accent-hex)]" />,
    frontend: <MonitorSmartphone size={14} className="text-[var(--accent-hex)]" />,
    database: <Database size={14} className="text-[var(--accent-hex)]" />,
    tools: <Wrench size={14} className="text-[var(--accent-hex)]" />,
};

interface SkillsSectionProps {
    dict: any;
}

export function SkillsSection({ dict }: SkillsSectionProps) {
    return (
        <Section id="skills" className="pb-12 lg:pb-16 pt-12">
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.subtitle} // Keep same as original logic
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full items-stretch">
                {skillCategories.map((category, i) => (
                    <FadeIn
                        key={category.id}
                        delay={i * 0.1}
                        className="glass relative flex flex-col p-6 rounded-2xl border border-[hsl(var(--border))] group hover:border-[var(--accent-hex)] transition-colors h-full"
                    >
                        {/* Domain Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[hsl(var(--border))]">
                            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center shrink-0 border border-[hsl(var(--border))]">
                                {categoryIcons[category.id]}
                            </div>
                            <h3 className="font-bold text-sm text-[hsl(var(--foreground))] uppercase tracking-widest">
                                {dict.categories[category.id]}
                            </h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-3 mt-auto">
                            {category.skills.map(skill => {
                                const IconComponent = iconMap[skill.icon];
                                return (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[hsl(var(--accent-opacity))] transition-colors"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                            {IconComponent ? (
                                                <IconComponent size={16} className="text-[hsl(var(--muted-foreground))] group-hover:text-[var(--accent-hex)] transition-colors" />
                                            ) : (
                                                <span className="text-[10px]">💻</span>
                                            )}
                                        </div>
                                        <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide group-hover:text-[hsl(var(--foreground))] transition-colors truncate">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
