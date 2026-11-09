import { Sparkles, Star } from 'lucide-react';
import { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const lineChartData = [
  { month: 'Jan', value: 180000 },
  { month: 'Feb', value: 190000 },
  { month: 'Mar', value: 195000 },
  { month: 'Apr', value: 200000 },
  { month: 'May', value: 205000 },
  { month: 'Jun', value: 215000 },
  { month: 'Jul', value: 220342 },
];

const barChartData = [
  { month: 'Jan', value: 280 },
  { month: 'Feb', value: 120 },
  { month: 'Mar', value: 180 },
  { month: 'Apr', value: 550 },
  { month: 'May', value: 220 },
  { month: 'Jun', value: 980 },
  { month: 'Jul', value: 450 },
  { month: 'Aug', value: 380 },
  { month: 'Sep', value: 520 },
];

const areaChartData = [
  { month: 'Jan', value: 280 },
  { month: 'Feb', value: 350 },
  { month: 'Mar', value: 320 },
  { month: 'Apr', value: 420 },
  { month: 'May', value: 380 },
  { month: 'Jun', value: 440 },
  { month: 'Jul', value: 459 },
];

const onboardingScreens = [
  {
    title: 'Easy ways to manage your Investments',
    description: 'Secure, high-speed fund transfers with guaranteed transaction safety for seamless investment operations.',
    chart: 'line',
    color: 'green',
  },
  {
    title: 'Take control with smart investing tools',
    description: 'Invest confidently with rapid, secure transfers and guaranteed safety.',
    chart: 'bar',
    color: 'cyan',
  },
  {
    title: 'All investments managed in one place',
    description: 'Seamless investing powered by secure and instant fund transfers.',
    chart: 'area',
    color: 'purple',
  },
];

export default function OnboardingPreview() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 text-blue-200">
        <Sparkles size={40} />
      </div>
      <div className="absolute bottom-20 right-10 text-orange-300">
        <Star size={40} />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
            App Experience
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900">
            Experience Seamless Onboarding
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes with our intuitive, user-friendly mobile app
          </p>
        </div>

        {/* Onboarding Screens */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View - All Three Screens */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Screen 1 - Green Chart */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="space-y-6">
                {/* Star Icon */}
                <div className="text-blue-600">
                  <Star size={32} />
                </div>

                {/* Income Badge */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="20" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
                      <circle cx="24" cy="24" r="20" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="126" strokeDashoffset="32" transform="rotate(-90 24 24)"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-orange-600">$65</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Income this week</div>
                    <div className="text-xs text-gray-500">$39k less than last week</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-4 h-48 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineChartData}>
                      <defs>
                        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity={0.1}/>
                          <stop offset="100%" stopColor="#10b981" stopOpacity={0.02}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#10b981" fill="url(#greenGradient)" />
                      <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-6 right-6 bg-green-500 text-white px-3 py-2 rounded-lg text-xs">
                    <div className="text-[10px] opacity-80">29 July 00:00</div>
                    <div className="flex items-center gap-2">
                      <span>220,342.76</span>
                      <span className="text-green-200">+3.4%</span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="pt-4">
                  <h3 className="text-xl text-gray-900 mb-2">
                    Easy ways to manage your Investments
                  </h3>
                  <p className="text-sm text-gray-600">
                    Secure, high-speed fund transfers with guaranteed transaction safety for seamless investment operations.
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Screen 2 - Cyan Bars */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="space-y-6">
                {/* Star Icon */}
                <div className="text-blue-600">
                  <Star size={32} />
                </div>

                {/* Spending Badge */}
                <div className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-xl text-sm">
                  <div className="text-xs opacity-80">Current margin: April Spendings</div>
                  <div className="flex items-center gap-2">
                    <span>$350.00</span>
                    <span className="opacity-60">/</span>
                    <span>$640.00</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-4 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barChartData}>
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} tickFormatter={(value) => `$${value}`} />
                      <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Decorative Star */}
                <div className="text-right text-orange-500">
                  <Star size={24} />
                </div>

                {/* Text Content */}
                <div className="pt-4">
                  <h3 className="text-xl text-gray-900 mb-2">
                    Take control with smart investing tools
                  </h3>
                  <p className="text-sm text-gray-600">
                    Invest confidently with rapid, secure transfers and guaranteed safety.
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Screen 3 - Purple Area */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="space-y-6">
                {/* Star Icon */}
                <div className="text-blue-600">
                  <Star size={32} />
                </div>

                {/* Chart with Badge */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-4 h-64 relative">
                  <div className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-xl text-sm z-10">
                    <div className="text-xs opacity-80">Total Income</div>
                    <div className="flex items-center gap-2">
                      <span>$459.1k</span>
                      <span className="text-purple-200">↑ 42.9%</span>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaChartData}>
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                      <Area type="natural" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Decorative Star */}
                <div className="text-right text-orange-500">
                  <Star size={24} />
                </div>

                {/* Text Content */}
                <div className="pt-4">
                  <h3 className="text-xl text-gray-900 mb-2">
                    All investments managed in one place
                  </h3>
                  <p className="text-sm text-gray-600">
                    Seamless investing powered by secure and instant fund transfers.
                  </p>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200 max-w-sm mx-auto">
              {activeSlide === 0 && (
                <div className="space-y-6">
                  <div className="text-blue-600"><Star size={32} /></div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="126" strokeDashoffset="32" transform="rotate(-90 24 24)"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-orange-600">$65</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">Income this week</div>
                      <div className="text-xs text-gray-500">$39k less than last week</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-4 h-48 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineChartData}>
                        <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl text-gray-900 mb-2">Easy ways to manage your Investments</h3>
                    <p className="text-sm text-gray-600">Secure, high-speed fund transfers with guaranteed transaction safety.</p>
                  </div>
                </div>
              )}
              {activeSlide === 1 && (
                <div className="space-y-6">
                  <div className="text-blue-600"><Star size={32} /></div>
                  <div className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-xl text-sm">
                    <div className="text-xs">Current margin: April Spendings</div>
                    <div>$350.00 / $640.00</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-4 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl text-gray-900 mb-2">Take control with smart investing tools</h3>
                    <p className="text-sm text-gray-600">Invest confidently with rapid, secure transfers.</p>
                  </div>
                </div>
              )}
              {activeSlide === 2 && (
                <div className="space-y-6">
                  <div className="text-blue-600"><Star size={32} /></div>
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-4 h-64 relative">
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-2 rounded-lg text-sm z-10">
                      <div className="text-xs">Total Income</div>
                      <div>$459.1k ↑ 42.9%</div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={areaChartData}>
                        <Area type="natural" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl text-gray-900 mb-2">All investments managed in one place</h3>
                    <p className="text-sm text-gray-600">Seamless investing powered by secure transfers.</p>
                  </div>
                </div>
              )}
              
              {/* Pagination Controls */}
              <div className="flex items-center justify-center gap-2 pt-6">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1))}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1))}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-2xl transition-all">
              Download the App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
