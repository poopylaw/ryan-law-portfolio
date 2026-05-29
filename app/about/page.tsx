import Navbar from "@/app/components/Navbar";
import PageBackground from "@/app/components/PageBackground";

export default function AboutPage() {
  return (
    <PageBackground>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-28">
        <a href="/" className="mb-8 inline-block text-sky-300/80 hover:text-white">
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          About
        </p>

        <h1 className="mb-6 text-5xl font-bold">About Me</h1>

        <p className="mb-6 max-w-3xl text-lg leading-8 text-zinc-300">
          I am an incoming mechanical engineering transfer student at UC Irvine
          with experience in robotics, CAD design, fabrication,
          microfabrication, programming, and embedded systems.
        </p>

        <p className="mb-6 max-w-3xl text-lg leading-8 text-zinc-300">
          My work focuses on turning ideas into functional systems through
          design iteration, testing, and hands-on engineering. I enjoy projects
          that combine mechanical design, coding, prototyping, and real-world
          problem solving.
        </p>

        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          I am especially interested in automotive engineering, aerodynamics,
          robotics, product design, and embedded systems.
        </p>
      </section>
    </PageBackground>
  );
}