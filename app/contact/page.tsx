import Navbar from "@/app/components/Navbar";
import PageBackground from "@/app/components/PageBackground";

export default function ContactPage() {
  return (
    <PageBackground>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-28">
        <a
          href="/"
          className="mb-8 inline-block text-sky-300/80 hover:text-white"
        >
          ← Back to Home
        </a>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/70">
          Contact
        </p>

        <h1 className="mb-6 text-5xl font-bold">Contact Me</h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
          I am interested in mechanical design, robotics, embedded systems,
          fabrication, automotive engineering, aerodynamics, and hands-on
          engineering opportunities.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="mailto:ryanlaw0329@gmail.com"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">Email</h2>
            <p className="text-zinc-400">ryanlaw0329@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ryan-law-020642260/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">LinkedIn</h2>
            <p className="text-zinc-400">linkedin.com/in/ryan-law-020642260</p>
          </a>

          <a
            href="https://github.com/poopylaw"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">GitHub</h2>
            <p className="text-zinc-400">github.com/poopylaw</p>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-sky-400/10 bg-zinc-950/70 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h2 className="mb-2 text-xl font-semibold">Resume</h2>
            <p className="text-zinc-400">View my resume PDF</p>
          </a>
        </div>
      </section>
    </PageBackground>
  );
}