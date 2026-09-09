export const site = {
  name: "John Burke Construction Inc.",
  shortName: "John Burke Construction",
  tagline: "Residential & Commercial Construction",
  headline: "A General Contractor for More Than One Kind of Project",
  support:
    "San Diego work that needs a licensed Class B contractor — remodels and additions, wood rot and termite repair, and commercial interiors — coordinated by a company that has been on the license since 1991.",
  phoneDisplay: "(619) 838-1131",
  phoneTel: "6198381131",
  email: "john@johnburkeconstruction.com",
  originalUrl: "https://johnburkeconstruction.com/",
  license: "631941",
  licenseClass: "B — General Building",
  licenseStatus: "Current and active",
  licenseIssued: "November 13, 1991",
  licenseExpires: "May 31, 2027",
  serving: "Serving San Diego since 1991",
  cslbUrl: "https://www.cslb.ca.gov/631941",
  dba: "San Diego Wood Rot Repair",
  licensedAddress: "9858 Mission Vega Rd #1, Santee, CA 92071",
  bbbRating: "A+",
  bbbAccredited: false,
  owner: "John Patrick Burke",
} as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "How we work" },
  { href: "/work", label: "Photo album" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "remodels",
    title: "Remodels & additions",
    image: "/images/work/kitchen-remodel.jpg",
    imageAlt:
      "Finished kitchen remodel by John Burke Construction, cherry cabinetry and island",
    body: "Kitchens, bathrooms, and room additions for houses that need to keep working while the job is open.",
    items: ["Kitchen remodels", "Bathroom remodels", "Room additions"],
  },
  {
    id: "repair",
    title: "Repair that lasts",
    image: "/images/about/john-burke-truck.jpg",
    imageAlt: "John Burke with a Burke Construction work truck",
    body: "A dedicated wood rot and termite repair practice — the company also holds the DBA San Diego Wood Rot Repair — plus foundation, concrete, decks, and custom fences.",
    items: [
      "Wood rot repair",
      "Termite repair",
      "Foundation repair",
      "Concrete, decks, fences",
    ],
  },
  {
    id: "commercial",
    title: "New work & commercial",
    image: "/images/work/commercial-interior.jpg",
    imageAlt:
      "John Burke Construction crew working an interior commercial space",
    body: "New construction and commercial interiors as well as residential work. Plumbing and electrical are part of the same coordination, not a separate runaround.",
    items: ["New construction", "Commercial interiors", "Plumbing & electrical"],
  },
] as const;

export const projects = [
  {
    src: "/images/work/commercial-interior.jpg",
    alt: "Crew finishing a commercial interior",
    caption: "Commercial interior",
    note: "First-party photo from the company album.",
  },
  {
    src: "/images/work/kitchen-rancho-santa-fe.jpg",
    alt: "Kitchen remodel in Rancho Santa Fe",
    caption: "Kitchen remodel, Rancho Santa Fe",
    note: "Caption published on the 2011 first-party homepage.",
  },
  {
    src: "/images/work/living-dining-remodel.jpg",
    alt: "Living and dining room remodel with fireplace",
    caption: "Living & dining remodel",
    note: "First-party photo from the company album.",
  },
  {
    src: "/images/work/kitchen-remodel.jpg",
    alt: "Kitchen remodel with island and stainless appliances",
    caption: "Kitchen remodel",
    note: "Currently on the live Photo Album page.",
  },
  {
    src: "/images/work/crew-jobsite.jpg",
    alt: "Crew on a commercial jobsite",
    caption: "Jobsite coordination",
    note: "Currently on the live homepage.",
  },
  {
    src: "/images/work/new-construction.jpg",
    alt: "New house framing under construction",
    caption: "New construction",
    note: "First-party archive photograph.",
  },
  {
    src: "/images/work/new-construction-frame.jpg",
    alt: "Wood framing on a new construction project",
    caption: "Framing",
    note: "First-party archive photograph.",
  },
  {
    src: "/images/work/kitchen-remodel-archive.jpg",
    alt: "Kitchen remodel archive photograph",
    caption: "Kitchen remodel",
    note: "First-party archive photograph.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "John Burke Construction went above and beyond my expectations. The craftsman on John's team were friendly, professional, and most of all, expertly skilled. I would not hesitate to hire John Burke Construction for my next project, big or small.",
    name: "Ann Callahan",
    role: "Innkeeper, Hillcrest House Bed & Breakfast",
  },
  {
    quote:
      "Again, we truly appreciate your tremendous contribution in transforming our house into a home we love! You executed our vision beautifully, and most importantly, you and your crew were a pleasure to work with! We have undertaken several remodels in the past, and it was incredibly refreshing to work with a team as competent, reliable, and professional as yours – On time, on budget, and great attention to detail, including those small things such as leaving the work space immaculate at the end of each day, helped make the often dreaded remodel easy and hassle free. We will always defer to you on future projects, and thank you again, for so many jobs well done!",
    name: "John and Melinda Vaughn",
    role: "San Diego",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "Call or write",
    body: "Reach John at the number and email on this site. Say what the building is doing wrong, or what you want added.",
  },
  {
    n: "02",
    title: "Walk the job",
    body: "A visit to the house or commercial space. References are available on request — the contact page still offers them.",
  },
  {
    n: "03",
    title: "Build it clean",
    body: "The work is coordinated in-house across the trades listed on this site. The crew’s own clients mention leaving the space immaculate at the end of each day.",
  },
] as const;

export const secondary = [
  "Plumbing",
  "Electrical",
  "Concrete",
  "Foundation repair",
  "Decks",
  "Custom fences",
] as const;
