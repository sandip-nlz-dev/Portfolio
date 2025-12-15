import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import YouTubeSection from "./components/YouTubeSection";
import BlogSection from "./components/BlogSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      <main>
        <Hero />

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <YouTubeSection />

        <BlogSection />

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
