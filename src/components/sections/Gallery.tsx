import * as React from 'react';
import {
  ImageList,
  ImageListItem,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// ✅ Import images
import p1 from '../../assets/team/p1.avif';
import p2 from '../../assets/team/p2.jpg';
import p3 from '../../assets/team/p3.jpg';
import p4 from '../../assets/team/p4.jpg';
import p5 from '../../assets/team/p5.jpg';

export default function ProfileImageGrid() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // <600px

  return (
    <>
      <br />
      <br />

      <Typography
  variant="h4"
  sx={{
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif', // Matches the serif style in the image
    color: '#c49b1a',             // Golden tone like the image
    textAlign: 'center',
    marginBottom: 2,
    letterSpacing: '0.5px',       // Optional: slight spacing
  }}
>
  Gallery
</Typography>

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
