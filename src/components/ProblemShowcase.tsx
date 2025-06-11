
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProblemShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const problems = [
    {
      title: "Documentation Nightmare",
      description: "Physical paperwork, lost documents, and endless file cabinets make tenant management a chaos.",
      icon: "📄",
      bgColor: "from-red-500 to-red-600"
    },
    {
      title: "Communication Breakdown",
      description: "Tenants and owners struggle with unclear communication channels and delayed responses.",
      icon: "📞",
      bgColor: "from-orange-500 to-orange-600"
    },
    {
      title: "Payment Confusion",
      description: "Manual rent collection, tracking payments, and managing dues creates endless headaches.",
      icon: "💰",
      bgColor: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Property Mismatch",
      description: "Finding the right tenant-property match without proper screening and preference systems.",
      icon: "🏠",
      bgColor: "from-purple-500 to-purple-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % problems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, problems.length]);

  const handleCardInteraction = (index: number) => {
    setActiveCard(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Current Reality
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional PG management is broken. Here's what property owners and tenants face every day.
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mb-8">
          {problems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardInteraction(index)}
              className={`relative w-4 h-4 mx-2 rounded-full transition-all duration-300 ${
                activeCard === index ? 'bg-orange-500' : 'bg-gray-600'
              }`}
            >
              {activeCard === index && (
                <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping" />
              )}
            </button>
          ))}
        </div>

        {/* Main Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 transform ${
                  activeCard === index
                    ? 'scale-105 shadow-2xl z-10'
                    : 'scale-95 opacity-70 hover:scale-100 hover:opacity-90'
                }`}
                onClick={() => handleCardInteraction(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} opacity-90`} />
                <CardContent className="relative z-10 p-6 text-white h-64 flex flex-col justify-center">
                  <div className="text-6xl mb-4 text-center animate-bounce">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {problem.title}
                  </h3>
                  <p className="text-sm opacity-90 text-center leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
                
                {/* Card Flip Animation Effect */}
                {activeCard === index && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => handleCardInteraction((activeCard - 1 + problems.length) % problems.length)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleCardInteraction((activeCard + 1) % problems.length)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Dynamic Background Grid System */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-20 gap-2 h-full">
          {Array.from({ length: 240 }).map((_, i) => (
            <div
              key={i}
              className={`bg-white rounded-sm transition-all duration-1000 ${
                Math.floor(i / 20) === Math.floor(activeCard * 3) ? 'opacity-50' : 'opacity-10'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemShowcase;
