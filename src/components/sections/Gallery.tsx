import * as React from 'react';
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// ✅ Import images
import p1 from '../../assets/team/gallery20.jpg';
import p2 from '../../assets/team/gallery21.jpg';
import p3 from '../../assets/team/gallery23.jpg';
import p4 from '../../assets/team/gallery24.jpg';
import p5 from '../../assets/team/gallery25.jpg';

export default function ProfileImageGrid() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // <600px

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Deshmukh&Associates/GalleryPage');
    window.scrollTo(0,0);
  };

  return (
    <>
      <br />
      <br />

      <h2 className="text-4xl text-center font-bold text-white mb-4">
            <span className="text-gold">
              Gallery
            </span>
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
            }}
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
              }}
              className="hover-img"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <br />
      <br />

      {/* CSS in JS: Hover effect using global style */}
      <style>
        {`
          .hover-img:hover {
            transform: scale(1.05);
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <div className='flex justify-center mb-5'>
        <button onClick={handleClick} className="bg-gold  hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
          View More
        </button>
      </div>
   </>
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
