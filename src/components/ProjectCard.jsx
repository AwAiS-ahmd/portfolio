import { ArrowUpRight } from 'lucide-react';
import { Github } from './icons';

export default function ProjectCard({ project }) {
    const { title, description, technologies, image, liveUrl, githubUrl } = project;

    return (
        <div className="group flex flex-col bg-bg-secondary rounded-2xl subtle-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border/80 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5">

            {/* Image Container with Browser Frame */}
            <div className="relative w-full aspect-[16/10] bg-bg-primary subtle-border border-x-0 border-t-0 p-4 pb-0 overflow-hidden">
                {/* Browser Dots */}
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                </div>

                {/* Screenshot Image */}
                <div className="relative w-full h-[calc(100%-24px)] rounded-t-lg bg-bg-secondary subtle-border border-b-0 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    {/* Fallback pattern if image is missing */}
                    <div className="absolute inset-0 bg-bg-primary hidden items-center justify-center text-text-muted text-sm font-medium">
                        Project Screenshot Area
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-text-secondary mb-6 line-clamp-3 text-base flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-bg-primary text-text-muted rounded-full subtle-border">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent transition-colors"
                    >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors ml-auto"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                </div>
            </div>

        </div>
    );
}
