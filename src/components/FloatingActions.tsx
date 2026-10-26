import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenAssistant: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAssistant }) => {
  const { language } = useLanguage();
  const { contactInfo } = useData();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 items-end no-print pointer-events-auto">
      
      {/* Floating AI Assistant Trigger Bubble */}
      <button
        onClick={onOpenAssistant}
        aria-label="Open AI Health Assistant"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1F3A5F] text-white shadow-lg hover:shadow-xl hover:bg-[#162A45] dark:bg-teal-600 dark:hover:bg-teal-700 transition-all cursor-pointer text-xs font-semibold border border-white/20"
      >
        <Sparkles className="w-4 h-4 text-teal-300 animate-pulse" />
        <span className="hidden sm:inline">
          {language === 'bn' ? 'এআই স্বাস্থ্য সহকারী' : 'AI Health Assistant'}
        </span>
      </button>

      {/* Floating Contact Pair on Mobile / Tablet */}
      <div className="flex items-center gap-2">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Call Now Button */}
        <a
          href={`tel:${contactInfo.phone}`}
          aria-label="Call Md. Anoarul Islam"
          className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

    </div>
  );
};
