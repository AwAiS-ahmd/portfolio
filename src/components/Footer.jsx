import { Mail } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function Footer() {
    return (
        <footer className="border-t border-border mt-auto bg-bg">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <span className="font-heading text-lg font-bold text-text">Awais Ahmad</span>
                    <span className="text-sm text-text-secondary">CS Student & Backend-Focused Developer</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-text-secondary hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md p-1" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md p-1" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-text transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md p-1" aria-label="Email">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex flex-col flex-wrap md:flex-nowrap items-center md:items-end justify-center md:justify-end gap-1 text-xs text-text-secondary text-center md:text-right">
                    <span>&copy; 2026 Awais Ahmad</span>
                    <span>Built with React + Tailwind CSS</span>
                </div>

            </div>
        </footer>
    );
}
