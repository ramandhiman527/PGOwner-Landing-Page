
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, role, city });
    setIsSubmitted(true);
    
    // Reset form after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setRole('');
      setCity('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
            <CardContent className="p-12">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4 animate-bounce">📧</div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      Stay in the Loop
                    </h2>
                    <p className="text-xl text-gray-300">
                      Be the first to experience the future of PG management
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-bold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-bold mb-2">
                          You are a... *
                        </label>
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
                        >
                          <option value="" className="bg-gray-800">Select your role</option>
                          <option value="pg-owner" className="bg-gray-800">PG Owner</option>
                          <option value="tenant" className="bg-gray-800">Tenant</option>
                          <option value="both" className="bg-gray-800">Both</option>
                          <option value="property-manager" className="bg-gray-800">Property Manager</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-bold mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/20 transition-all duration-300"
                        placeholder="Your city"
                      />
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                      >
                        Get Early Access
                      </Button>
                      <p className="text-sm text-gray-400 mt-4">
                        Join 1000+ people already waiting for launch
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center animate-fade-in">
                  <div className="text-8xl mb-6 animate-bounce">🎉</div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Welcome Aboard!
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    You're now on the VIP list for early access
                  </p>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-semibold">Successfully Registered</span>
                  </div>
                </div>
              )}
            </CardContent>

            {/* Animated Envelope Effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-blue-500 animate-pulse" />
          </Card>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500/10 rounded-full animate-float" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/10 rounded-lg animate-spin" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-purple-500/10 rounded-full animate-bounce" />
      </div>
    </section>
  );
};

export default EmailCapture;
