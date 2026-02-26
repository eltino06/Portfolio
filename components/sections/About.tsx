'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Dumbbell, Target, Sparkles } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { personalInfo, education } from '@/lib/data';

const highlights = [
    {
        icon: MapPin,
        label: 'Ubicación',
        value: personalInfo.location,
    },
    {
        icon: GraduationCap,
        label: 'Educación',
        value: 'IES — Tecnicatura en Desarrollo de Software',
    },
    {
        icon: Target,
        label: 'Disponibilidad',
        value: 'Inmediata | Jornada completa',
    },
    {
        icon: Dumbbell,
        label: 'Idiomas',
        value: 'Español (Nativo) | Inglés B2',
    },
];

export function AboutSection() {
    return (
        <Section id="about" alternate>
            <SectionHeading
                label="Sobre Mí"
                title="Quién soy"
                subtitle="Un desarrollador apasionado por el código limpio y el crecimiento constante."
            />

            <div className="max-w-5xl mx-auto space-y-12">
                {/* ─── Bio & Highlights Grid ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Bio Text */}
                    <motion.div
                        className="lg:col-span-7 space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-4">
                            {personalInfo.bio.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm sm:text-base"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Facts Bento */}
                    <div
                        className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.label}
                                className="flex items-center gap-4 glass rounded-2xl p-4 border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] transition-all duration-300 group"
                                whileHover={{ x: 5 }}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.1)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent-hex)] transition-colors">
                                    <item.icon size={18} className="text-[var(--accent-hex)] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[hsl(var(--muted-foreground))] uppercase tracking-widest font-bold opacity-70">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-semibold mt-0.5">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ─── Education Timeline ─── */}
                <motion.div
                    className="pt-12 border-t border-[hsl(var(--border))]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.1)] flex items-center justify-center">
                            <Sparkles size={16} className="text-[var(--accent-hex)]" />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
                            Formación Académica
                        </h3>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                className="glass rounded-2xl p-6 border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] transition-all duration-300 relative overflow-hidden group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-bold text-base group-hover:text-[var(--accent-hex)] transition-colors">{edu.institution}</h4>
                                        <p className="text-xs text-[var(--accent-hex)] font-semibold mt-1 uppercase tracking-wide">
                                            {edu.degree}
                                        </p>
                                    </div>
                                    <span className="text-[10px] font-code px-2 py-1 rounded-md bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]">
                                        {edu.startDate} — {edu.endDate}
                                    </span>
                                </div>
                                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                                    {edu.description}
                                </p>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                                        <span className="opacity-50 text-[hsl(var(--foreground))]">Progreso</span>
                                        <span className="text-[var(--accent-hex)]">{edu.progress}%</span>
                                    </div>
                                    <div className="h-1.5 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[var(--accent-hex)] to-purple-500 rounded-full shadow-[0_0_8px_var(--accent-glow)]"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${edu.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
