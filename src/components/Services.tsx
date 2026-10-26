import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialServices } from '../data/siteConfig';
import { ServiceItem } from '../types';
import {
  Stethoscope,
  Baby,
  Scissors,
  HeartPulse,
  Activity,
  ShieldCheck,
  Pill,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle2,
} from 'lucide-react';

export const Services: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#0F1B38] border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'চিকিৎসা ও ডায়াগনস্টিক' : 'Clinical Specializations'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('servicesTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid (Clean 4-column responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-md hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all cursor-pointer"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200/60 dark:border-teal-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1F3A5F] dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  {service.title[language]}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {service.description[language]}
                </p>
              </div>

              {/* View details button */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400 group-hover:translate-x-1 transition-transform">
                <span>{t('serviceLearnMore')}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Facility Image Callout Strip */}
        <div className="mt-12 bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold text-[#1F3A5F] dark:text-white">
              {language === 'bn' ? 'আধুনিক মাইনর প্রসিডিউর ও পরিষ্কার ড্রেসিং রুম' : 'Sterile Minor Procedure & Dressing Room'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {language === 'bn'
                ? 'অল্টারনেটিভ হেলথ সার্ভিসেস কর্তৃক প্রত্যয়িত মাইনর প্রসিডিউর সরঞ্জাম (খতনা, পাইলস, পলিপস ও টিউমার যত্ন) এবং জীবাণুমুক্ত ড্রেসিং কিট ব্যবহারের নিশ্চয়তা।'
                : 'Equipped with sterile instruments for male circumcision, piles care, nasal polyps, and clean antiseptic surgical dressing.'}
            </p>
          </div>
          <a
            href="#appointment"
            className="px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#1F3A5F] dark:bg-teal-600 hover:bg-[#162A45] dark:hover:bg-teal-700 transition-colors whitespace-nowrap shadow-sm"
          >
            {t('btnBookAppointment')}
          </a>
        </div>

      </div>

      {/* Modal for Service Deep Dive */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="bg-white dark:bg-[#111C35] w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F3A5F] dark:text-white">
                  {selectedService.title[language]}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'bn' ? 'চিকিৎসা বিবরণ' : 'Clinical Service Protocol'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedService.description[language]}
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="text-xs font-bold text-[#1F3A5F] dark:text-teal-400 uppercase tracking-wider">
                {language === 'bn' ? 'সেবার প্রধান সুবিধাসমূহ' : 'Key Service Inclusions'}
              </div>
              {selectedService.details[language].map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
              <a
                href="#appointment"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
              >
                {t('btnBookAppointment')}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
