import { Users, TrendingUp, ArrowRight, Lightbulb, Shield } from 'lucide-react';

export default function RoleSelection() {
  return (
    <section id="roles" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">
            Choose Your Path
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900">
            Built for Investors & Analysts
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're growing your wealth or providing expert guidance, Invia has the perfect solution
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Investor Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 overflow-hidden hover:shadow-2xl transition-all border border-blue-200">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 opacity-10">
              <TrendingUp size={200} className="text-blue-600" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 p-4 bg-blue-600 rounded-2xl inline-block">
                <Users size={40} className="text-white" />
              </div>

              <h3 className="text-3xl text-gray-900 mb-3">
                For Investors
              </h3>

              <p className="text-xl text-blue-900 mb-6">
                Get financial advice, grow your wealth!
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-blue-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Access expert financial advisors</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-blue-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Personalized investment strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-blue-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Real-time portfolio tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-blue-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Market insights & research reports</span>
                </div>
              </div>

              <button className="group/btn flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
                Start Investing
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Analyst Card */}
          <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 overflow-hidden hover:shadow-2xl transition-all border border-purple-200">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 opacity-10">
              <Lightbulb size={200} className="text-purple-600" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 p-4 bg-purple-600 rounded-2xl inline-block">
                <Shield size={40} className="text-white" />
              </div>

              <h3 className="text-3xl text-gray-900 mb-3">
                For Analysts
              </h3>

              <p className="text-xl text-purple-900 mb-6">
                Provide insights and advisory services to clients!
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Build your client portfolio</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Share market insights & recommendations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Manage consultations efficiently</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-purple-600 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Track performance & earnings</span>
                </div>
              </div>

              <button className="group/btn flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all">
                Become an Analyst
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
