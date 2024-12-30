import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { Settings } from "@mui/icons-material";

function Navbar({ onSettingsClick }) {
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="primary" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          iFrame Tester
        </Typography>
        <IconButton color="inherit" onClick={onSettingsClick}>
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

Navbar.propTypes = {
  onSettingsClick: PropTypes.func,
};
