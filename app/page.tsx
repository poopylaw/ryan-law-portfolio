export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Mechanical Engineering Portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Ryan Law
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
          I am an aspiring mechanical engineer interested in design,
          prototyping, robotics, testing, and solving real engineering problems
          through hands-on projects.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-semibold">VEX Robotics Design</h3>
            <p className="text-zinc-400">
              Mechanical design improvements, prototyping, testing, and
              iteration for robotics competition performance.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-semibold">
              MATLAB Engineering Projects
            </h3>
            <p className="text-zinc-400">
              Simulations, data analysis, and engineering problem-solving using
              MATLAB.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-semibold">Thermal Simulation</h3>
            <p className="text-zinc-400">
              Modeled heat transfer and energy usage in a tiny house system
              using engineering assumptions and parameter testing.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-2 text-xl font-semibold">Materials Testing</h3>
            <p className="text-zinc-400">
              Analyzed material behavior through stress-strain graphs, grain
              size analysis, and technical lab reporting.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>
        <p className="text-zinc-400">Email: your-email@example.com</p>
      </section>
    </main>
  );
}