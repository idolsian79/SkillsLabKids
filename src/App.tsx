/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain,
  Cpu, 
  Code2, 
  Lightbulb, 
  Trophy, 
  MapPin, 
  Users, 
  MessageCircle, 
  Send,
  Zap,
  Microscope,
  Palette,
  Calculator,
  Settings,
  ChevronRight,
  Sparkles,
  Heart,
  ShieldCheck,
  Rocket
} from 'lucide-react';

type Language = 'RU' | 'EN';

const translations = {
  EN: {
    nav: {
      name: "Skill Lab Kids",
      location: "ONLINE"
    },
    hero: {
      title: "Mind Development Through Robotics & Creativity",
      subtitle: "Individual online lessons for children aged 4-12",
      firstResult: "The child creates a project in the very first lesson!",
      cta: "book a lesson"
    },
    philosophy: {
      title: "Skill Lab Kids is not just classes for children.",
      p1: "It is a space where children learn to think, create, and find solutions.",
      p2: "Our goal is not just to 'keep the child busy' for an hour. It is important to us that children develop, feel confident, and see the results of their work.",
      subtitle: "Through robotics and creativity, children learn:",
      points: [
        { icon: Brain, text: "Development of logic and engineering thinking" },
        { icon: Code2, text: "Programming in a playful way" },
        { icon: Cpu, text: "Creating and managing real robots" },
        { icon: Trophy, text: "Results from the first lesson" }
      ]
    },
    steam: {
      title: "STEAM-APPROACH",
      subtitle: "EXCITING. USEFUL. MODERN.",
      items: [
        { icon: Microscope, text: "Science" },
        { icon: Cpu, text: "Technology" },
        { icon: Settings, text: "Engineering" },
        { icon: Palette, text: "Art" },
        { icon: Calculator, text: "Math" }
      ]
    },
    pricing: {
      title: "Cost of online lessons:",
      trial: {
        title: "Trial lesson:",
        price: "100 AED",
        duration: "45 min",
        features: ["Introduction to child", "First mini-project (assembly + programming)"]
      },
      package: {
        title: "8-lesson package:",
        price: "130 AED",
        duration: "45 min",
        features: ["Individual lesson plan", "Program based on interests", "Progressive difficulty", "Priority booking"]
      },
      single: {
        title: "Single lesson:",
        price: "150 AED",
        duration: "45 min",
        features: ["Individual lesson", "Assembly and programming"]
      },
      book: "Book now"
    },
    robotics: {
      title: "Robotics",
      desc: "Children assemble and program real robots, learning the basics of logic and engineering thinking.",
      list: [
        "Working with LEGO Education",
        "Basic programming",
        "Development of logic and systems thinking",
        "Understanding 'how it all works'"
      ]
    },
    painting: {
      title: "Painting",
      desc: "Painting is not about 'drawing beautifully', but about the ability to think freely and express oneself.",
      list: [
        "Working with color and form",
        "Imagination development",
        "Confidence in self-expression",
        "Unlocking the child's potential"
      ]
    },
    formats: {
      title: "CLASS FORMATS",
      subtitle: "We select the format according to the child and their character.",
      p1: "Individual online lessons",
      p2: "Online mini-groups (up to 4 children)",
      p3: "Individual online lessons for children",
      note: "Maximum attention and results"
    },
    about: {
      title: "About me",
      name: "My name is Anastasia.",
      bio1: "I am a teacher with international experience, specializing in children's development through robotics and creativity.",
      bio2: "In my work, I do not follow template programs. I build classes for each child — their character, interests, and pace.",
      bio3: "For me, it is important not just to teach, but to help the child feel confident and interested in learning.",
      bio4: "I create a calm and supportive atmosphere in which the child is not afraid to try, make mistakes, and find solutions.",
      bio5: "Parents value my approach for the combination of structure and softness: the child learns discipline but maintains interest and motivation."
    },
    footer: {
      title: "A Conscious Approach to Child Development",
      subtitle: "For parents who choose quality and attention for their child.",
      desc: "Individual work, support, and focus on results help unlock the child's potential, develop confidence, and form the skills of the future.",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      phone: "+971 52 471 0753"
    }
  },
  RU: {
    nav: {
      name: "Skill Lab Kids",
      location: "ОНЛАЙН"
    },
    hero: {
      title: "Развитие мышления через робототехнику и творчество",
      subtitle: "Индивидуальные онлайн занятия для детей 4-12 лет",
      firstResult: "Ребенок создает проект уже на первом занятии!",
      cta: "записаться на занятие"
    },
    philosophy: {
      title: "Skill Lab Kids — это не просто занятия для детей.",
      p1: "Это пространство, где ребёнок учится думать, создавать и находить решения.",
      p2: "Мы не ставим цель «занять ребёнка на час». Нам важно, чтобы ребёнок развивался, чувствовал уверенность в себе и видел результат своей работы.",
      subtitle: "Через робототехнику и творчество дети учатся:",
      points: [
        { icon: Brain, text: "Развитие логики и инженерного мышления" },
        { icon: Code2, text: "Программирование в игровой форме" },
        { icon: Cpu, text: "Создание и управление настоящими роботами" },
        { icon: Trophy, text: "Результат уже с первого занятия" }
      ]
    },
    steam: {
      title: "STEAM-ПОДХОД",
      subtitle: "УВЛЕКАТЕЛЬНО. ПОЛЕЗНО. СОВРЕМЕННО.",
      items: [
        { icon: Microscope, text: "НАУКА" },
        { icon: Cpu, text: "ТЕХНОЛОГИИ" },
        { icon: Settings, text: "ИНЖЕНЕРИЯ" },
        { icon: Palette, text: "ТВОРЧЕСТВО" },
        { icon: Calculator, text: "МАТЕМАТИКА" }
      ]
    },
    pricing: {
      title: "Стоимость онлайн-занятий:",
      trial: {
        title: "Пробное занятие:",
        price: "100 AED",
        duration: "45 минут",
        features: ["знакомство с ребенком", "первый мини-проект (сборка + написание программы)"]
      },
      package: {
        title: "Пакет 8 занятий:",
        price: "130 AED",
        duration: "45 минут",
        features: ["индивидуальный план занятий", "программа под интересы ребенка", "постепенное усложнение проектов", "приоритетное бронирование времени"]
      },
      single: {
        title: "Разовое занятие:",
        price: "150 AED",
        duration: "45 минут",
        features: ["индивидуальное занятие", "сборка и программирование"]
      },
      book: "Записаться"
    },
    robotics: {
      title: "Робототехника",
      desc: "Ребёнок собирает и программирует настоящих роботов, изучая основы логики и инженерного мышления.",
      list: [
        "работа с LEGO Education",
        "базовое программирование",
        "развитие логики и системного мышления",
        "понимание «как всё устроено»"
      ]
    },
    painting: {
      title: "Живопись",
      desc: "Живопись — это не про «рисовать красиво», а про умение мыслить свободно и выражать себя.",
      list: [
        "работа с цветом и формой",
        "развитие воображения",
        "уверенность в самовыражении",
        "раскрытие потенциала ребёнка"
      ]
    },
    formats: {
      title: "ФОРМАТ ЗАНЯТИЙ",
      subtitle: "Мы подбираем формат под ребёнка и его характер.",
      p1: "индивидуальные онлайн занятия",
      p2: "мини-группы онлайн (до 4 детей)",
      p3: "Индивидуальные онлайн занятия для детей",
      note: "Максимум внимания и результата"
    },
    about: {
      title: "Обо мне",
      name: "Меня зовут Анастасия.",
      bio1: "Я педагог с международным опытом, специализируюсь на развитии детей через робототехнику и творчество.",
      bio2: "В своей работе я не следую шаблонным программам. Я выстраиваю занятия под каждого ребёнка — его характер, интересы и темп.",
      bio3: "Для меня важно не просто научить, а помочь ребёнку почувствовать уверенность в себе и интерес к обучению.",
      bio4: "Я создаю спокойную и поддерживающую атмосферу, в которой ребёнок не боится пробовать, ошибаться и находить решения.",
      bio5: "Родители ценят мой подход за сочетание структуры и мягкости: ребёнок учится дисциплине, но при этом сохраняет интерес и мотивацию."
    },
    footer: {
      title: "Осознанный подход к развитию ребёнка",
      subtitle: "Для родителей, которые выбирают качество и внимание к своему ребёнку.",
      desc: "Индивидуальная работа, поддержка и фокус на результате помогают раскрыть потенциал ребёнка, развить уверенность и сформировать навыки будущего.",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      phone: "+971 52 471 0753"
    }
  }
};

const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`relative group cursor-pointer block ${className}`}>
    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transform group-hover:scale-105 transition-transform overflow-hidden">
      <img 
        src="https://i.ibb.co/Ng0xFvV4/Untitled-design-25.png" 
        alt="Skill Lab Kids Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback if direct link doesn't work as expected
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement?.insertAdjacentHTML('afterbegin', '<div class="w-full h-full bg-gradient-to-tr from-skill-navy via-skill-purple to-skill-pink rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white sm:w-7 sm:h-7"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 5.888A3 3 0 1 0 12 15Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.52 5.888A3 3 0 1 1 12 15Z"/><path d="M9 14.7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z"/><path d="M12 11v3"/><path d="M11 11h2"/></svg></div>');
        }}
      />
    </div>
  </a>
);

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const t = translations[lang];

  const waLink = "https://api.whatsapp.com/send?phone=971524710753";
  const tgLink = "https://t.me/+971524710753";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-skill-teal/20 selection:text-skill-navy overflow-x-hidden text-skill-navy dot-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-skill-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Logo />
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden sm:block">
              <a 
                href="#contact"
                className="bg-skill-navy text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-skill-navy/20"
              >
                {t.hero.cta}
              </a>
            </div>
            
            <div className="flex items-center bg-skill-navy/5 p-1 rounded-full border border-skill-navy/5">
              <button 
                onClick={() => setLang('EN')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'EN' ? 'bg-skill-navy text-white shadow-md' : 'text-skill-navy/40 hover:text-skill-navy'}`}
              >
                ENG
              </button>
              <button 
                onClick={() => setLang('RU')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'RU' ? 'bg-skill-navy text-white shadow-md' : 'text-skill-navy/40 hover:text-skill-navy'}`}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden bg-white">
        {/* Abstract elements from flyer */}
        <div className="absolute top-20 right-[10%] w-32 h-32 bg-skill-purple/5 dot-pattern opacity-40" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:text-left text-center lg:pr-8"
            >
              <h1 className="font-display leading-[1.1] mb-6 sm:mb-8 font-extrabold text-skill-navy tracking-tight">
                <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-8xl block uppercase mb-2 italic">
                  {lang === 'RU' ? 'РОБОТОТЕХНИКА' : 'ROBOTICS'}
                </span>
                <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl block uppercase text-skill-orange italic">
                  {lang === 'RU' ? 'ДЛЯ ДЕТЕЙ' : 'FOR KIDS'}
                </span>
              </h1>
              
              <h2 className="font-display text-skill-navy/60 text-base sm:text-xl lg:text-2xl max-w-2xl lg:mx-0 mx-auto mb-10 font-medium leading-relaxed">
                {t.hero.subtitle}
              </h2>
              
              <div className="flex flex-col gap-6 mb-12 items-center lg:items-start">
                <div className="flex items-center gap-3 sm:gap-4 bg-skill-teal/5 border border-skill-teal/10 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl sm:rounded-3xl max-w-[95%] sm:max-w-none shadow-sm">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-skill-teal flex items-center justify-center flex-shrink-0 shadow-md shadow-skill-teal/20">
                    <Sparkles className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-skill-navy text-sm sm:text-lg font-bold leading-tight text-left">
                    {t.hero.firstResult}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:justify-start justify-center">
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold tracking-wide hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-500/20 uppercase text-xs sm:text-sm"
                >
                  WhatsApp
                </a>
                <a 
                  href={tgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#0088cc] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold tracking-wide hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 uppercase text-xs sm:text-sm"
                >
                  Telegram
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="lg:col-span-5 relative flex justify-center mt-12 lg:mt-0 px-2 sm:px-0"
            >
              <div className="relative z-10 w-full max-w-[400px] aspect-[4/3] rounded-3xl sm:rounded-[40px] overflow-hidden bg-white shadow-2xl p-1 sm:p-4 border border-skill-navy/5 sm:border-2">
                <img 
                  src="https://i.ibb.co/Z6cK92kT/LEGO-SPIKE-PRIME-5.jpg" 
                  alt="Child working with robotics" 
                  className="w-full h-full object-cover rounded-2xl sm:rounded-[32px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Flyer design blobs */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-skill-purple rounded-full blur-[80px] opacity-10" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-skill-teal rounded-full blur-[60px] opacity-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Updated with Flyer Style */}
      <section className="py-20 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-12">
                <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-skill-navy mb-8 leading-tight italic uppercase">
                  {lang === 'RU' ? 'ПОДХОД, КОТОРЫЙ ВДОХНОВЛЯЕТ' : 'APPROACH THAT INSPIRES'}
                </h2>
                <p className="text-skill-navy/70 text-lg sm:text-xl leading-relaxed mb-10 font-medium">
                  {lang === 'RU' 
                    ? 'Мы не просто учим собирать роботов. Мы развиваем инженерное мышление, логику и креативность через практику.' 
                    : 'We don\'t just teach how to build robots. We develop engineering thinking, logic and creativity through practice.'}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {t.philosophy.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-skill-teal flex items-center justify-center flex-shrink-0 transition-all bg-white group-hover:bg-skill-teal text-skill-teal group-hover:text-white shadow-sm">
                        <point.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-skill-navy leading-tight">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* STEAM Approach Section - Updated styling to look less like buttons */}
      <section className="py-20 bg-white border-y border-skill-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
           <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-skill-purple mb-4 tracking-wider uppercase italic">
             {t.steam.title}
           </h2>
           <p className="text-skill-pink font-bold text-sm sm:text-lg mb-12 tracking-widest uppercase">
             {t.steam.subtitle}
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { ...t.steam.items[0], color: 'text-skill-navy' },
                { ...t.steam.items[1], color: 'text-skill-teal' },
                { ...t.steam.items[2], color: 'text-skill-purple' },
                { ...t.steam.items[3], color: 'text-skill-pink' },
                { ...t.steam.items[4], color: 'text-skill-orange' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-bg-light flex items-center justify-center ${item.color} border border-skill-navy/5 shadow-sm`}>
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className={`font-display font-bold text-[9px] sm:text-[10px] tracking-widest uppercase ${item.color} opacity-60 text-center`}>{item.text}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Pricing Section - From Second Flyer */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-skill-navy mb-16 text-center tracking-tight leading-none uppercase italic">
             {t.pricing.title}
           </h2>

           <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Trial */}
              <motion.a 
                href="#contact"
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 border border-skill-navy/5 shadow-sm relative overflow-hidden group block"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-skill-purple/5 rounded-bl-[100px]" />
                <div className="relative z-10">
                   <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-bg-light shadow-sm flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                      <Cpu className="text-skill-purple w-7 h-7 sm:w-8 sm:h-8" />
                   </div>
                   <h3 className="font-display text-xl sm:text-2xl font-extrabold text-skill-purple mb-2 uppercase italic">{t.pricing.trial.title}</h3>
                   <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold text-skill-navy">{t.pricing.trial.price}</span>
                      <span className="text-skill-navy/40 font-bold uppercase tracking-widest text-xs">/ {t.pricing.trial.duration}</span>
                   </div>
                   <ul className="space-y-4 mb-8">
                      {t.pricing.trial.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <div className="w-2 h-2 rounded-full bg-skill-purple mt-2" />
                           <span className="text-skill-navy/70 font-medium text-sm sm:text-base leading-snug">{f}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="flex items-center gap-2 text-skill-purple font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      {t.pricing.book}
                      <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
              </motion.a>

              {/* Package */}
              <motion.a 
                href="#contact"
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 border-2 sm:border-4 border-skill-orange shadow-xl relative overflow-hidden group block"
              >
                <div className="absolute top-0 right-0 bg-skill-orange text-white px-6 py-2 rounded-bl-3xl font-black text-[10px] tracking-widest uppercase">BEST VALUE</div>
                <div className="relative z-10">
                   <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-skill-orange/10 shadow-sm flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                      <Sparkles className="text-skill-orange w-7 h-7 sm:w-8 sm:h-8" />
                   </div>
                   <h3 className="font-display text-xl sm:text-2xl font-extrabold text-skill-orange mb-2 uppercase italic">{t.pricing.package.title}</h3>
                   <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold text-skill-navy">{t.pricing.package.price}</span>
                      <span className="text-skill-navy/40 font-bold uppercase tracking-widest text-xs">/ {t.pricing.package.duration}</span>
                   </div>
                   <ul className="space-y-4 mb-8">
                      {t.pricing.package.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <div className="w-2 h-2 rounded-full bg-skill-orange mt-2" />
                           <span className="text-skill-navy/70 font-medium text-sm sm:text-base leading-snug">{f}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="flex items-center gap-2 text-skill-orange font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      {t.pricing.book}
                      <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
              </motion.a>

              {/* Single */}
              <motion.a 
                href="#contact"
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 border border-skill-navy/5 shadow-sm relative overflow-hidden group block"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-skill-teal/5 rounded-bl-[100px]" />
                <div className="relative z-10">
                   <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-bg-light shadow-sm flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                      <Settings className="text-skill-teal w-7 h-7 sm:w-8 sm:h-8" />
                   </div>
                   <h3 className="font-display text-xl sm:text-2xl font-extrabold text-skill-teal mb-2 uppercase italic">{t.pricing.single.title}</h3>
                   <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold text-skill-navy">{t.pricing.single.price}</span>
                      <span className="text-skill-navy/40 font-bold uppercase tracking-widest text-xs">/ {t.pricing.single.duration}</span>
                   </div>
                   <ul className="space-y-4 mb-8">
                      {t.pricing.single.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <div className="w-2 h-2 rounded-full bg-skill-teal mt-2" />
                           <span className="text-skill-navy/70 font-medium text-sm sm:text-base leading-snug">{f}</span>
                        </li>
                      ))}
                   </ul>
                   <div className="flex items-center gap-2 text-skill-teal font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      {t.pricing.book}
                      <ChevronRight className="w-4 h-4" />
                   </div>
                </div>
              </motion.a>
           </div>
        </div>
      </section>

      {/* Subjects Grid (Robotics & Painting) */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Robotics */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative p-6 sm:p-16 rounded-[32px] sm:rounded-[40px] bg-white border border-skill-navy/5 shadow-xl sm:shadow-2xl hover:shadow-skill-teal/10 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-10" />
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-skill-teal/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 sm:rotate-3 group-hover:rotate-6 transition-transform">
                  <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-skill-teal" />
                </div>
                <h3 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-skill-navy uppercase tracking-tighter leading-none italic">
                  {t.robotics.title}
                </h3>
                <p className="text-skill-navy/70 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 font-medium">
                  {t.robotics.desc}
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                  {t.robotics.list.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-light border border-skill-navy/5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-skill-teal" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-tight text-skill-navy/60">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                   <a 
                     href="#contact"
                     className="inline-flex items-center gap-3 text-skill-teal font-black text-sm uppercase tracking-widest group-hover:gap-5 transition-all"
                   >
                     {t.hero.cta}
                     <ChevronRight className="w-5 h-5" />
                   </a>
                </div>
              </div>
            </motion.div>

            {/* Painting */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative p-6 sm:p-16 rounded-[32px] sm:rounded-[40px] bg-white border border-skill-navy/5 shadow-xl sm:shadow-2xl hover:shadow-skill-purple/10 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-10" />
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-skill-purple/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 sm:-rotate-3 group-hover:-rotate-6 transition-transform">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-skill-purple" />
                </div>
                <h3 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-skill-navy uppercase tracking-tighter leading-none italic">
                  {t.painting.title}
                </h3>
                <p className="text-skill-navy/70 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 font-medium">
                  {t.painting.desc}
                </p>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                  {t.painting.list.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-bg-light border border-skill-navy/5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-skill-purple" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-tight text-skill-navy/60">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                   <a 
                     href="#contact"
                     className="inline-flex items-center gap-3 text-skill-purple font-black text-sm uppercase tracking-widest group-hover:gap-5 transition-all"
                   >
                     {t.hero.cta}
                     <ChevronRight className="w-5 h-5" />
                   </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-skill-teal/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-skill-navy/5 text-skill-navy text-[10px] font-extrabold tracking-[0.4em] mb-4 sm:mb-6 block uppercase">
                {t.formats.title}
              </div>
              <h2 className="text-4xl sm:text-7xl font-extrabold mb-8 sm:mb-10 text-skill-navy tracking-tighter leading-none uppercase italic">
                {lang === 'RU' ? 'ПОДБИРАЕМ' : 'PERSONALLY'} <span className="text-skill-teal">{lang === 'RU' ? 'ФОРМАТ' : 'CHOSEN'}</span>
              </h2>
              <div className="space-y-4 mb-10 sm:mb-12">
                 {[t.formats.p1, t.formats.p2, t.formats.p3].map((text, idx) => (
                   <div key={idx} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-bg-light border border-skill-navy/5 hover:border-skill-purple/30 transition-all group">
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                       <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-skill-purple" />
                     </div>
                     <span className="text-lg sm:text-xl font-bold text-skill-navy/80 uppercase tracking-tight italic">{text}</span>
                   </div>
                 ))}
              </div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-white bg-skill-navy px-6 py-3 sm:px-8 sm:py-4 rounded-full inline-block shadow-xl">
                {t.formats.note}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 relative">
              <div className="aspect-[3/4] rounded-[30px] sm:rounded-[50px] overflow-hidden shadow-2xl sm:translate-y-12">
                 <img src="https://i.ibb.co/ZRV29cV5/LEGO-SPIKE-PRIME-4.jpg" className="w-full h-full object-cover" alt="Detail 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-[30px] sm:rounded-[50px] overflow-hidden shadow-2xl">
                 <img src="https://i.ibb.co/211DSK49/boy-art.jpg" className="w-full h-full object-cover" alt="Detail 2" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 sm:w-32 sm:h-32 bg-skill-pink/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/50 shadow-2xl">
                    <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-skill-pink fill-current animate-pulse" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1 px-4 sm:px-0 mt-8 lg:mt-0">
              <div className="relative z-10 aspect-[4/5] rounded-3xl sm:rounded-[60px] overflow-hidden shadow-2xl border-2 sm:border-8 border-white">
                <img 
                   src="https://i.ibb.co/yFfxnxpX/anastasia2.jpg" 
                   alt="Anastasia - Teacher" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-48 sm:h-48 bg-skill-purple rounded-full mix-blend-multiply opacity-10 animate-pulse" />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
               <div className="inline-block px-4 py-1.5 rounded-full bg-skill-purple/10 text-skill-purple text-[10px] font-extrabold tracking-[0.4em] mb-6 sm:mb-8 uppercase">
                 {t.about.title}
               </div>
               <h2 className="font-display text-4xl sm:text-8xl font-extrabold mb-8 sm:mb-12 text-skill-navy tracking-tighter leading-none uppercase italic">
                 {lang === 'RU' ? 'АНАСТАСИЯ' : 'ANASTASIA'}
               </h2>
               <div className="space-y-6 sm:space-y-8 text-skill-navy/70 text-base sm:text-xl leading-relaxed font-medium">
                 <p className="text-skill-navy font-bold leading-tight">{t.about.bio1}</p>
                 <p className="italic text-skill-purple bg-bg-light p-6 sm:p-8 rounded-[25px] sm:rounded-[40px] border border-skill-purple/10 shadow-sm relative text-sm sm:text-xl">
                    <Sparkles className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 text-skill-orange" />
                    {t.about.bio2}
                 </p>
                 <p className="text-sm sm:text-lg">{t.about.bio3}</p>
                 <p className="p-6 sm:p-8 rounded-[25px] sm:rounded-[40px] border border-skill-navy/5 bg-white/50 text-sm sm:text-lg">{t.about.bio4}</p>
                 <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-skill-navy text-white shadow-xl sm:shadow-2xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                       <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-skill-pink" />
                    </div>
                    <p className="text-xs sm:text-base font-bold uppercase tracking-tight italic">{t.about.bio5}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Conclusion */}
      <footer className="pt-20 sm:pt-32 pb-10 sm:pb-12 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-skill-pink/5 rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 dot-pattern opacity-10" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-24 relative">
             <div className="w-24 h-24 sm:w-40 sm:h-40 flex items-center justify-center mx-auto mb-10 sm:mb-14 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/Ng0xFvV4/Untitled-design-25.png" 
                  className="w-full h-full object-contain"
                  alt="Skill Lab Kids Logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-skill-navy w-16 h-16 sm:w-20 sm:h-20"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 5.888A3 3 0 1 0 12 15Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.52 5.888A3 3 0 1 1 12 15Z"/><path d="M9 14.7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1Z"/><path d="M12 11v3"/><path d="M11 11h2"/></svg>');
                  }}
                />
             </div>
             <h2 className="font-display text-3xl sm:text-7xl font-extrabold mb-6 sm:mb-8 text-skill-navy tracking-tighter leading-none uppercase italic">
               {t.footer.title}
             </h2>
             <span className="text-[10px] sm:text-sm font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-skill-purple mb-8 sm:mb-12 block py-2 border-y border-skill-purple/10 inline-block px-8 sm:px-12 italic">
               {t.footer.subtitle}
             </span>
             <p className="text-skill-navy/70 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 font-medium italic px-4">
               {t.footer.desc}
             </p>
          </div>

          <div id="contact" className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-20 sm:mb-32 scroll-mt-24 sm:scroll-mt-32">
             <a 
               href={waLink}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-[30px] font-bold hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-4 shadow-xl shadow-green-500/20"
             >
               <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
               <span className="text-xs sm:text-sm font-black tracking-widest uppercase">{t.footer.whatsapp}</span>
             </a>
             <a 
               href={tgLink}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto bg-[#0088cc] text-white px-8 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-[30px] font-bold hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20"
             >
               <Send className="w-6 h-6 sm:w-8 sm:h-8" />
               <span className="text-xs sm:text-sm font-black tracking-widest uppercase">{t.footer.telegram}</span>
             </a>
          </div>

          <div className="pt-10 sm:pt-16 border-t border-skill-navy/5 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 text-skill-navy/30 text-[8px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-center sm:text-left">
             <div className="flex items-center gap-4 sm:gap-6">
                <Logo className="scale-90 sm:scale-100 origin-left" />
             </div>
            <span className="text-skill-navy/60 bg-bg-light px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">{t.footer.phone}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
