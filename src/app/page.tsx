import './globals.css';

import Intro from './components/intro';
import Connect from './components/connect';
import Skills from './components/skills';

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 gap-x-8 py-8">
      <Intro />
      <Skills />
      <Connect />
    </main>
  );
}
