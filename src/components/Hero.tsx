import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }} />
            <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }} />

            <div className="container px-6 mx-auto w-full max-w-6xl relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    className="flex-1 text-center lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 border border-zinc-200 dark:border-zinc-800">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Available for Internships</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
                        Hi, I'm <br className="hidden md:block" />
                        <span className="text-gradient">Dhruv Kumar</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-700 dark:text-zinc-300">
                        Frontend Developer
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
                        Frontend-focused Computer Engineering student building scalable React applications, dashboards, and AI-powered interfaces.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-100}
                            duration={800}
                            className="w-full sm:w-auto cursor-pointer group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/20 dark:shadow-zinc-50/20"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:scale-105 active:scale-95"
                        >
                            Download Resume
                            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-zinc-500 dark:text-zinc-400">
                        <a href="https://github.com/dhruv" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors hover:-translate-y-1 duration-300">
                            <span className="sr-only">GitHub</span>
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/dhruv" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors hover:-translate-y-1 duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:contact@dhruv.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors hover:-translate-y-1 duration-300">
                            <span className="sr-only">Email</span>
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image / Avatar */}
                <motion.div
                    className="flex-1 relative w-full max-w-md mx-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
                >
                    <div className="relative aspect-square rounded-full flex items-center justify-center">
                        {/* Glow ring */}
                        <div className="absolute inset-x-0 bottom-0 top-0 rounded-full border border-blue-500/30 scale-[1.05] animate-pulse" />
                        <div className="absolute inset-x-0 bottom-0 top-0 rounded-full border border-purple-500/20 scale-[1.1] animate-pulse" style={{ animationDelay: '1s' }} />

                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-900 shadow-2xl bg-zinc-200 dark:bg-zinc-800 inner-shadow">
                            {/* Replace with actual image later. Using an abstract placeholder for premium feel */}
                            <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 flex items-center justify-center">
                                <span className="text-9xl font-bold text-zinc-400/50 dark:text-zinc-600/50">D</span>
                            </div>
                        </div>

                        {/* Tech badges floating */}
                        <motion.div
                            className="absolute -right-4 top-1/4 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <div className="w-6 h-6 text-[#61DAFB]">⚛️</div>
                            <span className="font-semibold text-sm">React</span>
                        </motion.div>

                        <motion.div
                            className="absolute -left-6 bottom-1/3 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="w-6 h-6 text-[#38B2AC]">💨</div>
                            <span className="font-semibold text-sm">Tailwind</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-zinc-300 dark:border-zinc-700 p-1">
                    <motion.div
                        className="w-1.5 h-3 bg-zinc-500 dark:bg-zinc-400 rounded-full mx-auto"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
