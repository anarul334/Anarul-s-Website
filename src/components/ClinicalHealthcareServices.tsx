import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { ClinicalServiceItem } from '../types';
import {
  clinicalSafetyStandards,
  clinicalHowItWorksSteps,
  clinicalFaqs,
} from '../data/siteConfig';
import {
  ShieldCheck,
  Sparkles,
  Stethoscope,
  CheckCircle2,
  HeartPulse,
  Activity,
  AlertTriangle,
  Clock,
  ArrowRight,
  Phone,
  Calendar,
  X,
  ChevronDown,
  Info,
  Building2,
  Check,
  AlertCircle,
  Scissors,
} from 'lucide-react';

export const ClinicalHealthcareServices: React.FC = () => {
  const { language, t } = useLanguage();
  const { clinicalServices, setSelectedServiceForBooking, contactInfo } = useData();

  const [selectedService, setSelectedService] = useState<ClinicalServiceItem | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-cost');

  // Filter only visible services and sort by order
  const visibleServices = [...clinicalServices]
    .filter((s) => s.isVisible)
    .sort((a, b) => a.order - b.order);

  const handleBookService = (service: ClinicalServiceItem) => {
    const serviceName = language === 'bn' ? service.title.bn : service.title.en;
    setSelectedServiceForBooking(serviceName);
    setSelectedService(null);

    // Smooth scroll to appointment section
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSafetyIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section
      id="clinical-services"
      className="py-16 md:py-24 bg-white dark:bg-[#0B132B] border-b border-slate-200/80 dark:border-slate-800 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-xs font-semibold text-teal-800 dark:text-teal-300 mb-3">
            <Scissors className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{t('clinicalBadge')}</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            {t('clinicalHeading')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('clinicalIntro')}
          </p>
        </div>

        {/* 6 Services Responsive Grid (3 col desktop, 2 col tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col bg-slate-50 dark:bg-[#111C35] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/90 shadow-xs hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={service.imageUrl}
                  alt={language === 'bn' ? service.title.bn : service.title.en}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/95 dark:bg-[#0B132B]/90 text-[#1F3A5F] dark:text-teal-300 shadow-xs backdrop-blur-xs">
                    {language === 'bn' ? service.category.bn : service.category.en}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[11px] text-white">
                  <Clock className="w-3 h-3 text-teal-300" />
                  <span>{language === 'bn' ? service.estimatedDuration.bn : service.estimatedDuration.en}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1F3A5F] dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {language === 'bn' ? service.title.bn : service.title.en}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {language === 'bn' ? service.summary.bn : service.summary.en}
                  </p>

                  {/* Highlights pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(language === 'bn' ? service.highlights.bn : service.highlights.en).slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 max-w-full break-words min-w-0"
                      >
                        <Check className="w-3 h-3 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span className="break-words">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1F3A5F] dark:text-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 cursor-pointer min-w-0"
                  >
                    <span className="truncate">{language === 'bn' ? 'বিস্তারিত তথ্য দেখুন' : 'View Details & Guidance'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>

                  <button
                    onClick={() => handleBookService(service)}
                    title={language === 'bn' ? 'সিরিয়াল নিন' : 'Book Appointment'}
                    className="p-2 rounded-lg bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/60 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 transition-colors cursor-pointer shrink-0"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST AND SAFETY: Our Safety Standards Strip */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F3A5F] dark:text-white">
              {t('clinicalSafetyTitle')}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {t('clinicalSafetySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalSafetyStandards.map((std) => (
              <div
                key={std.id}
                className="p-5 rounded-xl bg-slate-50 dark:bg-[#111C35] border border-slate-200/70 dark:border-slate-800 flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 shadow-xs shrink-0">
                  {getSafetyIcon(std.iconName)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1F3A5F] dark:text-white">
                    {language === 'bn' ? std.title.bn : std.title.en}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'bn' ? std.desc.bn : std.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS: 4-Step Clinical Flow */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-teal-500/5 via-slate-50 to-blue-500/5 dark:from-[#111C35] dark:via-[#0F1B38] dark:to-[#111C35] border border-teal-200/60 dark:border-teal-900/40">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-1">
              {language === 'bn' ? 'সুশৃঙ্খল চিকিৎসা পদ্ধতি' : 'Clinical Protocol'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F3A5F] dark:text-white">
              {t('clinicalFlowTitle')}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {t('clinicalFlowSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {clinicalHowItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col p-5 bg-white dark:bg-[#0B132B]/80 rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-bold text-teal-600 dark:text-teal-400">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#1F3A5F] dark:text-white mb-2">
                  {language === 'bn' ? step.title.bn : step.title.en}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'bn' ? step.desc.bn : step.desc.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F3A5F] dark:text-white">
              {t('clinicalFaqHeading')}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {language === 'bn'
                ? 'ব্যয়, ব্যথা নিয়ন্ত্রণ, আরোগ্যের সময় এবং সিরিয়াল সম্পর্কিত সাধারণ প্রশ্নের উত্তর'
                : 'Common questions on costs, comfort, recovery timelines, and appointment booking'}
            </p>
          </div>

          <div className="space-y-3">
            {clinicalFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#111C35] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1F3A5F] dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-300 cursor-pointer"
                  >
                    <span>{language === 'bn' ? faq.question.bn : faq.question.en}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 text-teal-600 dark:text-teal-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200/50 dark:border-slate-800/80 leading-relaxed bg-white/40 dark:bg-black/10">
                      {language === 'bn' ? faq.answer.bn : faq.answer.en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* VISIBLE DISCLAIMER BOX */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto p-4 sm:p-5 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200/90 text-xs sm:text-sm flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold block sm:inline mr-1">
              {language === 'bn' ? 'সতর্কতামূলক বার্তা:' : 'Clinical Disclaimer:'}
            </span>
            <span>{t('clinicalDisclaimer')}</span>
          </div>
        </div>

      </div>

      {/* SERVICE DETAILS MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0B132B] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
            >
              {/* Modal Header Image */}
              <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={selectedService.imageUrl}
                  alt={language === 'bn' ? selectedService.title.bn : selectedService.title.en}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-teal-500 text-white uppercase tracking-wider">
                    {language === 'bn' ? selectedService.category.bn : selectedService.category.en}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {language === 'bn' ? selectedService.title.bn : selectedService.title.en}
                  </h3>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
                
                {/* Note Banner if present */}
                {selectedService.note && (
                  <div className="p-3.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-xs sm:text-sm text-teal-900 dark:text-teal-200 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      {language === 'bn' ? selectedService.note.bn : selectedService.note.en}
                    </p>
                  </div>
                )}

                {/* Full Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {language === 'bn' ? 'চিকিৎসা পরিচিতি' : 'About This Service'}
                  </h4>
                  <p className="leading-relaxed">
                    {language === 'bn' ? selectedService.fullDescription.bn : selectedService.fullDescription.en}
                  </p>
                </div>

                {/* Quick details strip: Duration & Cost */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#111C35] border border-slate-200/80 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <div>
                      <span className="font-semibold block text-slate-900 dark:text-slate-100">
                        {language === 'bn' ? 'প্রসিডিউরের সময়কাল' : 'Session Duration'}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {language === 'bn' ? selectedService.estimatedDuration.bn : selectedService.estimatedDuration.en}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <div>
                      <span className="font-semibold block text-slate-900 dark:text-slate-100">
                        {language === 'bn' ? 'খরচ ও ফি' : 'Fee Structure'}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {language === 'bn' ? selectedService.costRange.bn : selectedService.costRange.en}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Who It Is For */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{t('labelWhoItIsFor')}</span>
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {(language === 'bn' ? selectedService.whoItIsFor.bn : selectedService.whoItIsFor.en).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who should avoid (Contraindications) */}
                {selectedService.contraindications && (
                  <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/80 dark:border-red-900/40">
                    <h4 className="text-xs font-bold text-red-800 dark:text-red-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <span>{t('labelContraindications')}</span>
                    </h4>
                    <ul className="space-y-1.5 pl-1">
                      {(language === 'bn' ? selectedService.contraindications.bn : selectedService.contraindications.en).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-red-900 dark:text-red-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* How It Works (Step-by-step) */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
                    {t('labelHowItWorksSteps')}
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.howItWorksSteps.map((step) => (
                      <div
                        key={step.step}
                        className="p-3 rounded-lg bg-slate-50 dark:bg-[#111C35] border border-slate-200/70 dark:border-slate-800 flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <h5 className="text-xs sm:text-sm font-semibold text-[#1F3A5F] dark:text-white">
                            {language === 'bn' ? step.title.bn : step.title.en}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                            {language === 'bn' ? step.desc.bn : step.desc.en}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before Procedure */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">
                    {t('labelBeforeProcedure')}
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {(language === 'bn' ? selectedService.beforeProcedure.bn : selectedService.beforeProcedure.en).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Care */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">
                    {t('labelAfterCare')}
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {(language === 'bn' ? selectedService.afterCare.bn : selectedService.afterCare.en).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to see a hospital / Warning signs */}
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300/80 dark:border-amber-800/60">
                  <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>{t('labelWhenToSeeHospital')}</span>
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {(language === 'bn' ? selectedService.whenToSeeHospital.bn : selectedService.whenToSeeHospital.en).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-amber-950 dark:text-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#0F1B38] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{t('btnCallDirect')}</span>
                </a>

                <div className="w-full sm:w-auto flex items-center gap-2">
                  <button
                    onClick={() => handleBookService(selectedService)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F3A5F] hover:bg-[#152843] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t('btnBookThisService')}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
