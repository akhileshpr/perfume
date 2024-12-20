import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import '../style.css';

const Home = () => {
  return (
    <Box sx={{ marginLeft: "2.5rem" }}>
      {/* Responsive Typography */}
      <Typography
        className="home"
        variant="h3"
        sx={{
          marginTop: "8%",
          fontSize: {
            xs: "1.8rem", // Small screens
            sm: "2.5rem", // Medium screens
            md: "3rem", // Large screens
            lg: "3.5rem", // Extra-large screens
          },
        }}
      >
        Dar alsmow discover
        <br />
        who you are
      </Typography>

      <Typography
        variant="h6"
        sx={{
          marginTop: "10px",
          fontSize: {
            xs: "0.8rem", // Small screens
            sm: "1rem", // Medium screens
            md: "1.25rem", // Large screens
          },
        }}
      >
        Shop now and embrace the sweet smell of victory
        <br />
        with Local Face.
      </Typography>

      {/* Responsive Button */}
      <Button
        variant="contained"
   
        sx={{
          backgroundColor:'#8cb716',
          borderRadius:'0px',
          marginTop: "75px",
          marginBottom: "20px",
          padding: {
            xs: "0.5rem 0.5rem", 
            sm: "0.75rem 1.25rem", 
            md: "0.5rem 1rem",
          },
   
          width: {
            xs: "auto", 
            sm: "auto",
          },
        }}
        endIcon={
          <i
            style={{
              fontSize: {
                xs: "8px", 
                sm: "10px", 
              },
            }}
            className="fa-solid fa-arrow-right"
          ></i>
        }
      >
        Shop now
      </Button>
    </Box>
  );
};

export default Home;
