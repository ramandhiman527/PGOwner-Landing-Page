
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Building, MessageSquare, Folder, Coins, Network, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProblemShowcase from '@/components/ProblemShowcase';
import SolutionVisualization from '@/components/SolutionVisualization';
import FeatureShowcase from '@/components/FeatureShowcase';
import TargetAudience from '@/components/TargetAudience';
import HowItWorks from '@/components/HowItWorks';
import EmailCapture from '@/components/EmailCapture';

const Index = () => {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom, #9FB3DF 0%, #9EC6F3 33%, #BDDDE4 66%, #FFF1D5 100%)'
    }}>
      <Header />
      <div className="pt-20"> {/* Add padding top to account for fixed header */}
        <HeroSection />
        <ProblemShowcase />
        <SolutionVisualization />
        <FeatureShowcase />
        <TargetAudience />
        <HowItWorks />
        <EmailCapture />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
