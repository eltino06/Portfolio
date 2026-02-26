'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { navLinks, personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { scrollY } = useScroll();
    const sectionIds = navLinks.map((l) => l.href);
    const activeSection = useScrollSpy(sectionIds, 120);

    useMotionValueEvent(scrollY, 'change', (current) => {
        const diff = current - lastScrollY.current;
        // Hide on scroll down, show on scroll up
        if (current > 80) {
            setIsVisible(diff < 0);
            setIsScrolled(true);
        } else {
            setIsVisible(true);
            setIsScrolled(false);
        }
        lastScrollY.current = current;
    });

    // Close mobile menu on resize
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setIsMobileOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <>
            <motion.header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'glass border-b border-[hsl(var(--border))] shadow-lg'
                        : 'bg-transparent'
                )}
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="#hero"
                        className="group flex items-center gap-2"
                        aria-label="Home"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <motion.div
                            className="w-9 h-9 rounded-xl bg-[var(--accent-hex)] flex items-center justify-center font-bold text-white text-sm font-code shadow-[0_0_20px_var(--accent-glow)] group-hover:shadow-[0_0_32px_var(--accent-glow)] transition-shadow duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {personalInfo.initials}
                        </motion.div>
                        <span className="hidden sm:block text-sm font-semibold group-hover:text-[var(--accent-hex)] transition-colors duration-200">
                            {personalInfo.firstName}
                            <span className="text-[var(--accent-hex)]">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-1" role="navigation">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                            isActive
                                                ? 'text-[var(--accent-hex)]'
                                                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
                                        )}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent-hex)] rounded-full"
                                                layoutId="activeNav"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <a
                            href={personalInfo.resumeUrl}
                            download
                            className="hidden sm:flex"
                            aria-label="Download CV"
                        >
                            <Button variant="outline" size="sm" className="gap-1.5">
                                <Download size={14} />
                                <span className="hidden lg:inline">Download CV</span>
                                <span className="lg:hidden">CV</span>
                            </Button>
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.5)]"
                            onClick={() => setIsMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileOpen}
                        >
                            {isMobileOpen ? <X size={16} /> : <Menu size={16} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.aside
                            className="absolute right-0 top-0 bottom-0 w-72 glass border-l border-[hsl(var(--border))] p-6 pt-20 flex flex-col gap-2"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                                            activeSection === link.href
                                                ? 'bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.15)] text-[var(--accent-hex)]'
                                                : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]'
                                        )}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="mt-4 pt-4 border-t border-[hsl(var(--border))]">
                                <a href={personalInfo.resumeUrl} download>
                                    <Button variant="primary" size="md" className="w-full gap-2">
                                        <Download size={16} />
                                        Download CV
                                    </Button>
                                </a>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
