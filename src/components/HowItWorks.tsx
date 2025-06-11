
import React from 'react';
import { Rocket, Network, Gears } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Rocket,
      title: "Sign Up",
      description: "Create your account and choose your role",
      animation: "animate-bounce"
    },
    {
      icon: Network,
      title: "Connect",
      description: "Link your properties and start building connections",
      animation: "animate-pulse"
    },
    {
      icon: Gears,
      title: "Manage",
      description: "Enjoy seamless property management",
      animation: "animate-spin"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Three Simple Steps
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with ThynkOwner in minutes, not hours
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping" />
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 mb-6 ${step.animation} group-hover:scale-110 transition-transform duration-300`} style={{ animationDuration: '3s' }}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
