
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-8 border border-white/30">
            <Rocket className="w-4 h-4 mr-2 text-orange-500" />
            The Future of PG Living
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Where PG Management
            </span>
            <br />
            <span className="text-gray-800">
              Meets Innovation
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform chaos into clarity. Connect tenants with owners seamlessly with{' '}
            <span className="font-bold text-orange-600">PGOwner</span> - the future of PG management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Early Access
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Visual Elements */}
        <div className="relative mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Before PGOwner</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    Scattered paperwork and confusion
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    Broken communication channels
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    Manual payment tracking
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">After PGOwner</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    Digital organization and clarity
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    Seamless tenant-owner connections
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    Automated payment systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
