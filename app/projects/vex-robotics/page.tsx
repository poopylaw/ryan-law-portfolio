export default function VexRoboticsPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <a href="/" className="mb-8 inline-block text-zinc-400 hover:text-white">
            ← Back to Home
          </a>
  
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project
          </p>
  
          <h1 className="mb-6 text-5xl font-bold">VEX Robotics Design</h1>
  
          <p className="mb-10 text-lg leading-8 text-zinc-300">
            This project focuses on mechanical design, prototyping, testing, and
            iteration through VEX robotics. The goal was to improve robot
            performance by identifying design weaknesses and creating mechanical
            solutions that made the robot more reliable and competitive.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
              <p className="text-zinc-400">
                Improve robot performance through stronger mechanical design,
                better reliability, and more efficient movement during competition
                tasks.
              </p>
            </div>
  
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
              <p className="text-zinc-400">
                VEX robotics parts, mechanical assemblies, sensors, motors,
                testing, teamwork, and design iteration.
              </p>
            </div>
          </div>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">Process</h2>
            <p className="leading-8 text-zinc-300">
              I approached the robot as a system that needed constant testing and
              improvement. After identifying issues in performance, I worked on
              design changes, tested how those changes affected the robot, and
              continued refining the mechanism.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
            <p className="leading-8 text-zinc-300">
              This project taught me how important reliability, simplicity, and
              iteration are in mechanical engineering. I learned how to think
              through design tradeoffs, troubleshoot under pressure, and improve a
              system based on observed performance.
            </p>
          </section>
        </section>
      </main>
    );
  }