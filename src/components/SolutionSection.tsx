'use client';

export default function SolutionSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Dreams",
      description: "Share your travel dates, budget, and must-see experiences in under 2 minutes",
      time: "2 min",
      icon: "✨",
      features: ["Smart questionnaire", "Budget optimization", "Group size planning"]
    },
    {
      number: "02", 
      title: "AI Creates Your Perfect Plan",
      description: "Our AI analyzes weather, road conditions, and 10,000+ traveler experiences to craft your itinerary",
      time: "60 sec",
      icon: "🧠",
      features: ["Weather optimization", "Route planning", "Local partnerships"]
    },
    {
      number: "03",
      title: "Book & Go",
      description: "Get your mobile itinerary with GPS coordinates, bookings confirmed, and 24/7 support",
      time: "Done!",
      icon: "🚀",
      features: ["Mobile GPS guide", "Pre-booked tours", "Emergency support"]
    }
  ];

  return (
    <section className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            How <span className="text-emerald-400">Touron</span> Works
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The smarter way to plan Iceland - saving you 38+ hours and $1,200+ per trip
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 h-full hover:border-emerald-500 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {step.time}
                  </div>
                </div>
                
                <div className="text-emerald-400 text-sm font-bold mb-2 tracking-wider">
                  STEP {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <span className="text-emerald-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-2xl p-8 mb-12 border border-emerald-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What Makes Touron Different
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Intelligence</h4>
              <p className="text-emerald-100 text-sm">Analyzes weather patterns, road conditions, and crowd data to optimize your experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🤝
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Local Partnerships</h4>
              <p className="text-emerald-100 text-sm">Direct relationships with Icelandic operators for authentic experiences at fair prices</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📱
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Mobile-First Design</h4>
              <p className="text-emerald-100 text-sm">GPS coordinates, offline maps, and real-time updates - all in your pocket</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Time & Money You'll Save
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-400 mb-2">38+</div>
                <div className="text-slate-300">Hours Saved</div>
                <div className="text-sm text-slate-400">vs. traditional planning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-400 mb-2">$1,200</div>
                <div className="text-slate-300">Average Savings</div>
                <div className="text-sm text-slate-400">per trip through optimization</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-400 mb-2">24/7</div>
                <div className="text-slate-300">Support</div>
                <div className="text-sm text-slate-400">English-speaking assistance</div>
              </div>
            </div>
            
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start My 2-Minute Planning
            </button>
            <p className="text-slate-400 mt-3 text-sm">No credit card required • Free planning consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}