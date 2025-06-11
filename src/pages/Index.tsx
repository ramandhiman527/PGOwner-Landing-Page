
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Rocket, Building, MessageSquare, Folder, Coins, Network, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import ProblemShowcase from '@/components/ProblemShowcase';
import SolutionVisualization from '@/components/SolutionVisualization';
import FeatureShowcase from '@/components/FeatureShowcase';
import TargetAudience from '@/components/TargetAudience';
import HowItWorks from '@/components/HowItWorks';
import EmailCapture from '@/components/EmailCapture';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemShowcase />
      <SolutionVisualization />
      <FeatureShowcase />
      <TargetAudience />
      <HowItWorks />
      <EmailCapture />
    </div>
  );
};

export default Index;
