export default function MembersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="bg-slate-900 text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">MC</div>
            <span className="font-bold text-lg">Missed Call Money Machine</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="/members" className="text-white font-semibold">Dashboard</a>
            <a href="#modules" className="text-slate-300 hover:text-white transition-colors">Training</a>
            <a href="#tools" className="text-slate-300 hover:text-white transition-colors">Tools</a>
            <a href="#support" className="text-slate-300 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome Back! 👋
              </h1>
              <p className="text-slate-300 text-lg mb-6">
                Your AI assistant has been working hard. Here's what's happening with your calls.
              </p>
              <a
                href="#stats"
                className="inline-flex items-center text-indigo-300 hover:text-indigo-200 font-semibold"
              >
                View Your Stats
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">🤖</div>
                <div>
                  <p className="font-semibold">AI Status</p>
                  <p className="text-green-400 text-sm">● Active & Answering Calls</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-2xl font-bold">247</p>
                  <p className="text-xs text-slate-400">Calls Today</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-2xl font-bold">189</p>
                  <p className="text-xs text-slate-400">Leads</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-xs text-slate-400">Booked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section id="stats" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">This Month's Performance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl">📞</div>
                <span className="text-green-600 text-sm font-semibold">+12%</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">1,247</p>
              <p className="text-slate-600">Total Calls Answered</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">💰</div>
                <span className="text-green-600 text-sm font-semibold">+23%</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">892</p>
              <p className="text-slate-600">Leads Captured</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📅</div>
                <span className="text-green-600 text-sm font-semibold">+18%</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">156</p>
              <p className="text-slate-600">Appointments Booked</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">💵</div>
                <span className="text-green-600 text-sm font-semibold">+31%</span>
              </div>
              <p className="text-3xl font-bold text-slate-900">$18,450</p>
              <p className="text-slate-600">Est. Revenue Recovered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section id="modules" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Training Modules</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900">Getting Started</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Completed</span>
                  </div>
                  <p className="text-slate-600 mb-4">Learn how your AI assistant works and how to navigate your dashboard.</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Watch Module →</a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900">Customizing Your AI</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">In Progress</span>
                  </div>
                  <p className="text-slate-600 mb-4">Set up your greeting, customize questions, and configure appointment settings.</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Continue Module →</a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-300 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900">Lead Conversion Strategies</h3>
                    <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold">Locked</span>
                  </div>
                  <p className="text-slate-600 mb-4">Advanced techniques to convert more AI-qualified leads into paying customers.</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                    <div className="bg-slate-300 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-slate-400">Complete Module 2 to unlock</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-300 text-white rounded-lg flex items-center justify-center font-bold">4</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900">Scaling Your Results</h3>
                    <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold">Locked</span>
                  </div>
                  <p className="text-slate-600 mb-4">How to maximize ROI and scale your AI assistant as your business grows.</p>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                    <div className="bg-slate-300 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-slate-400">Complete Module 3 to unlock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section id="tools" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Tools & Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📞</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Call History</h3>
              <p className="text-slate-600 mb-4">Listen to recordings and review transcripts of all answered calls.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">View Calls →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">⚙️</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">AI Settings</h3>
              <p className="text-slate-600 mb-4">Customize your AI's voice, greeting, and conversation flow.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Edit Settings →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📊</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Reports</h3>
              <p className="text-slate-600 mb-4">Download detailed reports on calls, leads, and conversions.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">View Reports →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📅</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Calendar Integration</h3>
              <p className="text-slate-600 mb-4">Connect and manage your calendar for automatic booking.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Manage Calendar →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">🔔</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Notifications</h3>
              <p className="text-slate-600 mb-4">Set up alerts for new leads, appointments, and important calls.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Configure →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📚</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Resource Library</h3>
              <p className="text-slate-600 mb-4">Scripts, templates, and guides to maximize your results.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Browse Library →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-12 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-slate-300 mb-8">
            Our support team is available to help you get the most out of your AI assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@missedcallmoneymachine.com"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <a
              href="https://mydigitalgig.mydigitalgig.com/demo/d30bad2dd9f742f90ece2d85dada5d973d7e3232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Support Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-sm">
        <p>© 2026 Missed Call Money Machine. All rights reserved.</p>
      </footer>
    </main>
  );
}
