import PageBackground from "@/app/components/PageBackground";

export default function RaspberryPiSenseHatPage() {
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
          Raspberry Pi Sense HAT Controller
        </h1>

        <p className="mb-10 text-lg leading-8 text-zinc-300">
          I developed a MATLAB-based control interface for a Raspberry Pi Sense
          HAT 8x8 LED matrix using joystick and accelerometer inputs. The
          project combined embedded hardware, sensor processing, conditional
          logic, and display control.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
            <p className="text-zinc-400">
              Create an interactive controller that displays an image on the
              Sense HAT LED matrix and responds to joystick and accelerometer
              input.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
            <p className="text-zinc-400">
              MATLAB, Raspberry Pi, Sense HAT, joystick input, accelerometer
              input, conditional logic, and LED matrix display control.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Control Modes</h2>
          <p className="leading-8 text-zinc-300">
            The controller used joystick and accelerometer inputs to control how
            an image appeared on the Sense HAT display. The system used
            conditional logic to determine which input mode was active and how
            the display should respond.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Embedded System Design</h2>
          <p className="leading-8 text-zinc-300">
            This project required coordinating software logic with physical
            sensor input. I worked with the Raspberry Pi and Sense HAT hardware
            to process input signals and update the 8x8 LED matrix display in
            response to user interaction.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            I gained experience with embedded mechatronic systems, MATLAB
            hardware control, sensor-driven logic, and real-time display
            interaction. The project helped me connect coding with physical
            hardware behavior.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}