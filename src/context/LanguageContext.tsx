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

export function LanguageProvider({
    children,
    initialLanguage
}: {
    children: React.ReactNode;
    initialLanguage: Language;
}) {
    const [language, setLanguage] = useState<Language>(initialLanguage);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLanguage(initialLanguage);
    }, [initialLanguage]);

    const toggleLanguage = () => {
        setIsTransitioning(true);

        setTimeout(() => {
            const currentIndex = LANGUAGE_CYCLE.indexOf(language);
            const nextIndex = (currentIndex + 1) % LANGUAGE_CYCLE.length;
            const newLanguage = LANGUAGE_CYCLE[nextIndex];

            // Replace the locale part of the path
            const pathSegments = pathname.split('/');
            pathSegments[1] = newLanguage;
            const newPath = pathSegments.join('/') || '/';

            router.push(newPath);

            setTimeout(() => {
                setIsTransitioning(false);
            }, 600);
        }, 400); // Wait for overlay to appear before pushing route
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
                        className="fixed inset-0 z-[9999] bg-[#050507] flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="w-10 h-10 rounded-full border-2 border-transparent border-t-[var(--accent-hex)] border-r-[var(--accent-hex)]"
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
