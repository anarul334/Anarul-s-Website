import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { initialMemberships } from '../data/siteConfig';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Stethoscope,
  HeartHandshake,
  Award,
} from 'lucide-react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();
  const { contactInfo } = useData();

  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'চিকিৎসক পরিচিতি' : 'Practitioner Profile'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('aboutTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* 2-Column Split: Editorial Bio + Pharmacy Media Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Detailed Clinical Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
              <p>{t('aboutP3')}</p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {language === 'bn' ? 'আসল কোম্পানি ওষুধ ও সঠিক ডোজ নির্দেশনা' : 'Genuine medicines & precise dosage instruction'}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {language === 'bn' ? 'জীবাণুমুক্ত আধুনিক সুন্নতে খতনা ও ড্রেসিং' : 'Aseptic minor procedures & wound care'}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {language === 'bn' ? 'মা ও শিশুর পুষ্টি ও ইপিআই টিকাদান সচেতনতা' : 'Maternal-child wellness & EPI immunization'}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  {language === 'bn' ? 'জরুরি প্রয়োজনে সাতক্ষীরা সদর হাসপাতালে রেফারেল' : 'Rapid referral coordination to Satkhira Hospital'}
                </span>
              </div>
            </div>

            {/* Official Memberships Strip */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xs sm:text-sm font-bold text-[#1F3A5F] dark:text-teal-400 uppercase tracking-wider mb-3">
                {t('aboutRegTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {initialMemberships.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {language === 'bn' ? m.titleBn : m.titleEn}
                    </div>
                    <div className="text-[11px] font-medium text-teal-700 dark:text-teal-400 mt-1">
                      {language === 'bn' ? m.statusBn : m.statusEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Rifat Pharmacy Spotlight with authentic photography */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-50 dark:bg-[#111C35] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 h-full flex flex-col justify-between shadow-xs">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span>{language === 'bn' ? 'কমিউনিটি চেম্বার ও ফার্মেসী' : 'Community Chamber & Pharmacy'}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F3A5F] dark:text-white">
                  {language === 'bn' ? contactInfo.pharmacyBn : contactInfo.pharmacyEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {language === 'bn'
                    ? '২০২০ সাল থেকে ছয়ঘরিয়া বাজারে পরিচালিত নিবন্ধিত ফার্মেসী। এখানে বিশেষজ্ঞ চিকিৎসকদের প্রেসক্রিপশনের ওষুধ আসল প্রস্তুতকারক প্রতিষ্ঠান থেকে সংগ্রহ করে নির্ধারিত তাপমাত্রায় সংরক্ষণ ও সরবরাহ করা হয়।'
                    : 'Serving Chhoygharia Bazar since 2020. Providing verified pharmaceuticals sourced directly from recognized pharmaceutical companies, stored under quality standards.'}
                </p>
              </div>

              {/* Pharmacy Image */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-video bg-slate-200 dark:bg-slate-800">
                <img
                  src="/images/rifat_pharmacy_1792911355260.jpg"
                  alt="Rifat Pharmacy Chhoygharia Bazar Satkhira"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* COVID-19 Surveillance Project Attribution */}
              <div className="p-3.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <div className="font-semibold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{language === 'bn' ? 'কোভিড-১৯ গ্রামীণ নজরদারি প্রকল্প (২০২০-২০২১)' : 'COVID-19 Rural Surveillance Project (2020-2021)'}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'bn'
                    ? 'জীঅন বাংলাদেশ লিমিটেড, ইয়েল বিশ্ববিদ্যালয় ও ইনোভেশনস ফর পোভার্টি অ্যাকশন (IPA)-এর যৌথ গ্রামীণ স্বাস্থ্য প্রকল্পে সাতক্ষীরার ফ্রন্টলাইন সেন্টিনেল ফার্মেসী হিসেবে সক্রিয় অংশগ্রহণ।'
                    : 'Selected frontline pharmacy participant in community syndromic surveillance jointly led by Jeeon Bangladesh, Yale University, and Innovations for Poverty Action (IPA).'}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
