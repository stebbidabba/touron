'use client';

import { useState } from 'react';

interface ExitIntentModalProps {
  onClose: () => void;
}

export default function ExitIntentModal({ onClose }: ExitIntentModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'exit-intent',
          email
        })
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className="bg-emerald-800 rounded-2xl max-w-md w-full p-8 text-center border border-emerald-600">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-2xl font-bold text-white mb-4">Check Your Email!</h3>
          <p className="text-emerald-100">Your free planning guide is on its way.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl max-w-md w-full border-2 border-red-500 overflow-hidden">
        <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Wait! Don&apos;t Leave Empty-Handed</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-200 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">😰</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Don&apos;t Join the 73% Who Regret Their Iceland Planning
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Before you go, grab our free &quot;Iceland Planning Mistakes&quot; checklist that&apos;s saved travelers $1,000+ in avoidable errors.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 mb-6">
            <h4 className="text-white font-semibold mb-3 text-center">
              Free Planning Checklist Includes:
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">✓</span>
                <span>5 weather mistakes that ruin Northern Lights viewing</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">✓</span>
                <span>Hidden driving dangers locals never mention</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">✓</span>
                <span>Tourist traps that waste $200+ per day</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">✓</span>
                <span>Booking timing secrets for 40% savings</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
              placeholder="Enter your email for instant access"
              required
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send My Free Checklist'}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-xs text-slate-400">
              No spam. Unsubscribe anytime. 847+ travelers trust us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}