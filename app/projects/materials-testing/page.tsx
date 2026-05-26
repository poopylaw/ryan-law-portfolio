export default function MaterialsTestingPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <a href="/" className="mb-8 inline-block text-zinc-400 hover:text-white">
            ← Back to Home
          </a>
  
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project
          </p>
  
          <h1 className="mb-6 text-5xl font-bold">Materials Testing</h1>
  
          <p className="mb-10 text-lg leading-8 text-zinc-300">
            This project focused on analyzing material behavior through lab data,
            stress-strain graphs, grain size measurements, and technical
            reporting. The goal was to connect experimental results to material
            properties and engineering performance.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
              <p className="text-zinc-400">
                Analyze material properties using experimental data, visual
                measurements, graphs, and engineering interpretation.
              </p>
            </div>
  
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
              <p className="text-zinc-400">
                Stress-strain graphs, grain size images, Feret diameter
                measurements, histograms, Excel, and technical memo writing.
              </p>
            </div>
          </div>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">Process</h2>
            <p className="leading-8 text-zinc-300">
              I analyzed material data by measuring grain sizes, organizing
              numerical results, calculating averages and standard deviations, and
              interpreting stress-strain behavior. I also practiced presenting
              engineering results clearly through graphs, tables, and written
              analysis.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
            <p className="leading-8 text-zinc-300">
              This project helped me understand how material structure affects
              performance. It also strengthened my ability to communicate
              engineering data through organized figures, calculations, and
              technical writing.
            </p>
          </section>
        </section>
      </main>
    );
  }
  