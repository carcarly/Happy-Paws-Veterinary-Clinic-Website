    // Language toggle script (EN / ZH)
        const translations = {
      en: {
        'hero-title': 'Your Furry Pets in Good Hands',
        'hero-subtitle': 'At Happy Paws, our professional and friendly team is dedicated to provide compassionate care for your beloved cats and dogs.',
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
        'addr-en': 'Shop B, G/F, 149-155 Kwong Fuk Road, Tai Po, New Territories, Hong Kong', 'addr-zh': '大埔廣福道 149-155號地下B鋪',
        'hours-text': 'Mon - Sun: 9:30am - 6:30pm',
        'footer-1': '© 2026 Happy Paws Veterinary Clinic. All rights reserved.',
        'footer-2': '寵樂動物診所 版權所有', 'services': 'Services', 'about': 'About', 'contact': 'Contact', 'book': 'Book Appointment',
        // Service page
        'back': 'Back to Services', 'service-title': 'Surgery', 'service-subtitle': 'Professional surgical care for your beloved pets in a safe and comfortable environment.',
        'overview': 'Overview', 'overview-text': 'Our experienced veterinary team provides a wide range of surgical procedures in a state-of-the-art facility. From routine spay and neuter surgeries to complex soft tissue procedures, your pet is in safe hands. We prioritize pain management and post-operative care to ensure your furry friend recovers comfortably.',
        'includes': "What's Included", 'ready': 'Ready to Book?', 'cta-text': 'Our surgical team is here to provide the best care for your pet.', 'book-now': 'Book Appointment',
        'inc-1': 'Pre-operative health assessment and blood work', 'inc-2': 'General anesthesia with modern monitoring equipment', 'inc-3': 'Pain management before, during, and after surgery',
        'inc-4': 'Spay/Neuter procedures', 'inc-5': 'Soft tissue surgery (mass removal, wound repair)', 'inc-6': 'Post-operative care instructions and medications', 'inc-7': 'Follow-up consultation to monitor recovery',
        'process': 'What to Expect', 'proc-1': 'We examine your pet and discuss the procedure, risks, and recovery process with you.', 'proc-2': 'Blood tests ensure your pet is healthy enough for anesthesia. Fasting required before surgery.',
        'proc-3': 'Our vet performs the procedure with continuous monitoring of heart rate, oxygen, and temperature.', 'proc-4': 'We monitor your pet until awake, then provide detailed home care instructions and medications.',
        // Medicine page
        'med-service-title': 'Medicine', 'med-service-subtitle': 'Comprehensive medical care to keep your pets healthy and happy throughout their lives.',
        'med-overview-text': 'Our medicine services cover all aspects of your pet\'s health, from routine check-ups to diagnosis and treatment of illness. We believe in preventive care as the foundation of good health, helping your furry companions live longer, happier lives.',
        'med-inc-1': 'Annual health check-ups and wellness exams', 'med-inc-2': 'Vaccinations and booster shots', 'med-inc-3': 'Parasite prevention and treatment (fleas, ticks, worms)',
        'med-inc-4': 'Diagnosis and treatment of common illnesses', 'med-inc-5': 'Prescription medications and supplements', 'med-inc-6': 'Senior pet care and health monitoring',
        'med-inc-7': 'Nutritional advice and weight management', 'med-proc-1': 'Full physical examination from head to tail, checking eyes, ears, teeth, skin, and coat.',
        'med-proc-2': 'Core and non-core vaccines tailored to your pet\'s lifestyle and risk factors.', 'med-proc-3': 'If your pet is unwell, we perform tests to identify the cause and recommend treatment.',
        'med-proc-4': 'Personalized treatment plan including medications, lifestyle changes, and follow-up care.', 'med-cta-text': 'Schedule a check-up today and give your pet the gift of good health.',
        // Dentistry
        'dent-title': 'Dentistry', 'dent-subtitle': 'Professional dental care for healthy teeth and gums in your beloved pets.',
        'dent-overview': 'Dental disease is one of the most common health issues in pets. Our professional dentistry services help prevent, diagnose, and treat oral health problems, ensuring your pet maintains healthy teeth and gums for a better quality of life.',
        'dent-inc-1': 'Professional teeth cleaning (scaling and polishing)', 'dent-inc-2': 'Dental X-rays to check tooth roots and jawbone', 'dent-inc-3': 'Tooth extraction if necessary',
        'dent-inc-4': 'Treatment of gum disease (periodontal disease)', 'dent-inc-5': 'Management of oral infections', 'dent-inc-6': 'Home dental care advice',
        'dent-proc-1': 'Full oral examination under anesthesia to assess teeth and gums.', 'dent-proc-2': 'Ultrasonic scaling to remove plaque and tartar, followed by polishing.', 'dent-proc-3': 'Digital dental X-rays to detect hidden problems below the gumline.', 'dent-proc-4': 'Recovery monitoring and personalized home dental care instructions.', 'dent-cta-text': 'Book a dental check-up today and protect your pet\'s oral health.',
        // Ultrasound
        'ultra-title': 'Ultrasound', 'ultra-subtitle': 'Advanced diagnostic imaging to see inside your pet\'s body without surgery.',
        'ultra-overview': 'Ultrasound is a non-invasive, pain-free imaging technique that uses sound waves to create real-time images of your pet\'s internal organs. It\'s invaluable for diagnosing conditions in the abdomen, heart, and other soft tissues without the need for surgery.',
        'ultra-inc-1': 'Abdominal ultrasound', 'ultra-inc-2': 'Pregnancy diagnosis', 'ultra-inc-3': 'Heart echocardiography', 'ultra-inc-4': 'Guided tissue sampling', 'ultra-inc-5': 'Real-time imaging with immediate results', 'ultra-inc-6': 'Detailed report and consultation',
        'ultra-proc-1': 'Usually requires 12-hour fasting. Water is okay.', 'ultra-proc-2': 'Your pet lies comfortably while we move the probe over the area.', 'ultra-proc-3': 'Images appear on screen in real-time. We\'ll explain what we see.', 'ultra-cta-text': 'Ask us about ultrasound diagnostics for your pet.',
        // X-Ray
        'xray-title': 'X-Ray', 'xray-subtitle': 'Digital radiography for clear, instant images of your pet\'s bones and internal structures.',
        'xray-overview': 'Our digital X-ray system produces high-quality images instantly, helping us diagnose bone fractures, joint problems, swallowed objects, lung conditions, and more. Digital X-rays are faster, clearer, and expose your pet to less radiation than traditional film.',
        'xray-inc-1': 'Digital radiography (full body or specific areas)', 'xray-inc-2': 'Hip and elbow dysplasia screening', 'xray-inc-3': 'Bone fracture assessment', 'xray-inc-4': 'Foreign body detection', 'xray-inc-5': 'Chest and abdominal imaging', 'xray-inc-6': 'Instant results and consultation',
        'xray-proc-1': 'Your pet may need sedation for best results. Usually 12-hour fasting.', 'xray-proc-2': 'Quick positioning and exposure. Takes just minutes.', 'xray-proc-3': 'Images appear instantly. We\'ll review them with you right away.', 'xray-cta-text': 'Contact us for X-ray diagnostics.',
        // Dermatology
        'derm-title': 'Dermatology', 'derm-subtitle': 'Expert diagnosis and treatment for skin, ear, and allergy problems in pets.',
        'derm-overview': 'Skin problems are common in pets and can be caused by allergies, parasites, infections, or underlying health conditions. Our dermatology service helps identify the root cause and provides effective treatment to relieve your pet\'s discomfort.',
        'derm-inc-1': 'Skin allergy testing and treatment', 'derm-inc-2': 'Ear infection diagnosis and treatment', 'derm-inc-3': 'Parasite detection and prevention', 'derm-inc-4': 'Skin cytology and biopsies', 'derm-inc-5': 'Hot spot and wound treatment', 'derm-inc-6': 'Long-term skin management plans',
        'derm-proc-1': 'Full skin and ear examination. We check for parasites, infections, and inflammation.', 'derm-proc-2': 'Skin scrapings, cytology, or allergy tests may be needed.', 'derm-proc-3': 'Personalized plan: medications, shampoos, diet changes, or injections.', 'derm-cta-text': 'Book a skin consultation for your itchy pet.',
        // Pet Export
        'export-title': 'Pet Export', 'export-subtitle': 'Complete documentation and health certification for travelling with your pet abroad.',
        'export-overview': 'Exporting a pet requires careful planning and proper documentation. We handle all the necessary health certificates, vaccinations, and tests required by different countries, making the process smooth for you and your furry friend.',
        'export-inc-1': 'International health certificates (APHIS, EU format)', 'export-inc-2': 'Rabies vaccination and titer tests', 'export-inc-3': 'Microchip verification', 'export-inc-4': 'Parasite treatment documentation', 'export-inc-5': 'Export permit assistance', 'export-inc-6': 'Travel advice for your destination',
        'export-proc-1': 'Contact us early! Each country has different requirements. Start 2-3 months before travel.', 'export-proc-2': 'Ensure rabies and other vaccines are up to date. Blood titer tests may be needed.', 'export-proc-3': 'We issue the health certificate within 10 days of travel.', 'export-cta-text': 'Start your pet export journey - contact us today.',
        // House Calls
        'house-title': 'House Calls', 'house-subtitle': 'Professional veterinary care in the comfort of your own home.',
        'house-overview': 'Some pets feel stressed at the clinic, and some owners have difficulty visiting us. Our house call service brings quality veterinary care to your doorstep, reducing stress for both you and your pet.',
        'house-inc-1': 'Home vaccination visits', 'house-inc-2': 'Health check-ups', 'house-inc-3': 'Minor treatments and wound care', 'house-inc-4': 'Blood sampling', 'house-inc-5': 'Pet health consultations', 'house-inc-6': 'Euthanasia in familiar surroundings',
        'house-proc-1': 'Call to schedule. We arrange a convenient time for the visit.', 'house-proc-2': 'Our vet arrives with all necessary equipment at your home.', 'house-proc-3': 'We perform the exam and treatments in your pet\'s familiar environment.', 'house-cta-text': 'Book a house call for stress-free veterinary care.'
      },
      zh: {
        'hero-title': '您的毛孩健康，是我們的首要任務',
        'hero-subtitle': '寵樂專業友善的團隊，致力為您心愛的貓狗提供貼心服務。',
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
        'about-title': '關於寵樂動物診所', 'about-text': '我們為香港的貓狗提供全面的獸醫服務。服務範圍廣泛，包括手術、醫療、牙科、超聲波、X光、皮膚科、寵物出口服務、住院及上門服務，我們致力於讓您的毛孩健康快樂。',
        'contact-title': '聯絡我們', 'address': '地址', 'phone': '電話', 'email': '電郵',
        'hours': '營業時間', 'hours-mon-sun': '星期一至日', 'hours-time': '上午9:30 - 下午6:30',
        'hours-note': '每日開放，包括週末及公眾假期', 'addr-en': 'Shop B, G/F, 149-155 Kwong Fuk Road, Tai Po, New Territories, Hong Kong', 'addr-zh': '大埔廣福道 149-155號地下B鋪',
        'hours-text': '星期一至日：上午9:30 - 下午6:30', 'footer-1': '© 2026 寵樂動物診所。版權所有。',
        'footer-2': '寵樂動物診所 版權所有', 'services': '服務', 'about': '關於', 'contact': '聯絡', 'book': '預約',
        // Service page
        'back': '返回服務', 'service-title': '手術', 'service-subtitle': '在安全舒適的環境中為您心愛的寵物提供專業外科護理。',
        'overview': '概述', 'overview-text': '我們經驗豐富的獸醫團隊在設備齊全的設施中提供各種外科手術服務。從常規的絕育手術到複雜的軟組織手術，您的寵物都在安全的環境中接受治療。我們重視疼痛管理和術後護理，確保您的毛孩能夠舒適康復。',
        'includes': '服務內容', 'ready': '準備好預約了嗎？', 'cta-text': '我們的外科團隊隨時準備為您的寵物提供最佳護理。', 'book-now': '立即預約',
        'inc-1': '術前健康評估及血液檢查', 'inc-2': '使用現代監測設備進行全身麻醉', 'inc-3': '術前、術中、術後疼痛管理',
        'inc-4': '絕育手術', 'inc-5': '軟組織手術（腫塊切除傷口修復）', 'inc-6': '術後護理指導及藥物', 'inc-7': '跟進consultation監測康復情況',
        'process': '預期流程', 'proc-1': '我們會為您的寵物進行檢查，並與您討論手術、風險及康復過程。', 'proc-2': '血液檢查確保您的寵物健康適合麻醉。手術前需禁食。',
        'proc-3': '我們的獸醫進行手術，並持續監測心率、血氧及體溫。', 'proc-4': '我們會監護您的寵物直至清醒，然後提供詳細的家庭護理指導及藥物。',
        // Medicine page
        'med-service-title': '醫療', 'med-service-subtitle': '全面的醫療護理，讓您的寵物一生健康快樂。',
        'med-overview-text': '我們的醫療服務涵蓋寵物健康的各個方面，從 routine 檢查到疾病的診斷和治療。我們相信預防性護理是健康的基礎，幫助您的毛孩活得更長久、更快樂。',
        'med-inc-1': '年度健康檢查', 'med-inc-2': '疫苗注射及加強針', 'med-inc-3': '寄生蟲預防及治療（跳蚤、蜱蟲、寄生蟲）',
        'med-inc-4': '常見疾病的診斷及治療', 'med-inc-5': '處方藥物及營養補充品', 'med-inc-6': '老年寵物護理及健康監測',
        'med-inc-7': '營養建議及體重管理', 'med-proc-1': '從頭到尾的全面身體檢查，檢查眼睛、耳朵、牙齒、皮膚和毛髮。',
        'med-proc-2': '根據您寵物的生活方式和風險因素，選擇核心及非核心疫苗。', 'med-proc-3': '如果您的寵物身體不適，我們會進行測試以確定原因并建議治療方案。',
        'med-proc-4': '個人化治療計劃，包括藥物、生活方式改變及跟進護理。', 'med-cta-text': '立即預約檢查，為您的寵物送上健康的禮物。',
        // Dentistry
        'dent-title': '牙科', 'dent-subtitle': '專業牙科護理，讓您心愛的寵物牙齒和牙齦健康。',
        'dent-overview': '牙科疾病是寵物最常見的健康問題之一。我們的專業牙科服務有助於預防、診斷和治療口腔健康問題，確保您的寵物保持健康的牙齒和牙齦，提高生活質量。',
        'dent-inc-1': '專業牙齒清潔（超聲波洗牙及拋光）', 'dent-inc-2': '牙科X光檢查牙根和顎骨', 'dent-inc-3': '如有需要進行拔牙', 'dent-inc-4': '牙齦疾病治療（牙周病）', 'dent-inc-5': '口腔感染處理', 'dent-inc-6': '家庭牙科護理建議',
        'dent-proc-1': '在麻醉下進行全面口腔檢查，評估牙齒和牙齦狀況。', 'dent-proc-2': '使用超聲波清除牙結石和牙垢，然後進行拋光。', 'dent-proc-3': '數碼牙科X光檢測牙齦線以下的隱藏問題。', 'dent-proc-4': '康復監測及個人化家庭牙科護理指導。', 'dent-cta-text': '立即預約牙科檢查，保護您寵物的口腔健康。',
        // Ultrasound
        'ultra-title': '超聲波', 'ultra-subtitle': '先進診斷影像，無需手術即可看到寵物體內情況。',
        'ultra-overview': '超聲波是一種非侵入性、無痛的成像技術，利用聲波為您寵物的內臟器官創建實時圖像。這對於診斷腹部、心臟和其他軟組織的疾病非常有用，無需手術。',
        'ultra-inc-1': '腹部超聲波', 'ultra-inc-2': '懷孕診斷', 'ultra-inc-3': '心臟超聲心動圖', 'ultra-inc-4': '引導組織採樣', 'ultra-inc-5': '實時成像，即時獲得結果', 'ultra-inc-6': '詳細報告及諮詢',
        'ultra-proc-1': '通常需要禁食12小時。可以喝水。', 'ultra-proc-2': '您的寵物舒適地躺著，我們移動探頭進行檢查。', 'ultra-proc-3': '圖像實時顯示在屏幕上。我們會為您解釋所見內容。', 'ultra-cta-text': '向我們咨詢超聲波診斷服務。',
        // X-Ray
        'xray-title': 'X光', 'xray-subtitle': '數碼放射影像，為您寵物的骨骼和內部結構提供清晰、即時的圖像。',
        'xray-overview': '我們的數碼X光系統即時生成高質量圖像，幫助我們診斷骨折、關節問題、吞嚥異物、肺部情況等。數碼X光比傳統膠片更快、更清晰，對您寵物的輻射暴露也更少。',
        'xray-inc-1': '數碼放射影像（全身或特定部位）', 'xray-inc-2': '髖關節及肘關節發育不良篩查', 'xray-inc-3': '骨折評估', 'xray-inc-4': '異物檢測', 'xray-inc-5': '胸部及腹部成像', 'xray-inc-6': '即時結果及諮詢',
        'xray-proc-1': '您的寵物可能需要鎮靜以獲得最佳效果。通常需要禁食12小時。', 'xray-proc-2': '快速定位和曝光。只需幾分鐘。', 'xray-proc-3': '圖像即時顯示。我們會立即與您一起查看。', 'xray-cta-text': '聯繫我們咨詢X光診斷服務。',
        // Dermatology
        'derm-title': '皮膚科', 'derm-subtitle': '專家診斷和治療寵物的皮膚、耳朵和過敏問題。',
        'derm-overview': '皮膚問題在寵物中很常見，可能由過敏、寄生蟲、感染或潛在健康狀況引起。我們的皮膚病服務有助於找出根本原因，並提供有效治療來緩解您寵物的不適。',
        'derm-inc-1': '皮膚過敏測試及治療', 'derm-inc-2': '耳朵感染診斷及治療', 'derm-inc-3': '寄生蟲檢測及預防', 'derm-inc-4': '皮膚細胞學及活檢', 'derm-inc-5': '熱點及傷口治療', 'derm-inc-6': '長期皮膚管理計劃',
        'derm-proc-1': '全面的皮膚和耳朵檢查。我們檢查寄生蟲、感染和炎症。', 'derm-proc-2': '可能需要皮膚刮片、細胞學或過敏測試。', 'derm-proc-3': '個人化計劃：藥物、洗髮水、飲食改變或注射。', 'derm-cta-text': '為您的寵物預約皮膚諮詢。',
        // Pet Export
        'export-title': '寵物出口', 'export-subtitle': '為您攜帶寵物出國提供完整文件及健康證明。',
        'export-overview': '出口寵物需要仔細規劃和正確的文件。我們處理不同國家要求的所有必要健康證明、疫苗和測試，讓您和您的毛孩都能順利完成流程。',
        'export-inc-1': '國際健康證明書（APHIS、EU格式）', 'export-inc-2': '狂犬病疫苗及抗體測試', 'export-inc-3': '晶片驗證', 'export-inc-4': '寄生蟲治療文件', 'export-inc-5': '出口許可證協助', 'export-inc-6': '目的地旅遊建議',
        'export-proc-1': '請儘早聯繫我們！每個國家有不同的要求。請在旅行前2-3個月開始準備。', 'export-proc-2': '確保狂犬病和其他疫苗是最新的。可能需要血液抗體測試。', 'export-proc-3': '我們會在旅行前10天內發出健康證明書。', 'export-cta-text': '開始您的寵物出口旅程 - 立即聯繫我們。',
        // House Calls
        'house-title': '上門服務', 'house-subtitle': '在您家中舒適的環境提供專業獸醫護理。',
        'house-overview': '有些寵物在診所會感到緊張，有些主人很難前來我們的診所。我們的上門服務將優質的獸醫護理送到您家門口，減少您和寵物的壓力。',
        'house-inc-1': '上門疫苗注射', 'house-inc-2': '健康檢查', 'house-inc-3': '小型治療及傷口護理', 'house-inc-4': '血液採樣', 'house-inc-5': '寵物健康諮詢', 'house-inc-6': '在熟悉的環境中進行安樂死',
        'house-proc-1': '致電預約。我們會安排方便的時間。', 'house-proc-2': '我們的獸醫攜帶所有必要設備來到您家。', 'house-proc-3': '我們在您寵物熟悉的環境中進行檢查和治療。', 'house-cta-text': '預約上門服務，享受無壓力的獸醫護理。'
      }
    };
      // Init
  const btns = document.querySelectorAll('.lang-btn');
  const nodes = document.querySelectorAll('[data-lang]');
  function applyLang(lang) {
    nodes.forEach(n => {
      const key = n.getAttribute('data-lang');
      if (translations[lang][key]) n.textContent = translations[lang][key];
    });
    // Handle address visibility
    document.querySelectorAll('[data-lang="addr-en"]').forEach(n => n.style.display = lang === 'en' ? 'inline' : 'none');
    document.querySelectorAll('[data-lang="addr-zh"]').forEach(n => n.style.display = lang === 'zh' ? 'inline' : 'none');
    btns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    localStorage.setItem('happypaws-lang', lang);
  }
  btns.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  // Initialize with saved or English
  applyLang('en');
