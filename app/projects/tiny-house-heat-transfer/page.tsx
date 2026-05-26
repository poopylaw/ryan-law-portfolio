import PageBackground from "@/app/components/PageBackground";

export default function TinyHouseHeatTransferPage() {
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
          Tiny House Heat Transfer Simulation
        </h1>

        <p className="mb-10 text-lg leading-8 text-zinc-300">
          I used MATLAB and Simulink to model heat transfer and energy usage in
          a tiny house system. The project focused on how design parameters such
          as insulation, window area, airflow, roof pitch, heater temperature,
          and electricity cost affect indoor temperature control and energy
          performance.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
            <p className="text-zinc-400">
              Evaluate how building design choices affect heat transfer,
              heating performance, and energy cost in a small residential
              structure.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
            <p className="text-zinc-400">
              MATLAB, Simulink, heat transfer concepts, thermal modeling,
              parameter testing, and engineering analysis.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Simulation Approach</h2>
          <p className="leading-8 text-zinc-300">
            I modified system parameters including roof pitch, window area,
            insulation material, window material, airflow rate, heater
            temperature, and electricity cost. By changing these values, I could
            compare how the model responded and identify which design choices
            had the strongest effect on heating performance.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Engineering Analysis</h2>
          <p className="leading-8 text-zinc-300">
            The project connected material properties, geometry, and system
            assumptions to thermal behavior. I used the simulation results to
            better understand how heat loss, insulation, airflow, and heater
            performance interact in a building system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This project strengthened my understanding of heat transfer,
            simulation-based engineering analysis, and parameter sensitivity. It
            also helped me see how MATLAB and Simulink can be used to test
            design decisions before building or modifying a physical system.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}