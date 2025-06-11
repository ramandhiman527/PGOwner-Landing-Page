
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Email captured:', { email, role, city });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setRole('');
        setCity('');
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-2xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Aboard! 🎉</h2>
              <p className="text-lg text-gray-700 mb-6">
                You're now on the early access list for PGOwner. We'll notify you as soon as we launch!
              </p>
              <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-3 rounded-full inline-block font-semibold">
                EARLY BIRD 20% OFF
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Mail className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Be Among the{' '}
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                First to Experience
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join thousands of PG owners and tenants waiting for the revolutionary PGOwner platform.
              Get exclusive early access and special launch benefits.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-0 bg-white/80"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-0 bg-white/80"
                >
                  <option value="">Select your role</option>
                  <option value="pg-owner">PG Owner</option>
                  <option value="tenant">Tenant</option>
                  <option value="both">Both</option>
                </select>
                
                <Input
                  type="text"
                  placeholder="Your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-0 bg-white/80"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Early Access + 20% Off
              </Button>

              <p className="text-sm text-gray-600 mt-4">
                🎁 Early bird special: 20% off for the first 1000 subscribers
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <h3 className="font-bold text-gray-800 mb-2">Priority Access</h3>
              <p className="text-gray-700 text-sm">Be the first to use PGOwner when we launch</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <h3 className="font-bold text-gray-800 mb-2">Exclusive Features</h3>
              <p className="text-gray-700 text-sm">Access to beta features and direct founder feedback</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <h3 className="font-bold text-gray-800 mb-2">Special Pricing</h3>
              <p className="text-gray-700 text-sm">Lock in early bird pricing for life</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default EmailCapture;
