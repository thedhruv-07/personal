import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useRef } from 'react';

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    featured: boolean;
    github: string;
    live?: string;
};

const projects: Project[] = [
    {
        title: 'AI Study Planner (MERN + LLM)',
        description: 'Full-stack AI-powered study planner that generates dynamic learning roadmaps. Built Express APIs for AI requests and persistent user data in MongoDB, and integrated Gemini for personalized schedules with structured prompt engineering.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', // Dashboard abstract image
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini API'],
        featured: true,
        github: 'https://github.com/thedhruv-07',
        live: 'https://brainplan-ai.vercel.app/',
    },
    {
        title: 'AI Manager Dashboard',
        description: 'Centralized AI workflow dashboard integrating 5+ AI tools into one unified interface. Built modular React architecture with Context API, managed async AI calls with validation/error handling, and optimized UX for fast load times.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        tags: ['React.js', 'AI APIs', 'Context API', 'Tailwind CSS'],
        featured: false,
        github: 'https://github.com/thedhruv-07/ai-task-manager',
        live: 'https://ai-task-manager-liart-chi.vercel.app/',
    },
    {
        title: 'Gemini AI Clone',
        description: 'Real-time AI chat interface integrating Gemini LLM. Implemented prompt-based interaction with structured response rendering, async/await + Fetch API communication, and a responsive production-ready UI.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200', // AI abstract
        tags: ['JavaScript', 'Gemini API', 'HTML', 'CSS'],
        featured: false,
        github: 'https://github.com/thedhruv-07/clone',
        live: undefined,
    },
    {
        title: 'Employee Management System',
        description: 'Role-based dashboard with CRUD operations. Built reusable components, efficient state architecture, local storage persistence, and responsive UI.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'CRUD'],
        featured: false,
        github: 'https://github.com/thedhruv-07/EMS',
        live: 'https://ems-me.vercel.app/',
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['0 1', '1.2 1'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className={`group relative flex flex-col ${project.featured ? 'lg:flex-row' : ''
                } gap-8 p-6 lg:p-8 rounded-[2rem] glass border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-500/30 transition-colors duration-500`}
        >
            {project.featured && (
                <div className="absolute top-8 right-8 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/20 backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Featured
                </div>
            )}

            {/* Image Container with Hover Effects */}
            <div className={`relative overflow-hidden rounded-2xl ${project.featured ? 'lg:w-1/2 lg:aspect-video aspect-[16/10]' : 'aspect-video w-full'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Glowing hover overlay */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blend-overlay" />
            </div>

            {/* Content */}
            <div className={`flex flex-col justify-center flex-1 ${project.featured ? 'lg:py-4' : ''}`}>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                    {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    {project.live ? (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:scale-105 transition-transform"
                        >
                            Live Demo
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    ) : null}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-semibold hover:scale-105 transition-transform hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        GitHub
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container px-6 mx-auto w-full max-w-6xl">
                <div className="mb-16 md:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Featured Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        A curated selection of my finest projects, showcasing architectural thinking and design execution.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
