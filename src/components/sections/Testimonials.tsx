
// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';
// import { useTranslation } from '../../hooks/useTranslation';

// const Testimonials: React.FC = () => {
//   const { t } = useTranslation();

//   const testimonials = [
//     { quote: t('testimonial1'), author: "S. Patel", rating: 5 },
//     { quote: t('testimonial2'), author: "R. Mehta", rating: 5 },
//     { quote: t('testimonial3'), author: "J. Raj", rating: 5 },
//     { quote: t('testimonial4'), author: "R. Kumar", rating: 5 }
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const renderStars = (rating: number) => {
//     return Array(rating).fill(0).map((_, i) => (
//       <Star key={i} className="w-5 h-5 text-gold fill-current" />
//     ));
//   };

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-black mb-4">
//             <span className="text-gold">{t('clientsSay')}</span>
//           </h2>
//           <p className="text-xl text-charcoal max-w-2xl mx-auto">
//             {t('testimonialsDesc')}
//           </p>
//         </div>

//         {/* Outer container with fixed height */}
//         <div className="relative w-full overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${(index / 2) * 100}%)`,
//               width: `${(testimonials.length / 2) * 100}%`
//             }}
//           >
//             {testimonials.map((testimonial, i) => (
//               <div
//                 key={i}
//                 className="w-1/2 px-4 flex-shrink-0"
//               >
//                 <div className="bg-gray-50 p-8 rounded-xl shadow-lg border hover:border-gold transition-all h-full flex flex-col justify-between">
//                   <div>
//                     <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
//                     <blockquote className="text-lg text-charcoal mb-6 leading-relaxed">
//                       "{testimonial.quote}"
//                     </blockquote>
//                   </div>
//                   <cite className="text-black font-semibold">— {testimonial.author}</cite>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    { quote: t('testimonial1'), author: "S. Patel", rating: 5 },
    { quote: t('testimonial2'), author: "R. Mehta", rating: 5 },
    { quote: t('testimonial3'), author: "J. Raj", rating: 5 },
    { quote: t('testimonial4'), author: "R. Kumar", rating: 5 }
  ];

  const renderStars = (rating: number) =>
    Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-gold fill-current" />
    ));

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            <span className="text-gold">{t('clientsSay')}</span>
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            {t('testimonialsDesc')}
          </p>
        </div>

        {/* Responsive grid layout for testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
            // <div
            //   key={i}
            //   className="bg-gray-50 p-8 rounded-xl shadow-lg border hover:border-gold transition-all h-full flex flex-col justify-between"
            // >
            //   <div>
            //     <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
            //     <blockquote className="text-lg text-charcoal mb-6 leading-relaxed">
            //       "{testimonial.quote}"
            //     </blockquote>
            //   </div>
            //   <cite className="text-black font-semibold">— {testimonial.author}</cite>
            // </div>
            <div
              key={i}
              className="bg-gray-50 p-2 rounded-xl shadow-lg border hover:border-gold transition-all h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <blockquote className="text-lg text-charcoal mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <cite className="text-black font-semibold">— {testimonial.author}</cite>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
