import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '../data/experience';
import { FadeIn } from '@/components/ui/FadeIn';

interface ExperienceSectionProps {
    dict: any;
}

export function ExperienceSection({ dict }: ExperienceSectionProps) {
    return (
        <Section id="experience">
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
                number="03"
            />

            <div className="max-w-3xl">
                {experiences.map((exp, index) => (
                    <FadeIn
                        key={exp.id}
                        delay={index * 0.1}
                        className="group"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-8 pb-10 last:pb-0">
                            {/* Date column */}
                            <div className="flex flex-row sm:flex-col gap-2 sm:gap-1 text-xs text-[hsl(var(--muted-foreground))] font-mono pt-1">
                                <span className="flex items-center gap-1.5">
                                    {exp.startDate} - {exp.endDate === 'Actualidad' ? dict.present : exp.endDate}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={10} />
                                    {dict.items[exp.translationKey].location}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[var(--accent-hex)] transition-colors duration-200">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        <h3 className="font-semibold text-[hsl(var(--foreground))] group-hover:text-[var(--accent-hex)] transition-colors">
                                            {dict.items[exp.translationKey].role}
                                        </h3>
                                        <p className="text-[var(--accent-hex)] font-mono text-xs mt-0.5">
                                            {dict.items[exp.translationKey].company}
                                        </p>
                                    </div>
                                    {exp.endDate === 'Actualidad' && (
                                        <Badge variant="accent" className="text-[10px] shrink-0">
                                            {dict.present}
                                        </Badge>
                                    )}
                                </div>

                                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                                    {dict.items[exp.translationKey].desc}
                                </p>

                                <ul className="flex flex-col gap-2 mb-4">
                                    {dict.items[exp.translationKey].highlights.map((achievement: string, j: number) => (
                                        <li
                                            key={j}
                                            className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]"
                                        >
                                            <ArrowRight size={12} className="text-[var(--accent-hex)] shrink-0 mt-1" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[hsl(var(--border))]">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="text-[10px] font-mono text-[var(--accent-hex)] bg-[var(--accent-glow)] px-2 py-0.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}
