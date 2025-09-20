import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// Import course images
const udemyDigitalFinancialInclusion = require('../assets/images/main Courses/udemy/Digital-financial-inclusion.png');
const udemyBankingForNonBankers = require('../assets/images/main Courses/udemy/Banking-for-Non-Bankers.png');
const udemyEmpoweringFinancialInclusion = require('../assets/images/main Courses/udemy/Empowering-Financial-Inclusion.png');

// Import EYouth course images
const eyouthFinancialInclusion = require('../assets/images/main Courses/eyouth/Financial-inclusion.png');
const eyouthPersonalFinancialPlanning = require('../assets/images/main Courses/eyouth/Screenshot (976).png');

// Import Career180 course images
const career180BankingForNonBankers = require('../assets/images/main Courses/career/Banking_for_non_Bankers.jpg');
const career180PersonalFinance = require('../assets/images/main Courses/career/Personal-Finance.jpg');

// Import Almentor course images
const almentorDigitalFinancialInclusion = require('../assets/images/main Courses/almentor/Digital-Financial-Inclusion-Leveraging-Technology-for-Greater-Access.png');
const almentorBankingRights = require('../assets/images/main Courses/almentor/Understanding-Your-Banking-Rights-from-A-to-Z.jpg');
const almentorBankingForNonBankers = require('../assets/images/main Courses/almentor/Banking-for-Non-Bankers.png');
const almentorEmpoweringFinancialInclusion = require('../assets/images/main Courses/almentor/Empowering-Financial-Inclusion-Building-Trust-and-Expanding-Financial-Literacy.png');

// Import Almentor feedback images
const almentorFeedback1 = require('../assets/images/main Courses/almentor/feedback/1.png');
const almentorFeedback2 = require('../assets/images/main Courses/almentor/feedback/2.png');
const almentorFeedback3 = require('../assets/images/main Courses/almentor/feedback/3.png');
const almentorFeedback4 = require('../assets/images/main Courses/almentor/feedback/4.png');
const almentorFeedback5 = require('../assets/images/main Courses/almentor/feedback/5.png');
const almentorFeedback6 = require('../assets/images/main Courses/almentor/feedback/6.png');

// Import Yanfaa course images
const yanfaaTimeManagement = require('../assets/images/main Courses/Yanfaa/Time_management.jpeg');
const yanfaaUniversityRules = require('../assets/images/main Courses/Yanfaa/University_40_rules.jpg');
const yanfaaBankingRights = require('../assets/images/main Courses/Yanfaa/Banking_Rights.jpg');
const yanfaaGlobalFinancialInclusion = require('../assets/images/main Courses/Yanfaa/Global_financial_inclusion.jpg');
const yanfaaFinancialInclusion = require('../assets/images/main Courses/Yanfaa/financial_inclusion.jpg');
const yanfaaHowToBeTrainer = require('../assets/images/main Courses/Yanfaa/How_To_Be_A_Trainer.jpg');
const yanfaaPersonalInterview = require('../assets/images/main Courses/Yanfaa/How_To_Pass_The_Personal_Interview.jpeg');
const yanfaaHuntDreamJob = require('../assets/images/main Courses/Yanfaa/How_to_Hunt_Your_Dream_Job.jpeg');
const yanfaaWorkInBank = require('../assets/images/main Courses/Yanfaa/How_to_work_in_a_bank.jpeg');
const yanfaaProfessionalCV = require('../assets/images/main Courses/Yanfaa/how_to_write_a_professional_cv.jpeg');
const yanfaaPreparingJob = require('../assets/images/main Courses/Yanfaa/Preparing-for-job.jpeg');
const yanfaaPersonalFinancialPlanning = require('../assets/images/main Courses/Yanfaa/Personal_financial_Planing.jpeg');

const platformsData = {
  mentor: {
    name: 'Almentor',
    description: 'Professional online training platform offering comprehensive courses in banking and finance',
    logo: '/src/assets/images/platforms/mentor-logo.png',
    color: '#007bff',
    courses: [
      {
        title: 'الشمول المالي الرقمي - الاستفادة من التكنولوجيا لزيادة الوصول',
        description: 'تُكون معرفة شاملة عن الشمول المالي الرقمي وأهميته في توفير الوصول الأكبر للخدمات المالية. تفهم وتفسر الفجوة الرقمية وتحديات الوصول للخدمات المالية الرقمية.',
        image: almentorDigitalFinancialInclusion,
        externalLink: 'https://www.almentor.net/courses/Digital-Financial-Inclusion-Leveraging-Technology-for-Greater-Access',
        duration: '39m',
        level: 'Specialist',
        price: '',
      },
      {
        title: 'دليلك إلى فهم حقوقك البنكية من الألف إلى الياء',
        description: 'تتعرف على الحقوق الأساسية للعملاء في القطاع المصرفي. تحدد المشكلات المصرفية الشائعة وكيفية معالجتها. تتعرف على اللوائح والحماية المتاحة للعملاء في القطاع المصرفي.',
        image: almentorBankingRights,
        externalLink: 'https://www.almentor.net/courses/Understanding-Your-Banking-Rights-from-A-to-Z',
        duration: '1h 7m',
        level: 'General',
        price: '',
      },
      {
        title: 'البنوك لغير المصرفيين',
        description: 'تتعرف على المنتجات والخدمات التي تقدمها البنوك. تتقن فن الاختيار بين الحسابات الجارية وحسابات التوفير، وتحديد مزاياها وعيوبها. تتعرف على الحسابات المصرفية المختلفة المتاحة.',
        image: almentorBankingForNonBankers,
        externalLink: 'https://www.almentor.net/courses/Banking-for-Non-Bankers',
        duration: '2h',
        level: 'Specialist',
        price: '',
      },
      {
        title: 'تمكين الشمول المالي - بناء الثقة وتوسيع المعرفة المالية',
        description: 'تفهم معنى الشمول المالي ودوره الحيوي في توفير الخدمات المالية لجميع فئات المجتمع. تلخص نتائج تطبيق الشمول المالي وتأثيرها على التنمية الاقتصادية والاجتماعية.',
        image: almentorEmpoweringFinancialInclusion,
        externalLink: 'https://www.almentor.net/courses/Empowering-Financial-Inclusion-Building-Trust-and-Expanding-Financial-Literacy',
        duration: '46m',
        level: 'Specialist',
        price: '',
        isNew: true
      }
    ],
    feedback: [
      {
        id: 1,
        image: almentorFeedback1,
        studentName: 'Ahmed Ali Osman',
        courseName: 'Banking for Non-Bankers',
        comment: 'الطريقة ممتازة شرحك جميل جداً مستبين ملكك دايما المزيد'
      },
      {
        id: 2,
        image: almentorFeedback2,
        studentName: 'Dr Mahmoud Derby',
        courseName: 'Banking for Non-Bankers',
        comment: 'محترف ❤️'
      },
      {
        id: 3,
        image: almentorFeedback3,
        studentName: 'Omar Mohamed Saad Abdeldayem',
        courseName: 'Banking for Non-Bankers',
        comment: 'المحاضر مشاء الله شاطر جداً'
      },
      {
        id: 4,
        image: almentorFeedback4,
        studentName: 'Fikry El Sayed Amin',
        courseName: 'Banking for Non-Bankers',
        comment: 'شرح ممتاز جداً الرجو بوجود مزيد من الكورسات للتعريف بالخدمات البنكية'
      },
      {
        id: 5,
        image: almentorFeedback5,
        studentName: 'Mohamed Ahmed Amin Ibrahim',
        courseName: 'Digital Financial Inclusion',
        comment: 'شكراً على المحتوى'
      },
      {
        id: 6,
        image: almentorFeedback6,
        studentName: 'Student Review',
        courseName: 'Almentor Course',
        comment: 'Excellent course content and delivery'
      }
    ]
  },
  yanfaa: {
    name: 'Yanfaa',
    description: 'Comprehensive professional development platform offering courses in finance, management, and communication skills',
    logo: '/src/assets/images/platforms/yanfaa-logo.png',
    color: '#28a745',
    courses: [
      {
        title: 'مهارات إدارة الوقت',
        description: 'طرق عملية لتحديد الأولويات وترتيب المهام وتقسيم الوقت.',
        image: yanfaaTimeManagement,
        externalLink: 'https://yanfaa.com/eg/single/Time_management2',
        duration: '1h 36m',
        level: 'Intermediate',
        price: ''
      },
      {
        title: 'قواعد الجامعة الأربعون',
        description: 'تعلم بناء أهدافك واستثمار فرصك الجامعية بطريقة منظمة.',
        image: yanfaaUniversityRules,
        externalLink: 'https://yanfaa.com/eg/single/University_40_rules',
        duration: '1h 51m',
        level: 'Beginner',
        price: ''
      },
      {
        title: 'حقوقك البنكية من الألف إلى الياء',
        description: 'تعلم حقوقك كعميل بنكي والخدمات المصرفية الرقمية.',
        image: yanfaaBankingRights,
        externalLink: 'https://yanfaa.com/eg/single/Banking_Rights',
        duration: '1h 8m',
        level: 'General',
        price: ''
      },
      {
        title: 'الشمول المالي الرقمي - الاستفادة من التكنولوجيا لزيادة الوصول',
        description: 'الوصول للخدمات المالية عبر التكنولوجيا وحل الفجوة الرقمية.',
        image: yanfaaGlobalFinancialInclusion,
        externalLink: 'https://yanfaa.com/eg/single/Global_financial_inclusion',
        duration: '37m',
        level: 'Intermediate',
        price: ''
      },
      {
        title: 'تمكين الشمول المالي',
        description: 'مفهوم الشمول المالي واستراتيجيات البنوك المركزية.',
        image: yanfaaFinancialInclusion,
        externalLink: 'https://yanfaa.com/eg/single/financial_inclusion',
        duration: '44m',
        level: 'Intermediate',
        price: ''
      },
      {
        title: 'كيف تصبح مدرب؟',
        description: 'المهارات اللازمة للانطلاق في مسار مهني ناجح كمدرب.',
        image: yanfaaHowToBeTrainer,
        externalLink: 'https://yanfaa.com/eg/single/How_To_Be_A_Trainer',
        duration: '1h 35m',
        level: 'Intermediate',
        price: ''
      },
      {
        title: 'كيف تستعد لمقابلة العمل',
        description: 'مهارات اجتياز مقابلة العمل ونصائح للحصول على الوظيفة.',
        image: yanfaaPersonalInterview,
        externalLink: 'https://yanfaa.com/eg/single/How_To_Pass_The_Personal_Interview',
        duration: '1h 1m',
        level: 'Beginner',
        price: ''
      },
      {
        title: 'كيف تحصل على وظيفة احلامك',
        description: 'طرق البحث عن وظيفة واستراتيجيات زيادة فرص القبول.',
        image: yanfaaHuntDreamJob,
        externalLink: 'https://yanfaa.com/eg/single/How_to_Hunt_Your_Dream_Job',
        duration: '53m',
        level: 'Beginner',
        price: ''
      },
      {
        title: 'أساسيات العمل المصرفي',
        description: 'أساسيات العمل المصرفي ومنتجات البنوك والمسار المهني.',
        image: yanfaaWorkInBank,
        externalLink: 'https://yanfaa.com/eg/single/How_to_work_in_a_bank',
        duration: '53m',
        level: 'Beginner',
        price: ''
      },
      {
        title: 'كيفية كتابة سيرة ذاتية احترافية',
        description: 'تعلم كتابة سيرة ذاتية احترافية وتجنب الأخطاء الشائعة.',
        image: yanfaaProfessionalCV,
        externalLink: 'https://yanfaa.com/eg/single/how_to_write_a_professional_cv',
        duration: '50m',
        level: 'Beginner',
        price: ''
      },
      {
        title: 'التأهيل لسوق العمل',
        description: 'تأهيل نفسك لسوق العمل واستغلال سنوات الجامعة للتطوير.',
        image: yanfaaPreparingJob,
        externalLink: 'https://yanfaa.com/eg/single/Preparing-for-job',
        duration: '1h 2m',
        level: 'Beginner',
        price: ''
      },
      {
        title: 'التخطيط المالي الشخصي',
        description: 'زيادة الوعي المالي وعمل ميزانية سليمة لتحقيق الأهداف.',
        image: yanfaaPersonalFinancialPlanning,
        externalLink: 'https://yanfaa.com/eg/single/Personal_financial_Planing',
        duration: '1h 27m',
        level: 'Intermediate',
        price: ''
      }
    ],
    feedback: [
      {
        id: 1,
        name: 'تسنيم محمود',
        comment: 'لأول مرة أقدر أفهم بالتفصيل كل شيء متعلق بالميزانية الشخصية، ودا أفادني جدا في تنظيم ميزانية خاصة بي.',
        rating: 5,
        date: '2024-01-15'
      },
      {
        id: 2,
        name: 'أحمد جمال',
        comment: 'معلومة هل ما تشتريه إحتياج أم رغبة؟ وجزئية الشمولية في الطرح مع التكامل في الإدخار والإستثمار',
        rating: 5,
        date: '2024-01-20'
      },
      {
        id: 3,
        name: 'رضوي السيد',
        comment: 'كان ممتع وسهل وأسلوب يسير ومفيد جدااا ومعلومات قيمه',
        rating: 5,
        date: '2024-02-05'
      },
      {
        id: 4,
        name: 'محمد ياسر',
        comment: 'atifدت كتير جدا وكنت محتاج الكورس دا فعلا لاني مقبل ع الزواج ومش عارف همشي البيت ازاي فشكرا جدا ع المجهود المحترم دا',
        rating: 5,
        date: '2024-02-10'
      },
      {
        id: 5,
        name: 'اسكندر',
        comment: 'الكورس كان ممتاز جدا و أنبسط فيه و أكثر شيء عجبني طريقة تقسيم الدخل المالي',
        rating: 5,
        date: '2024-02-15'
      },
      {
        id: 6,
        name: 'ياسين فاضل',
        comment: 'جزاك الله خيرا علي الكورس الجامد ده انا استفدت كتير جدا لما خلصت حسيت دماغي اتنظمت',
        rating: 5,
        date: '2024-02-20'
      },
      {
        id: 7,
        name: 'صلاح جاهين',
        comment: 'كورس كويس جدا ورتب لي دماغى فعلا',
        rating: 5,
        date: '2024-03-01'
      },
      {
        id: 8,
        name: 'محمد جيلاني عبد القادر',
        comment: 'دورة مفيدة طبقت كل ما ذكرته في الدورة و أصبح واضحاً لدي معرفة أوجه صرف المال بشكل شهري',
        rating: 5,
        date: '2024-03-05'
      }
    ]
  },
  career: {
    name: 'Career 180',
    description: 'Career development platform focusing on professional skills and job market preparation',
    logo: '/src/assets/images/platforms/career-logo.png',
    color: '#ffc107',
    courses: [
      {
        title: 'Banking for Non-Bankers',
        description: 'Learn about banking products, account types, opening procedures, certificates and deposits, investment funds, card types, and online shopping safety for comprehensive banking knowledge.',
        image: career180BankingForNonBankers,
        externalLink: 'https://career-180.com/en/qualifying/courses/view/banking-for-non-bankers',
        duration: '1h 56m',
        level: 'Beginner',
        price: '',
        rating: 4.7
      },
      {
        title: 'Personal Finance',
        description: 'Master financial awareness, social class dynamics, financial planning essentials, practical budgeting, and financial measurement to optimize your financial well-being and growth.',
        image: career180PersonalFinance,
        externalLink: 'https://career-180.com/en/qualifying/courses/view/personal-finance',
        duration: '1h 37m',
        level: 'Intermediate',
        price: '',
        rating: 4.8
      }
    ],
    feedback: []
  },
  eyouth: {
    name: 'EYouth',
    description: 'Youth development platform offering courses for young professionals and students',
    logo: '/src/assets/images/platforms/eyouth-logo.png',
    color: '#17a2b8',
    courses: [
      {
        title: 'الشمول المالي - Financial Inclusion',
        description: 'تعلم مفهوم الشمول المالي وأهميته في التنمية الاقتصادية، واكتشف تجربة مصر والإجراءات المتخذة من البنك المركزي لتحقيق هذا الهدف بشكل فعال ومستدام.',
        image: eyouthFinancialInclusion,
        externalLink: 'https://eyouthlearning.com/details/course-v1:Business_and_Management+FIOHJ7Y2024+FIKOYOL2024',
        duration: '1h',
        level: 'Intermediate',
        price: '350 EGP',
        rating: 4.8
      },
      {
        title: 'التخطيط المالي الشخصي - Personal Financial Planning',
        description: 'طور مهاراتك في إدارة الأموال بذكاء، تعلم إعداد الميزانية والتخلص من الديون وزيادة المدخرات، واكتشف استراتيجيات الاستثمار لتحقيق الاستقلال المالي.',
        image: eyouthPersonalFinancialPlanning,
        externalLink: 'https://eyouthlearning.com/details/course-v1:Finance_and_Accounting+FWCTIEJ2024+FWGFDZA2024',
        duration: '1h 45m',
        level: 'Beginner',
        price: '300 EGP',
        rating: 4.7
      }
    ],
    feedback: []
  },
  udemy: {
    name: 'Udemy',
    description: 'Global online learning marketplace with courses in business, technology, and personal development',
    logo: '/src/assets/images/platforms/udemy-logo.png',
    color: '#ffc107',
    courses: [
      {
        title: 'الشمول المالي الرقمي - Digital Financial Inclusion',
        description: 'تمكين الشمول المالي: التمويل الرقمي، حماية المستهلك، الأطر التنظيمية واستراتيجيات الابتكار',
        image: udemyDigitalFinancialInclusion,
        externalLink: 'https://www.udemy.com/course/digital-financial-inclusion/?referralCode=BD7C56010ED3B32765BC&couponCode=MT250915G4',
        duration: '37m',
        level: 'Intermediate',
        price: '709.99 EGP'
      },
      {
        title: 'Banking for Non-Bankers - البنوك لغير المصرفيين',
        description: 'افهم واعرف بكل وعى معاملاتك البنكية اليومية',
        image: udemyBankingForNonBankers,
        externalLink: 'https://www.udemy.com/course/banking-for-non-bankers/?referralCode=60CEADA9BACE5D81D728&couponCode=MT250915G4',
        duration: '2h 10m',
        level: 'Beginner',
        price: '399.99 EGP'
      },
      {
        title: 'تمكين الشمول المالي - Empowering Financial Inclusion',
        description: 'تعرّف على الشمول المالي، والخدمات المالية الرقمية، والمنتجات الشاملة، واستراتيجيات البنوك المركزية لتحقيق تأثير مستدام',
        image: udemyEmpoweringFinancialInclusion,
        externalLink: 'https://www.udemy.com/course/financialinclusion/?referralCode=5DA71CCD201869EFDDB4&couponCode=MT250915G4',
        duration: '44m',
        level: 'Advanced',
        price: '709.99 EGP'
      }
    ],
    feedback: []
  }
};

const FullCourses = () => {
  const [searchParams] = useSearchParams();
  const [activePlatform, setActivePlatform] = useState(searchParams.get('platform') || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllFeedback, setShowAllFeedback] = useState({});

  // Set document title when component mounts
  useEffect(() => {
    document.title = 'My Courses - Muhammad ELSalamony | Professional Training Programs';

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'Muhammad ELSalamony - Professional Trainer & Banking Expert';
    };
  }, []);

  const platforms = Object.keys(platformsData);

  const getPlatformCourses = (platform) => {
    if (platform === 'all') {
      return Object.values(platformsData).flatMap(p => p.courses);
    }
    return platformsData[platform].courses;
  };

  const filteredCourses = getPlatformCourses(activePlatform).filter(course => {
    const matchesSearch = searchTerm === '' ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const renderPlatformSection = (platformKey) => {
    const platform = platformsData[platformKey];
    const platformCourses = platform.courses.filter(course =>
      searchTerm === '' ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleFeedback = () => {
      setShowAllFeedback(prev => ({
        ...prev,
        [platformKey]: !prev[platformKey]
      }));
    };

    const isShowingAll = showAllFeedback[platformKey] || false;
    const displayedFeedback = isShowingAll ? platform.feedback : platform.feedback.slice(0, 3);

    return (
      <div key={platformKey} className="mb-5">
        {/* Platform Header */}
        <div className="row mb-4 align-items-center">
          <div className="col">
            <h2 className="mb-1" style={{
              color: '#2c3e50',
              fontWeight: '700',
              fontSize: '2rem'
            }}>
              {platform.name}
            </h2>
            <p className="mb-0" style={{
              color: '#5a6c7d',
              fontSize: '1.1rem',
              fontWeight: '400'
            }}>{platform.description}</p>
            <div className="mt-2">
              <span className="badge me-2" style={{ backgroundColor: platform.color, color: 'white' }}>
                {platform.courses.length} Courses
              </span>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="mb-4" style={{
              color: '#2c3e50',
              borderBottom: '3px solid #3498db',
              paddingBottom: '10px',
              fontWeight: '700',
              fontSize: '1.8rem'
            }}>
              Available Courses
            </h3>
            {platformCourses.length > 0 ? (
              <div className="courses-container" style={{
                overflowX: (platformKey === 'mentor' || platformKey === 'yanfaa') ? 'auto' : 'visible',
                overflowY: 'visible',
                paddingBottom: (platformKey === 'mentor' || platformKey === 'yanfaa') ? '20px' : '0'
              }}>
                <div className={(platformKey === 'mentor' || platformKey === 'yanfaa') ? 'd-flex' : 'row g-4'} style={{
                  gap: (platformKey === 'mentor' || platformKey === 'yanfaa') ? '1.5rem' : 'inherit',
                  flexWrap: (platformKey === 'mentor' || platformKey === 'yanfaa') ? 'nowrap' : 'inherit'
                }}>
                  {platformCourses.map((course, index) => (
                    <div key={index} className={(platformKey === 'mentor' || platformKey === 'yanfaa') ? '' : 'col-lg-4 col-md-6'} style={{
                      minWidth: (platformKey === 'mentor' || platformKey === 'yanfaa') ? '320px' : 'auto',
                      flex: (platformKey === 'mentor' || platformKey === 'yanfaa') ? '0 0 320px' : 'none'
                    }}>
                      <div className="card h-100" style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '20px',
                        border: '2px solid rgba(52,152,219,0.2)',
                        color: '#2c3e50',
                        transition: 'all 0.4s ease',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-8px)';
                          e.currentTarget.style.boxShadow = '0 15px 40px rgba(52,152,219,0.2)';
                          e.currentTarget.style.borderColor = 'rgba(52,152,219,0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                          e.currentTarget.style.borderColor = 'rgba(52,152,219,0.2)';
                        }}
                      >
                        <div className="card-body p-4" style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%'
                        }}>
                          <div className="text-center mb-3">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="rounded mb-3"
                              style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                objectPosition: (
                                  course.title.includes('كيف تصبح مدرب') ||
                                  course.title.includes('كيف تستعد لمقابلة') ||
                                  course.title.includes('كيف تحصل على وظيفة') ||
                                  course.title.includes('أساسيات العمل المصرفي') ||
                                  course.title.includes('كيفية كتابة سيرة') ||
                                  course.title.includes('التأهيل لسوق') ||
                                  course.title.includes('الشمول المالي الرقمي') ||
                                  course.title.includes('تمكين الشمول المالي') ||
                                  course.title.includes('حقوقك البنكية') ||
                                  course.title.includes('قواعد الجامعة') ||
                                  course.title.includes('مهارات إدارة الوقت')
                                ) ? 'center top' : 'center center',
                                border: `3px solid ${platform.color}30`,
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                              }}
                            />
                          </div>

                          <h5 className="card-title fw-bold mb-2" style={{
                            color: '#2c3e50',
                            fontSize: '1.3rem',
                            lineHeight: '1.4'
                          }}>
                            {course.title}
                            {course.isNew && (
                              <span className="badge bg-success ms-2" style={{
                                fontSize: '0.7rem',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '12px'
                              }}>
                                New
                              </span>
                            )}
                          </h5>

                          <p className="card-text mb-3" style={{
                            color: '#5a6c7d',
                            fontSize: '0.85em',
                            lineHeight: '1.4',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {course.description}
                          </p>

                          <div className="row text-center mb-3">
                            <div className="col-4">
                              <small style={{ color: '#7b8a8b', fontWeight: '600' }}>
                                <i className="bi bi-clock me-1"></i>
                                {course.duration}
                              </small>
                            </div>
                            <div className="col-4">
                              {course.price && (
                                <small className={`fw-bold ${course.price === 'Free' || course.price === 'Discounted' ? 'text-success' : 'text-warning'}`}>
                                  {course.price}
                                </small>
                              )}
                            </div>
                            <div className="col-4">
                              <small style={{ color: '#7b8a8b', fontWeight: '600' }}>
                                <i className="bi bi-mortarboard me-1"></i>
                                {course.level}
                              </small>
                            </div>
                          </div>

                          <div style={{ flexGrow: 1 }}></div>

                          <div className="d-grid">
                            <a
                              href={course.externalLink}
                              className="btn"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: 'linear-gradient(45deg, #3498db, #2980b9)',
                                color: 'white',
                                borderRadius: '25px',
                                fontWeight: '600',
                                padding: '12px 24px',
                                transition: 'all 0.3s ease',
                                border: 'none',
                                fontSize: '1rem',
                                boxShadow: '0 4px 15px rgba(52,152,219,0.3)'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 25px rgba(52,152,219,0.4)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(52,152,219,0.3)';
                              }}
                            >
                              <i className="bi bi-box-arrow-up-right me-2"></i>
                              Enroll Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-search display-4 text-muted mb-3"></i>
                <h4 className="text-muted">No courses found</h4>
                <p className="text-muted">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>

        {/* Feedback Section */}
        {(platformKey === 'yanfaa' || platformKey === 'mentor') && (
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4" style={{
                color: '#2c3e50',
                borderBottom: '3px solid #e74c3c',
                paddingBottom: '10px',
                fontWeight: '700',
                fontSize: '1.8rem'
              }}>
                {platformKey === 'mentor' ? 'Some Testimonials' : 'Student Feedback'}
              </h3>
              {platform.feedback.length > 0 ? (
                <div className="testimonials-container">
                  {/* Mobile: Horizontal Scroll */}
                  <div className="d-block d-md-none testimonials-scroll" style={{
                    overflowX: 'auto',
                    overflowY: 'visible',
                    paddingBottom: '20px',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#3498db #f1f1f1'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '1.5rem',
                      flexWrap: 'nowrap'
                    }}>
                      {platform.feedback.map((review, index) => (
                        <div key={index} style={{
                          minWidth: '300px',
                          flex: '0 0 300px'
                        }}>
                          {platformKey === 'yanfaa' ? (
                            <div className="testimonial-card" style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                              borderRadius: '20px',
                              padding: '25px',
                              boxShadow: '0 8px 30px rgba(52,152,219,0.15)',
                              border: '1px solid rgba(52,152,219,0.1)',
                              position: 'relative',
                              minHeight: '180px',
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '20px',
                                fontSize: '40px',
                                color: '#3498db',
                                fontFamily: 'Georgia, serif'
                              }}>
                                “
                              </div>
                              <p style={{
                                color: '#2c3e50',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: '15px 0',
                                fontWeight: '400',
                                textAlign: 'right',
                                direction: 'rtl',
                                flex: 1
                              }}>
                                {review.comment}
                              </p>
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 'auto',
                                paddingTop: '15px',
                                borderTop: '1px solid rgba(52,152,219,0.1)'
                              }}>
                                <div>
                                  <h6 style={{
                                    color: '#3498db',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    margin: '0',
                                    textAlign: 'right'
                                  }}>
                                    {review.name}
                                  </h6>
                                </div>
                                <div style={{
                                  display: 'flex',
                                  gap: '2px'
                                }}>
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{
                                      color: '#ffd700',
                                      fontSize: '14px'
                                    }}>
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="card" style={{
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: '15px',
                              border: '1px solid rgba(52,152,219,0.2)',
                              color: '#2c3e50',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                              height: '100%'
                            }}>
                              <div className="card-body p-3">
                                <img
                                  src={review.image}
                                  alt={`Testimonial from ${review.studentName || review.name}`}
                                  style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    objectFit: 'contain'
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop: Grid Layout */}
                  <div className="d-none d-md-block">
                    <div className="row g-4">
                      {displayedFeedback.map((review, index) => (
                        <div key={index} className="col-md-4">
                          {platformKey === 'yanfaa' ? (
                            <div className="testimonial-card" style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                              borderRadius: '20px',
                              padding: '25px',
                              boxShadow: '0 8px 30px rgba(52,152,219,0.15)',
                              border: '1px solid rgba(52,152,219,0.1)',
                              position: 'relative',
                              minHeight: '200px',
                              display: 'flex',
                              flexDirection: 'column',
                              transition: 'all 0.3s ease',
                              height: '100%'
                            }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 15px 45px rgba(52,152,219,0.25)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(52,152,219,0.15)';
                              }}
                            >
                              <div style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '20px',
                                fontSize: '50px',
                                color: '#3498db',
                                fontFamily: 'Georgia, serif'
                              }}>
                                “
                              </div>
                              <p style={{
                                color: '#2c3e50',
                                fontSize: '15px',
                                lineHeight: '1.7',
                                margin: '20px 0',
                                fontWeight: '400',
                                textAlign: 'right',
                                direction: 'rtl',
                                flex: 1
                              }}>
                                {review.comment}
                              </p>
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 'auto',
                                paddingTop: '20px',
                                borderTop: '1px solid rgba(52,152,219,0.1)'
                              }}>
                                <div>
                                  <h6 style={{
                                    color: '#3498db',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    margin: '0',
                                    textAlign: 'right'
                                  }}>
                                    {review.name}
                                  </h6>
                                </div>
                                <div style={{
                                  display: 'flex',
                                  gap: '3px'
                                }}>
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{
                                      color: '#ffd700',
                                      fontSize: '16px'
                                    }}>
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="card h-100" style={{
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: '15px',
                              border: '1px solid rgba(52,152,219,0.2)',
                              color: '#2c3e50',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                            }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(52,152,219,0.2)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                              }}
                            >
                              <div className="card-body p-3">
                                <img
                                  src={review.image}
                                  alt={`Testimonial from ${review.studentName || review.name}`}
                                  style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '10px',
                                    objectFit: 'contain'
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Show More/Less Button */}
                    {platform.feedback.length > 3 && (
                      <div className="text-center mt-4">
                        <button
                          onClick={toggleFeedback}
                          className="btn"
                          style={{
                            background: 'linear-gradient(45deg, #3498db, #2980b9)',
                            color: 'white',
                            borderRadius: '25px',
                            fontWeight: '600',
                            padding: '12px 30px',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            fontSize: '1rem',
                            boxShadow: '0 4px 15px rgba(52,152,219,0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(52,152,219,0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(52,152,219,0.3)';
                          }}
                        >
                          {isShowingAll ? (
                            <>
                              <i className="bi bi-chevron-up me-2"></i>
                              Show Less
                            </>
                          ) : (
                            <>
                              <i className="bi bi-chevron-down me-2"></i>
                              Show More ({platform.feedback.length - 3} more reviews)
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-5">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="card h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        border: '2px dashed rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        minHeight: '200px'
                      }}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                          <i className="bi bi-image display-4 text-muted mb-3"></i>
                          <h6 className="text-muted">Feedback Image</h6>
                          <p className="text-muted small mb-0">Coming Soon...</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        border: '2px dashed rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        minHeight: '200px'
                      }}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                          <i className="bi bi-image display-4 text-muted mb-3"></i>
                          <h6 className="text-muted">Feedback Image</h6>
                          <p className="text-muted small mb-0">Coming Soon...</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100" style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        border: '2px dashed rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        minHeight: '200px'
                      }}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                          <i className="bi bi-image display-4 text-muted mb-3"></i>
                          <h6 className="text-muted">Feedback Image</h6>
                          <p className="text-muted small mb-0">Coming Soon...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Add CSS styles for horizontal scrolling
  const horizontalScrollStyles = `
    .courses-container::-webkit-scrollbar {
      height: 8px;
    }
    .courses-container::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    .courses-container::-webkit-scrollbar-thumb {
      background: #3498db;
      border-radius: 4px;
    }
    .courses-container::-webkit-scrollbar-thumb:hover {
      background: #2980b9;
    }
    .testimonials-scroll::-webkit-scrollbar {
      height: 10px;
    }
    .testimonials-scroll::-webkit-scrollbar-track {
      background: #f8f9fa;
      border-radius: 6px;
      margin: 0 10px;
    }
    .testimonials-scroll::-webkit-scrollbar-thumb {
      background: linear-gradient(90deg, #3498db, #2980b9);
      border-radius: 6px;
      border: 2px solid #f8f9fa;
    }
    .testimonials-scroll::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(90deg, #2980b9, #1f4e79);
    }
    .d-flex {
      display: flex !important;
    }
    .courses-container .d-flex {
      align-items: stretch;
    }
    .courses-container .d-flex > div {
      height: auto;
    }
  `;

  return (
    <div className="min-vh-100" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #f1f3f4 50%, #f8f9fa 100%)',
      color: '#2c3e50',
      paddingTop: '120px',
      paddingBottom: '20px'
    }}>
      <style>{horizontalScrollStyles}</style>
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3" style={{
              color: '#2c3e50',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              fontSize: '3.5rem',
              letterSpacing: '-0.5px'
            }}>
              Complete Courses Collection
            </h1>
            <p className="lead mb-4" style={{
              color: '#5a6c7d',
              fontSize: '1.3rem',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              Explore our comprehensive library of professional development courses across various platforms
            </p>
            <Link
              to="/"
              className="btn btn-lg px-4 py-2"
              style={{
                background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                border: 'none',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(44,62,80,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(44,62,80,0.2)';
              }}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Platform Navigation */}
        {activePlatform === 'all' && (
          <div className="row mb-5">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <button
                  className={`btn py-3 px-4 rounded-pill fw-semibold mb-2 ${activePlatform === 'all' ? 'active' : ''
                    }`}
                  onClick={() => setActivePlatform('all')}
                  style={{
                    background: activePlatform === 'all'
                      ? 'linear-gradient(45deg, #3498db, #2980b9)'
                      : 'rgba(255, 255, 255, 0.9)',
                    border: activePlatform === 'all' ? 'none' : '2px solid rgba(52,152,219,0.3)',
                    color: activePlatform === 'all' ? '#FFFFFF' : '#2c3e50',
                    minWidth: '140px',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    boxShadow: activePlatform === 'all' ? '0 6px 20px rgba(52,152,219,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  All Platforms
                </button>
                {platforms.map(platformKey => {
                  const platform = platformsData[platformKey];
                  return (
                    <button
                      key={platformKey}
                      className={`btn py-3 px-4 rounded-pill fw-semibold mb-2 ${activePlatform === platformKey ? 'active' : ''
                        }`}
                      onClick={() => setActivePlatform(platformKey)}
                      style={{
                        background: activePlatform === platformKey
                          ? 'linear-gradient(45deg, #34495e, #2c3e50)'
                          : 'rgba(255, 255, 255, 0.9)',
                        border: activePlatform === platformKey ? 'none' : '2px solid rgba(52,73,94,0.3)',
                        color: activePlatform === platformKey ? '#FFFFFF' : '#2c3e50',
                        minWidth: '140px',
                        transition: 'all 0.3s ease',
                        fontWeight: '600',
                        boxShadow: activePlatform === platformKey ? '0 6px 20px rgba(52,73,94,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                    >
                      {platform.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {activePlatform !== 'all' && (
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="input-group" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '25px',
                border: '2px solid rgba(52,152,219,0.3)',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <span className="input-group-text bg-transparent border-0" style={{ color: '#5a6c7d' }}>
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent border-0"
                  placeholder={`Search ${platformsData[activePlatform].name} courses...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ color: '#2c3e50', fontWeight: '500' }}
                />
              </div>
            </div>
            <div className="col-md-6 text-end">
              <button
                onClick={() => setActivePlatform('all')}
                className="btn me-3"
                style={{
                  background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                  color: '#FFFFFF',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontWeight: '600',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(231,76,60,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(231,76,60,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(231,76,60,0.3)';
                }}
              >
                <i className="bi bi-grid-3x3-gap me-2"></i>
                All Courses
              </button>
              <Link
                to="/"
                className="btn"
                style={{
                  background: 'linear-gradient(45deg, #34495e, #2c3e50)',
                  color: '#FFFFFF',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontWeight: '600',
                  border: 'none',
                  textDecoration: 'none'
                }}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Platform Content */}
        {activePlatform === 'all' ? (
          <div className="row g-4">
            {platforms.map(platformKey => renderPlatformSection(platformKey))}
          </div>
        ) : (
          renderPlatformSection(activePlatform)
        )}
      </div>
    </div>
  );
};

export default FullCourses;
