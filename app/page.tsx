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
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-8 pt-36 pb-16">
        <p className="mb-4 text-sm uppercase tracking-[0.45em] text-sky-300/90">
          Mechanical Engineering Portfolio
        </p>

        <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
          Ryan Law
        </h1>

        <p className="mb-10 max-w-3xl text-xl leading-9 text-zinc-300">
          Mechanical engineering transfer student focused on design,
          fabrication, robotics, embedded systems, and experimental testing. I
          build hands-on projects that combine CAD, coding, prototyping, and
          engineering analysis.
        </p>

        <div className="flex flex-wrap gap-5">
          <a
            href="/projects"
            className="rounded-full bg-sky-400 px-8 py-4 text-base font-semibold text-black transition hover:bg-sky-300"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="rounded-full border border-sky-400/50 px-8 py-4 text-base font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/10"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Cards */}
      <section className="relative z-10 mx-auto -mt-4 grid max-w-6xl gap-8 px-8 pb-24 md:grid-cols-3">
        <a
          href="/experience"
          className="rounded-2xl border border-sky-400/10 bg-zinc-950/80 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-sky-300/80">
            Experience
          </p>

          <h2 className="mb-5 text-2xl font-semibold">Engineering Work</h2>

          <p className="text-base leading-8 text-zinc-400">
            CNSI microfabrication, VEX Robotics leadership, CAD, fabrication,
            and system integration.
          </p>
        </a>

        <a
          href="/projects"
          className="rounded-2xl border border-sky-400/10 bg-zinc-950/80 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-sky-300/80">
            Projects
          </p>

          <h2 className="mb-5 text-2xl font-semibold">Hands-On Builds</h2>

          <p className="text-base leading-8 text-zinc-400">
            RC vehicle aerodynamics, tiny house heat transfer, Raspberry Pi,
            BroncoHacks, and more.
          </p>
        </a>

        <a
          href="/skills"
          className="rounded-2xl border border-sky-400/10 bg-zinc-950/80 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-sky-300/80">
            Skills
          </p>

          <h2 className="mb-5 text-2xl font-semibold">Technical Stack</h2>

          <p className="text-base leading-8 text-zinc-400">
            SolidWorks, Fusion 360, MATLAB, Python, Arduino, ESP32, Raspberry
            Pi, and 3D printing.
          </p>
        </a>
      </section>
    </main>
  );
}