
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-blue-900 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-2 h-full">
          {Array.from({ length: 240 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/20 rounded-sm animate-pulse"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Before (Chaos) */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="bg-red-500/20 p-8 rounded-lg backdrop-blur-sm border border-red-300/30">
              <h3 className="text-xl font-bold text-white mb-4">Before ThynkOwner</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-2 animate-bounce">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Scattered paperwork everywhere</span>
                </div>
                <div className="flex items-center gap-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Confused communication</span>
                </div>
                <div className="flex items-center gap-2 animate-bounce" style={{ animationDelay: '1s' }}>
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Manual payment tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - After (Digital Solution) */}
          <div className={`text-center lg:text-right transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="bg-green-500/20 p-8 rounded-lg backdrop-blur-sm border border-green-300/30">
              <h3 className="text-xl font-bold text-white mb-4">With ThynkOwner</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-2 justify-end animate-pulse">
                  <span>Digital document management</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
                <div className="flex items-center gap-2 justify-end animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <span>Seamless communication</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
                <div className="flex items-center gap-2 justify-end animate-pulse" style={{ animationDelay: '1s' }}>
                  <span>Automated payment tracking</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Logo and Main Content */}
        <div className={`text-center mt-12 transition-all duration-1500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                ThynkOwner
              </span>
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Where PG Management Meets Innovation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform chaos into clarity. Connect tenants with owners seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Notify Me When We Launch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-orange-400/20 rotate-45 animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-400/20 rounded-lg animate-spin" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
