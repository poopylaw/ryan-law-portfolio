import PageBackground from "@/app/components/PageBackground";

const images = [
  {
    src: "/projects/tiny-house/tiny-house-setup.png",
    alt: "Tiny house heat transfer physical test chamber setup",
    title: "Physical Test Chamber",
  },
  {
    src: "/projects/tiny-house/tiny-house-data-collection.png",
    alt: "Tiny house data collection setup with laptop and sensors",
    title: "Data Collection Setup",
  },
  {
    src: "/projects/tiny-house/tiny-house-temperature-graph.png",
    alt: "Temperature graph showing inside, outside, and normalized outside temperature over 48 hours",
    title: "48-Hour Temperature Data",
  },
];

export default function TinyHouseHeatTransferPage() {
  return (
    <PageBackground>
      <section className="mx-auto max-w-5xl px-6 py-20">
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

        <h1 className="mb-6 text-5xl font-bold">
          Tiny House Heat Transfer Simulation
        </h1>

        <p className="mb-10 max-w-4xl text-lg leading-8 text-zinc-300">
          I used MATLAB and Simulink to model heat transfer and energy usage in
          a tiny house system. The project combined a physical test chamber,
          48-hour temperature data collection, and simulation-based analysis to
          compare how insulation and housing size affect heating cost and
          thermal performance.
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-sky-400/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20 backdrop-blur"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-sky-300/80">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
            <p className="text-zinc-400">
              Evaluate the cost-effectiveness of heating different structures,
              including a typical California home, a tiny house with fiberglass
              insulation, and a tiny house with Styrofoam insulation.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
            <p className="text-zinc-400">
              MATLAB, Simulink, temperature probes, physical modeling,
              insulation testing, thermal modeling, and engineering analysis.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Physical Model</h2>
          <p className="leading-8 text-zinc-300">
            The physical model used a 1x1x1 meter wooden frame with Styrofoam
            insulation, an acrylic door, temperature probes, and a jar of water
            inside the chamber to simulate heat storage. One probe measured the
            inside temperature, while another measured outdoor temperature away
            from direct sunlight.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Data Collection</h2>
          <p className="leading-8 text-zinc-300">
            The model was placed outside for 48 hours to collect indoor and
            outdoor temperature data. The collected data was used to compare the
            physical behavior of the insulated chamber with Simulink thermal
            models.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Simulation Approach</h2>
          <p className="leading-8 text-zinc-300">
            I used MATLAB and Simulink to modify parameters such as insulation
            type, wall thickness, window material, heater temperature, and
            outdoor temperature behavior. The model compared heating cost and
            thermal response for different housing and insulation cases.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Result</h2>
          <p className="leading-8 text-zinc-300">
            The simulation showed that the Styrofoam-insulated tiny house had
            the lowest estimated annual heating cost compared to a standard
            insulated tiny house and a typical California home. This supported
            the conclusion that insulation material has a major effect on heat
            retention and energy efficiency.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This project strengthened my understanding of heat transfer,
            physical testing, simulation-based engineering analysis, and
            parameter sensitivity. It also helped me connect real sensor data
            with MATLAB and Simulink modeling.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}