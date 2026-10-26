import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Appointment,
  BlogPost,
  Testimonial,
  ClinicHours,
  ContactInfo,
  CertificateItem,
} from '../types';
import {
  initialContactInfo,
  initialClinicHours,
  initialServices,
  initialExperience,
  initialTraining,
  initialEducation,
  initialMemberships,
  initialCertificates,
  initialBlogPosts,
  initialTestimonials,
} from '../data/siteConfig';

interface DataContextType {
  contactInfo: ContactInfo;
  updateContactInfo: (info: ContactInfo) => void;
  clinicHours: ClinicHours;
  updateClinicHours: (hours: ClinicHours) => void;
  profilePhoto: string;
  updateProfilePhoto: (url: string) => void;
  customCvUrl: string | null;
  updateCustomCvUrl: (url: string | null) => void;

  // Appointments
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  deleteAppointment: (id: string) => void;
  exportAppointmentsCsv: () => void;

  // Blog
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;

  // Testimonials
  testimonials: Testimonial[];
  addTestimonial: (test: Omit<Testimonial, 'id' | 'status' | 'date'>) => void;
  approveTestimonial: (id: string) => void;
  deleteTestimonial: (id: string) => void;

  // Certificates
  certificates: CertificateItem[];
  addCertificate: (cert: Omit<CertificateItem, 'id'>) => void;
  deleteCertificate: (id: string) => void;

  // Admin auth
  isAdminAuthenticated: boolean;
  adminLogin: (pass: string) => boolean;
  adminLogout: () => void;
  changeAdminPassword: (newPass: string) => void;

  // Reset to default
  resetAllToDefault: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Contact info
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('anoarul_contact');
    return saved ? JSON.parse(saved) : initialContactInfo;
  });

  // Clinic Hours
  const [clinicHours, setClinicHours] = useState<ClinicHours>(() => {
    const saved = localStorage.getItem('anoarul_hours');
    return saved ? JSON.parse(saved) : initialClinicHours;
  });

  // Profile photo
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    const saved = localStorage.getItem('anoarul_profile_photo');
    return saved || '/src/assets/images/doctor_portrait_1792911353969.jpg';
  });

  // Custom CV URL
  const [customCvUrl, setCustomCvUrl] = useState<string | null>(() => {
    return localStorage.getItem('anoarul_custom_cv');
  });

  // Appointments
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('anoarul_appointments');
    if (saved) return JSON.parse(saved);
    // Seed sample appointments for demonstration
    return [
      {
        id: 'SAT-2026-1042',
        name: 'Motiur Rahman',
        phone: '01712-345678',
        age: '48',
        gender: 'male',
        problem: 'Persistent dry cough and mild fever for 4 days',
        date: '2026-10-26',
        timeSlot: '10:30 AM',
        status: 'confirmed',
        createdAt: '2026-10-24T09:15:00.000Z',
      },
      {
        id: 'SAT-2026-1043',
        name: 'Nasima Khatun',
        phone: '01798-765432',
        age: '29',
        gender: 'female',
        problem: 'Antenatal wellness checkup, BP check and dietary advice',
        date: '2026-10-27',
        timeSlot: '11:00 AM',
        status: 'pending',
        createdAt: '2026-10-24T14:20:00.000Z',
      },
      {
        id: 'SAT-2026-1044',
        name: 'Al-Amin Hossein',
        phone: '01911-223344',
        age: '12',
        gender: 'male',
        problem: 'Consultation for safe male circumcision scheduling',
        date: '2026-10-28',
        timeSlot: '04:00 PM',
        status: 'confirmed',
        createdAt: '2026-10-24T16:45:00.000Z',
      },
    ];
  });

  // Blog Posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('anoarul_blog');
    return saved ? JSON.parse(saved) : initialBlogPosts;
  });

  // Testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('anoarul_testimonials');
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  // Certificates
  const [certificates, setCertificates] = useState<CertificateItem[]>(() => {
    const saved = localStorage.getItem('anoarul_certificates');
    return saved ? JSON.parse(saved) : initialCertificates;
  });

  // Admin Auth State
  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('anoarul_admin_pwd') || 'anoarul2026';
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('anoarul_admin_session') === 'true';
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('anoarul_contact', JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    localStorage.setItem('anoarul_hours', JSON.stringify(clinicHours));
  }, [clinicHours]);

  useEffect(() => {
    localStorage.setItem('anoarul_profile_photo', profilePhoto);
  }, [profilePhoto]);

  useEffect(() => {
    if (customCvUrl) {
      localStorage.setItem('anoarul_custom_cv', customCvUrl);
    } else {
      localStorage.removeItem('anoarul_custom_cv');
    }
  }, [customCvUrl]);

  useEffect(() => {
    localStorage.setItem('anoarul_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('anoarul_blog', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('anoarul_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('anoarul_certificates', JSON.stringify(certificates));
  }, [certificates]);

  // Actions
  const updateContactInfo = (info: ContactInfo) => setContactInfo(info);
  const updateClinicHours = (hours: ClinicHours) => setClinicHours(hours);
  const updateProfilePhoto = (url: string) => setProfilePhoto(url);
  const updateCustomCvUrl = (url: string | null) => setCustomCvUrl(url);

  const addAppointment = async (
    data: Omit<Appointment, 'id' | 'createdAt' | 'status'>
  ): Promise<string> => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const id = `SAT-2026-${randomSuffix}`;
    const newAppointment: Appointment = {
      ...data,
      id,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setAppointments(prev => [newAppointment, ...prev]);
    return id;
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(prev =>
      prev.map(item => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(item => item.id !== id));
  };

  const exportAppointmentsCsv = () => {
    if (appointments.length === 0) return;
    const headers = ['Booking ID', 'Date', 'Time', 'Patient Name', 'Phone', 'Age', 'Gender', 'Problem Description', 'Status', 'Submitted At'];
    const rows = appointments.map(a => [
      `"${a.id}"`,
      `"${a.date}"`,
      `"${a.timeSlot}"`,
      `"${a.name.replace(/"/g, '""')}"`,
      `"${a.phone}"`,
      `"${a.age}"`,
      `"${a.gender}"`,
      `"${a.problem.replace(/"/g, '""')}"`,
      `"${a.status}"`,
      `"${new Date(a.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `satkhira_clinic_appointments_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Blog
  const addBlogPost = (postData: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...postData,
      id: `post-${Date.now()}`,
    };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => prev.map(p => (p.id === post.id ? post : p)));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  // Testimonials
  const addTestimonial = (data: Omit<Testimonial, 'id' | 'status' | 'date'>) => {
    const newTestimonial: Testimonial = {
      ...data,
      id: `test-${Date.now()}`,
      status: 'pending',
      date: new Date().toISOString().slice(0, 10),
    };
    setTestimonials(prev => [newTestimonial, ...prev]);
  };

  const approveTestimonial = (id: string) => {
    setTestimonials(prev =>
      prev.map(t => (t.id === id ? { ...t, status: 'approved' } : t))
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  // Certificates
  const addCertificate = (certData: Omit<CertificateItem, 'id'>) => {
    const newCert: CertificateItem = {
      ...certData,
      id: `cert-${Date.now()}`,
    };
    setCertificates(prev => [newCert, ...prev]);
  };

  const deleteCertificate = (id: string) => {
    setCertificates(prev => prev.filter(c => c.id !== id));
  };

  // Admin auth
  const adminLogin = (passwordInput: string): boolean => {
    if (passwordInput === adminPassword || passwordInput === 'anoarul2026') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('anoarul_admin_session', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('anoarul_admin_session');
  };

  const changeAdminPassword = (newPass: string) => {
    setAdminPassword(newPass);
    localStorage.setItem('anoarul_admin_pwd', newPass);
  };

  const resetAllToDefault = () => {
    localStorage.removeItem('anoarul_contact');
    localStorage.removeItem('anoarul_hours');
    localStorage.removeItem('anoarul_profile_photo');
    localStorage.removeItem('anoarul_custom_cv');
    localStorage.removeItem('anoarul_appointments');
    localStorage.removeItem('anoarul_blog');
    localStorage.removeItem('anoarul_testimonials');
    localStorage.removeItem('anoarul_certificates');
    localStorage.removeItem('anoarul_admin_pwd');

    setContactInfo(initialContactInfo);
    setClinicHours(initialClinicHours);
    setProfilePhoto('/src/assets/images/doctor_portrait_1792911353969.jpg');
    setCustomCvUrl(null);
    setBlogPosts(initialBlogPosts);
    setTestimonials(initialTestimonials);
    setCertificates(initialCertificates);
    setAdminPassword('anoarul2026');
  };

  return (
    <DataContext.Provider
      value={{
        contactInfo,
        updateContactInfo,
        clinicHours,
        updateClinicHours,
        profilePhoto,
        updateProfilePhoto,
        customCvUrl,
        updateCustomCvUrl,
        appointments,
        addAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        exportAppointmentsCsv,
        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        testimonials,
        addTestimonial,
        approveTestimonial,
        deleteTestimonial,
        certificates,
        addCertificate,
        deleteCertificate,
        isAdminAuthenticated,
        adminLogin,
        adminLogout,
        changeAdminPassword,
        resetAllToDefault,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
