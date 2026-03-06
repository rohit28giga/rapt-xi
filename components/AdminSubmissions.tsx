
import React, { useState, useEffect } from 'react';
import { Database, Clock, Building2, Users, FileBarChart, Phone, RefreshCw, Trash2 } from 'lucide-react';

interface Submission {
  id: number;
  firmName: string;
  partners: string;
  audits: string;
  mobile: string;
  timestamp: string;
}

const AdminSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/submissions');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.reverse()); // Newest first
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Database className="text-teal-400" />
              Form Submissions
            </h1>
            <p className="text-slate-400">View and manage enquiries from your website.</p>
          </div>
          <button 
            onClick={fetchSubmissions}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {loading && submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <RefreshCw className="w-12 h-12 animate-spin mb-4" />
            <p>Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-3xl">
            <p className="text-slate-500">No submissions found yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((sub) => (
              <div 
                key={sub.id}
                className="bg-[#070912] border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-colors group"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                      <Building2 className="text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{sub.firmName}</h3>
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">
                        <Clock className="w-3 h-3" />
                        {new Date(sub.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a 
                      href={`tel:${sub.mobile}`}
                      className="px-4 py-2 bg-teal-500 text-black text-sm font-bold rounded-lg hover:bg-teal-400 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-slate-500" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">Partners</p>
                      <p className="font-bold">{sub.partners}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileBarChart className="w-5 h-5 text-slate-500" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">Annual Audits</p>
                      <p className="font-bold">{sub.audits}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-500" />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">Mobile</p>
                      <p className="font-bold">{sub.mobile}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-teal-500/5 border border-teal-500/20 rounded-2xl">
          <h4 className="text-teal-400 font-bold mb-2">Traffic Insights</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            To view detailed website traffic (visitors, page views, location), please log in to your 
            <a href="https://analytics.google.com" target="_blank" className="text-white underline ml-1">Google Analytics Dashboard</a>. 
            The tracking code has been initialized in your website's source.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSubmissions;
