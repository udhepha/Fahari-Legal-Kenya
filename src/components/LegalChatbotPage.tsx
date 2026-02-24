import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { Send, User, Bot, Loader2, Info, AlertCircle } from 'lucide-react';
import { SectionHeading } from '../App';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const LegalChatbotPage: React.FC = () => {
  const [apiKey, setApiKey] = useState<string | undefined>(process.env.GEMINI_API_KEY);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    if (!apiKey) {
      setError('Gemini API Key is not configured. Please ensure process.env.GEMINI_API_KEY is set.');
      setLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are a legal assistant for Fahari Legal Kenya. Provide helpful and general legal information. Do not give specific legal advice or form an attorney-client relationship. Always advise users to consult with a qualified legal professional for their specific situation."
        },
      });

      const history = messages.map(msg => ({ role: msg.role, parts: [{ text: msg.content }] }));
      const streamResponse = await chat.sendMessageStream({
        message: input,
      });

      let modelResponseContent = '';
      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          modelResponseContent += c.text;
          setMessages((prev) => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'model' && lastMessage.content === '') {
              // Update the last message if it's an empty model message (for streaming)
              return prev.slice(0, -1).concat({ role: 'model', content: modelResponseContent });
            } else if (prev.length > 0 && prev[prev.length - 1].role === 'model') {
              // If the last message is already from the model, append to its content
              return prev.slice(0, -1).concat({ role: 'model', content: modelResponseContent });
            } else {
              // Otherwise, add a new model message
              return [...prev, { role: 'model', content: modelResponseContent }];
            }
          });
        }
      }
      setLoading(false);
    } catch (err: any) {
      console.error('Gemini API error:', err);
      setError('Failed to get a response from the chatbot. Please try again. Error: ' + err.message);
      setLoading(false);
      setMessages((prev) => prev.slice(0, -1)); // Remove user message if model fails
    }
  };

  return (
    <section className="py-16 bg-slate-950 text-white min-h-screen flex flex-col pt-[100px]">
      <div className="container mx-auto px-4 md:px-6 flex-grow flex flex-col">
        <SectionHeading title="Legal Chatbot" subtitle="Get general legal information and guidance." centered />

        <div className="flex-grow flex flex-col bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-white/10">
          <div className="flex-grow p-6 overflow-y-auto space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-slate-500 py-10">
                <Info className="w-10 h-10 mx-auto mb-4 text-slate-600" />
                <p>Ask me anything about general legal topics in Kenya.</p>
                <p className="text-sm mt-2">I cannot provide specific legal advice.</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={ `max-w-[70%] p-3 rounded-lg flex items-start gap-2 ${msg.role === 'user' ? 'bg-accent text-white' : 'bg-white/10 text-slate-200'}`}>
                  {msg.role === 'model' && <Bot className="w-5 h-5 flex-shrink-0 text-emerald-300" />}
                  <div className="markdown-body">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                  {msg.role === 'user' && <User className="w-5 h-5 flex-shrink-0 text-emerald-300" />}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[70%] p-3 rounded-lg bg-white/10 text-slate-200 flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin text-emerald-300" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-start">
                <div className="max-w-[70%] p-3 rounded-lg bg-red-500/10 text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-white/10 p-4 flex gap-4 bg-slate-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a legal question..."
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white focus:outline-none focus:border-accent placeholder:text-slate-500"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-accent text-white p-3 rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !input.trim()}
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LegalChatbotPage;
