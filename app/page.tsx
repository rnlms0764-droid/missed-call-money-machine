export default function SalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 AI-Powered Call Recovery
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Never Lose Revenue to a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Missed Call
                </span>{" "}
                Again
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our AI assistant answers your missed calls 24/7, qualifies leads, 
                and books appointments — while you focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendar.google.com/calendar/u/0?cid=MTFjYWU5NGU4YzgyZDc1MTFiODJhMzFkYTk5NDA4NGI2MjhiNWYzYmJmMWNmODkzODg0NWU4ZjE1M2Y5ZjM0NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Call
                </a>
                <a
                  href="https://checkout.stripe.com/c/pay/cs_live_b1oUq8SmKWt4SvW5pqtdRAUZQejGyeaasUAOxLXb6hpYK9An5y5nc2UVO7"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
                >
                  Start Free Trial
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="https://mydigitalgig.mydigitalgig.com/demo/d30bad2dd9f742f90ece2d85dada5d973d7e3232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No setup fees
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  48-hour setup
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-lg">📞</div>
                      <div>
                        <p className="font-semibold">Missed Call from (352) 555-0147</p>
                        <p className="text-sm text-slate-400">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-lg">🤖</div>
                      <div>
                        <p className="font-semibold text-green-300">AI Assistant Responded</p>
                        <p className="text-sm text-slate-300 mt-1">
                          "Hi! This is Sarah from ABC Dental. I see you called — how can I help you today?"
                        </p>
                        <p className="text-xs text-green-400 mt-2">✓ Lead qualified • Appointment booked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600">80%</div>
              <p className="text-slate-600 mt-2">of callers hang up on voicemail</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">$12K</div>
              <p className="text-slate-600 mt-2">average monthly revenue recovered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">24/7</div>
              <p className="text-slate-600 mt-2">AI answers every call</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">5 min</div>
              <p className="text-slate-600 mt-2">average response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Every Missed Call is Money Walking Out the Door
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            You're busy running your business. You can't answer every call. But your competitors will.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="font-bold text-slate-900 mb-2">62% of calls go unanswered</h3>
              <p className="text-slate-600">You're losing over half your opportunities before you even know they exist.</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-bold text-slate-900 mb-2">80% won't leave voicemail</h3>
              <p className="text-slate-600">They hang up and call the next business on their list. You're not even in the running.</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-slate-900 mb-2">Speed wins deals</h3>
              <p className="text-slate-600">78% of customers buy from the first business to respond. Are you first?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-900 text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Your New AI Assistant</h2>
            <p className="text-xl text-slate-300">Works 24/7. Never calls in sick. Captures every opportunity.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-2xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Answers Every Call</h3>
              <p className="text-slate-300 text-sm">AI voice assistant picks up missed calls instantly, 24/7.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-2xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2">Qualifies Leads</h3>
              <p className="text-slate-300 text-sm">Asks the right questions to identify hot prospects vs. tire kickers.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-2xl mb-4">📅</div>
              <h3 className="font-bold text-lg mb-2">Books Appointments</h3>
              <p className="text-slate-300 text-sm">Checks your calendar and schedules meetings automatically.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-2xl mb-4">📊</div>
              <h3 className="font-bold text-lg mb-2">Tracks Everything</h3>
              <p className="text-slate-300 text-sm">Daily reports on calls answered, leads captured, revenue protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">We Set Up Your AI (48 hours)</h3>
                <p className="text-slate-600">You give us your FAQ, calendar access, and call preferences. We train your AI assistant on your business.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Missed Call? No Problem.</h3>
                <p className="text-slate-600">When you miss a call, our AI answers instantly. It sounds natural, knows your business, and handles the conversation.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">You Get the Lead</h3>
                <p className="text-slate-600">Qualified leads are texted/emailed to you immediately. Appointments appear on your calendar. You close the deal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">What Business Owners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">"We were missing 8-10 calls a day. In the first month, the AI captured 23 qualified leads we would have lost. Paid for itself 3x over."</p>
              <div className="font-semibold text-slate-900">Dr. Sarah Chen</div>
              <div className="text-sm text-slate-500">Chen Family Dental</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">"I'm a solo attorney. I can't answer calls when I'm in court. This system books consultations while I'm working. Game changer."</p>
              <div className="font-semibold text-slate-900">Michael Torres</div>
              <div className="text-sm text-slate-500">Torres Law Group</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Setup was fast. The AI sounds surprisingly natural. My customers don't even know they're talking to a bot. Highly recommend."</p>
              <div className="font-semibold text-slate-900">Jennifer Walsh</div>
              <div className="text-sm text-slate-500">Walsh HVAC Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 mb-12">No setup fees. No hidden costs. Cancel anytime.</p>
          
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider mb-4 text-indigo-200">Complete System</div>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-6xl font-bold">$997</span>
              <span className="text-2xl text-indigo-200">/month</span>
            </div>
            <p className="text-indigo-100 mb-8">Everything you need to never miss a call again</p>
            
            <ul className="text-left space-y-4 mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AI voice assistant (24/7)
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited minutes & texts
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Calendar integration
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lead qualification & routing
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Daily & weekly reports
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                CRM integration
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Monthly optimization calls
              </li>
            </ul>
            
            <a 
              href="https://calendar.google.com/calendar/u/0?cid=MTFjYWU5NGU4YzgyZDc1MTFiODJhMzFkYTk5NDA4NGI2MjhiNWYzYmJmMWNmODkzODg0NWU4ZjE1M2Y5ZjM0NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-green-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-700 transition-colors text-lg text-center mb-4"
            >
              Book a Call
            </a>
            <a 
              href="https://checkout.stripe.com/c/pay/cs_live_b1oUq8SmKWt4SvW5pqtdRAUZQejGyeaasUAOxLXb6hpYK9An5y5nc2UVO7"
              className="w-full block bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-colors text-lg text-center"
            >
              Start Free 30-Day Trial
            </a>
            <p className="text-sm text-indigo-200 mt-4">No credit card required. Full access. Cancel anytime.</p>
          </div>
          
          <div className="mt-8 text-slate-500">
            <p>Need multiple locations? <a href="#contact" className="text-indigo-600 hover:underline">Contact us</a> for custom pricing.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">How long does setup take?</h3>
              <p className="text-slate-600">48 hours from signup to live. We handle everything — you just answer a few questions about your business.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Do I need to change my phone number?</h3>
              <p className="text-slate-600">Nope! You keep your existing number. We just intercept missed calls and handle them with AI.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">What if the AI can't answer a question?</h3>
              <p className="text-slate-600">The AI is trained on your business, but if a caller needs human assistance, it can seamlessly transfer them to you or your team. You stay in control.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Is there a contract?</h3>
              <p className="text-slate-600">No contracts. Cancel anytime. We earn your business every month by delivering results.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">What calendar systems do you integrate with?</h3>
              <p className="text-slate-600">Google Calendar, Outlook, Calendly, Acuity, and most major scheduling platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Stop Losing Revenue to Missed Calls</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join 200+ businesses using AI to capture every opportunity. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=MTFjYWU5NGU4YzgyZDc1MTFiODJhMzFkYTk5NDA4NGI2MjhiNWYzYmJmMWNmODkzODg0NWU4ZjE1M2Y5ZjM0NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>
            <a
              href="https://checkout.stripe.com/c/pay/cs_live_b1oUq8SmKWt4SvW5pqtdRAUZQejGyeaasUAOxLXb6hpYK9An5y5nc2UVO7"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 text-lg"
            >
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <p className="text-slate-500 mt-4">Questions? Book a call or start your free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Missed Call Money Machine</h3>
              <p className="text-sm">AI-powered call recovery for service businesses. Never lose revenue to a missed call again.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            © 2026 Missed Call Money Machine. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}