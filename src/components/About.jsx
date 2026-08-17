import { ArrowDown } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                <div className="lg:col-span-5 flex flex-col gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">About Me</h2>
                    <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>

                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <p>
                            I'm a Computer Science student interested in backend engineering and building practical web applications.
                        </p>
                        <p>
                            I work with JavaScript, React, Node.js, and databases, with a particular interest in building reliable APIs and backend systems. I'm focused on developing practical applications that solve real problems and turning what I learn into production-oriented projects.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 pt-8 lg:pt-0">
                    <div className="subtle-border bg-bg-secondary p-8 rounded-2xl md:p-10 shadow-sm transition-all hover:border-text-muted/30">
                        <h3 className="text-xl font-bold text-text-primary mb-8 tracking-tight">Developer Journey</h3>

                        <div className="relative border-l border-border ml-3 space-y-8">

                            <JourneyStep
                                title="Computer Science"
                                description="Built a foundation in programming, algorithms, data structures, and software engineering."
                                active={false}
                            />

                            <JourneyStep
                                title="Web Development"
                                description="Developed responsive web interfaces with HTML, CSS, JavaScript, and React."
                                active={false}
                            />

                            <JourneyStep
                                title="Modern Frontend"
                                description="Worked with component-based architecture, routing, state management, and API integration."
                                active={false}
                            />

                            <JourneyStep
                                title="Backend Engineering"
                                description="Building REST APIs with Node.js and Express, working with SQL and NoSQL databases, authentication, and backend architecture."
                                active={true}
                                isLast={true}
                            />

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function JourneyStep({ title, description, active, isLast }) {
    return (
        <div className="relative pl-8">
            {/* Timeline dot */}
            <span className={`absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full subtle-border ${active ? 'bg-accent border-accent shadow-[0_0_10px_rgba(124,58,237,0.5)]' : 'bg-bg-primary'}`}></span>

            <div className="flex flex-col gap-1">
                <h4 className={`text-base font-semibold ${active ? 'text-accent' : 'text-text-primary'}`}>{title}</h4>
                <p className="text-sm text-text-muted">{description}</p>
            </div>
        </div>
    );
}
