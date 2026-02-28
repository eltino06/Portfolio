import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import { personalInfo } from '@/features/hero/data/hero';
import { LanguageProvider } from '@/context/LanguageContext';
import { ClientLayout } from '@/components/layout/ClientLayout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { getDictionary } from '@/lib/i18n';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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

const basePath = process.env.GITHUB_ACTIONS ? '/Portfolio' : '';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const lang = params.lang as any;
    const dict = await getDictionary(lang);

    return {
        metadataBase: new URL('https://santinobondioni.vercel.app'),
        title: {
            default: `${personalInfo.name} — ${personalInfo.title}`,
            template: `%s | ${personalInfo.name}`,
        },
        icons: {
            icon: `${basePath}/icon-brand.png`,
            apple: `${basePath}/icon-brand.png`,
        },
        description: dict.hero.subtitle,
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
            locale: lang === 'es' ? 'es_AR' : 'en_US',
            url: `https://santinobondioni.vercel.app/${lang}`, // Placeholder based on Vercel
            title: `${personalInfo.name} — ${personalInfo.title}`,
            description: dict.hero.subtitle,
            siteName: `${personalInfo.name} Portfolio`,
            images: [
                {
                    url: `${basePath}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: personalInfo.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${personalInfo.name} — ${personalInfo.title}`,
            description: dict.hero.subtitle,
            images: [`${basePath}/og-image.png`],
            creator: '@santinobondioni',
        },
        viewport: 'width=device-width, initial-scale=1',
        robots: {
            index: true,
            follow: true,
        },
    };
}

export function generateStaticParams() {
    return [{ lang: 'es' }, { lang: 'en' }, { lang: 'pt' }, { lang: 'it' }];
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const lang = params.lang as any;
    const dict = await getDictionary(lang);

    return (
        <html lang={lang} suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))] selection:bg-[var(--accent-hex)] selection:text-white`}>
                <LanguageProvider initialLanguage={lang}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem={false}
                        storageKey="portfolio-theme"
                    >
                        <ClientLayout lang={lang}>
                            <Navbar dict={dict} lang={lang} />
                            {children}
                            <Footer dict={dict} lang={lang} />
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
