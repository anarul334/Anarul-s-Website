import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ExperienceAndTraining } from './components/ExperienceAndTraining';
import { CertificatesGallery } from './components/CertificatesGallery';
import { AppointmentBooking } from './components/AppointmentBooking';
import { HealthBlog } from './components/HealthBlog';
import { AiHealthAssistant } from './components/AiHealthAssistant';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AdminPortal } from './components/AdminPortal';
import { CvModal } from './components/CvModal';

function MainApp() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isAssistantModalOpen, setIsAssistantModalOpen] = useState(false);

  // Check URL hash for direct links like #admin or #cv
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#admin') {
        setIsAdminOpen(true);
      } else if (hash === '#cv') {
        setIsCvOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B132B] text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Navigation */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenCv={() => setIsCvOpen(true)}
          onOpenAssistant={() => setIsAssistantModalOpen(true)}
        />
        <About />
        <Services />
        <ExperienceAndTraining />
        <CertificatesGallery />
        <AppointmentBooking />
        <HealthBlog />
        <AiHealthAssistant />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions
        onOpenAssistant={() => setIsAssistantModalOpen(true)}
      />

      {/* Admin Portal Modal */}
      {isAdminOpen && (
        <AdminPortal
          onClose={() => {
            setIsAdminOpen(false);
            if (window.location.hash === '#admin') {
              window.history.pushState(null, '', ' ');
            }
          }}
        />
      )}

      {/* Medical CV Modal */}
      {isCvOpen && (
        <CvModal
          onClose={() => {
            setIsCvOpen(false);
            if (window.location.hash === '#cv') {
              window.history.pushState(null, '', ' ');
            }
          }}
        />
      )}

      {/* Floating AI Health Assistant Modal */}
      {isAssistantModalOpen && (
        <AiHealthAssistant
          isModal={true}
          onClose={() => setIsAssistantModalOpen(false)}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <MainApp />
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
