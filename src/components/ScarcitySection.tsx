'use client';

import { useState, useEffect } from 'react';

export default function ScarcitySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [spotsLeft, setSpotsLeft] = useState(23);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    const spotsTimer = setInterval(() => {
      if (Math.random() < 0.05) {
        setSpotsLeft(prev => Math.max(prev - 1, 15));
      }
    }, 60000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Limited Availability
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            We only accept a limited number of travelers each month to ensure personalized service and maintain our partnerships with local operators.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border-2 border-orange-500 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              December 2025 Planning Deadline
            </h3>
            <p className="text-slate-300 mb-6">
              Secure your spot before we reach capacity. Only <span className="text-orange-400 font-bold">{spotsLeft} planning spots</span> remain for December 2025 travelers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
              <div className="text-3xl font-black text-orange-400 mb-1">{timeLeft.days}</div>
              <div className="text-slate-300 text-sm">Days</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
              <div className="text-3xl font-black text-orange-400 mb-1">{timeLeft.hours}</div>
              <div className="text-slate-300 text-sm">Hours</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
              <div className="text-3xl font-black text-orange-400 mb-1">{timeLeft.minutes}</div>
              <div className="text-slate-300 text-sm">Minutes</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 text-center border border-slate-700">
              <div className="text-3xl font-black text-orange-400 mb-1">{timeLeft.seconds}</div>
              <div className="text-slate-300 text-sm">Seconds</div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              Only {spotsLeft} spots remaining
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-bold text-white mb-3">Quality Over Quantity</h4>
            <p className="text-slate-300 text-sm">We limit our client base to maintain the highest level of personalized service and ensure every traveler gets VIP treatment.</p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="text-lg font-bold text-white mb-3">Partner Relationships</h4>
            <p className="text-slate-300 text-sm">Our Icelandic partners can only accommodate a certain number of our clients with their premium experiences and pricing.</p>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="text-lg font-bold text-white mb-3">Peak Season Rush</h4>
            <p className="text-slate-300 text-sm">December is prime Northern Lights season. Hotels and tours book up 6+ months in advance - don't wait.</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              What Happens When We're Full?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                  <span className="mr-3">❌</span> Too Late
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Join a 200+ person waitlist for next available opening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Miss out on optimal accommodations and tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Pay premium prices for subpar alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>Risk settling for a generic group tour</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center">
                  <span className="mr-3">✅</span> Secure Your Spot Now
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Guaranteed access to our premium planning service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>First dibs on the best accommodations and tours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Lock in current pricing and partnership rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">•</span>
                    <span>Complete peace of mind for your dream trip</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Secure My Spot Now
            </button>
            <p className="text-slate-400 mt-4 text-sm">
              Free consultation • No commitment until you're 100% satisfied
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}