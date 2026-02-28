import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'primary',
            size = 'md',
            isLoading = false,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const base =
            'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group';

        const variants = {
            primary:
                'bg-[var(--accent-hex)] text-black font-bold hover:bg-[hsl(var(--accent-h),var(--accent-s),85%)] hover:shadow-[0_0_30px_var(--accent-glow)] active:scale-[0.97]',
            secondary:
                'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted-foreground)/0.15)] active:scale-[0.97]',
            ghost:
                'bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] active:scale-[0.97]',
            outline:
                'bg-transparent border border-[var(--accent-hex)] text-[var(--accent-hex)] hover:bg-[hsl(var(--accent-h),var(--accent-s),var(--accent-l)/0.1)] hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-[0.97]',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm gap-1.5',
            md: 'h-11 px-6 text-sm gap-2',
            lg: 'h-13 px-8 text-base gap-2',
        };

        return (
            <button
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                disabled={disabled ?? isLoading}
                {...props}
            >
                {/* Shimmer effect on hover - constant and repetitive subtle reflection */}
                <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-loop bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {isLoading ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                        <span>Loading…</span>
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
export { Button };
