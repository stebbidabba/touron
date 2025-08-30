'use client';

export default function ProblemSection() {
  const problems = [
    {
      stat: "73%",
      issue: "Weather Ruins Plans",
      description: "Travelers arrive to find their outdoor activities cancelled due to storms they didn&apos;t know were coming",
      icon: "🌨️"
    },
    {
      stat: "68%",
      issue: "Drive Time Mistakes",
      description: "Underestimate winter driving conditions and waste days stuck in unsafe situations",
      icon: "🚗"
    },
    {
      stat: "81%",
      issue: "Language Barriers",
      description: "Miss out on local experiences because they can&apos;t navigate Icelandic booking systems",
      icon: "🗣️"
    },
    {
      stat: "59%",
      issue: "Tourist Trap Pricing",
      description: "Pay inflated prices for generic tours instead of authentic local experiences",
      icon: "💸"
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Why <span className="text-red-400">73% of Iceland Trips</span> Disappoint
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Even experienced travelers struggle with Iceland&apos;s unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 text-center hover:border-red-500 transition-colors">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <div className="text-3xl font-black text-red-400 mb-2">{problem.stat}</div>
              <h3 className="text-lg font-bold text-white mb-3">{problem.issue}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            The Reality Check: What Actually Goes Wrong
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-400 flex items-center">
                <span className="mr-3">❌</span> Traditional Planning
              </h4>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>&quot;We booked a glacier hike but it was cancelled due to wind - nobody told us to check weather warnings&quot;</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>&quot;Spent 3 hours driving in a blizzard because Google Maps doesn&apos;t account for Iceland&apos;s road conditions&quot;</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>&quot;Paid $200 for a &apos;Northern Lights tour&apos; that was just a bus ride to a parking lot&quot;</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>&quot;Couldn&apos;t book anything last minute because we don&apos;t speak Icelandic and websites were confusing&quot;</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-emerald-400 flex items-center">
                <span className="mr-3">✅</span> With Touron
              </h4>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>Weather-adaptive itinerary automatically rescheduled activities for clear days</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>Real-time road condition alerts and safe alternative routes pre-loaded in GPS</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>Exclusive partnerships with local guides for authentic experiences at fair prices</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>24/7 English support with direct booking access to local operators</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-slate-300 mb-6">
            <span className="text-red-400 font-bold">Don&apos;t become another disappointment statistic.</span>
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Your Perfect Iceland Plan
          </button>
        </div>
      </div>
    </section>
  );
}