import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import image1 from "../assets/perfumebg.webp";
const Middle = () => {
  return (
    <>
      <Grid container spacing={5} mt={5} p={2}>
        {/* Left Section - Image */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "25rem",
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Grid>

        {/* Right Section - Content */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            padding: 4,
          }}
        >
          <Box>
            <Typography variant="h3" gutterBottom>
              DAR ALSMOW : It's not just a perfume it's a culture
            </Typography>
            <Typography variant="body1" paragraph>
              Embracing sustainability and continuous learning, Local Face
              strives to be more than just a shopping destination; we are a
              community that inspires and empowers individuals on their
              fragrance journey.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "#ccc" },
              }}
            >
              Discover →
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={5} p={3} sx={{background: 'linear-gradient(90deg, #000000,rgb(32, 12, 39))',
}}>
        {/* Left Section - Image */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            padding: 4,
          }}
        >
          <Box>
            <Typography variant="h3" gutterBottom>
              DAR ALSMOW : It's not just a perfume it's a culture
            </Typography>
            <Typography variant="body1" paragraph>
              Embracing sustainability and continuous learning, Local Face
              strives to be more than just a shopping destination; we are a
              community that inspires and empowers individuals on their
              fragrance journey.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "#ccc" },
              }}
            >
              Discover →
            </Button>
          </Box>
        </Grid>

        {/* Right Section - Content */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "25rem",
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Middle;
