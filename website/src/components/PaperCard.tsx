export default function PaperCard({
  children,
  rotate = 1,
}: {
  children: React.ReactNode;
  rotate?: number;
}) {
  return (
    <div
      className="bg-stone-100 border border-stone-200 rounded-2xl p-8
                 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-xl"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
