'use client';

import { useState } from 'react';

interface FormData {
  travelMonth: string;
  email: string;
  travelDates: string;
  budget: number;
  groupSize: string;
  mustSee: string[];
  howHeard: string;
}

export default function LeadCaptureForm() {
  const [showFullForm, setShowFullForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    travelMonth: '',
    email: '',
    travelDates: '',
    budget: 3000,
    groupSize: '',
    mustSee: [],
    howHeard: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.travelMonth || !formData.email) return;
    
    setIsSubmitting(true);
    try {
      await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quick',
          travelMonth: formData.travelMonth,
          email: formData.email
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'full',
          ...formData
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMustSeeChange = (experience: string) => {
    setFormData(prev => ({
      ...prev,
      mustSee: prev.mustSee.includes(experience)
        ? prev.mustSee.filter(item => item !== experience)
        : [...prev.mustSee, experience].slice(0, 3)
    }));
  };

  const mustSeeOptions = [
    'Northern Lights',
    'Ring Road',
    'Glaciers',
    'Blue Lagoon',
    'Westfjords',
    'Photography'
  ];

  if (submitted) {
    return (
      <section className="bg-emerald-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-black text-white mb-6">
            Welcome to the Smart Travelers Club!
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Check your email in the next few minutes for your free Iceland planning guide and next steps.
          </p>
          <div className="bg-emerald-800 rounded-xl p-6 border border-emerald-700">
            <h3 className="text-lg font-bold text-white mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-emerald-100 text-left max-w-md mx-auto">
              <div className="flex items-start">
                <span className="text-emerald-300 mr-3">1.</span>
                <span>You&apos;ll receive your planning guide within 5 minutes</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-300 mr-3">2.</span>
                <span>Our AI will analyze your preferences (takes 24 hours)</span>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-300 mr-3">3.</span>
                <span>We&apos;ll send you a custom itinerary preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Secure Your Planning Spot
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join hundreds of smart travelers who chose stress-free Iceland planning
          </p>
        </div>

        {!showFullForm ? (
          <div className="bg-slate-800 rounded-2xl p-8 border-2 border-orange-500 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                Limited spots remaining
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Reserve Your Free Planning Session
              </h3>
              <p className="text-slate-300 text-sm">
                Get your personalized Iceland itinerary in 2 minutes
              </p>
            </div>

            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  When are you planning to travel?
                </label>
                <select
                  value={formData.travelMonth}
                  onChange={(e) => setFormData(prev => ({ ...prev, travelMonth: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
                  required
                >
                  <option value="">Select travel month</option>
                  <option value="January 2025">January 2025</option>
                  <option value="February 2025">February 2025</option>
                  <option value="March 2025">March 2025</option>
                  <option value="April 2025">April 2025</option>
                  <option value="May 2025">May 2025</option>
                  <option value="June 2025">June 2025</option>
                  <option value="July 2025">July 2025</option>
                  <option value="August 2025">August 2025</option>
                  <option value="September 2025">September 2025</option>
                  <option value="October 2025">October 2025</option>
                  <option value="November 2025">November 2025</option>
                  <option value="December 2025">December 2025</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg text-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Reserving Your Spot...' : 'Reserve My Free Planning Session'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowFullForm(true)}
                  className="text-emerald-400 hover:text-emerald-300 text-sm underline"
                >
                  Want a more detailed custom itinerary? Click here
                </button>
              </div>
            </form>

            <div className="text-center mt-6 text-xs text-slate-400">
              No spam, ever. Unsubscribe with one click. GDPR compliant.
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Your Custom Itinerary
              </h3>
              <p className="text-slate-300">
                Tell us more about your dream trip for a personalized experience
              </p>
            </div>

            <form onSubmit={handleFullSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Travel Dates
                  </label>
                  <input
                    type="date"
                    value={formData.travelDates}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelDates: e.target.value }))}
                    min={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Group Size
                  </label>
                  <select
                    value={formData.groupSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, groupSize: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="">Select group size</option>
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Family 3-4">Family (3-4 people)</option>
                    <option value="Group 5-8">Group (5-8 people)</option>
                    <option value="Large Group 9+">Large Group (9+ people)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-4">
                  Budget Range: ${formData.budget.toLocaleString()}
                  <span className="text-slate-400 text-sm ml-2">
                    (Most travelers save $800-1200 with optimized planning)
                  </span>
                </label>
                <input
                  type="range"
                  min="1500"
                  max="8000"
                  step="250"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-slate-400 mt-2">
                  <span>$1,500</span>
                  <span>$8,000+</span>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Must-See Experiences (select up to 3)
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {mustSeeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleMustSeeChange(option)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                        formData.mustSee.includes(option)
                          ? 'bg-emerald-600 border-emerald-500 text-white'
                          : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-emerald-500'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  How did you hear about us?
                </label>
                <select
                  value={formData.howHeard}
                  onChange={(e) => setFormData(prev => ({ ...prev, howHeard: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
                >
                  <option value="">Select source</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend Referral">Friend Referral</option>
                  <option value="Travel Blog">Travel Blog</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg text-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Creating Your Itinerary...' : 'Get My Custom Itinerary'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowFullForm(false)}
                  className="text-slate-400 hover:text-slate-300 text-sm underline"
                >
                  Back to quick form
                </button>
              </div>
            </form>

            <div className="text-center mt-6 text-xs text-slate-400">
              No spam, ever. Unsubscribe with one click. GDPR compliant.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}