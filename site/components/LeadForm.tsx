"use client";

import { useState } from "react";
import { requestOptions, site } from "@/config/site";

/**
 * Lead capture form.
 * - If NEXT_PUBLIC_GHL_FORM_URL is set, the real GoHighLevel form is embedded in an iframe.
 * - Otherwise a placeholder form with the same 4 fields is shown (it does NOT submit anywhere).
 *   When building the GHL form, create these fields: Name, Phone, Email, "What do you need help with?" (dropdown).
 */
const OTHER = "Something else / not sure";

export function LeadForm({ idPrefix = "lead" }: { idPrefix?: string }) {
  const [sent, setSent] = useState(false);
  const [request, setRequest] = useState("");
  const other = request === OTHER;

  if (site.ghlFormUrl) {
    return (
      <iframe
        src={site.ghlFormUrl}
        title="Book an appointment"
        className="h-[560px] w-full border-0"
        loading="lazy"
      />
    );
  }

  if (sent) {
    return (
      <div role="status" className="py-10 text-center">
        <p className="display text-3xl">Got it.</p>
        <p className="mt-3 text-mist">Placeholder form: connect GoHighLevel to receive real requests.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      {/* GHL FORM PLACEHOLDER */}
      <div>
        <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-sm text-bone">Name</label>
        <input id={`${idPrefix}-name`} name="name" autoComplete="name" required className="field" placeholder="Your name" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-sm text-bone">Phone</label>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" required className="field" placeholder="(310) 000-0000" />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-1 block text-sm text-bone">Email</label>
          <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" required className="field" placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-request`} className="mb-1 block text-sm text-bone">What do you need help with?</label>
        <select id={`${idPrefix}-request`} name="request" required value={request} onChange={(e) => setRequest(e.target.value)} className="field">
          <option value="" disabled>Choose one</option>
          {requestOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      {other && (
        <div className="rise">
          <label htmlFor={`${idPrefix}-details`} className="mb-1 block text-sm text-bone">Describe your problem</label>
          <textarea id={`${idPrefix}-details`} name="details" required rows={3} className="field resize-y" placeholder="What's the car doing? Noises, warning lights, when it started…" />
        </div>
      )}
      <button type="submit" className="btn w-full">Book an appointment</button>
      <p className="text-center text-sm text-mist">$25 deposit holds your time and goes toward your total.</p>
    </form>
  );
}
