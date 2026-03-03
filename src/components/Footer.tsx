import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 mt-20">
            <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Dhruv Kumar. All rights reserved.
                </p>

                <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Designed with <Heart className="w-4 h-4 text-red-500 fill-current mx-1" /> and built with React
                </div>
            </div>
        </footer>
    );
};

export default Footer;
