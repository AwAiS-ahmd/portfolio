import { Mail, FileText, Download } from "lucide-react";
import { Github, Linkedin } from "./icons";
import profileImage from "../assets/Profile.jpg";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor Removed for Flat Design */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            Computer Science Student
          </p>

          <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-heading font-extrabold leading-[1.1] tracking-tight text-text">
            Hi, I'm Awais.
            <br />
            <span className="text-text-secondary text-[clamp(2rem,4vw,3.5rem)] font-bold">
              Computer Science Student & <br className="hidden md:block" />
              Backend-Focused Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            I build web applications with JavaScript and React, with a growing focus on backend engineering, REST APIs, databases, and scalable web applications.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-all hover:scale-[1.02] flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent outline-none"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-border bg-surface text-text font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-[1.02] flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-accent outline-none"
            >
              <Mail className="w-5 h-5" />
              Contact Me
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

        {/* Profile Image */}
        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 md:delay-150 motion-safe:animate-fade-in-up">
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-border bg-surface flex items-center justify-center p-2 hover:scale-[1.02] transition-transform duration-300">
            <img
              src={profileImage}
              alt="Awais Ahmad"
              className="w-full h-full object-cover object-top rounded-xl md:rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex hover:opacity-100 transition-opacity">
        <span className="text-xs font-semibold tracking-widest text-text-secondary">
          SCROLL
        </span>
        <div className="w-px h-8 bg-text-secondary/50"></div>
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
      className="p-3 rounded-full bg-surface border border-border text-text-secondary hover:text-text hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[1.02] transition-all focus-visible:ring-2 focus-visible:ring-accent outline-none"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
