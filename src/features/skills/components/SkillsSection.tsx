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
        <Section id="skills" alternate>
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                number="02"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {skillCategories.map((category, i) => (
                    <FadeIn
                        key={category.id}
                        delay={i * 0.08}
                        className="flex flex-col p-5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] group hover:border-[var(--accent-hex)] transition-colors duration-200"
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[hsl(var(--border))]">
                            <div className="w-8 h-8 rounded-md bg-[var(--accent-glow)] flex items-center justify-center shrink-0">
                                {categoryIcons[category.id]}
                            </div>
                            <h3 className="font-mono text-xs text-[hsl(var(--foreground))] uppercase tracking-wider">
                                {dict.categories[category.id]}
                            </h3>
                        </div>

                        {/* Skills List */}
                        <div className="flex flex-col gap-1">
                            {category.skills.map(skill => {
                                const IconComponent = iconMap[skill.icon];
                                return (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-[var(--accent-glow)] transition-colors duration-150 group/skill"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                            {IconComponent ? (
                                                <IconComponent
                                                    size={14}
                                                    className="text-[hsl(var(--muted-foreground))] group-hover/skill:text-[var(--accent-hex)] transition-colors duration-200"
                                                />
                                            ) : (
                                                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">*</span>
                                            )}
                                        </div>
                                        <span className="text-sm text-[hsl(var(--muted-foreground))] group-hover/skill:text-[hsl(var(--foreground))] transition-colors duration-200">
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
