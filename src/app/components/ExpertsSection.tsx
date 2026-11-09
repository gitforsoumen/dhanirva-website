import { Star, Award, Users, Shield, CheckCircle, Calendar, TrendingUp, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const experts = [
  {
    name: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDg2ODQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Equity & Derivatives Trading',
    experience: 12,
    rating: 4.9,
    reviews: 245,
    clients: 450,
    returns: '+24.5%',
    services: ['Portfolio Management', 'Market Research', 'Trading Signals'],
    certifications: ['SEBI', 'NISM'],
    color: 'blue',
  },
  {
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDkyMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Wealth Management & Tax Planning',
    experience: 8,
    rating: 4.8,
    reviews: 189,
    clients: 320,
    returns: '+19.2%',
    services: ['Financial Planning', 'Tax Advisory', 'Retirement Planning'],
    certifications: ['SEBI', 'CFP'],
    color: 'purple',
  },
  {
    name: 'Amit Patel',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjQ4NDMwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Technical Analysis & Research',
    experience: 15,
    rating: 4.9,
    reviews: 312,
    clients: 580,
    returns: '+28.7%',
    services: ['Technical Analysis', 'Risk Management', 'Investment Strategy'],
    certifications: ['SEBI', 'AMFI'],
    color: 'green',
  },
  {
    name: 'Sneha Reddy',
    image: 'https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0OTEyOTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specialty: 'Mutual Funds & SIP Advisory',
    experience: 6,
    rating: 4.7,
    reviews: 156,
    clients: 280,
    returns: '+16.8%',
    services: ['SIP Planning', 'Fund Selection', 'Goal-based Investing'],
    certifications: ['AMFI', 'NISM'],
    color: 'orange',
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-400'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-400'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:border-orange-400'
    },
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function ExpertsSection() {
  return (
    <section id="experts" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <span className="text-blue-600">🎯 Expert Advisors</span>
          </div>
          <h2 className="text-[#1a1a1a] mb-4">
            Meet Our SEBI-Certified Financial Experts
          </h2>
          <p className="text-gray-600">
            Get personalized guidance from India&apos;s top-rated financial advisors with proven track records
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experts.map((expert, index) => {
            const colorClass = getColorClasses(expert.color);
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl border-2 ${colorClass.border} ${colorClass.hover} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Expert Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Certifications Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {expert.certifications.map((cert, i) => (
                      <div
                        key={i}
                        className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1"
                      >
                        <Shield size={12} className="text-green-600" />
                        <span className="text-gray-900">{cert}</span>
                      </div>
                    ))}
                  </div>

                  {/* Returns Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <TrendingUp size={12} />
                      <span>{expert.returns} Avg Returns</span>
                    </div>
                  </div>

                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white mb-1">{expert.name}</h3>
                    <p className="text-white/90 text-sm">{expert.specialty}</p>
                  </div>
                </div>

                {/* Expert Details */}
                <div className="p-5 space-y-4">
                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-orange-500 fill-orange-500" />
                      <span className="text-gray-900">{expert.rating}</span>
                      <span className="text-gray-500 text-sm">({expert.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className={`grid grid-cols-2 gap-3 p-3 ${colorClass.bg} rounded-xl`}>
                    <div>
                      <div className={`text-xl ${colorClass.text}`}>{expert.experience}+</div>
                      <div className="text-xs text-gray-600">Years Exp.</div>
                    </div>
                    <div>
                      <div className={`text-xl ${colorClass.text}`}>{expert.clients}+</div>
                      <div className="text-xs text-gray-600">Clients</div>
                    </div>
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {expert.services.slice(0, 2).map((service, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {expert.services.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        +{expert.services.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <button className={`flex-1 py-2.5 bg-gradient-to-r ${colorClass.gradient} text-white rounded-xl hover:shadow-lg transition-all text-sm flex items-center justify-center gap-1.5`}>
                      <Calendar size={16} />
                      Book Now
                    </button>
                    <button className="px-3 py-2.5 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                      <MessageCircle size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 mx-auto group">
            <Users size={20} />
            View All {experts.length * 10}+ Experts
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}