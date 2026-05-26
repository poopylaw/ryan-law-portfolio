import PageBackground from "@/app/components/PageBackground";

export default function RcVehicleAerodynamicsPage() {
  return (
    <PageBackground>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Project
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          RC Vehicle Aerodynamics Testing & Optimization
        </h1>

        <p className="mb-10 text-lg leading-8 text-zinc-300">
          I designed and built an RC car from scratch using SolidWorks,
          3D-printed components, and an ESP32-based control system. The project
          combined mechanical design, embedded programming, fabrication, and
          aerodynamic analysis to improve vehicle stability and performance.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
            <p className="text-zinc-400">
              Build and optimize an RC vehicle by improving body geometry,
              stability, airflow behavior, and electronic drive control.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
            <p className="text-zinc-400">
              SolidWorks, ESP32, Arduino programming, 3D printing, electronics,
              aerodynamic analysis, and prototype testing.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Design & Build Process</h2>
          <p className="leading-8 text-zinc-300">
            I modeled the vehicle in SolidWorks, fabricated components with 3D
            printing, and integrated an ESP32-based control system with the
            electronic drive system. I used aerodynamic concepts such as
            Reynolds number, pressure drag, and boundary-layer behavior to guide
            design changes and improve the vehicle body.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Aerodynamic Optimization</h2>
          <p className="leading-8 text-zinc-300">
            To improve performance, I refined the body geometry and incorporated
            an internal airflow channel inspired by Formula 1 F-duct concepts.
            The goal was to reduce drag, improve airflow behavior, and support
            better overall vehicle stability.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This project strengthened my ability to connect mechanical design,
            programming, fabrication, and engineering analysis. I learned how
            small design changes can affect performance and how prototyping
            helps turn theoretical concepts into working systems.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}