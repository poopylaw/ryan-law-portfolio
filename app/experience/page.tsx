import Navbar from "@/app/components/Navbar";
import PageBackground from "@/app/components/PageBackground";

export default function ExperiencePage() {
  return (
    <PageBackground>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-28">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Experience
        </p>

        <h1 className="mb-8 text-5xl font-bold">Engineering Experience</h1>

        <div className="grid gap-6">
          <a
            href="/projects/uas-drone-coding"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h2 className="text-xl font-semibold">
                Mt. SAC UAV Team — Systems Engineer & 3D Design Engineer
              </h2>
              <p className="text-sm text-zinc-500">Jan. 2026 – Jun. 2026</p>
            </div>

            <p className="mb-4 text-zinc-400">
              Served as systems engineer and 3D design engineer for the
              highest-placing U.S. team at the 2026 California Unmanned Aerial
              Systems Competition, finishing 2nd overall behind the Technical
              University of Denmark. Designed a servo-actuated payload drop
              mechanism in SolidWorks and programmed it in C++, achieving fully
              autonomous delivery within 5 ft of target center.
            </p>

            <p className="text-sm text-zinc-500">
              Skills: SolidWorks, C++, systems integration, autonomous systems,
              fabrication, flight testing
            </p>
          </a>

          <a
            href="/projects/ucla-cnsi"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h2 className="text-xl font-semibold">
                UCLA CNSI Microfabrication and Nanopatterning Program
              </h2>
              <p className="text-sm text-zinc-500">Oct. 2025 – Dec. 2025</p>
            </div>

            <p className="mb-4 text-zinc-400">
              Fabricated wafer-based microstructures using photolithography,
              thin-film deposition, wet etching, and electron-beam lithography
              in cleanroom environments. Optimized fabrication workflows and
              characterized features via microscopy to refine subsequent
              iterations.
            </p>

            <p className="text-sm text-zinc-500">
              Skills: cleanroom processing, microfabrication, microscopy,
              process optimization
            </p>
          </a>

          <a
            href="/projects/vex-robotics"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h2 className="text-xl font-semibold">
                Mt. SAC VEX Robotics Design Lead
              </h2>
              <p className="text-sm text-zinc-500">Dec. 2024 – Mar. 2025</p>
            </div>

            <p className="mb-4 text-zinc-400">
              Led mechanical design for a collegiate VEX robot using SolidWorks
              and Fusion 360 while managing team workflow, prototyping, testing,
              and subsystem integration. Mentored newer members in CAD,
              fabrication, and system integration.
            </p>

            <p className="text-sm text-zinc-500">
              Skills: robotics, CAD, leadership, fabrication, system integration
            </p>
          </a>
        </div>
      </section>
    </PageBackground>
  );
}