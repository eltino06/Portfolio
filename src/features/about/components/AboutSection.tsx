import { MapPin, GraduationCap, Target, Dumbbell, Sparkles } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { personalInfo } from '@/features/hero/data/hero';
import { education } from '../data/education';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FadeIn } from '@/components/ui/FadeIn';
import { ProgressBar } from './ProgressBar';

interface AboutSectionProps {
    dict: any;
}

export function AboutSection({ dict }: AboutSectionProps) {
    const highlights = [
        {
            icon: MapPin,
            label: dict.highlights.location,
            value: dict.highlights.locValue,
        },
        {
            icon: GraduationCap,
            label: dict.highlights.education,
            value: dict.highlights.eduValue,
        },
        {
            icon: Target,
            label: dict.highlights.availability,
            value: dict.highlights.availValue,
        },
        {
            icon: Dumbbell,
            label: dict.highlights.languages,
            value: dict.highlights.langValue,
        },
    ];

    return (
        <Section id="about" alternate>
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
            />

            <div className="max-w-5xl mx-auto space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Bio Text */}
                    <FadeIn className="lg:col-span-7 space-y-6">
                        <div className="space-y-4">
                            {dict.bio.map((paragraph: string, i: number) => (
                                <p
                                    key={i}
                                    className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm sm:text-base"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Quick Facts Bento */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {highlights.map((item, index) => (
                            <FadeIn
                                key={item.label}
                                direction="right"
                                delay={index * 0.1}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 glass rounded-2xl p-4 border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.1)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent-hex)] transition-colors">
                                    <item.icon size={18} className="text-[var(--accent-hex)] group-hover:text-[var(--accent-fg)] transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[hsl(var(--muted-foreground))] uppercase tracking-widest font-bold opacity-70">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-semibold mt-0.5">{item.value}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Education Timeline */}
                <FadeIn className="pt-12 border-t border-[hsl(var(--border))]" delay={0.4}>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.1)] flex items-center justify-center">
                            <Sparkles size={16} className="text-[var(--accent-hex)]" />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
                            {dict.eduSubtitle}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <FadeIn
                                key={edu.id}
                                scale={0.95}
                                delay={index * 0.1 + 0.5}
                                className="glass rounded-2xl p-6 border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <div>
                                        <h4 className="font-bold text-base group-hover:text-[var(--accent-hex)] transition-colors">
                                            {dict.items[edu.translationKey].institution}
                                        </h4>
                                        <p className="text-xs text-[var(--accent-hex)] font-semibold mt-1 uppercase tracking-wide">
                                            {dict.items[edu.translationKey].degree} — {dict.items[edu.translationKey].field}
                                        </p>
                                    </div>
                                    <span className="text-[10px] whitespace-nowrap shrink-0 font-code px-2 py-1 rounded-md bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                                        {edu.startDate} — {edu.endDate}
                                    </span>
                                </div>
                                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                                    {dict.items[edu.translationKey].desc}
                                </p>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                                        <span className="opacity-50 text-[hsl(var(--foreground))]">{dict.eduProgress}</span>
                                        <AnimatedCounter value={edu.progress} suffix="%" className="text-[var(--accent-hex)]" />
                                    </div>
                                    <div className="h-1.5 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
                                        {/* Nested Client Component or just another FadeIn for the progress bar? 
                                            Actually, since the bar itself animates width based on view, it needs a client component.
                                        */}
                                        <ProgressBar progress={edu.progress} />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
