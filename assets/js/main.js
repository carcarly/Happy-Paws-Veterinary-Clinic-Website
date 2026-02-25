(function() {
  'use strict';
  
  // Menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  console.log('Menu toggle:', menuToggle);
  console.log('Nav menu:', navMenu);
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Menu clicked!');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }

  // Language toggle
  const translations = {
    en: {
      'hero-title': 'Your Furry Friends in Good Hands',
      'hero-subtitle': 'Our professional and friendly team is dedicated to providing compassionate care for your beloved cats and dogs.',
      'hero-subtitle-2': 'From routine checkups to specialized treatments, we treat every pet like our own.',
      'book-cta': 'Book Appointment',
      'learn-more': 'Learn More',
      'services-title': 'Our Services',
      'service-1': 'Surgery', 'service-1-desc': 'Spay/neuter and soft tissue procedures',
      'service-2': 'Medicine', 'service-2-desc': 'General health checkups and treatment',
      'service-3': 'Dentistry', 'service-3-desc': 'Professional dental cleaning and care',
      'service-4': 'Ultrasound', 'service-4-desc': 'Advanced diagnostic imaging',
      'service-5': 'X-Ray', 'service-5-desc': 'Digital radiography services',
      'service-6': 'Dermatology', 'service-6-desc': 'Skin and allergy treatments',
      'service-7': 'Pet Export', 'service-7-desc': 'Complete export documentation',
      'service-8': 'Hospitalisation', 'service-8-desc': '24/7 inpatient care',
      'service-9': 'House Calls', 'service-9-desc': 'Home visits for your convenience',
      'about-title': 'About Happy Paws', 'about-text': 'We provide comprehensive veterinary care for cats and dogs in Hong Kong. With an extensive range of services including surgery, medicine, dentistry, ultrasound, X-ray, dermatology, pet export services, hospitalization, and house calls, we\'re committed to keeping your furry friends healthy and happy.',
      'contact-title': 'Contact Us', 'address': 'Address', 'phone': 'Phone', 'email': 'Email',
      'hours': 'Hours', 'hours-mon-sun': 'Monday - Sunday', 'hours-time': '9:30am - 6:30pm',
      'hours-note': 'Open daily, including weekends and public holidays',
      'footer-1': '© 2026 Happy Paws Veterinary Clinic. All rights reserved.',
      'footer-2': '寵樂動物診所 版權所有', 'services': 'Services', 'about': 'About', 'contact': 'Contact', 'book': 'Book Appointment',
      'nav-services': 'Services', 'nav-about': 'About', 'nav-contact': 'Contact'
    },
    zh: {
      'hero-title': '您的毛孩健康，是我們的首要任務',
      'hero-subtitle': '寵樂專業友善的團隊致力為您心愛的貓狗提供貼心服務。',
      'hero-subtitle-2': '從定期檢查到專科治療，我們將每位毛孩視如己出。',
      'book-cta': '立即預約', 'learn-more': '了解更多',
      'services-title': '我們的服務',
      'service-1': '手術', 'service-1-desc': '絕育及軟組織手術',
      'service-2': '醫療', 'service-2-desc': '一般健康檢查及治療',
      'service-3': '牙科', 'service-3-desc': '專業牙齒清潔及護理',
      'service-4': '超聲波', 'service-4-desc': '先進診斷影像',
      'service-5': 'X光', 'service-5-desc': '數碼X光服務',
      'service-6': '皮膚科', 'service-6-desc': '皮膚及過敏治療',
      'service-7': '寵物出口服務', 'service-7-desc': '完整出口文件',
      'service-8': '住院', 'service-8-desc': '24小時住院護理',
      'service-9': '上門服務', 'service-9-desc': '為您提供上門診症',
      'about-title': '關於寵樂動物診所', 'about-text': '我們為香港的貓狗提供全面的獸醫服務。服務範圍廣泛，包括手術、醫療、牙科、超聲波、X光、皮膚剪、寵物出口服務、住院及上門服務，我們致力於讓您的毛孩健康快樂。',
      'contact-title': '聯絡我們', 'address': '地址', 'phone': '電話', 'email': '電郵',
      'hours': '營業時間', 'hours-mon-sun': '星期一至日', 'hours-time': '上午9:30 - 下午6:30',
      'hours-note': '每日開放，包括週末及公眾假期', 'footer-1': '© 2026 寵樂動物診所。版權所有。',
      'footer-2': '寵樂動物診所 版權所有', 'services': '服務', 'about': '關於', 'contact': '聯絡', 'book': '預約',
      'nav-services': '服務', 'nav-about': '關於', 'nav-contact': '聯絡'
    }
  };

  const btns = document.querySelectorAll('.lang-btn');
  const nodes = document.querySelectorAll('[data-lang]');
  
  function applyLang(lang) {
    nodes.forEach(function(n) {
      const key = n.getAttribute('data-lang');
      if (translations[lang][key]) n.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-lang="addr-en"]').forEach(function(n) { n.style.display = lang === 'en' ? 'inline' : 'none'; });
    document.querySelectorAll('[data-lang="addr-zh"]').forEach(function(n) { n.style.display = lang === 'zh' ? 'inline' : 'none'; });
    btns.forEach(function(b) { b.classList.toggle('active', b.dataset.lang === lang); });
    localStorage.setItem('happypaws-lang', lang);
  }
  
  btns.forEach(function(b) { b.addEventListener('click', function() { applyLang(b.dataset.lang); }); });
  applyLang(localStorage.getItem('happypaws-lang') || 'en');
})();
