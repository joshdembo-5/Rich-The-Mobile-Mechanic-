import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areas, powertrains, site } from "@/config/site";

export const metadata: Metadata = {
  title: "About Rich",
  description: "Meet Rich: ASE Certified, Audi Master Certified mobile mechanic with 15+ years of experience serving Los Angeles.",
};

const wrap = "mx-auto w-full max-w-[1320px] px-5 md:px-8";
const focus = ["Diagnostics", "Oil changes", "Brakes", "Battery service", "Tune-ups", "Roadside assistance", "Lockouts", "Fuel delivery", "Pre-purchase inspections"];

export default function About() {
  return (
    <>
      <section className={`${wrap} grid items-center gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:py-28`}>
        <div>
          <h1 className="display text-[3.2rem] sm:text-7xl lg:text-8xl">About Rich, the mobile mechanic</h1>
          <p className="mt-7 max-w-2xl text-xl">
            Rich&rsquo;s The Mechanic Mobile Service delivers on-the-go auto repair without the hassle: diagnostics, brakes, batteries and more, done at your home or work. The goal is simple: take the stress out of car maintenance by bringing expert help directly to you.
          </p>
          <p className="mt-4 max-w-2xl text-mist">
            With over 15 years of automotive experience, Rich is ASE Certified and Audi Master Certified, and works on all makes and models, from {powertrains.join(", ").toLowerCase()} vehicles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#book" className="btn">Book an appointment</Link>
            <a href={site.phoneHref} className="btn btn-dark">Call {site.phone}</a>
          </div>
        </div>
        <Image src="/brand/about-rich.png" alt="Rich, the mobile mechanic, beside a car" width={640} height={640} className="mx-auto h-auto w-full max-w-md" priority />
      </section>

      <section className="bg-garage py-16 md:py-28">
        <div className={`${wrap} grid gap-14 md:grid-cols-2 md:gap-16`}>
          <div>
            <h2 className="display text-4xl sm:text-5xl">What Rich focuses on</h2>
            <p className="mt-5 max-w-xl text-lg">Work that can be done right where your car is parked. That means faster service, fair pricing and reliable repairs without the delays of a traditional shop.</p>
            <p className="mt-5 max-w-xl text-mist">{focus.join(", ")}.</p>
          </div>
          <div>
            <h2 className="display text-4xl sm:text-5xl">Where he works</h2>
            <p className="mt-5 max-w-xl text-lg">{areas.join(", ")} and surrounding areas. Home, work, or anywhere the car is parked. Same-day service is often available.</p>
            <h2 className="display mt-12 text-4xl sm:text-5xl">What he won&rsquo;t take on</h2>
            <p className="mt-5 max-w-xl text-mist">Engine swaps, transmission rebuilds, major internal engine repairs, bodywork and heavy shop-only repairs. If a job needs a shop, Rich will tell you.</p>
          </div>
        </div>
      </section>

      <section className="bg-flare py-16 md:py-24">
        <div className={`${wrap} flex flex-col items-start justify-between gap-8 md:flex-row md:items-center`}>
          <div>
            <h2 className="display text-5xl sm:text-6xl">Ready when you are</h2>
            <p className="mt-3 text-lg">Read the <Link href="/policies" className="underline underline-offset-4">booking policy</Link>, or just pick a time.</p>
          </div>
          <Link href="/#book" className="btn btn-light shrink-0">Book an appointment</Link>
        </div>
      </section>
    </>
  );
}
