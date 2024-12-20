import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Product images
import perfume1 from '../assets/perfume3.png';
import perfume2 from '../assets/perfume4.png';
import perfume3 from '../assets/perfume5.png';

const ProductCarousel = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Product data array
  const products = [
    { id: 1, name: 'AMITY', price: '$220.00', volume: '100ml', image: perfume3 },
    { id: 2, name: 'The Golden Legacy', price: '$160.00', volume: '100ml', image: perfume1 },
    { id: 3, name: 'Luxurious Elixir', price: '$250.00', volume: '100ml', image: perfume2 },

  ];

  return (
    <Box sx={{ maxWidth: '90%', margin: 'auto', padding: '10px'}}>
      <Typography p={4} variant="h3" align="center" gutterBottom color="#D4AF37">
        Dar Alsmow Bestseller
      </Typography>
      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} sx={{ padding:"0px",margin:'0px'}}> 
<Card
  sx={{
    maxWidth: 250,
    margin: 'auto',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #000000,rgb(35, 33, 33))',

  }}
>            <CardContent>
              <CardMedia
                component="img"
                alt={product.name}
                height="340"
                image={product.image}
              />
        
                <Typography variant="h6" fontWeight="bold">
                  {product.name}hh
                </Typography>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:'center'}}>

                <Typography mr={2} variant="body1" color="gold" fontWeight="bold">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="gray">
                  {product.volume}
                </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
