import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean; toggleTheme: () => void }) => {
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 px-4 md:px-6 py-4 \${
          isScrolled ? 'py-2' : ''
        }`}
            >
                <div className={`mx-auto max-w-5xl rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-500 \${
          isScrolled 
            ? 'glass shadow-lg dark:shadow-black/20' 
            : 'bg-transparent'
        }`}>
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={800}
                        className="cursor-pointer font-bold text-xl tracking-tighter"
                    >
                        <span className="text-zinc-900 dark:text-zinc-50">Dhruv</span>
                        <span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={800}
                                className="cursor-pointer relative text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300"
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: isDarkMode ? 0 : 180, scale: isDarkMode ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute"
                            >
                                <Moon className="w-5 h-5" />
                            </motion.div>
                            <motion.div
                                initial={false}
                                animate={{ rotate: isDarkMode ? 0 : -180, scale: isDarkMode ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sun className="w-5 h-5" />
                            </motion.div>
                        </button>

                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 border border-transparent rounded-full hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900"
                        >
                            Let's Talk
                        </a>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-700 dark:text-zinc-300"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    pointerEvents: mobileMenuOpen ? "auto" : "none",
                }}
                className="fixed inset-0 z-30 pt-24 px-6 md:hidden glass bg-white/90 dark:bg-black/90"
            >
                <div className="flex flex-col gap-6 text-2xl font-semibold mt-10">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={item.to}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="cursor-pointer text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-4 block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
