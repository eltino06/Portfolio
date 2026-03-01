import { Calendar, MapPin, CheckCircle } from 'lucide-react';
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
            />

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical line with flow effect */}
                <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-[hsl(var(--border))/0.3] overflow-hidden">
                    <div className="absolute inset-0 animate-flow-vertical" />
                </div>

                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className="relative pl-8 lg:pl-16 pb-12 last:pb-0"
                    >
                        <FadeIn
                            direction="left"
                            delay={index * 0.1}
                            whileHover={{ x: 4 }}
                            className="glass rounded-2xl border border-[hsl(var(--border))] p-6 hover:border-[var(--accent-hex)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {dict.items[exp.translationKey].role}
                                    </h3>
                                    <p className="text-[var(--accent-hex)] font-semibold text-sm">
                                        {dict.items[exp.translationKey].company}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1.5 text-xs text-[hsl(var(--muted-foreground))] shrink-0">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        {exp.startDate} — {exp.endDate === 'Actualidad' ? dict.present : exp.endDate}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin size={12} />
                                        {dict.items[exp.translationKey].location}
                                    </span>
                                    {exp.endDate === 'Actualidad' && (
                                        <Badge variant="accent" className="w-fit text-xs">
                                            {dict.present}
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                                {dict.items[exp.translationKey].desc}
                            </p>

                            {/* Achievements */}
                            <ul className="space-y-2 mb-4">
                                {dict.items[exp.translationKey].highlights.map((achievement: string, j: number) => (
                                    <FadeIn
                                        key={j}
                                        direction="left"
                                        delay={j * 0.08}
                                        className="flex items-start gap-2.5 text-sm"
                                    >
                                        <CheckCircle
                                            size={15}
                                            className="text-[var(--accent-hex)] shrink-0 mt-0.5"
                                        />
                                        <span className="text-[hsl(var(--muted-foreground))]">{achievement}</span>
                                    </FadeIn>
                                ))}
                            </ul>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                ))}
            </div>
        </Section>
    );
}
