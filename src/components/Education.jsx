import { GraduationCap, ArrowRight } from 'lucide-react';

export default function Education() {
    return (
        <>
            <section id="education" className="py-24 md:py-32 relative hidden md:block">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Education</h2>
                        <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
                    </div>

                    <div className="max-w-3xl mx-auto subtle-border bg-bg-secondary rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-bg-primary subtle-border flex items-center justify-center shadow-inner">
                                <GraduationCap className="w-7 h-7 text-accent" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold text-text-primary mb-1">Bachelor of Science in Computer Science</h3>
                                <p className="text-lg text-text-secondary font-medium mb-4">[University Name] • 2022 — 2026</p>

                                <p className="text-text-muted leading-relaxed">
                                    Currently completing my final-year project, focusing on scalable software architecture and full-stack development.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Resume CTA Section */}
            <section id="resume-cta" className="py-20 md:py-24 relative bg-bg-secondary/50 border-y border-border mt-10 md:mt-0">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center">

                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Want to know more?</h2>
                    <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                        View my complete resume for my education, technical skills, projects and background.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/resume" className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-lg shadow-accent/20 flex items-center gap-2">
                            View Resume
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/resume.pdf" download className="px-6 py-3 rounded-lg subtle-border bg-bg-primary text-text-primary font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 flex items-center gap-2">
                            Download PDF
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}
