'use client';

import Link from 'next/link';
import { Github, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { smoothScrollTo } from '@/lib/utils';

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
};

export function Footer() {
    const year = new Date().getFullYear();
    const { t } = useLanguage();

    // Map navigation labels
    const translatedNavLinks = navLinks.map(link => {
        let label: any = link.label;
        if (link.href === '#hero') label = t('nav.home');
        else if (link.href === '#about') label = t('nav.about');
        else if (link.href === '#skills') label = t('nav.skills');
        else if (link.href === '#projects') label = t('nav.projects');
        else if (link.href === '#experience') label = t('nav.experience');
        else if (link.href === '#contact') label = t('nav.contact');
        return { ...link, label };
    });

    return (
        <footer className="relative border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-4 items-start">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[var(--accent-hex)] flex items-center justify-center font-bold text-white text-xs font-code shadow-[0_4px_12px_var(--accent-glow)]">
                                {personalInfo.initials}
                            </div>
                            <span className="text-base font-bold tracking-tight">{personalInfo.name}</span>
                        </div>
                        <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed opacity-80">
                            {personalInfo.title}
                        </p>
                    </div>

                    <div className="md:col-span-5 flex flex-col items-center">
                        <div className="w-fit">
                            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-2 opacity-60 text-center">
                                {t('footer.navigation')}
                            </h3>
                            <nav aria-label="Footer navigation">
                                <ul className="grid grid-cols-2 gap-y-2 gap-x-8 sm:gap-x-12">
                                    {translatedNavLinks.map((link) => (
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
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-3">
                        <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-2 opacity-60">
                            {t('footer.connect')}
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
                                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] hover:border-[var(--accent-hex)] hover:bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.05)] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 group"
                                        >
                                            <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                        </a>
                                    );
                                })}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-6 pt-4 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[hsl(var(--muted-foreground))]">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
                        <p>© {year} {personalInfo.name}.</p>
                        <p className="font-code hidden sm:block opacity-40">
                            {t('footer.madeWith')} <span className="text-[var(--accent-hex)]">Next.js</span> &{' '}
                            <span className="text-[var(--accent-hex)]">Framer Motion</span>
                        </p>
                    </div>

                    {/* Back to top */}
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo('hero', 1400); // Slightly slower for a nice long scroll back up
                        }}
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] hover:border-[var(--accent-hex)] hover:text-[var(--accent-hex)] transition-all duration-300 cursor-pointer"
                        aria-label="Back to top"
                    >
                        <span className="text-[10px] font-semibold uppercase tracking-wider">{t('footer.backToTop')}</span>
                        <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
