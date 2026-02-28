import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { personalInfo } from '@/lib/data';
import { LanguageProvider } from '@/context/LanguageContext';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: `${personalInfo.name} — ${personalInfo.title}`,
        template: `%s | ${personalInfo.name}`,
    },
    icons: {
        icon: '/icon-brand.png',
        apple: '/icon-brand.png',
    },
    description: `${personalInfo.name} es un ${personalInfo.title} ubicado en ${personalInfo.location}. Especializado en aplicaciones web modernas con Java, Spring Boot, React y Next.js.`,
    keywords: [
        'Santino Bondioni',
        'Desarrollador Java',
        'Spring Boot',
        'Full Stack Developer',
        'Backend Developer',
        'Santa Fe Argentina',
        'Portfolio',
        'Desarrollo Web',
    ],
    authors: [{ name: personalInfo.name, url: personalInfo.socials.github }],
    creator: personalInfo.name,
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        title: `${personalInfo.name} — ${personalInfo.title}`,
        description: `${personalInfo.name} es un ${personalInfo.title} ubicado en ${personalInfo.location}. Construyendo aplicaciones modernas que cautivan y entregan resultados.`,
        siteName: `${personalInfo.name} Portfolio`,
    },
    twitter: {
        card: 'summary_large_image',
        title: `${personalInfo.name} — ${personalInfo.title}`,
        description: `${personalInfo.name} es un ${personalInfo.title} ubicado en ${personalInfo.location}.`,
        creator: '@santibondioni_',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))] selection:bg-[var(--accent-hex)] selection:text-white`}>
                <LanguageProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem={false}
                        storageKey="portfolio-theme"
                    >
                        <ClientLayout>
                            {children}
                        </ClientLayout>
                        <Toaster
                            position="bottom-right"
                            richColors
                            toastOptions={{
                                style: {
                                    background: 'hsl(220 20% 9%)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    color: 'hsl(210 40% 98%)',
                                },
                            }}
                        />
                    </ThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
