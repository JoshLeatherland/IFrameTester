import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { LanguageSelector } from "../../components";
import { useTranslation } from "react-i18next";

function Navbar({ onSettingsClick }) {
  const { t, ready } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  return (
    <AppBar position="sticky" color="primary" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t("shared.appTitle")}
        </Typography>

        <LanguageSelector />

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
