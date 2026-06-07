export default function CheckoutSuccess() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Missed Call Money Machine!
        </h1>

        <p className="text-xl text-slate-300 mb-8">
          Your 30-day free trial has started. You're about to never miss a call again.
        </p>

        {/* Next Steps */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next:</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg">Check Your Email</h3>
                <p className="text-slate-300">We've sent your welcome email with login details and next steps.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg">Onboarding Call (30 min)</h3>
                <p className="text-slate-300">Schedule your setup call. We'll configure your AI assistant and connect your calendar.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg">Go Live in 48 Hours</h3>
                <p className="text-slate-300">Your AI starts answering missed calls. You start capturing leads you were losing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all"
          >
            Go to Dashboard
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="mailto:support@openclawautomates.com"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all"
          >
            Contact Support
          </a>
        </div>

        <p className="text-slate-400 mt-8 text-sm">
          Questions? Email us at support@openclawautomates.com
        </p>
      </div>
    </main>
  );
}