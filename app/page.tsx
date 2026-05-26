export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.16)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.32),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(15,23,42,0.7),transparent_35%)]" />

        <div className="absolute left-[-10%] top-[18%] h-48 w-[120%] rotate-[-8deg] rounded-full border border-sky-400/20" />
        <div className="absolute left-[-15%] top-[28%] h-64 w-[130%] rotate-[-8deg] rounded-full border border-sky-400/20" />
        <div className="absolute left-[-20%] top-[40%] h-80 w-[140%] rotate-[-8deg] rounded-full border border-sky-400/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_78%)]" />
      </div>

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-sky-400/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold">
            Ryan Law
          </a>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-300/80">
          Mechanical Engineering Portfolio
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Ryan Law
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Mechanical engineering transfer student focused on design,
          fabrication, robotics, embedded systems, and experimental testing. I
          build hands-on projects that combine CAD, coding, prototyping, and
          engineering analysis.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sky-400/40 bg-sky-400/10 px-6 py-3 font-medium text-white transition hover:bg-sky-400/20"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          About
        </p>

        <h2 className="mb-4 text-3xl font-bold">About Me</h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          I am an incoming mechanical engineering transfer student at UC Irvine
          with experience in robotics, CAD design, fabrication,
          microfabrication, programming, and embedded systems. My work focuses
          on turning ideas into functional systems through design iteration,
          testing, and hands-on engineering.
        </p>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Skills
        </p>

        <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h3 className="mb-3 text-xl font-semibold">Programming</h3>
            <p className="text-zinc-400">
              MATLAB, Python, Arduino, ESP32 programming, embedded control,
              sensor processing
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h3 className="mb-3 text-xl font-semibold">CAD & Design</h3>
            <p className="text-zinc-400">
              SolidWorks, Fusion 360, mechanical design, subsystem integration,
              design iteration
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h3 className="mb-3 text-xl font-semibold">
              Hardware & Fabrication
            </h3>
            <p className="text-zinc-400">
              Raspberry Pi, Sense HAT, 3D printing, laser cutting, sensors,
              cleanroom fabrication
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative z-10 mx-auto max-w-5xl px-6 py-20"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Experience
        </p>

        <h2 className="mb-8 text-3xl font-bold">Engineering Experience</h2>

        <div className="grid gap-6">
          <a
            href="/projects/ucla-cnsi"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 className="text-xl font-semibold">
                UCLA CNSI Microfabrication and Nanopatterning Program
              </h3>
              <p className="text-sm text-zinc-500">Oct. 2025 – Dec. 2025</p>
            </div>

            <p className="mb-4 text-zinc-400">
              Fabricated wafer-based microstructures using photolithography,
              thin-film deposition, wet etching, and electron-beam lithography
              in cleanroom environments.
            </p>

            <p className="text-sm text-zinc-500">
              Skills: cleanroom processing, microfabrication, microscopy,
              process optimization
            </p>
          </a>

          <a
            href="/projects/vex-robotics"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 className="text-xl font-semibold">
                Mt. SAC VEX Robotics Team Captain
              </h3>
              <p className="text-sm text-zinc-500">Dec. 2024 – Dec. 2025</p>
            </div>

            <p className="mb-4 text-zinc-400">
              Led mechanical design for a collegiate VEX robot using SolidWorks
              and Fusion 360 while managing team workflow, prototyping, testing,
              and subsystem integration.
            </p>

            <p className="text-sm text-zinc-500">
              Skills: robotics, CAD, leadership, fabrication, system integration
            </p>
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-5xl px-6 py-20"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Projects
        </p>

        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/projects/rc-vehicle-aerodynamics"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h3 className="mb-2 text-xl font-semibold">
              RC Vehicle Aerodynamics Testing & Optimization
            </h3>
            <p className="mb-4 text-zinc-400">
              Designed and built an RC car from scratch using SolidWorks,
              3D-printed components, and an ESP32-based control system.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: ESP32, SolidWorks, 3D printing, aerodynamics
            </p>
          </a>

          <a
            href="/projects/broncohacks-posture-device"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h3 className="mb-2 text-xl font-semibold">
              BroncoHacks Posture Device
            </h3>
            <p className="mb-4 text-zinc-400">
              Built a posture-monitoring prototype using a Raspberry Pi,
              distance sensor, breadboarded circuitry, Python interface, and
              3D-printed enclosure.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: Python, Raspberry Pi, sensors, rapid prototyping
            </p>
          </a>

          <a
            href="/projects/folding-knife-design"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Folding Knife Design & Fabrication
            </h3>
            <p className="mb-4 text-zinc-400">
              Designed and fabricated a folding knife using Magnacut steel,
              SolidWorks, fabrication methods, and a back lock mechanism.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: SolidWorks, fabrication, tolerances, mechanical design
            </p>
          </a>

          <a
            href="/projects/uas-drone-coding"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h3 className="mb-2 text-xl font-semibold">
              UAS Drone Competition Coding
            </h3>
            <p className="mb-4 text-zinc-400">
              Supported a UAS competition project through coding, system logic,
              and subsystem integration for mission-focused flight operations.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: programming, systems engineering, integration, testing
            </p>
          </a>

          <a
            href="/projects/raspberry-pi-sense-hat"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40 md:col-span-2"
          >
            <h3 className="mb-2 text-xl font-semibold">
              Raspberry Pi Sense HAT Controller
            </h3>
            <p className="mb-4 text-zinc-400">
              Developed a MATLAB-based control interface for an 8x8 LED matrix
              using joystick and accelerometer inputs.
            </p>
            <p className="text-sm text-zinc-500">
              Skills: MATLAB, Raspberry Pi, Sense HAT, sensor processing,
              embedded control
            </p>
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-5xl px-6 py-20"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Contact
        </p>

        <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>

        <p className="mb-6 max-w-2xl text-zinc-400">
          I am interested in mechanical design, robotics, embedded systems,
          fabrication, and hands-on engineering opportunities.
        </p>

        <div className="space-y-2 text-zinc-300">
          <p>Email: ryanlaw0329@gmail.com</p>
          <p>GitHub: github.com/poopylaw</p>
          <p>LinkedIn: Add your LinkedIn here</p>
        </div>
      </section>
    </main>
  );
}