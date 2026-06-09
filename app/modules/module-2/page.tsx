export default function Module2Page() {
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
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">Module 2</span>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">In Progress</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Customizing Your AI
          </h1>
          <p className="text-indigo-100 text-lg">
            Set up your greeting, customize questions, and configure appointment settings.
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
                <p className="text-slate-400">Video placeholder - Module 2 Training</p>
                <p className="text-sm text-slate-500 mt-2">Duration: 24 minutes</p>
              </div>
            </div>
          </div>

          {/* Module Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Module</h2>
            <p className="text-slate-600 mb-6">
              This module walks you through customizing your AI assistant to match your brand voice and business needs. You'll learn how to set up the greeting, configure qualification questions, and connect your calendar for automatic booking.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">What You'll Learn:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Writing your AI's greeting script
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Setting up qualification questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Connecting your calendar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    Configuring appointment types
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Resources:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                      <span>📄</span> Greeting Script Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                      <span>❓</span> Qualification Question Bank
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
                      <span>📅</span> Calendar Integration Guide
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
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Your Greeting Sets the Tone</h3>
                  <p className="text-slate-600">The first 10 seconds of the call determine whether the caller stays engaged. Your greeting should be warm, professional, and clearly identify your business.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Qualify Before You Book</h3>
                  <p className="text-slate-600">The right qualification questions filter out tire-kickers and ensure you're only booking appointments with serious prospects who are a good fit for your services.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Calendar Integration is Key</h3>
                  <p className="text-slate-600">When your AI can see your real-time availability and book directly into your calendar, the entire process becomes seamless for both you and your customers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Test and Refine</h3>
                  <p className="text-slate-600">Your first setup won't be perfect. Listen to calls, gather feedback, and continuously refine your scripts and questions for better results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Action Items</h2>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                <span className="text-slate-700">Write your custom greeting script (use templates provided)</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                <span className="text-slate-700">Select 3-5 qualification questions from the question bank</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                <span className="text-slate-700">Connect your Google or Outlook calendar</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                <span className="text-slate-700">Set your available appointment times and buffer periods</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                <span className="text-slate-700">Test the booking flow by calling your own number</span>
              </label>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <a
              href="/modules/module-1"
              className="inline-flex items-center justify-center bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Previous: Getting Started
            </a>
            <a
              href="/modules/module-3"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
              Next Module: Lead Conversion
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
