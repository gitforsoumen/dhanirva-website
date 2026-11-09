import { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Target, Bell, Check } from 'lucide-react';
import Home from '../imports/Home';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'recommendations', label: 'Recommendations', icon: TrendingUp },
  { id: 'analytics', label: 'Analytics', icon: PieChart },
  { id: 'goals', label: 'Goals', icon: Target },
  { id: 'alerts', label: 'Alerts', icon: Bell },
];

const features = [
  {
    id: 'dashboard',
    title: 'Unified Dashboard',
    description: 'See all your investments, performance, and insights in one beautiful view',
    points: [
      { title: 'Real-time Updates', description: 'Live market data synced every second', color: 'blue' },
      { title: 'Seamless Navigation', description: 'Intuitive design for effortless use', color: 'green' },
      { title: 'Customizable Views', description: 'Personalize your dashboard layout', color: 'purple' },
    ],
  },
  {
    id: 'recommendations',
    title: 'Expert Recommendations',
    description: 'Get personalized investment suggestions from SEBI registered advisors',
    points: [
      { title: 'AI-Powered Insights', description: 'Smart recommendations based on your goals', color: 'blue' },
      { title: 'Expert Analysis', description: 'Detailed research from market professionals', color: 'green' },
      { title: 'Risk Assessment', description: 'Understand the risk before you invest', color: 'purple' },
    ],
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Deep dive into your portfolio performance with comprehensive analytics',
    points: [
      { title: 'Performance Tracking', description: 'Monitor returns across all investments', color: 'blue' },
      { title: 'Sector Analysis', description: 'Diversification insights and trends', color: 'green' },
      { title: 'Tax Reports', description: 'Automated tax calculation and reports', color: 'purple' },
    ],
  },
  {
    id: 'goals',
    title: 'Goal-Based Investing',
    description: 'Set financial goals and track your progress towards achieving them',
    points: [
      { title: 'Goal Planning', description: 'Create and manage multiple financial goals', color: 'blue' },
      { title: 'Progress Tracking', description: 'Visual representation of goal achievement', color: 'green' },
      { title: 'Smart Suggestions', description: 'Get tips to reach your goals faster', color: 'purple' },
    ],
  },
  {
    id: 'alerts',
    title: 'Smart Alerts',
    description: 'Never miss important market movements or opportunities',
    points: [
      { title: 'Price Alerts', description: 'Get notified when stocks hit your targets', color: 'blue' },
      { title: 'Portfolio Updates', description: 'Daily summaries of your investments', color: 'green' },
      { title: 'Expert Signals', description: 'Instant notifications from your advisors', color: 'purple' },
    ],
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function MobileExperience() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const currentFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">
            App Experience
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900">
            A Beautifully Designed{' '}
            <span className="text-blue-600">Mobile Experience</span>
          </h2>
          <p className="text-xl text-gray-600">
            Intuitive interface with powerful features at your fingertips
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Feature Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl text-gray-900 mb-4">
                {currentFeature.title}
              </h3>
              <p className="text-lg text-gray-600">
                {currentFeature.description}
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-6">
              {currentFeature.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    point.color === 'blue' ? 'bg-blue-100' :
                    point.color === 'green' ? 'bg-green-100' :
                    'bg-purple-100'
                  }`}>
                    <Check className={getColorClasses(point.color)} size={20} />
                  </div>
                  <div>
                    <div className="text-lg text-gray-900 mb-1">{point.title}</div>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative flex justify-center items-center">
            {/* Page Indicator */}
            <div className="absolute top-0 right-8 z-20 text-5xl text-blue-600">
              1<span className="text-gray-300">/5</span>
            </div>

            {/* Phone Mockup */}
            <div className="relative scale-[0.65]">
              <div className="relative w-[393px] h-[852px] bg-black rounded-[60px] p-[12px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
                {/* Inner Screen Border */}
                <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
                  {/* Screen Content */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Home />
                  </div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-[20px] z-10"></div>
                
                {/* Volume Buttons */}
                <div className="absolute left-[-3px] top-[120px] w-[3px] h-[40px] bg-gray-800 rounded-l"></div>
                <div className="absolute left-[-3px] top-[180px] w-[3px] h-[40px] bg-gray-800 rounded-l"></div>
                
                {/* Power Button */}
                <div className="absolute right-[-3px] top-[150px] w-[3px] h-[60px] bg-gray-800 rounded-r"></div>
              </div>

              {/* Floating Highlights */}
              <div className="hidden xl:block absolute -left-20 top-1/4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
                    ₹
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Total Value</div>
                    <div className="text-lg text-gray-900">₹12.4L</div>
                  </div>
                </div>
              </div>

              <div className="hidden xl:block absolute -right-20 top-2/3 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Returns</div>
                    <div className="text-lg text-green-600">+18.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}