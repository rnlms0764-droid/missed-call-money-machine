export default function Module1Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="bg-slate-900 text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">MC</div>
            <span className="font-bold text-lg">Missed Call Money Machine</span>
          </a>
          <a href="/members" className="text-slate-300 hover:text-white transition-colors text-sm">
            ← Back to Dashboard
          </a>
        </div>
      </nav>

      {/* Module Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">Module 1</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Completed</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Getting Started
          </h1>
          <p className="text-indigo-100 text-lg">
            Learn how your AI assistant works and how to navigate your dashboard.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl overflow-hidden aspect-video mb-8">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-slate-400">Video placeholder - Module 1 Training</p>
                <p className="text-sm text-slate-500 mt-2">Duration: 18 minutes</p>
              </div>
            </div>
          </div>

          {/* Module Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Module</h2>
            <p className="text-slate-600 mb-6">
              In this module, you'll learn the fundamentals of how your Missed Call Money Machine works. We'll cover the dashboard, key metrics, and how to interpret your AI assistant's performance data.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">What You'll Learn:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    How the AI answers and qualifies calls
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Navigating your dashboard
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Understanding key metrics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Reading call transcripts
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Resources:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                      <span>📄</span> Dashboard Guide (PDF)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                      <span>📊</span> Metrics Cheat Sheet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                      <span>📝</span> Call Review Template
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Takeaways</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Your AI Works 24/7</h3>
                  <p className="text-slate-600">The AI assistant never sleeps, takes breaks, or calls in sick. It's always ready to answer your missed calls and capture leads.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Dashboard Shows Real-Time Data</h3>
                  <p className="text-slate-600">Your dashboard updates in real-time, showing calls answered, leads captured, and appointments booked as they happen.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Every Call is Recorded & Transcribed</h3>
                  <p className="text-slate-600">You can listen to every conversation and read transcripts to understand exactly how your AI is representing your business.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Integration is Seamless</h3>
                  <p className="text-slate-600">Your AI connects directly to your existing calendar and CRM, so appointments appear where you already work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <span className="text-slate-400">← Previous Module</span>
            <a
              href="/modules/module-2"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Next Module: Customizing Your AI
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm">
        <p>© 2026 Missed Call Money Machine. All rights reserved.</p>
      </footer>
    </main>
  );
}
