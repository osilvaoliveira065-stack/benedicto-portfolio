"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Landing Page",
    priceBRL: "R$ 990",
    priceUSD: "US$ 600",
    description:
      "Para negócios que precisam de uma presença online rápida, profissional e focada em gerar contatos.",
    deadline: "5–7 days",
    features: [
      "Custom design",
      "Up to 5 sections",
      "Fully responsive",
      "WhatsApp integration",
      "Contact form",
      "Basic SEO setup",
      "Hosting configuration",
    ],
  },
  {
    name: "Business Website",
    priceBRL: "R$ 1.990",
    priceUSD: "US$ 1.200",
    description:
      "Para empresas, marcas e estúdios que precisam transmitir mais autoridade e organização.",
    deadline: "10–15 days",
    features: [
      "Everything in Landing Page",
      "Up to 8 pages",
      "Gallery and Google Maps",
      "Social media integration",
      "Enhanced optimization",
      "Smooth animations",
      "Structured conversion flow",
    ],
  },
  {
    name: "Premium Website",
    priceBRL: "R$ 3.490",
    priceUSD: "US$ 2.500",
    description:
      "For brands that want to stand out with a distinctive digital experience and stronger perceived value.",
    deadline: "15–25 days",
    featured: true,
    features: [
      "Exclusive visual direction",
      "Modern motion design",
      "Dynamic galleries",
      "Testimonials and social proof",
      "High-performance build",
      "Advanced SEO foundation",
      "Conversion-focused strategy",
    ],
  },
]

const extras = [
  {
    service: "Strategic Landing Page",
    description: "Expand your website with a new strategic page.",
    priceBRL: "R$ 250",
    priceUSD: "US$ 80",
  },
  {
    service: "Appointment & Booking System",
    description: "Turn visitors into appointments with a clear booking flow.",
    priceBRL: "+ R$ 1.200",
    priceUSD: "+ US$ 300",
  },
  {
    service: "Secure Client Portal",
    description: "Private access for clients, files, updates and services.",
    priceBRL: "From R$ 2.500",
    priceUSD: "From US$ 600",
  },
  {
    service: "Visual Identity",
    description: "A cohesive visual direction for a stronger brand presence.",
    priceBRL: "From R$ 1.200",
    priceUSD: "From US$ 300",
  },
  {
    service: "Logo Design",
    description: "A custom logo designed to make your brand recognizable.",
    priceBRL: "From R$ 800",
    priceUSD: "From US$ 200",
  },
]

const maintenance = [
  {
    name: "Basic",
    priceUSD: "US$ 40/mo",
    priceBRL: "R$ 200/mo",
    features: [
      "Backups",
      "Updates",
      "Small fixes",
      "WhatsApp support",
    ],
  },
  {
    name: "Growth",
    priceUSD: "US$ 90/mo",
    priceBRL: "R$ 450/mo",
    features: [
      "Everything in Basic",
      "Up to 2 hours of changes",
      "Performance optimization",
      "Content updates",
    ],
  },
  {
    name: "Priority",
    priceUSD: "US$ 180/mo",
    priceBRL: "R$ 900/mo",
    features: [
      "Priority support",
      "Up to 5 hours of changes",
      "Monthly report",
      "Website monitoring",
    ],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-black px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-8 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
              Services & Investment
            </p>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-7xl md:text-8xl">
              Built for
              <br />
              Growth
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Strategic websites designed to make your business look more
            credible, communicate value clearly and turn visitors into leads.
          </p>
        </motion.div>

        {/* Pacotes */}
        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex flex-col border p-6 sm:p-8 ${
                item.featured
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-[#080808] text-white"
              }`}
            >
              {item.featured && (
                <span className="absolute right-5 top-5 border border-black/15 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.16em]">
                  Most requested
                </span>
              )}

              <p
                className={`text-[10px] font-medium uppercase tracking-[0.22em] ${
                  item.featured ? "text-black/55" : "text-white/40"
                }`}
              >
                {item.name}
              </p>

              <div className="mt-6">
  <p className="font-display text-5xl font-black uppercase tracking-[-0.06em]">
    {item.priceUSD}
  </p>

  <p
    className={`mt-2 text-[10px] font-medium uppercase tracking-[0.16em] ${
      item.featured ? "text-black/50" : "text-white/40"
    }`}
  >
    Approx. {item.priceBRL}
  </p>
</div>

              <p
                className={`mt-5 min-h-20 text-sm leading-relaxed ${
                  item.featured ? "text-black/65" : "text-white/55"
                }`}
              >
                {item.description}
              </p>

              <div
                className={`my-7 border-t ${
                  item.featured ? "border-black/15" : "border-white/10"
                }`}
              />

              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-xs leading-relaxed"
                  >
                    <Check className="mt-0.5 size-3 shrink-0" />
                    <span
                      className={
                        item.featured ? "text-black/75" : "text-white/65"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <p
                  className={`mb-5 text-[9px] font-medium uppercase tracking-[0.18em] ${
                    item.featured ? "text-black/50" : "text-white/40"
                  }`}
                >
                  Estimated delivery · {item.deadline}
                </p>

                <Link
                  href="/contact"
                  className={`group inline-flex w-full items-center justify-between px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-transform hover:-translate-y-1 ${
                    item.featured
                      ? "bg-black text-white"
                      : "border border-white/15 hover:border-white hover:bg-white hover:text-black"
                  }`}
                >
                  Start a project
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Extras */}
        <div className="mt-24 border-t border-white/10 pt-12 md:mt-32">
          <div className="mb-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              Optional Add-ons
            </p>
            <h3 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">
              Extend the experience
            </h3>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
  {extras.map((item, index) => (
    <motion.article
      key={item.service}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex min-h-[220px] flex-col justify-between border-b border-r border-white/10 bg-[#080808] p-6 transition-colors duration-300 hover:bg-white/[0.045] sm:p-7"
    >
      <div>
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/35">
          Add-on
        </p>

        <h4 className="mt-4 font-display text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-4xl">
          {item.service}
        </h4>

        <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/50">
          {item.description}
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-5">
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/35">
          Investment
        </span>

        <div className="text-right">
          <span className="block font-display text-2xl font-black uppercase tracking-[-0.04em] text-white">
            {item.priceUSD}
          </span>

          <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-white/35">
            {item.priceBRL}
          </span>
        </div>
      </div>
    </motion.article>
  ))}
</div>
        </div>

        {/* Manutenção */}
        <div className="mt-24 border-t border-white/10 pt-12 md:mt-32">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                Ongoing Support
              </p>
              <h3 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">
                Monthly care
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Keep your website secure, updated and improving after launch.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {maintenance.map((plan) => (
              <article
                key={plan.name}
                className="border border-white/10 bg-[#080808] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-3xl font-black uppercase tracking-[-0.05em]">
                    {plan.name}
                  </h4>

                  <div className="text-right">
  <span className="block text-xs text-white">{plan.priceUSD}</span>

  <span className="mt-1 block text-[9px] uppercase tracking-[0.12em] text-white/35">
    {plan.priceBRL}
  </span>
</div>
                </div>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-xs text-white/60"
                    >
                      <span className="size-1.5 bg-white/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-[9px] uppercase tracking-[0.16em] text-white/30">
  Prices shown in USD for international clients. BRL values are approximate.
</p>
      </div>
    </section>
  )
} 
