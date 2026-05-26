import PageBackground from "@/app/components/PageBackground";

export default function VexRoboticsPage() {
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
          Mt. SAC VEX Robotics Team Captain
        </h1>

        <p className="mb-10 text-lg leading-8 text-zinc-300">
          I served as team captain for a collegiate VEX Robotics team, leading
          mechanical design, CAD work, subsystem iteration, fabrication planning,
          and team coordination. The project focused on building a competitive
          robot through prototyping, testing, and continuous improvement.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Role</h2>
            <p className="text-zinc-400">
              Team captain responsible for mechanical design direction, subteam
              workflow, build schedules, and mentoring newer members.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
            <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
            <p className="text-zinc-400">
              SolidWorks, Fusion 360, VEX robotics components, 3D-printed
              parts, fabrication planning, prototyping, and iterative testing.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Mechanical Design</h2>
          <p className="leading-8 text-zinc-300">
            I led the design of robot subsystems using SolidWorks and Fusion
            360. The work involved creating and revising CAD models, planning
            fabrication, integrating 3D-printed components, and improving
            geometry based on testing results.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">Leadership & Teamwork</h2>
          <p className="leading-8 text-zinc-300">
            As team captain, I managed subteam workflow, task allocation, and
            build schedules during competition preparation. I also mentored
            newer members in CAD, fabrication, and system integration.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
          <p className="leading-8 text-zinc-300">
            This experience strengthened my mechanical design process,
            leadership skills, and ability to troubleshoot under real project
            constraints. I learned how to balance performance, reliability,
            manufacturability, and team coordination.
          </p>
        </section>
      </section>
    </PageBackground>
  );
}