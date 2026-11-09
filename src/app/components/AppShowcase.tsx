import PhoneMockup from './PhoneMockup';
import { Smartphone, Shield, TrendingUp } from 'lucide-react';

export default function AppShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
            Mobile App
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900">
            Trade with Trusted Market Experts
          </h2>
          <p className="text-xl text-gray-600">
            Connect with SEBI registered investment advisors and analysts through our powerful mobile platform
          </p>
        </div>

        {/* App Mockup Display */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative">
            {/* Main Phone */}
            <div className="transform hover:scale-105 transition-transform duration-500">
              <PhoneMockup />
            </div>

            {/* Floating Feature Cards */}
            <div className="hidden lg:block absolute -left-48 top-1/4 transform -translate-y-1/2">
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 w-64">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">SEBI Registered</div>
                    <div className="text-lg text-gray-900">500+ Experts</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  All advisors are verified and SEBI registered professionals
                </p>
              </div>
            </div>

            <div className="hidden lg:block absolute -right-48 top-2/3 transform -translate-y-1/2">
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 w-64">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Portfolio Growth</div>
                    <div className="text-lg text-green-600">+8.5% Avg</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Track your investments and see real-time growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white mb-2">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl text-gray-900">Mobile First</h3>
            <p className="text-gray-600">
              Manage your investments on-the-go with our intuitive mobile app
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white mb-2">
              <Shield size={32} />
            </div>
            <h3 className="text-xl text-gray-900">Secure & Safe</h3>
            <p className="text-gray-600">
              Bank-grade security with end-to-end encryption for all transactions
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white mb-2">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl text-gray-900">Real-time Updates</h3>
            <p className="text-gray-600">
              Get instant market updates and expert recommendations
            </p>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-2xl transition-all flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download on App Store
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:shadow-2xl transition-all flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
