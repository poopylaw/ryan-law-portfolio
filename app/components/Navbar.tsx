export default function Navbar() {
    return (
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-sky-400/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="font-semibold">
            Ryan Law
          </a>
        </div>
      </nav>
    );
  }