export default function FoldingKnifeDesignPage() {
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
            Folding Knife Design & Fabrication
          </h1>
  
          <p className="mb-10 text-lg leading-8 text-zinc-300">
            I designed and fabricated a folding knife using Magnacut steel,
            SolidWorks, fabrication methods, and a back lock mechanism. The
            project focused on mechanical design, material behavior, component
            tolerances, and reliable locking performance.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
              <p className="text-zinc-400">
                Design and fabricate a functional folding knife that balances
                strength, repeatability, tolerances, and reliable locking behavior.
              </p>
            </div>
  
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
              <p className="text-zinc-400">
                SolidWorks, Magnacut steel, fabrication tools, mechanical design
                analysis, prototyping, and tolerance evaluation.
              </p>
            </div>
          </div>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">Design Process</h2>
            <p className="leading-8 text-zinc-300">
              I used SolidWorks to design the folding knife components and plan
              how the blade, handle, pivot, and locking mechanism would interact.
              The design required attention to component fit, rotation, clearances,
              and the geometry of the back lock mechanism.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">Fabrication & Testing</h2>
            <p className="leading-8 text-zinc-300">
              During fabrication, I evaluated material behavior, load paths, and
              component tolerances to support strength and repeatability. The
              project required connecting CAD design choices to real physical
              performance and adjusting the design based on fit and function.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
            <p className="leading-8 text-zinc-300">
              This project strengthened my understanding of mechanical tolerances,
              material selection, fabrication constraints, and functional
              mechanism design. It also helped me see how small geometry changes
              can affect reliability and user interaction.
            </p>
          </section>
        </section>
      </main>
    );
  }