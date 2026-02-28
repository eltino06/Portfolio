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
            greeting: 'SOFTWARE ENGINEER',
            subtitle: 'Diseñando arquitecturas backend resilientes y sistemas escalables orientados a resolver cuellos de botella y maximizar el impacto de negocio.',
            viewProjects: 'Explorar Casos de Estudio',
            viewExperience: 'o ver experiencia profesional ↓',
            contact: 'Contactar',
            scroll: 'EXPLORAR',
            roles: {
                java: 'Arquitectura Backend',
                fullstack: 'Ingeniería de Producto',
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
            subtitle: 'Ingeniería orientada a resultados',
            description: 'Un ingeniero de software apasionado por la escalabilidad técnica y el impacto en el negocio.',
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
                'Soy un Software Engineer enfocado en ecosistemas Java/Spring Boot y arquitecturas modernas. Disfruto desentramando complejidad técnica para entregar productos estables.',
                'Mi filosofía es que el buen código no solo corre rápido, sino que puede ser leído, mantenido y escalado por el equipo el día de mañana. Priorizo la fiabilidad del sistema (0% downtime) y arquitecturas resilientes.',
                'Busco unirme a equipos exigentes donde pueda aportar valor desde el diseño del sistema, optimizando procesos y construyendo API RESTful que soporten alta concurrencia y seguridad.',
            ],
        },
        skills: {
            title: 'Arsenal Técnico',
            subtitle: 'Skill Matrix',
            categories: {
                backend: 'Core Backend & API',
                frontend: 'Client & UI Architecture',
                database: 'Data & Persistence',
                tools: 'DevOps & Tooling',
            },
        },
        architecture: {
            title: 'Pensamiento Sistémico',
            subtitle: 'Arquitectura & Escalabilidad',
            description: 'Mi enfoque en ingeniería va más allá de escribir código. Diseño sistemas resilientes que resuelven cuellos de botella del negocio, priorizando la seguridad, la escalabilidad horizontal y la experiencia del desarrollador.',
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
                    title: 'Plataforma de Gestión Administrativa',
                    desc: 'Sistema administrativo integral con RBAC y auditoría para optimizar operaciones.',
                    context: 'Operaciones manuales descentralizadas que generaban cuellos de botella y falta de trazabilidad.',
                    challenge: 'Unificar la gestión con un control de accesos robusto (RBAC) y tolerancia a fallos.',
                    solution: 'Desarrollo de API RESTful con Spring Boot y Spring Security (JWT). Frontend en React con dashboards dinámicos, todo orquestado bajo Docker.',
                    impact: 'Reducción significativa del tiempo de gestión manual y auditoría en tiempo real del 100% de las acciones.',
                },
                reg: {
                    title: 'Sistema de Registro Digital (RDAM)',
                    desc: 'Arquitectura orientada a la trazabilidad extrema y seguridad de datos operacionales.',
                    context: 'Necesidad de modernizar registros físicos vulnerables a pérdida o manipulación.',
                    challenge: 'Garantizar la inmutabilidad de los registros y diseñar un modelo de datos altamente normalizado.',
                    solution: 'Implementación backend con Node.js, TypeScript y Prisma ORM sobre PostgreSQL, asegurando integridad referencial total.',
                    impact: 'Eliminación del papel, prevención de fraude interno y consultas de auditoría en milisegundos.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'Arquitectura frontend orientada a performance extrema y conversión B2B.',
                    context: 'Necesidad de un escaparate digital que refleje seniority técnico, no solo destrezas de UI.',
                    challenge: 'Alcanzar el 100/100/100/100 en Lighthouse manteniendo animaciones fluidas y un diseño brutalista.',
                    solution: 'Stack moderno con Next.js 14 (App Router), Tailwind CSS y Framer Motion, exportado estáticamente (SSG).',
                    impact: 'Experiencia de usuario instantánea y posicionamiento como perfil de Ingeniería de Producto.',
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
                    role: 'Desarrollador Full Stack',
                    company: 'Proyectos Independientes',
                    location: 'Remoto (Argentina)',
                    desc: 'Desarrollo end-to-end de aplicaciones web: diseño de arquitectura, implementación backend, modelado de bases de datos e integración con frontend.',
                    highlights: [
                        'Desarrollo de APIs REST con Spring Boot y Node.js (autenticación y roles)',
                        'Modelado y optimización de bases de datos relacionales con PostgreSQL',
                        'Implementación de sistemas de seguridad y registro de auditoría',
                        'Documentación técnica de endpoints y decisiones de diseño arquitectónico',
                        'Uso de entornos contenerizados con Docker para despliegues locales',
                    ]
                }
            }
        },
        education: {
            title: 'Educación',
            subtitle: 'Formación Académica',
            progress: 'Progreso',
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
            greeting: "SOFTWARE ENGINEER",
            subtitle: 'Designing resilient backend architectures and scalable systems focused on solving bottlenecks and maximizing business impact.',
            viewProjects: 'Explore Case Studies',
            viewExperience: 'or see professional experience ↓',
            contact: 'Contact Me',
            scroll: 'EXPLORE',
            roles: {
                java: 'Backend Architecture',
                fullstack: 'Product Engineering',
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
            subtitle: 'Results-driven Engineering',
            description: 'A software engineer passionate about technical scalability and business impact.',
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
                'I am a Software Engineer focused on Java/Spring Boot ecosystems and modern architectures. I enjoy unraveling technical complexity to deliver stable products.',
                'My philosophy is that good code not only runs fast but can be read, maintained, and scaled by the team tomorrow. I prioritize system reliability (0% downtime) and resilient architectures.',
                'I seek to join demanding teams where I can add value from system design to building RESTful APIs that support high concurrency and strict security workflows.',
            ],
        },
        skills: {
            title: 'Technical Arsenal',
            subtitle: 'Domain Matrix',
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
            description: 'My approach to software engineering goes beyond writing code. I design resilient systems that solve business bottlenecks, prioritizing security, horizontal scalability, and developer experience.',
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
                    title: 'Administrative Management Platform',
                    desc: 'Integral administration system with RBAC and strict auditing.',
                    context: 'Decentralized manual operations causing bottlenecks and a lack of traceability.',
                    challenge: 'Unify management with robust access control (RBAC) and fault tolerance.',
                    solution: 'Developed a RESTful API with Spring Boot and Spring Security (JWT). React frontend with dynamic dashboards, fully containerized via Docker.',
                    impact: 'Significant reduction in manual management time and 100% real-time action auditing.',
                },
                reg: {
                    title: 'Digital Registration System (RDAM)',
                    desc: 'Architecture oriented towards extreme traceability and operational data security.',
                    context: 'Need to modernize physical records vulnerable to loss or manipulation.',
                    challenge: 'Guarantee the immutability of records and design a highly normalized data model.',
                    solution: 'Backend implementation with Node.js, TypeScript, and Prisma ORM over PostgreSQL to ensure total referential integrity.',
                    impact: 'Elimination of paper, prevention of internal fraud, and audit queries in milliseconds.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'Frontend architecture oriented towards extreme performance and B2B conversion.',
                    context: 'Need for a digital showcase reflecting technical seniority, not just UI layout skills.',
                    challenge: 'Achieve 100/100/100/100 in Lighthouse while maintaining fluid animations and brutalist design.',
                    solution: 'Modern stack with Next.js 14, Tailwind CSS, and Framer Motion, featuring static generation (SSG).',
                    impact: 'Instant user experience and strong positioning as a Product Engineering profile.',
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
                    role: 'Full Stack Developer',
                    company: 'Independent Projects',
                    location: 'Remote (Argentina)',
                    desc: 'End-to-end development of web applications: architecture design, backend implementation, database modeling, and frontend integration.',
                    highlights: [
                        'REST API development with Spring Boot and Node.js (auth & roles)',
                        'Relational database modeling and optimization with PostgreSQL',
                        'Implementation of security systems and audit logs',
                        'Technical documentation of endpoints and architectural design decisions',
                        'Use of containerized environments with Docker for local deployments',
                    ]
                }
            }
        },
        education: {
            title: 'Education',
            subtitle: 'Academic Background',
            progress: 'Progress',
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
            greeting: 'SOFTWARE ENGINEER',
            subtitle: 'Projetando arquiteturas backend resilientes e sistemas escaláveis com foco em resolver gargalos e maximizar o impacto nos negócios.',
            viewProjects: 'Explorar Casos de Estudo',
            viewExperience: 'ou ver experiência profissional ↓',
            contact: 'Contatar',
            scroll: 'EXPLORAR',
            roles: {
                java: 'Arquitetura Backend',
                fullstack: 'Engenharia de Produto',
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
            subtitle: 'Engenharia orientada a resultados',
            description: 'Um engenheiro de software apaixonado pela escalabilidade técnica e impacto nos negócios.',
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
                'Sou um Software Engineer focado em ecossistemas Java/Spring Boot e arquiteturas modernas. Gosto de desvendar a complexidade técnica para entregar produtos estáveis.',
                'Minha filosofia é que um bom código não apenas roda rápido, mas pode ser lido, mantido e escalado pela equipe no futuro. Priorizo a confiabilidade do sistema (0% downtime) e arquiteturas resilientes.',
                'Busco me juntar a equipes exigentes onde possa agregar valor desde o design do sistema, otimizando processos e construindo APIs RESTful que suportem alta concorrência e segurança.',
            ],
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
            description: 'Minha abordagem à engenharia de software vai além de escrever código. Projeto sistemas resilientes que resolvem gargalos de negócios, priorizando a segurança, escalabilidade horizontal e a experiência do desenvolvedor.',
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
                    impact: 'Experiência de usuário instantânea e posicionamento como perfil de Engenharia de Produto.',
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
            greeting: 'SOFTWARE ENGINEER',
            subtitle: 'Progettazione di architetture backend resilienti e sistemi scalabili focalizzati sulla risoluzione dei colli di bottiglia e sulla massimizzazione dell\'impatto aziendale.',
            viewProjects: 'Esplora Casi Studio',
            viewExperience: 'o vedi l\'esperienza professionale ↓',
            contact: 'Contattami',
            scroll: 'ESPLORARE',
            roles: {
                java: 'Architettura Backend',
                fullstack: 'Ingegneria di Prodotto',
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
            subtitle: 'Ingegneria orientata ai risultati',
            description: 'Un ingegnere del software appassionato di scalabilità tecnica e impatto sul business.',
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
                'Sono un Software Engineer focalizzato sugli ecosistemi Java/Spring Boot e sulle architetture moderne. Mi piace svelare la complessità tecnica per fornire prodotti stabili.',
                'La mia filosofia è che un buon codice non solo viene eseguito velocemente, ma può essere letto, mantenuto e scalato dal team in futuro. Do priorità all\'affidabilità del sistema (0% downtime) e alle architetture resilienti.',
                'Cerco di unirmi a team esigenti dove posso aggiungere valore dalla progettazione del sistema, ottimizzando i processi e costruendo API RESTful che supportino elevata concorrenza e rigorosa sicurezza.',
            ],
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
            description: 'Il mio approccio all\'ingegneria del software va oltre la scrittura di codice. Progetto sistemi resilienti che risolvono i colli di bottiglia aziendali, dando priorità alla sicurezza, alla scalabilità orizzontale e all\'esperienza degli sviluppatori.',
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
                    impact: 'Esperienza utente istantanea e posizionamento come profilo di Ingegneria di Prodotto.',
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
