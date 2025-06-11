
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TargetAudience = () => {
  const audiences = [
    {
      title: "PG Owners",
      icon: "👑",
      description: "Maximize profits, minimize headaches",
      features: ["Revenue Analytics", "Automated Collections", "Tenant Screening"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tenants",
      icon: "🏡",
      description: "Find your perfect home, hassle-free",
      features: ["Easy Payments", "Quick Support", "Digital Documents"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Property Managers",
      icon: "🏢",
      description: "Manage multiple properties with ease",
      features: ["Unified Dashboard", "Bulk Operations", "Advanced Reports"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Built For Everyone
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're an owner, tenant, or manager - ThynkOwner has you covered
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:scale-105 transform transition-all duration-500 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <CardContent className="relative z-10 p-8 text-center">
                <div className="text-8xl mb-6 animate-bounce group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {audience.title}
                </h3>
                
                <p className="text-lg text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {audience.description}
                </p>

                <div className="space-y-3">
                  {audience.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center gap-2 text-gray-400 group-hover:text-white transition-colors duration-300"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
