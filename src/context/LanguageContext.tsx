'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, TranslationKey } from '@/lib/translations';

type Language = 'es' | 'en' | 'pt' | 'it';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (path: TranslationKey, options?: { returnObjects?: boolean }) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_CYCLE: Language[] = ['es', 'en', 'pt', 'it'];
let globalTransitionEndTime = 0;

export function LanguageProvider({
    children,
    initialLanguage
}: {
    children: React.ReactNode;
    initialLanguage: Language;
}) {
    const [language, setLanguage] = useState<Language>(initialLanguage);
    const [isTransitioning, setIsTransitioning] = useState(() => {
        if (typeof window !== 'undefined') {
            return Date.now() < globalTransitionEndTime;
        }
        return false;
    });
    const wasAlreadyTransitioning = React.useRef(isTransitioning);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (isTransitioning) {
            const remaining = globalTransitionEndTime - Date.now();
            if (remaining > 0) {
                const timer = setTimeout(() => {
                    setIsTransitioning(false);
                }, remaining);
                return () => clearTimeout(timer);
            } else {
                setIsTransitioning(false);
            }
        }
    }, [isTransitioning]);

    useEffect(() => {
        setLanguage(initialLanguage);

        // When the page remounts in the new language, instantly restore scroll
        if (typeof window !== 'undefined') {
            const savedScroll = sessionStorage.getItem('savedScrollPos');
            if (savedScroll && sessionStorage.getItem('languageChange') === 'true') {
                const scrollPos = parseInt(savedScroll, 10);
                window.scrollTo(0, scrollPos);
                // Also schedule a micro-delay restore just in case images bump the layout
                setTimeout(() => window.scrollTo(0, scrollPos), 50);
            }
        }
    }, [initialLanguage]);

    const toggleLanguage = () => {
        globalTransitionEndTime = Date.now() + 3000;
        wasAlreadyTransitioning.current = false; // We initiated it manually, so it must fade in from 0
        setIsTransitioning(true);

        setTimeout(() => {
            const currentIndex = LANGUAGE_CYCLE.indexOf(language);
            const nextIndex = (currentIndex + 1) % LANGUAGE_CYCLE.length;
            const newLanguage = LANGUAGE_CYCLE[nextIndex];

            // Replace the locale part of the path
            const pathSegments = pathname.split('/');
            pathSegments[1] = newLanguage;

            // Preserve the exact section (hash)
            const currentHash = window.location.hash;
            const newPath = (pathSegments.join('/') || '/') + currentHash;

            // Set a flag to bypass the LoginScreen since we are doing a language transition
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('languageChange', 'true');
                sessionStorage.setItem('savedScrollPos', window.scrollY.toString());
            }

            // CRITICAL: scroll: false prevents the page from jumping to the top!
            router.push(newPath, { scroll: false });

            // Aggressively lock scroll position while Next.js swaps out the DOM
            const savedScroll = window.scrollY;
            const lockInterval = setInterval(() => {
                window.scrollTo(0, savedScroll);
            }, 10);

            setTimeout(() => clearInterval(lockInterval), 2900);

        }, 450); // Wait 450ms for the 0.4s fade-in to complete before swapping the layout
    };

    const t = (path: TranslationKey, options?: { returnObjects?: boolean }): any => {
        const keys = path.split('.');
        let current: any = translations[language];

        for (const key of keys) {
            if (current === undefined || current[key] === undefined) {
                console.warn(`Translation path not found: ${path} in language: ${language}`);
                return path;
            }
            current = current[key];
        }

        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-[9999] bg-white dark:bg-[#050507] flex items-center justify-center pointer-events-none"
                        initial={{ opacity: wasAlreadyTransitioning.current ? 1 : 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        {/* Explicit dark and light classes to guarantee perfect coloring in standard and dark mode */}
                        <motion.div
                            className="w-10 h-10 rounded-full border-2 border-transparent border-t-black border-r-black dark:border-t-white dark:border-r-white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
