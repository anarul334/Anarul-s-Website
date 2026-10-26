import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  Calendar,
  Clock,
  Phone,
  User,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

export const AppointmentBooking: React.FC = () => {
  const { language, t } = useLanguage();
  const { contactInfo, addAppointment } = useData();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [problem, setProblem] = useState('');
  const [date, setDate] = useState(() => {
    // Tomorrow by default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10);
  });
  const [timeSlot, setTimeSlot] = useState('10:00 AM – 11:30 AM');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedId, setConfirmedId] = useState<string | null>(null);

  const timeSlots = [
    '09:30 AM – 11:00 AM (Morning)',
    '11:00 AM – 12:30 PM (Midday)',
    '03:00 PM – 05:00 PM (Afternoon)',
    '05:30 PM – 07:30 PM (Evening)',
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = language === 'bn' ? 'রোগীর নাম লিখুন' : 'Patient name is required';
    }

    // Bangladesh mobile number pattern: 11 digits starting with 01
    const cleanPhone = phone.replace(/[\s-]/g, '');
    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    if (!cleanPhone) {
      errs.phone = language === 'bn' ? 'মোবাইল নম্বর লিখুন' : 'Phone number is required';
    } else if (!bdPhoneRegex.test(cleanPhone)) {
      errs.phone = language === 'bn' ? 'সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন (যেমন: 01748128106)' : 'Valid 11-digit Bangladesh phone required (e.g. 017XXXXXXXX)';
    }

    if (!age || parseInt(age, 10) < 0 || parseInt(age, 10) > 120) {
      errs.age = language === 'bn' ? 'সঠিক বয়স লিখুন' : 'Enter a valid age';
    }

    if (!problem.trim() || problem.trim().length < 5) {
      errs.problem = language === 'bn' ? 'রোগের লক্ষণ বা সমস্যার বিবরণ লিখুন (কমপক্ষে ৫ অক্ষর)' : 'Please describe health concern (at least 5 characters)';
    }

    if (!date) {
      errs.date = language === 'bn' ? 'তারিখ নির্বাচন করুন' : 'Select preferred date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const newId = await addAppointment({
        name: name.trim(),
        phone: phone.trim(),
        age: age.trim(),
        gender,
        problem: problem.trim(),
        date,
        timeSlot,
      });
      setConfirmedId(newId);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setAge('');
    setProblem('');
    setConfirmedId(null);
    setErrors({});
  };

  return (
    <section id="appointment" className="py-16 md:py-20 bg-white dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'অনলাইন সিরিয়াল' : 'Consultation Scheduling'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('bookingTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('bookingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Booking Form or Success Card */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50/70 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              
              {confirmedId ? (
                /* Success View */
                <div className="space-y-6 text-center py-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#1F3A5F] dark:text-white">
                      {t('bookingSuccessTitle')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      {t('bookingSuccessMsg')}{' '}
                      <span className="font-mono font-bold text-teal-700 dark:text-teal-400">
                        {confirmedId}
                      </span>
                    </p>
                  </div>

                  <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-xs text-slate-600 dark:text-slate-300 space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{language === 'bn' ? 'রোগীর নাম:' : 'Patient:'}</span>
                      <span className="font-semibold">{name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{language === 'bn' ? 'মোবাইল:' : 'Phone:'}</span>
                      <span className="font-mono font-semibold">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{language === 'bn' ? 'তারিখ ও সময়:' : 'Date & Time:'}</span>
                      <span className="font-semibold">{date} ({timeSlot.split(' ')[0]} {timeSlot.split(' ')[1]})</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    {t('bookingSuccessNote')}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                        language === 'bn'
                          ? `আসসালামু আলাইকুম, আমি সিরিয়াল নিয়েছি। রেফারেন্স নং: ${confirmedId}, রোগী: ${name}, তারিখ: ${date}`
                          : `Hello, I submitted an appointment request. Ref ID: ${confirmedId}, Patient: ${name}, Date: ${date}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে বুকিং পাঠান' : 'Share Booking on WhatsApp'}</span>
                    </a>

                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{t('btnCallNow')}</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      {t('bookAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Two columns: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        {t('formName')} *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                        }}
                        placeholder={language === 'bn' ? 'যেমন: মোঃ রফিকুল ইসলাম' : 'e.g. Md. Rafiqul Islam'}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        {t('formPhone')} *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                        }}
                        placeholder="017XXXXXXXX"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Two columns: Age & Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        {t('formAge')} *
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                          if (errors.age) setErrors(prev => ({ ...prev, age: '' }));
                        }}
                        placeholder={language === 'bn' ? 'যেমন: ৩৫' : 'e.g. 35'}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
                          errors.age
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500'
                        }`}
                      />
                      {errors.age && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.age}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        {t('formGender')}
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="male">{t('formGenderMale')}</option>
                        <option value="female">{t('formGenderFemale')}</option>
                        <option value="other">{t('formGenderOther')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                      {t('formProblem')} *
                    </label>
                    <textarea
                      rows={3}
                      value={problem}
                      onChange={(e) => {
                        setProblem(e.target.value);
                        if (errors.problem) setErrors(prev => ({ ...prev, problem: '' }));
                      }}
                      placeholder={
                        language === 'bn'
                          ? 'রোগীর প্রধান সমস্যা বা কী কারণে পরামর্শ চান (যেমন: গত ৩ দিন ধরে জ্বর ও কাশি, বা ক্ষত ড্রেসিং, খতনা ইত্যাদি)...'
                          : 'Describe symptoms or reason for visit (e.g. fever & cough for 3 days, circumcision inquiry, dressing)...'
                      }
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
                        errors.problem
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500'
                      }`}
                    ></textarea>
                    {errors.problem && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.problem}</span>
                      </p>
                    )}
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        {t('formDate')} *
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().slice(0, 10)}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
                        {t('formTime')}
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>{ts}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#1F3A5F] hover:bg-[#162A45] dark:bg-teal-600 dark:hover:bg-teal-700 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isSubmitting ? t('formSubmitting') : t('formSubmit')}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right: Booking Guidance & Direct Hotline Callout */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-50/70 dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-4">
              <h3 className="text-base font-bold text-[#1F3A5F] dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>{language === 'bn' ? 'সিরিয়াল গ্রহণের নিয়মাবলী' : 'Appointment Guidelines'}</span>
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{language === 'bn' ? 'অনলাইন সিরিয়ালের জন্য কোনো অগ্রিম ফি দিতে হয় না।' : 'No upfront booking or registration fees.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{language === 'bn' ? 'পূর্ববর্তী প্রেসক্রিপশন ও টেস্টের রিপোর্ট সাথে নিয়ে আসুন।' : 'Bring previous prescriptions & diagnostic reports.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{language === 'bn' ? 'জরুরি ক্ষত বা দুর্ঘটনার ক্ষেত্রে অগ্রিম সিরিয়াল ছাড়াই দ্রুত চেম্বারে আসুন।' : 'For acute wound trauma, walk in immediately without waiting.'}</span>
                </li>
              </ul>
            </div>

            {/* Direct Instant Booking Card */}
            <div className="bg-teal-50 dark:bg-teal-950/40 rounded-2xl border border-teal-200/80 dark:border-teal-800 p-6 space-y-3">
              <div className="text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                {language === 'bn' ? 'সরাসরি ফোনে সিরিয়াল' : 'Prefer Phone Booking?'}
              </div>
              <p className="text-xs sm:text-sm text-teal-900 dark:text-teal-200">
                {language === 'bn'
                  ? 'ফোনে সরাসরি কথা বলে সুবিধাজনক সময়ে রোগী দেখানোর সিরিয়াল নিশ্চিত করতে কল করুন।'
                  : 'Call our direct chamber line to instantly reserve a consultation slot.'}
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{contactInfo.displayPhone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
