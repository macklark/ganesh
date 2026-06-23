export default function Home() {
  return (
    <main className="flex flex-col items-center pt-24 sm:pt-28 min-h-screen px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-md text-gray-400">Hi I am</h1>
        <h1 className="text-3xl sm:text-4xl text-white">Ganesh Kolavennu</h1>
      </div>

      <div className="w-full max-w-2xl mt-10 sm:mt-12">
        <h2 className="text-lg font-semibold text-white mb-4">What do I do?</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-white/20 select-none shrink-0">01</span>
            <span className="text-white/50">Frontend engineer on paper, fullstack developer in practice — comfortable across the entire stack</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/20 select-none shrink-0">02</span>
            <span className="text-white/50">Always building and learning, with a deep curiosity for how things work under the hood</span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/20 select-none shrink-0">03</span>
            <span className="text-white/50">AI enthusiast and ML engineer, exploring the intersection of intelligent systems and real-world products</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
