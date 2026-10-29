import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Appointment,
  BlogPost,
  Testimonial,
  ClinicHours,
  ContactInfo,
  CertificateItem,
  ClinicalServiceItem,
} from '../types';
import {
  initialContactInfo,
  initialClinicHours,
  initialCertificates,
  initialBlogPosts,
  initialTestimonials,
  initialClinicalServices,
} from '../data/siteConfig';
import {
  db,
  auth,
  googleProvider,
  handleFirestoreError,
  OperationType,
} from '../firebase';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';

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

  // Clinical Services
  clinicalServices: ClinicalServiceItem[];
  updateClinicalService: (service: ClinicalServiceItem) => void;
  reorderClinicalServices: (services: ClinicalServiceItem[]) => void;
  toggleClinicalServiceVisibility: (id: string) => void;
  resetClinicalServices: () => void;
  selectedServiceForBooking: string | null;
  setSelectedServiceForBooking: (name: string | null) => void;

  // Admin auth & Firebase status
  isAdminAuthenticated: boolean;
  adminLogin: (pass: string) => boolean;
  googleLogin: () => Promise<boolean>;
  adminLogout: () => void;
  changeAdminPassword: (newPass: string) => void;
  firebaseUser: FirebaseUser | null;
  isFirebaseConnected: boolean;

  // Reset to default
  resetAllToDefault: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(true);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  // Contact info
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem('anoarul_contact');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.titleEn && parsed.titleEn.includes('RMP')) {
          parsed.titleEn = parsed.titleEn.replace('Rural Medical Practitioner (RMP)', 'Diploma in Medical Assistant (DMA)');
        }
        if (parsed.titleBn && parsed.titleBn.includes('RMP')) {
          parsed.titleBn = parsed.titleBn.replace('পল্লী চিকিৎসক (RMP)', 'পল্লী চিকিৎসক (DMA)');
        }
        return parsed;
      } catch (e) {
        return initialContactInfo;
      }
    }
    return initialContactInfo;
  });

  // Clinic Hours
  const [clinicHours, setClinicHours] = useState<ClinicHours>(() => {
    const saved = localStorage.getItem('anoarul_hours');
    return saved ? JSON.parse(saved) : initialClinicHours;
  });

  // Profile photo
  const [profilePhoto, setProfilePhoto] = useState<string>(() => {
    const saved = localStorage.getItem('anoarul_profile_photo');
    if (!saved || saved.includes('/src/assets/images') || saved.includes('doctor_portrait')) {
      return '/images/dr_anoarul_dma.png';
    }
    return saved;
  });

  // Custom CV URL
  const [customCvUrl, setCustomCvUrl] = useState<string | null>(() => {
    return localStorage.getItem('anoarul_custom_cv');
  });

  // Appointments
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('anoarul_appointments');
    if (saved) return JSON.parse(saved);
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
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: CertificateItem) => {
            const initial = initialCertificates.find((c) => c.id === item.id);
            if (initial) {
              return {
                ...initial,
                ...item,
                imageUrl: initial.imageUrl,
              };
            }
            return item;
          });
        }
      } catch (e) {
        console.warn('Failed to parse saved certificates:', e);
      }
    }
    return initialCertificates;
  });

  // Clinical Services
  const [clinicalServices, setClinicalServices] = useState<ClinicalServiceItem[]>(() => {
    const saved = localStorage.getItem('anoarul_clinical_services');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: ClinicalServiceItem) => {
            const initial = initialClinicalServices.find((s) => s.id === item.id);
            if (initial && (!item.imageUrl || item.imageUrl.includes('unsplash.com'))) {
              return { ...item, imageUrl: initial.imageUrl };
            }
            return item;
          });
        }
      } catch (e) {
        console.warn('Failed to parse saved clinical services:', e);
      }
    }
    return initialClinicalServices;
  });
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('anoarul_clinical_services', JSON.stringify(clinicalServices));
  }, [clinicalServices]);

  const updateClinicalService = (updated: ClinicalServiceItem) => {
    setClinicalServices((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  const reorderClinicalServices = (newOrder: ClinicalServiceItem[]) => {
    const indexed = newOrder.map((s, idx) => ({ ...s, order: idx + 1 }));
    setClinicalServices(indexed);
  };

  const toggleClinicalServiceVisibility = (id: string) => {
    setClinicalServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isVisible: !s.isVisible } : s))
    );
  };

  const resetClinicalServices = () => {
    setClinicalServices(initialClinicalServices);
    localStorage.removeItem('anoarul_clinical_services');
  };

  // Admin Auth State
  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('anoarul_admin_pwd') || 'anoarul2026';
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('anoarul_admin_session') === 'true';
  });

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      if (user) {
        setIsAdminAuthenticated(true);
        sessionStorage.setItem('anoarul_admin_session', 'true');
      }
    });
    return () => unsubscribe();
  }, []);

  // Listen to Appointments from Firestore if admin authenticated
  useEffect(() => {
    if (!isAdminAuthenticated) return;
    try {
      const q = query(collection(db, 'appointments'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const fetched = snapshot.docs.map((d) => d.data() as Appointment);
            // Sort by createdAt descending
            fetched.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setAppointments(fetched);
          }
        },
        (error) => {
          handleFirestoreError(error, OperationType.LIST, 'appointments');
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn('Appointments snapshot subscription notice:', e);
    }
  }, [isAdminAuthenticated]);

  // Sync to local storage for quick access
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
  const updateContactInfo = async (info: ContactInfo) => {
    setContactInfo(info);
    try {
      await setDoc(doc(db, 'config', 'contact'), info, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'config/contact');
    }
  };

  const updateClinicHours = async (hours: ClinicHours) => {
    setClinicHours(hours);
    try {
      await setDoc(doc(db, 'config', 'hours'), hours, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'config/hours');
    }
  };

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

    // Update local state first for instant UI response
    setAppointments((prev) => [newAppointment, ...prev]);

    // Save to Firebase Firestore
    try {
      await setDoc(doc(db, 'appointments', id), newAppointment);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `appointments/${id}`);
    }

    return id;
  };

  const updateAppointmentStatus = async (id: string, status: Appointment['status']) => {
    setAppointments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    try {
      await setDoc(doc(db, 'appointments', id), { status }, { merge: true });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `appointments/${id}`);
    }
  };

  const deleteAppointment = async (id: string) => {
    setAppointments((prev) => prev.filter((item) => item.id !== id));
    try {
      await deleteDoc(doc(db, 'appointments', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `appointments/${id}`);
    }
  };

  const exportAppointmentsCsv = () => {
    if (appointments.length === 0) return;
    const headers = [
      'Booking ID',
      'Date',
      'Time',
      'Patient Name',
      'Phone',
      'Age',
      'Gender',
      'Problem Description',
      'Status',
      'Submitted At',
    ];
    const rows = appointments.map((a) => [
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

    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `satkhira_clinic_appointments_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Blog
  const addBlogPost = async (postData: Omit<BlogPost, 'id'>) => {
    const id = `post-${Date.now()}`;
    const newPost: BlogPost = {
      ...postData,
      id,
    };
    setBlogPosts((prev) => [newPost, ...prev]);
    try {
      await setDoc(doc(db, 'blogPosts', id), newPost);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `blogPosts/${id}`);
    }
  };

  const updateBlogPost = async (post: BlogPost) => {
    setBlogPosts((prev) => prev.map((p) => (p.id === post.id ? post : p)));
    try {
      await setDoc(doc(db, 'blogPosts', post.id), post, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `blogPosts/${post.id}`);
    }
  };

  const deleteBlogPost = async (id: string) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id));
    try {
      await deleteDoc(doc(db, 'blogPosts', id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `blogPosts/${id}`);
    }
  };

  // Testimonials
  const addTestimonial = async (
    data: Omit<Testimonial, 'id' | 'status' | 'date'>
  ) => {
    const id = `test-${Date.now()}`;
    const newTestimonial: Testimonial = {
      ...data,
      id,
      status: 'pending',
      date: new Date().toISOString().slice(0, 10),
    };
    setTestimonials((prev) => [newTestimonial, ...prev]);
    try {
      await setDoc(doc(db, 'testimonials', id), newTestimonial);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `testimonials/${id}`);
    }
  };

  const approveTestimonial = async (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'approved' } : t))
    );
    try {
      await setDoc(doc(db, 'testimonials', id), { status: 'approved' }, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `testimonials/${id}`);
    }
  };

  const deleteTestimonial = async (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
    try {
      await deleteDoc(doc(db, 'testimonials', id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `testimonials/${id}`);
    }
  };

  // Certificates
  const addCertificate = (certData: Omit<CertificateItem, 'id'>) => {
    const newCert: CertificateItem = {
      ...certData,
      id: `cert-${Date.now()}`,
    };
    setCertificates((prev) => [newCert, ...prev]);
  };

  const deleteCertificate = (id: string) => {
    setCertificates((prev) => prev.filter((c) => c.id !== id));
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

  const googleLogin = async (): Promise<boolean> => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        setIsAdminAuthenticated(true);
        sessionStorage.setItem('anoarul_admin_session', 'true');
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Google sign-in popup error:', error);
      return false;
    }
  };

  const adminLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      // ignore
    }
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
    localStorage.removeItem('anoarul_clinical_services');
    localStorage.removeItem('anoarul_admin_pwd');

    setContactInfo(initialContactInfo);
    setClinicHours(initialClinicHours);
    setProfilePhoto('/images/dr_anoarul_dma.png');
    setCustomCvUrl(null);
    setBlogPosts(initialBlogPosts);
    setTestimonials(initialTestimonials);
    setCertificates(initialCertificates);
    setClinicalServices(initialClinicalServices);
    setSelectedServiceForBooking(null);
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
        clinicalServices,
        updateClinicalService,
        reorderClinicalServices,
        toggleClinicalServiceVisibility,
        resetClinicalServices,
        selectedServiceForBooking,
        setSelectedServiceForBooking,
        isAdminAuthenticated,
        adminLogin,
        googleLogin,
        adminLogout,
        changeAdminPassword,
        firebaseUser,
        isFirebaseConnected,
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
