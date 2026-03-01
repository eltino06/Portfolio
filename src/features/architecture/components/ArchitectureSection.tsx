import { Network, ShieldCheck, ServerCrash, ArrowDown } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FadeIn } from '@/components/ui/FadeIn';

interface ArchitectureSectionProps {
    dict: any;
}

export function ArchitectureSection({ dict }: ArchitectureSectionProps) {
    const pillars = [
        { id: 'resilience', icon: <ServerCrash size={20} className="text-[var(--accent-hex)]" /> },
        { id: 'security', icon: <ShieldCheck size={20} className="text-[var(--accent-hex)]" /> },
        { id: 'scalability', icon: <Network size={20} className="text-[var(--accent-hex)]" /> },
    ];

    return (
        <Section id="architecture" alternate>
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
                number="04"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Architecture Diagram */}
                <FadeIn className="relative p-6 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                    <div className="flex flex-col items-center w-full gap-3">
                        {/* Client */}
                        <div className="w-full py-3 text-center text-xs font-mono uppercase tracking-wider border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]">
                            {dict.diagram.client}
                        </div>
                        <ArrowDown size={16} className="text-[var(--accent-hex)]" />

                        {/* Gateway */}
                        <div className="w-full py-3 text-center text-xs font-mono uppercase tracking-wider border border-[var(--accent-hex)] rounded-md text-[var(--accent-hex)] bg-[var(--accent-glow)]">
                            {dict.diagram.gateway}
                        </div>
                        <ArrowDown size={16} className="text-[var(--accent-hex)]" />

                        {/* Services */}
                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="py-3 text-center text-[10px] font-mono uppercase tracking-wider border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]">
                                {dict.diagram.services} A
                            </div>
                            <div className="py-3 text-center text-[10px] font-mono uppercase tracking-wider border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]">
                                {dict.diagram.services} B
                            </div>
                        </div>
                        <ArrowDown size={16} className="text-[var(--accent-hex)]" />

                        {/* DB */}
                        <div className="w-2/3 py-3 text-center text-xs font-mono uppercase tracking-wider border-2 border-dashed border-[hsl(var(--border))] rounded-md text-[hsl(var(--muted-foreground))]">
                            {dict.diagram.database}
                        </div>
                    </div>
                </FadeIn>

                {/* Pillars */}
                <div className="flex flex-col gap-6">
                    {pillars.map((pillar, i) => (
                        <FadeIn
                            key={pillar.id}
                            delay={i * 0.12}
                            className="flex gap-4 p-4 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[var(--accent-hex)] transition-colors duration-200"
                        >
                            <div className="w-10 h-10 rounded-md bg-[var(--accent-glow)] flex items-center justify-center shrink-0">
                                {pillar.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">
                                    {dict.pillars[pillar.id].title}
                                </h4>
                                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
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
