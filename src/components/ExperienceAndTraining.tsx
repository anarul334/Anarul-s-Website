import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  initialExperience,
  initialTraining,
  initialEducation,
  initialMemberships,
} from '../data/siteConfig';
import { TimelineItem } from '../types';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Building,
  ShieldCheck,
} from 'lucide-react';

export const ExperienceAndTraining: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'training' | 'education'>('all');

  const getTimelineItems = (): TimelineItem[] => {
    switch (activeTab) {
      case 'experience':
        return initialExperience;
      case 'training':
        return initialTraining;
      case 'education':
        return initialEducation;
      case 'all':
      default:
        // Combine all in chronological order or grouped
        return [
          ...initialExperience,
          ...initialTraining,
          ...initialEducation,
        ];
    }
  };

  const getTimelineIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'training':
        return <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
    }
  };

  const items = getTimelineItems();

  return (
    <section id="experience" className="py-16 md:py-20 bg-white dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'ক্যারিয়ার ও প্রশিক্ষণ' : 'Credentials & Medical Heritage'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('timelineTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('timelineSubtitle')}
          </p>
        </div>

        {/* Tab Controls (Functional Button Tabs adhering to Zero-Pill rules) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl max-w-2xl mb-12 border border-slate-200/60 dark:border-slate-700 w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
              activeTab === 'all'
                ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {language === 'bn' ? 'সকল অর্জন' : 'All Milestones'}
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
              activeTab === 'training'
                ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('tabTraining')}
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
              activeTab === 'experience'
                ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('tabExperience')}
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 ${
              activeTab === 'education'
                ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('tabEducation')}
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 md:ml-8 pl-5 sm:pl-8 space-y-10">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline marker icon node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#0B132B] border-2 border-teal-600 dark:border-teal-400 flex items-center justify-center shadow-xs">
                {getTimelineIcon(item.type)}
              </div>

              {/* Timeline Content Card */}
              <div className="bg-slate-50/70 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 hover:border-teal-500/50 transition-all shadow-xs">
                
                {/* Period & Category Header (Zero-Pill: Unboxed typography with middot) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
                  <span className="flex items-center gap-1 font-mono tabular-nums text-slate-800 dark:text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    {item.period}
                  </span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="capitalize text-slate-500 dark:text-slate-400">
                    {item.type === 'experience'
                      ? (language === 'bn' ? 'চিকিৎসা অভিজ্ঞতা' : 'Clinical Experience')
                      : item.type === 'training'
                      ? (language === 'bn' ? 'মেডিকেল ট্রেনিং' : 'Medical Diploma/Training')
                      : (language === 'bn' ? 'প্রাতিষ্ঠানিক শিক্ষা' : 'Formal Education')}
                  </span>
                  {item.grade && (
                    <>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span className="font-bold text-teal-700 dark:text-teal-300">
                        {item.grade}
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1F3A5F] dark:text-white">
                  {item.title[language]}
                </h3>

                {/* Organization / Awarding Body */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                  <Building className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{item.organization[language]}</span>
                </div>

                {/* Details Description */}
                {item.details && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.details[language]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Memberships Summary Box */}
        <div className="mt-16 bg-slate-50 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400 mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{t('tabMemberships')}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initialMemberships.map((mem, i) => (
              <div key={i} className="space-y-1">
                <div className="text-sm font-bold text-[#1F3A5F] dark:text-white">
                  {language === 'bn' ? mem.titleBn : mem.titleEn}
                </div>
                <div className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                  {language === 'bn' ? mem.statusBn : mem.statusEn}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {mem.body}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
