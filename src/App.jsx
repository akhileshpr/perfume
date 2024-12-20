import React from 'react';
import Navbar from './components/nav-bar';
import Home from './components/home';
import { Box, Container } from '@mui/material';
import image from './assets/perfume2.png'; 
import ProductCarousel from './components/best-seller';
import Footer from './components/footer';
import Middle from './components/middle';
import Community from './components/community';

const App = () => {
  return (
    <>
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '110vh', 
      }}
    >
      <Container>
        <Navbar />
        <Home />
      </Container>
    </Box>
    <Container>

   <ProductCarousel/>
   <Middle/>
   <Community/>
   <Footer/>
    </Container>
    </>

  );
};

export default App;
