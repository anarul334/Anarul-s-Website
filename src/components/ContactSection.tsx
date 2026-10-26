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
              <div className="pt-1 flex items-center gap-3 font-semibold text-amber-800 dark:text-amber-300">
                <span>{language === 'bn' ? 'জাতীয় জরুরি হটলাইন: ৯৯৯' : 'National Emergency: 999'}</span>
                <span>·</span>
                <span>{language === 'bn' ? 'সদর হাসপাতাল: ০২৪৭৭৭-৭২৮২১' : 'Sadar Hospital: 024777-72821'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Embed of Satkhira Sadar */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative bg-slate-100 dark:bg-slate-800">
              {/* Google Maps iframe focused on Satkhira Sadar / Chhoygharia */}
              <iframe
                title="Satkhira Sadar Chhoygharia Location Map"
                src="https://maps.google.com/maps?q=Chhoygharia%20Bazar%20Satkhira%20Sadar%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] lg:min-h-[460px]"
              ></iframe>

              {/* Map floating banner */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 dark:bg-[#0B132B]/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md text-xs space-y-1">
                <div className="font-bold text-[#1F3A5F] dark:text-teal-400 flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-teal-600" />
                  <span>{language === 'bn' ? 'রিফাত ফার্মেসী ও চেম্বার' : 'Rifat Pharmacy & Chamber'}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {language === 'bn' ? 'ছয়ঘরিয়া বাজার, বৈকারী রোড, সাতক্ষীরা সদর' : 'Chhoygharia Bazar, Baikari Road, Satkhira Sadar'}
                </p>
                <a
                  href="https://maps.google.com/?q=Satkhira+Sadar+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 dark:text-teal-400 hover:underline pt-0.5"
                >
                  <span>{t('openInGoogleMaps')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
