"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Makes in-site links always land somewhere sensible:
 *  - "/#section" while on the home page scrolls to that section (even if the hash is already in the URL).
 *  - "/" while on the home page (logo) scrolls to the top.
 *  - Arriving on a page from elsewhere with a hash scrolls to that section; otherwise the page starts at the top.
 */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || window.location.pathname !== "/" || url.pathname !== "/") return;

      e.preventDefault();
      if (url.hash) {
        const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (el) {
          el.scrollIntoView({ behavior, block: "start" });
          history.replaceState(null, "", url.hash);
          return;
        }
      }
      window.scrollTo({ top: 0, behavior });
      history.replaceState(null, "", "/");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Route change: go to the hash target if there is one, else the top.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const t = window.setTimeout(() => {
      const el = id ? document.getElementById(decodeURIComponent(id)) : null;
      if (el) el.scrollIntoView({ block: "start" });
      else window.scrollTo({ top: 0 });
    }, 30);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
