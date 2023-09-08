"use client";

import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Property } from "csstype";

import "./navpages.css";

const pages = ["Home", "Blog"];

type PropType = { width: Property.Width };

export default function VerticalSidebar(props: PropType) {
  const { width } = props;

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  return (
    <>
      {/* wide screen display*/}
      <Box
        flexGrow={1}
        flexDirection="column"
        sx={{ display: { xs: "none", md: "flex" } }}
        maxWidth={width}
      >
        {pages.map((page, index) => (
          <Button className={"nav"} key={index} onClick={handleCloseNavMenu}>
            <Typography
              color="white"
              fontSize="21px"
              fontWeight="lighter"
              textAlign="center"
              sx={{
                writingMode: "vertical-rl",
                textOrientation: "mode",
              }}
            >
              {page}
            </Typography>
          </Button>
        ))}
      </Box>

      {/* mobile narrow screen display */}
      <Box flexGrow={1} sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}
