// src/components/PrimaryButton.tsx
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  children: React.ReactNode;
  className?: string;
};

export default function PrimaryButton({ to, children, className }: Props) {
  const base =
    "bg-stone-900 text-white px-6 py-3 rounded-xl text-sm hover:bg-stone-800 transition active:translate-y-px";

  if (to) {
    return (
      <Link to={to} className={`${base} ${className ?? ""}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${className ?? ""}`}>{children}</button>;
}
