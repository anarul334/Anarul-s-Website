import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Navigation,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { contactInfo, clinicHours } = useData();

  const [showLiveMap, setShowLiveMap] = React.useState(false);

  return (
    <section id="contact" className="py-16 md:py-20 bg-white dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'ঠিকানা ও সময়সূচি' : 'Chamber & Pharmacy Location'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('contactTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Pharmacy card */}
            <div className="bg-slate-50 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {t('clinicAddressLabel')}
                  </div>
                  <h3 className="text-base font-bold text-[#1F3A5F] dark:text-white mt-0.5">
                    {language === 'bn' ? contactInfo.pharmacyBn : contactInfo.pharmacyEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {language === 'bn' ? contactInfo.addressBn : contactInfo.addressEn}
                  </p>
                  <div className="mt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    {contactInfo.regNumber}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp card */}
            <div className="bg-slate-50 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-4 shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{t('phoneLabel')}</span>
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm sm:text-base font-bold text-[#1F3A5F] dark:text-teal-300 hover:underline font-mono"
                  >
                    {contactInfo.displayPhone}
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>{t('whatsappLabel')}</span>
                  </div>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Chat on WhatsApp'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Clinic Consultation Hours */}
            <div className="bg-slate-50 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1F3A5F] dark:text-teal-400 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{t('hoursLabel')}</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between font-medium">
                  <span className="text-slate-700 dark:text-slate-200">
                    {clinicHours.regularDays[language]}
                  </span>
                  <span className="font-mono font-semibold text-[#1F3A5F] dark:text-teal-300">
                    {clinicHours.regularTime[language]}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                  <span>{clinicHours.fridayStatus[language]}</span>
                </div>
              </div>
            </div>

            {/* Emergency Hospital Protocol Box */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{t('emergencyHeading')}</span>
              </div>
              <p className="leading-relaxed">
                {clinicHours.emergencyNotice[language]}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold text-amber-800 dark:text-amber-300 text-xs">
                <span>{language === 'bn' ? 'জাতীয় জরুরি হটলাইন: ৯৯৯' : 'National Emergency: 999'}</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span>{language === 'bn' ? 'সদর হাসপাতাল: ০২৪৭৭৭-৭২৮২১' : 'Sadar Hospital: 024777-72821'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Location Map Card (Zero blocking) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative bg-slate-50 dark:bg-[#111C35] flex flex-col justify-between">
              
              {showLiveMap ? (
                <iframe
                  title="Satkhira Sadar Chhoygharia Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=89.0100%2C22.7150%2C89.0600%2C22.7550&amp;layer=mapnik&amp;marker=22.7350%2C89.0350"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="w-full flex-1 min-h-[340px] lg:min-h-[420px]"
                ></iframe>
              ) : (
                /* Native Vector Map Preview (Instant, Zero Network Latency) */
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center items-center text-center space-y-5 bg-gradient-to-br from-teal-50/60 via-slate-50 to-teal-100/30 dark:from-slate-900 dark:via-[#111C35] dark:to-teal-950/30">
                  <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/20">
                    <MapPin className="w-9 h-9" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                      {language === 'bn' ? 'সরাসরি চেম্বার লোকেশন' : 'Direct Chamber Location'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1F3A5F] dark:text-white">
                      {language === 'bn' ? 'রিফাত ফার্মেসী ও চেম্বার' : 'Rifat Pharmacy & Chamber'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'bn'
                        ? 'ছয়ঘরিয়া বাজার, বৈকারী রোড, সাতক্ষীরা সদর, সাতক্ষীরা-৯৪০০ (সাতক্ষীরা সদর হাসপাতাল থেকে আনুমানিক ৬.৫ কিমি)'
                        : 'Chhoygharia Bazar, Baikari Road, Satkhira Sadar, Satkhira-9400 (Approx. 6.5 km from Satkhira Sadar Hospital)'}
                    </p>
                  </div>

                  {/* Landmarks strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-md text-left text-xs">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] text-slate-400">{language === 'bn' ? 'এলাকা' : 'Area'}</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{language === 'bn' ? 'ছয়ঘরিয়া বাজার' : 'Chhoygharia'}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] text-slate-400">{language === 'bn' ? 'সংযোগ সড়ক' : 'Road'}</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{language === 'bn' ? 'বৈকারী প্রধান সড়ক' : 'Baikari Road'}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-slate-400">{language === 'bn' ? 'রেফারেল' : 'Referral'}</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{language === 'bn' ? 'সদর হাসপাতাল' : 'Sadar Hospital'}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Chhoygharia+Bazar+Satkhira+Bangladesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm cursor-pointer"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>{t('openInGoogleMaps')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setShowLiveMap(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                    >
                      <span>{language === 'bn' ? 'স্যাটেলাইট বা লাইভ ম্যাপ দেখুন' : 'Load Interactive Map'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom bar */}
              <div className="p-3.5 bg-white/95 dark:bg-[#111C35]/95 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Navigation className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>22.7380° N, 89.0200° E</span>
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="font-mono font-semibold text-teal-700 dark:text-teal-400 hover:underline"
                >
                  {contactInfo.displayPhone}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
