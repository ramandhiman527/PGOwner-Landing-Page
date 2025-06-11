
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, MessageSquare, Folder, Coins, Network, Gears } from 'lucide-react';

const FeatureShowcase = () => {
  const features = [
    {
      icon: Building,
      title: "Smart Dashboard",
      description: "Real-time analytics and insights for property management",
      animation: "animate-bounce",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Folder,
      title: "Digital Vault",
      description: "Secure document storage with instant access",
      animation: "animate-pulse",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Instant Communication",
      description: "Seamless chat between tenants and owners",
      animation: "animate-fade-in",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Coins,
      title: "Payment Tracking",
      description: "Automated rent collection and financial reports",
      animation: "animate-scale-in",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Network,
      title: "Smart Matching",
      description: "AI-powered tenant-property matching system",
      animation: "animate-slide-in-right",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Gears,
      title: "Issue Resolution",
      description: "Streamlined maintenance and support workflow",
      animation: "animate-spin",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative features designed to revolutionize PG management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:scale-105 transform transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              <CardContent className="relative z-10 p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${feature.color} mb-6 ${feature.animation} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>

              {/* Card Corner Animation */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
