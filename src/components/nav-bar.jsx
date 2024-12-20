import React from "react";
import { Box, Container, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "../assets/plant.png";

const Navbar = () => {
  const navLinks = ["Home", "Shop", "Return & Refund Policy", "Contact Us"];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        py: 3,
        px: 2,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          width: "auto",
        }}
      />

      {/* Links or Menu Button */}
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <List sx={{ width: 250 }}>
              {navLinks.map((link, index) => (
                <ListItem button key={index} onClick={() => setIsDrawerOpen(false)}>
                  <ListItemText primary={link} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6.5,
            marginLeft:'10rem'
          }}
        >
          {navLinks.map((link, index) => (
            <Typography
              key={index}
              variant="body2"
              className="navlinks"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "secondary.main" },
                textTransform: "capitalize",
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      )}

      {/* Icons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        <i className="fa-regular fa-user fa-xl"></i>
        <i className="fa-regular fa-heart fa-xl"></i>
        <i className="fa-solid fa-bag-shopping fa-xl"></i>
      </Box>
    </Box>
  );
};

export default Navbar;
