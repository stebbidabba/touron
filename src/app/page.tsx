'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FOMOSection from '@/components/FOMOSection';
import ItineraryModal from '@/components/ItineraryModal';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import SocialProofSection from '@/components/SocialProofSection';
import ScarcitySection from '@/components/ScarcitySection';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import ExitIntentModal from '@/components/ExitIntentModal';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { trackModalOpen } from '@/lib/analytics';

export default function Home() {
  const [showItinerary, setShowItinerary] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [travelerCount, setTravelerCount] = useState(847);
  useScrollTracking();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
        trackModalOpen('exit_intent');
      }
    };

    const interval = setInterval(() => {
      setTravelerCount(prev => prev + Math.random() < 0.1 ? 1 : 0);
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, [showExitIntent]);

  const handleShowItinerary = () => {
    setShowItinerary(true);
    trackModalOpen('itinerary');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="fixed top-0 w-full bg-orange-600 text-white text-center py-2 z-40 text-sm font-medium">
        ⚡ Only 23 planning spots left for December 2025 travelers
      </div>
      
      <div className="pt-10">
        <HeroSection 
          onShowItinerary={handleShowItinerary}
        />
        <FOMOSection />
        <ProblemSection />
        <SolutionSection />
        <SocialProofSection travelerCount={travelerCount} />
        <ScarcitySection />
        <LeadCaptureForm />
      </div>

      {showItinerary && (
        <ItineraryModal onClose={() => setShowItinerary(false)} />
      )}
      
      {showExitIntent && (
        <ExitIntentModal onClose={() => setShowExitIntent(false)} />
      )}
    </div>
  );
}
