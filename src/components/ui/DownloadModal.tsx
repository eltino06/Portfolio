'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
    dict: any;
    resumeUrl: string;
}

export function DownloadModal({ isOpen, onClose, dict, resumeUrl }: DownloadModalProps) {
    if (!dict) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="w-full max-w-sm p-6 glass border border-[hsl(var(--border))] rounded-2xl flex flex-col gap-6 shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold tracking-tight">{dict.downloadCV}</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-[hsl(var(--muted))] transition-colors text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                            {dict.downloadConfirm}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                                onClick={onClose}
                                className="px-4 py-3 rounded-xl text-sm font-medium border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))] transition-colors sm:w-1/2"
                            >
                                {dict.downloadCancel}
                            </button>
                            <a
                                href={resumeUrl}
                                download="Santino_Bondioni_CV.pdf"
                                onClick={onClose}
                                className="px-4 py-3 rounded-xl text-sm font-bold bg-[var(--accent-hex)] text-[var(--accent-fg)] hover:shadow-[0_0_30px_var(--accent-glow)] transition-all flex items-center justify-center gap-2 sm:w-1/2"
                            >
                                <Download size={16} />
                                {dict.downloadAccept}
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
