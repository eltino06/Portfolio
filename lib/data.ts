/**
 * ============================================================
 * 📁 lib/data.ts — ARCHIVO DE DATOS DEL PORTFOLIO
 * ============================================================
 * Este es el ÚNICO archivo que necesitas editar para personalizar
 * tu portfolio. Actualiza los valores a continuación.
 * ============================================================
 */

// ─────────────────────────────────────────
// 👤 INFORMACIÓN PERSONAL
// ─────────────────────────────────────────
export const personalInfo = {
    /** Nombre completo */
    name: 'Santino Bondioni',
    /** Solo primer nombre (usado en el saludo del hero) */
    firstName: 'Santino',
    /** Título profesional */
    title: 'Desarrollador FullStack Jr',
    /** Palabras que rotan en el efecto typewriter (Keys) */
    roles: ['hero.roles.java', 'hero.roles.fullstack', 'hero.roles.backend', 'hero.roles.solver'],
    /** Bio corta (Keys) */
    bio: ['about.bio.0', 'about.bio.1', 'about.bio.2'],
    /** Ubicación */
    location: 'Santa Fe, Argentina',
    /** Email de contacto */
    email: 'santibon12345@gmail.com',
    /** Teléfono (opcional) */
    phone: '+54 3446377968',
    /** Ruta al CV PDF en /public */
    resumeUrl: '/assets/cv-santino-bondioni.pdf',
    /** URL del avatar en /public (null para usar iniciales) */
    avatarUrl: null as string | null,
    /** Iniciales (se muestran si no hay avatar) */
    initials: 'SB',
    /** Redes sociales */
    socials: {
        github: 'https://github.com/eltino06',
        linkedin: 'https://www.linkedin.com/in/santino-bondioni/',
        instagram: 'https://www.instagram.com/santinobondioni/',
    },
} as const;

// ─────────────────────────────────────────
// 📊 ESTADÍSTICAS (Hero + About)
// ─────────────────────────────────────────
export const stats = [
    { value: 1, suffix: '+', label: 'stats.exp' },
    { value: 5, suffix: '+', label: 'stats.projects' },
    { value: 20, suffix: '', label: 'stats.age' },
    { value: 70, suffix: '%', label: 'stats.career' },
] as const;

// ─────────────────────────────────────────
// 🛠️ HABILIDADES (SKILLS)
// ─────────────────────────────────────────
export interface Skill {
    name: string;
    icon: string;
    level: number;
}

export interface SkillCategory {
    id: string; // Used for translation keys (skills.categories.[id])
    category: string; // Fallback
    color: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'backend',
        category: 'Backend',
        color: 'purple',
        skills: [
            { name: 'Java', icon: 'SiOpenjdk', level: 85 },
            { name: 'Spring Boot', icon: 'SiSpringboot', level: 80 },
            { name: 'Node.js', icon: 'SiNodedotjs', level: 75 },
            { name: 'Express', icon: 'SiExpress', level: 70 },
            { name: 'TypeScript', icon: 'SiTypescript', level: 75 },
        ],
    },
    {
        id: 'frontend',
        category: 'Frontend',
        color: 'accent',
        skills: [
            { name: 'React', icon: 'SiReact', level: 80 },
            { name: 'Next.js', icon: 'SiNextdotjs', level: 75 },
            { name: 'JavaScript', icon: 'SiJavascript', level: 85 },
            { name: 'HTML5', icon: 'SiHtml5', level: 90 },
            { name: 'CSS3', icon: 'SiCss3', level: 85 },
            { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 85 },
        ],
    },
    {
        id: 'database',
        category: 'Bases de Datos', // Fallback
        color: 'orange',
        skills: [
            { name: 'PostgreSQL', icon: 'SiPostgresql', level: 80 },
            { name: 'MySQL', icon: 'SiMysql', level: 75 },
            { name: 'Prisma ORM', icon: 'SiPrisma', level: 70 },
        ],
    },
    {
        id: 'tools',
        category: 'Herramientas & DevOps', // Fallback
        color: 'green',
        skills: [
            { name: 'Docker', icon: 'SiDocker', level: 65 },
            { name: 'Git', icon: 'SiGit', level: 85 },
            { name: 'GitHub', icon: 'SiGithub', level: 85 },
            { name: 'Linux', icon: 'SiLinux', level: 70 },
            { name: 'Postman', icon: 'SiPostman', level: 80 },
        ],
    },
];

// ─────────────────────────────────────────
// 🚀 PROYECTOS
// ─────────────────────────────────────────
export type ProjectCategory = 'Todas' | 'Frontend' | 'Backend' | 'FullStack';

export interface Project {
    id: string;
    translationKey: string; // Key in translations.ts (projects.items.[key])
    title: string;
    description: string;
    longDescription: string;
    stack: string[];
    category: Exclude<ProjectCategory, 'Todos'>;
    image: string;
    github: string;
    live: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'admin',
        translationKey: 'admin',
        title: 'Plataforma de Gestión Administrativa',
        description: 'Sistema integral para administración con backend en Spring Boot y frontend en React.',
        longDescription: 'Arquitectura backend con Spring Boot implementando una API REST completa, sistema de roles (RBAC), autenticación JWT y auditoría de acciones. Frontend desarrollado en React con control de accesos dinámico y dashboards administrativos. Desplegado bajo contenedores Docker.',
        stack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Node.js'],
        category: 'FullStack',
        image: '',
        github: 'https://github.com/eltino06',
        live: '',
        featured: true,
    },
    {
        id: 'reg',
        translationKey: 'reg',
        title: 'Sistema de Registro Digital y Auditoría',
        description: 'Aplicación enfocada en trazabilidad y seguridad de datos operacionales.',
        longDescription: 'Diseño de arquitectura orientada a trazabilidad extrema: cada operación es registrada, versionada y auditable. Modelo de base de datos relacional avanzado diseñado para integridad referencial total and flujos de seguridad estrictos.',
        stack: ['Java', 'PostgreSQL', 'Prisma', 'TypeScript', 'Node.js'],
        category: 'Backend',
        image: '',
        github: 'https://github.com/eltino06/rdam',
        live: '',
        featured: true,
    },
    {
        id: 'port',
        translationKey: 'port',
        title: 'Portfolio 2025',
        description: 'Mi carta de presentación digital construida con tecnologías de última generación.',
        longDescription: 'Portfolio profesional de alto impacto visual y técnico. Utiliza Next.js 14 para optimización extrema, Framer Motion para animaciones fluidas y micro-interacciones visuales.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        category: 'Frontend',
        image: '',
        github: 'https://github.com/eltino06/Portfolio',
        live: '',
        featured: true,
    },
];

// ─────────────────────────────────────────
// 💼 EXPERIENCIA
// ─────────────────────────────────────────
export interface Experience {
    id: string;
    translationKey: string; // Key in translations.ts (experience.items.[key])
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    achievements: string[];
    logo?: string;
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 'freelance-fullstack',
        translationKey: 'freelance',
        company: 'Proyectos Independientes',
        role: 'Desarrollador Full Stack',
        startDate: '2024',
        endDate: 'Actualidad',
        location: 'Remoto (Argentina)',
        description: 'Desarrollo end-to-end de aplicaciones web: diseño de arquitectura, implementación backend, modelado de bases de datos e integración con frontend.',
        achievements: [
            'Desarrollo de APIs REST con Spring Boot y Node.js (autenticación y roles)',
            'Modelado y optimización de bases de datos relacionales con PostgreSQL',
            'Implementación de sistemas de seguridad y registro de auditoría',
            'Documentación técnica de endpoints y decisiones de diseño arquitectónico',
            'Uso de entornos contenerizados con Docker para despliegues locales',
        ],
        technologies: ['Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'TypeScript'],
    },
];

// ─────────────────────────────────────────
// 🎓 EDUCACIÓN
// ─────────────────────────────────────────
export interface Education {
    id: string;
    translationKey: string; // Key in translations.ts (education.items.[key])
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    status: 'En curso' | 'Finalizado';
    description: string;
    progress: number;
}

export const education: Education[] = [
    {
        id: 'ies',
        translationKey: 'ies',
        institution: 'IES (Instituto de Estudios Superiores)',
        degree: 'Tecnicatura',
        field: 'Desarrollo de Software',
        startDate: '2024',
        endDate: '2026',
        status: 'En curso',
        description: 'Formación técnica superior enfocada en algoritmos, POO, bases de datos y arquitectura. Nivel de inglés técnico B2 integrado.',
        progress: 70,
    },
    {
        id: 'secundario',
        translationKey: 'secundario',
        institution: 'Educacion',
        degree: 'Nivel Primario y Secundario',
        field: 'Finalizado',
        startDate: '2012',
        endDate: '2023',
        status: 'Finalizado',
        description: 'Educación primaria y secundaria con base sólida en ciencias y tecnología.',
        progress: 100,
    },
];

// ─────────────────────────────────────────
// 🏠 LINKS DE NAVEGACIÓN
// ─────────────────────────────────────────
export const navLinks = [
    { href: '#hero', label: 'nav.home' },
    { href: '#about', label: 'nav.about' },
    { href: '#skills', label: 'nav.skills' },
    { href: '#projects', label: 'nav.projects' },
    { href: '#experience', label: 'nav.experience' },
    { href: '#contact', label: 'nav.contact' },
] as const;
