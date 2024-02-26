import { Box, Button, Typography } from "@mui/material";
import React from "react";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p={2}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" variant="h1">
        Fitness Club
      </Typography>

      <Typography variant="h2" fontWeight="700" mt={2} mb={2}>
        Swear, Smile <br /> and Repeat
      </Typography>

      <Typography variant="h6" mb={2}>
        Check out theo most effective exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625" }}
        p={2}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight="600"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>

      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
       
      />
    </Box>
  );
};

export default HeroBanner;
