
import React, { useState } from 'react';
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

// ✅ Import images
import p1 from '../../assets/team/gallery20.jpg';
import p2 from '../../assets/team/gallery21.jpg';
import p3 from '../../assets/team/gallery23.jpg';
import p4 from '../../assets/team/gallery24.jpg';
import p5 from '../../assets/team/gallery25.jpg';

export default function ProfileImageGrid() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const navigate = useNavigate();

  const [selectedImg, setSelectedImg] = useState(null);

  const handleClick = () => {
    navigate('/Deshmukh&Associates/GalleryPage');
    window.scrollTo(0, 0);
  };

  return (
    <section id="gallery">
      <br />
      <br />

      <h2 className="text-4xl text-center font-bold text-white mb-4">
        <span className="text-gold">{t('gallery')}</span>
      </h2>

      <br />

      <ImageList
        sx={{
          width: '95%',
          maxWidth: 1100,
          height: 'auto',
          margin: 'auto',
        }}
        variant="quilted"
        cols={isSmallScreen ? 2 : 4}
        rowHeight={250}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              position: 'relative',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImg(item.img)}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'block',
              }}
              className="hover-img"
            />
            <div
              className="magnify-icon"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                opacity: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'opacity 0.3s ease',
                borderRadius: 8,
              }}
            >
              <FaSearchPlus style={{ color: 'white', fontSize: 32 }} />
            </div>
          </ImageListItem>
        ))}
      </ImageList>

      <br />
      <br />

      {/* CSS in JS: Hover effect */}
      <style>
        {`
          .hover-img:hover {
            transform: scale(1.05);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
          }
          .magnify-icon:hover {
            opacity: 1 !important;
          }
          li:hover .magnify-icon {
            opacity: 1 !important;
          }
        `}
      </style>

      <div className="flex justify-center mb-5">
        <button
          onClick={handleClick}
          className="bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
         {t('viewMore')}
        </button>
      </div>

      {/* Full size modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
            aria-label="Close image"
          >
            <FaTimes />
          </button>
          <img
            src={selectedImg}
            alt="Selected"
            className="max-h-full max-w-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

// ✅ Image data
const itemData = [
  {
    img: p1,
    title: 'Main Photo',
    rows: 2,
    cols: 2,
  },
  {
    img: p2,
    title: 'Photo 2',
  },
  {
    img: p3,
    title: 'Photo 3',
  },
  {
    img: p4,
    title: 'Photo 4',
  },
  {
    img: p5,
    title: 'Photo 5',
  },
];
