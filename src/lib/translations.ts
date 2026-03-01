export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Habilidades',
            projects: 'Proyectos',
            experience: 'Experiencia',
            contact: 'Contacto',
            downloadCV: 'Descargar CV',
            downloadConfirm: '¿Estás seguro que deseas descargar mi CV?',
            downloadCancel: 'Cancelar',
            downloadAccept: 'Sí, descargar',
        },
        hero: {
            greeting: 'DESARROLLADOR FULLSTACK',
            subtitle: 'Diseñando arquitecturas backend resilientes y sistemas escalables orientados a resolver cuellos de botella y maximizar el impacto de negocio.',
            viewProjects: 'Explorar Casos de Estudio',
            viewExperience: 'o ver experiencia profesional ↓',
            contact: 'Contactar',
            scroll: 'EXPLORAR',
            roles: {
                java: 'Arquitectura Backend',
                fullstack: 'Desarrollo de Producto',
                backend: 'Sistemas Escalables',
                solver: 'Resolución de Problemas',
            }
        },
        stats: {
            exp: 'Año de Experiencia',
            projects: 'Proyectos Realizados',
            age: 'Años de Edad',
            career: 'Progreso de Carrera',
        },
        about: {
            title: 'Filosofía & Sobre Mí',
            subtitle: 'Desarrollo orientado a resultados',
            description: 'Un desarrollador fullstack apasionado por la escalabilidad técnica y el impacto en el negocio.',
            highlights: {
                location: 'Base de Operaciones',
                education: 'Formación Base',
                availability: 'Disponibilidad',
                languages: 'Idiomas',
                locValue: 'Santa Fe, Argentina (Remoto global)',
                eduValue: 'IES — Tecnicatura en Desarrollo de Software',
                availValue: 'Inmediata',
                langValue: 'Español (Nativo) | Inglés B2',
            },
            bio: [
                'Arquitecto de Software y Desarrollador Fullstack con foco en ecosistemas Java/Spring Boot. Me especializo en desentrañar complejidad técnica para orquestar sistemas de alta disponibilidad y rendimiento.',
                'Mi filosofía: el código debe ser una inversión, no una deuda. Diseño arquitecturas resilientes (0% downtime) bajo principios de seguridad por diseño y escalabilidad horizontal, asegurando que el sistema crezca al ritmo del negocio.',
                'Como consultor técnico, ayudo a las organizaciones a optimizar sus cuellos de botella mediante APIs RESTful robustas, orquestación de microservicios y una cultura de calidad orientada a resultados.',
            ],
            eduSubtitle: 'Formación Académica',
            eduProgress: 'Progreso',
            items: {
                ies: {
                    degree: 'Tecnicatura',
                    institution: 'IES (Instituto de Estudios Superiores)',
                    field: 'Desarrollo de Software',
                    desc: 'Formación técnica superior enfocada en algoritmos, POO, bases de datos y arquitectura. Nivel de inglés técnico B2 integrado.',
                    status: 'En curso',
                },
                secundario: {
                    degree: 'Nivel Primario y Secundario',
                    institution: 'Colegio local',
                    field: 'Educación Obligatoria',
                    desc: 'Educación primaria y secundaria con base sólida en ciencias y tecnología.',
                    status: 'Finalizado',
                }
            }
        },
        skills: {
            title: 'Arsenal Técnico',
            subtitle: 'Skills',
            categories: {
                backend: 'Core Backend & API',
                frontend: 'Arquitectura Client & UI',
                database: 'Datos & Persistencia',
                tools: 'DevOps & Herramientas',
            },
        },
        architecture: {
            title: 'Pensamiento Sistémico',
            subtitle: 'Arquitectura & Escalabilidad',
            description: 'Mi enfoque en desarrollo va más allá de escribir código. Diseño sistemas resilientes que resuelven cuellos de botella del negocio, priorizando la seguridad, la escalabilidad horizontal y la experiencia del desarrollador.',
            pillars: {
                resilience: {
                    title: 'Resiliencia & Alta Disponibilidad',
                    desc: 'Diseño de servicios stateless y arquitecturas tolerantes a fallos (fault-tolerant) para asegurar uptime óptimo.'
                },
                security: {
                    title: 'Seguridad desde el Diseño',
                    desc: 'Implementación de controles de acceso estrictos (RBAC), encriptación de datos e inmutabilidad (auditoría).'
                },
                scalability: {
                    title: 'Escalabilidad Horizontal',
                    desc: 'Construcción de servicios débilmente acoplados que permiten escalar de forma independiente según demanda.'
                }
            },
            diagram: {
                client: 'Cliente',
                gateway: 'API Gateway / Auth Layer',
                services: 'Core Microservices',
                database: 'Almacenamiento Persistente'
            }
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Mis Trabajos Recientes',
            description: 'Una selección de proyectos que muestran mis habilidades en todo el stack.',
            all: 'Todas',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Código',
            viewLive: 'En Vivo',
            details: 'Ver Detalles',
            featured: 'Destacado',
            caseStudy: {
                context: 'Contexto de Negocio',
                challenge: 'El Reto Técnico',
                solution: 'Solución Arquitectónica',
                impact: 'Impacto & Resultados',
                stack: 'Stack Tecnológico',
            },
            items: {
                admin: {
                    title: 'Ecosistema de Gestión Empresarial',
                    desc: 'Plataforma administrativa crítica con RBAC y auditoría para la optimización de flujos operativos.',
                    context: 'Procesos descentralizados que generaban ineficiencia operativa y brechas de seguridad en la trazabilidad de datos.',
                    challenge: 'Unificar la gestión mediante una arquitectura de microservicios con control de accesos granular y alta tolerancia a fallos.',
                    solution: 'Orquestación de una API RESTful con Spring Boot, Spring Security (JWT) y PostgreSQL. Dashboard dinámico en React y despliegue automatizado con Docker.',
                    impact: 'Reducción del 40% en tiempos de gestión manual y trazabilidad del 100% de las operaciones críticas mediante logs de auditoría inmutables.',
                },
                reg: {
                    title: 'Core de Registro Digital & Auditoría',
                    desc: 'Arquitectura orientada a la seguridad extrema y trazabilidad inmutable de datos operacionales.',
                    context: 'Vulnerabilidad en la integridad de registros físicos y necesidad de una fuente de verdad única y segura.',
                    challenge: 'Garantizar la inmutabilidad de los datos y diseñar un modelo relacional avanzado para consultas de alta velocidad.',
                    solution: 'Backend de alto rendimiento con Node.js, TypeScript y Prisma ORM sobre PostgreSQL, implementando validaciones de integridad en múltiples capas.',
                    impact: 'Digitalización total de procesos, eliminación del riesgo de manipulación de datos y tiempos de respuesta de consulta menores a 50ms.',
                },
                port: {
                    title: 'Frontend Architecture 2025',
                    desc: 'Showcase técnico de alto rendimiento optimizado para conversión B2B y visibilidad en buscadores.',
                    context: 'Necesidad de una plataforma que demuestre seniority técnico y atención absoluta al detalle UX/UI.',
                    challenge: 'Mantener un 100/100 en Core Web Vitals mientras se ejecutan animaciones complejas y sistemas de i18n dinámicos.',
                    solution: 'Stack basado en Next.js 14 (App Router), Tailwind CSS y Framer Motion con generación estática optimizada (SSG).',
                    impact: 'Performance extrema con tiempos de carga instantáneos e incremento en la tasa de conversión de contacto profesional.',
                }
            }
        },
        experience: {
            title: 'Experiencia',
            subtitle: 'Trayectoria Profesional',
            description: 'Mi trayectoria profesional y el impacto que he tenido en el camino.',
            present: 'Actualidad',
            items: {
                freelance: {
                    role: 'Consultor Técnico Full Stack',
                    company: 'Servicios de Consultoría Independiente',
                    location: 'Remoto (Internacional)',
                    desc: 'Liderazgo técnico en el ciclo completo de vida del software: desde la concepción de la arquitectura hasta el despliegue de soluciones escalables para diversos clientes de la región.',
                    highlights: [
                        'Arquitectura y desarrollo de APIs REST críticas con Spring Boot (Java) y Node.js para sistemas empresariales.',
                        'Optimización de bases de datos PostgreSQL, mejorando el rendimiento de consultas pesadas en un 30%.',
                        'Implementación de sistemas de seguridad multicapa (JWT, RBAC) y logs de auditoría para cumplimiento normativo.',
                        'Estandarización de procesos de desarrollo mediante documentación técnica avanzada y diagramas de arquitectura.',
                        'Orquestación de despliegues locales y staging mediante entornos contenerizados con Docker.',
                    ]
                }
            }
        },
        contact: {
            title: 'Contacto',
            subtitle: 'Trabajemos juntos',
            description: 'Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes.',
            details: 'Tanto si tienes un proyecto en mente, una pregunta o simplemente quieres saludar, mi bandeja de entrada está siempre abierta. Construyamos algo grandioso juntos.',
            infoEmail: 'Email',
            infoPhone: 'Número de Teléfono',
            infoLocation: 'Ubicación',
            name: 'Nombre',
            email: 'Correo Electrónico',
            subject: 'Asunto',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
            sending: 'Enviando...',
            success: '¡Mensaje enviado con éxito! Te responderé a la brevedad.',
            error: 'Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.',
        },
        footer: {
            navigation: 'Navegación',
            connect: 'Conectar',
            madeWith: 'Hecho con',
            backToTop: 'Volver arriba',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            contact: 'Contact',
            downloadCV: 'Download CV',
            downloadConfirm: 'Are you sure you want to download my CV?',
            downloadCancel: 'Cancel',
            downloadAccept: 'Yes, download',
        },
        hero: {
            greeting: "FULLSTACK DEVELOPER",
            subtitle: 'Designing resilient backend architectures and scalable systems focused on solving bottlenecks and maximizing business impact.',
            viewProjects: 'Explore Case Studies',
            viewExperience: 'or see professional experience ↓',
            contact: 'Contact Me',
            scroll: 'EXPLORE',
            roles: {
                java: 'Backend Architecture',
                fullstack: 'Product Development',
                backend: 'Scalable Systems',
                solver: 'Complex Problem Solving',
            }
        },
        stats: {
            exp: 'Year of Experience',
            projects: 'Projects Completed',
            age: 'Years Old',
            career: 'Career Progress',
        },
        about: {
            title: 'Philosophy & About Me',
            subtitle: 'Results-driven Development',
            description: 'A fullstack developer passionate about technical scalability and business impact.',
            highlights: {
                location: 'Base of Operations',
                education: 'Core Formation',
                availability: 'Availability',
                languages: 'Languages',
                locValue: 'Santa Fe, Argentina (Global Remote)',
                eduValue: 'IES — Software Development Degree',
                availValue: 'Immediate',
                langValue: 'Spanish (Native) | English B2',
            },
            bio: [
                'Software Architect and Fullstack Developer focused on Java/Spring Boot ecosystems. I specialize in unraveling technical complexity to orchestrate high-availability and high-performance systems.',
                'My philosophy: code should be an investment, not a debt. I design resilient architectures (0% downtime) based on security-by-design and horizontal scalability principles, ensuring the system grows at the speed of business.',
                'As a technical consultant, I help organizations optimize their technical bottlenecks through robust RESTful APIs, microservices orchestration, and a results-oriented quality culture.',
            ],
            eduSubtitle: 'Academic Background',
            eduProgress: 'Progress',
            items: {
                ies: {
                    degree: "Associate's Degree",
                    institution: 'IES (Institute of Higher Studies)',
                    field: 'Software Development',
                    desc: 'Higher technical training focused on algorithms, OOP, databases, and architecture. Integrated B2 technical English level.',
                    status: 'In progress',
                },
                secundario: {
                    degree: 'Primary & Secondary Level',
                    institution: 'Local school',
                    field: 'Mandatory Education',
                    desc: 'Primary and secondary education with a solid foundation in science and technology.',
                    status: 'Completed',
                }
            }
        },
        skills: {
            title: 'Technical Arsenal',
            subtitle: 'Skills',
            categories: {
                backend: 'Core Backend & API',
                frontend: 'Client & UI Architecture',
                database: 'Data & Persistence',
                tools: 'DevOps & Tooling',
            },
        },
        architecture: {
            title: 'Systems Thinking',
            subtitle: 'Architecture & Scalability',
            description: 'My approach to software development goes beyond writing code. I design resilient systems that solve business bottlenecks, prioritizing security, horizontal scalability, and developer experience.',
            pillars: {
                resilience: {
                    title: 'Resilience & High Availability',
                    desc: 'Designing stateless services and fault-tolerant architectures to ensure smooth user experiences.'
                },
                security: {
                    title: 'Security by Design',
                    desc: 'Implementing strict access controls (RBAC), data encryption, and adopting zero-trust policies inside the network.'
                },
                scalability: {
                    title: 'Horizontal Scalability',
                    desc: 'Building loosely coupled microservices and event-driven architectures that can scale independently.'
                }
            },
            diagram: {
                client: 'Client',
                gateway: 'API Gateway / Auth Layer',
                services: 'Core Microservices',
                database: 'Persistent Storage'
            }
        },
        projects: {
            title: 'Projects',
            subtitle: 'My Recent Work',
            description: 'A selection of projects that showcase my skills across the stack.',
            all: 'All',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Code',
            viewLive: 'Live Demo',
            details: 'View Details',
            featured: 'Featured',
            caseStudy: {
                context: 'Business Context',
                challenge: 'Technical Challenge',
                solution: 'Architectural Solution',
                impact: 'Impact & Results',
                stack: 'Tech Stack',
            },
            items: {
                admin: {
                    title: 'Enterprise Management Ecosystem',
                    desc: 'Critical administration platform with RBAC and auditing for operational workflow optimization.',
                    context: 'Decentralized manual processes causing operational inefficiency and security gaps in data traceability.',
                    challenge: 'Unify management through a microservices architecture with granular access control and high fault tolerance.',
                    solution: 'Orchestration of a RESTful API with Spring Boot, Spring Security (JWT), and PostgreSQL. Dynamic React dashboard and automated Docker deployment.',
                    impact: '40% reduction in manual management time and 100% traceability of critical operations through immutable audit logs.',
                },
                reg: {
                    title: 'Digital Registration & Audit Core',
                    desc: 'Architecture oriented towards extreme security and immutable traceability of operational data.',
                    context: 'Vulnerability in the integrity of physical records and the need for a single, secure source of truth.',
                    challenge: 'Guarantee data immutability and design an advanced relational model for high-speed queries.',
                    solution: 'High-performance backend with Node.js, TypeScript, and Prisma ORM on PostgreSQL, implementing multi-layer integrity validations.',
                    impact: 'Total digitization of processes, elimination of data manipulation risk, and query response times under 50ms.',
                },
                port: {
                    title: 'Frontend Architecture 2025',
                    desc: 'High-performance technical showcase optimized for B2B conversion and search engine visibility.',
                    context: 'Need for a platform that demonstrates technical seniority and absolute attention to UX/UI detail.',
                    challenge: 'Maintain 100/100 in Core Web Vitals while running complex animations and dynamic i18n systems.',
                    solution: 'Stack based on Next.js 14 (App Router), Tailwind CSS, and Framer Motion with optimized static generation (SSG).',
                    impact: 'Extreme performance with instant load times and an increase in professional contact conversion rates.',
                }
            }
        },
        experience: {
            title: 'Experience',
            subtitle: 'Professional Path',
            description: 'My professional career and the impact I\'ve had along the way.',
            present: 'Present',
            items: {
                freelance: {
                    role: 'Full Stack Technical Consultant',
                    company: 'Independent Consulting Services',
                    location: 'Remote (International)',
                    desc: 'Technical leadership throughout the full software lifecycle: from architecture conception to deploying scalable solutions for various regional clients.',
                    highlights: [
                        'Architecture and development of critical REST APIs with Spring Boot (Java) and Node.js for enterprise systems.',
                        'PostgreSQL database optimization, improving heavy query performance by 30%.',
                        'Implementation of multi-layer security systems (JWT, RBAC) and audit logs for regulatory compliance.',
                        'Standardization of development processes through advanced technical documentation and architecture diagrams.',
                        'Orchestration of local and staging deployments using containerized environments with Docker.',
                    ]
                }
            }
        },
        contact: {
            title: 'Contact',
            subtitle: "Let's Work Together",
            description: "I'm always interested in new opportunities and exciting projects.",
            details: "Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. Let's build something great together.",
            infoEmail: 'Email',
            infoPhone: 'Phone Number',
            infoLocation: 'Location',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully! I will get back to you shortly.',
            error: 'An error occurred while sending the message. Please try again.',
        },
        footer: {
            navigation: 'Navigation',
            connect: 'Connect',
            madeWith: 'Made with',
            backToTop: 'Back to top',
        },
    },
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre mim',
            skills: 'Habilidades',
            projects: 'Projetos',
            experience: 'Experiência',
            contact: 'Contato',
            downloadCV: 'Baixar CV',
            downloadConfirm: 'Tem certeza que deseja baixar meu CV?',
            downloadCancel: 'Cancelar',
            downloadAccept: 'Sim, baixar',
        },
        hero: {
            greeting: 'DESENVOLVEDOR FULLSTACK',
            subtitle: 'Projetando arquiteturas backend resilientes e sistemas escaláveis com foco em resolver gargalos e maximizar o impacto nos negócios.',
            viewProjects: 'Explorar Casos de Estudo',
            viewExperience: 'ou ver experiência profissional ↓',
            contact: 'Contatar',
            scroll: 'EXPLORAR',
            roles: {
                java: 'Arquitetura Backend',
                fullstack: 'Desenvolvimento de Produto',
                backend: 'Sistemas Escaláveis',
                solver: 'Resolução de Problemas',
            }
        },
        stats: {
            exp: 'Ano de Experiência',
            projects: 'Projetos Realizados',
            age: 'Anos de Idade',
            career: 'Progreso de Carreira',
        },
        about: {
            title: 'Filosofia & Sobre mim',
            subtitle: 'Desenvolvimento orientado a resultados',
            description: 'Um desenvolvedor fullstack apaixonado pela escalabilidad técnica e impacto nos negócios.',
            highlights: {
                location: 'Base de Operações',
                education: 'Formação Base',
                availability: 'Disponibilidade',
                languages: 'Idiomas',
                locValue: 'Santa Fe, Argentina (Remoto global)',
                eduValue: 'IES — Tecnólogo em Desenvolvimento de Software',
                availValue: 'Imediata',
                langValue: 'Espanhol (Nativo) | Inglês B2',
            },
            bio: [
                'Sou um desenvolvedor fullstack focado em ecossistemas Java/Spring Boot e arquiteturas modernas. Gosto de desvendar a complexidade técnica para entregar produtos estáveis.',
                'Minha filosofia é que um bom código não apenas roda rápido, mas pode ser lido, mantido e escalado pela equipe no futuro. Priorizo a confiabilidade do sistema (0% downtime) e arquiteturas resilientes.',
                'Busco me juntar a equipes exigentes onde possa agregar valor desde o design do sistema, otimizando processos e construindo APIs RESTful que suportem alta concorrência e segurança.',
            ],
            eduSubtitle: 'Formação Académica',
            eduProgress: 'Progresso',
            items: {
                ies: {
                    degree: "Tecnólogo",
                    institution: 'IES (Instituto de Estudios Superiores)',
                    field: 'Desenvolvimento de Software',
                    desc: 'Formação técnica superior enfocada em algoritmos, POO, bancos de datos e arquitetura. Disponibilidade de nível de inglês técnico B2 integrado.',
                    status: 'Em curso',
                },
                secundario: {
                    degree: 'Nivel Primário e Secundário',
                    institution: 'Escola local',
                    field: 'Educação Obrigatória',
                    desc: 'Educação primária e secundária com base sólida em ciências e tecnologia.',
                    status: 'Finalizado',
                }
            }
        },
        skills: {
            title: 'Arsenal Técnico',
            subtitle: 'Matriz de Domínios',
            categories: {
                backend: 'Core Backend & API',
                frontend: 'Client & UI Architecture',
                database: 'Data & Persistence',
                tools: 'DevOps & Tooling',
            },
        },
        architecture: {
            title: 'Pensamento Sistêmico',
            subtitle: 'Arquitetura e Escalabilidade',
            description: 'Minha abordagem ao desenvolvimento de software vai além de escrever código. Projeto sistemas resilientes que resolvem gargalos de negócios, priorizando a segurança, escalabilidade horizontal e a experiência do desenvolvedor.',
            pillars: {
                resilience: {
                    title: 'Resiliência e Alta Disponibilidade',
                    desc: 'Projetando serviços stateless e arquiteturas tolerantes a falhas para garantir zero tempo de inatividade.'
                },
                security: {
                    title: 'Segurança desde o Design',
                    desc: 'Implementando controles rigorosos de acesso (RBAC), criptografia de dados e políticas zero-trust na rede.'
                },
                scalability: {
                    title: 'Escalabilidade Horizontal',
                    desc: 'Construindo microsserviços fracamente acoplados e arquiteturas orientadas a eventos que escalam independentemente.'
                }
            },
            diagram: {
                client: 'Cliente',
                gateway: 'API Gateway / Auth Layer',
                services: 'Serviços Principais',
                database: 'Armazenamento Persistente'
            }
        },
        projects: {
            title: 'Projetos',
            subtitle: 'Meus Trabalhos Recentes',
            description: 'Uma seleção de projetos que mostram minhas habilidades em todo o stack.',
            all: 'Todas',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Código',
            viewLive: 'Ao Vivo',
            details: 'Ver Detalhes',
            featured: 'Destaque',
            caseStudy: {
                context: 'Contexto de Negócios',
                challenge: 'Desafio Técnico',
                solution: 'Solução Arquitetural',
                impact: 'Impacto & Resultados',
                stack: 'Stack Tecnológico',
            },
            items: {
                admin: {
                    title: 'Plataforma de Gestão Administrativa',
                    desc: 'Sistema de administração integral com RBAC e auditoria rigorosa.',
                    context: 'Operações manuais descentralizadas causando gargalos e falta de rastreabilidade.',
                    challenge: 'Unificar a gestão com controle de acesso robusto (RBAC) e tolerância a falhas.',
                    solution: 'Desenvolvimento de uma API RESTful com Spring Boot e Spring Security (JWT). Frontend em React com painéis dinâmicos, totalmente via Docker.',
                    impact: 'Redução significativa no tempo de gestão manual e auditoria de ações 100% em tempo real.',
                },
                reg: {
                    title: 'Sistema de Registro Digital (RDAM)',
                    desc: 'Arquitetura orientada à rastreabilidade extrema e segurança de dados operacionais.',
                    context: 'Necessidade de modernizar registros físicos vulneráveis a perdas ou manipulações.',
                    challenge: 'Garantir a imutabilidade dos registros e projetar um modelo de dados altamente normalizado.',
                    solution: 'Implementação de backend com Node.js, TypeScript e Prisma ORM sobre PostgreSQL, garantindo total integridade referencial.',
                    impact: 'Eliminação de papel, prevenção de fraude interna e consultas de auditoria em milissegundos.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'Arquitetura frontend orientada à performance extrema e conversão B2B.',
                    context: 'Necessidade de uma vitrine digital refletindo senioridade técnica, não apenas habilidades de UI.',
                    challenge: 'Alcançar 100/100/100/100 no Lighthouse mantendo animações fluidas e design brutalista.',
                    solution: 'Stack moderno com Next.js 14, Tailwind CSS e Framer Motion, gerado estaticamente (SSG).',
                    impact: 'Experiência de usuário instantânea e posicionamento como perfil de Desenvolvimento de Produto.',
                }
            }
        },
        experience: {
            title: 'Experiência',
            subtitle: 'Trajetória Profissional',
            description: 'Minha trajetória profissional e o impacto que tive ao longo do caminho.',
            present: 'Atualidade',
            items: {
                freelance: {
                    role: 'Desenvolvedor Full Stack',
                    company: 'Projetos Independentes',
                    location: 'Remoto (Argentina)',
                    desc: 'Desenvolvimento end-to-end de aplicações web: design de arquitetura, implementação backend, modelagem de bancos de datos e integração com frontend.',
                    highlights: [
                        'Desenvolvimento de APIs REST com Spring Boot e Node.js (autenticação e papéis)',
                        'Modelado e otimização de bancos de datos relacionais com PostgreSQL',
                        'Implementação de sistemas de segurança e registro de auditoria',
                        'Documentação técnica de endpoints e decisões de design arquitectónico',
                        'Uso de ambientes conteinerizados com Docker para implantações locais',
                    ]
                }
            }
        },
        education: {
            title: 'Educação',
            subtitle: 'Formação Acadêmica',
            progress: 'Progresso',
            items: {
                ies: {
                    degree: "Tecnólogo",
                    institution: 'IES (Instituto de Estudios Superiores)',
                    field: 'Desenvolvimento de Software',
                    desc: 'Formação técnica superior focada em algoritmos, POO, bancos de datos e arquitetura. Disponibilidade de nível de inglês técnico B2 integrado.',
                    status: 'Em curso',
                },
                secundario: {
                    degree: 'Nível Primário e Secundário',
                    institution: 'Escola local',
                    field: 'Educação Obrigatória',
                    desc: 'Educação primária e secundária com base sólida em ciências e tecnologia.',
                    status: 'Finalizado',
                }
            }
        },
        contact: {
            title: 'Contato',
            subtitle: 'Vamos trabalhar juntos',
            description: 'Sempre estou interessado em novas oportunidades e projetos emocionantes.',
            details: 'Se você tem um projeto em mente, uma pergunta ou apenas quer dizer olá, minha caixa de entrada está sempre aberta. Vamos construir algo incrível juntos.',
            infoEmail: 'E-mail',
            infoPhone: 'Número de Telefone',
            infoLocation: 'Localização',
            name: 'Nome',
            email: 'E-mail',
            subject: 'Assunto',
            message: 'Mensagem',
            send: 'Enviar Mensagem',
            sending: 'Enviando...',
            success: 'Mensagem enviada com sucesso! Responderei em breve.',
            error: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
        },
        footer: {
            navigation: 'Navegação',
            connect: 'Conectar',
            madeWith: 'Feito com',
            backToTop: 'Voltar ao topo',
        },
    },
    it: {
        nav: {
            home: 'Inizio',
            about: 'Su di me',
            skills: 'Competenze',
            projects: 'Progetti',
            experience: 'Esperienza',
            contact: 'Contatto',
            downloadCV: 'Scarica CV',
            downloadConfirm: 'Sei sicuro di voler scaricare il mio CV?',
            downloadCancel: 'Annulla',
            downloadAccept: 'Sì, scarica',
        },
        hero: {
            greeting: 'SVILUPPATORE FULLSTACK',
            subtitle: 'Progettazione di architetture backend resilienti e sistemi scalabili focalizzati sulla risoluzione dei colli di bottiglia e sulla massimizzazione dell\'impatto aziendale.',
            viewProjects: 'Esplora Casi Studio',
            viewExperience: 'o vedi l\'esperienza professionale ↓',
            contact: 'Contattami',
            scroll: 'ESPLORARE',
            roles: {
                java: 'Architettura Backend',
                fullstack: 'Sviluppo di Prodotto',
                backend: 'Sistemi Scalabili',
                solver: 'Risoluzione Problemi',
            }
        },
        stats: {
            exp: 'Anno di Esperienza',
            projects: 'Progetti Realizzati',
            age: 'Anni di Età',
            career: 'Progresso di Carriera',
        },
        about: {
            title: 'Filosofia e Su di me',
            subtitle: 'Sviluppo orientato ai risultati',
            description: 'Uno sviluppatore fullstack appassionato di scalabilità tecnica e impatto sul business.',
            highlights: {
                location: 'Base Operativa',
                education: 'Formazione Base',
                availability: 'Disponibilità',
                languages: 'Lingue',
                locValue: 'Santa Fe, Argentina (Remoto Globale)',
                eduValue: 'IES — Tecnico in Sviluppo Software',
                availValue: 'Immediata',
                langValue: 'Spagnolo (Madrelingua) | Inglese B2',
            },
            bio: [
                'Sono uno sviluppatore fullstack focalizzato sugli ecosistemi Java/Spring Boot e sulle architetture moderne. Mi piace svelar la complessità tecnica per fornire prodotti stabili.',
                'La mia filosofia è che un buon codice non solo viene eseguito velocemente, ma può essere letto, mantenuto e scalato dal team in futuro. Do priorità all\'affidabilidad del sistema (0% downtime) e alle architetture resilienti.',
                'Cerco di unirmi a team esigenti dove posso aggiungere valore dalla progettazione del sistema, ottimizzando i processi e costruendo API RESTful che supportino elevata concorrenza e rigorosa sicurezza.',
            ],
            eduSubtitle: 'Percorso Accademico',
            eduProgress: 'Progresso',
            items: {
                ies: {
                    degree: "Laurea Tecnica",
                    institution: 'IES (Istituto di Studi Superiori)',
                    field: 'Sviluppo Software',
                    desc: 'Formazione tecnica superiore focalizzata su algoritmi, OOP, database e architettura. Livello di inglese tecnico B2 integrato.',
                    status: 'In corso',
                },
                secundario: {
                    degree: 'Livello Primario e Secondario',
                    institution: 'Scuola locale',
                    field: 'Istruzione Obbligatoria',
                    desc: 'Istruzione primaria e secondaria con una solida base in scienza e tecnologia.',
                    status: 'Completato',
                }
            }
        },
        skills: {
            title: 'Arsenale Tecnico',
            subtitle: 'Matrice dei Domini',
            categories: {
                backend: 'Core Backend & API',
                frontend: 'Client & UI Architecture',
                database: 'Data & Persistence',
                tools: 'DevOps & Tooling',
            },
        },
        architecture: {
            title: 'Pensiero Sistemico',
            subtitle: 'Architettura e Scalabilità',
            description: 'Il mio approccio allo sviluppo del software va oltre la scrittura di codice. Progetto sistemi resilienti che risolvono i colli di bottiglia aziendali, dando priorità alla sicurezza, alla scalabilità orizzontale e all\'esperienza degli sviluppatori.',
            pillars: {
                resilience: {
                    title: 'Resilienza e Alta Affidabilità',
                    desc: 'Progettazione di servizi stateless e architetture tolleranti ai guasti per garantire zero tempi di inattività e fluidità.'
                },
                security: {
                    title: 'Sicurezza dal Design',
                    desc: 'Implementazione di rigorosi controlli di accesso (RBAC), crittografia dei dati e adozione di criteri zero-trust nella rete.'
                },
                scalability: {
                    title: 'Scalabilità Orizzontale',
                    desc: 'Costruzione di microservizi debolmente accoppiati e architetture basate su eventi che possono scalare in modo indipendente.'
                }
            },
            diagram: {
                client: 'Cliente',
                gateway: 'API Gateway / Auth Layer',
                services: 'Servizi Principali',
                database: 'Archiviazione Persistente'
            }
        },
        projects: {
            title: 'Progetti',
            subtitle: 'I miei lavori recenti',
            description: 'Una selezione di progetti che mostrano le mie competenze in tutto lo stack.',
            all: 'Tutto',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Codice',
            viewLive: 'Live Demo',
            details: 'Vedi Dettagli',
            featured: 'In evidenza',
            caseStudy: {
                context: 'Contesto di Business',
                challenge: 'Sfida Tecnica',
                solution: 'Soluzione Architettonica',
                impact: 'Impatto e Risultati',
                stack: 'Stack Tecnologico',
            },
            items: {
                admin: {
                    title: 'Piattaforma di Gestione Amministrativa',
                    desc: 'Sistema di amministrazione integrale con RBAC e controlli rigorosi.',
                    context: 'Operazioni manuali decentralizzate che causavano colli di bottiglia e mancanza di tracciabilità.',
                    challenge: 'Unificare la gestione con un solido controllo degli accessi (RBAC) e tolleranza ai guasti.',
                    solution: 'Sviluppo di API RESTful con Spring Boot e Spring Security (JWT). Frontend in React con dashboard dinamici, totalmente containerizzati via Docker.',
                    impact: 'Riduzione significativa dei tempi di gestione manuale e controllo in tempo reale del 100% delle azioni.',
                },
                reg: {
                    title: 'Sistema di Registrazione Digitale (RDAM)',
                    desc: 'Architettura orientata alla massima tracciabilità e sicurezza dei dati operativi.',
                    context: 'Necessità di modernizzare i record fisici vulnerabili a perdite o manipolazioni.',
                    challenge: 'Garantire l\'immutabilità dei record e progettare un modello di dati altamente normalizzato.',
                    solution: 'Implementazione backend con Node.js, TypeScript e Prisma ORM su PostgreSQL, garantendo la totale integrità referenziale.',
                    impact: 'Eliminazione della carta, prevenzione delle frodi interne e query di controllo in pochi millisecondi.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'Architettura frontend orientata a prestazioni estreme e conversioni B2B.',
                    context: 'Necessità di una vetrina digitale che riflettesse l\'anzianità tecnica, non solo capacità di UI layout.',
                    challenge: 'Raggiungere 100/100/100/100 in Lighthouse mantenendo animazioni fluide e design brutalista.',
                    solution: 'Stack moderno con Next.js 14, Tailwind CSS e Framer Motion, esportato staticamente (SSG).',
                    impact: 'Esperienza utente istantanea e posizionamento come profilo di Sviluppo di Prodotto.',
                }
            }
        },
        experience: {
            title: 'Esperienza',
            subtitle: 'Percorso Professionale',
            description: 'La mia carriera professionale e l\'impatto che ho avuto lungo il percorso.',
            present: 'Attualità',
            items: {
                freelance: {
                    role: 'Sviluppatore Full Stack',
                    company: 'Progetti Indipendenti',
                    location: 'Remoto (Argentina)',
                    desc: 'Sviluppo end-to-end di applicazioni web: progettazione dell\'architettura, implementazione backend, modellazione di database e integrazione con il frontend.',
                    highlights: [
                        'Sviluppo di API REST con Spring Boot e Node.js (auth e ruoli)',
                        'Modellazione e ottimizzazione di database relazionali con PostgreSQL',
                        'Implementazione di sistemi di sicurezza e log di audit',
                        'Documentazione tecnica degli endpoint e decisioni di progettazione architettonica',
                        'Utilizzo di ambienti containerizzati con Docker per implementazioni locali',
                    ]
                }
            }
        },
        education: {
            title: 'Istruzione',
            subtitle: 'Percorso Accademico',
            progress: 'Progresso',
            items: {
                ies: {
                    degree: "Laurea Tecnica",
                    institution: 'IES (Istituto di Studi Superiori)',
                    field: 'Sviluppo Software',
                    desc: 'Formazione tecnica superiore focalizzata su algoritmi, OOP, database e architettura. Livello di inglese tecnico B2 integrato.',
                    status: 'In corso',
                },
                secundario: {
                    degree: 'Livello Primario e Secondario',
                    institution: 'Scuola locale',
                    field: 'Istruzione Obbligatoria',
                    desc: 'Istruzione primaria e secondaria con una solida base in scienza e tecnologia.',
                    status: 'Completato',
                }
            }
        },
        contact: {
            title: 'Contatto',
            subtitle: 'Lavoriamo Insieme',
            description: 'Sono sempre interessato a nuove opportunità e progetti entusiasmanti.',
            details: 'Sia che tu abbia un progetto in mente, una domanda o semplicemente voglia salutarmi, la mia casella di posta è sempre aperta. Costruiamo qualcosa di grande insieme.',
            infoEmail: 'Email',
            infoPhone: 'Numero di Telefono',
            infoLocation: 'Posizione',
            name: 'Nome',
            email: 'Email',
            oggeto: 'Oggetto',
            message: 'Messaggio',
            send: 'Invia Messaggio',
            sending: 'Invio in corso...',
            success: 'Messaggio inviato con successo! Ti risponderò a breve.',
            error: 'Si è verificato un errore durante l\'invio del messaggio. Riprova.',
        },
        footer: {
            navigation: 'Navigazione',
            connect: 'Connettiti',
            madeWith: 'Realizzato con',
            backToTop: 'Torna su',
        },
    },
};

export type TranslationKey = string;
