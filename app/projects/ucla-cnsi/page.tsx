import PageBackground from "@/app/components/PageBackground";

export default function UclaCnsiPage() {
  return (
    <PageBackground>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Experience
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          UCLA CNSI Microfabrication and Nanopatterning Program
        </h1>

        <p className="mb-10 text-lg leading-8 text-zinc-300">
          I participated in a microfabrication and nanopatterning program at the
          UCLA California NanoSystems Institute, where I worked with cleanroom
          fabrication processes and wafer-based microstructures.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Focus</h2>
            <p className="text-zinc-400">
              Fabricate wafer-based microstructures and improve pattern quality
              through process observation, iteration, and characterization.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools & Processes</h2>
            <p className="text-zinc-400">
              Photolithography, thin-film deposition, wet etching,
              electron-beam lithography, microscopy, and cleanroom safety.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Process Work</h2>
          <p className="leading-8 text-zinc-300">
            I fabricated wafer-based microstructures using cleanroom processes
            including photolithography, thin-film deposition, wet etching, and
            electron-beam lithography. I also evaluated factors such as resist
            thickness, exposure conditions, and process sequencing to improve
            repeatability.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Characterization</h2>
          <p className="leading-8 text-zinc-300">
            I characterized fabricated features under microscopy and used those
            observations to refine later wafer iterations. This helped connect
            fabrication decisions to visible pattern quality and process
            reliability.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This experience taught me how precision, contamination control,
            process sequencing, and documentation affect microfabrication
            outcomes. I also gained experience working efficiently with a team
            in a cleanroom environment while following safety standards.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}