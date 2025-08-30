'use client';

import { useState, useEffect } from 'react';

interface Lead {
  timestamp: string;
  type: string;
  email: string;
  travelMonth: string;
  travelDates: string;
  budget: string;
  groupSize: string;
  mustSee: string;
  howHeard: string;
}

interface Analytics {
  totalLeads: number;
  todayLeads: number;
  conversionRate: number;
  sourceBreakdown: { [key: string]: number };
  typeBreakdown: { [key: string]: number };
  recentLeads: Lead[];
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'touron2025') {
      setIsAuthenticated(true);
      fetchAnalytics();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/admin/analytics');
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
      const interval = setInterval(fetchAnalytics, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-xl p-8 max-w-md w-full border border-slate-700">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleAuth}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none mb-4"
              placeholder="Enter admin password"
              required
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Touron Admin Dashboard</h1>
          <button
            onClick={() => window.open('https://docs.google.com/spreadsheets/d/' + process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID, '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            View Full Sheet
          </button>
        </div>

        {analytics && (
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-slate-400 text-sm font-medium mb-2">Total Leads</h3>
                <div className="text-3xl font-bold text-white">{analytics.totalLeads}</div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-slate-400 text-sm font-medium mb-2">Today's Leads</h3>
                <div className="text-3xl font-bold text-emerald-400">{analytics.todayLeads}</div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-slate-400 text-sm font-medium mb-2">Conversion Rate</h3>
                <div className="text-3xl font-bold text-orange-400">{analytics.conversionRate.toFixed(1)}%</div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-slate-400 text-sm font-medium mb-2">Avg. Daily</h3>
                <div className="text-3xl font-bold text-blue-400">
                  {Math.round(analytics.totalLeads / Math.max(1, Math.ceil((Date.now() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24))))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Lead Types</h3>
                <div className="space-y-3">
                  {Object.entries(analytics.typeBreakdown).map(([type, count]) => (
                    <div key={type} className="flex items-center justify-between">
                      <span className="text-slate-300 capitalize">{type.replace('-', ' ')}</span>
                      <div className="flex items-center">
                        <div className="w-20 h-2 bg-slate-700 rounded mr-3">
                          <div 
                            className="h-2 bg-emerald-500 rounded"
                            style={{ width: `${(count / analytics.totalLeads) * 100}%` }}
                          />
                        </div>
                        <span className="text-white font-semibold min-w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Traffic Sources</h3>
                <div className="space-y-3">
                  {Object.entries(analytics.sourceBreakdown).map(([source, count]) => (
                    <div key={source} className="flex items-center justify-between">
                      <span className="text-slate-300">{source || 'Unknown'}</span>
                      <div className="flex items-center">
                        <div className="w-20 h-2 bg-slate-700 rounded mr-3">
                          <div 
                            className="h-2 bg-orange-500 rounded"
                            style={{ width: `${(count / analytics.totalLeads) * 100}%` }}
                          />
                        </div>
                        <span className="text-white font-semibold min-w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-bold text-white">Recent Leads</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Travel Month</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Budget</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {analytics.recentLeads.map((lead, index) => (
                      <tr key={index} className="hover:bg-slate-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                          {new Date(lead.timestamp).toLocaleDateString()} {new Date(lead.timestamp).toLocaleTimeString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            lead.type === 'full' ? 'bg-emerald-100 text-emerald-800' :
                            lead.type === 'quick' ? 'bg-blue-100 text-blue-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {lead.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{lead.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{lead.travelMonth || '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{lead.budget ? `$${lead.budget}` : '-'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{lead.howHeard || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}