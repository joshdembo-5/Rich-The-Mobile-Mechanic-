import Image from "next/image";
import Link from "next/link";
import { areas, site } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-asphalt">
      <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Rich the Mobile Mechanic, home">
          <Image src="/brand/logo.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="display text-[1.15rem] leading-[1.02] sm:text-xl">Rich the<br className="sm:hidden" /> Mobile Mechanic</span>
        </Link>
        <nav className="hidden items-center gap-8 text-[0.95rem] md:flex" aria-label="Main">
          <Link href="/#services" className="hover:underline underline-offset-4">Services</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/#faq" className="hover:underline underline-offset-4">FAQ</Link>
          <Link href="/policies" className="hover:underline underline-offset-4">Policies</Link>
          <a href={site.phoneHref} className="font-semibold">{site.phone}</a>
        </nav>
        <Link href={site.bookingAnchor} className="btn hidden !min-h-[44px] !py-1.5 md:inline-flex">Book an appointment</Link>
        <a href={site.phoneHref} className="btn btn-dark !min-h-[44px] !px-4 !py-1.5 md:hidden" aria-label={`Call ${site.phone}`}>Call</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-garage pb-28 pt-16 md:pb-14">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <p className="display text-[13.5vw] leading-[0.9] md:text-[10.5vw]">Rich the Mobile Mechanic</p>
        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <p className="max-w-xs text-mist">Mobile auto repair across Los Angeles. ASE Certified. Audi Master Certified. We come to you.</p>
          <div>
            <p className="font-semibold">Areas served</p>
            <p className="mt-2 text-mist">{areas.join(", ")} and surrounding areas</p>
          </div>
          <div>
            <p className="font-semibold">Call or message</p>
            <ul className="mt-2 space-y-1 text-mist">
              <li><a href={site.phoneHref} className="hover:text-bone">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-bone">{site.email}</a></li>
              <li>{site.hours}</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Follow</p>
            <ul className="mt-2 space-y-1 text-mist">
              <li><a href={site.instagram} rel="noopener" className="hover:text-bone">Instagram</a></li>
              <li><a href={site.tiktok} rel="noopener" className="hover:text-bone">TikTok</a></li>
              <li><Link href="/policies" className="hover:text-bone">Booking policy</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-sm text-mist">© {new Date().getFullYear()} {site.legalName}</p>
      </div>
    </footer>
  );
}

/** Mobile-only sticky CTA, always visible, bottom right. */
export function StickyCta() {
  return (
    <Link href={site.bookingAnchor} className="btn fixed bottom-4 right-4 z-50 !px-6 md:hidden" style={{ marginBottom: "env(safe-area-inset-bottom)" }}>
      Book an appointment
    </Link>
  );
}
