'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLanguage(initialLanguage);
    }, [initialLanguage]);

    const toggleLanguage = () => {
        const currentIndex = LANGUAGE_CYCLE.indexOf(language);
        const nextIndex = (currentIndex + 1) % LANGUAGE_CYCLE.length;
        const newLanguage = LANGUAGE_CYCLE[nextIndex];

        // Replace the locale part of the path
        // pathname is like /en/about or /es
        const pathSegments = pathname.split('/');
        pathSegments[1] = newLanguage;
        const newPath = pathSegments.join('/') || '/';

        router.push(newPath);
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
