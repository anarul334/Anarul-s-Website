import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Testimonial } from '../types';
import {
  Star,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Heart,
  PlusCircle,
  X,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const { testimonials, addTestimonial } = useData();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [treatment, setTreatment] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Only display approved reviews on public site
  const approvedTestimonials = testimonials.filter((t) => t.status === 'approved');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !village.trim() || !comment.trim()) {
      setError(language === 'bn' ? 'অনুগ্রহ করে সকল তথ্য পূরণ করুন' : 'Please fill all required fields');
      return;
    }

    addTestimonial({
      name: name.trim(),
      village: { en: village.trim(), bn: village.trim() },
      treatment: {
        en: treatment.trim() || 'General Consultation',
        bn: treatment.trim() || 'সাধারণ পরামর্শ',
      },
      comment: { en: comment.trim(), bn: comment.trim() },
      rating,
    });

    setSubmitted(true);
    setName('');
    setVillage('');
    setTreatment('');
    setComment('');
    setError('');
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#0F1B38] border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
              {language === 'bn' ? 'রোগীদের বিশ্বাস' : 'Community Trust'}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
              {t('testTitle')}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {t('testSubtitle')}
            </p>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#1F3A5F] dark:text-teal-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-xs transition-colors cursor-pointer whitespace-nowrap self-start md:self-end"
          >
            <PlusCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>{t('btnLeaveReview')}</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approvedTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:border-teal-500/40 transition-colors"
            >
              <div className="space-y-3">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-1.5">
                    {item.rating}.0
                  </span>
                </div>

                {/* Treatment category & location metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-teal-700 dark:text-teal-400">
                    {item.treatment[language]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.village[language]}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{item.comment[language]}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-[#1F3A5F] dark:text-white">
                  {item.name}
                </span>
                <span className="font-mono text-slate-400 tabular-nums">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
          <div
            className="bg-white dark:bg-[#111C35] w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1F3A5F] dark:text-white">
                  {t('formReviewSuccess')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t('reviewPendingNotice')}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg cursor-pointer"
                >
                  {language === 'bn' ? 'ঠিক আছে' : 'OK'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#1F3A5F] dark:text-white">
                    {t('btnLeaveReview')}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t('reviewPendingNotice')}
                  </p>
                </div>

                {error && (
                  <div className="p-2.5 bg-red-50 text-red-600 text-xs rounded-lg flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('formReviewName')} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার নাম লিখুন' : 'Your name'}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {t('formReviewVillage')} *
                    </label>
                    <input
                      type="text"
                      value={village}
                      onChange={(e) => setVillage(e.target.value)}
                      placeholder={language === 'bn' ? 'ছয়ঘরিয়া / বৈকারী' : 'e.g. Chhoygharia'}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {t('formReviewRating')}
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                      <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                      <option value="3">⭐⭐⭐ (3 Stars)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('formReviewTreatment')}
                  </label>
                  <input
                    type="text"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    placeholder={language === 'bn' ? 'যেমন: জ্বর চিকিৎসা, ক্ষত ড্রেসিং' : 'e.g. Fever care, wound dressing'}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t('formReviewComment')} *
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={language === 'bn' ? 'আপনার বাস্তব অভিজ্ঞতা সংক্ষেপে লিখুন...' : 'Share your honest experience...'}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-teal-500"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 rounded-lg cursor-pointer"
                  >
                    {language === 'bn' ? 'বাতিল' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg cursor-pointer shadow-xs"
                  >
                    {t('formReviewSubmit')}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
