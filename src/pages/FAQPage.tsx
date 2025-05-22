import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { getFAQs } from '../utils/firebaseUtils';
import { FAQ } from '../types/tool';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      const faqItems = await getFAQs();
      setFaqs(faqItems);
      // Open the first FAQ by default
      if (faqItems.length > 0) {
        setOpenFaq(faqItems[0].id);
      }
    } catch (error) {
      console.error('Error loading FAQs:', error);
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">الأسئلة الشائعة</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                إجابات على الأسئلة الأكثر شيوعاً حول منصتنا وخدماتنا
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full text-right px-6 py-4 flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                    <span className="ml-4 flex-shrink-0">
                      {openFaq === faq.id ? (
                        <ChevronUp className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 text-right leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {faqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">جاري تحميل الأسئلة الشائعة...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
