export function SectionTitle({ children }) {
  return (
    <div className="mb-5 flex items-center gap-4 border-b border-black pb-3">
      <h2 className="font-serif text-sm font-bold tracking-[0.2em]">
        {children}
      </h2>

      <div className="h-px flex-1 bg-black/20" />
    </div>
  );
}
