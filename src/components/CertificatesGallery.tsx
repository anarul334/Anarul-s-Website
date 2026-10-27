import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { CertificateItem } from '../types';
import {
  Award,
  Maximize2,
  X,
  Building,
  Calendar,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export const CertificatesGallery: React.FC = () => {
  const { language, t } = useLanguage();
  const { certificates } = useData();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#0F1B38] border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'সনদ ও যোগ্যতা' : 'Verified Qualifications'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('certTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('certSubtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-teal-500/50 transition-all cursor-pointer"
            >
              {/* Certificate Image Frame */}
              <div className="relative aspect-4/3 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={cert.title[language]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/minor_procedures_care_1792911356505.jpg';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-teal-50 dark:bg-slate-800 text-teal-700">
                    <Award className="w-12 h-12" />
                  </div>
                )}
                
                {/* Lightbox zoom hint icon */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Grade Badge */}
                {cert.grade && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#0B132B]/95 text-teal-800 dark:text-teal-300 text-xs font-bold shadow-xs">
                    {cert.grade}
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono tabular-nums">{cert.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cert.verificationId || 'Accredited'}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1F3A5F] dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                    {cert.title[language]}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <Building className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span className="truncate">{cert.issuer[language]}</span>
                  </div>
                </div>

                <div className="pt-2 text-xs font-semibold text-teal-700 dark:text-teal-400 flex items-center gap-1">
                  <span>{t('viewCertificate')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div
            className="bg-white dark:bg-[#111C35] w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
              aria-label={t('closeLightbox')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Preview image */}
            <div className="relative aspect-16/10 w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedCert.imageUrl || '/images/minor_procedures_care_1792911356505.jpg'}
                alt={selectedCert.title[language]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal info bar */}
            <div className="p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                  {selectedCert.verificationId ? `Ref: ${selectedCert.verificationId}` : 'Verified Medical Training'}
                </span>
                <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
                  {selectedCert.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1F3A5F] dark:text-white">
                {selectedCert.title[language]}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {selectedCert.issuer[language]}
                {selectedCert.grade && ` — ${selectedCert.grade}`}
              </p>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
                >
                  {t('closeLightbox')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
