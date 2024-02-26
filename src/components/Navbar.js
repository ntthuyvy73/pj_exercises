import React from "react";

import Logo from "../assets/images/Logo.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt:{
          sm: '32px',
          xs:'20px'
        }
      }}
    >
      <Link>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ borderBottom: "3px solid #FF2625" }}>
          Home
        </Link>
        <a href="#exercise">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
