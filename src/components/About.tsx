import { motion, type Variants } from 'framer-motion';
import { Award, Code2, Cpu, Zap } from 'lucide-react';

const About = () => {
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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto w-full max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 group inline-block">
                                Who{' '}
                                <span className="text-zinc-500 dark:text-zinc-600 group-hover:text-blue-500 transition-colors duration-300">
                                    I
                                </span>{' '}
                                Am
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            I’m an <b>AI-focused MERN stack developer</b> who builds <b>intelligent, production-ready web apps</b> by combining modern full-stack architecture with <b>LLM integrations</b>.
                            I’ve worked on AI dashboards, chat interfaces, and workflow tools—shipping fast with a strong focus on clean UX and reliable backend APIs.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            I’m especially interested in <b>GenAI product building</b>: prompt engineering, AI workflow design, and integrating <b>Gemini/OpenAI APIs</b> to deliver real-world features that users actually feel.
                        </motion.p>

                        {/* Education Box */}
                        <motion.div variants={itemVariants} className="p-6 rounded-2xl glass border border-zinc-200 dark:border-zinc-800 relative hover:border-blue-500/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full rounded-tr-2xl filter blur-2xl" />
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-blue-500" />
                                Education
                            </h3>
                            <p className="text-zinc-900 dark:text-zinc-100 font-medium text-lg">
                                B.Tech in Computer Engineering
                            </p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                                J.C. Bose University of Science and Technology, Faridabad
                            </p>
                            <p className="text-sm font-semibold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full w-max">
                                2022 – 2026
                            </p>
                        </motion.div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Cpu, title: 'LLM Integration', desc: 'Gemini/OpenAI API integration, structured prompting, and AI feature delivery.' },
                            { icon: Code2, title: 'MERN Full Stack', desc: 'Express APIs + MongoDB persistence with responsive React frontends.' },
                            { icon: Zap, title: 'AI Workflows', desc: 'Designing flows that combine tools, validation, and error handling.' },
                            { icon: Award, title: 'Ship Fast', desc: 'Rapid prototyping mindset with Git/GitHub and deployment to Vercel/Netlify.' },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                            >
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
