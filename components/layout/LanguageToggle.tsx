'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    const getAriaLabel = () => {
        switch (language) {
            case 'es': return 'Switch to English';
            case 'en': return 'Alterar para Português';
            case 'pt': return 'Passa all\'Italiano';
            case 'it': return 'Cambiar a Español';
            default: return 'Switch Language';
        }
    };

    return (
        <button
            onClick={toggleLanguage}
            aria-label={getAriaLabel()}
            className="relative w-12 h-9 flex items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.5)] hover:bg-[hsl(var(--muted))] hover:border-[var(--accent-hex)] transition-all duration-200 group"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={language}
                    initial={{ opacity: 0, scale: 0.8, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                >
                    <Languages size={14} className="text-[hsl(var(--muted-foreground))] group-hover:text-[var(--accent-hex)] transition-colors" />
                    <span className="text-[11px] font-bold font-code leading-none">
                        {language === 'pt' ? 'BR' : language.toUpperCase()}
                    </span>
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
