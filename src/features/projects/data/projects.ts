export type ProjectCategory = 'Todas' | 'Frontend' | 'Backend' | 'FullStack';

export interface Project {
    id: string;
    translationKey: string;
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
        longDescription: 'Portfolio profesional de alto impacto visual and técnico. Utiliza Next.js 14 para optimización extrema, Framer Motion para animaciones fluidas and micro-interacciones visuales.',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        category: 'Frontend',
        image: '',
        github: 'https://github.com/eltino06/Portfolio',
        live: '',
        featured: true,
    },
];
