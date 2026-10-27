import {
  ContactInfo,
  ClinicHours,
  ServiceItem,
  TimelineItem,
  CertificateItem,
  BlogPost,
  Testimonial,
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
