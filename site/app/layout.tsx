import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Footer, Header, StickyCta } from "@/components/Chrome";
import { ScrollManager } from "@/components/ScrollManager";
import { site } from "@/config/site";
import "./globals.css";

const display = Barlow_Condensed({ variable: "--rm-display", subsets: ["latin"], weight: ["700", "800"], display: "swap" });
const body = Barlow({ variable: "--rm-body", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Rich the Mobile Mechanic | Mobile Auto Repair in Los Angeles", template: `%s | ${site.name}` },
  description: "Mobile mechanic in Los Angeles. Brakes, oil changes, diagnostics, batteries, A/C and more at your home or work. Same-day service available. Book online.",
  applicationName: site.name,
};

export const viewport: Viewport = { themeColor: "#0b0b0c", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen">
        <ScrollManager />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
