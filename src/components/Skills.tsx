import { motion } from 'framer-motion';

const skills = [
    {
        category: 'Languages',
        items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'],
    },
    {
        category: 'Frameworks',
        items: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        category: 'Concepts',
        items: [
            'State Management',
            'React Hooks',
            'Responsive Design',
            'REST APIs',
            'Performance Optimization',
            'Basic DSA',
        ],
    },
    {
        category: 'Tools',
        items: ['Git', 'GitHub', 'Vite', 'npm', 'Netlify', 'Vercel', 'VS Code'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-zinc-100/50 dark:bg-zinc-900/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
            <div className="container px-6 mx-auto w-full max-w-6xl">
                <div className="mb-16 md:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        The tools and technologies I use to bring ideas to life.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                            className="glass p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative group overflow-hidden"
                        >
                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white relative z-10 flex items-center gap-2">
                                {/* Category indicator dot */}
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                {skillGroup.category}
                            </h3>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {skillGroup.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-3 py-1.5 bg-white dark:bg-zinc-800/80 text-sm font-medium rounded-lg text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
