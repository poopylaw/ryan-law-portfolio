import PageBackground from "@/app/components/PageBackground";

export default function BroncoHacksPostureDevicePage() {
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
          BroncoHacks Posture Device
        </h1>

        <p className="mb-10 text-lg leading-8 text-zinc-300">
          I built a posture-monitoring prototype using a Raspberry Pi, distance
          sensor, breadboarded circuitry, and a 3D-printed enclosure during a
          48-hour hackathon. The device was designed to provide sensor-based
          feedback and support better posture awareness.
        </p>

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
              3D printing, and rapid prototyping.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Design & Build Process</h2>
          <p className="leading-8 text-zinc-300">
            I integrated the Raspberry Pi with a distance sensor and
            breadboarded circuitry to collect sensor feedback. I also developed
            a Python-based interface to support device operation, user
            interaction, and feedback from the sensor system.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Prototype Development</h2>
          <p className="leading-8 text-zinc-300">
            Because the project was completed during a 48-hour hackathon, I had
            to balance functionality, reliability, and time. The enclosure was
            3D printed to hold the electronics and make the prototype feel more
            like a complete device instead of only a circuit demonstration.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This project strengthened my ability to combine hardware, software,
            and physical design under a short timeline. I gained more experience
            with sensors, Raspberry Pi development, Python logic, and
            prototype-focused engineering.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}