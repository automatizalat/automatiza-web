import { Check, Zap, FileText, Bell, MessageSquare, Shield, Target, ArrowRight, ShieldCheck, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

export default function InsurancePage() {
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/real-estate" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Real Estate
              </Link>
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 transition-colors inline-block text-center">
                Book a Fit Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-green-100 border border-green-200 px-4 py-1.5">
              <ShieldCheck className="mr-2 h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Insurance Automation</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Retention & Renewals Automation
              <span className="block text-green-600 mt-2 text-4xl md:text-5xl">
                Stop chasing paperwork, start growing
              </span>
            </h1>
            <p className="mb-10 text-xl text-gray-600">
              Automate quote follow-ups, document collection, and renewal reminders. 
              Keep clients longer with less effort.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 inline-block text-center">
                Book an Insurance Automation Call
              </a>
              <div className="text-gray-600">
                <span className="font-semibold text-green-600">$1,000 Setup</span> + <span className="font-semibold text-green-600">$100/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            The hidden cost of manual insurance processes
          </h2>
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-8 mb-12">
            <div className="flex items-start">
              <Target className="h-8 w-8 text-amber-500 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin work steals selling time</h3>
                <p className="text-gray-700 text-lg">
                  The average insurance agent spends <span className="font-bold text-amber-600">40% of their time</span> on 
                  administrative tasks instead of selling. Every hour spent chasing documents is an hour not spent acquiring new clients.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50">
                <FileText className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Manual Process Pain</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">📧</span>
                  Email clients for missing documents
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  Phone tag for signature collection
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📅</span>
                  Manual renewal date tracking
                </li>
                <li className="flex items-center">
                  <span className="mr-2">😤</span>
                  Clients lapse due to missed follow-ups
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-lg border-2 border-green-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Automated Solution</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">🤖</span>
                  Automated document request sequences
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📲</span>
                  Digital signature collection
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔔</span>
                  Smart renewal reminders 90/60/30 days out
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📈</span>
                  95%+ retention with automated touchpoints
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">How our insurance automation works</h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Quote Follow-up Automation',
                  description: 'Never let a hot quote go cold with automated follow-up sequences.',
                  features: ['Multi-channel follow-up', 'Personalized timing', 'Conversion tracking']
                },
                {
                  step: '2',
                  title: 'Document Collection',
                  description: 'Automated requests for missing documents with reminders.',
                  features: ['Secure upload portals', 'Expiration tracking', 'Compliance checks']
                },
                {
                  step: '3',
                  title: 'Renewal Management',
                  description: 'Automated renewal reminders and paperwork collection.',
                  features: ['90/60/30 day reminders', 'Auto-generated proposals', 'E-signature integration']
                },
                {
                  step: '4',
                  title: 'Client Communication',
                  description: 'Regular touchpoints to maintain relationships automatically.',
                  features: ['Birthday/anniversary messages', 'Policy review reminders', 'Educational content']
                },
                {
                  step: '5',
                  title: 'Compliance & Reporting',
                  description: 'Automated compliance tracking and reporting.',
                  features: ['Audit trail generation', 'Document retention', 'Regulatory updates']
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">
                          <Check className="h-3 w-3 mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Complete insurance workflow automation</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FileText className="h-8 w-8 text-green-600" />,
                title: 'Automated Document Collection',
                description: 'Secure portals for clients to upload documents with automatic reminders.'
              },
              {
                icon: <Bell className="h-8 w-8 text-green-600" />,
                title: 'Renewal Reminder System',
                description: 'Automated reminders at 90, 60, and 30 days before renewal.'
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-green-600" />,
                title: 'Quote Follow-up Sequences',
                description: 'Never lose a quote with timed, personalized follow-ups.'
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: 'Compliance Automation',
                description: 'Automatic compliance tracking and document retention.'
              },
              {
                icon: <Calendar className="h-8 w-8 text-green-600" />,
                title: 'Policy Review Scheduling',
                description: 'Automated scheduling for annual policy reviews.'
              },
              {
                icon: <Users className="h-8 w-8 text-green-600" />,
                title: 'Client Retention Campaigns',
                description: 'Regular automated touchpoints to maintain relationships.'
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-gradient-to-br from-green-900 to-emerald-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">The retention math</h2>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">40%</div>
                <p className="text-green-200">Time saved on admin tasks</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">95%+</div>
                <p className="text-green-200">Client retention rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">3x</div>
                <p className="text-green-200">More time for new business</p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-xl mb-6">
                Retaining just <span className="font-bold">5 additional clients</span> at $1,000/year premium 
                pays for <span className="font-bold">25+ years</span> of automation.
              </p>
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-green-900 hover:bg-gray-100 transition-colors">
                Calculate Your Retention ROI
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Stop chasing paperwork, start growing your book</h2>
          <p className="mb-10 text-xl text-gray-600">
            Book a 30-minute fit call to see exactly how we can automate your insurance workflows.
          </p>
          <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-600 px-10 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 inline-block text-center">
            Book Insurance Automation Call
          </a>
          <p className="mt-6 text-gray-500">
            $1,000 one-time setup • $100/month retainer • No long-term contracts
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/logo.png" alt="Automatiza.lat" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-white">Automatiza.lat</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/real-estate" className="text-gray-400 hover:text-white transition-colors">
                Real Estate
              </Link>
              <Link href="/insurance" className="text-white font-medium">
                Insurance
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            © {new Date().getFullYear()} Automatiza.lat - Workflow Automation Consultant
          </div>
        </div>
      </footer>
    </main>
  )
}