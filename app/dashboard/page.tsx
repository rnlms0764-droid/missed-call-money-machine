export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">
              📞
            </div>
            <span className="font-bold text-xl text-slate-900">Missed Call Money Machine</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">Trial ends in 28 days</span>
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto p-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-1">Calls Answered</p>
            <p className="text-3xl font-bold text-slate-900">0</p>
            <p className="text-xs text-slate-400 mt-1">Waiting for setup</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-1">Leads Captured</p>
            <p className="text-3xl font-bold text-slate-900">0</p>
            <p className="text-xs text-slate-400 mt-1">Waiting for setup</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-1">Appointments Booked</p>
            <p className="text-3xl font-bold text-slate-900">0</p>
            <p className="text-xs text-slate-400 mt-1">Waiting for setup</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-1">Revenue Protected</p>
            <p className="text-3xl font-bold text-green-600">$0</p>
            <p className="text-xs text-slate-400 mt-1">Waiting for setup</p>
          </div>
        </div>

        {/* Setup Checklist */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">Setup Checklist</h2>
            <p className="text-slate-500">Complete these steps to activate your AI assistant</p>
          </div>
          
          <div className="divide-y divide-slate-100">
            <div className="p-6 flex items-center gap-4">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Create Account</p>
                <p className="text-sm text-slate-500">Your account is active</p>
              </div>
              <span className="text-sm text-green-600 font-medium">Completed</span>
            </div>

            <div className="p-6 flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-indigo-600 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Schedule Onboarding Call</p>
                <p className="text-sm text-slate-500">30-minute setup call with our team</p>
              </div>
              <a href="#" className="text-indigo-600 font-medium hover:underline">Schedule Now</a>
            </div>

            <div className="p-6 flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-slate-300 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-slate-400">Connect Your Phone Number</p>
                <p className="text-sm text-slate-400">We'll configure call forwarding</p>
              </div>
              <span className="text-sm text-slate-400">Pending</span>
            </div>

            <div className="p-6 flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-slate-300 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-slate-400">Connect Calendar</p>
                <p className="text-sm text-slate-400">Google, Outlook, or Calendly</p>
              </div>
              <span className="text-sm text-slate-400">Pending</span>
            </div>

            <div className="p-6 flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-slate-300 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-slate-400">Train Your AI</p>
                <p className="text-sm text-slate-400">Add your FAQ and business details</p>
              </div>
              <span className="text-sm text-slate-400">Pending</span>
            </div>

            <div className="p-6 flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-slate-300 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-slate-400">Go Live</p>
                <p className="text-sm text-slate-400">AI starts answering your calls</p>
              </div>
              <span className="text-sm text-slate-400">Pending</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-indigo-50 rounded-xl p-6">
          <h3 className="font-bold text-indigo-900 mb-2">Need Help?</h3>
          <p className="text-indigo-700 mb-4">Our team is here to help you get set up quickly.</p>
          <div className="flex gap-4">
            <a href="mailto:support@openclawautomates.com" className="text-indigo-600 font-medium hover:underline">
              Email Support
            </a>
            <span className="text-indigo-400">|</span>
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}