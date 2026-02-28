import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
    hover?: boolean;
    glow?: boolean;
}

export function Card({
    className,
    glass = true,
    hover = true,
    glow = false,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                'rounded-2xl border transition-all duration-300',
                glass ? 'glass' : 'bg-[hsl(var(--card))]',
                'border-[hsl(var(--border))]',
                hover && 'hover:border-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.4)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]',
                glow && 'hover:shadow-[0_0_40px_var(--accent-glow)]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
