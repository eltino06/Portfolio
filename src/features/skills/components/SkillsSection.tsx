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
    backend: <Server size={18} className="text-[var(--accent-hex)]" />,
    frontend: <MonitorSmartphone size={18} className="text-[var(--accent-hex)]" />,
    database: <Database size={18} className="text-[var(--accent-hex)]" />,
    tools: <Wrench size={18} className="text-[var(--accent-hex)]" />,
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
                subtitle={dict.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full items-stretch">
                {skillCategories.map((category, i) => (
                    <FadeIn
                        key={category.id}
                        delay={i * 0.1}
                        className="glass relative flex flex-col p-6 rounded-2xl border border-[hsl(var(--border))] group hover:border-[var(--accent-hex)] transition-colors h-full"
                    >
                        {/* Domain Header */}
                        <div className="relative flex items-center gap-3 mb-6 pb-4">
                            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center shrink-0 border border-[hsl(var(--border))]">
                                {categoryIcons[category.id]}
                            </div>
                            <h3 className="font-bold text-base text-[hsl(var(--foreground))] uppercase tracking-widest">
                                {dict.categories[category.id]}
                            </h3>

                            {/* Animated Underline */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[hsl(var(--border))] overflow-hidden">
                                <div className="absolute inset-0 bg-[hsl(var(--foreground))] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map(skill => {
                                    const IconComponent = iconMap[skill.icon];
                                    return (
                                        <div
                                            key={skill.name}
                                            className="relative flex items-center gap-2.5 p-2 rounded-lg hover:bg-[hsl(var(--accent-opacity))] transition-all duration-300 group/skill overflow-hidden"
                                        >
                                            {/* Shine/Reflection Effect */}
                                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                                <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 bg-gradient-to-r from-transparent via-[hsl(var(--foreground)/0.05)] to-transparent -translate-x-full group-hover/skill:animate-[shimmerLoop_2s_infinite] transition-opacity duration-500" />
                                            </div>

                                            <div className="relative z-10 w-7 h-7 flex items-center justify-center shrink-0">
                                                {IconComponent ? (
                                                    <IconComponent
                                                        size={20}
                                                        className="text-[hsl(var(--muted-foreground))] group-hover:text-[var(--accent-hex)] group-hover/skill:text-[hsl(var(--foreground))] group-hover/skill:scale-110 transition-all duration-300"
                                                    />
                                                ) : (
                                                    <span className="text-xs">💻</span>
                                                )}
                                            </div>
                                            <span className="relative z-10 text-sm font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide group-hover:text-[hsl(var(--foreground))] group-hover/skill:translate-x-0.5 transition-all duration-300 truncate">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
