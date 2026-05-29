import Navbar from "@/app/components/Navbar";
import PageBackground from "@/app/components/PageBackground";

export default function SkillsPage() {
  return (
    <PageBackground>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-28">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Skills
        </p>

        <h1 className="mb-8 text-5xl font-bold">Technical Skills</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-xl font-semibold">Programming</h2>
            <p className="text-zinc-400">
              MATLAB, Python, Arduino, ESP32 programming, embedded control, and
              sensor processing.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-xl font-semibold">CAD & Design</h2>
            <p className="text-zinc-400">
              SolidWorks, Fusion 360, mechanical design, subsystem integration,
              and design iteration.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-xl font-semibold">
              Hardware & Fabrication
            </h2>
            <p className="text-zinc-400">
              Raspberry Pi, Sense HAT, sensors, 3D printing, laser cutting, and
              cleanroom fabrication.
            </p>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}