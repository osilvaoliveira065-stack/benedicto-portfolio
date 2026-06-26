export type Project = {
  number: string
  title: string
  category: string
  description: string
  image: string
  href?: string
  tags: string[]
  problem: string
  solution: string
  impact: string
  tech: string[]
}

export const projects: Project[] = [
  {
    number: "01",
    title: "SESTRO INK",
    category: "Tattoo Studio · Landing Page",
    description:
      "A conversion-focused booking experience built for a modern tattoo studio.",
    image: "/projects/sestro-ink.png",
    href: "#",
    problem:
      "The studio lacked a digital presence capable of reflecting its artistic quality and converting online visitors into actual bookings.",
    solution:
      "A bold, visually-driven landing page focused on artist discovery, social proof, and frictionless booking flow.",
    impact:
      "Increased booking intent, stronger brand perception, and improved trust from first-time visitors.",
    tags: ["Next.js", "Conversion Design", "UI/UX", "Booking Flow"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    number: "02",
    title: "Darkhaven",
    category: "Streetwear · E-commerce",
    description:
      "A premium storefront built to make the brand feel collectible and culture-driven.",
    image: "/projects/darkhaven.png",
    href: "#",
    problem:
      "The brand needed a digital experience that matched the exclusivity and visual strength of its physical products.",
    solution:
      "An editorial-style e-commerce experience focused on storytelling, collection hierarchy, and immersive product presentation.",
    impact:
      "Improved perceived value, stronger engagement, and a more premium shopping experience.",
    tags: ["Next.js", "E-commerce", "Branding", "UX Design"],
tech: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    number: "03",
    title: "Ascend",
    category: "SaaS · Dashboard UI",
    description:
      "A focused dashboard interface that turns complex business data into clear decisions.",
    image: "/projects/ascend.jpg",
    href: "#",
    problem:
      "Users struggled to interpret dense performance data, leading to confusion and reduced product efficiency.",
    solution:
      "A structured dashboard interface with clear hierarchy, data visualization, and decision-oriented UX design.",
    impact:
      "Improved clarity, faster decision-making, and increased user confidence in the product.",
    tags: ["SaaS", "Dashboard UI", "Data Visualization", "UX"],
tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "Arena Rio Verde",
    category: "Sports Experience · Conversion Website",
    description:
      "A premium sports website designed to position Arena Rio Verde as a high-end destination for sports, leisure, and community experience — turning visits into bookings and real-world engagement.",
    image: "/projects/arena-rio-verde.png",
    href: "#",
    tags: ["Fitness", "Conversion", "Web Design"],
    problem:
      "The Arena Rio Verde needed a strong digital presence that matched the quality of its physical structure and helped convert online visitors into real customers.",
    solution:
      "A modern, high-conversion website designed to position the arena as a premium sports destination, with clear paths for bookings, exploration of sports modalities, and engagement.",
    impact:
      "Improved brand perception, increased trust, and a more direct flow from discovery to action, including reservations, visits, and inquiries.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
]