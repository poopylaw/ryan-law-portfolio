import PageBackground from "@/app/components/PageBackground";

export default function FoldingKnifeDesignPage() {
  return (
    <PageBackground>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-wrap gap-4">
          <a href="/" className="inline-block text-sky-300/80 hover:text-white">
            ← Back to Home
          </a>

          <a
            href="/projects"
            className="inline-block text-sky-300/80 hover:text-white"
          >
            ← Back to Projects
          </a>
        </div>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Project
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-6xl">
          Folding Knife Design & Fabrication
        </h1>

        <p className="mb-12 max-w-5xl text-lg leading-8 text-zinc-300">
          I designed and fabricated a functional folding knife using MagnaCut
          steel, SolidWorks, wood handle scales, fabrication methods, and a back
          lock mechanism. The project focused on mechanical design, material
          behavior, component tolerances, fabrication accuracy, and reliable
          locking performance.
        </p>

        {/* Image Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-sky-400/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <img
              src="/projects/folding-knife-design/knife-main.png"
              alt="Finished folding knife"
              className="h-80 w-full object-cover"
            />
            <p className="px-6 py-5 text-lg text-sky-300">
              Finished Folding Knife
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-400/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <img
              src="/projects/folding-knife-design/knife-fabrication.png"
              alt="Folding knife fabrication process"
              className="h-80 w-full object-cover"
            />
            <p className="px-6 py-5 text-lg text-sky-300">
              Fabrication Process
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-400/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <img
              src="/projects/folding-knife-design/knife-parts.png"
              alt="Folding knife parts before assembly"
              className="h-80 w-full object-cover"
            />
            <p className="px-6 py-5 text-lg text-sky-300">
              Blade, Liners, and Handle Scales
            </p>
          </div>
        </div>

        {/* Goal and Tools */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-5 text-3xl font-bold">Goal</h2>
            <p className="text-lg leading-8 text-zinc-400">
              Design and fabricate a functional folding knife that balances
              blade strength, handle ergonomics, repeatable motion, component
              tolerances, and reliable back lock engagement.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-5 text-3xl font-bold">Tools Used</h2>
            <p className="text-lg leading-8 text-zinc-400">
              SolidWorks, MagnaCut steel, wood handle scales, fabrication tools,
              mechanical design analysis, prototyping, fit testing, and
              tolerance evaluation.
            </p>
          </div>
        </div>

        {/* Design Process */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-4 text-3xl font-bold">Design Process</h2>

          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              I used SolidWorks to design the folding knife components and plan
              how the blade, handle, pivot, liners, and locking mechanism would
              interact. The design required attention to component fit, blade
              rotation, clearances, and the geometry of the back lock mechanism.
            </p>

            <p>
              Since the knife depends on moving parts, small geometry changes
              could affect how smoothly the blade rotates and how securely the
              locking system engages. I focused on making sure the CAD model
              could translate into a physical mechanism that could actually be
              fabricated and assembled.
            </p>
          </div>
        </section>

        {/* Fabrication and Testing */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-4 text-3xl font-bold">Fabrication & Testing</h2>

          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              During fabrication, I shaped and fit the blade, liners, and wood
              handle scales while checking how the parts aligned during
              assembly. The project required connecting CAD design choices to
              real physical performance and adjusting the design based on fit,
              motion, and locking behavior.
            </p>

            <p>
              Testing focused on checking the fit between components, the motion
              of the blade around the pivot, and the reliability of the back
              lock mechanism. This helped me understand how tolerance stack-up,
              surface finish, and small alignment differences can affect a
              mechanical assembly.
            </p>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold">Technical Highlights</h2>

          <ul className="grid gap-4 text-lg leading-8 text-zinc-300 md:grid-cols-2">
            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Designed the blade, handle, pivot area, liners, and back lock
              interaction in SolidWorks.
            </li>

            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Considered component clearances and tolerances for smooth folding
              motion.
            </li>

            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Evaluated MagnaCut steel behavior and fabrication constraints for
              a functional blade.
            </li>

            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Connected CAD decisions to physical fit, locking performance, and
              user interaction.
            </li>
          </ul>
        </section>

        {/* What I Learned */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>

          <p className="text-lg leading-8 text-zinc-300">
            This project strengthened my understanding of mechanical tolerances,
            material selection, fabrication constraints, and functional
            mechanism design. It also helped me see how small geometry changes
            can affect reliability, fit, motion, and user interaction in a real
            mechanical product.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}