'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/lib/data';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    const { t } = useLanguage();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="w-full max-w-sm p-6 glass border border-[hsl(var(--border))] rounded-2xl flex flex-col gap-6"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold">{t('nav.downloadCV')}</h3>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-[hsl(var(--muted-foreground))] text-sm">
                            {t('nav.downloadConfirm')}
                        </p>

                        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                            <button
                                onClick={onClose}
                                className="px-4 py-2.5 rounded-xl text-sm font-medium border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors sm:w-1/2"
                            >
                                {t('nav.downloadCancel')}
                            </button>
                            <a
                                href={personalInfo.resumeUrl}
                                download="Santino_Bondioni_CV.pdf"
                                onClick={onClose}
                                className="px-4 py-2.5 rounded-xl text-sm font-bold bg-[var(--accent-hex)] text-[var(--accent-fg)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-all flex items-center justify-center gap-2 sm:w-1/2"
                            >
                                <Download size={16} />
                                {t('nav.downloadAccept')}
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
