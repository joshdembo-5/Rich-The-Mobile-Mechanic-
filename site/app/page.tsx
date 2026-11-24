import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { DevFlag, Stars } from "@/components/Bits";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { areas, faqs, makes, powertrains, reviews, services, site, workPhotos, type Service } from "@/config/site";

const wrap = "mx-auto w-full max-w-[1320px] px-5 md:px-8";

function ServiceRow({ service: sv }: { service: Service }) {
  const body = sv.included || sv.options || sv.note;
  const head = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="display text-3xl md:text-4xl">{sv.name}</h3>
        <p className="display flex shrink-0 items-center gap-3 text-3xl text-flare md:text-4xl">
          {sv.price}
          {body && <Plus className="plus shrink-0 text-bone transition-transform" aria-hidden />}
        </p>
      </div>
      <p className="mt-1 max-w-2xl text-mist md:text-lg">{sv.blurb}</p>
    </>
  );
  if (!body) return <div className="px-4 py-5 md:px-6 md:py-6">{head}</div>;
  return (
    <details className="group">
      <summary className="px-4 py-5 md:px-6 md:py-6" aria-label={`${sv.name}: details and options`}>{head}</summary>
      <div className="grid gap-8 px-4 pb-8 md:grid-cols-2 md:gap-12 md:px-6 md:pb-10">
        <div className="space-y-6">
          {sv.included && (
            <div>
              <h4 className="font-semibold">{sv.included.title}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-mist marker:text-flare">{sv.included.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          )}
          {sv.extra && (
            <div>
              <h4 className="font-semibold">{sv.extra.title}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-mist marker:text-flare">{sv.extra.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          )}
          {sv.time && !sv.options && <p className="text-mist">Typical time: {sv.time}</p>}
        </div>
        <div>
          {sv.options && (
            <>
              <h4 className="font-semibold">Options</h4>
              <ul className="mt-2 space-y-1">
                {sv.options.map((o) => (
                  <li key={o.name} className="flex items-baseline justify-between gap-4 bg-asphalt px-4 py-3">
                    <span>{o.name}{o.time && <span className="block text-sm text-mist">{o.time}</span>}</span>
                    <span className="font-semibold">{o.price}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {sv.note && <p className={`text-sm text-mist ${sv.options ? "mt-4" : ""}`}>{sv.note}</p>}
          <Link href="/#book" className="btn mt-5">Book an appointment</Link>
        </div>
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. HERO + LEAD FORM: black field with Rich, red field with the form; form above the fold */}
      <section className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="bg-black px-5 pb-8 pt-8 md:px-8 lg:pb-0 lg:pl-[max(2rem,calc((100vw-1320px)/2+2rem))] lg:pr-10 lg:pt-14">
          <div className="rise w-full">
            <h1 className="display text-[3.2rem] sm:text-[5.2rem] lg:text-[6.2rem]">
              Your mechanic comes to you.
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg sm:text-xl">
              Mobile auto repair across Los Angeles. Brakes, battery, check-engine light, A/C and more, fixed at your home or work.
            </p>
            <p className="mt-4 font-semibold">ASE Certified &middot; Audi Master Certified &middot; 15+ years &middot; Same-day service available</p>
          </div>
          <Image src="/brand/logo.png" alt="Rich, the mobile mechanic, in his work shirt and cap with crossed tools" width={1024} height={1024} priority className="rise mx-auto mt-4 hidden w-full max-w-[480px] lg:block" style={{ animationDelay: ".2s" }} />
        </div>

        <div id="book" className="bg-flare px-5 py-8 md:px-8 lg:flex lg:items-center lg:py-16 lg:pl-14 lg:pr-[max(2rem,calc((100vw-1320px)/2+2rem))]">
          <div className="rise w-full bg-asphalt p-5 sm:p-8" style={{ animationDelay: ".12s" }}>
            <h2 className="display text-4xl">Book an appointment</h2>
            <p className="mb-4 mt-2 text-mist">Rich texts you back to confirm your time.</p>
            <LeadForm idPrefix="hero" />
          </div>
        </div>

        <div className="bg-black lg:hidden">
          <Image src="/brand/logo.png" alt="Rich, the mobile mechanic, in his work shirt and cap with crossed tools" width={1024} height={1024} className="mx-auto h-auto w-full max-w-[380px]" />
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section id="about" className={`${wrap} grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-32`}>
        <Reveal>
          <h2 className="display text-4xl sm:text-5xl lg:text-7xl">The shop that drives to you</h2>
          <p className="mt-7 max-w-xl text-xl">
            Rich&rsquo;s The Mechanic Mobile Service delivers on-the-go auto repair without the hassle. The goal is simple: take the stress out of car maintenance by bringing expert help directly to you.
          </p>
          <p className="mt-4 max-w-xl text-mist">
            With over 15 years of automotive experience, Rich is ASE Certified and Audi Master Certified. He focuses on work that can be done right where the car is parked, which means faster service, fair pricing and no waiting around at a traditional shop.
          </p>
          <Link href="/about" className="btn btn-dark mt-8">More about Rich</Link>
        </Reveal>
        <Reveal delay={90}>
          <Image src="/brand/engine.png" alt="Gloved hand turning a ratchet on a car engine" width={668} height={440} className="h-auto w-full" />
        </Reveal>
      </section>

      {/* 3. WORK PHOTOS (6) */}
      <section className="bg-garage py-20 md:py-32">
        <div className={wrap}>
          <Reveal><h2 className="display text-5xl sm:text-6xl lg:text-7xl">Recent work</h2></Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {workPhotos.map((p, i) => (
              <li key={p.caption} className="relative aspect-[4/3] overflow-hidden bg-steel">
                {p.src ? (
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                ) : (
                  <div className="absolute inset-0" role="img" aria-label={p.alt} style={{ background: i % 2 ? "#232326" : "#1e1e21" }} />
                )}
                <p className="absolute bottom-0 left-0 bg-asphalt px-3 py-2 text-sm font-semibold">{p.caption}<DevFlag>placeholder photo</DevFlag></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. REVIEWS: three rows, five stars each */}
      <section id="reviews" className="py-20 md:py-32">
        <div className={wrap}>
          <Reveal><h2 className="display text-5xl sm:text-6xl lg:text-7xl">What drivers say</h2></Reveal>
        </div>
        <div className="mt-10">
          {reviews.map((r, i) => (
            <div key={i} className={i % 2 === 0 ? "bg-garage" : "bg-steel"}>
              <Reveal className={`${wrap} grid gap-4 py-9 md:grid-cols-[260px_1fr] md:gap-12 md:py-12`}>
                <div>
                  <Stars />
                  <p className="mt-3 text-lg font-semibold">{r.name}<DevFlag>placeholder review</DevFlag></p>
                  <p className="text-mist">{r.service}, {r.area}</p>
                </div>
                <blockquote className="max-w-3xl text-xl leading-snug md:text-2xl">&ldquo;{r.text}&rdquo;</blockquote>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES: a price list */}
      <section id="services" className="bg-garage py-20 md:py-32">
        <div className={wrap}>
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl lg:text-7xl">Services and prices</h2>
            <p className="mt-5 max-w-xl text-xl">Tap any service for what&rsquo;s included, options and prices. Prices are labor rates, and you get a full quote including parts before any work begins.</p>
          </Reveal>
          <ul className="mt-12">
            {services.map((sv, i) => (
              <li key={sv.name} className={i % 2 ? "bg-garage" : "bg-steel"}>
                <Reveal>
                  <ServiceRow service={sv} />
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-start gap-4 bg-flare p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <p className="display text-3xl md:text-4xl">Not sure what it needs? Book and describe it.</p>
            <Link href="/#book" className="btn btn-light shrink-0">Book an appointment</Link>
          </div>
        </div>
      </section>

      {/* Makes + areas, with a real picture */}
      <section className="py-20 md:py-32">
        <div className={`${wrap} grid gap-12 md:grid-cols-2 md:gap-16`}>
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl">All makes and models</h2>
            <p className="mt-5 text-xl leading-relaxed">{makes.join(", ")}, and more.</p>
            <p className="mt-4 text-mist">{powertrains.join(", ")}.</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display text-4xl sm:text-5xl">Where we work</h2>
            <p className="mt-5 text-xl leading-relaxed">{areas.join(", ")} and surrounding areas.</p>
            <p className="mt-4 text-mist">At your home, your office or wherever the car is parked.</p>
          </Reveal>
        </div>
        <div className={`${wrap} mt-16`}>
          <Image src="/brand/la-cars.png" alt="An Audi, Mercedes G-Class, Toyota Tacoma and Honda parked together against the Los Angeles skyline at dusk" width={1242} height={300} sizes="(min-width:1320px) 1256px, 100vw" className="h-auto w-full" />
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className={`${wrap} pb-20 md:pb-32`}>
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl">Questions, answered</h2>
          <p className="text-xl">Still wondering? Call <a href={site.phoneHref} className="font-semibold underline underline-offset-4">{site.phone}</a>.</p>
        </Reveal>
        <div className="mt-10 grid items-start gap-2 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="bg-garage px-5">
              <summary className="flex min-h-[64px] items-center justify-between gap-4 py-3 text-lg font-semibold">
                {f.q}
                <Plus className="plus shrink-0 text-flare transition-transform" aria-hidden />
              </summary>
              <p className="max-w-2xl pb-5 pr-8 text-mist">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-flare py-16 md:py-24">
        <div className={`${wrap} flex flex-col items-start justify-between gap-8 md:flex-row md:items-center`}>
          <h2 className="display max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Car trouble? Don&rsquo;t wait.</h2>
          <Link href="/#book" className="btn btn-light shrink-0">Book an appointment</Link>
        </div>
      </section>
    </>
  );
}
