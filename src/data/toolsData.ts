import { Tool, ToolCategory, ToolPricing } from '../types';

export const tools: Tool[] = [
  {
    id: '1',
    name: 'EssayGenius',
    description: 'مساعد كتابة المقالات المدعوم بالذكاء الاصطناعي لمساعدة الطلاب في تنظيم أفكارهم وتحسين كتاباتهم.',
    longDescription: 'برنامج EssayGenius هو أداة كتابة متقدمة مدعومة بالذكاء الاصطناعي مصممة خصيصاً للمقالات الأكاديمية. يساعد الطلاب في العصف الذهني للأفكار، وإنشاء المخططات، وتحسين بنية الجمل، وتدقيق القواعد اللغوية، وتعزيز المفردات. توفر الأداة تغذية راجعة فورية حول الوضوح والتماسك والحجج، مما يجعلها مورداً قيماً للطلاب في جميع المستويات.',
    category: 'Writing',
    tags: ['كتابة المقالات', 'القواعد اللغوية', 'أكاديمي'],
    url: 'https://essaygenius.example.com',
    imageUrl: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Freemium',
    features: ['تدقيق القواعد اللغوية', 'اقتراحات الأسلوب', 'مساعدة في المخططات', 'كشف الانتحال'],
    rating: 4.7,
    reviewCount: 1243,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '2',
    name: 'MathSolver Pro',
    description: 'حل خطوة بخطوة لأي مسألة رياضية مع شروحات مفصلة وموارد تعليمية.',
    longDescription: 'يستخدم MathSolver Pro الذكاء الاصطناعي المتقدم لحل المسائل الرياضية المعقدة من الجبر إلى التفاضل والتكامل. ما يميزه هو الشروحات المفصلة خطوة بخطوة المقدمة لكل حل، مما يساعد الطلاب على فهم المفاهيم بدلاً من مجرد الحصول على الإجابات. يتضمن التطبيق مسائل تدريبية تفاعلية، ووسائل مرئية، ومسارات تعلم مخصصة.',
    category: 'Math',
    tags: ['حل المسائل', 'الجبر', 'التفاضل والتكامل', 'الهندسة'],
    url: 'https://mathsolverpro.example.com',
    imageUrl: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Subscription',
    features: ['حلول خطوة بخطوة', 'طرق حل متعددة', 'مرجع المعادلات', 'مسائل تدريبية'],
    rating: 4.9,
    reviewCount: 3567,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '3',
    name: 'ResearchBuddy',
    description: 'مساعد بحث مدعوم بالذكاء الاصطناعي يساعد الطلاب في العثور على مصادر موثوقة وتلخيص المعلومات بكفاءة.',
    longDescription: 'يسهل ResearchBuddy عملية البحث الأكاديمي من خلال مساعدة الطلاب في العثور على مصادر موثوقة، واستخراج المعلومات الرئيسية، وتنظيم مواد البحث. يمكن للذكاء الاصطناعي تحليل الأوراق الأكاديمية، وإنشاء ملخصات، وتسليط الضوء على النتائج المهمة، واقتراح مصادر ذات صلة. كما يساعد في تنسيق الاقتباسات بأنماط مختلفة بما في ذلك APA و MLA و Chicago.',
    category: 'Research',
    tags: ['مراجعة الأدبيات', 'الاقتباسات', 'البحث الأكاديمي'],
    url: 'https://researchbuddy.example.com',
    imageUrl: 'https://images.pexels.com/photos/256546/pexels-photo-256546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Freemium',
    features: ['التحقق من مصداقية المصادر', 'إنشاء الاقتباسات', 'إنشاء الملخصات', 'تنظيم البحث'],
    rating: 4.5,
    reviewCount: 892,
    isNew: true,
    isFeatured: false,
    isPopular: false
  },
  {
    id: '4',
    name: 'LinguaLearn AI',
    description: 'منصة تعلم لغات شخصية مع شركاء محادثة بالذكاء الاصطناعي ودروس تكيفية.',
    longDescription: 'يحدث LinguaLearn AI ثورة في تعلم اللغات من خلال توفير شركاء محادثة واقعيين بالذكاء الاصطناعي يتكيفون مع مستوى كفاءتك. تستخدم المنصة معالجة اللغة الطبيعية لتقديم تغذية راجعة فورية حول النطق والقواعد واستخدام المفردات. تتكيف خطط الدروس الشخصية بناءً على وتيرة تعلمك والمجالات التي تحتاج إلى تحسين، مما يجعل اكتساب اللغة أكثر كفاءة ومتعة.',
    category: 'Language Learning',
    tags: ['تدريب المحادثة', 'المفردات', 'القواعد'],
    url: 'https://lingualearni.example.com',
    imageUrl: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Subscription',
    features: ['شركاء محادثة ذكاء اصطناعي', 'تغذية راجعة للنطق', 'مسارات تعلم تكيفية', 'سياق ثقافي'],
    rating: 4.6,
    reviewCount: 2145,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '5',
    name: 'StudyScheduler',
    description: 'مخطط دراسة مدعوم بالذكاء الاصطناعي ينشئ جداول محسنة بناءً على أسلوب تعلمك وأهدافك.',
    longDescription: 'يستخدم StudyScheduler الذكاء الاصطناعي لإنشاء خطط دراسية شخصية بناءً على مبادئ العلوم المعرفية. يحلل أسلوب تعلمك والمواد الدراسية والوقت المتاح لإنشاء جدول محسن مع فترات مناسبة للتعلم والمراجعة والاختبار. يتكيف التطبيق مع تقدمك، ويعدل الصعوبة ومجالات التركيز بناءً على أدائك وتغذيتك الراجعة.',
    category: 'Productivity',
    tags: ['إدارة الوقت', 'التكرار المتباعد', 'التخطيط'],
    url: 'https://studyscheduler.example.com',
    imageUrl: 'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Free',
    features: ['جدولة شخصية', 'دمج التكرار المتباعد', 'تتبع التقدم', 'مزامنة التقويم'],
    rating: 4.3,
    reviewCount: 756,
    isNew: false,
    isFeatured: false,
    isPopular: true
  },
  {
    id: '6',
    name: 'ChemVision',
    description: 'تصورات ومحاكاة ثلاثية الأبعاد تفاعلية للكيمياء مدعومة بالذكاء الاصطناعي لفهم أفضل للمفاهيم المعقدة.',
    longDescription: 'يجعل ChemVision الكيمياء حية من خلال التصورات والمحاكاة ثلاثية الأبعاد المدعومة بالذكاء الاصطناعي. يمكن للطلاب استكشاف البنى الجزيئية والتفاعلات الكيميائية والإجراءات المخبرية في بيئة افتراضية تفاعلية. يوجه الذكاء الاصطناعي التعلم من خلال شرح المفاهيم وتوقع التفاعلات وتقديم معلومات سياقية بناءً على ما يشاهده الطالب أو يتعامل معه حالياً.',
    category: 'Science',
    tags: ['الكيمياء', 'التصور البصري', 'النمذجة الجزيئية'],
    url: 'https://chemvision.example.com',
    imageUrl: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Paid',
    features: ['نماذج جزيئية ثلاثية الأبعاد', 'محاكاة التفاعلات', 'إجراءات مخبرية', 'إنشاء اختبارات'],
    rating: 4.8,
    reviewCount: 1102,
    isNew: true,
    isFeatured: true,
    isPopular: false
  },
  {
    id: '7',
    name: 'TestPrep AI',
    description: 'نظام تحضير اختبارات تكيفي يحدد الفجوات المعرفية ويوفر تدريباً مستهدفاً.',
    longDescription: 'يحدث TestPrep AI ثورة في التحضير للامتحانات باستخدام الذكاء الاصطناعي لتحديد الفجوات المعرفية وإنشاء خطط دراسية شخصية. يحلل النظام الأداء في أسئلة التدريب لتحديد نقاط القوة والضعف، ثم ينشئ مجموعات أسئلة مخصصة تركز على المجالات التي تحتاج إلى تحسين. تتبع التحليلات المتقدمة التقدم مع الوقت وتتنبأ بدرجات الاختبار المحتملة بناءً على الأداء الحالي.',
    category: 'Test Prep',
    tags: ['SAT', 'ACT', 'GRE', 'تعلم شخصي'],
    url: 'https://testprepai.example.com',
    imageUrl: 'https://images.pexels.com/photos/6238040/pexels-photo-6238040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Subscription',
    features: ['أسئلة تكيفية', 'تحديد نقاط الضعف', 'تحليلات الأداء', 'التنبؤ بالدرجات'],
    rating: 4.7,
    reviewCount: 1876,
    isNew: false,
    isFeatured: false,
    isPopular: true
  },
  {
    id: '8',
    name: 'LectureTranscribe',
    description: 'ذكاء اصطناعي يسجل ويكتب ويلخص المحاضرات مع تسليط الضوء على المفاهيم المهمة.',
    longDescription: 'LectureTranscribe هو أداة أساسية للطلاب الذين يريدون التركيز على الفهم بدلاً من مجرد تدوين الملاحظات. يقوم الذكاء الاصطناعي بتسجيل المحاضرات وإنشاء نصوص دقيقة وملخصات موجزة تسلط الضوء على المفاهيم الرئيسية. يمكنه تحديد المصطلحات المهمة وإنشاء بطاقات تعليمية من المواد وحتى إنشاء أسئلة تدريبية بناءً على محتوى المحاضرة.',
    category: 'Studying',
    tags: ['تدوين الملاحظات', 'النسخ', 'التلخيص'],
    url: 'https://lecturetranscribe.example.com',
    imageUrl: 'https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Freemium',
    features: ['نسخ في الوقت الفعلي', 'استخراج المفاهيم الرئيسية', 'إنشاء الملخصات', 'أرشيف قابل للبحث'],
    rating: 4.4,
    reviewCount: 643,
    isNew: true,
    isFeatured: false,
    isPopular: false
  },
  {
    id: '9',
    name: 'TeacherAssist',
    description: 'مساعد تدريس ذكي يساعد في إنشاء خطط الدروس وتوليد الواجبات وتقييم عمل الطلاب.',
    longDescription: 'TeacherAssist هو أداة ذكاء اصطناعي شاملة مصممة لتوفير وقت المعلمين في المهام الإدارية. يمكنه إنشاء خطط دروس شخصية متوافقة مع معايير المناهج، وإنشاء واجبات وتقييمات مخصصة، وتوفير تصحيح آلي مع تغذية راجعة مفصلة، وتتبع تقدم الطلاب مع مرور الوقت. يتعلم النظام من تفضيلات المعلم وأداء الطلاب لتحسين توصياته بشكل مستمر.',
    category: 'Teaching',
    tags: ['تخطيط الدروس', 'التصحيح', 'إنشاء الواجبات'],
    url: 'https://teacherassist.example.com',
    imageUrl: 'https://images.pexels.com/photos/5427867/pexels-photo-5427867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Subscription',
    features: ['إنشاء خطط الدروس', 'تصحيح آلي', 'تتبع التقدم', 'توافق المعايير'],
    rating: 4.6,
    reviewCount: 1243,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '10',
    name: 'CodeMentor AI',
    description: 'معلم برمجة تفاعلي يشرح المفاهيم ويراجع الكود ويقترح التحسينات.',
    longDescription: 'يعمل CodeMentor AI كمعلم برمجة شخصي لطلاب علوم الحاسب. يمكنه شرح مفاهيم البرمجة بمصطلحات بسيطة، ومراجعة كود الطالب لتحديد الأخطاء وعدم الكفاءة، واقتراح التحسينات، وإرشاد الطلاب خلال حل مشاكل البرمجة المعقدة خطوة بخطوة. يتكيف الذكاء الاصطناعي في نهج التدريس بناءً على مستوى مهارة الطالب وتقدم تعلمه.',
    category: 'Other',
    tags: ['البرمجة', 'علوم الحاسب', 'الترميز'],
    url: 'https://codementorai.example.com',
    imageUrl: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Freemium',
    features: ['مراجعة الكود', 'شرح المفاهيم', 'تصحيح الأخطاء التفاعلي', 'إرشاد المشاريع'],
    rating: 4.9,
    reviewCount: 2156,
    isNew: false,
    isFeatured: true,
    isPopular: true
  },
  {
    id: '11',
    name: 'HistoryExplorer',
    description: 'تجربة سفر عبر الزمن افتراضية مدعومة بالذكاء الاصطناعي مع سيناريوهات تاريخية غامرة ومصادر أولية.',
    longDescription: 'يستخدم HistoryExplorer الذكاء الاصطناعي لإنشاء تجارب تعلم تاريخية غامرة. يمكن للطلاب المشاركة في محادثات محاكاة مع شخصيات تاريخية، واستكشاف إعادة بناء ثلاثية الأبعاد دقيقة للمواقع التاريخية، وتحليل المصادر الأولية بمساعدة معلومات سياقية من الذكاء الاصطناعي. تجعل المنصة التاريخ حياً من خلال سرد القصص والسيناريوهات التفاعلية المستندة إلى الأحداث التاريخية.',
    category: 'Other',
    tags: ['التاريخ', 'الواقع الافتراضي', 'التعلم التفاعلي'],
    url: 'https://historyexplorer.example.com',
    imageUrl: 'https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Paid',
    features: ['محاكاة تاريخية', 'تحليل المصادر الأولية', 'إعادة بناء افتراضي', 'جداول زمنية تفاعلية'],
    rating: 4.5,
    reviewCount: 873,
    isNew: true,
    isFeatured: false,
    isPopular: false
  },
  {
    id: '12',
    name: 'BiologyViz',
    description: 'أداة تصور بيولوجي متقدمة مع شروحات بالذكاء الاصطناعي للعمليات البيولوجية المعقدة.',
    longDescription: 'يحول BiologyViz تعليم الأحياء من خلال تصورات تفاعلية مدفوعة بالذكاء الاصطناعي للهياكل والعمليات البيولوجية المعقدة. من الوظائف الخلوية إلى ديناميكيات النظم البيئية، توفر الأداة نماذج ثلاثية الأبعاد مفصلة مع شروحات صوتية مصممة لمختلف المستويات التعليمية. يمكن للطلاب التحكم في التصورات، وتشغيل المحاكاة، وتلقي شروحات شخصية بناءً على استفساراتهم.',
    category: 'Science',
    tags: ['علم الأحياء', 'التصور البصري', 'التعلم التفاعلي'],
    url: 'https://biologyviz.example.com',
    imageUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    pricing: 'Subscription',
    features: ['نماذج بيولوجية ثلاثية الأبعاد', 'محاكاة العمليات', 'تعلم تفاعلي', 'تعقيد قابل للتخصيص'],
    rating: 4.7,
    reviewCount: 934,
    isNew: false,
    isFeatured: false,
    isPopular: true
  }
];

export const categories: ToolCategory[] = [
  'Writing',
  'Research',
  'Math',
  'Science',
  'Language Learning',
  'Productivity',
  'Studying',
  'Test Prep',
  'Teaching',
  'Other'
];

export const pricingOptions: ToolPricing[] = [
  'Free',
  'Freemium',
  'Paid',
  'Subscription'
];

export const getFeaturedTools = (): Tool[] => {
  return tools.filter(tool => tool.isFeatured);
};

export const getPopularTools = (): Tool[] => {
  return tools.filter(tool => tool.isPopular);
};

export const getNewTools = (): Tool[] => {
  return tools.filter(tool => tool.isNew);
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getRelatedTools = (tool: Tool, limit: number = 3): Tool[] => {
  return tools
    .filter(t => 
      t.id !== tool.id && 
      (t.category === tool.category || 
       t.tags.some(tag => tool.tags.includes(tag)))
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getAllToolsByCategory = (category: ToolCategory): Tool[] => {
  return tools.filter(tool => tool.category === category);
};