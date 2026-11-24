import type { Metadata } from "next";
import Link from "next/link";
import { policies } from "@/config/site";

export const metadata: Metadata = {
  title: "Booking & Cancellation Policy",
  description: "Deposit, cancellation, no-show and mobile service policies for Rich the Mobile Mechanic.",
};

export default function Policies() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-5 py-14 md:px-8 md:py-24">
      <h1 className="display text-[3.2rem] sm:text-7xl lg:text-8xl">Booking policy</h1>
      <p className="mt-6 max-w-2xl text-xl">We value your time and ask that you respect ours. By booking, you agree to these terms.</p>
      <div className="mt-12 grid gap-2 md:grid-cols-2">
        {policies.map((p, i) => (
          <div key={p.title} className={`p-7 md:p-9 ${i % 3 === 0 ? "bg-steel" : "bg-garage"}`}>
            <h2 className="display text-3xl md:text-4xl">{p.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-flare">
              {p.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <Link href="/#book" className="btn mt-10">Book an appointment</Link>
    </section>
  );
}
