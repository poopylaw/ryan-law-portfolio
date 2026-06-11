import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-sky-400/20 bg-[#05070a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="text-xl font-bold text-white transition hover:text-sky-300"
        >
          Ryan Law
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium text-zinc-300">
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