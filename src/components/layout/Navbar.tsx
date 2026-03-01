'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { navLinks } from '@/lib/common-data';
import { personalInfo } from '@/features/hero/data/hero';
import { cn } from '@/lib/utils';
import { DownloadModal } from '@/components/ui/DownloadModal';

interface NavbarProps {
    dict: any;
    lang: string;
}

export function Navbar({ dict, lang }: NavbarProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastScrollY = useRef(0);
    const isHoveredRef = useRef(false);

    const { scrollY } = useScroll();
    const sectionIds = navLinks.map((l) => l.href);
    const activeSection = useScrollSpy(sectionIds, 120);

    const startHideTimer = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (isHoveredRef.current) return;

        timeoutRef.current = setTimeout(() => {
            if (!isHoveredRef.current && window.scrollY > 50) {
                setIsVisible(false);
            }
        }, 2500);
    };

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (isMobileOpen) {
            setIsVisible(true);
            return;
        }

        setIsScrolled(latest > 20);

        if (latest < 50) {
            setIsVisible(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            lastScrollY.current = latest;
            return;
        }

        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;

        if (diff > 0) {
            if (isVisible) {
                startHideTimer();
            }
        } else if (diff < 0) {
            if (!isVisible) setIsVisible(true);
            startHideTimer();
        }

        lastScrollY.current = latest;
    });

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setIsMobileOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-6 z-[90]"
                onMouseEnter={() => setIsVisible(true)}
            />

            <motion.header
                onMouseEnter={() => {
                    isHoveredRef.current = true;
                    setIsVisible(true);
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={() => {
                    isHoveredRef.current = false;
                    startHideTimer();
                }}
                className={cn(
                    'fixed top-0 left-0 w-full z-[100]',
                    isScrolled
                        ? 'bg-[hsl(var(--background)/0.85)] backdrop-blur-lg border-b border-[hsl(var(--border))] transition-all duration-300'
                        : 'bg-transparent transition-all duration-300',
                    !isVisible && 'pointer-events-none'
                )}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href={`/${lang}#hero`}
                        className="group flex items-center gap-2.5"
                        aria-label="Home"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <span className="font-mono text-[var(--accent-hex)] text-lg font-bold tracking-tight">
                            {'<'}
                            <span className="text-[hsl(var(--foreground))] font-sans">{personalInfo.firstName}</span>
                            <span className="text-[var(--accent-hex)]">{' />'}</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1" role="navigation">
                        {navLinks.map((link, i) => {
                            const isActive = activeSection === link.href;
                            const label = dict.nav[link.label.split('.')[1]];

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={`/${lang}${link.href}`}
                                        className={cn(
                                            'relative px-3 py-2 text-[13px] font-mono transition-all duration-200',
                                            isActive
                                                ? 'text-[var(--accent-hex)]'
                                                : 'text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)]'
                                        )}
                                    >
                                        <span className="text-[var(--accent-hex)] text-[11px] mr-0.5">0{i + 1}.</span>
                                        {label}
                                        {isActive && (
                                            <motion.span
                                                className="absolute bottom-0 left-3 right-3 h-px bg-[var(--accent-hex)]"
                                                layoutId="activeNav"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <LanguageToggle />
                        <ThemeToggle />

                        <button
                            onClick={() => setIsDownloadModalOpen(true)}
                            className="hidden sm:flex items-center justify-center font-mono text-[13px] rounded-md transition-all duration-300 active:scale-[0.97] h-10 px-5 gap-2 bg-transparent border border-[var(--accent-hex)] text-[var(--accent-hex)] hover:bg-[var(--accent-glow)]"
                            aria-label={dict.nav.downloadCV}
                        >
                            <Download size={14} />
                            <span className="hidden lg:inline">{dict.nav.downloadCV}</span>
                            <span className="lg:hidden">CV</span>
                        </button>

                        <button
                            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
                            onClick={() => setIsMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileOpen}
                        >
                            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-[hsl(var(--background)/0.8)] backdrop-blur-md"
                            onClick={() => setIsMobileOpen(false)}
                        />

                        <motion.aside
                            className="absolute right-0 top-0 bottom-0 w-72 bg-[hsl(var(--card))] border-l border-[hsl(var(--border))] p-6 pt-20 flex flex-col gap-1"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {navLinks.map((link, i) => {
                                const label = dict.nav[link.label.split('.')[1]];

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={`/${lang}${link.href}`}
                                            className={cn(
                                                'block px-4 py-3 rounded-md text-sm font-mono transition-all duration-200',
                                                activeSection === link.href
                                                    ? 'text-[var(--accent-hex)] bg-[var(--accent-glow)]'
                                                    : 'text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] hover:bg-[hsl(var(--muted))]'
                                            )}
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            <span className="text-[var(--accent-hex)] text-xs mr-2">0{i + 1}.</span>
                                            {label}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]">
                                <button
                                    onClick={() => {
                                        setIsMobileOpen(false);
                                        setIsDownloadModalOpen(true);
                                    }}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-md font-mono text-sm border border-[var(--accent-hex)] text-[var(--accent-hex)] hover:bg-[var(--accent-glow)] transition-all"
                                >
                                    <Download size={16} />
                                    {dict.nav.downloadCV}
                                </button>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>

            <DownloadModal
                isOpen={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
                dict={dict.nav}
                resumeUrl={personalInfo.resumeUrl}
            />
        </>
    );
}
