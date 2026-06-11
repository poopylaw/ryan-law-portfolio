import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.16)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.32),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.22),transparent_30%)]" />
        <div className="absolute left-[-10%] top-[18%] h-48 w-[120%] rotate-[-8deg] rounded-full border border-sky-400/20" />
        <div className="absolute left-[-15%] top-[28%] h-64 w-[130%] rotate-[-8deg] rounded-full border border-sky-400/20" />
        <div className="absolute left-[-20%] top-[40%] h-80 w-[140%] rotate-[-8deg] rounded-full border border-sky-400/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_78%)]" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-300/80">
          Mechanical Engineering Portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Ryan Law
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Mechanical engineering transfer student focused on design,
          fabrication, robotics, embedded systems, and experimental testing. I
          build hands-on projects that combine CAD, coding, prototyping, and
          engineering analysis.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-300"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="rounded-full border border-sky-400/40 px-6 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/10"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="relative z-10 mx-auto grid max-w-5xl gap-6 px-6 pb-24 md:grid-cols-3">
        <a
          href="/experience"
          className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-sky-300/70">
            Experience
          </p>
          <h2 className="mb-3 text-xl font-semibold">Engineering Work</h2>
          <p className="text-sm leading-6 text-zinc-400">
            CNSI microfabrication, VEX Robotics leadership, CAD, fabrication,
            and system integration.
          </p>
        </a>

        <a
          href="/projects"
          className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-sky-300/70">
            Projects
          </p>
          <h2 className="mb-3 text-xl font-semibold">Hands-On Builds</h2>
          <p className="text-sm leading-6 text-zinc-400">
            RC vehicle aerodynamics, tiny house heat transfer, Raspberry Pi,
            BroncoHacks, and more.
          </p>
        </a>

        <a
          href="/skills"
          className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-sky-300/70">
            Skills
          </p>
          <h2 className="mb-3 text-xl font-semibold">Technical Stack</h2>
          <p className="text-sm leading-6 text-zinc-400">
            SolidWorks, Fusion 360, MATLAB, Python, Arduino, ESP32, Raspberry
            Pi, and 3D printing.
          </p>
        </a>
      </section>
    </main>
  );
}