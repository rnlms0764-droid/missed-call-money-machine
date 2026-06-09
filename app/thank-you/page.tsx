export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-slate-900 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">MC</div>
            <span className="font-bold text-lg">Missed Call Money Machine</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✅ Payment Confirmed
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Missed Call Money Machine!
          </h1>
          <p className="text-xl text-green-100">
            Your AI assistant is being set up. Here's what happens next.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What to Do Next
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Check Your Email</h3>
              <p className="text-slate-600">You'll receive your welcome email with login details and next steps within 5 minutes.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Schedule Onboarding</h3>
              <p className="text-slate-600">Book your 30-minute setup call so we can connect your calendar and customize your AI.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Go Live in 48 Hours</h3>
              <p className="text-slate-600">We'll handle the technical setup. You just watch your calendar fill up with qualified appointments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Area Preview */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Your Member Area
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Access everything you need to manage your AI assistant and track your results.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📊</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Dashboard</h3>
              <p className="text-slate-600">View daily call stats, leads captured, and appointments booked.</p>
            </a>
            <a href="#" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">⚙️</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">AI Settings</h3>
              <p className="text-slate-600">Customize your AI's greeting, questions, and appointment booking preferences.</p>
            </a>
            <a href="#" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">📞</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Call History</h3>
              <p className="text-slate-600">Listen to recorded calls, review transcripts, and see lead details.</p>
            </a>
            <a href="#" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">🎓</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Training</h3>
              <p className="text-slate-600">Video tutorials on maximizing your AI assistant and converting more leads.</p>
            </a>
          </div>
          <div className="text-center mt-8">
            <a
              href="/members"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all"
            >
              Access Member Area
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Guarantee Reminder */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-slate-600 mb-4">
              Try the Missed Call Money Machine risk-free for 30 days. If you don't see a measurable increase in captured leads and booked appointments, or if you're not completely satisfied for any reason, just let us know and we'll give you a full refund. No questions asked.
            </p>
            <p className="text-green-700 font-semibold">
              We're that confident this will transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-slate-300 mb-8">
            Our support team is here to help you get the most out of your AI assistant.
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
              Book a Call
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
