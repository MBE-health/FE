import * as React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["plan", "analyze", "my page"];
const settings = ["Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "url(/assets/header/header.png)",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth={false} sx={{ padding: "1.7rem 0" }}>
        <Toolbar disableGutters>
          {/* 반응형 */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img src="/assets/header/logo.png" alt="logo" />
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
                  <Link to={`/${page}`}>
                    <Typography variant="h4" color="primary">
                      {page.toUpperCase()}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* PC형 */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              maxWidth: "80rem",
              justifyContent: "space-between",
              padding: "0 10rem",
            }}
          >
            <img src="/assets/header/logo.png" alt="logo" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  disableRipple
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    paddingRight: "4rem",
                  }}
                >
                  <Link to={`/${page}`}>
                    <Typography variant="h4" color="primary">
                      {page.toUpperCase()}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Box>
          </Box>

          {/*<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
              </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
