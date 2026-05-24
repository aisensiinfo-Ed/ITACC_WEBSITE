"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Perfect for exploring what ITACC can do.",
    featured: false,
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    features: [
      "50 image generations/month",
      "10 video clips/month",
      "5 voice minutes/month",
      "Community gallery access",
      "Standard quality outputs",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For serious creators who need more power.",
    featured: true,
    badge: "Most Popular",
    cta: "Start Pro Trial",
    ctaVariant: "default" as const,
    features: [
      "1,000 image generations/month",
      "100 video clips/month",
      "120 voice minutes/month",
      "Priority generation queue",
      "4K quality outputs",
      "Commercial license",
    ],
  },
  {
    name: "Team",
    price: "$89",
    period: "/month",
    desc: "Collaborate with your entire team seamlessly.",
    featured: false,
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    features: [
      "Unlimited generations",
      "Up to 10 team members",
      "Shared asset library",
      "API access included",
      "Advanced analytics",
      "Priority support",
    ],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 md:px-14"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: "var(--accent2)" }}>
            Pricing
          </p>
          <h2
            className="font-extrabold leading-tight tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-1px" }}
          >
            Simple, transparent plans
          </h2>
          <p className="mt-4 font-light" style={{ color: "var(--muted)" }}>
            Start free. Upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-9 flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: plan.featured
                  ? "linear-gradient(160deg, rgba(124,92,252,.1), var(--bg) 65%)"
                  : "var(--bg)",
                border: `1px solid ${plan.featured ? "rgba(124,92,252,.5)" : "var(--border)"}`,
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-medium px-4 py-1 rounded-full"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  {plan.badge}
                </div>
              )}

              <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--muted)" }}>
                {plan.name}
              </p>
              <div
                className="font-extrabold tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: 48 }}
              >
                {plan.price}
                <span className="text-lg font-normal" style={{ color: "var(--muted)", fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.period}
                </span>
              </div>
              <p className="mt-3 text-sm font-light mb-6" style={{ color: "var(--muted)" }}>
                {plan.desc}
              </p>
              <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 24 }} />

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-light" style={{ color: "var(--muted)" }}>
                    <Check size={15} style={{ color: "var(--accent2)", marginTop: 2, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant={plan.ctaVariant} className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
