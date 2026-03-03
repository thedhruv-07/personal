import { motion } from 'framer-motion';
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

    const itemVariants: any = {
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
                            I'm a passionate <b>Frontend Developer</b> with a deep focus on crafting <b>scalable UI systems</b> and ensuring a <b>performance mindset</b> in every line of code I write.
                            Currently pursuing my B.Tech in Computer Engineering, I specialize in combining modern design principles with rock-solid React architectures.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            My goal is to secure a Software Engineering/Frontend Internship where I can build impactful products and grow my expertise in creating world-class user experiences that feel smart, fast, and remarkably intuitive.
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
                            { icon: Code2, title: 'React Expertise', desc: 'Building modern SPA and interactive interfaces with Hooks and Context.' },
                            { icon: Zap, title: 'Performance Mindset', desc: 'Lighthouse 90+ focus, lazy loading, and optimized rendering loops.' },
                            { icon: Cpu, title: 'Scalable Systems', desc: 'Component architectures that scale effortlessly across large codebases.' },
                            { icon: Award, title: 'Internship Ready', desc: 'Proficient with Git, CI/CD, project management, and agile environments.' },
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
