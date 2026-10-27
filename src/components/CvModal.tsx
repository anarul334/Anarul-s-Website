import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  initialMemberships,
  initialTraining,
  initialExperience,
  initialEducation,
} from '../data/siteConfig';
import {
  Printer,
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  Building2,
  Award,
  CheckCircle2,
  FileText,
} from 'lucide-react';

interface CvModalProps {
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ onClose }) => {
  const { language, t } = useLanguage();
  const { contactInfo, profilePhoto, customCvUrl } = useData();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white text-slate-900 w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200 border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print sticky top-0 z-10 bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2 text-sm font-bold">
            <FileText className="w-4 h-4 text-teal-400" />
            <span>{t('cvTitle')}</span>
          </div>

          <div className="flex items-center gap-3">
            {customCvUrl && (
              <a
                href={customCvUrl}
                download="Md_Anoarul_Islam_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'কাস্টম ফাইল ডাউনলোড' : 'Download Uploaded PDF'}</span>
              </a>
            )}

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('btnPrintCv')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={t('btnCloseCv')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content (Clean Medical Document Layout) */}
        <div className="p-8 sm:p-12 space-y-8 bg-white print:p-0 print:space-y-6">
          
          {/* Header Block */}
          <div className="border-b border-slate-300 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F3A5F]">
                {contactInfo.practitionerName}
              </h1>
              <p className="text-sm font-semibold text-teal-800">
                {contactInfo.titleEn}
              </p>
              <p className="text-xs text-slate-600">
                {contactInfo.regNumber}
              </p>
            </div>

            {/* Circular photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-teal-600 shrink-0 bg-gradient-to-b from-teal-50 to-slate-100 flex items-end justify-center">
              <img
                src={profilePhoto}
                alt="Md. Anoarul Islam"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/src/assets/images/dr_anoarul_dma.png';
                }}
              />
            </div>
          </div>

          {/* Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="font-mono">{contactInfo.displayPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-700 shrink-0" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
              <span>{contactInfo.addressEn}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3A5F] border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Experienced Medical Assistant (DMA) with over 15 continuous years of frontline clinical service in Satkhira Sadar (practising since 2009). Dedicated to delivering compassionate primary healthcare, maternal and child wellness, family planning counselling, minor surgical procedures (including male circumcision, piles care, nasal polyps), and rapid emergency first response with timely coordinated referral to Satkhira Sadar Hospital. Registered Pharmacy Technician and proprietor of Rifat Pharmacy (Chhoygharia Bazar).
            </p>
          </div>

          {/* Clinical Competencies */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3A5F] border-b border-slate-200 pb-1">
              Core Clinical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Primary Health Care & Common Disease Diagnosis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Aseptic Minor Procedures (Circumcision, Piles, Polyps, Tonsil)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Maternal & Child Health Care (Antenatal, IYCF Nutrition)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Wound Care, Dressing & Suture Management</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Emergency First Response & Hospital Referral Protocol</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>Pharmacy Dispensing, Cold Chain & Drug Counselling</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3A5F] border-b border-slate-200 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {initialExperience.map((exp) => (
                <div key={exp.id} className="text-xs space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{exp.title.en}</span>
                    <span className="font-mono text-teal-800">{exp.period}</span>
                  </div>
                  <div className="text-teal-700 font-medium">
                    {exp.organization.en}
                  </div>
                  {exp.details && (
                    <div className="text-slate-600 leading-relaxed pt-0.5">
                      {exp.details.en}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Medical Training & Diplomas */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3A5F] border-b border-slate-200 pb-1">
              Medical Training, Diplomas & Certifications
            </h2>
            <div className="space-y-3">
              {initialTraining.map((tr) => (
                <div key={tr.id} className="text-xs space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{tr.title.en}</span>
                    <span className="font-mono text-teal-800">{tr.period}</span>
                  </div>
                  <div className="text-teal-700 font-medium flex items-center justify-between">
                    <span>{tr.organization.en}</span>
                    {tr.grade && <span className="font-bold text-slate-700">{tr.grade}</span>}
                  </div>
                  {tr.details && (
                    <div className="text-slate-600 leading-relaxed pt-0.5">
                      {tr.details.en}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3A5F] border-b border-slate-200 pb-1">
              Academic Education
            </h2>
            <div className="space-y-3">
              {initialEducation.map((edu) => (
                <div key={edu.id} className="text-xs space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{edu.title.en}</span>
                    <span className="font-mono text-teal-800">{edu.period}</span>
                  </div>
                  <div className="text-teal-700 font-medium flex items-center justify-between">
                    <span>{edu.organization.en}</span>
                    {edu.grade && <span className="font-bold text-slate-700">{edu.grade}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3A5F] border-b border-slate-200 pb-1">
              Professional Memberships & Registrations
            </h2>
            <div className="space-y-2 text-xs">
              {initialMemberships.map((mem, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-slate-900">{mem.titleEn}</span>
                    <span className="text-slate-500"> — {mem.body}</span>
                  </div>
                  <span className="font-semibold text-teal-800 text-right">{mem.statusEn}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidentiality & Verification Declaration */}
          <div className="pt-6 border-t border-slate-300 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              Certified accurate by Md. Anoarul Islam. Practising in Chhoygharia, Satkhira Sadar, Bangladesh.
            </div>
            <div className="font-mono">
              Satkhira, Bangladesh · 2026
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
