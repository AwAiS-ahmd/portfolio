import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-accent/30">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
