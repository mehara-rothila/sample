'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Baby,
  Home,
  Shield,
  Map,
  ClipboardList,
  Calendar,
  Search,
  FileCheck,
  Phone,
  Smartphone,
  MessageSquare,
  Clock,
  Building2,
  Users,
  Mail,
  HelpCircle,
  MapPin,
  BookOpen,
  ChevronRight,
  Zap,
  Moon,
  Sun
} from 'lucide-react';

// Types for our services
interface Service {
  id: string;
  name: string;
  namesSi: string;
  namesTa: string;
  icon: React.ReactNode;
  description: string;
  estimatedTime: string;
}

interface AccessMethod {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Lotus flower component
const LotusFlower = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 100 100">
    {/* Outer layer petals */}
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(36 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(72 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(108 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(144 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(180 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(216 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(252 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(288 50 50)"/>
    <path d="M50,20 Q40,35 45,50 Q50,45 55,50 Q60,35 50,20 Z" fill="#c2185b" transform="rotate(324 50 50)"/>

    {/* Middle layer petals */}
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(18 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(54 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(90 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(126 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(162 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(198 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(234 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(270 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(306 50 50)"/>
    <path d="M50,25 Q42,37 46,50 Q50,47 54,50 Q58,37 50,25 Z" fill="#e91e63" transform="rotate(342 50 50)"/>

    {/* Inner petals */}
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(45 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(90 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(135 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(180 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(225 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(270 50 50)"/>
    <path d="M50,32 Q45,40 47,50 Q50,48 53,50 Q55,40 50,32 Z" fill="#f48fb1" transform="rotate(315 50 50)"/>

    {/* Center */}
    <circle cx="50" cy="50" r="7" fill="#ffd54f"/>
    <circle cx="50" cy="50" r="3" fill="#ff8f00"/>
  </svg>
);

export default function GovLinkPortal() {
  const [activeTab, setActiveTab] = useState('services');
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Helper function to get service name based on active language
  const getServiceName = (service: Service) => {
    switch (activeLanguage) {
      case 'si':
        return service.namesSi;
      case 'ta':
        return service.namesTa;
      default:
        return service.name;
    }
  };

  // Helper function to get page title based on active language
  const getPageTitle = () => {
    switch (activeLanguage) {
      case 'si':
        return 'GovLink ශ්‍රී ලංකාවට සාදරයෙන් පිළිගන්නවා';
      case 'ta':
        return 'GovLink இலங்கைக்கு வரவேற்கிறோம்';
      default:
        return 'Welcome to GovLink Sri Lanka';
    }
  };

  // Helper function to get page subtitle based on active language
  const getPageSubtitle = () => {
    switch (activeLanguage) {
      case 'si':
        return 'පෝලිම් මග හරින්න, ඔබගේ වෙලාව ගිණිකරන්න. ඔබගේ GN කාර්යාල හමුවීම ඔන්ලයින්හි වෙන්කරන්න, ඔබගේ ලිඛිත පූර්ව ඉදිරිපත් කරන්න, සහ එක් සංචාරයකින් ඔබගේ සේවාව සම්පූර්ණ කරන්න.';
      case 'ta':
        return 'வரிசையைத் தவிர்க்கவும், உங்கள் நேரத்தை மிச்சப்படுத்துங்கள். உங்கள் GN அலுவலக சந்திப்பை ஆன்லைனில் முன்பதிவு செய்யுங்கள், உங்கள் ஆவணங்களை முன்கூட்டியே சமர்ப்பிக்கவும், ஒரு வருகையிலேயே உங்கள் சேவையை முடிக்கவும்.';
      default:
        return 'Skip the queues, save your time. Book your GN office appointment online, submit your documents ahead, and complete your service in one visit.';
    }
  };

  const services: Service[] = [
    {
      id: 'income-certificate',
      name: 'Income Certificate',
      namesSi: 'ආදායම් සහතිකය',
      namesTa: 'வருமான சான்றிதழ்',
      icon: <FileText className="w-12 h-12" />,
      description: 'Required for welfare applications, scholarships, and government benefits.',
      estimatedTime: '2-3 days'
    },
    {
      id: 'birth-certificate',
      name: 'Birth Certificate',
      namesSi: 'උප්පැන්න සහතිකය',
      namesTa: 'பிறப்பு சான்றிதழ்',
      icon: <Baby className="w-12 h-12" />,
      description: 'Official birth registration and certificate collection.',
      estimatedTime: '1-2 days'
    },
    {
      id: 'residence-certificate',
      name: 'Residence Certificate',
      namesSi: 'පදිංචි සහතිකය',
      namesTa: 'வசிப்பிட சான்றிதழ்',
      icon: <Home className="w-12 h-12" />,
      description: 'Proof of residence for school admissions and job applications.',
      estimatedTime: '1 day'
    },
    {
      id: 'character-certificate',
      name: 'Character Certificate',
      namesSi: 'චරිත සහතිකය',
      namesTa: 'நல்ல நடத்தை சான்றிதழ்',
      icon: <Shield className="w-12 h-12" />,
      description: 'Police clearance and character verification for employment.',
      estimatedTime: '3-5 days'
    },
    {
      id: 'land-registry',
      name: 'Land Registry',
      namesSi: 'ඉඩම් ලේඛනය',
      namesTa: 'நில பதிவு',
      icon: <Map className="w-12 h-12" />,
      description: 'Land ownership verification and property documentation.',
      estimatedTime: '5-7 days'
    },
    {
      id: 'other-services',
      name: 'Other Services',
      namesSi: 'වෙනත් සේවා',
      namesTa: 'பிற சேவைகள்',
      icon: <ClipboardList className="w-12 h-12" />,
      description: 'Marriage certificates, business registrations, and more.',
      estimatedTime: 'Varies'
    }
  ];

  const accessMethods: AccessMethod[] = [
    {
      id: 'mobile-web',
      title: 'Mobile App & Web',
      icon: <Smartphone className="w-16 h-16" />,
      description: 'Use your smartphone or computer to book appointments, upload documents, and track your application status.'
    },
    {
      id: 'sms',
      title: 'SMS Booking',
      icon: <MessageSquare className="w-16 h-16" />,
      description: 'Send "BOOK" to 1234 and follow simple SMS prompts. Perfect for feature phones.'
    },
    {
      id: 'voice',
      title: 'Voice Call (IVR)',
      icon: <Phone className="w-16 h-16" />,
      description: 'Call our automated booking line and use your keypad to select services. Available 24/7.'
    }
  ];

  const navigationTabs = [
    { id: 'services', label: 'Book Service', icon: <Calendar className="w-4 h-4" /> },
    { id: 'status', label: 'Check Status', icon: <Search className="w-4 h-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact GN', icon: <Phone className="w-4 h-4" /> }
  ];

  const stats = [
    { label: 'GN Offices', value: '14,022', icon: <Building2 className="w-8 h-8" /> },
    { label: 'Services Available', value: '25+', icon: <ClipboardList className="w-8 h-8" /> },
    { label: 'Appointments Today', value: '1,247', icon: <Calendar className="w-8 h-8" /> },
    { label: 'Happy Citizens', value: '50K+', icon: <Users className="w-8 h-8" /> }
  ];

  const handleBookService = (serviceId: string) => {
    alert(`Booking ${serviceId.replace('-', ' ')} - This would navigate to booking form`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    alert(`Switching to ${tab} section`);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      {/* Gradient Background */}
      <div className={`fixed inset-0 ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900'
          : 'bg-gradient-to-br from-amber-100 via-orange-100 to-red-100'
      }`} />

      {/* Animated Glass Orbs */}
      <div className="fixed inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDarkMode
            ? 'bg-gradient-to-br from-blue-600/10 to-purple-600/10'
            : 'bg-gradient-to-br from-red-300/20 to-orange-300/20'
        }`} />
        <div className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl animate-pulse ${
          isDarkMode
            ? 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'
            : 'bg-gradient-to-br from-green-300/20 to-amber-300/20'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDarkMode
            ? 'bg-gradient-to-br from-amber-600/10 to-orange-600/10'
            : 'bg-gradient-to-br from-yellow-300/20 to-red-300/20'
        }`} style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className={`backdrop-blur-xl shadow-2xl border-b ${
          isDarkMode
            ? 'bg-gradient-to-r from-slate-900/90 to-gray-900/90 border-white/5'
            : 'bg-gradient-to-r from-red-900/90 to-green-900/90 border-white/10'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Logo and Brand */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-slate-800/80 to-gray-800/80 shadow-lg shadow-pink-600/20 border-pink-500/30'
                    : 'bg-gradient-to-br from-white/90 to-gray-100/90 shadow-lg shadow-pink-500/20 border-pink-300/40'
                }`}>
                  <LotusFlower className="w-12 h-12" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">GovLink</h1>
                  <p className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`}>
                    One appointment, one visit — GN services that actually work
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2.5 rounded-full transition-all duration-300 backdrop-blur-xl border ${
                    isDarkMode
                      ? 'bg-slate-700/50 border-white/10 hover:bg-slate-600/50 text-red-400'
                      : 'bg-white/20 border-white/20 hover:bg-white/30 text-yellow-300'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Language Selector */}
                <div className="flex gap-2">
                  {[
                    { code: 'en', label: 'English' },
                    { code: 'si', label: 'සිංහල' },
                    { code: 'ta', label: 'தமிழ்' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setActiveLanguage(lang.code)}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                        backdrop-blur-xl border
                        ${activeLanguage === lang.code
                          ? isDarkMode
                            ? 'bg-gradient-to-r from-red-500/80 to-rose-600/80 text-white border-white/20 shadow-lg shadow-red-600/20'
                            : 'bg-gradient-to-r from-yellow-400/90 to-amber-500/90 text-white border-white/30 shadow-lg shadow-amber-500/30'
                          : isDarkMode
                            ? 'bg-slate-800/50 text-gray-300 border-white/5 hover:bg-slate-700/50 hover:border-white/10'
                            : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/20 hover:border-white/20'
                        }
                      `}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className={`backdrop-blur-xl shadow-xl ${
          isDarkMode
            ? 'bg-slate-800/80 border-b-4 border-amber-500'
            : 'bg-white/80 border-b-4 border-amber-400'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center">
              {navigationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    px-6 py-4 text-sm font-medium transition-all duration-300
                    flex items-center gap-2 border-b-2
                    ${activeTab === tab.id
                      ? isDarkMode
                        ? 'bg-gradient-to-t from-red-900/30 to-transparent text-red-400 border-red-500'
                        : 'bg-gradient-to-t from-red-50/50 to-transparent text-red-700 border-amber-400'
                      : isDarkMode
                        ? 'text-gray-400 border-transparent hover:text-red-400 hover:bg-slate-700/30'
                        : 'text-gray-600 border-transparent hover:text-red-600 hover:bg-red-50/30'
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Welcome Banner */}
          <div className={`welcome-banner backdrop-blur-xl rounded-3xl shadow-2xl px-8 pt-6 pb-8 mb-8 border ${
            isDarkMode
              ? 'bg-slate-800/70 border-white/10'
              : 'bg-white/70 border-white/50'
          }`}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-48 h-auto mb-2">
                <LotusFlower className="w-44 h-44" />
              </div>
              <h2 className={`text-5xl font-bold bg-clip-text text-transparent mb-4 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-red-400 to-rose-500'
                  : 'bg-gradient-to-r from-red-700 to-green-700'
              }`}>
                {getPageTitle()}
              </h2>
              <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {getPageSubtitle()}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group backdrop-blur-xl rounded-2xl p-6 shadow-xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-white/10 hover:bg-slate-800/80 hover:border-red-500/30'
                    : 'bg-white/60 border-white/50 hover:bg-white/80'
                }`}
                onClick={() => handleBookService(service.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top content with variable height */}
                <div>
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-red-600/20 to-rose-600/20 group-hover:from-red-600/30 group-hover:to-rose-600/30'
                      : 'bg-gradient-to-br from-red-500/10 to-amber-500/10 group-hover:from-red-500/20 group-hover:to-amber-500/20'
                  }`}>
                    <div className={isDarkMode ? 'text-red-500' : 'text-red-600'}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-red-400' : 'text-red-700'
                  }`}>
                    {getServiceName(service)}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Bottom content pushed to the end of the card */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`flex items-center gap-1 text-xs font-medium ${
                      isDarkMode ? 'text-emerald-400' : 'text-green-600'
                    }`}>
                      <Clock className="w-3 h-3" />
                      {service.estimatedTime}
                    </span>
                  </div>
                  <button className={`
                    w-full py-3 px-4 rounded-xl font-semibold text-white
                    shadow-lg hover:shadow-xl hover:scale-[1.02]
                    transition-all duration-300 flex items-center justify-center gap-2
                    ${isDarkMode
                      ? 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-emerald-500/20 hover:shadow-green-400/30'
                      : 'bg-gradient-to-r from-emerald-700 to-green-600 shadow-emerald-700/30 hover:shadow-green-600/40'
                    }
                  `}>
                    Book Appointment
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Access Methods */}
          <div className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-8 border ${
            isDarkMode
              ? 'bg-slate-800/70 border-white/10'
              : 'bg-white/70 border-white/50'
          }`}>
            <h3 className={`text-3xl font-bold text-center bg-clip-text text-transparent mb-8 ${
              isDarkMode
                ? 'bg-gradient-to-r from-red-400 to-rose-500'
                : 'bg-gradient-to-r from-red-700 to-green-700'
            }`}>
              Three Ways to Book Your Appointment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessMethods.map((method, index) => (
                <div
                  key={method.id}
                  className={`text-center p-6 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-slate-700/40 border-white/5 hover:bg-slate-700/60 hover:border-red-500/30'
                      : 'bg-white/40 border-white/30 hover:bg-white/60 hover:border-amber-400/30'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex justify-center mb-4 ${
                    isDarkMode ? 'text-red-500' : 'text-amber-600'
                  }`}>
                    {method.icon}
                  </div>
                  <h4 className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? 'text-red-400' : 'text-red-700'
                  }`}>
                    {method.title}
                  </h4>
                  <p className={`leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl rounded-2xl p-6 text-center shadow-xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-white/10 hover:bg-slate-800/80'
                    : 'bg-white/60 border-white/40 hover:bg-white/80'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex justify-center mb-3 ${
                  isDarkMode ? 'text-red-500' : 'text-amber-600'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold bg-clip-text text-transparent ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-red-400 to-rose-500'
                    : 'bg-gradient-to-r from-red-600 to-amber-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm mt-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className={`backdrop-blur-xl text-white mt-16 ${
          isDarkMode
            ? 'bg-gradient-to-r from-slate-900/90 to-gray-900/90'
            : 'bg-gradient-to-r from-red-900/90 to-green-900/90'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className={isDarkMode ? 'text-red-400 font-semibold mb-4' : 'text-amber-400 font-semibold mb-4'}>
                  Government of Sri Lanka
                </h4>
                <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`}>
                  <p>Ministry of Home Affairs</p>
                  <p>Divisional Secretariat Services</p>
                  <p>Grama Niladhari Network</p>
                </div>
              </div>
              <div>
                <h4 className={isDarkMode ? 'text-red-400 font-semibold mb-4' : 'text-amber-400 font-semibold mb-4'}>
                  Quick Links
                </h4>
                <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`}>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <BookOpen className="w-3 h-3" /> Service Guidelines
                  </p>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <FileText className="w-3 h-3" /> Document Requirements
                  </p>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <MapPin className="w-3 h-3" /> Office Locations
                  </p>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <HelpCircle className="w-3 h-3" /> FAQ & Help
                  </p>
                </div>
              </div>
              <div>
                <h4 className={isDarkMode ? 'text-red-400 font-semibold mb-4' : 'text-amber-400 font-semibold mb-4'}>
                  Contact Information
                </h4>
                <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`}>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Hotline: 1919 (24/7)
                  </p>
                  <p className="flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> SMS: Send &quot;HELP&quot; to 1234
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3 h-3" /> support@govlink.lk
                  </p>
                </div>
              </div>
              <div>
                <h4 className={isDarkMode ? 'text-red-400 font-semibold mb-4' : 'text-amber-400 font-semibold mb-4'}>
                  System Status
                </h4>
                <div className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`}>
                  <p className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-green-400" />
                    Status: <span className="text-green-400">Online</span>
                  </p>
                  <p>Version: 2.1.0</p>
                  <p>Updated: Aug 2025</p>
                </div>
              </div>
            </div>

            <div className={`border-t mt-8 pt-6 text-center ${
              isDarkMode ? 'border-white/10' : 'border-white/20'
            }`}>
              <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-white/60'}`}>
                © 2025 GovLink Sri Lanka. Built with care for the people of Sri Lanka.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Embedded Global Styles */}
      <style jsx global>{`
        /* GovLink Portal - Enhanced with Dark Mode Support */

        /* 1. Foundational Styles & Custom Properties
        ----------------------------------------------------------------*/
        :root {
          --color-primary-amber: #F59E0B;
          --color-primary-orange: #F97316;
          --color-primary-red: #EF4444;
          --color-brand-red: #991B1B;
          --color-brand-green: #14532D;
          --color-text-dark: #1F2937;
          --color-text-light: #F8FAFC;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: background-color 0.3s ease;
        }

        .dark {
          color-scheme: dark;
        }

        /* 2. Animation Keyframes
        ----------------------------------------------------------------*/
        @keyframes orb-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes button-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        /* 3. Page Structure & Background
        ----------------------------------------------------------------*/
        .animate-pulse {
          animation: orb-pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .relative.z-10 {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* 4. Header & Navigation Styling
        ----------------------------------------------------------------*/
        header {
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .dark header {
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
        }

        header .flex-col {
          gap: 1rem;
        }

        header button {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        header button:hover:not([class*="bg-gradient-to-r"]) {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        nav {
          backdrop-filter: blur(16px) !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .dark nav {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        nav button {
          position: relative;
          overflow: hidden;
        }

        nav button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.7);
          opacity: 0;
          border-radius: 50%;
          transform: scale(1, 1) translate(-50%, -50%);
          transform-origin: 50% 50%;
        }

        .dark nav button::after {
          background: rgba(239, 68, 68, 0.5);
        }

        nav button:hover::after {
          animation: ripple 1s ease-out;
        }

        @keyframes ripple {
          0% {
            transform: scale(0, 0) translate(-50%, -50%);
            opacity: 1;
          }
          100% {
            transform: scale(30, 30) translate(-50%, -50%);
            opacity: 0;
          }
        }

        /* 5. Main Content Cards & Banners
        ----------------------------------------------------------------*/
        .backdrop-blur-xl[class*="bg-white/"],
        .backdrop-blur-xl[class*="bg-slate-"] {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .dark .backdrop-blur-xl[class*="bg-slate-"] {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .backdrop-blur-xl[class*="bg-white/"]:hover,
        .backdrop-blur-xl[class*="bg-slate-"]:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .dark .backdrop-blur-xl[class*="bg-slate-"]:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        .welcome-banner .text-5xl {
          text-shadow: 2px 2px 10px rgba(153, 27, 27, 0.2);
        }

        .dark .welcome-banner .text-5xl {
          text-shadow: 2px 2px 10px rgba(239, 68, 68, 0.2);
        }

        .grid.gap-6 > div,
        .grid.gap-8 > div,
        .grid.gap-4 > div {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .grid.gap-6 > div .w-16.h-16 {
          border: 1px solid rgba(239, 68, 68, 0.1);
          transition: all 0.3s ease;
        }

        .dark .grid.gap-6 > div .w-16.h-16 {
          border: 1px solid rgba(239, 68, 68, 0.1);
        }

        .grid.gap-6 > div:hover .w-16.h-16 {
          transform: scale(1.1) rotate(-10deg);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .dark .grid.gap-6 > div:hover .w-16.h-16 {
          border-color: rgba(239, 68, 68, 0.3);
        }

        .grid.gap-8 > div:hover {
          transform: translateY(-5px);
        }

        .grid.gap-4 > div:hover {
          transform: scale(1.05);
        }

        /* 6. Footer Styling
        ----------------------------------------------------------------*/
        footer {
          box-shadow: 0 -8px 32px 0 rgba(0, 0, 0, 0.37);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dark footer {
          box-shadow: 0 -8px 32px 0 rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        footer h4 {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        footer .text-white\\/80 > p,
        footer .text-gray-400 > p {
          transition: all 0.2s ease-in-out;
        }

        footer .text-white\\/80 > p:hover,
        footer .text-gray-400 > p:hover {
          color: #EF4444 !important;
          transform: translateX(4px);
        }

        footer .text-white\\/60,
        footer .text-gray-500 {
          transition: color 0.3s ease;
        }

        footer .text-white\\/60:hover {
          color: var(--color-text-light);
        }

        footer .text-gray-500:hover {
          color: #9CA3AF;
        }

        /* 7. Dark mode toggle button animation */
        button[aria-label="Toggle dark mode"] svg {
          transition: transform 0.3s ease;
        }

        button[aria-label="Toggle dark mode"]:hover svg {
          transform: rotate(180deg);
        }

        /* 8. Smooth color transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </div>
  );
}