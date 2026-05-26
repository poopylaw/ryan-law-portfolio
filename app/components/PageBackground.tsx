export default function PageBackground({
    children,
  }: {
    children: React.ReactNode;
  }) {
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
  
        <div className="relative z-10">{children}</div>
      </main>
    );
  }