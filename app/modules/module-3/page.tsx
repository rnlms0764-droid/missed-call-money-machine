export default function Module3Page() {
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
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">Module 3</span>
            <span className="bg-slate-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Locked</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Lead Conversion Strategies
          </h1>
          <p className="text-indigo-100 text-lg">
            Advanced techniques to convert more AI-qualified leads into paying customers.
          </p>
        </div>
      </section>

      {/* Locked Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-100 rounded-xl p-12 text-center border-2 border-dashed border-slate-300">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Module Locked</h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Complete Module 2: Customizing Your AI to unlock this module. You'll learn advanced lead conversion strategies once you've mastered the basics.
            </p>
            <a
              href="/modules/module-2"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all"
            >
              Continue Module 2
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Preview */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What You'll Learn in This Module</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 opacity-75">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📞</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Follow-Up Sequences</h3>
                <p className="text-slate-600">Learn how to set up automated SMS and email follow-ups that convert leads who aren't ready to book immediately.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 opacity-75">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">🎯</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Lead Scoring</h3>
                <p className="text-slate-600">Implement a lead scoring system to prioritize your hottest prospects and focus your energy where it matters most.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 opacity-75">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">💬</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Objection Handling</h3>
                <p className="text-slate-600">Master the art of handling common objections like price, timing, and competition during your follow-up calls.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 opacity-75">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📊</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Conversion Tracking</h3>
                <p className="text-slate-600">Set up systems to track your conversion rates and identify opportunities for improvement in your sales process.</p>
              </div>
            </div>
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
