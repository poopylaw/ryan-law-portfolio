import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-sky-400/10 bg-[#05070a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] text-white transition hover:text-sky-300"
        >
          RYAN LAW
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-300">
          <Link href="/about" className="transition hover:text-sky-300">
            About
          </Link>

          <Link href="/experience" className="transition hover:text-sky-300">
            Experience
          </Link>

          <Link href="/projects" className="transition hover:text-sky-300">
            Projects
          </Link>

          <Link href="/skills" className="transition hover:text-sky-300">
            Skills
          </Link>

          <Link href="/contact" className="transition hover:text-sky-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}