"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react"
import Image from "next/image"

type FormData = {
  name: string
  email: string
  instagram: string
  company: string
  projectType: string
  budget: string
  timeline: string
  details: string
}

const initialForm: FormData = {
  name: "",
  email: "",
  instagram: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
}

const projectTypes = [
  "Landing Page",
  "Business Website",
  "E-commerce",
  "Web Application",
  "Dashboard / SaaS",
  "Not sure yet",
]

const budgets = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "I need a recommendation",
]

const timelines = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible timeline",
]

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(initialForm)

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function goToDetails() {
    if (!form.name.trim() || !form.email.trim()) return

    setStep(2)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = encodeURIComponent(
      `New project inquiry — ${form.name || "New client"}`
    )

    const body = encodeURIComponent(
      `NEW PROJECT INQUIRY

CLIENT DETAILS
Name: ${form.name}
Email: ${form.email}
Instagram: ${form.instagram || "Not provided"}
Company / Brand: ${form.company || "Not provided"}

PROJECT DETAILS
Project type: ${form.projectType || "Not selected"}
Budget: ${form.budget || "Not selected"}
Timeline: ${form.timeline || "Not selected"}

PROJECT DESCRIPTION
${form.details || "No additional details provided"}`
    )

    window.location.href = `mailto:benedicto.co.013@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-6 text-white sm:px-8 md:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back to portfolio
          </Link>

          <a
                       href="#top"
                       aria-label="Back to top"
                       className="relative z-50 flex h-8 w-20 items-center"
                     >
                       <Image 
                         src="/brand/benedicto-angel.png"
                         alt="Benedicto"
                         width={290}
                         height={100}
                         priority
                         className="h-auto w-full object-contain object-left"
                       />
                     </a>
        </header>

        <section className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-10 lg:h-fit">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                Start a project
              </p>

              <h1 className="mt-5 font-display text-6xl font-black uppercase leading-[0.78] tracking-[-0.07em] sm:text-7xl">
                Let&apos;s Build
                <br />
                Something
                <br />
                Better.
              </h1>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/55">
                Tell me about your business, your goals and the kind of digital
                experience you want to create.
              </p>

              <div className="mt-10 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                <span
                  className={`flex size-6 items-center justify-center border ${
                    step === 1
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-white/50"
                  }`}
                >
                  {step > 1 ? <Check className="size-3.5" /> : "01"}
                </span>

                <span className="h-px w-8 bg-white/15" />

                <span
                  className={`flex size-6 items-center justify-center border ${
                    step === 2
                      ? "border-white bg-white text-black"
                      : "border-white/15 text-white/50"
                  }`}
                >
                  02
                </span>
              </div>
            </div>

            <div className="border border-white/10 bg-[#080808] p-5 sm:p-8 md:p-10">
              {step === 1 ? (
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                    Step 01 — Your details
                  </p>

                  <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl">
                    First, who are you?
                  </h2>

                  <div className="mt-10 space-y-7">
                    <Field
                      label="Your name"
                      value={form.name}
                      placeholder="John Smith"
                      onChange={(value) => updateField("name", value)}
                      required
                    />

                    <Field
                      label="Email address"
                      type="email"
                      value={form.email}
                      placeholder="john@company.com"
                      onChange={(value) => updateField("email", value)}
                      required
                    />

                    <Field
                      label="Instagram"
                      value={form.instagram}
                      placeholder="@yourbrand"
                      onChange={(value) => updateField("instagram", value)}
                    />

                    <Field
                      label="Company or brand"
                      value={form.company}
                      placeholder="Your company name"
                      onChange={(value) => updateField("company", value)}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={goToDetails}
                    disabled={!form.name.trim() || !form.email.trim()}
                    className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-white px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    Continue to project details
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mb-8 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
                  >
                    <ArrowLeft className="size-3.5" />
                    Edit your details
                  </button>

                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                    Step 02 — Project details
                  </p>

                  <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl">
                    Tell me the vision.
                  </h2>

                  <div className="mt-10 space-y-8">
                    <SelectField
                      label="What do you need?"
                      value={form.projectType}
                      options={projectTypes}
                      onChange={(value) => updateField("projectType", value)}
                    />

                    <div className="grid gap-8 sm:grid-cols-2">
                      <SelectField
                        label="Estimated budget"
                        value={form.budget}
                        options={budgets}
                        onChange={(value) => updateField("budget", value)}
                      />

                      <SelectField
                        label="Ideal timeline"
                        value={form.timeline}
                        options={timelines}
                        onChange={(value) => updateField("timeline", value)}
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                        Tell me about the project
                      </label>

                      <textarea
                        value={form.details}
                        onChange={(event) =>
                          updateField("details", event.target.value)
                        }
                        placeholder="What does your business do? What are the goals for the website? Do you have references, pages you need, or anything important I should know?"
                        rows={7}
                        className="w-full resize-none border border-white/15 bg-transparent px-4 py-4 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/60"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-white px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-transform hover:-translate-y-1"
                  >
                    Send project inquiry
                    <Mail className="size-4" />
                  </button>

                  <p className="mt-4 text-center text-[10px] leading-relaxed text-white/35">
                    Your email app will open with all project details already
                    included.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  value: string
  placeholder: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
}

function Field({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
        {label}
        {required && <span className="ml-1 text-white">*</span>}
      </label>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-white"
      />
    </div>
  )
}

type SelectFieldProps = {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none border-b border-white/15 bg-[#080808] px-0 py-3 text-sm text-white outline-none transition-colors focus:border-white"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}