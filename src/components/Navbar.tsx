import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import {
  Sun,
  Moon,
  Languages,
  Phone,
  Shield,
  Menu,
  X,
  Calendar,
} from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, onOpenCv }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { contactInfo, isAdminAuthenticated } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: t('navServices') },
    { href: '#experience', label: t('navExperience') },
    { href: '#certificates', label: t('navCertificates') },
    { href: '#blog', label: t('navBlog') },
    { href: '#contact', label: t('navContact') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0B132B]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#"
            className="flex flex-col justify-center text-lg md:text-xl font-bold tracking-tight text-[#1F3A5F] dark:text-teal-400 whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <span>{language === 'bn' ? contactInfo.banglaName : contactInfo.practitionerName}</span>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
              {language === 'bn' ? 'পল্লী চিকিৎসক (DMA) · সাতক্ষীরা' : 'Medical Assistant (DMA) · Satkhira'}
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1F3A5F] dark:hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-teal-600 dark:hover:border-teal-400"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenCv}
              className="hover:text-[#1F3A5F] dark:hover:text-teal-300 transition-colors whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 dark:text-slate-300 cursor-pointer"
            >
              {language === 'bn' ? 'সিভি (CV)' : 'View CV'}
            </button>
          </nav>

          {/* Zone 3: 1 primary action + unobtrusive controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language between Bangla and English"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer border border-slate-200/60 dark:border-slate-700 whitespace-nowrap shrink-0"
              title={language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
            >
              <Languages className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Dark/Light Mode Switch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200/60 dark:border-slate-700 shrink-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Admin Key icon */}
            <button
              onClick={onOpenAdmin}
              aria-label="Clinic Admin Portal"
              title="Admin Portal"
              className={`p-2 rounded-lg transition-colors cursor-pointer border border-slate-200/60 dark:border-slate-700 shrink-0 ${
                isAdminAuthenticated
                  ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Primary Action Button */}
            <a
              href="#appointment"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#1F3A5F] hover:bg-[#162A45] dark:bg-teal-600 dark:hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('btnBookAppointment')}</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-md transition-colors cursor-pointer"
            >
              {language === 'bn' ? 'জীবনবৃত্তান্ত (CV) ডাউনলোড' : 'Download Medical CV'}
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#1F3A5F] rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('btnBookAppointment')}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 rounded-lg"
            >
              <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>{language === 'bn' ? `কল করুন: ${contactInfo.displayPhone}` : `Call ${contactInfo.displayPhone}`}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
