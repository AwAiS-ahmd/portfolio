import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

                <div className="mb-16 md:mb-20 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Featured Work</h2>
                    <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        A selection of projects demonstrating my experience with modern frontend development and practical web application development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>



            </div>
        </section>
    );
}
