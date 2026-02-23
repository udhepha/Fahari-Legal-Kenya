import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../App';
import { CivicLensEngine, IssueCategory, UrgencyLevel, CivicLensAnalysis } from '../civiclense/CivicLensEngine';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../lib/utils';
import { Loader2, AlertCircle, CheckCircle2, Lightbulb, MapPin, Building2, TrendingUp } from 'lucide-react';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const CivicLensPage: React.FC = () => {
  const [issueText, setIssueText] = useState('');
  const [analysis, setAnalysis] = useState<CivicLensAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const checkApiKey = async () => {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(selected);
      }
    };
    checkApiKey();
  }, []);

  const handleSelectApiKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Assume selection was successful and proceed. If it fails, the API call will catch it.
      setHasApiKey(true);
    }
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setAnalysis(null);
    setLoading(true);

    if (!issueText.trim()) {
      setError('Please enter some text to analyze.');
      setLoading(false);
      return;
    }

    if (!hasApiKey || !process.env.GEMINI_API_KEY) {
      setError('API key not selected. Please select an API key first.');
      setLoading(false);
      return;
    }

    try {
      // Create a new GoogleGenAI instance right before making an API call
      // to ensure it always uses the most up-to-date API key from the dialog.
      const engine = new CivicLensEngine({ apiKey: process.env.GEMINI_API_KEY!, model: 'gemini-3-flash-preview' });
      const result = await engine.analyzeIssue(issueText);
      setAnalysis(result);
    } catch (err: any) {
      console.error('CivicLens analysis failed:', err);
      // If the error is due to an invalid API key, prompt the user to select again.
      if (err.message && err.message.includes("Requested entity was not found")) {
        setHasApiKey(false);
        setError("Invalid API key. Please select a valid API key.");
      } else {
        setError(err.message || 'Failed to analyze the issue. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="civiclense" className="py-24 bg-slate-50 pt-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="CivicLens AI"
          subtitle="Your civic intelligence engine: Classify issues, detect urgency, flag patterns, and gain advocacy insights."
          centered
        />

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          {!hasApiKey ? (
            <div className="text-center space-y-4">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="text-xl font-bold text-primary">API Key Required</h3>
              <p className="text-slate-600">Please select a Gemini API key to use CivicLens AI. This model requires a paid Google Cloud project.</p>
              <button
                onClick={handleSelectApiKey}
                className="bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Select API Key
              </button>
              <p className="text-sm text-slate-500 mt-4">
                Learn more about Gemini API billing:
                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                  ai.google.dev/gemini-api/docs/billing
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div>
                <label htmlFor="issueText" className="block text-sm font-medium text-slate-700 mb-2">
                  Describe the Civic Issue
                </label>
                <textarea
                  id="issueText"
                  rows={8}
                  className="w-full p-4 border border-slate-300 rounded-lg focus:ring-accent focus:border-accent outline-none transition-colors"
                  placeholder="E.g., 'The local government has failed to provide clean water to residents in informal settlements for the past six months, leading to widespread disease outbreaks. Community leaders have repeatedly raised concerns, but no action has been taken by the municipal council.'"
                  value={issueText}
                  onChange={(e) => setIssueText(e.target.value)}
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2",
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-700'
                )}
                disabled={loading}
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                {loading ? 'Analyzing...' : 'Analyze Issue'}
              </button>
            </form>
          )}

          {error && hasApiKey && (
            <div className="mt-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">Error: {error}</p>
            </div>
          )}

          {analysis && hasApiKey && (
            <div className="mt-8 space-y-8">
              <h3 className="text-2xl font-bold text-primary">Analysis Results</h3>

              {/* Issue Category */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Issue Category</p>
                <div className="flex flex-wrap gap-2">
                  {analysis.issueCategory.map((category, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Urgency Level</p>
                <span className={cn(
                  "px-3 py-1 text-sm font-medium rounded-full",
                  analysis.urgencyLevel === UrgencyLevel.CRITICAL && 'bg-red-100 text-red-800',
                  analysis.urgencyLevel === UrgencyLevel.HIGH && 'bg-orange-100 text-orange-800',
                  analysis.urgencyLevel === UrgencyLevel.MEDIUM && 'bg-yellow-100 text-yellow-800',
                  analysis.urgencyLevel === UrgencyLevel.LOW && 'bg-green-100 text-green-800'
                )}>
                  {analysis.urgencyLevel}
                </span>
              </div>

              {/* Systemic Patterns */}
              {analysis.systemicPatterns.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Systemic Patterns <TrendingUp className="inline-block w-4 h-4 ml-1 text-slate-400" /></p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {analysis.systemicPatterns.map((pattern, index) => (
                      <li key={index}>{pattern}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Institutions Mentioned */}
              {analysis.institutionsMentioned.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Institutions Mentioned <Building2 className="inline-block w-4 h-4 ml-1 text-slate-400" /></p>
                  <div className="flex flex-wrap gap-2">
                    {analysis.institutionsMentioned.map((institution, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                        {institution}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Geographic References */}
              {analysis.geographicReferences.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Geographic References <MapPin className="inline-block w-4 h-4 ml-1 text-slate-400" /></p>
                  <div className="flex flex-wrap gap-2">
                    {analysis.geographicReferences.map((geo, index) => (
                      <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                        {geo}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Advocacy Insights */}
              {analysis.advocacyInsights.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">Advocacy Insights <Lightbulb className="inline-block w-4 h-4 ml-1 text-slate-400" /></p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {analysis.advocacyInsights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CivicLensPage;
