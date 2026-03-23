import { Check, X, Zap, Calendar, Target, Rocket, Code, Cpu, Globe, Shield, DollarSign, HelpCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Automatiza.lat</span>
          </div>
          <button className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 transition-colors">
            Book a Fit Call
          </button>
        </div>
      </nav>

      {/* Section 1: Hero - Ultra-direct H1 with primary CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5">
            <Zap className="mr-2 h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">No hourly billing. No retainers.</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            A senior dev team for your marketing agency.
            <span className="block text-blue-600 mt-2">
              $1,000 flat-rate weekly sprints.
            </span>
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            Custom integrations, web apps, and workflows delivered in 5-day sprints.
            Pause or cancel anytime.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Book a 15-Min Fit Call
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: The Pain / Anti-Status Quo - 3-column problem statement */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              The agency dev problem, solved.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                  <X className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Freelancers are flaky</h3>
                <p className="text-gray-600">
                  Ghosting, missed deadlines, inconsistent quality. You're managing people instead of projects.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50">
                  <DollarSign className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Hourly billing kills margin</h3>
                <p className="text-gray-600">
                  Scope creep turns $500 projects into $5,000 invoices. You can't price confidently for clients.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Dev agencies are too expensive</h3>
                <p className="text-gray-600">
                  $15k/month minimums, rigid contracts, and junior teams doing the actual work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How it Works - 3-step process visualization */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">How it works</h2>
          <p className="mb-12 text-center text-xl text-gray-600">
            Simple, predictable, and designed for agencies.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative text-center">
              <div className="absolute -left-4 top-12 hidden h-0.5 w-full bg-blue-200 md:block" />
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg shadow-blue-600/20">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Scope the sprint</h3>
              <p className="text-gray-600">
                We define exactly what gets built in 5 days. No surprises, no scope creep.
              </p>
            </div>
            <div className="relative text-center">
              <div className="absolute -left-4 top-12 hidden h-0.5 w-full bg-blue-200 md:block" />
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold shadow-lg shadow-indigo-600/20">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">We build for 5 days</h3>
              <p className="text-gray-600">
                Our senior team works exclusively on your project. Daily updates, no distractions.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white text-2xl font-bold shadow-lg shadow-violet-600/20">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Delivered</h3>
              <p className="text-gray-600">
                Working software, deployed and documented. Ready for your client presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Scope - What we do vs What we don't */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">What we do (and don't)</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 rounded-lg bg-green-50 p-2">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">What we do</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: <Code className="h-5 w-5 text-blue-600" />, text: 'Full-stack web applications' },
                    { icon: <Cpu className="h-5 w-5 text-blue-600" />, text: 'Custom APIs & backend logic' },
                    { icon: <Zap className="h-5 w-5 text-amber-500" />, text: 'Zapier/Make automations' },
                    { icon: <Globe className="h-5 w-5 text-blue-600" />, text: 'Custom integrations (CRM, CMS, etc.)' },
                    { icon: <Target className="h-5 w-5 text-red-500" />, text: 'Marketing workflow automation' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-3">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 rounded-lg bg-red-50 p-2">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">What we don't</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Native iOS/Android mobile apps',
                    'Blockchain/crypto projects',
                    'AI model training',
                    'Legacy system maintenance',
                    '24/7 support contracts',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-500">
                      <div className="mr-3">
                        <X className="h-5 w-5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trust / Founder Note - Leo's background & credibility */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Built by an ex‑PM who knows deadlines</h2>
                <div className="mb-6 space-y-4">
                  <p className="text-gray-600">
                    I'm Leonardo Diaz. For 7 years, I was the Product Manager shipping features for millions of users.
                  </p>
                  <p className="text-gray-600">
                    I've seen every way a project can go wrong—scope creep, miscommunication, technical debt.
                  </p>
                  <p className="text-gray-600">
                    Automatiza.lat is built on one principle: <strong className="text-gray-900">predictable delivery</strong>. As a technical PM who has overseen complex software architectures, I know how to scope, sequence, and hit deadlines every single week.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Leonardo Diaz</div>
                    <div className="text-sm text-gray-500">Founder, ex‑Product Manager (7 years)</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
                <div className="mb-6">
                  <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">Why This Works</div>
                  <h3 className="text-2xl font-bold text-gray-900">Product thinking, not just code</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'We scope like PMs: outcomes, not hours',
                    'We build like senior engineers: clean, tested, documented',
                    'We communicate like partners: daily updates, zero surprises',
                    'We deliver like clockwork: 5-day sprints, every time',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing - Two clear options */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">Simple, low-risk pricing.</h2>
            <p className="mb-12 text-center text-xl text-gray-600">
              Zero retainers. 50% down to start, 50% on delivery.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Option 1: Scoping Sprint */}
              <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="mb-8 flex-grow">
                  <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">The Foot-in-the-Door</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Scoping Sprint</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$250</span>
                    <span className="ml-2 text-gray-500">/ 2 days</span>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Perfect for skeptical clients or complex builds. We design the architecture before you commit to the full build.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Complete technical architecture',
                      'Database & API planning',
                      'Exact timeline & scope definition',
                      'Credited toward the full build sprint',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 shrink-0 text-blue-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full rounded-lg border border-blue-600 bg-transparent py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors">
                  Book a Scoping Call
                </button>
              </div>

              {/* Option 2: Full Build Sprint */}
              <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg border-2 border-blue-600">
                <div className="absolute right-0 top-0 rounded-bl-lg bg-blue-600 px-4 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-8 flex-grow">
                  <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">The Standard</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Full Build Sprint</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$1,000</span>
                    <span className="ml-2 text-gray-500">/ 5 days</span>
                  </div>
                  <p className="mb-6 text-gray-600">
                    A dedicated senior engineer for one week. You pay 50% to lock the slot, and 50% when the code is delivered.
                  </p>
                  <ul className="space-y-4">
                    {[
                      '5 business days of senior dev time',
                      'Deployed, working software',
                      'Full documentation & handoff',
                      '$500 upfront, $500 on delivery',
                      'Zero retainers or hourly BS',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 shrink-0 text-blue-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                  Reserve a Sprint
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ - Common questions answered */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What exactly is a "sprint"?',
                a: 'A sprint is 5 business days of focused development on one project. We scope it together on Monday, build Tuesday–Friday, and deliver by EOD Friday.',
              },
              {
                q: 'What if my project takes longer than a week?',
                a: 'We break it into multiple sprints. Each sprint delivers working, deployable software. You can pause between sprints if needed.',
              },
              {
                q: 'Who are the developers?',
                a: 'Our team consists of senior full‑stack engineers with 5+ years experience. All communication goes through me (Leo) as your single point of contact.',
              },
              {
                q: 'What if I need changes after delivery?',
                a: 'Minor fixes within 48 hours of delivery are included. For additional work, we scope a new sprint.',
              },
              {
                q: 'Can I use this for client work?',
                a: 'Absolutely. Most of our agency clients white‑label our work. We deliver the code, you present it to your client.',
              },
              {
                q: 'What if I want to stop?',
                a: 'No contracts. Pause or cancel anytime. We recommend finishing your current sprint for clean handoff.',
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-900">
                  <HelpCircle className="mr-3 h-5 w-5 text-blue-600" />
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">Ready to ship client work faster?</h2>
            <p className="mb-10 text-xl text-gray-400">
              Book a 15‑minute fit call. We'll scope your first sprint together.
            </p>
            <button className="rounded-lg bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Book a Fit Call
            </button>
            <p className="mt-6 text-gray-500">
              No commitment. No sales pitch. Just a technical conversation.
            </p>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
                  <span className="text-xl font-bold text-white">Automatiza.lat</span>
                </div>
                <div className="mt-4 text-gray-500 md:mt-0">
                  © {new Date().getFullYear()} Senior dev team for marketing agencies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}