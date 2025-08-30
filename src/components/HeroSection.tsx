'use client';

import React from 'react';

interface HeroSectionProps {
  onShowItinerary: () => void;
  travelerCount: number;
}

export default function HeroSection({ onShowItinerary, travelerCount }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23059669&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Join {travelerCount}+ travelers
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              While Others Spend{' '}
              <span className="text-orange-400">40+ Hours</span>{' '}
              Planning Their Iceland Trip,{' '}
              <span className="text-emerald-400">You&apos;ll Be Done in 2 Minutes</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join {travelerCount}+ travelers who saved 38 hours and $1,200 per trip with AI-powered planning
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onShowItinerary}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Sample 5-Day Itinerary
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get My Custom Plan
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <span className="text-emerald-400">✓</span>
                <span className="ml-2">Free planning guide</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400">✓</span>
                <span className="ml-2">No credit card required</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400">✓</span>
                <span className="ml-2">2-minute setup</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
              <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
                <h3 className="text-lg font-semibold text-white">Traditional Planning Chaos</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-red-400">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>12+ browser tabs open researching hotels</span>
                </div>
                <div className="flex items-center text-red-400">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Endless forum posts about weather conditions</span>
                </div>
                <div className="flex items-center text-red-400">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Confusing rental car vs. tour comparisons</span>
                </div>
                <div className="flex items-center text-red-400">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Missing popular spots due to poor planning</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-600 rounded-2xl shadow-2xl border border-emerald-500 overflow-hidden">
              <div className="bg-emerald-700 px-6 py-4 border-b border-emerald-500">
                <h3 className="text-lg font-semibold text-white">Touron&apos;s Clean Itinerary</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-emerald-100">
                  <span className="text-emerald-300 mr-3">✓</span>
                  <span>Perfect 5-day Ring Road route</span>
                </div>
                <div className="flex items-center text-emerald-100">
                  <span className="text-emerald-300 mr-3">✓</span>
                  <span>Weather-optimized activity schedule</span>
                </div>
                <div className="flex items-center text-emerald-100">
                  <span className="text-emerald-300 mr-3">✓</span>
                  <span>Pre-booked accommodations & tours</span>
                </div>
                <div className="flex items-center text-emerald-100">
                  <span className="text-emerald-300 mr-3">✓</span>
                  <span>Mobile-ready GPS coordinates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}