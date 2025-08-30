'use client';

export default function FOMOSection() {
  return (
    <section className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            While You Research, Others Are Already{' '}
            <span className="text-orange-400">Booking Their Dream Trips</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See what happens when planning takes too long
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              The 40+ Hour Planning Timeline
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  1-10
                </div>
                <div className="text-slate-300">
                  <span className="text-red-400 font-semibold">Hours 1-10:</span> Still comparing hotels on 12 different websites, getting overwhelmed by options
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  11-25
                </div>
                <div className="text-slate-300">
                  <span className="text-red-400 font-semibold">Hours 11-25:</span> Trying to figure out if they can drive the Ring Road in winter (spoiler: probably not safely)
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  26-40
                </div>
                <div className="text-slate-300">
                  <span className="text-red-400 font-semibold">Hours 26-40:</span> Realizing their itinerary doesn't account for daylight hours or weather conditions
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  41+
                </div>
                <div className="text-slate-300">
                  <span className="text-red-400 font-semibold">Hours 41+:</span> Settling for generic bus tours because planning got too complex and overwhelming
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900 rounded-2xl p-8 border border-emerald-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Meanwhile, Touron Users...
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div className="text-emerald-100">
                  <span className="text-emerald-300 font-semibold">2 minutes:</span> Getting confirmation emails for their perfect trip
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div className="text-emerald-100">
                  <span className="text-emerald-300 font-semibold">5 minutes:</span> Already have accommodations booked at optimal locations
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div className="text-emerald-100">
                  <span className="text-emerald-300 font-semibold">10 minutes:</span> Receiving detailed mobile itinerary with GPS coordinates
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div className="text-emerald-100">
                  <span className="text-emerald-300 font-semibold">Done:</span> Shopping for warm clothes instead of stressing about logistics
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            What Others Are Missing Out On
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-orange-400 text-2xl mr-4 mt-1">🌌</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Missing Northern Lights</h4>
                  <p className="text-slate-300">Because they didn't know about cloud cover patterns and optimal viewing locations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-orange-400 text-2xl mr-4 mt-1">🏙️</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Stuck in Reykjavik</h4>
                  <p className="text-slate-300">Because they didn't book popular tours in advance and everything's sold out</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-orange-400 text-2xl mr-4 mt-1">💸</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Paying 40% More</h4>
                  <p className="text-slate-300">Because they didn't know about seasonal pricing and booking strategies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-orange-400 text-2xl mr-4 mt-1">⏰</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Wasting 2 Days Driving</h4>
                  <p className="text-slate-300">Because they didn't optimize routes and underestimated winter driving conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Don't Let This Be You - Get Your Plan Now
          </button>
          <p className="text-slate-400 mt-4 text-sm">Join the smart travelers who planned ahead</p>
        </div>
      </div>
    </section>
  );
}