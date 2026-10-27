import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { BlogPost, CertificateItem, ClinicHours, ContactInfo } from '../types';
import {
  X,
  Lock,
  LogOut,
  Calendar,
  BookOpen,
  MessageSquare,
  Clock,
  Image,
  Key,
  Download,
  Trash2,
  CheckCircle,
  Plus,
  Edit,
  Eye,
  RotateCcw,
  Upload,
  AlertCircle,
  ShieldAlert,
} from 'lucide-react';

interface AdminPortalProps {
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onClose }) => {
  const { language, t } = useLanguage();
  const {
    isAdminAuthenticated,
    adminLogin,
    googleLogin,
    adminLogout,
    changeAdminPassword,
    firebaseUser,
    appointments,
    updateAppointmentStatus,
    deleteAppointment,
    exportAppointmentsCsv,
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    testimonials,
    approveTestimonial,
    deleteTestimonial,
    contactInfo,
    updateContactInfo,
    clinicHours,
    updateClinicHours,
    profilePhoto,
    updateProfilePhoto,
    customCvUrl,
    updateCustomCvUrl,
    certificates,
    addCertificate,
    deleteCertificate,
    resetAllToDefault,
  } = useData();

  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'appointments' | 'blog' | 'testimonials' | 'hours' | 'media' | 'setup'>('appointments');

  // Appointment filters
  const [appointmentFilter, setAppointmentFilter] = useState<'all' | 'pending' | 'confirmed' | 'done' | 'cancelled'>('all');

  // Blog modal state
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [postTitleEn, setPostTitleEn] = useState('');
  const [postTitleBn, setPostTitleBn] = useState('');
  const [postCategoryEn, setPostCategoryEn] = useState('');
  const [postCategoryBn, setPostCategoryBn] = useState('');
  const [postSummaryEn, setPostSummaryEn] = useState('');
  const [postSummaryBn, setPostSummaryBn] = useState('');
  const [postContentEn, setPostContentEn] = useState('');
  const [postContentBn, setPostContentBn] = useState('');

  // Contact form state
  const [contactState, setContactState] = useState<ContactInfo>(contactInfo);
  const [hoursState, setHoursState] = useState<ClinicHours>(clinicHours);
  const [saveSuccess, setSaveSuccess] = useState('');

  // Media state
  const [newCertTitle, setNewCertTitle] = useState('');
  const [newCertIssuer, setNewCertIssuer] = useState('');
  const [newCertYear, setNewCertYear] = useState('2026');
  const [newCertGrade, setNewCertGrade] = useState('');
  const [newCertUrl, setNewCertUrl] = useState('');

  // Password change state
  const [newPassword, setNewPassword] = useState('');
  const [pwdChangedMsg, setPwdChangedMsg] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(passwordInput)) {
      setLoginError(false);
      setPasswordInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactInfo(contactState);
    updateClinicHours(hoursState);
    setSaveSuccess(language === 'bn' ? 'সফলভাবে সংরক্ষিত হয়েছে!' : 'Settings successfully saved!');
    setTimeout(() => setSaveSuccess(''), 3000);
  };

  const handleOpenBlogModal = (post?: BlogPost) => {
    if (post) {
      setEditingPost(post);
      setPostTitleEn(post.title.en);
      setPostTitleBn(post.title.bn);
      setPostCategoryEn(post.category.en);
      setPostCategoryBn(post.category.bn);
      setPostSummaryEn(post.summary.en);
      setPostSummaryBn(post.summary.bn);
      setPostContentEn(post.content.en);
      setPostContentBn(post.content.bn);
    } else {
      setEditingPost(null);
      setPostTitleEn('');
      setPostTitleBn('');
      setPostCategoryEn('Seasonal Health');
      setPostCategoryBn('মৌসুমি স্বাস্থ্য');
      setPostSummaryEn('');
      setPostSummaryBn('');
      setPostContentEn('');
      setPostContentBn('');
    }
    setBlogModalOpen(true);
  };

  const handleSaveBlogPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitleEn.trim() && !postTitleBn.trim()) return;

    if (editingPost) {
      updateBlogPost({
        ...editingPost,
        title: { en: postTitleEn.trim() || postTitleBn.trim(), bn: postTitleBn.trim() || postTitleEn.trim() },
        category: { en: postCategoryEn.trim() || 'Health', bn: postCategoryBn.trim() || 'স্বাস্থ্য' },
        summary: { en: postSummaryEn.trim(), bn: postSummaryBn.trim() },
        content: { en: postContentEn.trim(), bn: postContentBn.trim() },
      });
    } else {
      addBlogPost({
        slug: `post-${Date.now()}`,
        title: { en: postTitleEn.trim() || postTitleBn.trim(), bn: postTitleBn.trim() || postTitleEn.trim() },
        category: { en: postCategoryEn.trim() || 'Health', bn: postCategoryBn.trim() || 'স্বাস্থ্য' },
        summary: { en: postSummaryEn.trim(), bn: postSummaryBn.trim() },
        content: { en: postContentEn.trim(), bn: postContentBn.trim() },
        date: new Date().toISOString().slice(0, 10),
        readTime: '3 min',
        author: 'Md. Anoarul Islam (DMA)',
      });
    }
    setBlogModalOpen(false);
  };

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCertTitle.trim()) return;
    addCertificate({
      title: { en: newCertTitle.trim(), bn: newCertTitle.trim() },
      issuer: { en: newCertIssuer.trim() || 'Certified Institution', bn: newCertIssuer.trim() || 'অনুমোদিত প্রতিষ্ঠান' },
      year: newCertYear.trim() || '2026',
      grade: newCertGrade.trim() || undefined,
      imageUrl: newCertUrl.trim() || '/images/minor_procedures_care_1792911356505.jpg',
      verificationId: `CERT-${Date.now().toString().slice(-4)}`,
    });
    setNewCertTitle('');
    setNewCertIssuer('');
    setNewCertUrl('');
  };

  const handleProfilePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updateProfilePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCustomCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updateCustomCvUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredAppointments = appointments.filter((a) => {
    if (appointmentFilter === 'all') return true;
    return a.status === appointmentFilter;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white dark:bg-[#111C35] text-slate-900 dark:text-slate-100 w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col border border-slate-200 dark:border-slate-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#1F3A5F] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Lock className="w-5 h-5 text-teal-400" />
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                {t('adminTitle')}
              </h2>
              <p className="text-xs text-teal-200/80">
                {language === 'bn' ? 'চেম্বার ও ক্লিনিক ডাটা ম্যানেজমেন্ট' : 'Clinic & Chamber Data Management'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated && (
              <>
                <div className="hidden sm:flex items-center gap-2 mr-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-mono border border-teal-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    <span>{firebaseUser?.email || 'Firebase Connected'}</span>
                  </span>
                </div>
                <button
                  onClick={adminLogout}
                  className="px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t('adminLogoutBtn')}</span>
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Screen vs Dashboard */}
        {!isAdminAuthenticated ? (
          <div className="p-8 sm:p-12 max-w-md mx-auto text-center space-y-6 my-auto">
            <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center mx-auto">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1F3A5F] dark:text-white">
                {language === 'bn' ? 'অ্যাডমিন লগইন' : 'Practitioner Login'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('adminLoginPrompt')}
              </p>
              
              {/* Firebase Connected Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-[11px] text-teal-700 dark:text-teal-300">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span>Firebase Firestore Connected</span>
              </div>
            </div>

            {/* Google Sign-in Option */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={async () => {
                  await googleLogin();
                }}
                className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>{language === 'bn' ? 'গুগল দিয়ে সাইন ইন করুন (Firebase)' : 'Sign In with Google (Firebase)'}</span>
              </button>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                <span>{language === 'bn' ? 'অথবা পাসওয়ার্ড দিয়ে লগইন' : 'OR USE ADMIN PIN'}</span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder={t('adminPasswordPlaceholder')}
                className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-center"
              />

              {loginError && (
                <div className="text-xs text-red-500 flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।' : 'Incorrect password. Try anoarul2026'}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs cursor-pointer"
              >
                {t('adminLoginBtn')}
              </button>
            </form>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'appointments'
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t('adminTabAppointments')}</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700">
                  {appointments.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('blog')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'blog'
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t('adminTabBlog')}</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800">
                  {blogPosts.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'testimonials'
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t('adminTabTestimonials')}</span>
                {testimonials.filter(t => t.status === 'pending').length > 0 && (
                  <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">
                    {testimonials.filter(t => t.status === 'pending').length} new
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('hours')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'hours'
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{t('adminTabHours')}</span>
              </button>

              <button
                onClick={() => setActiveTab('media')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'media'
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                <span>{t('adminTabUploads')}</span>
              </button>

              <button
                onClick={() => setActiveTab('setup')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'setup'
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>{t('adminTabFirebase')}</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-6">
              
              {/* TAB 1: APPOINTMENTS */}
              {activeTab === 'appointments' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {(['all', 'pending', 'confirmed', 'done', 'cancelled'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setAppointmentFilter(filter)}
                          className={`px-3 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                            appointmentFilter === filter
                              ? 'bg-[#1F3A5F] text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {filter.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={exportAppointmentsCsv}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t('btnExportCsv')}</span>
                    </button>
                  </div>

                  {filteredAppointments.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-sm">
                      {language === 'bn' ? 'কোনো সিরিয়াল পাওয়া যায়নি।' : 'No appointments in this category.'}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredAppointments.map((app) => (
                        <div
                          key={app.id}
                          className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-teal-700 dark:text-teal-400">
                                {app.id}
                              </span>
                              <span aria-hidden="true" className="text-slate-400">·</span>
                              <span className="font-mono">{app.date} ({app.timeSlot})</span>
                              <span aria-hidden="true" className="text-slate-400">·</span>
                              <span
                                className={`px-2 py-0.5 rounded-md font-bold uppercase text-[10px] ${
                                  app.status === 'confirmed'
                                    ? 'bg-teal-100 text-teal-800'
                                    : app.status === 'done'
                                    ? 'bg-blue-100 text-blue-800'
                                    : app.status === 'cancelled'
                                    ? 'bg-rose-100 text-rose-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {app.status}
                              </span>
                            </div>

                            <div className="text-sm font-bold text-[#1F3A5F] dark:text-white">
                              {app.name} <span className="font-normal text-slate-500">({app.age} yrs, {app.gender})</span>
                            </div>

                            <div className="text-slate-600 dark:text-slate-300">
                              <span className="font-medium text-slate-700 dark:text-slate-200">Phone: </span>
                              <a href={`tel:${app.phone}`} className="font-mono text-teal-600 hover:underline">
                                {app.phone}
                              </a>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 italic pt-1">
                              "{app.problem}"
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-center">
                            {app.status !== 'confirmed' && (
                              <button
                                onClick={() => updateAppointmentStatus(app.id, 'confirmed')}
                                className="px-2.5 py-1 rounded bg-teal-600 hover:bg-teal-700 text-white font-medium text-[11px] cursor-pointer"
                              >
                                {t('actionConfirm')}
                              </button>
                            )}
                            {app.status !== 'done' && (
                              <button
                                onClick={() => updateAppointmentStatus(app.id, 'done')}
                                className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium text-[11px] cursor-pointer"
                              >
                                {t('actionComplete')}
                              </button>
                            )}
                            {app.status !== 'cancelled' && (
                              <button
                                onClick={() => updateAppointmentStatus(app.id, 'cancelled')}
                                className="px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-[11px] cursor-pointer"
                              >
                                {t('actionCancel')}
                              </button>
                            )}
                            <button
                              onClick={() => deleteAppointment(app.id)}
                              className="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                              title={t('actionDelete')}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: BLOG MANAGEMENT */}
              {activeTab === 'blog' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-[#1F3A5F] dark:text-white">
                      {language === 'bn' ? 'স্বাস্থ্য সচেতনতা প্রবন্ধসমূহ' : 'Published Health Articles'}
                    </h3>
                    <button
                      onClick={() => handleOpenBlogModal()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{language === 'bn' ? 'নতুন প্রবন্ধ যোগ করুন' : 'New Article'}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {blogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-start justify-between gap-4 text-xs"
                      >
                        <div className="space-y-1">
                          <span className="text-teal-700 dark:text-teal-400 font-semibold">
                            {post.category[language]} · {post.date}
                          </span>
                          <h4 className="text-sm font-bold text-[#1F3A5F] dark:text-white">
                            {post.title[language]}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
                            {post.summary[language]}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleOpenBlogModal(post)}
                            className="p-1.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 cursor-pointer"
                            title="Edit"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteBlogPost(post.id)}
                            className="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TESTIMONIALS */}
              {activeTab === 'testimonials' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#1F3A5F] dark:text-white">
                    {language === 'bn' ? 'রোগীদের পাঠানো মন্তব্য ও অনুমোদন' : 'Patient Reviews & Approvals'}
                  </h3>

                  <div className="space-y-3">
                    {testimonials.map((tItem) => (
                      <div
                        key={tItem.id}
                        className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 dark:text-white">{tItem.name}</span>
                            <span>({tItem.village[language]})</span>
                            <span className="text-amber-500 font-bold">{tItem.rating} ★</span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                                tItem.status === 'approved' ? 'bg-teal-100 text-teal-800' : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {tItem.status}
                            </span>
                          </div>
                          <div className="text-teal-700 dark:text-teal-400 font-medium">
                            {tItem.treatment[language]}
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 italic">
                            "{tItem.comment[language]}"
                          </p>
                        </div>

                        <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                          {tItem.status === 'pending' && (
                            <button
                              onClick={() => approveTestimonial(tItem.id)}
                              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs cursor-pointer"
                            >
                              {t('actionApprove')}
                            </button>
                          )}
                          <button
                            onClick={() => deleteTestimonial(tItem.id)}
                            className="p-1.5 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: CLINIC HOURS & CONTACT INFO */}
              {activeTab === 'hours' && (
                <form onSubmit={handleSaveContact} className="space-y-6 max-w-2xl text-xs sm:text-sm">
                  {saveSuccess && (
                    <div className="p-3 bg-teal-50 text-teal-800 rounded-lg flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>{saveSuccess}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-white uppercase tracking-wider text-xs">
                      Contact Numbers & Pharmacy
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Phone (Display)
                        </label>
                        <input
                          type="text"
                          value={contactState.displayPhone}
                          onChange={(e) => setContactState({ ...contactState, displayPhone: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          WhatsApp Number
                        </label>
                        <input
                          type="text"
                          value={contactState.whatsapp}
                          onChange={(e) => setContactState({ ...contactState, whatsapp: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Pharmacy Name (English & Bangla)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={contactState.pharmacyEn}
                          onChange={(e) => setContactState({ ...contactState, pharmacyEn: e.target.value })}
                          className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                        <input
                          type="text"
                          value={contactState.pharmacyBn}
                          onChange={(e) => setContactState({ ...contactState, pharmacyBn: e.target.value })}
                          className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <h4 className="font-bold text-[#1F3A5F] dark:text-white uppercase tracking-wider text-xs pt-3">
                      Consultation Hours
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Regular Days (Sat - Thu)
                        </label>
                        <input
                          type="text"
                          value={hoursState.regularDays.en}
                          onChange={(e) => setHoursState({
                            ...hoursState,
                            regularDays: { ...hoursState.regularDays, en: e.target.value },
                          })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Regular Time
                        </label>
                        <input
                          type="text"
                          value={hoursState.regularTime.en}
                          onChange={(e) => setHoursState({
                            ...hoursState,
                            regularTime: { ...hoursState.regularTime, en: e.target.value },
                          })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Friday Status Note
                      </label>
                      <input
                        type="text"
                        value={hoursState.fridayStatus.en}
                        onChange={(e) => setHoursState({
                          ...hoursState,
                          fridayStatus: { ...hoursState.fridayStatus, en: e.target.value },
                        })}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      {language === 'bn' ? 'তথ্য সংরক্ষণ করুন' : 'Save Contact & Hours'}
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 5: MEDIA & PHOTO UPLOADS */}
              {activeTab === 'media' && (
                <div className="space-y-8 text-xs sm:text-sm">
                  
                  {/* Profile Photo Uploader */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-4">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-white uppercase tracking-wider text-xs">
                      Practitioner Profile Photo
                    </h4>

                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-teal-500 shrink-0">
                        <img
                          src={profilePhoto}
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Upload a professional photo in white coat or clinical consultation setting.
                        </p>
                        <label className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-medium cursor-pointer hover:bg-slate-50">
                          <Upload className="w-3.5 h-3.5 text-teal-600" />
                          <span>Choose New Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePhotoUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Custom CV Upload */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-4">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-white uppercase tracking-wider text-xs">
                      Custom Medical CV Document (PDF)
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Upload your official scanned CV PDF to link directly to the "Download CV" button.
                    </p>
                    <div className="flex items-center gap-3">
                      <label className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-medium cursor-pointer hover:bg-slate-50">
                        <Upload className="w-3.5 h-3.5 text-teal-600" />
                        <span>Upload PDF / File</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleCustomCvUpload}
                          className="hidden"
                        />
                      </label>
                      {customCvUrl && (
                        <span className="text-xs text-teal-600 font-semibold">
                          Custom CV Uploaded & Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add New Certificate to Gallery */}
                  <form onSubmit={handleAddCertificate} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-4">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-white uppercase tracking-wider text-xs">
                      Add New Certificate to Gallery
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold mb-1">Certificate Title *</label>
                        <input
                          type="text"
                          value={newCertTitle}
                          onChange={(e) => setNewCertTitle(e.target.value)}
                          placeholder="e.g. Paramedical Surgical Skills"
                          className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1">Awarding Body / Institute</label>
                        <input
                          type="text"
                          value={newCertIssuer}
                          onChange={(e) => setNewCertIssuer(e.target.value)}
                          placeholder="e.g. BTF Khulna"
                          className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1">Year & Grade</label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={newCertYear}
                            onChange={(e) => setNewCertYear(e.target.value)}
                            placeholder="2026"
                            className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                          />
                          <input
                            type="text"
                            value={newCertGrade}
                            onChange={(e) => setNewCertGrade(e.target.value)}
                            placeholder="Grade A / Pass"
                            className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1">Image URL / Path</label>
                        <input
                          type="text"
                          value={newCertUrl}
                          onChange={(e) => setNewCertUrl(e.target.value)}
                          placeholder="/images/... or https://"
                          className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      Add Certificate
                    </button>
                  </form>

                </div>
              )}

              {/* TAB 6: FIREBASE & GEMINI SETUP */}
              {activeTab === 'setup' && (
                <div className="space-y-6 max-w-2xl text-xs sm:text-sm">
                  
                  {/* Gemini API Key Instructions */}
                  <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30 space-y-3">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-teal-300 text-sm flex items-center gap-2">
                      <Key className="w-4 h-4 text-teal-600" />
                      <span>Gemini API Setup (AI Health Assistant)</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                      The AI Health Assistant uses Gemini models (<strong>gemini-3.8-flash</strong>) via a secure server endpoint (<code className="bg-white dark:bg-slate-800 px-1 py-0.5 rounded">/api/chat</code>) so your API key is never exposed to the client.
                    </p>
                    <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <li>Open the Google AI Studio <strong>Settings &gt; Secrets</strong> panel.</li>
                      <li>Configure your <code>GEMINI_API_KEY</code>. AI Studio automatically injects it at runtime.</li>
                      <li>If the key is not set, the assistant automatically provides safe, evidence-based offline health guidance.</li>
                    </ol>
                  </div>

                  {/* Firebase Setup Instructions */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-white text-sm flex items-center gap-2">
                      <Lock className="w-4 h-4 text-teal-600" />
                      <span>Firebase Firestore & Auth Integration</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                      Appointments and data currently save automatically with instant persistence to <strong>localStorage</strong>, so your clinic website is 100% operational out of the box with zero external dependencies!
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                      To synchronize appointments directly to Firebase Firestore across multiple clinic computers or mobile apps:
                    </p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      <li>Create a project in the Firebase Console and enable <strong>Firestore Database</strong>.</li>
                      <li>Export appointments to CSV anytime from the Appointments tab above.</li>
                    </ul>
                  </div>

                  {/* Change Admin Password */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
                    <h4 className="font-bold text-[#1F3A5F] dark:text-white text-sm">
                      Change Admin Access Password
                    </h4>
                    <div className="flex items-center gap-3">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new admin password"
                        className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (newPassword.trim().length >= 4) {
                            changeAdminPassword(newPassword.trim());
                            setPwdChangedMsg(true);
                            setNewPassword('');
                            setTimeout(() => setPwdChangedMsg(false), 3000);
                          }
                        }}
                        className="px-4 py-2 bg-[#1F3A5F] hover:bg-[#162A45] text-white rounded-lg text-xs font-semibold cursor-pointer"
                      >
                        Update Password
                      </button>
                    </div>
                    {pwdChangedMsg && (
                      <span className="text-xs text-teal-600 font-bold">
                        Password updated successfully!
                      </span>
                    )}
                  </div>

                  {/* Reset to Factory Defaults */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-red-600 text-xs">Reset All Customizations</div>
                      <div className="text-[11px] text-slate-500">Restore all initial doctor details, timeline, and posts.</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Are you sure you want to reset all data to default?')) {
                          resetAllToDefault();
                          alert('Reset complete.');
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 text-xs font-semibold cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Default</span>
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* Modal for Creating / Editing Blog Post */}
      {blogModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white dark:bg-[#111C35] w-full max-w-2xl max-h-[90vh] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl overflow-y-auto space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold text-[#1F3A5F] dark:text-white">
                {editingPost ? 'Edit Health Article' : 'Create New Health Article'}
              </h3>
              <button
                onClick={() => setBlogModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBlogPost} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Title (English) *</label>
                  <input
                    type="text"
                    value={postTitleEn}
                    onChange={(e) => setPostTitleEn(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Title (বাংলা) *</label>
                  <input
                    type="text"
                    value={postTitleBn}
                    onChange={(e) => setPostTitleBn(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold mb-1">Category (English)</label>
                  <input
                    type="text"
                    value={postCategoryEn}
                    onChange={(e) => setPostCategoryEn(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Category (বাংলা)</label>
                  <input
                    type="text"
                    value={postCategoryBn}
                    onChange={(e) => setPostCategoryBn(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">Summary (English)</label>
                <textarea
                  rows={2}
                  value={postSummaryEn}
                  onChange={(e) => setPostSummaryEn(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold mb-1">Summary (বাংলা)</label>
                <textarea
                  rows={2}
                  value={postSummaryBn}
                  onChange={(e) => setPostSummaryBn(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold mb-1">Full Content (English)</label>
                <textarea
                  rows={4}
                  value={postContentEn}
                  onChange={(e) => setPostContentEn(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="block font-bold mb-1">Full Content (বাংলা)</label>
                <textarea
                  rows={4}
                  value={postContentBn}
                  onChange={(e) => setPostContentBn(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-lg"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setBlogModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold cursor-pointer"
                >
                  Save Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
