export default function TinyHouseHeatTransferPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <a href="/" className="mb-8 inline-block text-zinc-400 hover:text-white">
            ← Back to Home
          </a>
  
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project
          </p>
  
          <h1 className="mb-6 text-5xl font-bold">
            Tiny House Heat Transfer Simulation
          </h1>
  
          <p className="mb-10 text-lg leading-8 text-zinc-300">
            This project used MATLAB to model heat transfer and energy usage in a
            tiny house system. By changing design parameters, I studied how
            insulation, window area, airflow, heater temperature, and electricity
            cost affect indoor heating performance.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
              <p className="text-zinc-400">
                Analyze how building design choices affect heat transfer,
                temperature control, and energy usage in a small structure.
              </p>
            </div>
  
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
              <p className="text-zinc-400">
                MATLAB, Simulink, heat transfer concepts, insulation properties,
                airflow assumptions, and parameter testing.
              </p>
            </div>
          </div>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">Process</h2>
            <p className="leading-8 text-zinc-300">
              I modified parameters such as roof pitch, window area, insulation
              material, window material, airflow, heater temperature, and
              electricity cost. By comparing how the model responded to each
              change, I could connect engineering assumptions to energy
              performance and heating behavior.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
            <p className="leading-8 text-zinc-300">
              This project helped me understand how heat transfer depends on
              material properties, geometry, and environmental conditions. It also
              showed me how simulations can be used to test design decisions
              before building a physical system.
            </p>
          </section>
        </section>
      </main>
    );
  }