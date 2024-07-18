import { Logout } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Switch,
  Box,
  Button,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/AuthContext";
import { useThemeContext } from "../context/ThemeContext";
import { getPokemonsByType } from "../services/pokemon.service";

export const Navbar = () => {
  const ctx = useContext(Context);
  const { toggleTheme, theme } = useThemeContext();
  const [typeValue, setTypeValue] = React.useState(1);
  const { setAccessToken, setRefreshToken } = useContext(Context);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setAccessToken(null);
    setRefreshToken(null);
    handleClose();
    navigate("/login");
  };

  const handleMenuItemClick = async (value: number) => {
    setTypeValue(value);
    const pokemons = await getPokemonsByType(value);
    ctx.setPokemons(pokemons);
    handleClose();
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  useEffect(() => {
    const pokemons = getPokemonsByType(typeValue);
    ctx.setPokemons(pokemons);
  }, [typeValue]);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        position="static"
      >
        <Toolbar
          sx={{
            backgroundColor: theme.palette.background.default,
            display: "flex",
            justifyContent: "space-between", // Align items at the start and end
            alignItems: "center", // Center items vertically
            height: "85px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="medium" />
              </ListItemIcon>
              Logout
            </Button>
          </Box>
        </Toolbar>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Account">
            <IconButton
              onClick={handleClick}
              size="medium"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              P
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleMenuItemClick(1)}>1</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(2)}>2</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(3)}>3</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(4)}>4</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(5)}>5</MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
};
