import { Mail } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">

                {/* Contact Info */}
                <div className="flex flex-col">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">Let's work together.</h2>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-md mb-10">
                        I'm currently open to internship, junior developer, and freelance opportunities. Feel free to reach out.
                    </p>

                    <div className="space-y-6">
                        <ContactLink href="mailto:awais.ahmadbsh@gmail.com" icon={<Mail className="w-5 h-5" />} label="awais.ahmadbsh@gmail.com" />
                        <ContactLink href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQH8tJhnpqGDPgAAAaARUnoIWgKskk9vvVV8NCrjKk9thb7M5PRGJ5CC_1MKJc0noI6_CBUWBNraYLN4JTFic1HlX8N6bzWb2K2iRwuhe7WpW_4CS2jP8dKQDBM4xQ6lKWmivQc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fawais-ahmad-5094aa395%3Futm_source%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dmember_android" target="_blank" icon={<Linkedin className="w-5 h-5" />} label=" LinkedIn" />
                        <ContactLink href="https://github.com/AwAiS-ahmd" target="_blank" icon={<Github className="w-5 h-5" />} label="GitHub" />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-bg-secondary subtle-border rounded-2xl p-8 max-w-lg w-full ml-auto">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full bg-bg-primary subtle-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                className="w-full bg-bg-primary subtle-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Hello Awais..."
                                className="w-full bg-bg-primary subtle-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-bg-primary text-text-primary subtle-border hover:bg-accent hover:border-accent hover:text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}

function ContactLink({ href, icon, label, target }) {
    return (
        <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors group w-fit"
        >
            <div className="w-10 h-10 rounded-full bg-bg-secondary subtle-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                {icon}
            </div>
            <span className="font-medium text-base">{label}</span>
        </a>
    );
}
