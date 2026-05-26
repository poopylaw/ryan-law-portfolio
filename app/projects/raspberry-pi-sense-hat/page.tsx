import PageBackground from "@/app/components/PageBackground";

const images = [
  {
    src: "/projects/sense-hat/sense-hat-joystick.png",
    alt: "Raspberry Pi Sense HAT LED matrix controlled using joystick mode",
    title: "Joystick Mode",
  },
  {
    src: "/projects/sense-hat/sense-hat-accelerometer.png",
    alt: "Raspberry Pi Sense HAT LED matrix controlled using accelerometer mode",
    title: "Accelerometer Mode",
  },
];

export default function RaspberryPiSenseHatPage() {
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
          Raspberry Pi Sense HAT Controller
        </h1>

        <p className="mb-10 max-w-4xl text-lg leading-8 text-zinc-300">
          I developed a MATLAB-based control interface for a Raspberry Pi Sense
          HAT 8x8 LED matrix using joystick and accelerometer inputs. The
          project combined embedded hardware, sensor processing, conditional
          logic, and display control.
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {images.map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-2xl border border-sky-400/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20 backdrop-blur"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-80 w-full object-cover transition duration-300 hover:scale-105"
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
          <h2 className="mb-4 text-3xl font-bold">Joystick Mode</h2>
          <p className="leading-8 text-zinc-300">
            In joystick mode, the Sense HAT joystick controlled how the image
            appeared on the 8x8 LED matrix. The program responded to directional
            joystick input and updated the display using MATLAB logic.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Accelerometer Mode</h2>
          <p className="leading-8 text-zinc-300">
            In accelerometer mode, the system used orientation data from the
            Sense HAT to adjust the image display. This allowed the LED matrix
            output to respond to physical movement of the Raspberry Pi.
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