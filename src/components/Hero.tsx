import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  Phone,
  MessageCircle,
  Calendar,
  Download,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenAssistant }) => {
  const { language, t } = useLanguage();
  const { contactInfo, profilePhoto } = useData();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-[#0B132B] dark:via-[#0F1B38] dark:to-[#0B132B] pt-8 md:pt-14 pb-12 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clinical Title, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed natural kicker */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-teal-700 dark:text-teal-400">
              <span className="inline-flex items-center gap-1.5 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-800">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{t('heroBadge')}</span>
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400">
                {language === 'bn' ? 'সাতক্ষীরা সদর' : 'Satkhira Sadar'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1F3A5F] dark:text-white" style={{ textWrap: 'balance' }}>
                {language === 'bn' ? contactInfo.banglaName : contactInfo.practitionerName}
              </h1>
              <p className="text-base sm:text-lg font-medium text-teal-800 dark:text-teal-300">
                {language === 'bn' ? contactInfo.titleBn : contactInfo.titleEn}
              </p>
            </div>

            {/* Clear value statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {language === 'bn'
                ? '২০০৯ সাল থেকে সাতক্ষীরায় ১৫+ বছরের অভিজ্ঞতায় গ্রামীণ মানুষের প্রাথমিক স্বাস্থ্যসেবা, মা ও শিশু যত্ন, পরিবার পরিকল্পনা, আধুনিক সুন্নতে খতনা সহ মাইনর প্রসিডিউর এবং জরুরি হাসপাতাল রেফারেল সেবা প্রদান।'
                : 'Over 15 continuous years of clinical dedication in Satkhira: providing dependable primary medical care, maternal & child health, family planning counselling, trained minor procedures, and rapid hospital emergency response.'}
            </p>

            {/* Quick Practice Details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{language === 'bn' ? 'ছয়ঘরিয়া বাজার, বৈকারী, সাতক্ষীরা' : 'Chhoygharia Bazar, Baikari, Satkhira'}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{language === 'bn' ? 'শনিবার - বৃহস্পতিবার (সকাল ৯ - রাত ৮)' : 'Sat - Thu (9:00 AM - 8:00 PM)'}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Call Now */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t('btnCallNow')}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('btnWhatsapp')}</span>
              </a>

              {/* Book Appointment */}
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#1F3A5F] dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700 shadow-sm whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{t('btnBookAppointment')}</span>
              </a>

              {/* Download CV */}
              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#1F3A5F] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>{t('btnDownloadCv')}</span>
              </button>
            </div>

            {/* AI Assistant Quick Pill Button */}
            <div className="pt-1">
              <button
                onClick={onOpenAssistant}
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 hover:bg-teal-100 dark:hover:bg-teal-900/80 px-3.5 py-2 rounded-lg border border-teal-200/80 dark:border-teal-800 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{language === 'bn' ? 'চিকিৎসা বিষয়ক সাধারণ প্রশ্ন আছে? এআই স্বাস্থ্য সহকারীকে জিজ্ঞাসা করুন' : 'Have a general health question? Ask the AI Health Assistant'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Portrait & Practice Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Backing subtle glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 to-[#1F3A5F]/20 rounded-3xl blur-xl opacity-70"></div>
              
              <div className="relative bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-lg">
                
                {/* Circular Portrait with clean clinical frame */}
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-md max-w-[260px] sm:max-w-[280px] mx-auto bg-slate-100 dark:bg-slate-800">
                  <img
                    src={profilePhoto}
                    alt="Md. Anoarul Islam, Rural Medical Practitioner in Satkhira"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image path fails
                      (e.currentTarget as HTMLImageElement).src = '/src/assets/images/doctor_portrait_1792911353969.jpg';
                    }}
                  />
                </div>

                {/* Practitioner Badge under Photo */}
                <div className="mt-4 text-center space-y-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#1F3A5F] dark:text-white">
                    {language === 'bn' ? contactInfo.banglaName : contactInfo.practitionerName}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {contactInfo.regNumber}
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    <span>{t('heroAvailableToday')}</span>
                  </div>
                </div>

                {/* Quick Pharmacy Affiliation Note */}
                <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 text-center">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'bn' ? 'রিফাত ফার্মেসী (প্রতিষ্ঠা ২০২০)' : 'Rifat Pharmacy (Est. 2020)'}
                  </span>
                  <p className="mt-0.5 text-slate-500 dark:text-slate-400">
                    {language === 'bn' ? 'ছয়ঘরিয়া বাজার, সদর, সাতক্ষীরা' : 'Chhoygharia Bazar, Sadar, Satkhira'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item KPI Proof Strip below Hero (Full Width Row) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-200/80 dark:border-slate-800 pt-8">
          <div className="p-4 rounded-xl bg-white dark:bg-[#111C35] border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1F3A5F] dark:text-teal-400 tabular-nums">
              15+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
              {t('statYears')}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {language === 'bn' ? '২০০৯ সাল থেকে সক্রিয়' : 'Serving Satkhira since 2009'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#111C35] border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1F3A5F] dark:text-teal-400 tabular-nums">
              8+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
              {t('statCertificates')}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {language === 'bn' ? 'ডিএমএ, এলএমএএফপি, ডিএইচপিএম' : 'DMA, LMAFP, DHPM & DGHS'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#111C35] border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1F3A5F] dark:text-teal-400 tabular-nums">
              10,000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
              {t('statPatients')}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {language === 'bn' ? 'সাতক্ষীরা সদর ও বৈকারী এলাকা' : 'Families across Satkhira Sadar'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#111C35] border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1F3A5F] dark:text-teal-400 tabular-nums">
              1
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
              {t('statPharmacy')}
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              {language === 'bn' ? 'আসল ওষুধ ও ফার্মেসী রেজিঃ C-99360' : 'Reg. C-99360 Pharmacy Tech'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
