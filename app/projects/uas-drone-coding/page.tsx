import PageBackground from "@/app/components/PageBackground";

export default function UasDroneCodingPage() {
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
          UAS Drone Competition
        </h1>

        <p className="mb-10 max-w-4xl text-lg leading-8 text-zinc-300">
          As Systems Engineer and 3D Design Engineer for the Mt. SAC UAV Team,
          I helped design, integrate, and validate an autonomous aerial
          platform for the 2026 California Unmanned Aerial Systems Competition
          (C-UASC). Our team was the highest-placing U.S. delegation, finishing
          2nd overall behind the Technical University of Denmark.
        </p>

        {/* Main Drone Image */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-sky-400/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <img
            src="/projects/uas-drone-coding/drone.png"
            alt="Mt. SAC UAV competition drone"
            className="h-96 w-full object-cover"
          />
        </div>

        {/* Competition Results */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
              Result
            </p>
            <h2 className="mb-3 text-3xl font-semibold">Top U.S. Team</h2>
            <p className="text-zinc-400">
              Highest-ranked U.S. team at the 2026 C-UASC competition.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
              Placement
            </p>
            <h2 className="mb-3 text-3xl font-semibold">2nd Overall</h2>
            <p className="text-zinc-400">
              Finished 2nd overall behind the Technical University of Denmark.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
              Precision
            </p>
            <h2 className="mb-3 text-3xl font-semibold">7–18 cm</h2>
            <p className="text-zinc-400">
              Reported waypoint tracking error range during competition
              performance.
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-4 text-3xl font-bold">Project Overview</h2>

          <div className="space-y-5 leading-8 text-zinc-300">
            <p>
              The Mt. SAC UAV Team developed an autonomous aerial system
              tailored to the demands of collegiate unmanned aerial systems
              competition. The aircraft needed to complete mission objectives
              involving autonomous flight, accurate waypoint tracking, payload
              deployment, and target-identification support.
            </p>

            <p>
              During the championship, the system demonstrated reliable mission
              execution across multiple competition categories, including
              accurate waypoint tracking, time trial performance, mechanical
              payload deployment, and target-identification support.
            </p>
          </div>
        </section>

        {/* My Role */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold">
            My Role as Systems Engineer & 3D Design Engineer
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              <h3 className="mb-2 text-xl font-semibold">
                CAD Modeling
              </h3>
              <p className="leading-7 text-zinc-400">
                Modeled the aircraft&apos;s payload mount and servo-actuated
                pin-release mechanism in SolidWorks to support a 160g payload
                delivery system.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              <h3 className="mb-2 text-xl font-semibold">
                Payload Drop Programming
              </h3>
              <p className="leading-7 text-zinc-400">
                Programmed the payload drop mechanism in C++ with a
                photoresistor sensor trigger, achieving a 5 ft target offset
                during fully autonomous deployment.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              <h3 className="mb-2 text-xl font-semibold">
                Systems Engineering
              </h3>
              <p className="leading-7 text-zinc-400">
                Coordinated subsystem integration between the payload
                mechanism, flight control, and mission software to keep the
                platform competition-ready.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              <h3 className="mb-2 text-xl font-semibold">
                Cross-Team Collaboration
              </h3>
              <p className="leading-7 text-zinc-400">
                Worked with software and flight operations leads to connect
                design choices with autonomous mission requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold">Technical Highlights</h2>

          <ul className="grid gap-4 leading-8 text-zinc-300 md:grid-cols-2">
            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Autonomous waypoint tracking with reported error range between 7
              and 18 centimeters.
            </li>

            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Reliable autonomous mission execution across multiple competition
              categories.
            </li>

            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Servo-actuated payload drop mechanism, programmed in C++,
              delivering payloads within 5 ft of target center, fully
              autonomously.
            </li>

            <li className="rounded-2xl border border-sky-400/10 bg-black/30 p-5">
              Target-identification support through integration with custom
              software and vision systems.
            </li>
          </ul>
        </section>

        {/* What I Learned */}
        <section className="mt-12 rounded-3xl border border-sky-400/10 bg-zinc-950/70 p-8 shadow-2xl shadow-sky-950/20 backdrop-blur">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>

          <p className="leading-8 text-zinc-300">
            This competition strengthened my experience with engineering
            teamwork, mechanical design for autonomous systems, embedded
            programming, physical system testing, and troubleshooting under
            competition pressure. It also showed me how mechanical design,
            software, flight operations, and testing must come together for a
            reliable real-world robotic system.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}