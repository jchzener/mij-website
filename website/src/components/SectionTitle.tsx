// src/components/SectionTitle.tsx
export default function SectionTitle({ children }: { children: string }) {
  return <h2 className="font-serif text-2xl md:text-3xl mb-8">{children}</h2>;
}
