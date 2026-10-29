import {
  ContactInfo,
  ClinicHours,
  ServiceItem,
  TimelineItem,
  CertificateItem,
  BlogPost,
  Testimonial,
  ClinicalServiceItem,
  ClinicalSafetyStandard,
  ClinicalFaqItem,
} from '../types';

export const initialContactInfo: ContactInfo = {
  practitionerName: 'Md. Anoarul Islam',
  banglaName: 'মোঃ আনোয়ারুল ইসলাম',
  titleEn: 'Diploma in Medical Assistant (DMA) | General Medicine | Registered Pharmacy Technician',
  titleBn: 'পল্লী চিকিৎসক (DMA) | জেনারেল মেডিসিন | নিবন্ধিত ফার্মেসী টেকনিশিয়ান',
  phone: '+8801748128106',
  displayPhone: '01748-128106',
  whatsapp: '8801748128106',
  addressEn: 'Chhoygharia, Baikari, Satkhira Sadar, Satkhira-9400, Bangladesh',
  addressBn: 'ছয়ঘরিয়া, বৈকারী, সাতক্ষীরা সদর, সাতক্ষীরা-৯৪০০, বাংলাদেশ',
  pharmacyEn: 'Rifat Pharmacy, Chhoygharia Bazar, Sadar, Satkhira',
  pharmacyBn: 'রিফাত ফার্মেসী, ছয়ঘরিয়া বাজার, সদর, সাতক্ষীরা',
  email: 'anaruldr4@gmail.com',
  regNumber: 'Pharmacy Council of Bangladesh Reg. C-99360',
};

export const initialClinicHours: ClinicHours = {
  regularDays: {
    en: 'Saturday – Thursday',
    bn: 'শনিবার – বৃহস্পতিবার',
  },
  regularTime: {
    en: '9:00 AM – 8:00 PM',
    bn: 'সকাল ৯:০০ – রাত ৮:০০',
  },
  fridayStatus: {
    en: 'Friday: Closed (Emergency on-call available)',
    bn: 'শুক্রবার: বন্ধ (জরুরি প্রয়োজনে ফোনে যোগাযোগ সম্ভব)',
  },
  emergencyNotice: {
    en: 'For critical emergencies, call national hotline 999 or go directly to Satkhira Sadar Hospital.',
    bn: 'জরুরি পরিস্থিতিতে জাতীয় জরুরি সেবা ৯৯৯ নম্বরে কল করুন বা সরাসরি সাতক্ষীরা সদর হাসপাতালে যান।',
  },
};

export const initialServices: ServiceItem[] = [
  {
    id: 'general-medicine',
    iconName: 'Stethoscope',
    title: {
      en: 'General Medicine & Primary Care',
      bn: 'জেনারেল মেডিসিন ও প্রাথমিক স্বাস্থ্যসেবা',
    },
    description: {
      en: 'Primary clinical assessment, fever evaluation, respiratory illnesses, seasonal infections, and common gastrointestinal disorders.',
      bn: 'প্রাথমিক শারীরিক পরীক্ষা, জ্বর, কাশি-শ্বাসকষ্ট, মৌসুমি সংক্রমণ ও পেটের সাধারণ রোগের সার্বিক সেবা।',
    },
    details: {
      en: [
        'Vital signs check (Blood Pressure, Pulse, Oxygen, Temperature)',
        'Diagnosis and management of seasonal fevers (Viral, Typhoid, Dengue)',
        'Gastroenteritis, dehydration, and acid peptic disorder management',
        'Physical examination and systematic health checkups',
      ],
      bn: [
        'শারীরিক পরীক্ষা (রক্তচাপ, নাড়ির গতি, অক্সিজেন, তাপমাত্রা পরিমাপ)',
        'মৌসুমি জ্বর (ভাইরাল, টাইফয়েড, ডেঙ্গু) নির্ণয় ও প্রাথমিক পরামর্শ',
        'ডায়রিয়া, পানিশূন্যতা ও গ্যাস্ট্রিক সমস্যার তাৎক্ষণিক সমাধান',
        'নিয়মিত স্বাস্থ্য পর্যবেক্ষণ ও প্রাথমিক চিকিৎসা পরামর্শ',
      ],
    },
  },
  {
    id: 'maternal-child-health',
    iconName: 'Baby',
    title: {
      en: 'Maternal & Child Health Care',
      bn: 'মা ও শিশু স্বাস্থ্যসেবা',
    },
    description: {
      en: 'Antenatal wellness guidance, post-natal care, infant nutrition counseling, child growth tracking, and immunisation guidance.',
      bn: 'গর্ভবতী মায়ের যত্ন, প্রসবোত্তর সেবা, শিশুর পুষ্টি পরামর্শ, ওজন বৃদ্ধি পর্যবেক্ষণ এবং টিকাদান সংক্রান্ত দিকনির্দেশনা।',
    },
    details: {
      en: [
        'Antenatal care (ANC) screening and blood pressure monitoring',
        'Infant and young child feeding (IYCF) counseling',
        'Childhood diarrhea, pneumonia, and malnutrition detection',
        'Guidance on government EPI vaccination schedules',
      ],
      bn: [
        'গর্ভবতী মায়ের রক্তচাপ ও শারীরিক অবস্থা নিয়মিত পর্যবেক্ষণ',
        'শিশুর সঠিক পুষ্টি ও স্তন্যপান বিষয়ক পরামর্শ',
        'শিশুদের নিউমোনিয়া ও অপুষ্টির লক্ষণ চিহ্নিতকরণ ও চিকিৎসা',
        'সরকারি ইপিআই টিকা গ্রহণের সঠিক সময়সূচি ও দিকনির্দেশনা',
      ],
    },
  },
  {
    id: 'minor-procedures',
    iconName: 'Scissors',
    title: {
      en: 'Minor Procedures & Specialized Care',
      bn: 'ছোট অস্ত্রোপচার ও বিশেষায়িত সেবা',
    },
    description: {
      en: 'Trained procedures including male circumcision, piles care, nasal polyps management, tonsil care, and benign skin tumour/cyst dressing.',
      bn: 'প্রশিক্ষণপ্রাপ্ত সেবা: সুন্নতে খতনা, পাইলস পরিচর্যা, নাকের পলিপস, টনসিল পর্যবেক্ষণ ও ত্বকের সাধারণ টিউমার যত্ন।',
    },
    details: {
      en: [
        'Hygienic and safe male circumcision using sterile instruments',
        'Conservative and procedural care for nasal polyps & piles',
        'Benign superficial cysts and abscess drainage',
        'Sterile suture removal and post-procedure antiseptic care',
      ],
      bn: [
        'জীবাণুমুক্ত আধুনিক পদ্ধতিতে নিরাপদ সুন্নতে খতনা',
        'নাকের পলিপস ও পাইলসের প্রাথমিক উপশম ও বিশেষ পরিচর্যা',
        'ছোটখাটো ফোঁড়া বা সিস্টের ড্রেসিং ও নিষ্কাশন',
        'অস্ত্রোপচার পরবর্তী সেলাই কাটা ও এন্টিসেপ্টিক যত্ন',
      ],
    },
  },
  {
    id: 'emergency-response',
    iconName: 'HeartPulse',
    title: {
      en: 'Emergency First Response & Hospital Referral',
      bn: 'জরুরি প্রাথমিক চিকিৎসা ও হাসপাতাল রেফারেল',
    },
    description: {
      en: 'Rapid emergency stabilization, acute trauma management, burn treatment, and prompt coordinated referral to Satkhira Sadar Hospital.',
      bn: 'দুর্ঘটনা ও তীব্র অসুস্থতায় দ্রুত প্রাথমিক জীবনরক্ষাকারী সেবা, পুড়ে যাওয়া রোগীর সেবা এবং সদর হাসপাতালে দ্রুত রেফারেল।',
    },
    details: {
      en: [
        'Immediate first-aid stabilization for acute trauma and burns',
        'Acute respiratory distress and severe dehydration response',
        'Standard medical referral slip with detailed patient history',
        'Coordination with Satkhira Sadar Hospital ambulance services',
      ],
      bn: [
        'তীব্র আঘাত, কাটা-ছেঁড়া ও পুড়ে যাওয়া রোগীর তাৎক্ষণিক প্রাথমিক চিকিৎসা',
        'তীব্র শ্বাসকষ্ট ও পানিশূন্যতায় জরুরি স্যালাইন ও অক্সিজেন সেবা',
        'রোগীর পূর্ণ বিবরণসহ সঠিক রেফারেল পেপার প্রদান',
        'সাতক্ষীরা সদর হাসপাতাল ও স্থানীয় অ্যাম্বুলেন্সের জরুরি সমন্বয়',
      ],
    },
  },
  {
    id: 'wound-care',
    iconName: 'Activity',
    title: {
      en: 'Wound Care, Dressing & Antiseptic Management',
      bn: 'ক্ষত পরিচর্যা, ড্রেসিং ও এন্টিসেপ্টিক চিকিৎসা',
    },
    description: {
      en: 'Aseptic cleansing, sterile bandaging, diabetic ulcer dressing, burn dressing, and tetanus prophylaxis counselling.',
      bn: 'জীবাণুমুক্ত ড্রেসিং, ডায়াবেটিক ক্ষত পরিচর্যা, পোড়া ক্ষতের ড্রেসিং এবং ধনুষ্টংকার প্রতিরোধে সঠিক পরামর্শ।',
    },
    details: {
      en: [
        'Aseptic wound cleansing and sterile surgical dressing',
        'Chronic diabetic foot ulcer cleaning and monitoring',
        'Tetanus toxoid guidance after soil-contaminated injury',
        'Fast recovery antiseptic solutions and infection prevention',
      ],
      bn: [
        'আধুনিক জীবাণুমুক্ত উপায়ে ক্ষত পরিষ্কার ও ড্রেসিং',
        'ডায়াবেটিস রোগীদের পায়ের জটিল ক্ষতের বিশেষ যত্ন',
        'কাটা-ছেঁড়ায় টিটেনাস (ধনুষ্টংকার) প্রতিষেধকের সঠিক দিকনির্দেশনা',
        'ইনফেকশন প্রতিরোধে আধুনিক এন্টিসেপ্টিক চিকিৎসা',
      ],
    },
  },
  {
    id: 'family-planning',
    iconName: 'ShieldCheck',
    title: {
      en: 'Family Planning Counselling',
      bn: 'পরিবার পরিকল্পনা ও জন্মনিয়ন্ত্রণ পরামর্শ',
    },
    description: {
      en: 'Certified counselling on safe family planning methods, contraceptive options, side-effect management, and reproductive health.',
      bn: 'নিরাপদ জন্মনিয়ন্ত্রণ পদ্ধতি, উপযুক্ত মাধ্যম নির্বাচন, পার্শ্বপ্রতিক্রিয়া সমাধান ও প্রজনন স্বাস্থ্য বিষয়ে বিশ্বস্ত পরামর্শ।',
    },
    details: {
      en: [
        'Temporary and modern contraceptive methods guidance',
        'Addressing misconceptions and managing method side effects',
        'Post-partum family planning advice for young couples',
        'Confidential reproductive health consultations',
      ],
      bn: [
        'স্বল্পমেয়াদী ও দীর্ঘমেয়াদী জন্মনিয়ন্ত্রণ পদ্ধতির তুলনা ও পরামর্শ',
        'পদ্ধতির সাধারণ পার্শ্বপ্রতিক্রিয়া নিরাময় ও ভয় দূরীকরণ',
        'সন্তান জন্মের পর মায়েদের সঠিক পরিবার পরিকল্পনা গ্রহণ',
        'গোপনীয়তা বজায় রেখে প্রজনন স্বাস্থ্য বিষয়ক খোলামেলা আলোচনা',
      ],
    },
  },
  {
    id: 'pharmacy-counselling',
    iconName: 'Pill',
    title: {
      en: 'Registered Pharmacy & Medicine Counselling',
      bn: 'নিবন্ধিত ফার্মেসী ও ওষুধের সঠিক ব্যবহার',
    },
    description: {
      en: 'Authentic medicines at Rifat Pharmacy (Reg. C-99360), dose timing explanation, adverse effect prevention, and chronic medicine tracking.',
      bn: 'রিফাত ফার্মেসী (রেজিঃ সি-৯৯৩৬০) থেকে আসল ওষুধ সরবরাহ, খাওয়ার সঠিক নিয়ম ও দীর্ঘমেয়াদী ওষুধের যত্ন।',
    },
    details: {
      en: [
        'Government registered pharmacy technician supervision',
        'Authentic manufacturer medicines with guaranteed storage quality',
        'Clear instructions on empty stomach vs after meals administration',
        'Prevention of dangerous drug interactions and overdose',
      ],
      bn: [
        'ফার্মেসী কাউন্সিল নিবন্ধিত টেকনিশিয়ানের প্রত্যক্ষ তত্ত্বাবধান',
        'কোম্পানির আসল ওষুধের নিশ্চয়তা ও সঠিক তাপমাত্রায় সংরক্ষণ',
        'খাওয়ার আগে ও পরে ওষুধ গ্রহণের সুনির্দিষ্ট নিয়ম বুঝিয়ে দেওয়া',
        'একাধিক ওষুধের ক্ষতিকর প্রতিক্রিয়া রোধে সতর্কতা',
      ],
    },
  },
  {
    id: 'hygiene-education',
    iconName: 'Sparkles',
    title: {
      en: 'Health Education & Hygiene Promotion',
      bn: 'স্বাস্থ্য শিক্ষা ও পরিচ্ছন্নতা সচেতনতা',
    },
    description: {
      en: 'Community awareness sessions on safe drinking water, handwashing, arsenic awareness, dengue mosquito eradication, and sanitation.',
      bn: 'নিরাপদ খাবার পানি, হাত ধোয়ার নিয়ম, আর্সেনিক সচেতনতা, ডেঙ্গু মশা নিধন ও স্বাস্থ্যসম্মত স্যানিটেশন প্রচারণা।',
    },
    details: {
      en: [
        'Safe water treatment guidance for coastal/saline Satkhira areas',
        'Community hand hygiene techniques (BRAC / Jeeon verified)',
        'Dengue source reduction and clean rainwater container guidance',
        'Hygiene promotion for school children and community elders',
      ],
      bn: [
        'উপকূলীয় সাতক্ষীরা অঞ্চলে নিরাপদ পানি ও লবণাক্ততা সচেতনতা',
        'ব্র্যাক ও জীঅন প্রত্যয়িত হাত ধোয়ার বৈজ্ঞানিক পদ্ধতি',
        'ডেঙ্গু মশার লার্ভা ধ্বংসে জমা পানি পরিষ্কারের কৌশল',
        'স্কুল শিক্ষার্থী ও গ্রামীণ প্রবীণদের স্বাস্থ্যবিধি শিক্ষা',
      ],
    },
  },
];

export const initialExperience: TimelineItem[] = [
  {
    id: 'exp-1',
    period: '2009 – Present',
    title: {
      en: 'Rural Medical Practitioner (General Medicine)',
      bn: 'পল্লী চিকিৎসক (জেনারেল মেডিসিন)',
    },
    organization: {
      en: 'Private Practice, Chhoygharia, Satkhira Sadar',
      bn: 'ব্যক্তিগত চেম্বার, ছয়ঘরিয়া, সাতক্ষীরা সদর',
    },
    details: {
      en: 'Over 15 continuous years serving rural residents with primary medical care, diagnosing seasonal conditions, administering wound care, and managing timely referrals.',
      bn: '১৫ বছরের বেশি সময় ধরে গ্রামীণ জনগণকে প্রাথমিক স্বাস্থ্যসেবা, মৌসুমি রোগ নির্ণয় ও চিকিৎসা, ক্ষত পরিচর্যা এবং জটিল রোগীর রেফারেল পরিচালনা।',
    },
    type: 'experience',
  },
  {
    id: 'exp-2',
    period: '2020 – Present',
    title: {
      en: 'Proprietor & Registered Pharmacy Technician',
      bn: 'স্বত্বাধিকারী ও নিবন্ধিত ফার্মেসী টেকনিশিয়ান',
    },
    organization: {
      en: 'Rifat Pharmacy, Chhoygharia Bazar, Satkhira Sadar',
      bn: 'রিফাত ফার্মেসী, ছয়ঘরিয়া বাজার, সাতক্ষীরা সদর',
    },
    details: {
      en: 'Dispensing verified pharmaceuticals, providing drug information, maintaining temperature-sensitive medicine cold chain, and community healthcare counselling.',
      bn: 'ফার্মেসী কাউন্সিল নিবন্ধিত (রেজি: C-99360) টেকনিশিয়ান হিসেবে আসল ওষুধ সরবরাহ এবং সঠিক ওষুধ ব্যবহারের পরামর্শ প্রদান।',
    },
    type: 'experience',
  },
  {
    id: 'exp-3',
    period: '2020 – 2021',
    title: {
      en: 'Participant, COVID-19 Surveillance Project',
      bn: 'অংশগ্রহণকারী, কোভিড-১৯ নজরদারি প্রকল্প',
    },
    organization: {
      en: 'Jeeon Bangladesh Ltd. with Yale University & Innovations for Poverty Action (IPA)',
      bn: 'জীঅন বাংলাদেশ লিমিটেড, ইয়েল বিশ্ববিদ্যালয় ও ইনোভেশনস ফর পোভার্টি অ্যাকশন (আইপিএ)',
    },
    details: {
      en: 'Active frontline sentinel pharmacy in community syndromic surveillance, reporting respiratory illnesses, distributing masks, and promoting infection control in Satkhira.',
      bn: 'করোনাকালীন গ্রামীণ লক্ষণ নজরদারি, মাস্ক বিতরণ ও সংক্রমণ রোধে ইয়েল ইউনিভার্সিটি ও আইপিএ-এর সঙ্গে সফল যৌথ দায়িত্ব পালন।',
    },
    type: 'experience',
  },
];

export const initialTraining: TimelineItem[] = [
  {
    id: 'train-1',
    period: '2010',
    title: {
      en: 'Local Medical Assistant & Family Planning (LMAFP)',
      bn: 'লোকাল মেডিকেল অ্যাসিস্ট্যান্ট অ্যান্ড ফ্যামিলি প্ল্যানিং (LMAFP)',
    },
    organization: {
      en: 'Bangladesh Technology Foundation (BTF)',
      bn: 'বাংলাদেশ টেকনোলজি ফাউন্ডেশন (বিটিএফ)',
    },
    grade: 'Grade B',
    details: {
      en: 'Foundational rural medical assistance, reproductive health, maternal & child healthcare, and primary pharmacotherapy.',
      bn: 'প্রাথমিক চিকিৎসা সহকারী প্রশিক্ষণ, প্রজনন স্বাস্থ্য ও মা-শিশু স্বাস্থ্যসেবার মৌলিক বিদ্যা অর্জন।',
    },
    type: 'training',
  },
  {
    id: 'train-2',
    period: 'Aug – Sep 2020',
    title: {
      en: 'Village Doctor Refresher Training',
      bn: 'গ্রাম ডাক্তার রিফ্রেসার প্রশিক্ষণ',
    },
    organization: {
      en: 'Upazila Health & Family Planning Office, Satkhira Sadar (Government of Bangladesh)',
      bn: 'উপজেলা স্বাস্থ্য ও পরিবার পরিকল্পনা কার্যালয়, সাতক্ষীরা সদর (বাংলাদেশ সরকার)',
    },
    grade: 'Government Certified',
    details: {
      en: 'Official refresher training conducted by the Directorate General of Health Services (DGHS) on primary health care, infectious disease protocols, and emergency referrals.',
      bn: 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের অধীনে প্রাথমিক স্বাস্থ্যসেবা, সংক্রামক রোগ প্রতিরোধ ও সঠিক রেফারেল প্রশিক্ষণ।',
    },
    type: 'training',
  },
  {
    id: 'train-3',
    period: '2020 – 2021',
    title: {
      en: 'Diploma in Medical Assistant (DMA) - 2 Years',
      bn: 'ডিপ্লোমা ইন মেডিকেল অ্যাসিস্ট্যান্ট (ডিএমএ) - ২ বছর মেয়াদী',
    },
    organization: {
      en: 'BTF Khulna Training Institute',
      bn: 'বিটিএফ খুলনা প্রশিক্ষণ ইনস্টিটিউট',
    },
    grade: 'Grade A',
    details: {
      en: 'Comprehensive 2-year clinical and theoretical program covering anatomy, physiology, pathology, clinical diagnosis, minor surgery, and pharmacology.',
      bn: 'দুই বছর মেয়াদী চিকিৎসাবিজ্ঞান, রোগ নির্ণয়, ক্ষত পরিচর্যা ও প্রাথমিক মেডিসিনের উপর তাত্ত্বিক ও ব্যবহারিক উচ্চতর ডিপ্লোমা।',
    },
    type: 'training',
  },
  {
    id: 'train-4',
    period: '2025',
    title: {
      en: 'Diploma in Homoeopathy Para Medical (DHPM)',
      bn: 'ডিপ্লোমা ইন হোমিওপ্যাথি প্যারা মেডিকেল (ডিএইচপিএম)',
    },
    organization: {
      en: 'BTF Satkhira Institute',
      bn: 'বিটিএফ সাতক্ষীরা ইনস্টিটিউট',
    },
    grade: 'Grade B (GPA 3.66)',
    details: {
      en: 'In-depth paramedical study of complementary therapeutics, symptom matching, natural recovery mechanisms, and integrative patient support.',
      bn: 'প্যারামেডিক্যাল ধারায় পরিপূরক চিকিৎসা বিজ্ঞান, লক্ষণভিত্তিক সহায়তা ও প্রাকৃতিক নিরাময় পদ্ধতির প্রশিক্ষণ।',
    },
    type: 'training',
  },
  {
    id: 'train-5',
    period: 'April 2026',
    title: {
      en: 'Minor Procedures Hands-on Training',
      bn: 'মাইনর প্রসিডিউর ব্যবহারিক প্রশিক্ষণ',
    },
    organization: {
      en: 'Alternative Health Services',
      bn: 'অল্টারনেটিভ হেলথ সার্ভিসেস',
    },
    grade: 'Certified Practitioner',
    details: {
      en: 'Hands-on practical training covering safe minor procedures: male circumcision, piles care, nasal polyps, tonsil care, and superficial tumour dressing.',
      bn: 'ব্যবহারিক প্রশিক্ষণ: আধুনিক সুন্নতে খতনা, পাইলস যত্ন, নাকের পলিপস, টনসিল পর্যবেক্ষণ ও ত্বকের সাধারণ টিউমারের ড্রেসিং।',
    },
    type: 'training',
  },
  {
    id: 'train-6',
    period: '2020',
    title: {
      en: 'Safe Hygiene Behaviour Course',
      bn: 'নিরাপদ স্বাস্থ্যবিধি ও হাইজিন কোর্স',
    },
    organization: {
      en: 'Jeeon Bangladesh (Sponsored by BRAC)',
      bn: 'জীঅন বাংলাদেশ (ব্র্যাক কর্তৃক পৃষ্ঠপোষিত)',
    },
    grade: 'Certified',
    details: {
      en: 'Infection prevention, hand hygiene, community sanitation, and pandemic safety protocols.',
      bn: 'সংক্রমণ প্রতিরোধ, হাত ধোয়ার স্বাস্থ্যবিধি ও গ্রামীণ পরিচ্ছন্নতা রক্ষা বিষয়ে বিশেষায়িত কোর্স।',
    },
    type: 'training',
  },
];

export const initialEducation: TimelineItem[] = [
  {
    id: 'edu-1',
    period: '2008',
    title: {
      en: 'HSC (Higher Secondary Certificate)',
      bn: 'এইচএসসি (ব্যবসায় ব্যবস্থাপনা ও সাচিবিক বিদ্যা)',
    },
    organization: {
      en: 'Simanta Technical College, Satkhira',
      bn: 'সীমান্ত টেকনিক্যাল কলেজ, সাতক্ষীরা',
    },
    grade: 'GPA 3.50',
    details: {
      en: 'Specialization in Business Management and Secretarial Science.',
      bn: 'ব্যবসা ব্যবস্থাপনা ও অফিস পরিচালনা সংক্রান্ত বিষয়াবলী।',
    },
    type: 'education',
  },
  {
    id: 'edu-2',
    period: '2006',
    title: {
      en: 'Dakhil (Secondary School Certificate equivalent)',
      bn: 'দাখিল (সাধারণ বিভাগ)',
    },
    organization: {
      en: 'Chhoygharia Alhaj Md. A. Satter Dakhil Madrasah',
      bn: 'ছয়ঘরিয়া আলহাজ্ব মোঃ আঃ ছাত্তার দাখিল মাদ্রাসা',
    },
    grade: 'GPA 4.50 / 5.00',
    details: {
      en: 'General group with high distinction in foundational academics.',
      bn: 'সাধারণ বিভাগে কৃতিত্বের সাথে মাধ্যমিক সমমান দাখিল সম্পন্ন।',
    },
    type: 'education',
  },
];

export const initialMemberships = [
  {
    titleEn: 'Pharmacy Council of Bangladesh',
    titleBn: 'বাংলাদেশ ফার্মেসী কাউন্সিল',
    statusEn: 'Registered Pharmacy Technician (Reg. C-99360)',
    statusBn: 'নিবন্ধিত ফার্মেসী টেকনিশিয়ান (রেজিঃ সি-৯৯৩৬০)',
    body: 'Government of the People’s Republic of Bangladesh',
  },
  {
    titleEn: 'Bangladesh Gram Doctor (Kallayan) Samity',
    titleBn: 'বাংলাদেশ গ্রাম ডাক্তার (কল্যাণ) সমিতি',
    statusEn: 'Active Member, Satkhira District Unit',
    statusBn: 'সক্রিয় সদস্য, সাতক্ষীরা জেলা শাখা',
    body: 'National rural healthcare welfare organization',
  },
  {
    titleEn: 'Bangladesh Technology Foundation (BTF)',
    titleBn: 'বাংলাদেশ টেকনোলজি ফাউন্ডেশন (বিটিএফ)',
    statusEn: 'Life Member (Medical Paramedical Wing)',
    statusBn: 'আজীবন সদস্য (মেডিকেল প্যারামেডিকেল শাখা)',
    body: 'Institutional healthcare development body',
  },
];

export const initialCertificates: CertificateItem[] = [
  {
    id: 'cert-1',
    title: {
      en: 'Diploma in Medical Assistant (DMA)',
      bn: 'ডিপ্লোমা ইন মেডিকেল অ্যাসিস্ট্যান্ট (ডিএমএ)',
    },
    issuer: {
      en: 'Bangladesh Technology Foundation (BTF Khulna)',
      bn: 'বাংলাদেশ টেকনোলজি ফাউন্ডেশন (বিটিএফ খুলনা)',
    },
    year: '2021',
    grade: 'Grade A',
    verificationId: 'BTF-DMA-2021-0492',
    imageUrl: '/images/minor_procedures_care_1792911356505.jpg',
  },
  {
    id: 'cert-2',
    title: {
      en: 'Village Doctor Refresher Training',
      bn: 'গ্রাম ডাক্তার রিফ্রেসার প্রশিক্ষণ সনদ',
    },
    issuer: {
      en: 'Upazila Health & Family Planning Office, Satkhira Sadar (GoB)',
      bn: 'উপজেলা স্বাস্থ্য ও পরিবার পরিকল্পনা কার্যালয়, সাতক্ষীরা সদর',
    },
    year: '2020',
    grade: 'Government Certified',
    verificationId: 'DGHS-SAT-VD-2020',
    imageUrl: '/images/community_health_satkhira_1792911356288.jpg',
  },
  {
    id: 'cert-3',
    title: {
      en: 'Registered Pharmacy Technician',
      bn: 'নিবন্ধিত ফার্মেসী টেকনিশিয়ান সনদ',
    },
    issuer: {
      en: 'Pharmacy Council of Bangladesh',
      bn: 'বাংলাদেশ ফার্মেসী কাউন্সিল',
    },
    year: '2020',
    grade: 'Reg. C-99360',
    verificationId: 'PCB-REG-C99360',
    imageUrl: '/images/rifat_pharmacy_1792911355260.jpg',
  },
  {
    id: 'cert-4',
    title: {
      en: 'Minor Procedures Hands-on Training',
      bn: 'মাইনর প্রসিডিউর প্রশিক্ষণ (খতনা, পাইলস, পলিপস, টনসিল)',
    },
    issuer: {
      en: 'Alternative Health Services',
      bn: 'অল্টারনেটিভ হেলথ সার্ভিসেস',
    },
    year: '2026',
    grade: 'Certified Clinical Skills',
    verificationId: 'AHS-MP-2026-881',
    imageUrl: '/images/minor_procedures_care_1792911356505.jpg',
  },
  {
    id: 'cert-5',
    title: {
      en: 'Diploma in Homoeopathy Para Medical (DHPM)',
      bn: 'ডিপ্লোমা ইন হোমিওপ্যাথি প্যারা মেডিকেল (ডিএইচপিএম)',
    },
    issuer: {
      en: 'BTF Satkhira Institute',
      bn: 'বিটিএফ সাতক্ষীরা ইনস্টিটিউট',
    },
    year: '2025',
    grade: 'Grade B (GPA 3.66)',
    verificationId: 'BTF-DHPM-2025-112',
    imageUrl: '/images/dr_anoarul_dma.png',
  },
  {
    id: 'cert-6',
    title: {
      en: 'Local Medical Assistant & Family Planning (LMAFP)',
      bn: 'লোকাল মেডিকেল অ্যাসিস্ট্যান্ট অ্যান্ড ফ্যামিলি প্ল্যানিং (LMAFP)',
    },
    issuer: {
      en: 'Bangladesh Technology Foundation (BTF)',
      bn: 'বাংলাদেশ টেকনোলজি ফাউন্ডেশন (বিটিএফ)',
    },
    year: '2010',
    grade: 'Grade B',
    verificationId: 'BTF-LMAFP-2010-018',
    imageUrl: '/images/community_health_satkhira_1792911356288.jpg',
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'seasonal-fever-rural-care',
    category: {
      en: 'Seasonal Fever',
      bn: 'মৌসুমি জ্বর',
    },
    title: {
      en: 'Seasonal Viral Fever: Safe Home Care and When to See a Doctor',
      bn: 'মৌসুমি ভাইরাল জ্বর: ঘরে বসে সঠিক যত্ন এবং কখন চিকিৎসকের কাছে যাবেন',
    },
    summary: {
      en: 'Essential guidelines for managing seasonal fever in rural areas, maintaining hydration, proper sponge bathing, and identifying danger signs.',
      bn: 'গ্রামীণ পরিবেশে মৌসুমি জ্বরের সঠিক প্রাথমিক যত্ন, প্রচুর তরল পান, গা মোছানোর নিয়ম এবং বিপজ্জনক লক্ষণসমূহ চিহ্নিতকরণ।',
    },
    content: {
      en: `With sudden changes in weather and monsoon seasons in Satkhira, viral fevers are very frequent. 

1. Hydration is vital: Drink plenty of clean boiled water, lemon water, and oral rehydration saline (ORS) if sweating heavily.
2. Tepid sponge bathing: Use normal lukewarm water with a clean cloth across forehead, armpits, and neck. Do NOT use ice-cold water.
3. Rest & Light Food: Easy-to-digest khichuri, soups, and fruits help the immune system fight the virus.
4. Red Flag Signs: If fever exceeds 102°F continuously for more than 3 days, or is accompanied by severe vomiting, breathing difficulty, severe abdominal pain, or confusion, consult Md. Anoarul Islam at Rifat Pharmacy immediately or head to Satkhira Sadar Hospital.`,
      bn: `আবহাওয়া পরিবর্তনের সময় সাতক্ষীরা অঞ্চলে মৌসুমি ভাইরাল জ্বর দেখা দেওয়া স্বাভাবিক।

১. প্রচুর তরল গ্রহণ: নিরাপদ ফুটানো পানি, ডাবের পানি, লেবুর শরবত ও স্যালাইন পান করুন যাতে পানিশূন্যতা না হয়।
২. সঠিক উপায়ে গা মোছা: সাধারণ তাপমাত্রার পানিতে পরিষ্কার সুতি কাপড় ভিজিয়ে কপাল, বগল ও ঘাড় আলতো করে মুছিয়ে দিন। বরফ বা অতিরিক্ত ঠান্ডা পানি ব্যবহার করবেন না।
৩. পুষ্টিকর নরম খাবার: জাউভাত, পাতলা খিচুড়ি ও মৌসুমী ফল শরীরকে দ্রুত সুস্থ করে তোলে।
৪. সতর্কবার্তা: জ্বর যদি ৩ দিনের বেশি স্থায়ী হয়, সাথে রক্তবমি, প্রচন্ড পেটব্যথা বা শ্বাসকষ্ট দেখা দেয় তবে দেরি না করে রিফাত ফার্মেসীতে যোগাযোগ করুন অথবা সাতক্ষীরা সদর হাসপাতালে যান।`,
    },
    date: '2026-09-15',
    readTime: '3 min',
    author: 'Md. Anoarul Islam (DMA)',
  },
  {
    id: 'post-2',
    slug: 'dengue-prevention-satkhira',
    category: {
      en: 'Dengue Prevention',
      bn: 'ডেঙ্গু প্রতিরোধ',
    },
    title: {
      en: 'Dengue Fever in Satkhira: Prevention, Warning Signs & Prompt Action',
      bn: 'সাতক্ষীরায় ডেঙ্গু সচেতনতা: মশার বিস্তার রোধ, লক্ষণ ও জরুরি করণীয়',
    },
    summary: {
      en: 'How to protect your family from Aedes mosquitoes, warning signs of severe dengue, and the critical importance of avoiding harmful pain relievers.',
      bn: 'এডিশ মশার বংশবৃদ্ধি রোধের উপায়, ডেঙ্গুর প্রাথমিক লক্ষণ এবং কোনো অবস্থাতেই ডাক্তারের পরামর্শ ছাড়া ব্যথানাশক ওষুধ না খাওয়ার সতর্কতা।',
    },
    content: {
      en: `Dengue is transmitted by the daytime-biting Aedes mosquito. In rural and peri-urban Satkhira, rainwater collection vessels and discarded containers are common breeding spots.

Key Prevention Steps:
- Empty and scrub all open water containers, buckets, flower pots, and tires every 3 days.
- Sleep under mosquito nets even during daytime naps.
- Wear full-sleeved cotton shirts and long trousers outdoors.

Critical Warning:
Never take pain medications like Ibuprofen, Aspirin, or Diclofenac without clinical consultation, as these can trigger severe internal bleeding if you have dengue. For medical evaluation and platelet check guidance, visit your rural practitioner immediately.`,
      bn: `ডেঙ্গু রোগ এডিস মশার কামড়ের মাধ্যমে ছড়ায়। বর্ষাকালে বাড়ির আশপাশে বা ছাদে জমে থাকা পরিষ্কার পানিতে এ মশা ডিম পাড়ে।

প্রতিরোধের উপায়:
- ড্রাম, ফুলের টব, টায়ার ও বালতিতে ৩ দিনের বেশি পানি জমতে দেবেন না।
- দিনের বেলা বা রাতে সবসময় মশারি টাঙিয়ে ঘুমান।
- শরীর ঢাকা ফুলহাতা জামা ও প্যান্ট পরুন।

বিশেষ সতর্কতা:
জ্বর বা শরীর ব্যথায় কখনোই অ্যাসপিরিন বা আইবুপ্রোফেন জাতীয় ব্যথানাশক খাবেন না। এতে অভ্যন্তরীণ রক্তক্ষরণ হতে পারে। ডেঙ্গুর লক্ষণ দেখা দিলে সঙ্গে সঙ্গে রক্তের পরীক্ষা ও প্রাথমিক মূল্যায়নের জন্য ক্লিনিকে আসুন।`,
    },
    date: '2026-08-20',
    readTime: '4 min',
    author: 'Md. Anoarul Islam (DMA)',
  },
  {
    id: 'post-3',
    slug: 'pure-water-rural-hygiene',
    category: {
      en: 'Hygiene & Clean Water',
      bn: 'পরিচ্ছন্নতা ও বিশুদ্ধ পানি',
    },
    title: {
      en: 'Coastal Water Safety & Safe Hygiene for Village Health',
      bn: 'উপকূলীয় সুপেয় পানি ও গ্রামীণ পরিবারের স্বাস্থ্যবিধি রক্ষা',
    },
    summary: {
      en: 'Managing safe drinking water in coastal areas with salinity, proper handwashing with soap, and preventing waterborne diarrhea.',
      bn: 'লবণাক্ততা প্রবণ উপকূলীয় এলাকায় সুপেয় পানির সঠিক সংরক্ষণ, সাবান দিয়ে হাত ধোয়ার নিয়ম ও ডায়রিয়া প্রতিরোধ।',
    },
    content: {
      en: `Safe drinking water and hand hygiene are the primary shields against diarrheal diseases and gastrointestinal infections in rural households.

1. Always boil drinking water vigorously for at least 10 minutes or use certified halogen water purification tablets.
2. Wash hands thoroughly with soap for 20 seconds:
   - Before cooking and feeding children
   - After using the sanitary latrine
   - After handling livestock or agricultural compost
3. Keep food containers strictly covered from flies and dust.
4. Prepare Oral Rehydration Salt (ORS) packets strictly with the designated half-liter (500ml) of clean water—neither too concentrated nor diluted.`,
      bn: `সুপেয় পানি ও হাতের পরিচ্ছন্নতাই ডায়রিয়া ও পেটের পীড়া থেকে গ্রামীণ পরিবারকে সুরক্ষিত রাখার প্রধান হাতিয়ার।

১. খাবার পানি অন্তত ১০ মিনিট ভালো করে ফুটিয়ে ঠান্ডা করে পান করুন অথবা বিশুদ্ধকরণ ট্যাবলেট ব্যবহার করুন।
২. খাবার তৈরি, শিশুকে খাওয়ানোর আগে এবং শৌচাগার ব্যবহারের পর অন্তত ২০ সেকেন্ড সাবান দিয়ে ভালো করে হাত ধুয়ে নিন।
৩. খাবার সবসময় ঢাকনা দিয়ে ঢেকে রাখুন যাতে মাছি বসতে না পারে।
৪. ওরস্যালাইন তৈরির সময় নির্দেশিত আধ লিটার (৫০০ মিলি) বিশুদ্ধ পানিতেই গুলে তৈরি করুন; কম বা বেশি পানি দিলে কার্যকারিতা নষ্ট হতে পারে।`,
    },
    date: '2026-07-12',
    readTime: '3 min',
    author: 'Md. Anoarul Islam (DMA)',
  },
  {
    id: 'post-4',
    slug: 'maternal-child-nutrition-guide',
    category: {
      en: 'Maternal & Child Care',
      bn: 'মা ও শিশু যত্ন',
    },
    title: {
      en: 'Essential Nutrition for Expectant Mothers and Growing Infants',
      bn: 'গর্ভবতী মায়ের সুষম খাদ্য ও শিশুর বেড়ে ওঠার সঠিক পুষ্টি',
    },
    summary: {
      en: 'Practical, locally accessible nutritious foods for pregnant mothers, exclusive breastfeeding for 6 months, and complementary baby foods.',
      bn: 'সহজে পাওয়া যায় এমন পুষ্টিকর খাবার দিয়ে গর্ভবতী মায়ের যত্ন, প্রথম ৬ মাস শুধুই বুকের দুধ ও পুষ্টিকর খিচুড়ি তৈরির নিয়ম।',
    },
    content: {
      en: `Good maternal nutrition lays the foundation for a healthy baby and safe delivery.

Expectant Mothers:
- Incorporate green leafy vegetables (shak), lentils (dal), eggs, local fish, and seasonal fruits like guava and amla daily.
- Regular iron and folic acid supplementation prevents maternal anemia.
- Check blood pressure regularly at the clinic.

Infants & Toddlers:
- Exclusive breastfeeding for the first 6 completed months—no water, honey, or cow milk needed.
- From 6 months onwards, introduce homemade multi-ingredient khichuri (rice, lentils, seasonal vegetables, small fish/egg, and a little oil) alongside continued breastfeeding up to 2 years.`,
      bn: `মায়ের সুষম পুষ্টিই সুস্থ সন্তানের জন্ম ও নিরাপদ মাতৃত্ব নিশ্চিত করে।

গর্ভবতী মায়েদের জন্য:
- প্রতিদিন শাকসবজি, ডাল, ডিম, ছোট মাছ ও দেশীয় ফল (পেয়ারা, আমলকী) খাবার তালিকায় রাখুন।
- চিকিৎসকের পরামর্শ অনুযায়ী আয়রন ও ক্যালসিয়ামের পরিপূরক গ্রহণ করুন।
- প্রতি মাসে অন্তত একবার রক্তচাপ ও ওজন পরীক্ষা করান।

শিশুদের পুষ্টি:
- জন্মের পর প্রথম ৬ মাস শিশুকে শুধুমাত্র মায়ের দুধ ছাড়া এক ফোঁটা পানি বা অন্য কিছু দেওয়ার প্রয়োজন নেই।
- ৬ মাস পূর্ণ হলে মায়ের দুধের পাশাপাশি চাল, ডাল, তেল ও সবজি দিয়ে তৈরি পুষ্টিকর খিচুড়ি খাওয়ানো শুরু করুন।`,
    },
    date: '2026-06-05',
    readTime: '4 min',
    author: 'Md. Anoarul Islam (DMA)',
  },
  {
    id: 'post-5',
    slug: 'diabetes-hypertension-basics',
    category: {
      en: 'Chronic Health',
      bn: 'দীর্ঘমেয়াদী রোগ',
    },
    title: {
      en: 'Managing High Blood Pressure & Diabetes in Village Life',
      bn: 'উচ্চ রক্তচাপ ও ডায়াবেটিস নিয়ন্ত্রণে দৈনন্দিন সতর্কতা',
    },
    summary: {
      en: 'Daily lifestyle modifications, reducing extra salt, taking prescribed medicines consistently, and regular blood pressure monitoring.',
      bn: 'লবণ খাওয়ার অভ্যাস বর্জন, ডাক্তারের নির্দেশিত ওষুধ নিয়মিত সেবন এবং প্রতি সপ্তাহে রক্তচাপ মাপার প্রয়োজনীয়তা।',
    },
    content: {
      en: `High blood pressure (hypertension) and diabetes are becoming increasingly prevalent in rural communities. Both can develop silently without immediate pain.

Key Golden Rules:
1. Cut out raw/table salt completely from meals.
2. Walk briskly for at least 30 minutes every morning or evening.
3. Never stop blood pressure medicines on your own simply because you 'feel better'. Blood pressure medicines maintain steady vascular protection.
4. Visit Rifat Pharmacy regularly to monitor your blood pressure and get blood glucose tested.`,
      bn: `উচ্চ রক্তচাপ ও ডায়াবেটিস কোনো লক্ষণ ছাড়াই মানুষের শরীরের মারাত্মক ক্ষতি করতে পারে।

নিয়মাবলী:
১. পাতে কাঁচা লবণ খাওয়া সম্পূর্ণ পরিহার করুন।
২. প্রতিদিন অন্তত ৩০ মিনিট দ্রুত হাঁটার অভ্যাস গড়ে তুলুন।
৩. ভালো লাগছে ভেবে কখনোই প্রেশার বা সুগারের ওষুধ নিজে থেকে বন্ধ করবেন না।
৪. সপ্তাহে অন্তত একবার রক্তচাপ মাপুন এবং ছয়ঘরিয়া বাজারে রিফাত ফার্মেসীতে এসে ডায়াবেটিস পরীক্ষা করিয়ে নিন।`,
    },
    date: '2026-05-18',
    readTime: '3 min',
    author: 'Md. Anoarul Islam (DMA)',
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Abdul Malek Sardar',
    village: {
      en: 'Chhoygharia, Satkhira Sadar',
      bn: 'ছয়ঘরিয়া, সাতক্ষীরা সদর',
    },
    treatment: {
      en: 'Fever & Respiratory Illness',
      bn: 'তীব্র জ্বর ও শ্বাসকষ্টের চিকিৎসা',
    },
    comment: {
      en: 'Anwar Bhai treated my severe viral fever and chest infection with extraordinary care. His guidance on home care and proper medicines helped me recover within days without unnecessary expense.',
      bn: 'আনোয়ার ভাই অত্যন্ত ধৈর্য ও যত্নের সাথে আমার তীব্র জ্বর ও কাশির চিকিৎসা করেছেন। সঠিক ওষুধ ও পরামর্শে আমি দ্রুত সুস্থ হয়েছি। গ্রামের মানুষের পরম ভরসার জায়গা।',
    },
    rating: 5,
    date: '2026-09-02',
    status: 'approved',
  },
  {
    id: 'test-2',
    name: 'Rasheda Begum',
    village: {
      en: 'Baikari Union, Satkhira',
      bn: 'বৈকারী ইউনিয়ন, সাতক্ষীরা',
    },
    treatment: {
      en: 'Antenatal & Infant Nutrition Care',
      bn: 'গর্ভকালীন পরামর্শ ও শিশুর পুষ্টি',
    },
    comment: {
      en: 'During my pregnancy, he continuously monitored my blood pressure and guided me on nutrition. When my baby had seasonal diarrhoea, his quick ORS and care guidance prevented hospitalization.',
      bn: 'আমার গর্ভকালীন সময়ে উনি নিয়মিত রক্তচাপ মেপে দিয়েছেন এবং পুষ্টিকর খাবারের পরামর্শ দিয়েছেন। শিশু অসুস্থ হলে ওনার চিকিৎসায় সবসময় শান্তি পেয়েছি।',
    },
    rating: 5,
    date: '2026-07-28',
    status: 'approved',
  },
  {
    id: 'test-3',
    name: 'Kawsar Ali Molla',
    village: {
      en: 'Chhoygharia Bazar, Satkhira',
      bn: 'ছয়ঘরিয়া বাজার, সাতক্ষীরা',
    },
    treatment: {
      en: 'Minor Surgery & Suture Wound Dressing',
      bn: 'ক্ষত সেলাই ও আধুনিক ড্রেসিং',
    },
    comment: {
      en: 'I suffered a deep farm tool laceration on my foot. Anwar Bhai cleaned it aseptically, performed sterile bandaging and tetanus care. It healed cleanly without any infection. Highly dependable practitioner.',
      bn: 'জমিতে কাজের সময় আমার পা কেটে গিয়েছিল। উনি অত্যন্ত পরিষ্কার ও জীবাণুমুক্তভাবে ড্রেসিং ও টিটেনাসের ব্যবস্থা করেন। কোনো ইনফেকশন ছাড়াই ক্ষত সেরে উঠেছে।',
    },
    rating: 5,
    date: '2026-06-14',
    status: 'approved',
  },
  {
    id: 'test-4',
    name: 'Master Hafizur Rahman',
    village: {
      en: 'Baikari High School Road, Satkhira',
      bn: 'বৈকারী হাই স্কুল রোড, সাতক্ষীরা',
    },
    treatment: {
      en: 'Hypertension Monitoring & Medicine Guidance',
      bn: 'উচ্চ রক্তচাপ পর্যবেক্ষণ ও ওষুধের পরামর্শ',
    },
    comment: {
      en: 'As a retired teacher with chronic blood pressure, Rifat Pharmacy is my trusted center. Anwarul Islam explains every medicine carefully and always checks my BP with warmth and respect.',
      bn: 'অবসরপ্রাপ্ত শিক্ষক হিসেবে রিফাত ফার্মেসী আমার নিয়মিত স্বাস্থ্যসেবা কেন্দ্র। আনোয়ারুল ইসলাম প্রতিটি ওষুধের নিয়ম সুন্দরভাবে বুঝিয়ে দেন এবং অত্যন্ত বিনয়ী।',
    },
    rating: 5,
    date: '2026-05-08',
    status: 'approved',
  },
];

export const initialClinicalServices: ClinicalServiceItem[] = [
  {
    id: 'hijama-cupping',
    slug: 'hijama-cupping-therapy',
    order: 1,
    isVisible: true,
    category: {
      en: 'Complementary Therapy',
      bn: 'পরিপূরক থেরাপি',
    },
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Hijama (Cupping Therapy)',
      bn: 'হিজামা (কাপিং থেরাপি)',
    },
    summary: {
      en: 'A traditional complementary therapy using sterile, single-use vacuum cups to stimulate local blood circulation and ease chronic muscular tension.',
      bn: 'সম্পূর্ণ জীবাণুমুক্ত ওয়ান-টাইম কাপের মাধ্যমে রক্তসঞ্চালন বৃদ্ধি ও মাংসপেশির দীর্ঘস্থায়ী ক্লান্তি উপশমে ঐতিহ্যবাহী পরিপূরক থেরাপি।',
    },
    fullDescription: {
      en: 'Hijama is a recognized traditional and complementary therapy practiced worldwide. Under strict hygienic clinical protocols, sterile disposable cups create gentle negative pressure on designated points of the body (typically the upper back, shoulders, or neck) to encourage micro-circulation and relieve deep muscular stiffness. Every session uses brand-new, factory-sealed cups and single-use sterile lancets that are safely disposed of in sharps containers immediately after use. Each session lasts approximately 30 to 45 minutes.',
      bn: 'হিজামা একটি প্রাচীন ও কার্যকর পরিপূরক থেরাপি যা স্বাস্থ্যসম্মত পরিবেশে শরীরে রক্তসঞ্চালন বৃদ্ধিতে সহায়তা করে। প্রতিটি সেশনে শতভাগ জীবাণুমুক্ত ওয়ান-টাইম কাপ এবং ডিসপোজেবল ল্যানসেট ব্যবহার করা হয়, যা একবার ব্যবহারের পরই নিয়মমাফিক বিনষ্ট করা হয়। এটি সাধারণত পিঠ, কাঁধ ও ঘাড়ের নির্দিষ্ট পয়েন্টে মৃদু সাকশনের মাধ্যমে প্রয়োগ করা হয়। একটি সেশনে প্রায় ৩০ থেকে ৪৫ মিনিট সময় লাগে।',
    },
    note: {
      en: 'Complementary therapy; not a replacement for mainstream medical treatment or emergency care.',
      bn: 'হিজামা একটি পরিপূরক থেরাপি; এটি কোনো মূল চিকিৎসাব্যবস্থা বা জরুরি চিকিৎসার বিকল্প নয়।',
    },
    highlights: {
      en: ['100% Brand-New Cups', 'Disposable Sterile Blades', 'Vital Signs Check First', 'Safe Antiseptic Dressing'],
      bn: ['১০০% নতুন সিলপ্যাক কাপ', 'ওয়ান-টাইম জীবাণুমুক্ত ব্লেড', 'পূর্বে প্রেশার ও পালস পরীক্ষা', 'নিরাপদ অ্যান্টিসেপটিক ব্যান্ডেজ'],
    },
    whoItIsFor: {
      en: [
        'Adults experiencing chronic muscle stiffness in the back, neck, or shoulders',
        'Individuals seeking complementary stress relief and localized circulation support',
        'Patients who have completed a clinical vitals check with normal blood pressure',
      ],
      bn: [
        'পিঠ, কাঁধ ও ঘাড়ের দীর্ঘস্থায়ী মাংসপেশির টান বা ক্লান্তিতে ভোগা প্রাপ্তবয়স্ক ব্যক্তি',
        'রক্ত সঞ্চালন ও ক্লান্তি উপশমে স্বাস্থ্যসম্মত পরিপূরক সেবা প্রত্যাশী',
        'শারীরিক চেকআপে রক্তচাপ ও পালস স্বাভাবিক থাকা ব্যক্তি',
      ],
    },
    contraindications: {
      en: [
        'Pregnant women',
        'Individuals taking blood-thinning medications (anticoagulants / antiplatelets)',
        'Known bleeding disorders or severe haemophilia',
        'Severe anaemia, extreme frailty, or acute dehydration',
        'Uncontrolled diabetes mellitus or severely high blood pressure',
        'Active skin infections, open wounds, burns, or rashes at application sites',
      ],
      bn: [
        'গর্ভবতী নারী',
        'রক্ত পাতলা রাখার ওষুধ (অ্যাসপিরিন/ক্লোপিডোগ্রেল ইত্যাদি) সেবনকারী ব্যক্তি',
        'রক্তক্ষরণ জনিত রোগ বা হিমোফিলিয়ায় আক্রান্ত রোগী',
        'তীব্র রক্তশূন্যতা বা অতিরিক্ত শারীরিক দুর্বলতা',
        'অনিয়ন্ত্রিত ডায়াবেটিস বা অতিরিক্ত উচ্চ রক্তচাপ',
        'শরীরের প্রস্তাবিত স্থানে ত্বকের সংক্রমণ, ক্ষত, পোড়া বা চর্মরোগ',
      ],
    },
    howItWorksSteps: [
      {
        step: 1,
        title: { en: 'Clinical Vitals & Screening', bn: 'প্রাথমিক পরীক্ষা ও রক্তচাপ নির্ণয়' },
        desc: {
          en: 'Checking blood pressure, pulse, medical history, and confirming no contraindications exist.',
          bn: 'রক্তচাপ, নাড়ির গতি ও পূর্ববর্তী রোগের ইতিহাস পরীক্ষা করে হিজামার উপযুক্ততা নিশ্চিত করা হয়।',
        },
      },
      {
        step: 2,
        title: { en: 'Hospital-Grade Skin Cleansing', bn: 'জীবাণুমুক্ত ত্বক প্রস্তুতি' },
        desc: {
          en: 'The designated points are thoroughly sanitized using hospital-grade antiseptic solution.',
          bn: 'চিকিৎসার স্থানটি মেডিকেল গ্রেড অ্যান্টিসেপটিক দ্রবণ দিয়ে সম্পূর্ণ জীবাণুমুক্ত করা হয়।',
        },
      },
      {
        step: 3,
        title: { en: 'Sterile Cup Application', bn: 'ওয়ান-টাইম কাপ স্থাপন' },
        desc: {
          en: 'Brand-new vacuum-sealed cups are placed for gentle suction for 3 to 5 minutes, followed by micro-punctures if wet cupping is chosen.',
          bn: 'নতুন সিলপ্যাক কাপ স্থাপন করে মৃদু সাকশন তৈরি করা হয়। ওয়েট কাপিংয়ের ক্ষেত্রে নতুন ল্যানসেট দিয়ে হালকা মাইক্রো-স্ক্র্যাচ দেওয়া হয়।',
        },
      },
      {
        step: 4,
        title: { en: 'Antiseptic Dressing & Rest', bn: 'ড্রেসিং ও বিশ্রাম' },
        desc: {
          en: 'The area is disinfected, soothing antiseptic cream applied, and light sterile dressing placed with written after-care instructions.',
          bn: 'স্থানটি পুনরায় অ্যান্টিসেপটিক দিয়ে পরিষ্কার করে ড্রেসিং করা হয় এবং পরিচর্যা নির্দেশিকা বুঝিয়ে দেওয়া হয়।',
        },
      },
    ],
    beforeProcedure: {
      en: [
        'Eat a light meal 2 to 3 hours prior; avoid undergoing sessions on a completely empty or heavily full stomach',
        'Drink plenty of clean water to maintain healthy hydration',
        'Disclose all current medications and chronic conditions truthfully',
        'Shower prior to your appointment; wear loose, comfortable cotton clothing',
      ],
      bn: [
        'সেশনের ২-৩ ঘণ্টা আগে হালকা খাবার খান; একদম খালি পেটে বা অতিরিক্ত ভরা পেটে আসবেন না',
        'পর্যাপ্ত পরিমাণে বিশুদ্ধ পানি পান করে শরীর আর্দ্র রাখুন',
        'আপনার নিয়মিত সেবন করা সব ওষুধের তালিকা ও পূর্বের রোগ সম্পর্কে সত্য তথ্য দিন',
        'আসার পূর্বে গোসল করে পরিষ্কার ও ঢিলেঢালা সুতি পোশাক পরিধান করুন',
      ],
    },
    afterCare: {
      en: [
        'Keep the treated areas clean and dry; avoid bathing or swimming for 12 to 24 hours',
        'Avoid strenuous physical labour or heavy gym workouts for the first 24 hours',
        'Stay well hydrated with warm water, herbal tea, and nutritious light food',
        'Do not scratch or vigorously rub the circular suction marks as they fade naturally within 5 to 10 days',
      ],
      bn: [
        'হিজামার স্থান পরিষ্কার ও শুকনো রাখুন; প্রথম ১২-২৪ ঘণ্টা গোসল বা পানিতে ভেজা থেকে বিরত থাকুন',
        'প্রথম ২৪ ঘণ্টা ভারী পরিশ্রম বা অতিরিক্ত শরীরচর্চা পরিহার করুন',
        'পর্যাপ্ত কুসুম গরম পানি, স্যুপ বা পুষ্টিকর হালকা খাবার গ্রহণ করুন',
        'কাপিংয়ের দাগ ৫-১০ দিনের মধ্যে স্বাভাবিকভাবে মিলিয়ে যায়, সেখানে নখ দিয়ে চুলকাবেন না',
      ],
    },
    whenToSeeHospital: {
      en: [
        'Persistent dizzy spells or fainting sensation that does not improve with rest',
        'Spreading redness, swelling, increased heat, or yellowish pus at puncture sites',
        'Uncontrolled fever starting within 24 to 48 hours after a session',
      ],
      bn: [
        'বিশ্রাম নেওয়ার পরও দীর্ঘক্ষণ মাথা ঘোরা বা দুর্বলতা না কমা',
        'চিকিৎসার স্থানে অতিরিক্ত লালচে ফোলা ভাব, তীব্র ব্যথা বা পুঁজ দেখা দেওয়া',
        '২৪ থেকে ৪৮ ঘণ্টার মধ্যে কাঁপুনি দিয়ে উচ্চ জ্বর আসা',
      ],
    },
    estimatedDuration: {
      en: '30 – 45 Minutes',
      bn: '৩০ – ৪৫ মিনিট',
    },
    costRange: {
      en: 'Affordable rural clinic pricing based on cups required',
      bn: 'কাপের সংখ্যার ওপর ভিত্তি করে সাশ্রয়ী গ্রামীণ ক্লিনিক ফি',
    },
  },
  {
    id: 'polyps-piles',
    slug: 'removal-polyps-piles',
    order: 2,
    isVisible: true,
    category: {
      en: 'Minor Procedure & Anorectal Care',
      bn: 'মাইনর প্রসিডিউর ও পলিপ কেয়ার',
    },
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Removal of Polyps & Care of Piles',
      bn: 'পাইলস ও পলিপস পরিচর্যা ও অপসারণ',
    },
    summary: {
      en: 'Proper clinical assessment first; dignified evaluation and trained minor procedure for accessible benign polyps and early-stage piles, with dietary and sitz-bath protocols.',
      bn: 'প্রথমে সঠিক শারীরিক মূল্যায়ন; প্রাথমিক পাইলস ও নিরীহ পলিপসের নিরাপদ মাইনর পরিচর্যা, খাদ্যাভ্যাস পরিবর্তন ও সিটজ বাথ পরামর্শ।',
    },
    fullDescription: {
      en: 'Piles (haemorrhoids) are swollen vascular cushions in the lower rectum or anus, primarily aggravated by chronic constipation, low dietary fibre, or prolonged straining. Symptoms typically include bright red rectal spotting, anal itching, and protruding tissue during bowel movements. Polyps are small, usually benign projections from mucous membranes (such as accessible nasal polyps or low anal skin tags). In our clinic, every case undergoes careful, respectful physical inspection to ascertain the grade and anatomical stage. Minor procedures using gentle local anaesthesia or ligating bands are conducted only when clinically safe. Patients receive comprehensive dietary counselling, hydration guidelines, and warm sitz bath protocols.',
      bn: 'পাইলস (অর্শ) হলো মলদ্বারের রক্তনালীর স্ফীতি, যা মূলত দীর্ঘদিনের কোষ্ঠকাঠিন্য ও মলত্যাগে অতিরিক্ত চাপের ফলে সৃষ্টি হয়। এর সাধারণ লক্ষণ হলো রক্ত যাওয়া, মলদ্বারে মাংসপিণ্ড ফোলা ও অস্বস্তি। অন্যদিকে পলিপস হলো শ্লৈষ্মিক ঝিল্লির ছোট নির্দোষ মাংসল বৃদ্ধি। আমাদের চেম্বারে রোগীর অবস্থা পুঙ্খানুপুঙ্খ পরীক্ষা করে গ্রেড নির্ধারণ করা হয়। উপযুক্ত ক্ষেত্রে মৃদু লোকাল অ্যানেসথেসিয়ার মাধ্যমে ছোট পলিপ বা পাইলসের নিরাপদ মাইনর অপসারণ বা বাঁধন সম্পন্ন করা হয়। সাথে উচ্চ আঁশযুক্ত খাবার, পর্যাপ্ত পানি ও সিটজ বাথের সুস্পষ্ট নিয়ম বুঝিয়ে দেওয়া হয়।',
    },
    note: {
      en: 'Thorough clinical assessment precedes any procedure. Severe, 3rd/4th degree prolapsed piles or complicated internal polyps are referred to a specialized colorectal surgeon at hospital.',
      bn: 'যেকোনো পদক্ষেপের পূর্বে শারীরিক পরীক্ষা বাধ্যতামূলক। জটিল ৩য় বা ৪র্থ গ্রেডের পাইলস এবং অভ্যন্তরীণ গভীর পলিপ সরাসরি হাসপাতালের সার্জনের কাছে রেফার করা হয়।',
    },
    highlights: {
      en: ['Dignified Examination', 'Local Anaesthesia Where Indicated', 'Dietary & Fibre Counseling', 'Hospital Referral Network'],
      bn: ['সম্মানজনক ব্যক্তিগত পরীক্ষা', 'প্রয়োজনে লোকাল অবশ', 'আঁশযুক্ত খাবার ও পানি পরামর্শ', 'হাসপাতালে দ্রুত রেফারেল ব্যবস্থা'],
    },
    whoItIsFor: {
      en: [
        'Patients with early-stage non-strangulated piles causing mild bleeding or discomfort',
        'Individuals with small, visible, accessible benign mucosal polyps or tags',
        'Patients needing dietary management and conservative medical relief for anal fissures/piles',
      ],
      bn: [
        'প্রাথমিক পর্যায়ের পাইলস যাতে সামান্য রক্তপাত বা অস্বস্তি দেখা দিচ্ছে',
        'ত্বক বা শ্লৈষ্মিক ঝিল্লির উপরিভাগে দৃশ্যমান ছোট নির্দোষ পলিপস',
        'কোষ্ঠকাঠিন্য ও পাইলসের দীর্ঘমেয়াদি খাদ্যাভ্যাসগত সমাধান প্রত্যাশী রোগী',
      ],
    },
    howItWorksSteps: [
      {
        step: 1,
        title: { en: 'Private Clinical Assessment', bn: 'ব্যক্তিগত শারীরিক পর্যবেক্ষণ' },
        desc: {
          en: 'Assessing severity, staging, bleeding frequency, and checking for red flags.',
          bn: 'রোগের গ্রেড, রক্তপাতের ধরন ও তীব্রতা পর্যবেক্ষণ করে উপযুক্ত চিকিৎসার সিদ্ধান্ত গ্রহণ।',
        },
      },
      {
        step: 2,
        title: { en: 'Preparation & Local Anaesthesia', bn: 'প্রস্তুতি ও লোকাল অবশ' },
        desc: {
          en: 'Sanitizing the area with sterile antiseptic and applying gentle local anaesthetic for comfort.',
          bn: 'এলাকাটি অ্যান্টিসেপটিক দিয়ে পরিষ্কার করে ব্যথামুক্ত রাখার জন্য লোকাল অ্যানেসথেসিয়া প্রয়োগ।',
        },
      },
      {
        step: 3,
        title: { en: 'Minor Procedure', bn: 'পরিমিত মাইনর প্রসিডিউর' },
        desc: {
          en: 'Safe excision or band ligation of the accessible polyp/haemorrhoid using sterile single-use instruments.',
          bn: 'জীবাণুমুক্ত সরঞ্জামের মাধ্যমে ছোট পলিপ বা পাইলসের মাইনর অপসারণ বা ব্যান্ডিং সম্পন্ন করা।',
        },
      },
      {
        step: 4,
        title: { en: 'Aftercare & Sitz Bath Protocol', bn: 'সিটজ বাথ ও পরিচর্যা' },
        desc: {
          en: 'Providing written dietary fiber instructions, stool-softener advice, and sitz-bath schedule.',
          bn: 'কুসুম গরম পানিতে সিটজ বাথ, ইসবগুল/উচ্চ আঁশযুক্ত খাবার ও মল নরম রাখার সঠিক নির্দেশনা।',
        },
      },
    ],
    beforeProcedure: {
      en: [
        'Take a warm shower before attending the clinic',
        'Pass bowel movements if possible; avoid harsh laxatives immediately before coming',
        'Wear loose, comfortable cotton pants or lungi',
        'Inform practitioner about any ongoing blood-thinning pills or aspirin',
      ],
      bn: [
        'ক্লিনিকে আসার আগে কুসুম গরম পানিতে গোসল বা পরিষ্কার হয়ে আসুন',
        'সম্ভব হলে পেট হালকা রাখুন; আসার ঠিক আগে কড়া জোলাপ খাবেন না',
        'ঢিলেঢালা আরামদায়ক সুতি প্যান্ট বা লুঙ্গি পরিধান করুন',
        'রক্ত পাতলা রাখার ওষুধ সেবন করলে অবশ্যই আগে থেকেই জানান',
      ],
    },
    afterCare: {
      en: [
        'Perform warm water sitz baths (soaking in clean warm water for 15 minutes) twice daily',
        'Drink at least 2.5 to 3 liters of safe boiled/filtered water every day',
        'Include plentiful green leafy vegetables, papaya, isabgol husk, and fiber to prevent constipation',
        'Strictly avoid straining during bowel movements; do not sit on the toilet for more than 5 minutes',
      ],
      bn: [
        'দিনে দুইবার বোলে কুসুম গরম পানিতে ১৫ মিনিট বসে সিটজ বাথ নিন',
        'প্রতিদিন অন্তত আড়াই থেকে তিন লিটার নিরাপদ পানি পান করুন',
        'শাকসবজি, পাকা পেঁপে ও ইসবগুলের ভুসি খেয়ে পেট নরম রাখুন',
        'মলত্যাগের সময় কোনোভাবেই অতিরিক্ত চাপ বা কোঁথ দেবেন না',
      ],
    },
    whenToSeeHospital: {
      en: [
        'Heavy continuous rectal bleeding filling the toilet bowl or causing paleness and fainting',
        'Severe excruciating anorectal pain or dark purple strangulated swollen mass',
        'High body temperature above 101°F with chills or foul purulent discharge',
        'Inability to pass urine (acute urinary retention)',
      ],
      bn: [
        'একটানা বা অতিরিক্ত রক্তপাত হওয়া যার ফলে রোগী ফ্যাকাসে বা অজ্ঞান হয়ে যেতে পারে',
        'মলদ্বারে অসহ্য তীব্র ব্যথা বা কালো/বেগুনী রঙের বড় স্ফীতি যা ভেতরে ঢুকছে না',
        'কাঁপুনি দিয়ে ১০১° ডিগ্রির বেশি উচ্চ জ্বর বা দুর্গন্ধযুক্ত পুঁজ নির্গমন',
        'প্রস্রাব আটকে যাওয়া বা প্রস্রাবে তীব্র জ্বালাপোড়া ও কষ্ট',
      ],
    },
    estimatedDuration: {
      en: '25 – 40 Minutes',
      bn: '২৫ – ৪০ মিনিট',
    },
    costRange: {
      en: 'Transparent rural rates discussed prior to procedure',
      bn: 'চিকিৎসা শুরুর পূর্বেই স্বচ্ছ ও সাশ্রয়ী ফি নির্ধারণ',
    },
  },
  {
    id: 'tumors-lumps',
    slug: 'removal-superficial-tumors',
    order: 3,
    isVisible: true,
    category: {
      en: 'Minor Excision & Cyst Care',
      bn: 'মাইনর এক্সিশন ও সিস্ট কেয়ার',
    },
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Removal of Tumors (Superficial Lumps & Cysts)',
      bn: 'ত্বকের ছোট টিউমার ও সিস্ট অপসারণ',
    },
    summary: {
      en: 'Clinical examination and safe removal of small, superficial lumps like lipomas and sebaceous cysts. Suspicious, deep, or rapidly growing lumps are strictly referred to hospital surgeons.',
      bn: 'ত্বকের উপরিভাগের ছোট ও নির্দোষ লাইপোমা বা সিস্টের নিরাপদ মাইনর অপসারণ। সন্দেহজনক বা দ্রুত বর্ধনশীল টিউমার সরাসরি হাসপাতালে রেফার করা হয়।',
    },
    fullDescription: {
      en: 'Many patients develop small, mobile, slow-growing lumps beneath the skin, most frequently benign lipomas (harmless fatty growths) or epidermoid/sebaceous cysts. After careful physical examination to confirm that the lump is completely superficial, benign in character, and freely movable, minor excision under local anaesthetic is performed in our sterile minor procedure room. The capsule or sac is meticulously removed to prevent recurrence, followed by neat layered suturing and protective dressing. Important rule: Any lump that is deep, fixed to underlying muscles, hard, pulsating, rapidly enlarging, or painful is strictly not excised in clinic and is immediately referred to a hospital surgeon, with biopsy laboratory testing advised.',
      bn: 'শরীরের ত্বকের নিচে তৈরি হওয়া ছোট ও ধীরে ধীরে বাড়া নিরীহ মাংসপিণ্ড যেমন লাইপোমা (চর্বির দলা) কিংবা সেবেসিয়াস সিস্টের নিরাপদ অপসারণ। সম্পূর্ণ শারীরিক পরীক্ষার মাধ্যমে যখন নিশ্চিত হওয়া যায় যে টিউমারটি ত্বকের উপরিভাগে এবং নির্দোষ, তখন জীবাণুমুক্ত পরিবেশে লোকাল অ্যানেসথেসিয়ার মাধ্যমে ছোট ছিদ্র বা কাটার মাধ্যমে সিস্টের ভেতরের আবরণ সহ নিখুঁতভাবে বের করা হয়। নিয়ম: কোনো মাংসপিণ্ড যদি দ্রুত বাড়ে, শক্ত বা নিচের মাংসপেশির সাথে আটকে থাকে, তবে তা ক্লিনিকে না কেটে সরাসরি হাসপাতালে রেফার করা হয় এবং হিস্টোপ্যাথলজি/বায়োপসির পরামর্শ দেওয়া হয়।',
    },
    note: {
      en: 'Only small, clearly benign, superficial lumps are managed in clinic. Deep, hard, rapidly enlarging, or suspicious growths must be referred to a hospital or surgeon for biopsy.',
      bn: 'শুধুমাত্র ছোট ও ত্বকের উপরিভাগের নির্দোষ সিস্ট ক্লিনিকে অপসারণযোগ্য। গভীর, শক্ত বা সন্দেহজনক টিউমার অবশ্যই হাসপাতালে বায়োপসির জন্য পাঠানো হয়।',
    },
    highlights: {
      en: ['Physical Margin Examination', 'Local Anaesthetic', 'Full Capsule Removal', 'Hospital Biopsy Referral When Indicated'],
      bn: ['পুঙ্খানুপুঙ্খ ক্লিনিক্যাল পরীক্ষা', 'লোকাল অ্যানেসথেসিয়া', 'সম্পূর্ণ সিস্টের থলে অপসারণ', 'প্রয়োজনে হাসপাতালে বায়োপসি রেফারেল'],
    },
    whoItIsFor: {
      en: [
        'Patients with small, cosmetically bothersome, painless superficial lipomas',
        'Individuals with non-infected or repeatedly discharging sebaceous cysts',
        'Patients who have had the lump evaluated and confirmed to be completely benign',
      ],
      bn: [
        'ত্বকের ঠিক নিচে থাকা ছোট, বেদনাহীন নির্দোষ চর্বির দলা (লাইপোমা)',
        'তেলগ্রন্থির বন্ধ হওয়া ছোট সিস্ট যা অস্বস্তি তৈরি করছে',
        'শারীরিক পরীক্ষায় নির্দোষ প্রমাণিত ত্বকের উপরিভাগের মাংসপিণ্ড',
      ],
    },
    howItWorksSteps: [
      {
        step: 1,
        title: { en: 'Clinical Palpation & Assessment', bn: 'শারীরিক পরীক্ষা ও অবস্থান নির্ণয়' },
        desc: {
          en: 'Examining lump mobility, consistency, edges, depth, and ruling out malignancy red flags.',
          bn: 'টিউমারটির গভীরতা, শক্তভাব ও নড়াচড়া পরীক্ষা করে এটি মাইনর অপারেশনের উপযোগী কি না তা যাচাই।',
        },
      },
      {
        step: 2,
        title: { en: 'Aseptic Preparation & Local Anaesthetic', bn: 'জীবাণুমুক্তকরণ ও অবশ' },
        desc: {
          en: 'Skin is prepared with povidone-iodine and local anaesthetic injected around the margins.',
          bn: 'অ্যান্টিসেপটিক দিয়ে স্থানটি ধুয়ে লোকাল ইনজেকশনের মাধ্যমে জায়গাটি সম্পূর্ণ ব্যথামুক্ত করা।',
        },
      },
      {
        step: 3,
        title: { en: 'Careful Excision & Capsule Clearance', bn: 'সিস্টের থলে সহ অপসারণ' },
        desc: {
          en: 'Meticulous dissection of the lump including intact capsule to prevent recurrence.',
          bn: 'পুনরায় টিউমার হওয়া রোধে সিস্টের পুরো আবরণী বা থলে সতর্কতার সাথে অপসারণ।',
        },
      },
      {
        step: 4,
        title: { en: 'Neat Suturing & Sterile Dressing', bn: 'পরিপাটি সেলাই ও ব্যান্ডেজ' },
        desc: {
          en: 'Closure with fine sutures, antibiotic ointment application, and clear dressing schedule.',
          bn: 'সূক্ষ্ম সেলাইয়ের মাধ্যমে ক্ষত বন্ধ করে জীবাণুমুক্ত ব্যান্ডেজ ও ড্রেসিংয়ের সময়সূচি প্রদান।',
        },
      },
    ],
    beforeProcedure: {
      en: [
        'Clean the area thoroughly with soap and water before coming',
        'Do not apply unverified lotions, oils, or herbal pastes on the lump',
        'Wear loose clothing that allows easy access to the procedure area',
        'Inform the practitioner of any allergy to local anaesthetics (xylocaine/lidocaine)',
      ],
      bn: [
        'আসার পূর্বে টিউমারের আশপাশের জায়গা সাবান-পানি দিয়ে পরিষ্কার করে আসুন',
        'স্থানটিতে কোনো ধরনের মলম, তেল বা অননুমোদিত কবিরাজি ভেষজ লাগাবেন না',
        'সহজে খোলা যায় এমন ঢিলেঢালা পোশাক পরিধান করুন',
        'পূর্বে কোনো লোকাল অবশের ওষুধে এলার্জি থাকলে অবশ্যই জানান',
      ],
    },
    afterCare: {
      en: [
        'Keep the surgical dressing dry and clean; do not wet the area for 48 hours',
        'Take prescribed pain relief and antibiotics strictly as directed',
        'Return to clinic on designated day (typically 7 to 10 days) for suture removal',
        'Avoid lifting heavy loads or putting stretching strain on the sutured wound',
      ],
      bn: [
        'ক্ষতের ব্যান্ডেজ শুকনো রাখুন; প্রথম ৪৮ ঘণ্টা পানি লাগাবেন না',
        'নির্দেশিত ব্যথানাশক ও অ্যান্টিবায়োটিক নিয়ম মেনে সম্পূর্ণ কোর্স শেষ করুন',
        '৭ থেকে ১০ দিন পর সেলাই কাটার জন্য চেম্বারে আসুন',
        'সেলাইয়ের স্থানে টান লাগতে পারে এমন ভারী কাজ বা ওজন ওঠানো থেকে বিরত থাকুন',
      ],
    },
    whenToSeeHospital: {
      en: [
        'Lump that grows rapidly over days or weeks',
        'Hard, non-mobile lump firmly attached to deeper bone or muscle tissues',
        'Sudden severe bleeding from wound soaking through multiple thick bandages',
        'High fever, red streaking, or throbbing wound pain suggesting deep infection',
      ],
      bn: [
        'মাংসপিণ্ডটি যদি কয়েক সপ্তাহ বা দিনে খুব দ্রুত বড় হতে থাকে',
        'টিউমারটি যদি শক্ত এবং হাড় বা মাংসপেশির সাথে আটকে থাকে (নড়াচড়া না করে)',
        'ব্যান্ডেজ ভিজে রক্ত উপচে পড়া বা রক্তপাত বন্ধ না হওয়া',
        'উচ্চ জ্বর, লালচে দাগ ছড়িয়ে পড়া বা ক্ষতস্থানে তীব্র দপদপানি ব্যথা',
      ],
    },
    estimatedDuration: {
      en: '30 – 45 Minutes',
      bn: '৩০ – ৪৫ মিনিট',
    },
    costRange: {
      en: 'Nominal rural fee covering sterile consumables and follow-up suture removal',
      bn: 'সেলাই ও ফলো-আপ সহ সাশ্রয়ী ও স্পষ্ট গ্রামীণ সেবা মূল্য',
    },
  },
  {
    id: 'warts-removal',
    slug: 'removal-warts-papillomas',
    order: 4,
    isVisible: true,
    category: {
      en: 'Dermatological Minor Care',
      bn: 'ত্বকের মাইনর কেয়ার',
    },
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Removal of Warts & Skin Tags',
      bn: 'আঁচিল ও স্কিন ট্যাগ অপসারণ',
    },
    summary: {
      en: 'Safe removal of viral skin warts and skin tags. Patients are guided on healing, skin hygiene, scar prevention, and the viral nature of warts (recurrence possibility).',
      bn: 'হাত, পা ও ত্বকের আঁচিল এবং স্কিন ট্যাগের নিরাপদ অপসারণ। দাগহীন নিরাময়, স্বাস্থ্যবিধি এবং আঁচিল পুনরাবৃত্তির সম্ভাব্যতা সম্পর্কে বাস্তবসম্মত পরামর্শ।',
    },
    fullDescription: {
      en: 'Warts (verrucae) are benign epidermal growths caused by strains of the human papillomavirus (HPV). They often appear on the hands, fingers, soles of the feet, neck, or face, and can spread if scratched, picked, or irritated. In our clinic, each lesion is examined to ensure it is a benign wart or skin tag and not a suspicious mole or pigmented lesion. Removal is carried out using precise minor techniques or targeted hygienic cauterization under topical/local anaesthetic. Depending on the size and quantity, 1 to 2 visits may be required. We provide clear post-treatment skin healing protocols. Crucially, we maintain honest patient communication: because warts are viral in origin, they can occasionally recur if viral particles remain in the surrounding skin or during periods of reduced immunity.',
      bn: 'আঁচিল হলো হিউম্যান প্যাপিলোমাভাইরাস (HPV) জনিত ত্বকের নিরীহ মাংসল বৃদ্ধি, যা সচরাচর হাত, পা, ঘাড়, গলা বা মুখের ত্বকে দেখা যায়। চুলকানো বা নখ দিয়ে খোঁটার ফলে এটি এক স্থান থেকে অন্য স্থানে ছড়াতে পারে। ক্লিনিকে পরীক্ষা করে নিশ্চিত হওয়া হয় যে এটি আঁচিল বা স্কিন ট্যাগ (কোনো বিপজ্জনক তিল বা মেলানোমা নয়)। এরপর জীবাণুমুক্ত উপায়ে ও লোকাল অবশের মাধ্যমে দাগমুক্তভাবে অপসারণ করা হয়। আঁচিলের সংখ্যা অনুযায়ী ১-২টি সেশনের প্রয়োজন হতে পারে। এছাড়া রোগীকে খোলাখুলিভাবে জানানো হয় যে, যেহেতু এটি ভাইরাসজনিত, তাই ভবিষ্যতে রোগ প্রতিরোধ ক্ষমতা কমে গেলে পুনরায় আঁচিল হওয়ার কিছুটা সম্ভাবনা থাকতে পারে।',
    },
    note: {
      en: 'Pigmented moles, irregular dark spots, or bleeding birthmarks are not excised and must be evaluated by a dermatologist or hospital doctor.',
      bn: 'কালো বা আঁকাবাঁকা রঙের তিল ও রক্তক্ষরণকারী জন্মদাগ ক্লিনিকে কাটা হয় না; এগুলো বিশেষজ্ঞ চিকিৎসকের কাছে পাঠানো হয়।',
    },
    highlights: {
      en: ['Topical / Local Comfort', 'Minimal Scarring Protocol', 'Skin Hygiene Guidance', 'Realistic Recurrence Counseling'],
      bn: ['ব্যথাহীন লোকাল কেয়ার', 'দাগমুক্ত নিরাময় পদ্ধতি', 'ত্বকের সঠিক স্বাস্থ্যবিধি', 'পুনরাবৃত্তির বাস্তবসম্মত দিকনির্দেশনা'],
    },
    whoItIsFor: {
      en: [
        'Individuals with common skin warts on fingers, hands, feet, or limbs',
        'People bothered by friction from benign neck, armpit, or facial skin tags',
        'Patients who have tried over-the-counter lotions without success',
      ],
      bn: [
        'হাত, পা বা শরীরে সাধারণ আঁচিল থাকা ব্যক্তি',
        'ঘাড়, বগল বা মুখের বিরক্তিকর স্কিন ট্যাগ অপসারণে আগ্রহী ব্যক্তি',
        'ঘরোয়া বা সাধারণ ওষুধে ভালো না হওয়া সাধারণ আঁচিলের রোগী',
      ],
    },
    howItWorksSteps: [
      {
        step: 1,
        title: { en: 'Lesion Inspection & Confirmation', bn: 'আঁচিল পরীক্ষা ও নিশ্চিতকরণ' },
        desc: {
          en: 'Confirming benign viral wart or skin tag; ruling out atypical pigmented lesions.',
          bn: 'আঁচিলের ধরন ও সংখ্যা পর্যবেক্ষণ করে এটি নিরাপদ কি না তা নিশ্চিত করা।',
        },
      },
      {
        step: 2,
        title: { en: 'Antiseptic Cleansing & Anesthesia', bn: 'জীবাণুমুক্তকরণ ও অবশ' },
        desc: {
          en: 'Cleaning with surgical antiseptic and applying topical numbing or local infiltration.',
          bn: 'অ্যান্টিসেপটিক দিয়ে স্থানটি ধুয়ে লোকাল বা টপিক্যাল স্প্রে/ইনজেকশন দিয়ে অবশ করা।',
        },
      },
      {
        step: 3,
        title: { en: 'Precise Minor Excision', bn: 'নিখুঁত মাইনর অপসারণ' },
        desc: {
          en: 'Gentle, sterile removal of the base to eliminate the root while sparing healthy skin.',
          bn: 'সুনির্দিষ্ট মাইনর টেকনিকে আঁচিলটির গোড়া সহ আলতোভাবে তুলে আনা।',
        },
      },
      {
        step: 4,
        title: { en: 'Protective Antiseptic Dressing', bn: 'অ্যান্টিসেপটিক ড্রেসিং' },
        desc: {
          en: 'Applying soothing antibiotic ointment and dry protective dressing with care advice.',
          bn: 'অ্যান্টিবায়োটিক মলম লাগিয়ে ড্রেসিং ও ত্বকের যত্নের নিয়ম বুঝিয়ে দেওয়া।',
        },
      },
    ],
    beforeProcedure: {
      en: [
        'Wash the area gently with soap and water prior to your visit',
        'Do not cut, scratch, burn, or apply acid or battery water to the warts at home',
        'List any skin allergies or history of keloid scar formation',
      ],
      bn: [
        'আসার আগে স্থানটি সাবান ও পরিষ্কার পানি দিয়ে ধুয়ে আসুন',
        'বাসায় বসে ব্লেড দিয়ে কাটা, চুন, এসিড বা ব্যাটারির পানি লাগানোর মতো বিপজ্জনক কাজ করবেন না',
        'ত্বকে অতিরিক্ত কেলয়েড বা উঁচু দাগ হওয়ার প্রবণতা থাকলে জানান',
      ],
    },
    afterCare: {
      en: [
        'Keep the treated spots dry for the first 24 hours',
        'Apply the prescribed antibiotic ointment with clean hands twice daily',
        'Do not peel, pick, or scratch the forming scabs; allow them to shed naturally',
        'Use individual towels and wash hands frequently to prevent re-infection',
      ],
      bn: [
        'প্রথম ২৪ ঘণ্টা চিকিৎসার স্থান শুকনো রাখুন',
        'পরিষ্কার হাতে নির্দেশিত মলম দিনে দুইবার আলতো করে লাগান',
        'ক্ষতের খোসা বা খুসলি নখ দিয়ে তুলবেন না, নিজে থেকে ঝরে পড়তে দিন',
        'নিজের তোয়ালে বা গামছা আলাদা রাখুন এবং হাত নিয়মিত ধুয়ে পরিষ্কার রাখুন',
      ],
    },
    whenToSeeHospital: {
      en: [
        'Rapidly spreading dark pigmentation or irregular border changes',
        'Continuous bleeding from the treated site that does not stop after 10 minutes of pressure',
        'Severe spreading redness, warmth, or red streaks extending up the limb',
      ],
      bn: [
        'আঁচিলের স্থান থেকে অস্বাভাবিক কালো দাগ বা রঙের পরিবর্তন ছড়িয়ে পড়া',
        'চিকিৎসার স্থান থেকে একটানা রক্তপাত যা সাধারণ চাপে বন্ধ হচ্ছে না',
        'হাত বা পায়ের দিকে লালচে রেখা ছড়িয়ে পড়া বা তীব্র প্রদাহ সৃষ্টি হওয়া',
      ],
    },
    estimatedDuration: {
      en: '15 – 30 Minutes',
      bn: '১৫ – ৩০ মিনিট',
    },
    costRange: {
      en: 'Modest fee based on number of lesions',
      bn: 'আঁচিলের সংখ্যার ওপর ভিত্তি করে অত্যন্ত সীমিত ও সাশ্রয়ী ফি',
    },
  },
  {
    id: 'tonsils-care',
    slug: 'evaluation-care-tonsils',
    order: 5,
    isVisible: true,
    category: {
      en: 'Clinical Evaluation & Hospital Referral',
      bn: 'শারীরিক মূল্যায়ন ও রেফারেল',
    },
    imageUrl: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Removal of Tonsils (Clinical Care & Evaluation)',
      bn: 'টনসিল সমস্যা মূল্যায়ন ও প্রাথমিক যত্ন',
    },
    summary: {
      en: 'Careful clinical evaluation of recurrent tonsillitis, throat infection grading, and primary supportive care. Severe, complicated, or surgical cases are promptly referred to ENT hospital specialists.',
      bn: 'বারবার টনসিল সংক্রমণের সঠিক শারীরিক পরীক্ষা, তীব্রতা নির্ণয় ও প্রাথমিক চিকিৎসা। জটিল বা অপারেশনের রোগীদের দ্রুত ইএনটি হাসপাতালে রেফারেল।',
    },
    fullDescription: {
      en: 'Recurrent tonsillitis and hypertrophied (enlarged) tonsils cause substantial discomfort in children and adults, manifesting as sore throat, painful swallowing, voice changes, fever, and tender neck lymph nodes. In our primary healthcare clinic, every patient receives a comprehensive throat and pharyngeal assessment using single-use sterile tongue depressors and medical lighting. We evaluate tonsillar enlargement grade, presence of white exudates/pus pockets, and airway patency. Mild to moderate bacterial or viral tonsillitis is treated with targeted medical therapy, hydration, and warm saline gargles. Important clinical boundary: Tonsillectomy (surgical removal of tonsils) is a major operating theatre procedure requiring general anaesthesia. Patients with complicated tonsillitis, obstructive sleep apnoea, peritonsillar abscess (quinsy), or high surgical indication are stabilized and promptly referred to an ENT specialist surgeon at Satkhira Sadar Hospital.',
      bn: 'বারবার টনসিল ফুলে যাওয়া ও প্রদাহ শিশু এবং বড়দের গলায় তীব্র ব্যথা, ঢোক গিলতে কষ্ট, জ্বর ও ঘাড়ের লিম্ফ নোড ফুলে যাওয়ার কারণ হয়। আমাদের চেম্বারে ডিসপোজেবল টাং ডিপ্রেসর ও মেডিকেল আলোর সাহায্যে গলার ভেতরের অবস্থা, টনসিলের আকার ও পুঁজ আছে কি না তা সতর্কতার সাথে পর্যবেক্ষণ করা হয়। সাধারণ সংক্রমণের ক্ষেত্রে সঠিক অ্যান্টিবায়োটিক/অ্যান্টি-ইনফ্ল্যামেটরি ওষুধ ও কুসুম গরম লবণ-পানির গার্গলের পরামর্শ দেওয়া হয়। গুরুত্বপূর্ণ ঘোষণা: টনসিল অপারেশন একটি বড় হাসপাতাল বা অপারেশন থিয়েটারের বিষয়। জটিল ক্ষেত্রসমূহ যেমন শ্বাসকষ্ট, ঘুমের মধ্যে দম বন্ধ হওয়া, টনসিলে পুঁজ জমা কিংবা অপারেশনের প্রয়োজন হলে রোগীকে সরাসরি সাতক্ষীরা সদর হাসপাতাল বা ইএনটি (নাক-কান-গলা) বিশেষজ্ঞ সার্জনের নিকট রেফার করা হয়।',
    },
    note: {
      en: 'Major tonsil surgery requires hospital operating theater facilities. We provide clinical assessment, initial medical treatment, and formal referral to ENT hospital specialists.',
      bn: 'টনসিল অপারেশন হাসপাতালে সম্পন্ন হওয়ার বিষয়। আমরা ক্লিনিকে শারীরিক পরীক্ষা, সঠিক প্রাথমিক ওষুধ এবং হাসপাতালে ইএনটি সার্জনের কাছে আনুষ্ঠানিক রেফারেল প্রদান করি।',
    },
    highlights: {
      en: ['Throat & Airway Assessment', 'Single-Use Depressors', 'Targeted Medical Regimen', 'ENT Hospital Referral Network'],
      bn: ['গলা ও শ্বাসনালী পরীক্ষা', 'ওয়ান-টাইম টাং ডিপ্রেসর', 'উপযুক্ত প্রাথমিক চিকিৎসাপত্র', 'হাসপাতালে ইএনটি রেফারেল ব্যবস্থা'],
    },
    whoItIsFor: {
      en: [
        'Children and adults suffering from recurrent acute throat pain and swallowing difficulty',
        'Patients needing clinical staging to distinguish between viral and bacterial tonsillitis',
        'Individuals seeking objective clinical advice on whether tonsillectomy referral is warranted',
      ],
      bn: [
        'ঘন ঘন গলাব্যথা, ঢোক গিলতে কষ্ট ও জ্বরে ভোগা শিশু ও প্রাপ্তবয়স্ক',
        'ভাইরাল নাকি ব্যাকটেরিয়াল ইনফেকশন তা নিরূপণে শারীরিক পরীক্ষা প্রত্যাশী রোগী',
        'টনসিল অপারেশনের প্রয়োজন আছে কি না সে বিষয়ে বিশেষজ্ঞ পরামর্শ ও রেফারেল প্রত্যাশী',
      ],
    },
    howItWorksSteps: [
      {
        step: 1,
        title: { en: 'Oropharyngeal Examination', bn: 'গলা ও মুখের ভেতরের পরীক্ষা' },
        desc: {
          en: 'Examining tonsil size (Grade 1 to 4), symmetry, purulent crypts, and palate mobility.',
          bn: 'জীবাণুমুক্ত টাং ডিপ্রেসর দিয়ে টনসিলের আকার, পুঁজ ও তালুর অবস্থা পর্যবেক্ষণ।',
        },
      },
      {
        step: 2,
        title: { en: 'Vitals & Cervical Node Palpation', bn: 'জ্বর ও লিম্ফ নোড পরীক্ষা' },
        desc: {
          en: 'Measuring body temperature and checking neck lymph nodes for enlargement or tenderness.',
          bn: 'শারীরিক তাপমাত্রা পরিমাপ ও ঘাড়ের লিম্ফ নোড ফুলেছে কি না তা স্পর্শ করে পরীক্ষা।',
        },
      },
      {
        step: 3,
        title: { en: 'Medical Treatment or Referral', bn: 'চিকিৎসা বা রেফারেল নির্ধারণ' },
        desc: {
          en: 'Prescribing appropriate oral medications or writing an expedited hospital ENT referral note.',
          bn: 'অবস্থা অনুযায়ী প্রয়োজনীয় ওষুধ প্রদান অথবা সাতক্ষীরা সদর হাসপাতালে রেফারেল স্লিপ তৈরি।',
        },
      },
      {
        step: 4,
        title: { en: 'Hydration & Gargle Counseling', bn: 'গার্গল ও পুষ্টি পরামর্শ' },
        desc: {
          en: 'Educating patient on warm saline gargling technique, soft diet, and rest protocols.',
          bn: 'কুসুম গরম পানিতে লবণ দিয়ে গার্গল, নরম খাবার ও পর্যাপ্ত বিশ্রাম নিশ্চিত করার পরামর্শ।',
        },
      },
    ],
    beforeProcedure: {
      en: [
        'Avoid drinking very cold or ice water right before the throat examination',
        'Bring past medical prescriptions and details of previous fever episodes',
        'Inform the practitioner if the patient has had any breathing difficulty during sleep',
      ],
      bn: [
        'পরীক্ষার ঠিক পূর্বে অতিরিক্ত ঠান্ডা পানি বা আইসক্রিম খাবেন না',
        'পূর্বের প্রেসক্রিপশন ও জ্বরের তথ্য সাথে নিয়ে আসুন',
        'ঘুমের মধ্যে শ্বাসকষ্ট বা নাক ডাকার সমস্যা থাকলে শুরুতেই জানান',
      ],
    },
    afterCare: {
      en: [
        'Gargle with warm salt water (1/2 teaspoon salt in a glass of warm water) 3 to 4 times daily',
        'Eat soft, soothing foods like khichuri, porridge, and warm clear soups; avoid spicy or abrasive food',
        'Complete the full prescribed course of antibiotics even if feeling better early',
        'Rest adequately and drink plenty of warm fluids throughout the day',
      ],
      bn: [
        'প্রতিদিন ৩-৪ বার কুসুম গরম পানিতে সামান্য লবণ দিয়ে ভালো করে গার্গল করুন',
        'নরম ও পুষ্টিকর খাবার যেমন পাতলা খিচুড়ি, সুজি ও গরম স্যুপ খান; অতিরিক্ত ঝাল ও শক্ত খাবার বর্জন করুন',
        'প্রেসক্রিপশনের অ্যান্টিবায়োটিক কোর্স কোনোভাবেই মাঝপথে বন্ধ করবেন না',
        'পর্যাপ্ত বিশ্রাম নিন ও সারা দিন কুসুম গরম তরল খাবার গ্রহণ করুন',
      ],
    },
    whenToSeeHospital: {
      en: [
        'Inability to swallow even saliva or fluids, accompanied by continuous drooling',
        'Severe breathing difficulty, noisy breathing (stridor), or shortness of breath',
        'Severe asymmetrical tonsil swelling with inability to open the mouth fully (peritonsillar abscess / quinsy)',
        'High fever above 103°F with stiff neck, confusion, or active bleeding from the throat',
      ],
      bn: [
        'পানি বা মুখের লালা পর্যন্ত গিলতে না পারা বা মুখ দিয়ে লালা পড়া',
        'তীব্র শ্বাসকষ্ট বা শ্বাস নেওয়ার সময় শব্দ হওয়া',
        'মুখ হা করতে তীব্র কষ্ট (ট্রিসমাস) বা গলার একপাশ অতিরিক্ত ফুলে যাওয়া (অ্যাবসেস)',
        '১০৩° ডিগ্রির বেশি উচ্চ জ্বর, ঘাড় শক্ত হওয়া বা মুখ/গলা দিয়ে রক্ত বের হওয়া',
      ],
    },
    estimatedDuration: {
      en: '20 – 30 Minutes Assessment',
      bn: '২০ – ৩০ মিনিট পর্যবেক্ষণ',
    },
    costRange: {
      en: 'Standard rural consultation fee; referral documentation provided at no extra cost',
      bn: 'সাধারণ সাশ্রয়ী ভিজিট ফি; রেফারেল পরামর্শ ও দিকনির্দেশনা সম্পূর্ণ উন্মুক্ত',
    },
  },
  {
    id: 'circumcision-device',
    slug: 'circumcision-device-method',
    order: 6,
    isVisible: true,
    category: {
      en: 'Device-Based Minor Procedure',
      bn: 'ডিভাইস প্রযুক্তি মাইনর প্রসিডিউর',
    },
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    title: {
      en: 'Circumcision (Using a Modern Device)',
      bn: 'ডিভাইস পদ্ধতিতে সুন্নতে খতনা',
    },
    summary: {
      en: 'Modern device-based male circumcision for infants and young boys. Gentle local anaesthesia, minimal bleeding with proper technique, high hygiene standards, and comprehensive parent guidance.',
      bn: 'আধুনিক ডিভাইস প্রযুক্তিতে ব্যথামুক্ত ও প্রায় রক্তপাতহীন সুন্নতে খতনা। শিশুদের জন্য অত্যন্ত নিরাপদ, ১০০% জীবাণুমুক্ত পরিবেশ ও পূর্ণাঙ্গ অভিভাবক নির্দেশনা।',
    },
    fullDescription: {
      en: 'Male circumcision using specialized medical device technology (such as modern ring/clamp devices) is one of the safest, cleanest, and most child-friendly methods available in clinical practice. It is suitable for neonates, infants, and boys after careful anatomical screening to confirm the absence of congenital conditions like hypospadias or bleeding tendencies. Under gentle local anaesthetic (dorsal penile nerve block or ring infiltration), the precision device shields the glans and establishes clean mechanical hemostasis. The procedure is typically accomplished in 10 to 15 minutes with negligible bleeding and no extensive raw cutting or painful open suturing. Parents receive detailed verbal and written instructions regarding dressing care, loose clothing, and safe healing.',
      bn: 'আধুনিক ডিভাইস (যেমন মেডিকেল ক্ল্যাম্প বা প্লাস্টিবেল রিং) পদ্ধতিতে সুন্নতে খতনা শিশুদের জন্য অত্যন্ত আরামদায়ক ও নিরাপদ। খতনার পূর্বে শিশুর কোনো জন্মগত ত্রুটি (যেমন হাইপোস্প্যাডিয়াস) বা রক্তজমাট বাঁধার সমস্যা আছে কি না তা সতর্কতার সাথে পরীক্ষা করা হয়। মৃদু লোকাল অ্যানেসথেসিয়ার মাধ্যমে স্থানটি সম্পূর্ণ অবশ করে অত্যন্ত দ্রুত (১০-১৫ মিনিটে) এই পদ্ধতি সম্পন্ন হয়। এতে রক্তপাতের ঝুঁকি প্রায় শূন্য থাকে এবং সাধারণ সেলাইয়ের জটিলতা থাকে না। অভিভাবককে শিশুর যত্ন, পোশাক ও ব্যথানাশক ওষুধের নিয়ম পুঙ্খানুপুঙ্খ বুঝিয়ে দেওয়া হয়।',
    },
    note: {
      en: 'Pre-procedure clinical checkup is mandatory. Any anatomical abnormality (hypospadias) or family history of bleeding disorders requires specialized pediatric hospital care.',
      bn: 'খতনার পূর্বে শারীরিক পরীক্ষা আবশ্যক। শিশুর কোনো জন্মগত শারীরিক ত্রুটি বা পরিবারে রক্তক্ষরণ রোগের ইতিহাস থাকলে হাসপাতালে রেফার করা হয়।',
    },
    highlights: {
      en: ['Modern Device Technique', 'Gentle Local Numbing', 'Minimal Bleeding Risk', 'Clear Parent After-Care Guide'],
      bn: ['আধুনিক ডিভাইস পদ্ধতি', 'মৃদু লোকাল অবশ', 'রক্তপাতের ঝুঁকি নেই বললেই চলে', 'অভিভাবকদের জন্য স্পষ্ট নির্দেশিকা'],
    },
    whoItIsFor: {
      en: [
        'Infants, young boys, and adolescents requiring hygienic, quick, and low-stress circumcision',
        'Parents seeking a safe, sterile clinical environment away from unsterilized traditional methods',
        'Boys screened with normal penile anatomy and no bleeding diathesis',
      ],
      bn: [
        'নবজাতক ও শিশু যাদের ব্যথাহীন ও নিরাপদ পরিবেশে খতনা করানো প্রয়োজন',
        'শতভাগ জীবাণুমুক্ত ক্লিনিক্যাল পরিবেশে আধুনিক খতনা প্রত্যাশী সচেতন অভিভাবক',
        'শারীরিক পরীক্ষায় সম্পূর্ণ সুস্থ প্রমাণিত শিশু',
      ],
    },
    howItWorksSteps: [
      {
        step: 1,
        title: { en: 'Pre-Procedure Examination', bn: 'শারীরিক পরীক্ষা ও কাউন্সেলিং' },
        desc: {
          en: 'Confirming normal urinary opening, absence of hypospadias, and reassuring the child/parents.',
          bn: 'শিশুর প্রস্রাবের রাস্তা স্বাভাবিক অবস্থানে আছে কি না তা নিশ্চিত করা এবং অভিভাবককে প্রক্রিয়াটি বুঝিয়ে বলা।',
        },
      },
      {
        step: 2,
        title: { en: 'Skin Disinfection & Local Numbing', bn: 'জীবাণুমুক্তকরণ ও লোকাল অবশ' },
        desc: {
          en: 'Thorough antiseptic preparation and gentle local nerve block ensuring zero pain during procedure.',
          bn: 'অ্যান্টিসেপটিক দিয়ে সম্পূর্ণ জায়গা পরিষ্কার করে মৃদু লোকাল অবশ প্রদান।',
        },
      },
      {
        step: 3,
        title: { en: 'Precision Device Application', bn: 'ডিভাইস স্থাপন ও খতনা সম্পন্ন' },
        desc: {
          en: 'Applying the sterile protective device, securing hemostasis, and completing in 10-15 minutes.',
          bn: 'জীবাণুমুক্ত মেডিকেল ডিভাইস স্থাপন করে রক্তপাতহীন ও নিরাপদভাবে ১০-১৫ মিনিটে সম্পন্নকরণ।',
        },
      },
      {
        step: 4,
        title: { en: 'Protective Dressing & Parent Guidance', bn: 'ড্রেসিং ও অভিভাবকের করণীয়' },
        desc: {
          en: 'Placing protective sterile dressing, providing prescribed pain-relief syrup, and written care instructions.',
          bn: 'জীবাণুমুক্ত ড্রেসিং এবং ব্যথা নিবারক ওষুধের নিয়ম ও পরিচর্যার লিখিত কাগজ প্রদান।',
        },
      },
    ],
    beforeProcedure: {
      en: [
        'Bathe the child with mild soap and warm water before arriving at the clinic',
        'Feed the infant/child 1 to 2 hours before the procedure so they are calm and contented',
        'Bring 2 pairs of loose cotton pants or clean oversized diapers',
        'Inform the practitioner of any bleeding tendency or fever in the preceding days',
      ],
      bn: [
        'ক্লিনিকে আসার আগে শিশুকে কুসুম গরম পানি ও সাবান দিয়ে পরিষ্কার করে গোসল করিয়ে আনুন',
        'আসার ১-২ ঘণ্টা আগে শিশুকে পর্যাপ্ত খাবার বা দুধ পান করান যাতে সে শান্ত থাকে',
        'শিশুর জন্য ২-৩টি ঢিলেঢালা সুতি প্যান্ট বা বড় আকারের পরিষ্কার ডায়াপার সাথে আনুন',
        'শিশুর রক্ত জমাট বাঁধার কোনো সমস্যা বা আগের কয়েক দিনের জ্বর থাকলে জানান',
      ],
    },
    afterCare: {
      en: [
        'Keep the surgical area clean and dry; dress the child in loose, airy cotton pants',
        'Administer only the prescribed pain-relief syrup/drops as directed by the practitioner',
        'Apply prescribed antiseptic ointment gently as instructed after dressing changes',
        'Do not allow vigorous running, jumping, or cycling for the first 5 to 7 days',
        'Never apply unverified home concoctions, mustard oil, or turmeric powder to the site',
      ],
      bn: [
        'খতনার স্থান পরিষ্কার ও শুকনো রাখুন; শিশুকে ঢিলেঢালা সুতি পোশাক পরান',
        'চিকিৎসকের পরামর্শ অনুযায়ী শুধুমাত্র নির্দেশিত ব্যথানাশক ড্রপ বা সিরাপ সেবন করান',
        'ড্রেসিং পরিবর্তনের পর নির্দেশিত অ্যান্টিসেপটিক মলম আলতো করে লাগান',
        'প্রথম ৫-৭ দিন শিশুকে অতিরিক্ত দৌড়াদৌড়ি বা সাইকেল চালানো থেকে বিরত রাখুন',
        'কোনো অবস্থাতেই ক্ষতস্থানে খাঁটি তেল, হলুদ বা ঘরোয়া অননুমোদিত উপাদান লাগাবেন না',
      ],
    },
    whenToSeeHospital: {
      en: [
        'Active, steady bright red bleeding that does not stop after 10 minutes of gentle pressure',
        'Child has not urinated within 6 to 8 hours after the procedure',
        'Severe worsening dark swelling, bluish discolouration, or foul-smelling yellow pus discharge',
        'High body temperature above 101°F with continuous inconsolable crying or lethargy',
      ],
      bn: [
        'টানা রক্তক্ষরণ যা সাধারণ আলতো চাপে বন্ধ হচ্ছে না',
        'খতনার পর ৬ থেকে ৮ ঘণ্টার মধ্যে শিশু স্বাভাবিকভাবে প্রস্রাব না করলে',
        'অতিরিক্ত ফোলা ভাব, স্থানটি নীলচে হয়ে যাওয়া কিংবা দুর্গন্ধযুক্ত পুঁজ বের হওয়া',
        '১০১° ডিগ্রির বেশি উচ্চ জ্বর ও শিশুর একটানা অস্বাভাবিক কান্না বা নিস্তেজ ভাব',
      ],
    },
    estimatedDuration: {
      en: '15 – 25 Minutes',
      bn: '১৫ – ২৫ মিনিট',
    },
    costRange: {
      en: 'Affordable package including sterile disposable device and follow-up consultation',
      bn: 'ওয়ান-টাইম ডিভাইস ও ফলো-আপ সহ সাশ্রয়ী প্যাকেজ',
    },
  },
];

export const clinicalSafetyStandards: ClinicalSafetyStandard[] = [
  {
    id: 'sterile-equipment',
    iconName: 'ShieldCheck',
    title: {
      en: 'Sterile Single-Use Equipment',
      bn: 'জীবাণুমুক্ত ওয়ান-টাইম সরঞ্জাম',
    },
    desc: {
      en: 'Factory-sealed, disposable cups, blades, lancets, and syringes used once and safely incinerated in sharps containers.',
      bn: 'শতভাগ সিলপ্যাক ওয়ান-টাইম কাপ, ব্লেড, ল্যানসেট ও সিরিঞ্জ যা ব্যবহারের পরই নিয়মতান্ত্রিকভাবে বিনষ্ট করা হয়।',
    },
  },
  {
    id: 'hand-hygiene',
    iconName: 'Sparkles',
    title: {
      en: 'Hand Hygiene & Surgical Gloves',
      bn: 'হাতের স্বাস্থ্যবিধি ও সার্জিক্যাল গ্লাভস',
    },
    desc: {
      en: 'Medical-grade hand disinfection and brand-new sterile surgical gloves used for every single patient.',
      bn: 'হাসপাতাল গ্রেড অ্যান্টিসেপটিক হ্যান্ডরাব এবং প্রতিটি রোগীর জন্য সম্পূর্ণ নতুন সার্জিক্যাল গ্লাভস ব্যবহার।',
    },
  },
  {
    id: 'proper-assessment',
    iconName: 'Stethoscope',
    title: {
      en: 'Proper Clinical Assessment First',
      bn: 'পূর্বে সঠিক শারীরিক মূল্যায়ন',
    },
    desc: {
      en: 'Comprehensive check of vitals, blood pressure, anatomical eligibility, and contraindications before any procedure.',
      bn: 'যেকোনো চিকিৎসা শুরুর পূর্বে রক্তচাপ, নাড়ির গতি ও পূর্বের শারীরিক রোগ সম্পর্কে পুঙ্খানুপুঙ্খ পরীক্ষা।',
    },
  },
  {
    id: 'informed-consent',
    iconName: 'CheckCircle2',
    title: {
      en: 'Informed Consent & Transparency',
      bn: 'স্বচ্ছ পরামর্শ ও সম্মতি',
    },
    desc: {
      en: 'Complete explanation of the procedure, expected healing timeline, realistic expectations, and written consent.',
      bn: 'চিকিৎসার সম্পূর্ণ প্রক্রিয়া, নিরাময়ের সময় ও সম্ভাব্য বিষয়াদি রোগীকে স্পষ্ট বুঝিয়ে লিখিত সম্মতি গ্রহণ।',
    },
  },
  {
    id: 'clear-aftercare',
    iconName: 'HeartPulse',
    title: {
      en: 'Clear After-Care Guidance',
      bn: 'স্পষ্ট পরিচর্যা নির্দেশিকা',
    },
    desc: {
      en: 'Easy-to-follow written guidance on hygiene, diet, wound dressing, and 24/7 practitioner phone access for queries.',
      bn: 'পরিষ্কার-পরিচ্ছন্নতা, পুষ্টিকর খাবার, ড্রেসিংয়ের নিয়ম এবং জরুরি প্রয়োজনে সার্বক্ষণিক মোবাইল পরামর্শের সুযোগ।',
    },
  },
  {
    id: 'hospital-referral',
    iconName: 'Activity',
    title: {
      en: 'Prompt Hospital Referral',
      bn: 'প্রয়োজনে হাসপাতালে রেফারেল',
    },
    desc: {
      en: 'Direct referral coordination with Satkhira Sadar Hospital or specialist surgeons whenever complications arise.',
      bn: 'যেকোনো জটিল বা অপারেশনের ক্ষেত্রে সাতক্ষীরা সদর হাসপাতাল ও বিশেষজ্ঞ চিকিৎসকদের সাথে তাৎক্ষণিক রেফারেল।',
    },
  },
];

export const clinicalHowItWorksSteps = [
  {
    step: 1,
    number: '01',
    title: {
      en: 'Consultation & Inquiry',
      bn: 'পরামর্শ ও প্রাথমিক আলোচনা',
    },
    desc: {
      en: 'Contact us via phone, WhatsApp, or clinic visit. We discuss your symptoms, duration, and explain options transparently.',
      bn: 'ফোন, হোয়াটসঅ্যাপ বা সরাসরি চেম্বারে এসে আপনার সমস্যার লক্ষণ, স্থায়িত্ব ও চিকিৎসার সম্ভাব্য উপায় নিয়ে উন্মুক্ত আলোচনা।',
    },
  },
  {
    step: 2,
    number: '02',
    title: {
      en: 'Clinical Assessment',
      bn: 'পুঙ্খানুপুঙ্খ শারীরিক মূল্যায়ন',
    },
    desc: {
      en: 'A thorough examination, checking blood pressure, pulse, contraindications, and ruling out conditions requiring hospital referral.',
      bn: 'রক্তচাপ ও সামগ্রিক শারীরিক অবস্থা পরীক্ষা করে নিশ্চিত হওয়া যে চিকিৎসাটি ক্লিনিকেই সম্পূর্ণ নিরাপদ কি না।',
    },
  },
  {
    step: 3,
    number: '03',
    title: {
      en: 'Safe Procedure or Therapy',
      bn: 'নিরাপদ প্রসিডিউর বা থেরাপি',
    },
    desc: {
      en: 'Conducted in our clean, dedicated procedure room using sterile disposable consumables and gentle local comfort.',
      bn: 'সম্পূর্ণ জীবাণুমুক্ত পরিবেশে নতুন ওয়ান-টাইম সরঞ্জাম এবং লোকাল ব্যথামুক্ত ব্যবস্থায় সুনিপুণভাবে সম্পন্নকরণ।',
    },
  },
  {
    step: 4,
    number: '04',
    title: {
      en: 'Post-Care & Follow-Up',
      bn: 'ফলো-আপ ও নিয়মিত পরিচর্যা',
    },
    desc: {
      en: 'Detailed verbal and written aftercare instructions, dressing change schedule, and scheduled follow-up inspection.',
      bn: 'পরিচর্যার লিখিত নির্দেশিকা, ওষুধ সেবনের নিয়ম এবং নির্ধারিত দিনে চেম্বারে এসে ক্ষতের অবস্থা পর্যবেক্ষণ।',
    },
  },
];

export const clinicalFaqs: ClinicalFaqItem[] = [
  {
    id: 'faq-cost',
    question: {
      en: 'How much do these minor procedures and therapies cost?',
      bn: 'এই মাইনর প্রসিডিউর ও সেবাগুলোর খরচ কেমন হতে পারে?',
    },
    answer: {
      en: 'All services are structured with affordable rural community pricing in mind. Fees cover sterile single-use consumables (cups, devices, sterile packs, sutures) and post-procedure dressing. Exact costs are explained upfront following physical examination with no hidden fees.',
      bn: 'সব ধরনের সেবার ফি গ্রামীণ সাধারণ মানুষের সামর্থ্য অনুযায়ী অত্যন্ত সাশ্রয়ী রাখা হয়েছে। এই খরচের মধ্যে জীবাণুমুক্ত সিলপ্যাক সরঞ্জাম (কাপ, ডিভাইস, সেলাই ইত্যাদি) ও ড্রেসিং অন্তর্ভুক্ত থাকে। শারীরিক পরীক্ষার পর চিকিৎসা শুরুর আগেই সব খরচ স্পষ্টভাবে জানানো হয়।',
    },
  },
  {
    id: 'faq-pain',
    question: {
      en: 'Will there be severe pain during the procedure?',
      bn: 'প্রসিডিউর বা চিকিৎসার সময় কি অতিরিক্ত ব্যথা হবে?',
    },
    answer: {
      en: 'Patient comfort is a core priority. For surgical minor procedures (circumcision, lumps, accessible polyps), gentle local anaesthesia is administered so the procedure area is completely numb. Hijama uses gentle suction and fine micro-punctures that feel like slight pinches.',
      bn: 'রোগীর স্বাচ্ছন্দ্য আমাদের প্রধান লক্ষ্য। খতনা, সিস্ট বা পলিপসের মতো ক্ষেত্রে উন্নত লোকাল অ্যানেসথেসিয়ার মাধ্যমে জায়গাটি সম্পূর্ণ অবশ করে নেওয়া হয়, ফলে কোনো তীব্র ব্যথা অনুভূত হয় না। হিজামার ক্ষেত্রেও অত্যন্ত মৃদু মাইক্রো-স্ক্র্যাচ দেওয়া হয় যা পিপঁড়া কামড়ের মতো অনুভূত হতে পারে।',
    },
  },
  {
    id: 'faq-recovery',
    question: {
      en: 'What is the typical recovery and healing time?',
      bn: 'চিকিৎসার পর সুস্থ হতে কত দিন সময় লাগে?',
    },
    answer: {
      en: 'Healing depends on the procedure: Hijama marks typically clear in 5 to 7 days; device circumcision heals nicely within 7 to 10 days; superficial cyst sutures are removed in 7 to 10 days; wart treatment scabs shed within 7 to 14 days. Full written guidance is provided.',
      bn: 'সেবাভেদে নিরাময়ের সময় নির্ভর করে: হিজামার কাপের দাগ ৫-৭ দিনে মিলিয়ে যায়; ডিভাইস পদ্ধতিতে খতনা ৭-১০ দিনে সুস্থ হয়; ছোট সিস্টের সেলাই ৭-১০ দিন পর কাটা হয় এবং আঁচিলের ক্ষতের খোসা ৭-১৪ দিনের মধ্যে প্রাকৃতিকভাবে ঝরে যায়।',
    },
  },
  {
    id: 'faq-booking',
    question: {
      en: 'How can I schedule an appointment or consultation?',
      bn: 'আমি কীভাবে সিরিয়াল বা অ্যাপয়েন্টমেন্ট বুক করতে পারি?',
    },
    answer: {
      en: 'You can click the "Book Appointment" button on any service card to prefill the booking form, or directly call our clinic helpline at 01748-128106. Same-day appointments and weekend consultations are available at Rifat Pharmacy.',
      bn: 'আপনি যেকোনো সেবার নিচে "সিরিয়াল নিন" বাটনে ক্লিক করে ফর্ম পূরণ করতে পারেন, অথবা সরাসরি আমাদের হেল্পলাইন ০১৭৪৮-১২৮১০৬ নম্বরে কল করতে পারেন। রিফাত ফার্মেসী চেম্বারে প্রতিদিন সকাল ৯টা থেকে রাত ৮টা পর্যন্ত সেবা পাওয়া যায়।',
    },
  },
  {
    id: 'faq-emergency',
    question: {
      en: 'What happens if a case is complicated or an emergency arises?',
      bn: 'যদি কোনো সমস্যা জটিল রূপ নেয় তবে কী ব্যবস্থা রয়েছে?',
    },
    answer: {
      en: 'We maintain a strict clinical safety threshold: any complicated or critical conditions (such as severe bleeding, deep fixed tumours, airway-obstructing tonsillitis, or acute abdomen) are immediately stabilized and referred directly to Satkhira Sadar Hospital or specialist surgeons.',
      bn: 'আমরা কঠোর ক্লিনিক্যাল নিরাপত্তা নীতিমালা অনুসরণ করি। কোনো অবস্থাতেই জটিল বা অপারেশনের রোগী চেম্বারে আটকে রাখা হয় না। যেকোনো জটিলতায় রোগীকে তাৎক্ষণিক প্রাথমিক সাপোর্ট দিয়ে সাতক্ষীরা সদর হাসপাতাল বা সংশ্লিষ্ট বিশেষজ্ঞ সার্জনের কাছে রেফার করা হয়।',
    },
  },
];
