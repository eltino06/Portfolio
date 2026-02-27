'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const contactItems = [
    {
        icon: Mail,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: Phone,
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
    },
    {
        icon: MapPin,
        label: 'Location',
        value: personalInfo.location,
        href: null,
    },
];

const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, label: 'GitHub' },
    { icon: Instagram, href: personalInfo.socials.instagram, label: 'Instagram' },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
].filter((s) => s.href);

// Form field component
function FormField({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">{label}</label>
            {children}
            {error && (
                <motion.p
                    className="text-xs text-red-400"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}

const inputCls =
    'w-full px-4 py-3 rounded-xl glass border border-[hsl(var(--border))] text-sm placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[var(--accent-hex)] focus:shadow-[0_0_0_3px_var(--accent-glow)] transition-all duration-200 bg-transparent';

import { useLanguage } from '@/context/LanguageContext';

export function ContactSection() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactItems = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: Phone,
            label: t('contact.email'), // Reuse email or add phone to translations
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personalInfo.location,
            href: null,
        },
    ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                toast.success(t('language') === 'es' ? '¡Mensaje enviado! Me pondré en contacto pronto. 🚀' : 'Message sent! I will get in touch soon. 🚀');
                reset();
            } else {
                const body = await res.json().catch(() => ({}));
                toast.error(body.error ?? 'Algo salió mal. Por favor, intenta de nuevo.');
            }
        } catch {
            toast.error('Error de red. Por favor, comprueba tu conexión.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" alternate>
            <SectionHeading
                label={t('contact.title')}
                title={t('contact.subtitle')}
                subtitle={t('contact.description')}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
                {/* ─── Left: Contact Info ─── */}
                <motion.div
                    className="lg:col-span-2 space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                        {t('contact.details')}
                    </p>

                    {/* Contact items */}
                    <div className="space-y-3">
                        {contactItems.map((item) => (
                            <motion.div
                                key={item.label}
                                className="flex items-center gap-3 glass rounded-xl p-4 border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] transition-all duration-300"
                                whileHover={{ x: 4 }}
                            >
                                <div className="w-9 h-9 rounded-lg bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.15)] flex items-center justify-center shrink-0">
                                    <item.icon size={16} className="text-[var(--accent-hex)]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wide font-semibold">
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-sm font-medium hover:text-[var(--accent-hex)] transition-colors duration-200"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium">{item.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── Right: Contact Form ─── */}
                <motion.div
                    className="lg:col-span-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="glass rounded-2xl border border-[hsl(var(--border))] p-6 space-y-5"
                        noValidate
                    >
                        {/* Name + Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <FormField label={t('contact.name')} error={errors.name?.message}>
                                <input
                                    {...register('name')}
                                    type="text"
                                    placeholder="Santino"
                                    className={cn(inputCls, errors.name && 'border-red-400/50')}
                                    autoComplete="name"
                                />
                            </FormField>

                            <FormField label={t('contact.email')} error={errors.email?.message}>
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    className={cn(inputCls, errors.email && 'border-red-400/50')}
                                    autoComplete="email"
                                />
                            </FormField>
                        </div>

                        {/* Subject */}
                        <FormField label={t('contact.subject')} error={errors.subject?.message}>
                            <input
                                {...register('subject')}
                                type="text"
                                placeholder="..."
                                className={cn(inputCls, errors.subject && 'border-red-400/50')}
                            />
                        </FormField>

                        {/* Message */}
                        <FormField label={t('contact.message')} error={errors.message?.message}>
                            <textarea
                                {...register('message')}
                                rows={5}
                                placeholder="..."
                                className={cn(inputCls, 'resize-none', errors.message && 'border-red-400/50')}
                            />
                        </FormField>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            isLoading={isSubmitting}
                            className="w-full gap-2"
                        >
                            <Send size={17} />
                            {isSubmitting ? t('contact.sending') : t('contact.send')}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
