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
        if (typeof window === 'undefined') return;

        // Prevent clicking multiple times
        if (document.getElementById('vanilla-lang-overlay')) return;

        const isDark = document.documentElement.classList.contains('dark');

        // Create the ultimate bulletproof Vanilla JS overlay
        // This is 100% immune to Next.js destroying/re-rendering Layout trees on locale change
        const overlay = document.createElement('div');
        overlay.id = 'vanilla-lang-overlay';
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.zIndex = '99999';
        overlay.style.backgroundColor = isDark ? '#050507' : '#ffffff';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.4s ease-in-out';
        overlay.style.pointerEvents = 'auto'; // Block everything underneath

        const spinner = document.createElement('div');
        spinner.style.width = '2.5rem';
        spinner.style.height = '2.5rem';
        spinner.style.borderRadius = '9999px';
        spinner.style.borderWidth = '2px';
        spinner.style.borderStyle = 'solid';
        spinner.style.borderColor = 'transparent';
        spinner.style.borderTopColor = isDark ? '#ffffff' : '#000000';
        spinner.style.borderRightColor = isDark ? '#ffffff' : '#000000';

        if (!document.getElementById('vanilla-spinner-styles')) {
            const style = document.createElement('style');
            style.id = 'vanilla-spinner-styles';
            style.textContent = `
                @keyframes vanilla-spin-anim {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        spinner.style.animation = 'vanilla-spin-anim 1s linear infinite';

        overlay.appendChild(spinner);
        document.body.appendChild(overlay);

        // Force reflow
        void overlay.offsetWidth;

        // Start smooth fade-in
        overlay.style.opacity = '1';

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

            // Mark language change
            sessionStorage.setItem('languageChange', 'true');
            sessionStorage.setItem('savedScrollPos', window.scrollY.toString());

            // Fire the Next.js Route Swap
            router.push(newPath, { scroll: false });

            // Aggressively lock scroll
            const savedScroll = window.scrollY;
            const lockInterval = setInterval(() => {
                window.scrollTo(0, savedScroll);
            }, 10);

            // Wait 3500ms for translations to load safely, then fade out and destroy
            setTimeout(() => {
                clearInterval(lockInterval);
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 400); // 0.4s to fade out before destroying DOM
            }, 3500);

        }, 450); // Wait 450ms for the 0.4s fade-in to COMPLETE entirely before triggering Next.js swap
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
