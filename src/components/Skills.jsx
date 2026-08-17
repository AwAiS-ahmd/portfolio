import { skills, currentlyLearning } from '../data/skills';

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                {/* Main Skills */}
                <div className="lg:col-span-8 lg:pr-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Technical Skills</h2>
                    <div className="w-12 h-1 bg-accent rounded-full mb-12"></div>

                    <div className="space-y-12">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-bg-secondary subtle-border rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:-translate-y-0.5 hover:border-accent/40 transition-all shadow-sm cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Currently Learning */}
                <div className="lg:col-span-4 mt-8 lg:mt-0">
                    <div className="subtle-border bg-bg-secondary p-8 rounded-2xl shadow-sm hover:border-text-muted/30 transition-colors h-full">
                        <h3 className="text-xl font-bold text-text-primary mb-6">Currently Learning</h3>
                        <p className="text-sm text-text-muted mb-6 leading-relaxed">
                            Deepening my knowledge of backend engineering, databases, system design, and AI-powered applications.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {currentlyLearning.map(topic => (
                                <span
                                    key={topic}
                                    className="px-3 py-1.5 bg-bg-primary subtle-border rounded-md text-xs font-medium text-accent shadow-sm"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
