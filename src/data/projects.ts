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
  title: "KYAN",
  category: "Official Artist Website · Music Platform",
  description:
    "An immersive official website designed to showcase releases, music videos, tour dates, and strengthen the artist's digital presence.",
  image: "/projects/kyan.png",
  href: "#",
  problem:
    "The artist needed a centralized platform that connected fans with new releases, videoclips, upcoming shows, and contact information while maintaining a strong visual identity.",
  solution:
    "Designed and developed a premium, dark-themed experience featuring a cinematic hero section, discography, music videos, tour schedule, and booking contact, all optimized for performance and engagement.",
  impact:
    "Strengthened the artist's online presence, improved accessibility to music platforms, increased visibility for upcoming shows, and created a professional destination for fans and event promoters.",
  tags: [
    "Next.js",
    "Music Website",
    "UI/UX",
    "Artist Branding"
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion"
  ],
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
