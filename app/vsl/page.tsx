import { StartTrialButton } from "@/components/start-trial-button"

export default function VSLPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="py-4 px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">
              📞
            </div>
            <span className="font-bold text-xl">Missed Call Money Machine</span>
          </div>
          <a href="/" className="text-slate-400 hover:text-white transition-colors">
            Back to Home
          </a>
        </div>
      </header>

      {/* VSL Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⚠️ Warning: You're Losing Money Every Day
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Shocking Truth About Missed Calls
          </h1>
          
          <p className="text-xl text-slate-300 mb-8">
            Watch this 5-minute video to discover how much revenue you're losing — and how to fix it today.
          </p>

          {/* Video Placeholder */}
          <div className="relative bg-slate-800 rounded-2xl overflow-hidden aspect-video mb-8 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-indigo-700 transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 5.84a.75.75 0 00-1.06 1.06l4.78 4.78-4.78 4.78a.75.75 0 101.06 1.06l5.25-5.25a.75.75 0 000-1.06L6.3 5.84z" />
                    <path d="M12.3 5.84a.75.75 0 00-1.06 1.06l4.78 4.78-4.78 4.78a.75.75 0 101.06 1.06l5.25-5.25a.75.75 0 000-1.06l-5.25-5.25z" />
                  </svg>
                </div>
                <p className="text-slate-400">Click to Play Video</p>
              </div>
            </div>
            
            {/* Video overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm text-slate-300">🎬 How One Dentist Recovered $47,000 in 90 Days</p>
            </div>
          </div>

          {/* CTA Button */}
          <StartTrialButton className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-xl transition-all transform hover:scale-105 text-xl shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed">
            Start Your 30-Day Free Trial
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </StartTrialButton>
          
          <p className="text-slate-400 mt-4">No credit card required • Cancel anytime • Setup in 48 hours</p>
        </div>
      </section>

      {/* Bullet Points */}
      <section className="py-12 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">In This Video, You'll Discover:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">✓</div>
              <p className="text-slate-300">Why 80% of callers hang up on voicemail (and what they do instead)</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">✓</div>
              <p className="text-slate-300">The exact revenue you're losing every month (calculator included)</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">✓</div>
              <p className="text-slate-300">How AI answers calls 24/7 without sounding like a robot</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">✓</div>
              <p className="text-slate-300">Real case studies: $12K, $23K, $47K recovered in 30-90 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
            <p className="text-red-300 font-semibold mb-2">⏰ Every Day You Wait = Lost Revenue</p>
            <p className="text-slate-400">While you watch this video, your competitors are answering calls you're missing.</p>
          </div>
          
          <StartTrialButton className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold py-5 px-10 rounded-xl hover:bg-slate-100 transition-all transform hover:scale-105 text-xl disabled:opacity-70 disabled:cursor-not-allowed">
            Claim Your 30-Day Free Trial Now
          </StartTrialButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 Missed Call Money Machine. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
