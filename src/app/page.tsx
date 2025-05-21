import './globals.css';

import Intro from './components/intro';
import Connect from './components/connect';

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-4 py-8">
      <Intro />
      <Connect />
    </main>
  );
}
