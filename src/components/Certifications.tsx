import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
    {
        title: 'Deloitte Technology Job Simulation',
        issuer: 'Deloitte',
        role: 'Full Stack Developer',
        date: 'Recent',
        skills: ['Software Engineering', 'System Architecture', 'Agile Methodologies'],
    },
    {
        title: 'Full Stack Developer Bootcamp',
        issuer: 'Tech Institute',
        role: 'Trainee',
        date: '2023',
        skills: ['MERN Stack', 'RESTful APIs', 'Database Design'],
    },
    {
        title: 'AI for Engineers Bootcamp',
        issuer: 'AI Nexus',
        role: 'Participant',
        date: '2023',
        skills: ['Machine Learning', 'AI Integration', 'Python'],
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative bg-zinc-100/30 dark:bg-zinc-900/10">
            <div className="container px-6 mx-auto w-full max-w-6xl">
                <div className="mb-16 md:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Certifications
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Continuous learning and validation of architectural design patterns and emerging technologies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="relative p-8 rounded-3xl glass border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors group z-10 overflow-hidden"
                        >
                            {/* Premium Background Accent */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 bg-gradient-to-bl from-blue-500 to-transparent w-32 h-32 rounded-bl-full pointer-events-none group-hover:opacity-20 transition-opacity" />

                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug">
                                {cert.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6 font-medium">
                                <span className="text-blue-500">{cert.issuer}</span>
                                <span>•</span>
                                <span>{cert.role}</span>
                            </div>

                            <div className="space-y-2.5">
                                {cert.skills.map(skill => (
                                    <div key={skill} className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500/70" />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
