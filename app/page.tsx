import { Check, X, Zap, Calendar, Target, Rocket, Code, Cpu, Globe, Shield, DollarSign, HelpCircle, Home, Building2, ShieldCheck, MessageSquare, Clock, FileText, Bell } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Automatiza.lat" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-gray-900">Automatiza.lat</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/real-estate" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Real Estate
              </a>
              <a href="/insurance" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Insurance
              </a>
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 transition-colors inline-block text-center">
                Book a Fit Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero - Ultra-direct H1 with primary CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5">
            <Zap className="mr-2 h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">AI + No-Code Workflow Automation</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            I build automation systems that run your business while you sleep.
            <span className="block text-blue-600 mt-2 text-4xl md:text-5xl">
              $1,000 Setup + $199/month Retainer
            </span>
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            Stop doing work a computer should do. We automate repetitive tasks so you can focus on growth.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 inline-block text-center">
              Book a 30-Min Fit Call
            </a>
            <div className="text-gray-600">
              Specializing in <span className="font-semibold text-blue-600">Real Estate</span> and <span className="font-semibold text-blue-600">Insurance</span> agents
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Specializations - Real Estate & Insurance */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              We specialize in serving Real Estate and Insurance professionals
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Real Estate Card */}
              <div className="group rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:border-blue-300 transition-all hover:shadow-xl">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 rounded-xl bg-blue-50 p-3">
                    <Home className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Real Estate Agents</h3>
                    <p className="text-blue-600 font-medium">Speed to Lead Automation</p>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Never lose a commission again. Automate instant responses to Zillow/Facebook leads while you're driving or at showings.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: <MessageSquare className="h-5 w-5 text-blue-600" />, text: 'Instant SMS/email responses to new leads' },
                    { icon: <Clock className="h-5 w-5 text-blue-600" />, text: '24/7 lead qualification & scheduling' },
                    { icon: <Calendar className="h-5 w-5 text-blue-600" />, text: 'Automated showing coordination' },
                    { icon: <Bell className="h-5 w-5 text-blue-600" />, text: 'Smart follow-up sequences' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-3">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <a href="/real-estate" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Learn more about Real Estate automation
                  <Rocket className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Insurance Card */}
              <div className="group rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:border-green-300 transition-all hover:shadow-xl">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 rounded-xl bg-green-50 p-3">
                    <ShieldCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Insurance Agents/Brokers</h3>
                    <p className="text-green-600 font-medium">Retention & Renewals Automation</p>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Stop chasing paperwork and missed renewals. Automate quote follow-ups, document collection, and renewal reminders.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: <FileText className="h-5 w-5 text-green-600" />, text: 'Automated document collection & reminders' },
                    { icon: <Bell className="h-5 w-5 text-green-600" />, text: 'Renewal notification systems' },
                    { icon: <MessageSquare className="h-5 w-5 text-green-600" />, text: 'Quote follow-up sequences' },
                    { icon: <Shield className="h-5 w-5 text-green-600" />, text: 'Client retention workflows' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-3">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <a href="/insurance" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                  Learn more about Insurance automation
                  <Rocket className="ml-2 h-4 w-4" />
                </a>
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
            Simple, predictable automation setup
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative text-center">
              <div className="absolute -left-4 top-12 hidden h-0.5 w-full bg-blue-200 md:block" />
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg shadow-blue-600/20">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Discovery & Setup</h3>
              <p className="text-gray-600">
                We analyze your workflows and design the perfect automation system. One-time $1,000 setup fee.
              </p>
            </div>
            <div className="relative text-center">
              <div className="absolute -left-4 top-12 hidden h-0.5 w-full bg-blue-200 md:block" />
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold shadow-lg shadow-indigo-600/20">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Build & Deploy</h3>
              <p className="text-gray-600">
                We build your automation system using AI + no-code tools. Your business starts running on autopilot.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white text-2xl font-bold shadow-lg shadow-violet-600/20">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Ongoing Support</h3>
              <p className="text-gray-600">
                $199/month retainer for maintenance, updates, and adding new automations as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What We Automate */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">What we automate</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 rounded-lg bg-green-50 p-2">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Specialties</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: <MessageSquare className="h-5 w-5 text-blue-600" />, text: 'Lead response & qualification' },
                    { icon: <Calendar className="h-5 w-5 text-blue-600" />, text: 'Appointment scheduling & reminders' },
                    { icon: <FileText className="h-5 w-5 text-blue-600" />, text: 'Document collection & processing' },
                    { icon: <Bell className="h-5 w-5 text-blue-600" />, text: 'Renewal & follow-up sequences' },
                    { icon: <Zap className="h-5 w-5 text-amber-500" />, text: 'CRM & marketing automation' },
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
                  <h3 className="text-xl font-semibold text-gray-900">What we don't do</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Custom software development',
                    'Mobile app development',
                    'Website design & development',
                    'Social media management',
                    'Traditional marketing campaigns',
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
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Workflow Automation Consultant</h2>
                <div className="mb-6 space-y-4">
                  <p className="text-gray-600">
                    I'm Leonardo Diaz. For 7 years, I was a Product Manager shipping features for millions of users.
                  </p>
                  <p className="text-gray-600">
                    I've seen how repetitive tasks drain productivity and kill growth. That's why I now focus exclusively on workflow automation.
                  </p>
                  <p className="text-gray-600">
                    I combine AI tools with no-code platforms to create systems that work 24/7. My approach is <strong className="text-gray-900">tool-agnostic</strong>—I use whatever gets the job done fastest and most reliably.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Leonardo Diaz</div>
                    <div className="text-sm text-gray-500">Workflow Automation Consultant</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
                <div className="mb-6">
                  <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">Why This Works</div>
                  <h3 className="text-2xl font-bold text-gray-900">Process thinking, not just tools</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'We analyze your actual workflows first',
                    'We choose the right tools for your specific needs',
                    'We build systems that require minimal maintenance',
                    'We focus on ROI: time saved vs. cost',
                    'We provide ongoing support as your business evolves',
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

      {/* Section 6: Pricing - Clear pricing structure */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mb-12 text-center text-xl text-gray-600">
              One-time setup + monthly retainer. No hourly billing, no surprises.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Setup Package */}
              <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="mb-8 flex-grow">
                  <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">Initial Investment</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Setup Package</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$1,000</span>
                    <span className="ml-2 text-gray-500">one-time</span>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Complete analysis of your workflows and implementation of your core automation system.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Workflow analysis & mapping',
                      'Tool selection & setup',
                      'Core automation implementation',
                      'Testing & deployment',
                      'Training & documentation',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 shrink-0 text-blue-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg border border-blue-600 bg-transparent py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors inline-block text-center">
                  Book Setup Call
                </a>
              </div>

              {/* Monthly Retainer */}
              <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg border-2 border-blue-600">
                <div className="absolute right-0 top-0 rounded-bl-lg bg-blue-600 px-4 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-8 flex-grow">
                  <div className="mb-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">Ongoing Support</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Monthly Retainer</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$199</span>
                    <span className="ml-2 text-gray-500">/ month</span>
                  </div>
                  <p className="mb-6 text-gray-600">
                    Keep your automation system running smoothly and add new workflows as your business grows.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'System monitoring & maintenance',
                      'Monthly optimization updates',
                      'Add new automation workflows',
                      'Priority support & troubleshooting',
                      'Tool updates & migrations',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 shrink-0 text-blue-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 inline-block text-center">
                  Start with Setup + Retainer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>