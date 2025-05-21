import React from 'react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

const testimonialsImages = [
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  // Cast the translation result to array of Testimonial
  const testimonials = (t('testimonials.items', { returnObjects: true }) as Testimonial[]);
  
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('testimonials.title')}</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:shadow-gray-900"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonialsImages[index]}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover ml-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed text-right">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;