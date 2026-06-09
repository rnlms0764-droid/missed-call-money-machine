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
            Welcome to Missed Call Money Machine!
          </h1>
          <p className="text-xl text-green-100">
            Your AI assistant will be live within 48 hours.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Check Your Email</h3>
              <p className="text-slate-600">You'll receive a welcome email within 5 minutes with next steps.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Schedule Setup Call</h3>
              <p className="text-slate-600">Book your 30-minute onboarding call to configure your AI.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Go Live</h3>
              <p className="text-slate-600">We'll set everything up and activate your AI within 48 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Ready to Get Started?
          </h2>
          <a
            href="https://calendar.app.google/rzbKAcRaz85XJ8EFA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all text-lg"
          >
            Schedule Your Setup Call
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
          <p className="text-slate-500 mt-4">
            Or wait for our email with your scheduling link.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Your Service Includes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">24/7 AI Call Answering</h3>
                <p className="text-slate-600">Never miss a call again</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">Lead Qualification</h3>
                <p className="text-slate-600">We identify your hottest prospects</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">Appointment Booking</h3>
                <p className="text-slate-600">Directly into your calendar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">Daily Reports</h3>
                <p className="text-slate-600">See every call and lead captured</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">Call Recording</h3>
                <p className="text-slate-600">Listen to any conversation</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">48-Hour Setup</h3>
                <p className="text-slate-600">Done-for-you configuration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-slate-300 mb-8">
            We're here to help you get the most out of your AI assistant.
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
              href="https://calendar.app.google/rzbKAcRaz85XJ8EFA"
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
