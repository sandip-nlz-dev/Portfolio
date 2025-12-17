import { Suspense, lazy } from "react";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";

// Lazy load below-the-fold components
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const YouTubeSection = lazy(() => import("./components/YouTubeSection"));
const BlogSection = lazy(() => import("./components/BlogSection"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading...</div>}>
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
