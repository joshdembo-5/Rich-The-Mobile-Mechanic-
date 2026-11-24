// Single source of truth for business info + page content.
// Items marked PLACEHOLDER must be replaced with real data from Rich before launch.

export const site = {
  name: "Rich the Mobile Mechanic",
  legalName: "Rich's The Mechanic Mobile Service",
  url: "https://www.richsmobileauto.com",
  tagline: "We come to you.",
  // PLACEHOLDER: real phone not public on current site
  phone: "(310) 555-0142",
  phoneHref: "tel:+13105550142",
  // PLACEHOLDER
  email: "hello@richsmobileauto.com",
  hours: "Mon–Sat · 7am–7pm", // PLACEHOLDER
  instagram: "https://www.instagram.com/rich_the_mobile_mechanic",
  instagramHandle: "@rich_the_mobile_mechanic",
  tiktok: "https://www.tiktok.com/@richthemobilemechanic",
  // Where "Book an appointment" goes when the visitor is not on the home page form.
  bookingAnchor: "/#book",
  // Set NEXT_PUBLIC_GHL_FORM_URL (GoHighLevel form embed src) to replace the placeholder form.
  ghlFormUrl: process.env.NEXT_PUBLIC_GHL_FORM_URL ?? "",
};

export const areas = ["Los Angeles", "Long Beach", "Santa Monica", "Pasadena", "Anaheim"];

export const makes = [
  "Audi", "BMW", "Mercedes-Benz", "Lexus", "Acura", "Infiniti",
  "Toyota", "Honda", "Nissan", "Hyundai", "Kia", "Mazda",
  "Chevrolet", "Ford", "GMC", "Ram", "Jeep", "Chrysler",
  "Volkswagen", "Subaru", "Volvo", "Land Rover", "Jaguar", "Porsche",
];

export const powertrains = ["Gas", "Diesel", "Hybrid", "Plug-in hybrid", "Electric (EV)"];

export type ServiceOption = { name: string; price: string; time: string };
export type Service = {
  name: string;
  price: string; // short label shown on the collapsed row
  blurb: string;
  time?: string;
  included?: { title: string; items: string[] };
  extra?: { title: string; items: string[] };
  options?: ServiceOption[];
  note?: string;
};

const laborNote = "Prices listed are labor rates only and do not include the cost of parts. Parts prices vary depending on the vehicle make, model and repair needed. A full quote including parts will be provided before any work begins. Mobile travel fees may apply.";
const varyNote = "Final pricing may vary based on vehicle make, model, parts and repair complexity. Mobile travel fees may apply.";

// Prices and details from Rich's Square booking pages (labor rates). A few differ from his Instagram flyer: see source-notes.md.
export const services: Service[] = [
  {
    name: "Oil changes", price: "$85", time: "1 hr",
    blurb: "On-site oil change at your home, work or roadside. No shop visit.",
    included: { title: "What's included", items: ["Engine oil replacement (synthetic oil only)", "New oil filter installation", "Fluid level check (coolant, brake fluid, washer fluid)", "Basic vehicle inspection", "Proper oil disposal"] },
    note: laborNote,
  },
  {
    name: "Brake service", price: "From $200 / axle", time: "30 min+",
    blurb: "Mobile brake service for safe stopping power and proper brake performance.",
    included: { title: "What's included", items: ["Brake pad replacement (per axle)", "Rotor inspection", "Brake system inspection", "Brake noise and wear check", "Test drive (if safe and applicable)"] },
    extra: { title: "Additional, if needed", items: ["Rotor replacement"] },
    options: [
      { name: "Brake inspection", price: "$50", time: "30 min" },
      { name: "Brake pad replacement (front)", price: "$200", time: "1 hr 30 min" },
      { name: "Brake pad replacement (rear)", price: "$200", time: "1 hr 30 min" },
      { name: "Brake pads and rotors (front)", price: "$380", time: "2 hr 30 min" },
      { name: "Brake pads and rotors (rear)", price: "$380", time: "2 hr 30 min" },
    ],
    note: laborNote,
  },
  {
    name: "Diagnostics / check-engine light", price: "$100", time: "1 hr",
    blurb: "Accurate assessments to identify warning indicators and potential issues with your vehicle. Book an appointment to prevent major problems and keep your car running smoothly.",
    note: varyNote,
  },
  {
    name: "Battery and starting", price: "From $35", time: "30 min+",
    blurb: "On-site battery and starting system service to get you running quickly and reliably.",
    included: { title: "What's included", items: ["Battery testing", "Battery installation / replacement", "Terminal cleaning (if needed)", "Charging system check (alternator check)", "System start-up verification"] },
    options: [
      { name: "Battery installation (you supply the battery)", price: "$100", time: "45 min" },
      { name: "Mobile battery replacement (battery + install)", price: "Price varies", time: "1 hr" },
      { name: "Jump start (local)", price: "$35", time: "30 min" },
    ],
    note: laborNote,
  },
  {
    name: "A/C service", price: "Recharge $160",
    blurb: "Cold air back before the next heat wave. Compressor special $750.",
    options: [
      { name: "A/C recharge", price: "$160", time: "" },
      { name: "Compressor special", price: "$750", time: "" },
    ],
    note: "Final pricing may vary by vehicle. Mobile travel fees may apply.",
  },
  {
    name: "Tune-ups", price: "From $350", time: "2 hr+",
    blurb: "Restore engine performance, improve fuel efficiency and keep the car running smoothly, all on-site.",
    included: { title: "What's included in a standard tune-up", items: ["Spark plug replacement", "Ignition system inspection", "Ignition coil inspection (if applicable)", "Air filter check and replacement (if needed)", "Fuel system and engine performance check", "Battery and charging system check", "Scan tool diagnostic (check-engine light scan if present)", "Fluid level check (oil, coolant, brake fluid, etc.)"] },
    extra: { title: "Additional services, if needed (extra cost)", items: ["Ignition coil replacement", "Cabin air filter replacement", "Throttle body cleaning", "Fuel injector cleaning"] },
    options: [
      { name: "4-cylinder tune-up", price: "$350", time: "2 hr" },
      { name: "6-cylinder tune-up", price: "$375", time: "2 hr 30 min" },
      { name: "8-cylinder tune-up", price: "$450", time: "3 hr" },
    ],
    note: "Helps prevent misfires, rough idling, poor gas mileage and engine performance issues. Price shown is for labor, not including parts. Final price may vary with vehicle make, model and number of cylinders. Mobile travel fees may apply.",
  },
  {
    name: "Pre-purchase inspections", price: "$140", time: "2 hr",
    blurb: "A comprehensive inspection before you buy a used car, so you avoid costly repairs and hidden issues.",
    included: { title: "What's included", items: ["Full visual vehicle inspection", "Diagnostic scan (if applicable)", "Engine and transmission check", "Brake and tire inspection", "Fluid condition check", "Exterior and interior inspection", "Condition report and recommendations"] },
    note: varyNote,
  },
  {
    name: "Light bulb changes", price: "From $25", time: "30 min",
    blurb: "Dim, flickering or burnt out? Rich diagnoses it and installs high-quality replacement bulbs.",
    included: { title: "Our service includes", items: ["Headlight bulb replacement (halogen, HID, LED where applicable)", "Tail light, brake light and turn signal bulb replacement", "Fog light and marker light replacement", "Basic inspection of wiring and connectors"] },
    options: [
      { name: "Headlight, single bulb", price: "$45", time: "30 min" },
      { name: "Headlight pair", price: "$50", time: "30 min" },
      { name: "Brake light bulbs", price: "$35", time: "30 min" },
      { name: "Turn signals", price: "$35", time: "30 min" },
      { name: "Reverse bulbs", price: "$25", time: "30 min" },
      { name: "License plate bulbs", price: "$25", time: "30 min" },
    ],
    note: "Proper lighting is essential for visibility and safety. Pricing may vary depending on vehicle make, model and bulb type.",
  },
  { name: "Lockout service", price: "From $55", blurb: "Keys locked inside? Fast, damage-free entry." },
  { name: "Fuel delivery", price: "From $55", blurb: "Out of gas? Fuel delivered to your exact location." },
  { name: "Roadside assistance", price: "Call for pricing", blurb: "Stuck on the side of the road? Call and we'll roll." },
];

// Options for the "what do you need" dropdown (also used by the GHL form field).
export const requestOptions = [
  "Car won't start / dead battery",
  "Check-engine light / diagnostics",
  "Brakes",
  "Oil change",
  "A/C not blowing cold",
  "Tune-up",
  "Light bulb replacement",
  "Pre-purchase inspection",
  "Locked out",
  "Out of fuel",
  "Roadside emergency",
  "Something else / not sure",
];

// PLACEHOLDER photos: replace `src` with real job photos from Rich.
export const workPhotos = [
  { src: "", alt: "Brake job on a Toyota in a driveway", caption: "Brake service · Toyota" },
  { src: "", alt: "Battery replacement in a parking garage", caption: "Battery replacement · Honda" },
  { src: "", alt: "Oil change at a customer's home", caption: "Oil change · BMW" },
  { src: "", alt: "Diagnostics with a scan tool", caption: "Diagnostics · Mercedes-Benz" },
  { src: "", alt: "A/C recharge under the hood", caption: "A/C recharge · Nissan" },
  { src: "", alt: "Pre-purchase inspection of an SUV", caption: "Pre-purchase inspection · Audi" },
];

// PLACEHOLDER reviews: replace with real ones (Google / TikTok / Instagram).
export const reviews = [
  { name: "Customer name", service: "Battery service", area: "Los Angeles", text: "Placeholder: a real review about Rich showing up the same day." },
  { name: "Customer name", service: "Brake service", area: "Santa Monica", text: "Placeholder: a real review about honest pricing and clear explanations." },
  { name: "Customer name", service: "Pre-purchase inspection", area: "Pasadena", text: "Placeholder: a real review about how easy booking was." },
];

export const faqs = [
  { q: "Do you really come to me?", a: "Yes. Rich comes to your home, your office or wherever the car is parked in Los Angeles and surrounding areas. No tow, no waiting room." },
  { q: "Which areas do you cover?", a: "Los Angeles, Long Beach, Santa Monica, Pasadena, Anaheim and surrounding areas. If you're close to those, book and Rich will confirm." },
  { q: "Can you come the same day?", a: "Same-day service is often available. Book online and Rich will confirm the earliest time that works." },
  { q: "How much will it cost?", a: "Oil changes are $85, diagnostics $100, pre-purchase inspections $140, jump starts $35, and lockouts and fuel delivery start at $55. Brake pads are $200 per axle. Every service lists its options and prices above. A travel fee may apply depending on distance, and it's always disclosed before your booking is confirmed." },
  { q: "Do your prices include parts?", a: "Listed prices are labor rates only. Parts vary by vehicle make, model and the repair needed, and you'll get a full quote including parts before any work begins." },
  { q: "Why is there a $25 deposit?", a: "It holds your appointment time. It's applied to your final total, so it's not an extra charge." },
  { q: "What if I need to cancel or reschedule?", a: "Free with at least 24 hours' notice: your deposit is fully transferable or refundable. Cancelling within 24 hours forfeits the deposit." },
  { q: "What kinds of cars do you work on?", a: "All makes and models: Audi, BMW, Mercedes-Benz, Toyota, Honda, Ford, Porsche and many more. Gas, diesel, hybrid, plug-in hybrid and electric." },
  { q: "What can't you fix at my location?", a: "Engine swaps, transmission rebuilds, major internal engine repairs, bodywork and other heavy shop-only jobs. If a repair needs a lift or specialized shop equipment, Rich will tell you honestly." },
  { q: "What do I need to have ready?", a: "A safe, accessible spot with a flat, stable surface and enough room to work around the car. Severe weather or unsafe conditions may mean rescheduling." },
];

export const policies = [
  { title: "Appointment & deposit", items: ["A $25 deposit is required to secure every service appointment.", "The deposit is applied toward your final total.", "It's required to confirm your booking time. No deposit means the time is not reserved.", "Deposits are fully transferable or refundable with at least 24 hours' notice.", "Cancellations within 24 hours of the appointment forfeit the deposit."] },
  { title: "No-show & late policy", items: ["Failure to show up for a scheduled appointment results in loss of your deposit.", "Arriving more than 15 minutes late may require rescheduling.", "Repeat no-shows may require full prepayment for future bookings.", "Service may be declined after repeated missed appointments."] },
  { title: "Mobile service & travel", items: ["A travel fee may apply based on distance from the service area.", "Travel fees are disclosed before booking confirmation.", "The customer must provide a safe, accessible work location.", "The vehicle must be parked on a flat, stable surface with adequate space to work.", "Severe weather or unsafe environments may cause delays or rescheduling."] },
  { title: "What we don't service", items: ["Engine swaps, transmission rebuilds and major internal engine repairs.", "Bodywork and heavy shop-only repairs.", "Jobs that need lifts, specialized shop equipment or unsafe working conditions may be declined."] },
];
