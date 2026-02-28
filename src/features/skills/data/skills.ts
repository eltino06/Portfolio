export interface Skill {
    name: string;
    icon: string;
    level: number;
}

export interface SkillCategory {
    id: string;
    category: string;
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
        category: 'Bases de Datos',
        color: 'orange',
        skills: [
            { name: 'PostgreSQL', icon: 'SiPostgresql', level: 80 },
            { name: 'MySQL', icon: 'SiMysql', level: 75 },
            { name: 'Prisma ORM', icon: 'SiPrisma', level: 70 },
        ],
    },
    {
        id: 'tools',
        category: 'Herramientas & DevOps',
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
