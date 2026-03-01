import { MapPin, GraduationCap, Target, Languages } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { education } from '../data/education';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FadeIn } from '@/components/ui/FadeIn';
import { ProgressBar } from './ProgressBar';

interface AboutSectionProps {
    dict: any;
}

export function AboutSection({ dict }: AboutSectionProps) {
    const highlights = [
        { icon: MapPin, label: dict.highlights.location, value: dict.highlights.locValue },
        { icon: GraduationCap, label: dict.highlights.education, value: dict.highlights.eduValue },
        { icon: Target, label: dict.highlights.availability, value: dict.highlights.availValue },
        { icon: Languages, label: dict.highlights.languages, value: dict.highlights.langValue },
    ];

    return (
        <Section id="about">
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
                number="01"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Bio */}
                <FadeIn className="lg:col-span-7 space-y-4">
                    {dict.bio.map((paragraph: string, i: number) => (
                        <p
                            key={i}
                            className="text-[hsl(var(--muted-foreground))] leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </FadeIn>

                {/* Quick Facts */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                    {highlights.map((item, index) => (
                        <FadeIn
                            key={item.label}
                            direction="right"
                            delay={index * 0.08}
                            className="flex items-center gap-4 p-4 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[var(--accent-hex)] transition-colors duration-200 group"
                        >
                            <div className="w-9 h-9 rounded-md bg-[var(--accent-glow)] flex items-center justify-center shrink-0">
                                <item.icon size={16} className="text-[var(--accent-hex)]" />
                            </div>
                            <div>
                                <p className="text-[10px] text-[hsl(var(--muted-foreground))] uppercase tracking-widest font-mono">
                                    {item.label}
                                </p>
                                <p className="text-sm font-medium text-[hsl(var(--foreground))] mt-0.5">{item.value}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Education */}
            <FadeIn className="mt-16 pt-12 border-t border-[hsl(var(--border))]" delay={0.3}>
                <div className="flex items-center gap-3 mb-8">
                    <span className="font-mono text-[var(--accent-hex)] text-xs">//</span>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-[hsl(var(--foreground))]">
                        {dict.eduSubtitle}
                    </h3>
                    <div className="h-px flex-1 max-w-[100px] bg-[hsl(var(--border))]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <FadeIn
                            key={edu.id}
                            delay={index * 0.1 + 0.4}
                            className="p-6 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[var(--accent-hex)] transition-colors duration-200 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-3 gap-3">
                                <div>
                                    <h4 className="font-semibold text-sm text-[hsl(var(--foreground))]">
                                        {dict.items[edu.translationKey].institution}
                                    </h4>
                                    <p className="text-xs text-[var(--accent-hex)] font-mono mt-1">
                                        {dict.items[edu.translationKey].degree} -- {dict.items[edu.translationKey].field}
                                    </p>
                                </div>
                                <span className="text-[10px] whitespace-nowrap shrink-0 font-mono px-2 py-1 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]">
                                    {edu.startDate} - {edu.endDate}
                                </span>
                            </div>
                            <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-5 flex-1">
                                {dict.items[edu.translationKey].desc}
                            </p>

                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider">
                                    <span className="text-[hsl(var(--muted-foreground))]">{dict.eduProgress}</span>
                                    <AnimatedCounter value={edu.progress} suffix="%" className="text-[var(--accent-hex)]" />
                                </div>
                                <div className="h-1 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
                                    <ProgressBar progress={edu.progress} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
}
