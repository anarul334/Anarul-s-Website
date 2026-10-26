import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    navAbout: 'About',
    navServices: 'Services',
    navExperience: 'Experience & Training',
    navCertificates: 'Certifications',
    navAppointment: 'Book Appointment',
    navBlog: 'Health Tips',
    navAssistant: 'AI Health Assistant',
    navTestimonials: 'Community Stories',
    navContact: 'Contact & Clinic',
    navAdmin: 'Admin Portal',
    navCallNow: 'Call Now',
    emergencyNotice: 'Emergency? Dial 999 or Satkhira Hospital',

    // Hero
    heroBadge: '15+ Years Caring for Satkhira',
    heroSubtitle: 'Dedicated Rural Medical Practitioner providing compassionate primary healthcare, maternal and child wellness, minor clinical procedures, and verified pharmacy counselling in Chhoygharia, Satkhira Sadar.',
    btnBookAppointment: 'Book Appointment',
    btnCallNow: 'Call 01748-128106',
    btnWhatsapp: 'WhatsApp Consultation',
    btnDownloadCv: 'Download CV',
    btnAiAssistant: 'Ask AI Health Assistant',
    heroAvailableToday: 'Open Today at Rifat Pharmacy',
    
    // Key stats
    statYears: 'Years Clinical Practice',
    statPatients: 'Rural Consultations',
    statCertificates: 'Certified Diplomas & Courses',
    statPharmacy: 'Community Pharmacy Since 2020',

    // About
    aboutTitle: 'Compassionate Primary Health Care for Rural Families',
    aboutSubtitle: 'Providing dependable primary healthcare, child nutrition, and emergency first response right at the heart of Chhoygharia, Baikari.',
    aboutP1: 'Md. Anoarul Islam is an experienced Rural Medical Practitioner (RMP) with over 15 continuous years of clinical dedication in Satkhira Sadar. Having begun his practice in 2009, he bridges the essential gap between village communities and secondary medical facilities.',
    aboutP2: 'As the proprietor and registered pharmacy technician of Rifat Pharmacy (established 2020, Reg. C-99360), he ensures authentic manufacturer medicines, proper temperature preservation, and clear dosage instructions for every patient.',
    aboutP3: 'In addition to general medicine and common disease diagnosis, he specializes in trained minor procedures, maternal-child health, family planning counselling, and rapid emergency first response with structured hospital referral.',
    aboutRegTitle: 'Official Registrations & Samity Memberships',

    // Services
    servicesTitle: 'Clinical Healthcare Services',
    servicesSubtitle: 'Comprehensive primary care, diagnostic screening, wound management, and minor procedures designed for rural community health.',
    serviceLearnMore: 'View Details',

    // Experience & Timeline
    timelineTitle: 'Professional Experience & Training',
    timelineSubtitle: 'A structured journey of clinical service, formal technical education, continuous medical refreshers, and public health projects.',
    tabExperience: 'Clinical Experience',
    tabTraining: 'Medical Training & Diplomas',
    tabEducation: 'Academic Education',
    tabMemberships: 'Professional Memberships',
    gradeLabel: 'Credential / Distinction',

    // Certificates Gallery
    certTitle: 'Certified Credentials & Qualifications',
    certSubtitle: 'Verified certifications from Bangladesh Technology Foundation, DGHS Upazila Health Office, and the Pharmacy Council of Bangladesh.',
    viewCertificate: 'Click to Enlarge',
    closeLightbox: 'Close Preview',

    // Appointment Booking
    bookingTitle: 'Book a Clinic Appointment',
    bookingSubtitle: 'Schedule your visit at Rifat Pharmacy or request a consultation. No advance payment required.',
    formName: 'Patient Full Name',
    formPhone: 'Phone Number (01XXXXXXXXX)',
    formAge: 'Patient Age (Years)',
    formGender: 'Gender',
    formGenderMale: 'Male',
    formGenderFemale: 'Female',
    formGenderOther: 'Other',
    formProblem: 'Health Concern / Symptoms Description',
    formDate: 'Preferred Date',
    formTime: 'Preferred Time Slot',
    formSubmit: 'Confirm Appointment Request',
    formSubmitting: 'Submitting Request...',
    bookingSuccessTitle: 'Appointment Request Submitted!',
    bookingSuccessMsg: 'Your consultation request has been recorded. Reference ID:',
    bookingSuccessNote: 'Our clinic will review and call your phone number to confirm timing. For urgent matters, call 01748-128106 directly.',
    bookAnother: 'Book Another Appointment',

    // Blog
    blogTitle: 'Health Awareness & Preventive Tips',
    blogSubtitle: 'Practical rural health guidance written in plain Bangla and English to protect your family from seasonal illnesses.',
    blogSearchPlaceholder: 'Search health tips (e.g. fever, dengue, hygiene)...',
    allCategories: 'All Topics',
    readArticle: 'Read Full Guide',
    closeArticle: 'Close Article',

    // AI Assistant
    aiAssistantTitle: 'AI Health Assistant',
    aiAssistantSubtitle: 'Ask general health, hygiene, and first-aid questions in English or বাংলা.',
    aiAssistantDisclaimer: 'This is general information, not a diagnosis. See a doctor for medical advice. In an emergency, call 999 or go to the nearest hospital. Medicines or dosages are never prescribed.',
    aiInputPlaceholder: 'Ask a health question (e.g. What to do for sudden fever?)...',
    aiSend: 'Ask',
    aiThinking: 'Reviewing health guidance...',
    quickQuestions: 'Common Health Topics:',

    // Testimonials
    testTitle: 'Community Trust & Patient Stories',
    testSubtitle: 'Real experiences from families across Chhoygharia, Baikari, and Satkhira Sadar who rely on our care.',
    btnLeaveReview: 'Share Your Experience',
    reviewPendingNotice: 'Patient reviews are verified and reviewed by our clinic before publishing.',
    formReviewName: 'Your Name',
    formReviewVillage: 'Your Village / Area',
    formReviewTreatment: 'Treatment / Service Received',
    formReviewComment: 'Your Experience & Feedback',
    formReviewRating: 'Rating (1 - 5 Stars)',
    formReviewSubmit: 'Submit Feedback',
    formReviewSuccess: 'Thank you! Your review has been submitted for verification.',

    // Contact
    contactTitle: 'Clinic Location & Contact',
    contactSubtitle: 'Conveniently located at Chhoygharia Bazar, Satkhira Sadar. Easy road access and emergency parking.',
    clinicAddressLabel: 'Chamber & Pharmacy Address',
    phoneLabel: 'Direct Phone Line',
    whatsappLabel: 'WhatsApp Chat',
    hoursLabel: 'Clinic Consultation Hours',
    emergencyHeading: 'Emergency Notice',
    openInGoogleMaps: 'Open in Google Maps',

    // Admin
    adminTitle: 'Clinic Administration Portal',
    adminLoginPrompt: 'Enter Admin Password to manage appointments and content',
    adminPasswordPlaceholder: 'Enter clinic access key',
    adminLoginBtn: 'Access Admin Dashboard',
    adminLogoutBtn: 'Log Out',
    adminTabAppointments: 'Appointments',
    adminTabBlog: 'Manage Articles',
    adminTabTestimonials: 'Approve Reviews',
    adminTabHours: 'Clinic Info & Hours',
    adminTabUploads: 'Photo & Media',
    adminTabFirebase: 'Firebase & API Setup',
    btnExportCsv: 'Export Appointments (CSV)',
    statusAll: 'All Statuses',
    statusPending: 'Pending',
    statusConfirmed: 'Confirmed',
    statusDone: 'Completed',
    statusCancelled: 'Cancelled',
    actionConfirm: 'Confirm',
    actionComplete: 'Mark Done',
    actionCancel: 'Cancel',
    actionDelete: 'Delete',
    actionApprove: 'Approve',

    // CV
    cvTitle: 'Curriculum Vitae',
    cvSubtitle: 'Md. Anoarul Islam — Rural Medical Practitioner',
    btnPrintCv: 'Print / Save as PDF',
    btnCloseCv: 'Close CV',

    // Footer
    footerDisclaimer: 'Disclaimer: Md. Anoarul Islam is a dedicated Rural Medical Practitioner (RMP) providing primary healthcare, minor procedures, and pharmacy counselling. In cases of critical trauma, surgical emergencies, or acute medical crises, patients are promptly stabilized and referred to Satkhira Sadar Hospital or tertiary centers.',
    footerCopyright: '© 2026 Md. Anoarul Islam. All rights reserved. Rifat Pharmacy, Chhoygharia, Satkhira.',
    privacyNote: 'Patient confidentiality guaranteed. National identity numbers and private personal details are never published.',
  },
  bn: {
    // Navigation
    navAbout: 'পরিচিতি',
    navServices: 'সেবাসমূহ',
    navExperience: 'অভিজ্ঞতা ও প্রশিক্ষণ',
    navCertificates: 'সনদপত্র',
    navAppointment: 'সিরিয়াল নিন',
    navBlog: 'স্বাস্থ্য টিপস',
    navAssistant: 'এআই স্বাস্থ্য সহকারী',
    navTestimonials: 'রোগীর মতামত',
    navContact: 'যোগাযোগ ও চেম্বার',
    navAdmin: 'অ্যাডমিন প্যানেল',
    navCallNow: 'সরাসরি কল',
    emergencyNotice: 'জরুরি সেবা? ৯৯৯ অথবা সদর হাসপাতাল',

    // Hero
    heroBadge: 'সাতক্ষীরায় ১৫+ বছরের বিশ্বস্ত চিকিৎসা সেবা',
    heroSubtitle: 'ছয়ঘরিয়া ও বৈকারী এলাকার মানুষের সেবায় নিয়োজিত পল্লী চিকিৎসক। জেনারেল মেডিসিন, মা ও শিশুর স্বাস্থ্যসেবা, ছোট অস্ত্রোপচার এবং রিফাত ফার্মেসীতে আসল ওষুধের নিশ্চয়তা।',
    btnBookAppointment: 'সিরিয়াল বা অ্যাপয়েন্টমেন্ট নিন',
    btnCallNow: 'কল করুন: ০১৭৪৮-১২৮১০৬',
    btnWhatsapp: 'হোয়াটসঅ্যাপে পরামর্শ',
    btnDownloadCv: 'সিভি (CV) ডাউনলোড',
    btnAiAssistant: 'এআই স্বাস্থ্য সহায়ক',
    heroAvailableToday: 'আজ রিফাত ফার্মেসীতে রোগী দেখা হচ্ছে',
    
    // Key stats
    statYears: 'বছরের নিরবচ্ছিন্ন চিকিৎসা অভিজ্ঞতা',
    statPatients: 'গ্রামীণ রোগীর সফল সেবা',
    statCertificates: 'সরকারি ও প্রাতিষ্ঠানিক প্রশিক্ষণ সনদ',
    statPharmacy: 'কমিউনিটি ফার্মেসী (২০২০ থেকে)',

    // About
    aboutTitle: 'গ্রামীণ মানুষের সুস্বাস্থ্যে আন্তরিক প্রাথমিক চিকিৎসা',
    aboutSubtitle: 'ছয়ঘরিয়া ও বৈকারী ইউনিয়নের প্রতিটি পরিবারের বিশ্বস্ত স্বাস্থ্যবন্ধু—সঠিক রোগ নির্ণয় ও জরুরি প্রাথমিক সেবা।',
    aboutP1: 'মোঃ আনোয়ারুল ইসলাম সাতক্ষীরা সদর উপজেলার একজন অভিজ্ঞ পল্লী চিকিৎসক (RMP)। ২০০৯ সাল থেকে একটানা ১৫ বছরেরও বেশি সময় ধরে তিনি গ্রামীণ জনগোষ্ঠীকে নিঃস্বার্থভাবে প্রাথমিক চিকিৎসাসেবা দিয়ে আসছেন।',
    aboutP2: '২০২০ সালে প্রতিষ্ঠিত "রিফাত ফার্মেসী"-র স্বত্বাধিকারী ও বাংলাদেশ ফার্মেসী কাউন্সিল নিবন্ধিত টেকনিশিয়ান (রেজিঃ সি-৯৯৩৬০) হিসেবে তিনি সবসময় আসল ওষুধ, সঠিক তাপমাত্রায় সংরক্ষণ এবং ওষুধের সঠিক ব্যবহারের দিকনির্দেশনা নিশ্চিত করেন।',
    aboutP3: 'সাধারণ রোগের চিকিৎসার পাশাপাশি তিনি আধুনিক পদ্ধতিতে সুন্নতে খতনা, নাকের পলিপস, পাইলস পরিচর্যা, মা ও শিশুর পুষ্টি, পরিবার পরিকল্পনা এবং জটিল রোগীর ক্ষেত্রে দ্রুত সদর হাসপাতালে রেফারেল পরিচালনা করেন।',
    aboutRegTitle: 'সরকারি নিবন্ধন ও পেশাগত সদস্যপদসমূহ',

    // Services
    servicesTitle: 'আমাদের স্বাস্থ্যসেবাসমূহ',
    servicesSubtitle: 'গ্রামের সাধারণ মানুষের স্বাস্থ্য সুরক্ষায় আধুনিক প্রাথমিক ডায়াগনস্টিক, ক্ষত পরিচর্যা ও চিকিৎসা পরামর্শ।',
    serviceLearnMore: 'বিস্তারিত দেখুন',

    // Experience & Timeline
    timelineTitle: 'কাজের অভিজ্ঞতা ও চিকিৎসা প্রশিক্ষণ',
    timelineSubtitle: 'দীর্ঘ ১৫ বছরের পেশাগত সাধনা, প্রাতিষ্ঠানিক ডিপ্লোমা, সরকারি রিফ্রেসার কোর্স ও জাতীয় স্বাস্থ্য প্রকল্পে কাজের তথ্য।',
    tabExperience: 'চিকিৎসা অভিজ্ঞতা',
    tabTraining: 'মেডিকেল ট্রেনিং ও ডিপ্লোমা',
    tabEducation: 'শিক্ষাগত যোগ্যতা',
    tabMemberships: 'পেশাগত সদস্যপদ',
    gradeLabel: 'সনদ / বিভাগ',

    // Certificates Gallery
    certTitle: 'চিকিৎসা ও ফার্মেসী বিষয়ক সনদপত্র',
    certSubtitle: 'বাংলাদেশ টেকনোলজি ফাউন্ডেশন, স্বাস্থ্য অধিদপ্তর ও ফার্মেসী কাউন্সিলের অনুমোদিত সনদসমূহ।',
    viewCertificate: 'বড় করে দেখতে ক্লিক করুন',
    closeLightbox: 'বন্ধ করুন',

    // Appointment Booking
    bookingTitle: 'চেম্বারে সিরিয়াল বুকিং ফর্ম',
    bookingSubtitle: 'রিফাত ফার্মেসীতে ডাক্তার দেখাতে বা পরামর্শের জন্য অগ্রিম সিরিয়াল নিন। কোনো অগ্রিম ফি প্রয়োজন নেই।',
    formName: 'রোগীর পুরো নাম',
    formPhone: 'মোবাইল নম্বর (০১৭XXXXXXXX)',
    formAge: 'রোগীর বয়স (বছর)',
    formGender: 'লিঙ্গ',
    formGenderMale: 'পুরুষ',
    formGenderFemale: 'মহিলা',
    formGenderOther: 'অন্যান্য',
    formProblem: 'রোগের বিবরণ / প্রধান শারীরিক সমস্যা',
    formDate: 'পছন্দের তারিখ',
    formTime: 'পছন্দের সময়সূচি',
    formSubmit: 'সিরিয়াল নিশ্চিত করুন',
    formSubmitting: 'সিরিয়াল বুক হচ্ছে...',
    bookingSuccessTitle: 'আপনার সিরিয়াল অনুরোধ জমা হয়েছে!',
    bookingSuccessMsg: 'আপনার বুকিং সফলভাবে গৃহীত হয়েছে। রেফারেন্স নম্বর:',
    bookingSuccessNote: 'আমাদের চেম্বার থেকে দ্রুত আপনার মোবাইলে কল করে সময় নিশ্চিত করা হবে। জরুরি প্রয়োজনে সরাসরি ০১৭৪৮-১২৮১০৬ নম্বরে কল করুন।',
    bookAnother: 'নতুন আরেকটি সিরিয়াল নিন',

    // Blog
    blogTitle: 'স্বাস্থ্য সচেতনতা ও রোগ প্রতিরোধ টিপস',
    blogSubtitle: 'মৌসুমি রোগ, ডেঙ্গু প্রতিরোধ ও নিরাপদ স্বাস্থ্যবিধি বিষয়ক সহজ বাংলায় প্রয়োজনীয় স্বাস্থ্য পরামর্শ।',
    blogSearchPlaceholder: 'স্বাস্থ্য টিপস খুঁজুন (যেমন: জ্বর, ডেঙ্গু, ডায়রিয়া)...',
    allCategories: 'সব বিষয়',
    readArticle: 'সম্পূর্ণ পড়ুন',
    closeArticle: 'বন্ধ করুন',

    // AI Assistant
    aiAssistantTitle: 'এআই স্বাস্থ্য সহকারী',
    aiAssistantSubtitle: 'সাধারণ স্বাস্থ্যবিধি, পরিচ্ছন্নতা ও প্রাথমিক যত্ন বিষয়ক তথ্য জানতে প্রশ্ন করুন।',
    aiAssistantDisclaimer: 'এই তথ্যটি শুধুমাত্র সাধারণ জ্ঞানের জন্য, কোনো রোগ নির্ণয় বা চিকিৎসা নয়। চিকিৎসার জন্য চিকিৎসকের পরামর্শ নিন। জরুরি অবস্থায় ৯৯৯ এ কল করুন বা নিকটস্থ হাসপাতালে যান। কোনো ওষুধ বা ডোজ প্রেসক্রাইব করা হয় না।',
    aiInputPlaceholder: 'আপনার স্বাস্থ্য বিষয়ক প্রশ্ন লিখুন (যেমন: হঠাৎ জ্বরে করণীয় কি?)...',
    aiSend: 'জানতে চান',
    aiThinking: 'পরামর্শ তৈরি হচ্ছে...',
    quickQuestions: 'সাধারণ কিছু প্রশ্ন:',

    // Testimonials
    testTitle: 'এলাকাবাসীর আস্থা ও রোগীদের অভিজ্ঞতা',
    testSubtitle: 'ছয়ঘরিয়া, বৈকারী ও সাতক্ষীরা সদর এলাকার সুস্থ হওয়া মানুষের বাস্তব মতামত।',
    btnLeaveReview: 'আপনার মতামত লিখুন',
    reviewPendingNotice: 'আপনার মতামতটি চেম্বার কর্তৃক যাচাইয়ের পর ওয়েবসাইটে প্রকাশ করা হবে।',
    formReviewName: 'আপনার নাম',
    formReviewVillage: 'আপনার গ্রাম / এলাকা',
    formReviewTreatment: 'যে চিকিৎসা বা সেবা নিয়েছেন',
    formReviewComment: 'আপনার অনুভূতি ও মতামত',
    formReviewRating: 'রেটিং (১ - ৫ স্টার)',
    formReviewSubmit: 'মতামত জমা দিন',
    formReviewSuccess: 'ধন্যবাদ! আপনার মূল্যবান মতামত সফলভাবে পাঠানো হয়েছে।',

    // Contact
    contactTitle: 'চেম্বারের ঠিকানা ও যোগাযোগ',
    contactSubtitle: 'ছয়ঘরিয়া বাজার, বৈকারী, সাতক্ষীরা সদর। পাকা রাস্তার সাথে অবস্থিত এবং গাড়ি ও রিকশা চলাচলের সুব্যবস্থা রয়েছে।',
    clinicAddressLabel: 'চেম্বার ও ফার্মেসীর ঠিকানা',
    phoneLabel: 'সরাসরি মোবাইল নম্বর',
    whatsappLabel: 'হোয়াটসঅ্যাপ সংযোগ',
    hoursLabel: 'রোগী দেখার সময়সূচি',
    emergencyHeading: 'জরুরি সেবা বার্তা',
    openInGoogleMaps: 'গুগল ম্যাপে লোকেশন দেখুন',

    // Admin
    adminTitle: 'চেম্বার অ্যাডমিন ড্যাশবোর্ড',
    adminLoginPrompt: 'অ্যাপয়েন্টমেন্ট ও কনটেন্ট পরিচালনা করতে অ্যাডমিন পাসওয়ার্ড দিন',
    adminPasswordPlaceholder: 'অ্যাডমিন পাসওয়ার্ড লিখুন',
    adminLoginBtn: 'ড্যাশবোর্ডে প্রবেশ করুন',
    adminLogoutBtn: 'লগআউট',
    adminTabAppointments: 'সিরিয়াল তালিকা',
    adminTabBlog: 'স্বাস্থ্য ব্লগ প্রবন্ধ',
    adminTabTestimonials: 'রোগীর মতামত যাচাই',
    adminTabHours: 'সময়সূচি ও ঠিকানা',
    adminTabUploads: 'ছবি ও মিডিয়া',
    adminTabFirebase: 'ফায়ারবেস ও এপিআই সেটিংস',
    btnExportCsv: 'এক্সেল/CSV ডাউনলোড',
    statusAll: 'সব স্ট্যাটাস',
    statusPending: 'অপেক্ষমাণ (Pending)',
    statusConfirmed: 'নিশ্চিত (Confirmed)',
    statusDone: 'সম্পন্ন (Done)',
    statusCancelled: 'বাতিল (Cancelled)',
    actionConfirm: 'কনফার্ম করুন',
    actionComplete: 'সম্পন্ন মার্ক করুন',
    actionCancel: 'বাতিল করুন',
    actionDelete: 'মুছে ফেলুন',
    actionApprove: 'অনুমোদন দিন',

    // CV
    cvTitle: 'জীবনবৃত্তান্ত (কারিকুলাম ভিটা)',
    cvSubtitle: 'মোঃ আনোয়ারুল ইসলাম — পল্লী চিকিৎসক ও রেজিস্টার্ড ফার্মেসী টেকনিশিয়ান',
    btnPrintCv: 'প্রিন্ট বা পিডিএফ সেভ করুন',
    btnCloseCv: 'বন্ধ করুন',

    // Footer
    footerDisclaimer: 'সতর্কীকরণ: মোঃ আনোয়ারুল ইসলাম একজন প্রশিক্ষণপ্রাপ্ত পল্লী চিকিৎসক (RMP) যিনি প্রাথমিক স্বাস্থ্যসেবা, ছোটখাটো ক্ষত পরিচর্যা ও ওষুধ পরামর্শ প্রদান করেন। মারাত্মক দুর্ঘটনা, অপারেশন প্রয়োজন এমন জটিল রোগীদের দ্রুত প্রাথমিক চিকিৎসা দিয়ে সাতক্ষীরা সদর হাসপাতালে রেফার করা হয়।',
    footerCopyright: '© ২০২৬ মোঃ আনোয়ারুল ইসলাম। সর্বস্বত্ব সংরক্ষিত। রিফাত ফার্মেসী, ছয়ঘরিয়া, সাতক্ষীরা।',
    privacyNote: 'রোগীর তথ্যের শতভাগ গোপনীয়তা নিশ্চিত। কোনো জাতীয় পরিচয়পত্র (এনআইডি) বা পরিবারের স্পর্শকাতর তথ্য ওয়েবসাইটে প্রকাশ করা হয় না।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('anoarul_lang');
    return saved === 'bn' || saved === 'en' ? saved : 'bn'; // Default to Bangla for rural Bangladesh audience
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('anoarul_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'bn' ? 'en' : 'bn';
    setLanguage(nextLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
