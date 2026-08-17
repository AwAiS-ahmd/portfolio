import { Mail, FileText, Download } from "lucide-react";
import { Github, Linkedin } from "./icons";
import profileImage from "../assets/Profile.jpg";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            Computer Science Student
          </p>

          <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[1.1] tracking-tight text-text-primary">
            Hi, I'm Awais.
            <br />
            <span className="text-text-secondary text-[clamp(2rem,4vw,3.5rem)] font-bold">
              CS Student & <br className="hidden md:block" />
              Aspiring Backend Engineer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
            I build web applications with JavaScript and React, while developing
            deeper expertise in backend engineering, databases, and modern web
            development.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-lg shadow-accent/20 flex items-center gap-2"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg subtle-border bg-bg-secondary text-text-primary font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Awais_Ahmad_Resume.pdf"
              className="px-6 py-3 rounded-lg subtle-border bg-bg-secondary text-text-primary font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-5 mt-6">
            <SocialLink
              href="#"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialLink
              href="#"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <SocialLink
              href="#"
              icon={<Mail className="w-5 h-5" />}
              label="Email"
            />
          </div>
        </div>

        {/* Profile Image (Placeholder) */}
        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 animate-fade-in-up md:delay-150">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent-secondary/20 rounded-2xl md:rounded-3xl rotate-6 blur-lg"></div>
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden subtle-border bg-bg-secondary flex items-center justify-center p-2 shadow-2xl">
            <img
              src={profileImage}
              alt="Awais Ahmad"
              className="w-full h-full object-cover object-top rounded-xl md:rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hidden md:flex">
        <span className="text-xs font-semibold tracking-widest text-text-muted">
          SCROLL
        </span>
        <div className="w-px h-8 bg-text-muted/50"></div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-bg-secondary subtle-border text-text-secondary hover:text-accent hover:-translate-y-1 transition-all"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
