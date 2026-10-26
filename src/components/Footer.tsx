import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Heart,
  ExternalLink,
  Facebook,
  Linkedin,
  Youtube,
  Lock,
} from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenCv }) => {
  const { language, t } = useLanguage();
  const { contactInfo } = useData();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-column footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Wordmark & Bio */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {language === 'bn' ? contactInfo.banglaName : contactInfo.practitionerName}
            </h3>
            <p className="text-xs text-teal-400 font-medium">
              {language === 'bn' ? contactInfo.titleBn : contactInfo.titleEn}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'bn'
                ? '২০০৯ সাল থেকে সাতক্ষীরায় ১৫+ বছরের বিশ্বস্ত গ্রামীণ চিকিৎসা সেবা। মা ও শিশু স্বাস্থ্য, প্রাথমিক চিকিৎসা ও নিবন্ধিত ফার্মেসী।'
                : 'Dedicated rural medical practice in Satkhira Sadar since 2009. Primary care, maternal wellness, minor procedures, and authentic medicine counselling.'}
            </p>
            <div className="text-xs font-mono text-slate-400">
              {contactInfo.regNumber}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  {t('navServices')}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-400 transition-colors">
                  {t('navExperience')}
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-teal-400 transition-colors">
                  {t('navCertificates')}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-teal-400 transition-colors">
                  {t('navBlog')}
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-teal-400 transition-colors">
                  {t('navAppointment')}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCv}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  {language === 'bn' ? 'জীবনবৃত্তান্ত (CV) দেখুন' : 'Download Practitioner CV'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Emergency Contacts & Hospital Hotlines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'bn' ? 'জরুরি হাসপাতাল ও হটলাইন' : 'Emergency Hospital Hotlines'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <span className="text-white font-medium">{language === 'bn' ? 'জাতীয় জরুরি কল:' : 'National Emergency:'}</span>{' '}
                <span className="text-teal-400 font-mono font-bold">999</span>
              </div>
              <div>
                <span className="text-white font-medium">{language === 'bn' ? 'সাতক্ষীরা সদর হাসপাতাল:' : 'Satkhira Sadar Hospital:'}</span>{' '}
                <span className="text-teal-400 font-mono">024777-72821</span>
              </div>
              <div>
                <span className="text-white font-medium">{language === 'bn' ? 'সরকারি অ্যাম্বুলেন্স:' : 'Govt. Ambulance:'}</span>{' '}
                <span className="text-teal-400 font-mono">01712-421100</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                {language === 'bn'
                  ? 'তীব্র দুর্ঘটনা, রক্তপাত বা অচেতন রোগীর ক্ষেত্রে সরাসরি জরুরি হটলাইনে কল দিন।'
                  : 'For acute emergencies and trauma, dial national hotline 999 immediately.'}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Social Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'bn' ? 'সরাসরি যোগাযোগ' : 'Direct Contact'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white font-mono">
                  {contactInfo.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{language === 'bn' ? contactInfo.addressBn : contactInfo.addressEn}</span>
              </div>
            </div>

            {/* Social Icons Placeholders */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <span
                aria-label="Facebook placeholder"
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-500 flex items-center justify-center cursor-not-allowed"
                title="Facebook (Rifat Pharmacy)"
              >
                <Facebook className="w-4 h-4" />
              </span>
              <span
                aria-label="LinkedIn placeholder"
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-500 flex items-center justify-center cursor-not-allowed"
                title="Professional Network"
              >
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-400 leading-relaxed">
          <p>{t('footerDisclaimer')}</p>
          <p className="mt-1 text-slate-400">{t('privacyNote')}</p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{t('footerCopyright')}</div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t('navAdmin')}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
