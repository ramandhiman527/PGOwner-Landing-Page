
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Shield, Zap, Users } from 'lucide-react';

const SolutionVisualization = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Smart Dashboard",
      description: "Real-time insights at your fingertips"
    },
    {
      icon: Shield,
      title: "Secure Vault",
      description: "Your documents, safely stored"
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Stay connected, stay informed"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Connect with your PG community"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              PGOwner
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Step into the future of PG management like a king. Experience seamless control, 
            instant connectivity, and unparalleled convenience.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup */}
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto w-80 h-[600px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[3rem] shadow-2xl">
                  {/* Screen */}
                  <div className="absolute top-6 left-6 right-6 bottom-6 bg-white rounded-[2rem] overflow-hidden">
                    {/* App Interface Mockup */}
                    <div className="p-6 h-full bg-gradient-to-br from-blue-50 to-orange-50">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">PGOwner</h3>
                        <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Monthly Rent</span>
                            <span className="font-bold text-green-600">₹15,000</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Due Date</span>
                            <span className="font-bold text-orange-600">5 days</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Complaints</span>
                            <span className="font-bold text-blue-600">2 Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8 order-1 lg:order-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Experience PGOwner Today
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SolutionVisualization;
