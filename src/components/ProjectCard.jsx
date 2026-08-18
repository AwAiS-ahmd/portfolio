import { ArrowUpRight } from 'lucide-react';
import { Github } from './icons';

export default function ProjectCard({ project }) {
    const { title, description, technologies, image, liveUrl, githubUrl, apiDocsUrl, type = 'frontend' } = project;

    return (
        <div className="group flex flex-col bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-sm">

            {/* Image Container with Browser Frame */}
            <div className="relative w-full aspect-[16/10] bg-bg border-b border-border p-4 pb-0 overflow-hidden">
                {/* Browser Dots */}
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                </div>

                {/* Screenshot Image */}
                <div className="relative w-full h-[calc(100%-24px)] rounded-t-lg bg-surface border border-b-0 border-border overflow-hidden">
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
                    <div className="absolute inset-0 bg-bg hidden items-center justify-center text-text-secondary text-sm font-medium">
                        Project Screenshot Area
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-text-secondary mb-6 line-clamp-3 text-base flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-bg text-text-secondary rounded-full border border-border">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                    {(type === 'frontend' || type === 'fullstack') && liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md px-1"
                        >
                            Live Demo
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}
                    {(type === 'backend' || type === 'fullstack') && apiDocsUrl && (
                        <a
                            href={apiDocsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-text hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md px-1"
                        >
                            API Docs
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text transition-colors ml-auto focus-visible:ring-2 focus-visible:ring-accent outline-none rounded-md px-1"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    )}
                </div>
            </div>

        </div>
    );
}
