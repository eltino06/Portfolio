import Link from 'next/link';
import { Github, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/lib/data';

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
};

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-[var(--accent-hex)] flex items-center justify-center font-bold text-white text-sm font-code shadow-[0_4px_12px_var(--accent-glow)]">
                                {personalInfo.initials}
                            </div>
                            <span className="text-lg font-bold tracking-tight">{personalInfo.name}</span>
                        </div>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                            {personalInfo.title} enfocado en la calidad y escalabilidad. Construyendo el futuro web, un commit a la vez.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="md:col-span-5">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-5 opacity-70">
                            Navegación
                        </h3>
                        <nav aria-label="Footer navigation">
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-[var(--accent-hex)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-3">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-5 opacity-70">
                            Conectar
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {(Object.entries(personalInfo.socials) as [string, string][])
                                .filter(([, url]) => url)
                                .map(([name, url]) => {
                                    const Icon = socialIcons[name as keyof typeof socialIcons];
                                    if (!Icon) return null;
                                    return (
                                        <a
                                            key={name}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={name}
                                            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] hover:border-[var(--accent-hex)] hover:bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.05)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 group"
                                        >
                                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-[hsl(var(--muted-foreground))]">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                        <p>© {year} {personalInfo.name}.</p>
                        <p className="font-code hidden sm:block opacity-50">
                            Hecho con <span className="text-[var(--accent-hex)]">Next.js</span> &{' '}
                            <span className="text-[var(--accent-hex)]">Framer Motion</span>
                        </p>
                    </div>

                    {/* Back to top */}
                    <Link
                        href="#hero"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] hover:text-[var(--accent-hex)] transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider">Volver arriba</span>
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
