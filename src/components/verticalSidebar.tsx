"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import "@/components/verticalSidebar.css";

const pages = ["Home", "Blog"];

export default function VerticalSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* wide screen display*/}
      <Box
        sx={{
          height: "100vh",
          width: 64,
          position: "fixed",
          right: 0,
          display: { xs: "none", md: "flex" },
        }}
      >
        <AppBar
          position="static"
          sx={{ height: "100%", flexDirection: "column" }}
          enableColorOnDark
        >
          <Toolbar sx={{ flexDirection: "column" }} disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "column",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="avatar icon">
                <Avatar alt="Chen" src="/icon.png" />
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* mobile narrow screen display */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <AppBar position="static" enableColorOnDark>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="avatar icon">
                <Avatar alt="Chen" src="/icon.png" />
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
