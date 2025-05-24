import './globals.css';

import Intro from './components/intro';
import Connect from './components/connect';
import Skills from './components/skills';
import Projects from './components/projects';
import Work from './components/work';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-8 flex-grow">
        <div className="col-span-2 space-y-4 lg:sticky lg:top-8 self-start">
          <Intro />
          <Connect />
        </div>
        <div className="col-start-3 col-span-5 space-y-8">
          <Skills />
          <Projects />
          <Work />
        </div>
      </main>
      <footer className="flex justify-center items-center py-4">
        <Footer />
      </footer>
    </div>
  );
}
