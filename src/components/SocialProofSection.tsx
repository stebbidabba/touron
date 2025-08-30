'use client';

import { useState, useEffect } from 'react';

interface SocialProofSectionProps {
  travelerCount: number;
}

export default function SocialProofSection({ travelerCount }: SocialProofSectionProps) {
  const [recentBooking, setRecentBooking] = useState('');
  
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763c6a?w=150&h=150&fit=crop&crop=face",
      text: "Saved me 42 hours of research and $1,400 compared to what I almost booked myself. The weather optimization was incredible - we saw the Northern Lights on our second night instead of freezing in a field for nothing.",
      trip: "5-day Ring Road • March 2024",
      highlight: "Saved 42 hours"
    },
    {
      name: "Mike Rodriguez", 
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "The AI knew to avoid the Westfjords during our February trip due to road closures I never would have found. Instead, we got an amazing ice cave tour that was perfectly timed with clear weather.",
      trip: "7-day Winter Adventure • February 2024", 
      highlight: "Perfect timing"
    },
    {
      name: "Emma Thompson",
      location: "London, UK", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "As a solo female traveler, having the 24/7 support was invaluable. When my car got stuck in snow, they had local help to me within 20 minutes. Worth every penny.",
      trip: "4-day Solo Journey • January 2024",
      highlight: "24/7 support"
    }
  ];

  const recentBookings = [
    "Sarah from NYC just secured her March 2025 spot",
    "James from Toronto booked his Ring Road trip",
    "Lisa from Seattle just started her planning",
    "David from Chicago secured February dates",
    "Maria from Miami just joined the waitlist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomBooking = recentBookings[Math.floor(Math.random() * recentBookings.length)];
      setRecentBooking(randomBooking);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Join <span className="text-emerald-400">{travelerCount}+ Travelers</span> Who Chose Smart
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real stories from travelers who saved time, money, and stress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{testimonial.text}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 text-sm font-semibold">{testimonial.trip}</span>
                <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                  {testimonial.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 mb-12 border border-slate-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-2">{travelerCount}+</div>
              <div className="text-slate-300 text-sm">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-2">4.9</div>
              <div className="text-slate-300 text-sm">Average Rating</div>
              <div className="text-yellow-400 text-lg mt-1">★★★★★</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-2">$500K+</div>
              <div className="text-slate-300 text-sm">Total Savings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400 mb-2">20,000+</div>
              <div className="text-slate-300 text-sm">Hours Saved</div>
            </div>
          </div>
        </div>

        {recentBooking && (
          <div className="bg-emerald-900 border border-emerald-700 rounded-lg p-4 mb-12 text-center">
            <div className="flex items-center justify-center text-emerald-100">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm">{recentBooking}</span>
            </div>
          </div>
        )}

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Guarantee to You
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-start text-left mb-6">
                <div className="text-emerald-400 text-2xl mr-4 mt-1">🛡️</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Perfect Itinerary or Full Refund</h4>
                  <p className="text-slate-300 text-sm">If we don't deliver an itinerary that saves you time and money, we'll refund 100% and plan your next trip free.</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="flex items-center text-slate-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-sm">Money-back guarantee</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-sm">GDPR compliant</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-sm">Secure booking</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23059669'/%3E%3Cpath d='M25 50 L40 65 L75 35' stroke='white' stroke-width='8' fill='none'/%3E%3C/svg%3E" alt="Founder" className="w-16 h-16 rounded-full mr-4" />
                  <div className="text-left">
                    <h5 className="text-white font-semibold">Alex Magnusson</h5>
                    <p className="text-slate-400 text-sm">Founder & Iceland Expert</p>
                    <p className="text-emerald-400 text-xs">"I've saved travelers 20,000+ hours and $500K+ in mistakes"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}