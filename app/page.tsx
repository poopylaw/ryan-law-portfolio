export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold">
            Ryan Law
          </a>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

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

      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          About
        </p>

        <h2 className="mb-4 text-3xl font-bold">About Me</h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          I am a mechanical engineering transfer student interested in
          mechanical design, robotics, prototyping, and engineering
          problem-solving. Through hands-on projects, coding, simulations, and
          lab work, I have built experience turning ideas into functional systems
          and improving designs through testing and iteration.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Software</h3>
            <p className="text-zinc-400">
              MATLAB, Java, GitHub, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Engineering</h3>
            <p className="text-zinc-400">
              Mechanical design, prototyping, testing, data analysis,
              simulations
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Tools & Hardware</h3>
            <p className="text-zinc-400">
              Raspberry Pi, Sense HAT, sensors, robotics systems, lab equipment
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Projects
        </p>

        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/projects/vex-robotics"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <h3 className="mb-2 text-xl font-semibold">VEX Robotics Design</h3>
            <p className="mb-4 text-zinc-400">
              Mechanical design improvements, prototyping, testing, and
              iteration for robotics competition performance.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: mechanical design, teamwork, troubleshooting, prototyping
            </p>
          </a>

          <a
            href="/projects/matlab-projects"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <h3 className="mb-2 text-xl font-semibold">
              MATLAB Diffusion Simulation
            </h3>
            <p className="mb-4 text-zinc-400">
              Modeled particle diffusion across connected boxes using MATLAB
              arrays, loops, probability, and animated bar graphs.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: MATLAB, modeling, simulation, data analysis
            </p>
          </a>

          <a
            href="/projects/tiny-house-heat-transfer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Tiny House Heat Transfer Simulation
            </h3>
            <p className="mb-4 text-zinc-400">
              Modeled how insulation, window area, airflow, and heater
              temperature affect indoor heating and energy usage.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: heat transfer, MATLAB, simulation, parameter testing
            </p>
          </a>

          <a
            href="/projects/materials-testing"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <h3 className="mb-2 text-xl font-semibold">Materials Testing</h3>
            <p className="mb-4 text-zinc-400">
              Analyzed material behavior through stress-strain graphs, grain
              size analysis, and technical lab reporting.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: materials analysis, data interpretation, lab reporting
            </p>
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>

        <p className="mb-6 max-w-2xl text-zinc-400">
          I am currently building my engineering portfolio and looking for
          opportunities to grow through projects, internships, and hands-on
          engineering experience.
        </p>

        <div className="space-y-2 text-zinc-300">
          <p>Email: your-email@example.com</p>
          <p>GitHub: github.com/poopylaw</p>
          <p>LinkedIn: Add your LinkedIn here</p>
        </div>
      </section>
    </main>
  );
}