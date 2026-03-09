import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container px-6 mx-auto w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:text-center md:max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Let's build together
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Currently looking for internships/opportunities in AI, GenAI, and full-stack development.
                        Whether you have a question or want to collaborate, I’ll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden"
                    >
                        {/* Background Blur blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>

                        <div className="space-y-8 relative z-10">
                            <a href="mailto:dhruvsingh200420@gmail.com" className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1">Email</p>
                                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">dhruvsingh200420@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919354567496" className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1">Phone</p>
                                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">+91 9354567496 </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1">Location</p>
                                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Faridabad, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials array */}
                        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4 relative z-10">
                            <a href="https://github.com/thedhruv-07" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                <Github className="w-6 h-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50" />
                            </a>
                            <a href="https://www.linkedin.com/in/dhruv077/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-blue-50/50 hover:dark:bg-blue-900/20 transition-colors">
                                <Linkedin className="w-6 h-6 text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@company.com"
                                className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="How can I help you?"
                                className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-zinc-400 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-zinc-900/20 dark:shadow-white/10"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
