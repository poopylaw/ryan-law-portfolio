import PageBackground from "@/app/components/PageBackground";

const images = [
  {
    src: "/projects/broncohacks/broncohacks-interface.png",
    alt: "BroncoHacks posture device interface dashboard",
    title: "App Interface",
  },
  {
    src: "/projects/broncohacks/broncohacks-enclosure.png",
    alt: "3D printed enclosure design for posture device",
    title: "3D-Printed Enclosure Design",
  },
  {
    src: "/projects/broncohacks/broncohacks-circuit.png",
    alt: "Raspberry Pi and breadboarded distance sensor circuit",
    title: "Sensor Circuit Prototype",
  },
];

export default function BroncoHacksPostureDevicePage() {
  return (
    <PageBackground>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Project
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          BroncoHacks Posture Device
        </h1>

        <p className="mb-10 max-w-4xl text-lg leading-8 text-zinc-300">
          I built a posture-monitoring prototype using a Raspberry Pi, distance
          sensor, breadboarded circuitry, Python interface, and 3D-printed
          enclosure during a 48-hour hackathon. The device was designed to
          encourage better posture through sensor-based feedback and user
          interaction.
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
              Create a working prototype that uses sensor input to detect
              posture-related distance changes and provide feedback to the user.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
            <p className="text-zinc-400">
              Python, Raspberry Pi, distance sensor, breadboarded circuitry,
              3D printing, interface design, and rapid prototyping.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Software Interface</h2>
          <p className="leading-8 text-zinc-300">
            I developed a Python-based interface to support device operation,
            sensor feedback, posture logging, and user interaction. The
            interface helped turn the hardware prototype into a more complete
            user-facing system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Hardware Prototype</h2>
          <p className="leading-8 text-zinc-300">
            I connected the Raspberry Pi with a distance sensor and breadboarded
            circuitry to detect changes in user position. The sensor circuit
            provided the input needed for posture monitoring and feedback.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Enclosure Design</h2>
          <p className="leading-8 text-zinc-300">
            I designed a 3D-printed enclosure to house the electronics and make
            the prototype feel more like a complete product. This added a
            fabrication and product-design component to the project.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This project strengthened my ability to combine hardware, software,
            and physical design under a short timeline. I gained more experience
            with sensors, Raspberry Pi development, Python logic, interface
            design, and prototype-focused engineering.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}