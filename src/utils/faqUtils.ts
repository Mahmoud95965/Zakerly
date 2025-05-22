import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const defaultFAQs = [
  {
    question: "ما هو زاكرلي؟",
    answer: "زاكرلي هو منصة تجمع أفضل أدوات الذكاء الاصطناعي للتعليم في مكان واحد. نساعد الطلاب والمعلمين في العثور على الأدوات المناسبة لتحسين تجربة التعلم والتعليم.",
    order: 1
  },
  {
    question: "كيف يمكنني إضافة أداة جديدة؟",
    answer: "يمكنك إضافة أداة جديدة عن طريق تسجيل الدخول إلى حسابك والنقر على زر 'إضافة أداة'. املأ النموذج بجميع المعلومات المطلوبة وانتظر موافقة المسؤولين.",
    order: 2
  },
  {
    question: "ما هي معايير قبول الأدوات؟",
    answer: "نقبل الأدوات التي تستخدم الذكاء الاصطناعي لتحسين عملية التعلم أو التعليم. يجب أن تكون الأداة آمنة وموثوقة وذات قيمة تعليمية واضحة.",
    order: 3
  },
  {
    question: "هل جميع الأدوات مجانية؟",
    answer: "لا، تختلف الأدوات في نموذج التسعير. بعضها مجاني بالكامل، وبعضها يقدم نسخة مجانية مع ميزات إضافية مدفوعة، وبعضها يتطلب اشتراكًا.",
    order: 4
  },
  {
    question: "كيف يمكنني الإبلاغ عن مشكلة في أداة؟",
    answer: "يمكنك استخدام نموذج 'اتصل بنا' للإبلاغ عن أي مشاكل تواجهها مع أي أداة. سيقوم فريقنا بمراجعة البلاغ واتخاذ الإجراء المناسب.",
    order: 5
  }
];

export const initializeDefaultFAQs = async () => {
  try {
    // Check if FAQs already exist
    const q = query(collection(db, 'faqs'));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      // Add default FAQs if none exist
      for (const faq of defaultFAQs) {
        await addDoc(collection(db, 'faqs'), faq);
      }
      console.log('Default FAQs initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing default FAQs:', error);
  }
};
