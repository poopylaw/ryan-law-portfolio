import Navbar from "@/app/components/Navbar";
import PageBackground from "@/app/components/PageBackground";

export default function ProjectsPage() {
  return (
    <PageBackground>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-28">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Projects
        </p>

        <h1 className="mb-8 text-5xl font-bold">Featured Projects</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/projects/rc-vehicle-aerodynamics"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">
              RC Vehicle Aerodynamics Testing & Optimization
            </h2>
            <p className="mb-4 text-zinc-400">
              Designed and built an RC car from scratch using SolidWorks,
              3D-printed components, and an ESP32-based control system.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: ESP32, SolidWorks, 3D printing, aerodynamics
            </p>
          </a>

          <a
            href="/projects/broncohacks-posture-device"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">
              BroncoHacks Posture Device
            </h2>
            <p className="mb-4 text-zinc-400">
              Built a posture-monitoring prototype using a Raspberry Pi,
              distance sensor, breadboarded circuitry, Python interface, and
              3D-printed enclosure.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: Python, Raspberry Pi, sensors, rapid prototyping
            </p>
          </a>

          <a
            href="/projects/folding-knife-design"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">
              Folding Knife Design & Fabrication
            </h2>
            <p className="mb-4 text-zinc-400">
              Designed and fabricated a folding knife using Magnacut steel,
              SolidWorks, fabrication methods, and a back lock mechanism.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: SolidWorks, fabrication, tolerances, mechanical design
            </p>
          </a>

          <a
            href="/projects/uas-drone-coding"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">
              UAS Drone Competition Project — 2nd Place Overall, 2026 C-UASC
            </h2>
            <p className="mb-4 text-zinc-400">
              Served as systems engineer and 3D design engineer for the Mt.
              SAC UAV Team, the highest-placing U.S. team at the 2026
              California Unmanned Aerial Systems Competition (C-UASC).
            </p>
            <p className="text-sm text-zinc-500">
              Skills: systems engineering, 3D design, payload mechanism, CAD,
              fabrication
            </p>
          </a>

          <a
            href="/projects/tiny-house-heat-transfer"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">
              Tiny House Heat Transfer Simulation
            </h2>
            <p className="mb-4 text-zinc-400">
              Modeled heat transfer and energy usage in a tiny house system
              using MATLAB, Simulink, and parameter testing.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: MATLAB, Simulink, heat transfer, simulation, energy
              analysis
            </p>
          </a>

          <a
            href="/projects/raspberry-pi-sense-hat"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">
              Raspberry Pi Sense HAT Controller
            </h2>
            <p className="mb-4 text-zinc-400">
              Developed a MATLAB-based control interface for an 8x8 LED matrix
              using joystick and accelerometer inputs.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: MATLAB, Raspberry Pi, Sense HAT, sensor processing,
              embedded control
            </p>
          </a>
        </div>
      </section>
    </PageBackground>
  );
}