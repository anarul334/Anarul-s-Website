import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  Sparkles,
  Send,
  AlertTriangle,
  Bot,
  User,
  Phone,
  RefreshCw,
  X,
  ShieldAlert,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
}

interface AiHealthAssistantProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const AiHealthAssistant: React.FC<AiHealthAssistantProps> = ({ isModal = false, onClose }) => {
  const { language, t } = useLanguage();
  const { contactInfo } = useData();

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: language === 'bn'
        ? `আসসালামু আলাইকুম। আমি পল্লী চিকিৎসক মোঃ আনোয়ারুল ইসলামের ক্লিনিক্যাল এআই স্বাস্থ্য তথ্য সহকারী। সাধারণ স্বাস্থ্যবিধি, মৌসুমি জ্বর, বা প্রাথমিক সুস্থতার বিষয়ে আপনার প্রশ্ন করতে পারেন।\n\n⚠️ মনে রাখবেন: এটি সাধারণ তথ্য প্রদান করে, কোনো রোগ নির্ণয় বা প্রেসক্রিপশন নয়। জরুরি প্রয়োজনে ৯৯৯ নম্বরে কল করুন।`
        : `Hello! I am the AI Health Information Assistant for Md. Anoarul Islam's Rural Medical Practice & Rifat Pharmacy. Ask any general health, hygiene, or preventive wellness questions in English or বাংলা.\n\n⚠️ Notice: This is general information, not a medical diagnosis or prescription. In an emergency, call 999 or visit the nearest hospital.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  const quickQuestions = language === 'bn'
    ? [
        'হঠাৎ তীব্র জ্বরে ঘরে বসে প্রাথমিক করণীয় কী?',
        'ডেঙ্গু জ্বরের প্রধান লক্ষণ ও সতর্কতা কী?',
        'শিশুর পাতলা পায়খানায় ওআরএস (স্যালাইন) তৈরির সঠিক নিয়ম?',
        'কাটা ক্ষতে ধনুষ্টংকার (টিটেনাস) প্রতিরোধের নিয়ম?',
      ]
    : [
        'What are the safe first steps for sudden fever?',
        'What are the warning signs of dengue fever?',
        'How to properly prepare and give ORS for child diarrhea?',
        'What should I do immediately for a deep farm cut?',
      ];

  // Only scroll inner chat container when a message is sent or received, NEVER scroll the browser window
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!userText) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text,
          })),
          language,
        }),
      });

      if (!response.ok) {
        throw new Error('API response was not ok');
      }

      const data = await response.json();
      const replyText = data.text || (
        language === 'bn'
          ? 'দুঃখিত, উত্তর পাওয়া সম্ভব হয়নি। অনুগ্রহ করে চেম্বারে যোগাযোগ করুন।'
          : 'Could not generate advice. Please consult the clinic directly.'
      );

      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      // Safe fallback response strictly adhering to requirements
      const fallbackText = language === 'bn'
        ? `এটি সাধারণ তথ্য, কোনো চিকিৎসা বা রোগ নির্ণয় নয়। সঠিক পরামর্শ ও প্রেসক্রিপশনের জন্য সরাসরি পল্লী চিকিৎসক মোঃ আনোয়ারুল ইসলাম (রিফাত ফার্মেসী, ছয়ঘরিয়া বাজার, ফোন: ০১৭৪৮-১২৮১০৬) অথবা সরকারি হাসপাতালে যোগাযোগ করুন।\n\nজরুরি অবস্থায় অবিলম্বে ৯৯৯ নম্বরে কল করুন বা নিকটস্থ হাসপাতালে যান।`
        : `This is general information, not a diagnosis. See a doctor for medical advice. In an emergency, call 999 or go to the nearest hospital.\n\nPlease consult Md. Anoarul Islam at Rifat Pharmacy, Chhoygharia Bazar, Satkhira (Phone: 01748-128106) for physical assessment and medical advice.`;

      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: fallbackText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  const containerContent = (
    <div className="flex flex-col h-full bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md overflow-hidden">
      
      {/* Assistant Header */}
      <div className="px-5 py-4 bg-[#1F3A5F] text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-teal-300" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
              <span>{t('aiAssistantTitle')}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/30 text-teal-200 font-normal">
                Gemini AI
              </span>
            </h3>
            <p className="text-[11px] text-teal-200/80">
              {t('aiAssistantSubtitle')}
            </p>
          </div>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mandatory Prominent Medical Disclaimer Banner */}
      <div className="px-4 py-2.5 bg-amber-50 dark:bg-amber-950/60 border-b border-amber-200/80 dark:border-amber-800/80 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
        <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-snug">
          <span className="font-bold">
            {language === 'bn' ? 'বাধ্যতামূলক সতর্কতা: ' : 'Required Medical Notice: '}
          </span>
          <span>{t('aiAssistantDisclaimer')}</span>
        </div>
      </div>

      {/* Message Stream */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 max-h-[380px] sm:max-h-[440px]"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0 text-xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#1F3A5F] text-white rounded-tr-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-xs whitespace-pre-line border border-slate-200/60 dark:border-slate-700'
              }`}
            >
              <div>{msg.text}</div>
              <div
                className={`text-[10px] mt-1.5 tabular-nums ${
                  msg.sender === 'user' ? 'text-teal-200/70 text-right' : 'text-slate-400'
                }`}
              >
                {msg.time}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-[#1F3A5F] text-white flex items-center justify-center shrink-0 text-xs">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-700 flex items-center justify-center shrink-0 animate-pulse">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
              <span>{t('aiThinking')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
          {t('quickQuestions')}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={loading}
              className="text-[11px] text-teal-800 dark:text-teal-300 bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/60 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 transition-colors text-left cursor-pointer truncate max-w-full"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111C35]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('aiInputPlaceholder')}
            disabled={loading}
            className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>{t('aiSend')}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs">
        <div className="w-full max-w-xl h-[90vh] max-h-[680px]">
          {containerContent}
        </div>
      </div>
    );
  }

  return (
    <section id="assistant" className="py-16 md:py-20 bg-white dark:bg-[#0B132B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? '২৪/৭ ডিজিটাল স্বাস্থ্য তথ্য' : '24/7 Digital Health Guidance'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F3A5F] dark:text-white tracking-tight">
            {t('aiAssistantTitle')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {t('aiAssistantSubtitle')}
          </p>
        </div>

        {containerContent}

      </div>
    </section>
  );
};
