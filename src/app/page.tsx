import './globals.css';

import Intro from './components/intro';
import Connect from './components/connect';
import Skills from './components/skills';
import Projects from './components/projects';

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-8">
      <div className="col-span-2 space-y-4 lg:sticky lg:top-8 self-start">
        <Intro />
        <Connect />
      </div>
      <div className="col-start-3 col-span-5 space-y-8">
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
