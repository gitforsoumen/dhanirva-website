import { BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const barData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 35 },
  { name: 'Apr', value: 60 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 70 },
];

const lineData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 30 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 40 },
  { name: 'Jun', value: 55 },
];

const areaData = [
  { name: 'Jan', value: 25 },
  { name: 'Feb', value: 32 },
  { name: 'Mar', value: 40 },
  { name: 'Apr', value: 48 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 65 },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
            Smart Features
          </div>
          <h2 className="text-[#1a1a1a] mb-4">
            Powerful Tools for Smart Investing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get real-time insights and analytics to make informed investment decisions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 - Portfolio Analysis */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#1a1a1a] mb-3">Portfolio Analysis</h3>
            <p className="text-gray-600 mb-6">
              Track your investments with detailed analytics and performance metrics
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Feature 2 - Growth Tracking */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#1a1a1a] mb-3">Growth Tracking</h3>
            <p className="text-gray-600 mb-6">
              Monitor your portfolio growth with trend analysis and forecasting
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#A855F7" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Feature 3 - Asset Distribution */}
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-[#1a1a1a] mb-3">Asset Distribution</h3>
            <p className="text-gray-600 mb-6">
              Visualize your asset allocation and diversification strategies
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}