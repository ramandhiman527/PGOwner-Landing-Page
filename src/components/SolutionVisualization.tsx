
import React, { useState, useEffect } from 'react';

const SolutionVisualization = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      title: "Smart Dashboard",
      description: "Real-time notifications and property overview",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Digital Vault",
      description: "Secure document storage and management",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Issue Tracking",
      description: "Streamlined maintenance and support requests",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Payment History",
      description: "Complete financial tracking and reporting",
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Barge In ThynkOwner like a King
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of PG management with our intuitive platform
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* 3D Phone Mockup */}
          <div className="relative lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative mx-auto w-80 h-80">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="p-6 h-full">
                  {/* Screen Content */}
                  <div className={`h-full bg-gradient-to-br ${screens[activeScreen].color} rounded-2xl p-4 flex flex-col justify-center items-center text-white transform transition-all duration-500`}>
                    <div className="text-6xl mb-4 animate-bounce">
                      {activeScreen === 0 && '📊'}
                      {activeScreen === 1 && '🗂️'}
                      {activeScreen === 2 && '🔧'}
                      {activeScreen === 3 && '💳'}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {screens[activeScreen].title}
                    </h3>
                    <p className="text-sm opacity-90 text-center">
                      {screens[activeScreen].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-500/20 rounded-lg animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute top-1/2 -left-16 w-12 h-12 bg-green-500/20 rounded-full animate-bounce" />
            </div>
          </div>

          {/* Feature List */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="space-y-6">
              {screens.map((screen, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-500 cursor-pointer ${
                    activeScreen === index
                      ? 'bg-white/10 border-orange-500 shadow-lg transform scale-105'
                      : 'bg-white/5 border-gray-600 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveScreen(index)}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {screen.title}
                  </h3>
                  <p className="text-gray-300">
                    {screen.description}
                  </p>
                  {activeScreen === index && (
                    <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-orange-500 h-1 rounded-full animate-pulse" style={{ width: '100%' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-green-500/10 rounded-lg animate-spin" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-500/10 rounded-full animate-bounce" />
      </div>
    </section>
  );
};

export default SolutionVisualization;
