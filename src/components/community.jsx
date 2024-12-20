import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import cimage1 from "../assets/mia.jpg";
import cimage2 from "../assets/abdulla.jpg";
import cimage3 from "../assets/sunny.jpg";
import cimage4 from "../assets/sins.jpg";

const Community = () => {
  const images = [cimage1, cimage2, cimage3,cimage4]; // Array of image sources

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" p={4}>
          Join Our Community
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Image ${index + 1}`}
              sx={{
                width: "100%",
                height: "350px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Community;
