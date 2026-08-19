import { GraduationCap, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Education() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <>
            <section ref={ref} id="education" className="py-24 md:py-32 relative">
                <div className={`max-w-7xl mx-auto px-6 lg:px-12 w-full ${inView ? 'motion-safe:animate-fade-in-up' : 'motion-safe:opacity-0'}`}>

                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">Education</h2>
                        <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
                    </div>

                    <div className="max-w-3xl mx-auto border border-border bg-surface rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-bg border border-border flex items-center justify-center">
                                <GraduationCap className="w-7 h-7 text-accent" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-2xl font-heading font-bold text-text mb-1">Bachelor of Science in Computer Science</h3>
                                <p className="text-lg text-text-secondary font-medium mb-4">University of Swat · 2022 — 2026</p>

                                <p className="text-text-secondary leading-relaxed">
                                    Currently completing my final-year project with a focus on full-stack web development.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Resume CTA Section */}
            <section id="resume-cta" className="py-20 md:py-24 relative bg-surface border-y border-border mt-10 md:mt-0">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center">

                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-text mb-4">Want to know more?</h2>
                    <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                        View my complete resume for my education, technical skills, projects and background.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/resume" className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-all hover:scale-[1.02] flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent outline-none">
                            View Resume
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/resume.pdf" download className="px-6 py-3 rounded-xl border border-border bg-surface text-text font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-[1.02] flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent outline-none">
                            Download Resume
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}
