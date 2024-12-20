import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #000000, #1c1c1c)",
        color: "white",
        padding: "40px 20px",
        mt: 5,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ color: "#D4AF37", mb: 2 }}>
            Local Face
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Subscribe to Our Newsletter:
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Receive Updates on New Arrivals and Special Promotions!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: "400px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TextField
                placeholder="Your email here"
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: "5px 0px 0px 5px",
                  border: "none",
                  background:
                    "linear-gradient(180deg, #000000,rgb(52, 47, 47))",
                  "& .MuiInputBase-input::placeholder": {
                    color: "grey",
                    opacity: 1,
                  },
                }}
              />
              <Button
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": { backgroundColor: "#b68e2d" },
                  whiteSpace: "nowrap",
                  padding: "6px 20px",
                  borderRadius: "0px 8px 8px 0px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
          <Box mt={3} sx={{ display: "flex", gap: 1 }}>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#4c4cc3",
                "& svg": { fontSize: "15px" }, // Control icon size
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#5764bf",
                "& svg": { fontSize: "15px" }, // Control icon size
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#40498b",
                "& svg": { fontSize: "15px" }, // Control icon size
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                backgroundColor: "#af4558",
                "& svg": { fontSize: "15px" }, // Control icon size
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Shops
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2">Fashion</Typography>
            <Typography variant="body2">Jewelry</Typography>
            <Typography variant="body2">Sports</Typography>
            <Typography variant="body2">Electronics</Typography>
            <Typography variant="body2">Indoor</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Shopping
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            <Typography variant="body2">Payments</Typography>
            <Typography variant="body2">Delivery options</Typography>
            <Typography variant="body2">Buyer protection</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Return & Refund Policy
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2">Help center</Typography>
            <Typography variant="body2">Terms & Conditions</Typography>
            <Typography variant="body2">Privacy policy</Typography>
            <Typography variant="body2">Returns & refund</Typography>
            <Typography variant="body2">Survey & feedback</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Pages
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Shop</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Line */}
      <Box
        sx={{
          mt: 4,
          borderTop: "1px solid #444",
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          Dar Alsmow | © 2024 | جميع الحقوق محفوظة
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
