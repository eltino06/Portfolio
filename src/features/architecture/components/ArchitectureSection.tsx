import { Network, ShieldCheck, ServerCrash, ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';

interface ArchitectureSectionProps {
    dict: any;
}

export function ArchitectureSection({ dict }: ArchitectureSectionProps) {
    const pillars = [
        {
            id: 'resilience',
            icon: <ServerCrash size={24} className="text-[var(--accent-hex)]" />,
        },
        {
            id: 'security',
            icon: <ShieldCheck size={24} className="text-[var(--accent-hex)]" />,
        },
        {
            id: 'scalability',
            icon: <Network size={24} className="text-[var(--accent-hex)]" />,
        },
    ];

    return (
        <Section id="architecture" alternate>
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 w-full max-w-6xl mx-auto">
                {/* Visual Diagram */}
                <FadeIn
                    direction="right"
                    className="relative w-full h-full min-h-[400px] glass rounded-2xl border border-[hsl(var(--border))] flex items-center justify-center p-8 overflow-hidden bg-[hsl(var(--card))] shadow-xl"
                >
                    <div className="flex flex-col items-center w-full max-w-sm gap-4">
                        {/* Client */}
                        <div className="w-full bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg py-3 text-center text-sm font-semibold tracking-wide text-[hsl(var(--foreground))] shadow-md">
                            {dict.diagram.client}
                        </div>

                        <ArrowRight size={20} className="text-[hsl(var(--muted-foreground))] rotate-90" />

                        {/* Gateway */}
                        <div className="w-full bg-[hsl(var(--background))] border border-[var(--accent-hex)] rounded-lg py-3 text-center text-sm font-bold tracking-wide text-[var(--accent-hex)] shadow-[0_0_15px_var(--accent-glow)]">
                            {dict.diagram.gateway}
                        </div>

                        <ArrowRight size={20} className="text-[hsl(var(--muted-foreground))] rotate-90" />

                        {/* Core Services */}
                        <div className="w-full grid grid-cols-2 gap-3">
                            <div className="bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg py-4 text-center text-[11px] font-semibold text-[hsl(var(--foreground))]">
                                {dict.diagram.services} A
                            </div>
                            <div className="bg-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg py-4 text-center text-[11px] font-semibold text-[hsl(var(--foreground))]">
                                {dict.diagram.services} B
                            </div>
                        </div>

                        <ArrowRight size={20} className="text-[hsl(var(--muted-foreground))] rotate-90" />

                        {/* DB */}
                        <div className="w-3/4 bg-[hsl(var(--background))] border-2 border-dashed border-[hsl(var(--border))] rounded-lg py-4 text-center text-sm font-bold text-[hsl(var(--muted-foreground))]">
                            [( {dict.diagram.database} )]
                        </div>
                    </div>
                </FadeIn>

                {/* Text / Pillars Content */}
                <div className="flex flex-col gap-8">
                    {pillars.map((pillar, i) => (
                        <FadeIn
                            key={pillar.id}
                            direction="left"
                            delay={i * 0.15}
                            className="flex gap-4"
                        >
                            <div className="mt-1 w-12 h-12 rounded-xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0">
                                {pillar.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[hsl(var(--foreground))] mb-1">
                                    {dict.pillars[pillar.id].title}
                                </h4>
                                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm">
                                    {dict.pillars[pillar.id].desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
}
