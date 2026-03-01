'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { cn } from '@/lib/utils';

const inputCls =
    'w-full px-4 py-3 rounded-xl glass border border-[hsl(var(--border))] text-sm placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[var(--accent-hex)] focus:shadow-[0_0_0_3px_var(--accent-glow)] transition-all duration-200 bg-transparent';

interface ContactFormProps {
    dict: any;
}

function FormField({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">{label}</label>
            {children}
            {error && (
                <motion.p
                    className="text-xs text-red-400"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}

export function ContactForm({ dict }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: 'onTouched'
    });

    const onSubmit = async (data: ContactFormData) => {
        if (!isConfirming) {
            setIsConfirming(true);
            return;
        }

        setIsConfirming(false);
        setIsSubmitting(true);
        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS credentials missing');
            }

            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                    to_name: 'Santino Bondioni',
                },
                publicKey
            );

            if (result.status === 200) {
                toast.success(dict.success || '¡Mensaje enviado con éxito! 🚀');
                setIsConfirming(false);
                reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(dict.error || 'Algo salió mal. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl border border-[hsl(var(--border))] p-6 space-y-5"
            noValidate
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label={dict.name} error={errors.name?.message}>
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="Santino"
                        className={cn(inputCls, errors.name && 'border-red-400/50')}
                        autoComplete="name"
                        onChange={() => setIsConfirming(false)}
                    />
                </FormField>

                <FormField label={dict.email} error={errors.email?.message}>
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        className={cn(inputCls, errors.email && 'border-red-400/50')}
                        autoComplete="email"
                        onChange={() => setIsConfirming(false)}
                    />
                </FormField>
            </div>

            <FormField label={dict.subject} error={errors.subject?.message}>
                <input
                    {...register('subject')}
                    type="text"
                    placeholder="..."
                    className={cn(inputCls, errors.subject && 'border-red-400/50')}
                    onChange={() => setIsConfirming(false)}
                />
            </FormField>

            <FormField label={dict.message} error={errors.message?.message}>
                <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="..."
                    className={cn(inputCls, 'resize-none', errors.message && 'border-red-400/50')}
                    onChange={() => setIsConfirming(false)}
                />
            </FormField>

            <Button
                type="submit"
                variant={isConfirming ? "secondary" : "primary"}
                size="lg"
                isLoading={isSubmitting}
                className={cn(
                    "w-full gap-3 h-14 text-base font-bold shadow-lg transition-all duration-300",
                    isConfirming && "bg-amber-500 hover:bg-amber-600 text-white border-transparent dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/50 dark:hover:bg-amber-500/30"
                )}
            >
                <Send size={20} className={cn(isConfirming && "animate-bounce")} />
                {isSubmitting ? dict.sending : isConfirming ? dict.confirmSend : dict.send}
            </Button>
        </form>
    );
}
