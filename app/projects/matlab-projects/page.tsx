export default function MatlabProjectsPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <a href="/" className="mb-8 inline-block text-zinc-400 hover:text-white">
            ← Back to Home
          </a>
  
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project
          </p>
  
          <h1 className="mb-6 text-5xl font-bold">MATLAB Diffusion Simulation</h1>
  
          <p className="mb-10 text-lg leading-8 text-zinc-300">
            This project used MATLAB to simulate particle diffusion across a set
            of connected boxes. The simulation modeled how particles spread over
            time based on movement probability and visualized the distribution
            using animated bar graphs.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Goal</h2>
              <p className="text-zinc-400">
                Model how particles move from an initial box into neighboring
                boxes over time and observe how the distribution changes toward a
                more even spread.
              </p>
            </div>
  
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-3 text-2xl font-semibold">Tools Used</h2>
              <p className="text-zinc-400">
                MATLAB, arrays, loops, probability, bar graphs, simulation, and
                data visualization.
              </p>
            </div>
          </div>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">Process</h2>
            <p className="leading-8 text-zinc-300">
              I created a model with 1,000 particles starting in one box and used
              a movement probability to calculate how many particles moved left,
              moved right, or stayed in place during each time step. The algorithm
              updated the number of particles in each box over 250 time intervals
              and displayed the changing distribution with an animated bar graph.
            </p>
          </section>
  
          <section className="mt-12">
            <h2 className="mb-4 text-3xl font-bold">What I Learned</h2>
            <p className="leading-8 text-zinc-300">
              This project helped me understand how programming can represent a
              physical process. I practiced using arrays, loops, probability, and
              visualization to model diffusion and interpret how a system changes
              over time.
            </p>
          </section>
        </section>
      </main>
    );
  }