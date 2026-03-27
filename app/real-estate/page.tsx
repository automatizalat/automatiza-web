import { Check, Zap, MessageSquare, Clock, Calendar, Bell, Target, ArrowRight, Home, Shield } from 'lucide-react'
import Link from 'next/link'

export default function RealEstatePage() {
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
              <Link href="/insurance" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Insurance
              </Link>
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 transition-colors inline-block text-center">
                Book a Fit Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 border border-blue-200 px-4 py-1.5">
              <Home className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Real Estate Automation</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Speed to Lead Automation
              <span className="block text-blue-600 mt-2 text-4xl md:text-5xl">
                Never lose a commission again
              </span>
            </h1>
            <p className="mb-10 text-xl text-gray-600">
              Automate instant responses to Zillow/Facebook leads while you're driving or at showings. 
              Respond in seconds, not hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 inline-block text-center">
                Book a Real Estate Automation Call
              </a>
              <div className="text-gray-600">
                <span className="font-semibold text-blue-600">$1,000 Setup</span> + <span className="font-semibold text-blue-600">$100/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            The #1 reason real estate agents lose commissions
          </h2>
          <div className="rounded-2xl bg-red-50 border border-red-100 p-8 mb-12">
            <div className="flex items-start">
              <Target className="h-8 w-8 text-red-500 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Slow response times kill deals</h3>
                <p className="text-gray-700 text-lg">
                  Studies show that contacting a lead within <span className="font-bold text-red-600">5 minutes</span> vs 30 minutes 
                  increases conversion by <span className="font-bold text-red-600">21x</span>. 
                  But you can't be glued to your phone 24/7.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">The Traditional Way</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">⏰</span>
                  Lead comes in while you're driving
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📱</span>
                  You see it 30+ minutes later
                </li>
                <li className="flex items-center">
                  <span className="mr-2">😞</span>
                  Lead has already contacted 3 other agents
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💸</span>
                  Commission lost before you even respond
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-lg border-2 border-green-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">The Automated Way</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>
                  Lead comes in - system responds in 60 seconds
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🤖</span>
                  AI qualifies lead & schedules showing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📅</span>
                  Calendar invite sent automatically
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💰</span>
                  You show up to a pre-qualified, scheduled appointment
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
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">How our real estate automation works</h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Lead Capture',
                  description: 'Connect your Zillow, Facebook, website, or CRM. We handle all lead sources.',
                  features: ['Instant notification', 'Centralized lead database', 'No manual data entry']
                },
                {
                  step: '2',
                  title: 'Instant Response',
                  description: 'AI-powered responses within 60 seconds, 24/7.',
                  features: ['Personalized messages', 'Qualifying questions', 'Appointment scheduling']
                },
                {
                  step: '3',
                  title: 'Smart Qualification',
                  description: 'Automated lead scoring and prioritization.',
                  features: ['Budget assessment', 'Timeline evaluation', 'Property preferences']
                },
                {
                  step: '4',
                  title: 'Automated Follow-up',
                  description: 'Never let a lead go cold with sequenced follow-ups.',
                  features: ['Multi-channel follow-up', 'Personalized content', 'Re-engagement triggers']
                },
                {
                  step: '5',
                  title: 'Seamless Handoff',
                  description: 'Warm leads handed directly to you, ready to close.',
                  features: ['Complete lead profile', 'Scheduled appointments', 'All communication history']
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Everything you need to automate your real estate business</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
                title: '24/7 Lead Response',
                description: 'Instant SMS & email responses to new leads, even at 2 AM.'
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: 'Automated Scheduling',
                description: 'AI schedules showings directly into your calendar.'
              },
              {
                icon: <Bell className="h-8 w-8 text-blue-600" />,
                title: 'Smart Reminders',
                description: 'Automated reminders for showings, paperwork, and follow-ups.'
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: 'CRM Integration',
                description: 'Seamless connection with your existing CRM tools.'
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: 'Multi-Channel Follow-up',
                description: 'Automated sequences across SMS, email, and phone.'
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: 'Time Zone Intelligence',
                description: 'Automatically adjusts for client time zones and local hours.'
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
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">The math is simple</h2>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">21x</div>
                <p className="text-blue-200">Higher conversion with 5-minute response</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-blue-200">Hours saved per month on admin tasks</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">1</div>
                <p className="text-blue-200">Extra closing pays for years of automation</p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-xl mb-6">
                At an average commission of $15,000, <span className="font-bold">one saved deal</span> pays for 
                <span className="font-bold"> 6+ years</span> of automation.
              </p>
              <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-900 hover:bg-gray-100 transition-colors">
                Calculate Your ROI
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Stop losing commissions to slow responses</h2>
          <p className="mb-10 text-xl text-gray-600">
            Book a 30-minute fit call to see exactly how we can automate your lead response system.
          </p>
          <a href="https://calendar.app.google/tz9DJg2vrwAvDCWm8" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 inline-block text-center">
            Book Real Estate Automation Call
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
              <Link href="/real-estate" className="text-white font-medium">
                Real Estate
              </Link>
              <Link href="/insurance" className="text-gray-400 hover:text-white transition-colors">
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