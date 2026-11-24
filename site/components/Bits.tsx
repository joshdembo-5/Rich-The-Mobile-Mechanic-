import { Star } from "lucide-react";

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-flare ${className}`} role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={22} fill="currentColor" strokeWidth={0} aria-hidden />)}
    </span>
  );
}

/** Shown only in `next dev`, never in production. Flags content that still needs real data. */
export function DevFlag({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return <span className="ml-2 bg-bone px-1.5 py-0.5 text-[10px] font-bold text-black">{children}</span>;
}
