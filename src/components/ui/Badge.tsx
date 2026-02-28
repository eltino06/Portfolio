import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'accent' | 'outline' | 'muted';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
    const variants = {
        default:
            'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]',
        accent:
            'bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.15)] text-[var(--accent-hex)] border border-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.3)]',
        outline:
            'bg-transparent border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]',
        muted:
            'bg-[hsl(var(--muted)/0.5)] text-[hsl(var(--muted-foreground))] border border-transparent',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium font-code transition-all duration-200 hover:scale-105',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
