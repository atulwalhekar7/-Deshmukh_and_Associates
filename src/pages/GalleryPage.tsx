
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import g1 from '../assets/team/gallery24.jpg';
import g2 from '../assets/team/gallery27.jpg';
import g3 from '../assets/team/gallery25.jpg';
import g4 from '../assets/team/gallery26.jpg';
import g5 from '../assets/team/gallery23.jpg';
import g6 from '../assets/team/gallery20.jpg';
import g7 from '../assets/team/gallery86.jpg';
import g8 from '../assets/team/gallery88.jpg';
import g9 from '../assets/team/gallery21.jpg';

const images = [
  g1, g3, g2, g8, g9, g4, g5, g6, g7,
];

const GalleryPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <br />
        <br />
        <br />
        <h2 className="text-4xl font-bold text-white mt-5 mb-4">
          <span className="text-gold">
           {t('gallery')}
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
              onClick={() => setSelectedImg(src)}
            >
              <img src={src} alt={`Gallery Pic ${index + 1}`} className="w-full h-49 object-cover" />
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center transition-opacity duration-300">
                <FaSearchPlus className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => { window.scrollTo(0, 0); navigate('/'); }}
          className="bg-gold mb-2 mt-4 hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
         {t('goBack')}
        </button>
      </div>

      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedImg(null)}
            aria-label="Close image"
          >
            <FaTimes />
          </button>
          <img src={selectedImg} alt="Selected" className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </>
  );
};

export default GalleryPage;
