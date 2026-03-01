import { Mail, Phone } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { personalInfo } from '@/features/hero/data/hero';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
    dict: any;
}

export function ContactSection({ dict }: ContactSectionProps) {
    const contactItems = [
        { icon: Mail, label: dict.infoEmail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: dict.infoPhone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    ];

    return (
        <Section id="contact" alternate>
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
                number="06"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Left: Contact Info */}
                <FadeIn direction="right" className="lg:col-span-2 space-y-6">
                    <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                        {dict.details}
                    </p>

                    <div className="flex flex-col gap-3">
                        {contactItems.map((item, index) => (
                            <FadeIn
                                key={item.label}
                                direction="right"
                                delay={index * 0.08}
                                className="flex items-center gap-3 p-4 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[var(--accent-hex)] transition-colors duration-200"
                            >
                                <div className="w-9 h-9 rounded-md bg-[var(--accent-glow)] flex items-center justify-center shrink-0">
                                    <item.icon size={16} className="text-[var(--accent-hex)]" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[hsl(var(--muted-foreground))] uppercase tracking-widest font-mono">
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a href={item.href} className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[var(--accent-hex)] transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium text-[hsl(var(--foreground))]">{item.value}</p>
                                    )}
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>

                {/* Right: Form */}
                <FadeIn direction="left" delay={0.12} className="lg:col-span-3">
                    <ContactForm dict={dict} />
                </FadeIn>
            </div>
        </Section>
    );
}
