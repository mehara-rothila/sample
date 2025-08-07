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

// Define a type for the language codes
type Language = 'en' | 'si' | 'ta';

// Define a type for the structure of a single translation
interface Translation {
  title: string;
  subtitle: string;
  tagline: string;
  bookAppointment: string;
  threeWays: string;
  aiSearch: {
    title: string;
    placeholder: string;
    suggestions: string[];
  };
  navigation: {
    bookService: string;
    checkStatus: string;
    documents: string;
    contactGN: string;
  };
  accessMethods: {
    mobileWeb: { title: string; description: string; };
    sms: { title: string; description: string; };
    voice: { title: string; description: string; };
  };
  services: {
    descriptions: Record<string, string>;
  };
  stats: {
    gnOffices: string;
    servicesAvailable: string;
    appointmentsToday: string;
    happyCitizens: string;
  };
  footer: {
    government: string;
    ministry: string;
    divisional: string;
    network: string;
    quickLinks: string;
    serviceGuidelines: string;
    documentRequirements: string;
    officeLocations: string;
    faqHelp: string;
    contactInfo: string;
    hotline: string;
    smsHelp: string;
    email: string;
    systemStatus: string;
    status: string;
    online: string;
    version: string;
    updated: string;
    copyright: string;
  };
}

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
const LotusFlower = ({ className = "w-8 h-8" }: { className?: string }) => (
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
  const [activeLanguage, setActiveLanguage] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const translations: Record<Language, Translation> = {
    en: {
      title: 'Welcome to GovLink Sri Lanka',
      subtitle: 'Skip the queues, save your time. Book your GN office appointment online, submit your documents ahead, and complete your service in one visit.',
      tagline: 'One appointment, one visit — GN services that actually work',
      bookAppointment: 'Book Appointment',
      threeWays: 'Three Ways to Book Your Appointment',
      aiSearch: {
        title: 'Ask questions, find services, and access information instantly. Your direct link to public services is here.',
        placeholder: 'What documents do I need for marriage registration?',
        suggestions: ['Passport Renewal', 'Business Registration', 'Marriage Certificate', 'Driving License'],
      },
      navigation: {
        bookService: 'Book Service',
        checkStatus: 'Check Status',
        documents: 'Documents',
        contactGN: 'Contact GN'
      },
      accessMethods: {
        mobileWeb: {
          title: 'Mobile App & Web',
          description: 'Use your smartphone or computer to book appointments, upload documents, and track your application status.'
        },
        sms: {
          title: 'SMS Booking',
          description: 'Send "BOOK" to 1234 and follow simple SMS prompts. Perfect for feature phones.'
        },
        voice: {
          title: 'Voice Call (IVR)',
          description: 'Call our automated booking line and use your keypad to select services. Available 24/7.'
        }
      },
      services: {
        descriptions: {
          'income-certificate': 'Required for welfare applications, scholarships, and government benefits.',
          'birth-certificate': 'Official birth registration and certificate collection.',
          'residence-certificate': 'Proof of residence for school admissions and job applications.',
          'character-certificate': 'Police clearance and character verification for employment.',
          'land-registry': 'Land ownership verification and property documentation.',
          'other-services': 'Marriage certificates, business registrations, and more.'
        }
      },
      stats: {
        gnOffices: 'GN Offices',
        servicesAvailable: 'Services Available',
        appointmentsToday: 'Appointments Today',
        happyCitizens: 'Happy Citizens'
      },
      footer: {
        government: 'Government of Sri Lanka',
        ministry: 'Ministry of Home Affairs',
        divisional: 'Divisional Secretariat Services',
        network: 'Grama Niladhari Network',
        quickLinks: 'Quick Links',
        serviceGuidelines: 'Service Guidelines',
        documentRequirements: 'Document Requirements',
        officeLocations: 'Office Locations',
        faqHelp: 'FAQ & Help',
        contactInfo: 'Contact Information',
        hotline: 'Hotline: 1919 (24/7)',
        smsHelp: 'SMS: Send "HELP" to 1234',
        email: 'support@govlink.lk',
        systemStatus: 'System Status',
        status: 'Status:',
        online: 'Online',
        version: 'Version: 2.1.0',
        updated: 'Updated: Aug 2025',
        copyright: '© 2025 GovLink Sri Lanka. Built with care for the people of Sri Lanka.'
      }
    },
    si: {
      title: 'GovLink ශ්‍රී ලංකාවට සාදරයෙන් පිළිගන්නවා',
      subtitle: 'පෝලිම් මග හරින්න, ඔබගේ වෙලාව ගිණිකරන්න. ඔබගේ ග්‍රාම නිලධාරි කාර්යාල හමුවීම ඔන්ලයින්හි වෙන්කරන්න, ඔබගේ ලිඛිත පූර්ව ඉදිරිපත් කරන්න, සහ එක් සංචාරයකින් ඔබගේ සේවාව සම්පූර්ණ කරන්න.',
      tagline: 'එක් හමුවීමක්, එක් සංචාරයක් — සැබවින්ම වැඩකරන ග්‍රාම නිලධාරි සේවා',
      bookAppointment: 'හමුවීම වෙන්කරන්න',
      threeWays: 'ඔබේ හමුවීම වෙන්කිරීමට ක්‍රම තුනක්',
      aiSearch: {
        title: 'ප්‍රශ්න අසන්න, සේවා සොයාගන්න, සහ තොරතුරු ක්ෂණිකව ලබාගන්න. රාජ්‍ය සේවා සඳහා ඔබේ සෘජු සබැඳිය මෙතැනයි.',
        placeholder: 'විවාහ ලියාපදිංචිය සඳහා අවශ්‍ය ලියකියවිලි මොනවාද?',
        suggestions: ['ගමන් බලපත්‍ර අලුත් කිරීම', 'ව්‍යාපාර ලියාපදිංචිය', 'විවාහ සහතිකය', 'රියදුරු බලපත්‍රය'],
      },
      navigation: {
        bookService: 'සේවාව වෙන්කරන්න',
        checkStatus: 'තත්ත්වය පරීක්ෂා කරන්න',
        documents: 'ලිඛිත',
        contactGN: 'ග්‍රාම නිලධාරි අමතන්න'
      },
      accessMethods: {
        mobileWeb: {
          title: 'ජංගම යෙදුම සහ වෙබ්',
          description: 'ඔබේ ස්මාර්ට් ජංගම දුරකථනය හෝ පරිගණකය භාවිතා කරන්න හමුවීම් වෙන්කිරීමට, ලිඛිත උඩුගත කිරීමට, සහ ඔබේ අයදුම්පත් තත්ත්වය නිරීක්ෂණය කිරීමට.'
        },
        sms: {
          title: 'කෙටි පණිවිඩ වෙන්කිරීම',
          description: '"BOOK" යන්න 1234 ට යවා සරල කෙටි පණිවිඩ උපදේශන අනුගමනය කරන්න. සාමාන්‍ය ජංගම දුරකථන සඳහා හොඳ.'
        },
        voice: {
          title: 'හඬ ඇමතුම (IVR)',
          description: 'අපගේ ස්වයංක්‍රීය වෙන්කිරීම් රේඛාවට ඇමතුම් කර ඔබේ යතුරු පිට භාවිතා කර සේවා තේරීමට. 24/7 ලබා ගත හැක.'
        }
      },
      services: {
        descriptions: {
          'income-certificate': 'සුභසාධන අයදුම්, ශිෂ්‍යත්ව, සහ ආන්ඩු ප්‍රතිලාභ සඳහා අවශ්‍ය.',
          'birth-certificate': 'නිල උප්පැන්න ලියාපදිංචිය සහ සහතික එකතු කිරීම.',
          'residence-certificate': 'පාසල් ඇතුළත් වීම් සහ රැකියා අයදුම් සඳහා පදිංචි සාක්ෂිය.',
          'character-certificate': 'රැකියා සඳහා පොලිස් නිෂ්කාශනය සහ චරිත සත්‍යාපනය.',
          'land-registry': 'ඉඩම් හිමිකාරිත්ව සත්‍යාපනය සහ දේපළ ලේඛන.',
          'other-services': 'විවාහ සහතික, ව්‍යාපාර ලියාපදිංචිකරණ, සහ තවත්.'
        }
      },
      stats: {
        gnOffices: 'ග්‍රාම නිලධාරි කාර්යාල',
        servicesAvailable: 'ලබා ගත හැකි සේවා',
        appointmentsToday: 'අද හමුවීම්',
        happyCitizens: 'සතුටු පුරවැසියන්'
      },
      footer: {
        government: 'ශ්‍රී ලංකා ජනරජයේ රජය',
        ministry: 'ස්වදේශ කටයුතු අමාත්‍යාංශය',
        divisional: 'ප්‍රාදේශීය ලේකම් සේවා',
        network: 'ග්‍රාම නිලධාරි ජාලය',
        quickLinks: 'ඉක්මන් සබැඳි',
        serviceGuidelines: 'සේවා මාර්ගෝපදේශ',
        documentRequirements: 'ලේඛන අවශ්‍යතා',
        officeLocations: 'කාර්යාල ස්ථාන',
        faqHelp: 'නිතර අසන ප්‍රශ්න සහ උදව්',
        contactInfo: 'සම්බන්ධතා තොරතුරු',
        hotline: 'හොට්ලයින්: 1919 (24/7)',
        smsHelp: 'කෙටි පණිවිඩ: "HELP" යන්න 1234 ට යවන්න',
        email: 'support@govlink.lk',
        systemStatus: 'පද්ධති තත්ත්වය',
        status: 'තත්ත්වය:',
        online: 'සබැඳි',
        version: 'අනුවාදය: 2.1.0',
        updated: 'යාවත්කාලීන: අගෝස්තු 2025',
        copyright: '© 2025 GovLink ශ්‍රී ලංකාව. ශ්‍රී ලංකා ජනතාවට ප්‍රේමයෙන් ගොඩනගන ලද.'
      }
    },
    ta: {
      title: 'GovLink இலங்கைக்கு வரவேற்கிறோம்',
      subtitle: 'வரிசையைத் தவிர்க்கவும், உங்கள் நேரத்தை மிச்சப்படுத்துங்கள். உங்கள் கிராம அலுவலர் அலுவலக சந்திப்பை ஆன்லைனில் முன்பதிவு செய்யுங்கள், உங்கள் ஆவணங்களை முன்கூட்டியே சமர்ப்பிக்கவும், ஒரு வருகையிலேயே உங்கள் சேவையை முடிக்கவும்.',
      tagline: 'ஒரு சந்திப்பு, ஒரு வருகை — உண்மையில் வேலை செய்யும் கிராம அலுவலர் சேவைகள்',
      bookAppointment: 'சந்திப்பை முன்பதிவு செய்யுங்கள்',
      threeWays: 'உங்கள் சந்திப்பை முன்பதிவு செய்ய மூன்று வழிகள்',
      aiSearch: {
        title: 'கேள்விகளைக் கேளுங்கள், சேவைகளைக் கண்டறியுங்கள், மற்றும் தகவல்களை உடனடியாக அணுகுங்கள். பொது சேவைகளுக்கான உங்கள் நேரடி இணைப்பு இங்கே உள்ளது.',
        placeholder: 'திருமணப் பதிவுக்கு என்ன ஆவணங்கள் தேவை?',
        suggestions: ['கடவுச்சீட்டு புதுப்பித்தல்', 'வணிகப் பதிவு', 'திருமணச் சான்றிதழ்', 'சாரதி அனுமதிப்பத்திரம்'],
      },
      navigation: {
        bookService: 'சேவையை முன்பதிவு செய்யுங்கள்',
        checkStatus: 'நிலையைச் சரிபார்க்கவும்',
        documents: 'ஆவணங்கள்',
        contactGN: 'கிராம அலுவலரைத் தொடர்பு கொள்ளுங்கள்'
      },
      accessMethods: {
        mobileWeb: {
          title: 'மொபைல் ஆப் & வெப்',
          description: 'சந்திப்புகளை முன்பதிவு செய்ய, ஆவணங்களை பதிவேற்ற மற்றும் உங்கள் விண்ணப்ப நிலையை கண்காணிக்க உங்கள் ஸ்மார்ட்போன் அல்லது கணினியைப் பயன்படுத்துங்கள்.'
        },
        sms: {
          title: 'SMS முன்பதிவு',
          description: '"BOOK" என்று 1234 க்கு அனுப்பி எளிய SMS குறிப்புகளைப் பின்பற்றவும். சாதாரண மொபைல் போன்களுக்கு ஏற்றது.'
        },
        voice: {
          title: 'குரல் அழைப்பு (IVR)',
          description: 'எங்கள் தானியங்கி முன்பதிவு வரியை அழைத்து உங்கள் கீபேடைப் பயன்படுத்தி சேவைகளைத் தேர்ந்தெடுக்கவும். 24/7 கிடைக்கும்.'
        }
      },
      services: {
        descriptions: {
          'income-certificate': 'நல்வாழ்வு விண்ணப்பங்கள், உதவித்தொகைகள் மற்றும் அரசு நலன்களுக்குத் தேவை.',
          'birth-certificate': 'அதிகாரப்பூர்வ பிறப்புப் பதிவு மற்றும் சான்றிதழ் சேகரிப்பு.',
          'residence-certificate': 'பள்ளி அட்மிஷன் மற்றும் வேலை விண்ணப்பங்களுக்கு வசிப்பிட சான்று.',
          'character-certificate': 'வேலைக்காக காவல்துறை அனுமதி மற்றும் குணாதிசய சரிபார்ப்பு.',
          'land-registry': 'நில உரிமை சரிபார்ப்பு மற்றும் சொத்து ஆவணப்படுத்தல்.',
          'other-services': 'திருமண சான்றிதழ்கள், வணிக பதிவுகள் மற்றும் மேலும்.'
        }
      },
      stats: {
        gnOffices: 'கிராம அலுவலர் அலுவலகங்கள்',
        servicesAvailable: 'கிடைக்கும் சேவைகள்',
        appointmentsToday: 'இன்று சந்திப்புகள்',
        happyCitizens: 'மகிழ்ச்சியான குடிமக்கள்'
      },
      footer: {
        government: 'இலங்கை அரசாங்கம்',
        ministry: 'உள்துறை அமைச்சகம்',
        divisional: 'பிராந்திய செயலக சேவைகள்',
        network: 'கிராம அலுவலர் நெட்வொர்க்',
        quickLinks: 'விரைவு இணைப்புகள்',
        serviceGuidelines: 'சேவை வழிகாட்டுதல்கள்',
        documentRequirements: 'ஆவண தேவைகள்',
        officeLocations: 'அலுவலக இடங்கள்',
        faqHelp: 'அடிக்கடி கேட்கப்படும் கேள்விகள் & உதவி',
        contactInfo: 'தொடர்பு தகவல்',
        hotline: 'ஹாட்லைன்: 1919 (24/7)',
        smsHelp: 'SMS: "HELP" என்று 1234 க்கு அனுப்பவும்',
        email: 'support@govlink.lk',
        systemStatus: 'கணினி நிலை',
        status: 'நிலை:',
        online: 'ஆன்லைன்',
        version: 'பதிப்பு: 2.1.0',
        updated: 'புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 2025',
        copyright: '© 2025 GovLink இலங்கை. இலங்கை மக்களுக்காக அன்புடன் உருவாக்கப்பட்டது.'
      }
    }
  };

  const t = translations[activeLanguage];

  const services: Service[] = [
    {
      id: 'income-certificate',
      name: 'Income Certificate',
      namesSi: 'ආදායම් සහතිකය',
      namesTa: 'வருமான சான்றிதழ்',
      icon: <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      description: 'Required for welfare applications, scholarships, and government benefits.',
      estimatedTime: '2-3 days'
    },
    {
      id: 'birth-certificate',
      name: 'Birth Certificate',
      namesSi: 'උප්පැන්න සහතිකය',
      namesTa: 'பிறப்பு சான்றிதழ்',
      icon: <Baby className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      description: 'Official birth registration and certificate collection.',
      estimatedTime: '1-2 days'
    },
    {
      id: 'residence-certificate',
      name: 'Residence Certificate',
      namesSi: 'පදිංචි සහතිකය',
      namesTa: 'வசிப்பிட சான்றிதழ்',
      icon: <Home className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      description: 'Proof of residence for school admissions and job applications.',
      estimatedTime: '1 day'
    },
    {
      id: 'character-certificate',
      name: 'Character Certificate',
      namesSi: 'චරිත සහතිකය',
      namesTa: 'நல்ல நடத்தை சான்றிதழ்',
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      description: 'Police clearance and character verification for employment.',
      estimatedTime: '3-5 days'
    },
    {
      id: 'land-registry',
      name: 'Land Registry',
      namesSi: 'ඉඩම් ලේඛනය',
      namesTa: 'நில பதிவு',
      icon: <Map className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      description: 'Land ownership verification and property documentation.',
      estimatedTime: '5-7 days'
    },
    {
      id: 'other-services',
      name: 'Other Services',
      namesSi: 'වෙනත් සේවා',
      namesTa: 'பிற சேவைகள்',
      icon: <ClipboardList className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      description: 'Marriage certificates, business registrations, and more.',
      estimatedTime: 'Varies'
    }
  ];

  const accessMethods: AccessMethod[] = [
    {
      id: 'mobile-web',
      title: t.accessMethods.mobileWeb.title,
      icon: <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />,
      description: t.accessMethods.mobileWeb.description
    },
    {
      id: 'sms',
      title: t.accessMethods.sms.title,
      icon: <MessageSquare className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />,
      description: t.accessMethods.sms.description
    },
    {
      id: 'voice',
      title: t.accessMethods.voice.title,
      icon: <Phone className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />,
      description: t.accessMethods.voice.description
    }
  ];

  const navigationTabs = [
    { id: 'services', label: t.navigation.bookService, icon: <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 'status', label: t.navigation.checkStatus, icon: <Search className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 'documents', label: t.navigation.documents, icon: <FileCheck className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 'contact', label: t.navigation.contactGN, icon: <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> }
  ];

  const stats = [
    { label: t.stats.gnOffices, value: '14,022', icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> },
    { label: t.stats.servicesAvailable, value: '25+', icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> },
    { label: t.stats.appointmentsToday, value: '1,247', icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> },
    { label: t.stats.happyCitizens, value: '50K+', icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> }
  ];

  const handleBookService = (serviceId: string) => {
    console.log(`Booking ${serviceId.replace('-', ' ')} - This would navigate to booking form`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Switching to ${tab} section`);
  };

  const getFontFamily = () => {
    switch (activeLanguage) {
      case 'si':
        return '"Noto Sans Sinhala", serif';
      case 'ta':
        return '"Noto Sans Tamil", serif';
      default:
        return 'inherit';
    }
  };

  const getTextSizeClasses = (baseSize: string) => {
    if (activeLanguage === 'ta') {
      // Tamil text needs larger sizes on mobile for better readability
      switch (baseSize) {
        case 'xs': return 'text-sm sm:text-base lg:text-lg';
        case 'sm': return 'text-base sm:text-lg lg:text-xl';
        case 'base': return 'text-lg sm:text-xl lg:text-2xl';
        case 'lg': return 'text-xl sm:text-2xl lg:text-3xl';
        case 'xl': return 'text-2xl sm:text-3xl lg:text-4xl';
        case '2xl': return 'text-3xl sm:text-4xl lg:text-5xl';
        case '3xl': return 'text-4xl sm:text-5xl lg:text-6xl';
        default: return baseSize;
      }
    } else if (activeLanguage === 'si') {
      // Sinhala text needs slightly larger sizes
      switch (baseSize) {
        case 'xs': return 'text-sm sm:text-base lg:text-lg';
        case 'sm': return 'text-base sm:text-lg lg:text-xl';
        case 'base': return 'text-base sm:text-lg lg:text-xl';
        case 'lg': return 'text-lg sm:text-xl lg:text-2xl';
        case 'xl': return 'text-xl sm:text-2xl lg:text-3xl';
        case '2xl': return 'text-2xl sm:text-3xl lg:text-4xl';
        case '3xl': return 'text-3xl sm:text-4xl lg:text-5xl';
        default: return baseSize;
      }
    }
    // English uses standard responsive sizes
    return baseSize;
  };

  const getLineHeight = () => {
    switch (activeLanguage) {
      case 'ta':
        return '1.8'; // Tamil needs more line height for complex characters
      case 'si':
        return '1.7'; // Sinhala needs slightly more line height
      default:
        return '1.6';
    }
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
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl animate-pulse ${
          isDarkMode
            ? 'bg-gradient-to-br from-blue-600/10 to-purple-600/10'
            : 'bg-gradient-to-br from-red-300/20 to-orange-300/20'
        }`} />
        <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full blur-3xl animate-pulse ${
          isDarkMode
            ? 'bg-gradient-to-br from-emerald-600/10 to-cyan-600/10'
            : 'bg-gradient-to-br from-green-300/20 to-amber-300/20'
        }`} style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/4 sm:left-1/3 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full blur-3xl animate-pulse ${
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
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
              {/* Logo and Brand */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl border ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-slate-800/80 to-gray-800/80 shadow-lg shadow-pink-600/20 border-pink-500/30'
                    : 'bg-gradient-to-br from-white/90 to-gray-100/90 shadow-lg shadow-pink-500/20 border-pink-300/40'
                }`}>
                  <LotusFlower className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <div className="text-center lg:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">GovLink</h1>
                  <p className={`${getTextSizeClasses('text-xs sm:text-sm')} italic ${isDarkMode ? 'text-gray-400' : 'text-white/80'} max-w-xs sm:max-w-sm lg:max-w-none`} 
                     style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                    {t.tagline}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 backdrop-blur-xl border ${
                    isDarkMode
                      ? 'bg-slate-700/50 border-white/10 hover:bg-slate-600/50 text-red-400'
                      : 'bg-white/20 border-white/20 hover:bg-white/30 text-yellow-300'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>

                {/* Language Selector */}
                <div className="flex gap-1 sm:gap-2">
                  {[
                    { code: 'en', label: 'EN' },
                    { code: 'si', label: 'සි' },
                    { code: 'ta', label: 'த' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setActiveLanguage(lang.code as Language)}
                      className={`
                        px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                        backdrop-blur-xl border min-w-[2.5rem] sm:min-w-[3rem]
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
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex justify-center overflow-x-auto scrollbar-hide">
              {navigationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    flex-shrink-0 px-3 py-3 sm:px-4 sm:py-4 lg:px-6 ${getTextSizeClasses('text-xs sm:text-sm')} font-medium transition-all duration-300
                    flex items-center gap-1.5 sm:gap-2 border-b-2 min-w-fit
                    ${activeTab === tab.id
                      ? isDarkMode
                        ? 'bg-gradient-to-t from-red-900/30 to-transparent text-red-400 border-red-500'
                        : 'bg-gradient-to-t from-red-50/50 to-transparent text-red-700 border-amber-400'
                      : isDarkMode
                        ? 'text-gray-400 border-transparent hover:text-red-400 hover:bg-slate-700/30'
                        : 'text-gray-600 border-transparent hover:text-red-600 hover:bg-red-50/30'
                    }
                  `}
                  style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}
                >
                  {tab.icon}
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8">
          {/* Welcome Banner */}
          <div className={`welcome-banner backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 mb-6 sm:mb-8 border ${
            isDarkMode
              ? 'bg-slate-800/70 border-white/10'
              : 'bg-white/70 border-white/50'
          }`}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 mb-3 sm:mb-4">
                <LotusFlower className="w-full h-full" />
              </div>
              <h2 className={`${getTextSizeClasses('text-2xl sm:text-4xl lg:text-5xl')} font-bold bg-clip-text text-transparent mb-3 sm:mb-4 px-2 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-red-400 to-rose-500'
                  : 'bg-gradient-to-r from-red-700 to-green-700'
              }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                {t.title}
              </h2>
              <p className={`${getTextSizeClasses('text-sm sm:text-base lg:text-lg')} max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* AI Search Section */}
          <div className="mb-8 sm:mb-12">
            <div className="text-center max-w-4xl mx-auto px-2">
              <h3 className={`${getTextSizeClasses('text-lg sm:text-xl lg:text-2xl')} font-semibold mb-4 sm:mb-6 px-2 ${
                isDarkMode ? 'text-rose-200/90' : 'text-rose-900/80'
              }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                {t.aiSearch.title}
              </h3>
              
              <div className={`relative flex items-center w-full p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl border ${
                isDarkMode
                  ? 'bg-gradient-to-r from-slate-800/90 to-slate-700/90 border-red-500/20 shadow-red-500/10'
                  : 'bg-gradient-to-r from-white/95 to-gray-50/95 border-amber-400/30 shadow-amber-500/20'
              }`}>
                <input
                  type="text"
                  placeholder={t.aiSearch.placeholder}
                  className={`w-full bg-transparent pl-4 pr-12 sm:pl-6 sm:pr-20 py-3 sm:py-4 text-sm sm:text-base focus:outline-none font-medium ${
                    isDarkMode 
                      ? 'text-gray-200 placeholder:text-gray-400' 
                      : 'text-gray-800 placeholder:text-gray-600'
                  }`}
                  style={{ fontFamily: getFontFamily() }}
                />
                <button className={`absolute right-1.5 sm:right-2 top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 w-12 sm:w-16 rounded-xl sm:rounded-2xl text-white flex items-center justify-center
                  bg-gradient-to-r from-amber-500 via-orange-500 to-red-500
                  hover:from-amber-600 hover:via-orange-600 hover:to-red-600
                  hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-600/40
                  focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-orange-400/50 focus:ring-offset-2
                  ${isDarkMode ? 'focus:ring-offset-slate-800' : 'focus:ring-offset-white'}
                `}>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                {t.aiSearch.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                      backdrop-blur-xl border shadow-lg whitespace-nowrap hover:scale-105
                      ${isDarkMode
                        ? 'bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-gray-200 border-red-400/30 hover:from-slate-600/90 hover:to-slate-500/90 hover:border-red-400/50 shadow-red-500/10'
                        : 'bg-gradient-to-r from-white/90 to-gray-100/90 text-gray-700 border-amber-300/40 hover:from-amber-50/95 hover:to-orange-50/95 hover:border-amber-400/60 shadow-amber-500/20'
                      }`}
                    style={{ fontFamily: getFontFamily() }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col min-h-[200px] sm:min-h-[240px] ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-white/10 hover:bg-slate-800/80 hover:border-red-500/30'
                    : 'bg-white/60 border-white/50 hover:bg-white/80'
                }`}
                onClick={() => handleBookService(service.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top content */}
                <div className="flex-1">
                  <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-red-600/20 to-rose-600/20 group-hover:from-red-600/30 group-hover:to-rose-600/30'
                      : 'bg-gradient-to-br from-red-500/10 to-amber-500/10 group-hover:from-red-500/20 group-hover:to-amber-500/20'
                  }`}>
                    <div className={isDarkMode ? 'text-red-500' : 'text-red-600'}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className={`${getTextSizeClasses('text-lg sm:text-xl')} font-semibold mb-2 sm:mb-3 ${
                    isDarkMode ? 'text-red-400' : 'text-red-700'
                  }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                    {activeLanguage === 'si' ? service.namesSi : activeLanguage === 'ta' ? service.namesTa : service.name}
                  </h3>
                  <p className={`${getTextSizeClasses('text-xs sm:text-sm')} mb-3 sm:mb-4 leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                    {t.services.descriptions[service.id] || service.description}
                  </p>
                </div>

                {/* Bottom content */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`flex items-center gap-1 text-xs font-medium ${
                      isDarkMode ? 'text-emerald-400' : 'text-green-600'
                    }`}>
                      <Clock className="w-3 h-3" />
                      {service.estimatedTime}
                    </span>
                  </div>
                  <button className={`
                    w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-white ${getTextSizeClasses('text-sm sm:text-base')}
                    shadow-lg hover:shadow-xl hover:scale-[1.02]
                    transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2
                    ${isDarkMode
                      ? 'bg-gradient-to-r from-emerald-500 to-green-400 shadow-emerald-500/20 hover:shadow-green-400/30'
                      : 'bg-gradient-to-r from-emerald-700 to-green-600 shadow-emerald-700/30 hover:shadow-green-600/40'
                    }
                  `} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                    {t.bookAppointment}
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Access Methods */}
          <div className={`backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border ${
            isDarkMode
              ? 'bg-slate-800/70 border-white/10'
              : 'bg-white/70 border-white/50'
          }`}>
            <h3 className={`${getTextSizeClasses('text-xl sm:text-2xl lg:text-3xl')} font-bold text-center bg-clip-text text-transparent mb-6 sm:mb-8 px-2 ${
              isDarkMode
                ? 'bg-gradient-to-r from-red-400 to-rose-500'
                : 'bg-gradient-to-r from-red-700 to-green-700'
            }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
              {t.threeWays}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {accessMethods.map((method, index) => (
                <div
                  key={method.id}
                  className={`text-center p-4 sm:p-6 backdrop-blur-xl rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-slate-700/40 border-white/5 hover:bg-slate-700/60 hover:border-red-500/30'
                      : 'bg-white/40 border-white/30 hover:bg-white/60 hover:border-amber-400/30'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex justify-center mb-3 sm:mb-4 ${
                    isDarkMode ? 'text-red-500' : 'text-amber-600'
                  }`}>
                    {method.icon}
                  </div>
                  <h4 className={`${getTextSizeClasses('text-lg sm:text-xl')} font-semibold mb-2 sm:mb-3 px-1 ${
                    isDarkMode ? 'text-red-400' : 'text-red-700'
                  }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                    {method.title}
                  </h4>
                  <p className={`${getTextSizeClasses('text-sm sm:text-base')} leading-relaxed px-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-800/60 border-white/10 hover:bg-slate-800/80'
                    : 'bg-white/60 border-white/40 hover:bg-white/80'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex justify-center mb-2 sm:mb-3 ${
                  isDarkMode ? 'text-red-500' : 'text-amber-600'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-red-400 to-rose-500'
                    : 'bg-gradient-to-r from-red-600 to-amber-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`${getTextSizeClasses('text-xs sm:text-sm')} mt-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`} style={{ fontFamily: getFontFamily(), lineHeight: getLineHeight() }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className={`backdrop-blur-xl text-white mt-8 sm:mt-12 lg:mt-16 ${
          isDarkMode
            ? 'bg-gradient-to-r from-slate-900/90 to-gray-900/90'
            : 'bg-gradient-to-r from-red-900/90 to-green-900/90'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <h4 className={`${isDarkMode ? 'text-red-400 font-semibold mb-3 sm:mb-4' : 'text-amber-400 font-semibold mb-3 sm:mb-4'} text-sm sm:text-base`} 
                   style={{ fontFamily: getFontFamily(), lineHeight: '1.4' }}>
                  {t.footer.government}
                </h4>
                <div className={`text-xs sm:text-sm space-y-1 sm:space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`} 
                     style={{ fontFamily: getFontFamily(), lineHeight: '1.6' }}>
                  <p>{t.footer.ministry}</p>
                  <p>{t.footer.divisional}</p>
                  <p>{t.footer.network}</p>
                </div>
              </div>
              <div>
                <h4 className={`${isDarkMode ? 'text-red-400 font-semibold mb-3 sm:mb-4' : 'text-amber-400 font-semibold mb-3 sm:mb-4'} text-sm sm:text-base`} 
                   style={{ fontFamily: getFontFamily(), lineHeight: '1.4' }}>
                  {t.footer.quickLinks}
                </h4>
                <div className={`text-xs sm:text-sm space-y-1 sm:space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`} 
                     style={{ fontFamily: getFontFamily(), lineHeight: '1.6' }}>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <BookOpen className="w-3 h-3" /> {t.footer.serviceGuidelines}
                  </p>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <FileText className="w-3 h-3" /> {t.footer.documentRequirements}
                  </p>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <MapPin className="w-3 h-3" /> {t.footer.officeLocations}
                  </p>
                  <p className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <HelpCircle className="w-3 h-3" /> {t.footer.faqHelp}
                  </p>
                </div>
              </div>
              <div>
                <h4 className={`${isDarkMode ? 'text-red-400 font-semibold mb-3 sm:mb-4' : 'text-amber-400 font-semibold mb-3 sm:mb-4'} text-sm sm:text-base`} 
                   style={{ fontFamily: getFontFamily(), lineHeight: '1.4' }}>
                  {t.footer.contactInfo}
                </h4>
                <div className={`text-xs sm:text-sm space-y-1 sm:space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`} 
                     style={{ fontFamily: getFontFamily(), lineHeight: '1.6' }}>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3 h-3" /> {t.footer.hotline}
                  </p>
                  <p className="flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> {t.footer.smsHelp}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3 h-3" /> {t.footer.email}
                  </p>
                </div>
              </div>
              <div>
                <h4 className={`${isDarkMode ? 'text-red-400 font-semibold mb-3 sm:mb-4' : 'text-amber-400 font-semibold mb-3 sm:mb-4'} text-sm sm:text-base`} 
                   style={{ fontFamily: getFontFamily(), lineHeight: '1.4' }}>
                  {t.footer.systemStatus}
                </h4>
                <div className={`text-xs sm:text-sm space-y-1 sm:space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-white/80'}`} 
                     style={{ fontFamily: getFontFamily(), lineHeight: '1.6' }}>
                  <p className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-green-400" />
                    {t.footer.status} <span className="text-green-400">{t.footer.online}</span>
                  </p>
                  <p>{t.footer.version}</p>
                  <p>{t.footer.updated}</p>
                </div>
              </div>
            </div>

            <div className={`border-t mt-6 sm:mt-8 pt-4 sm:pt-6 text-center ${
              isDarkMode ? 'border-white/10' : 'border-white/20'
            }`}>
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-500' : 'text-white/60'}`} 
                 style={{ fontFamily: getFontFamily(), lineHeight: '1.6' }}>
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Embedded Global Styles */}
      <style jsx global>{`
        /* Import Google Fonts for better Sinhala and Tamil support */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        /* Hide scrollbar but allow scrolling */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Responsive font sizes */
        @media (max-width: 640px) {
          .text-5xl { font-size: 2rem; line-height: 2.5rem; }
          .text-4xl { font-size: 1.875rem; line-height: 2.25rem; }
          .text-3xl { font-size: 1.5rem; line-height: 2rem; }
          .text-2xl { font-size: 1.25rem; line-height: 1.75rem; }
          .text-xl { font-size: 1.125rem; line-height: 1.75rem; }
          .text-lg { font-size: 1rem; line-height: 1.5rem; }
        }

        /* Enhanced touch targets for mobile */
        @media (max-width: 768px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Smooth animations */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        /* Focus styles for accessibility */
        button:focus-visible {
          outline: 2px solid #F59E0B;
          outline-offset: 2px;
        }

        /* Ensure proper text rendering for all languages */
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Language-specific font improvements */
        [style*="Noto Sans Sinhala"] {
          -webkit-font-feature-settings: "kern" 1;
          -moz-font-feature-settings: "kern" 1;
          -o-font-feature-settings: "kern" 1;
          font-feature-settings: "kern" 1;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        [style*="Noto Sans Tamil"] {
          -webkit-font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
          -moz-font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
          -o-font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
          font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
          word-break: break-word;
          overflow-wrap: break-word;
          -webkit-text-size-adjust: 100%;
          text-rendering: optimizeLegibility;
        }

        /* Tamil-specific mobile optimizations */
        @media (max-width: 640px) {
          [style*="Noto Sans Tamil"] {
            font-size: 110% !important;
            letter-spacing: 0.01em;
            word-spacing: 0.1em;
          }
          
          [style*="Noto Sans Tamil"] .text-xs { font-size: 0.9rem !important; }
          [style*="Noto Sans Tamil"] .text-sm { font-size: 1rem !important; }
          [style*="Noto Sans Tamil"] .text-base { font-size: 1.125rem !important; }
          [style*="Noto Sans Tamil"] .text-lg { font-size: 1.25rem !important; }
          [style*="Noto Sans Tamil"] .text-xl { font-size: 1.375rem !important; }
        }

        /* Sinhala-specific mobile optimizations */
        @media (max-width: 640px) {
          [style*="Noto Sans Sinhala"] {
            letter-spacing: 0.005em;
          }
        }

        /* Improve mobile performance */
        .backdrop-blur-xl {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
          will-change: transform;
        }

        /* Animation performance improvements */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Prevent layout shifts */
        .grid > * {
          min-height: 0;
        }
      `}</style>
    </div>
  );
}