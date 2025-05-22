import './globals.css';

import Intro from './components/intro';
import Connect from './components/connect';
import Skills from './components/skills';
import Projects from './components/projects';

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 gap-x-8 py-8">
      <Intro />
      <Skills />
      <Connect />
      {/* <Projects /> */}
    </main>
  );
}
