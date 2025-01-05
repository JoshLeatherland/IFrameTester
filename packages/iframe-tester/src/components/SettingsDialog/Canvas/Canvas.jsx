import {
  Container,
  Grid,
  Card,
  CardActionArea,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Canvas({ settings, setSettings }) {
  const handleSelect = (value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      canvas: value,
    }));
  };

  const theme = useTheme();

  const cardStyles = (isSelected) => ({
    border: isSelected ? "2px solid #141F2F" : "1px solid #ddd",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
    padding: "1em",
  });

  const { t, ready } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  return (
    <Container maxWidth="md">
      <Typography variant="h6" mb={2} gutterBottom align="center">
        {t("pages.settings.tabs.canvas.title")}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <CardActionArea onClick={() => handleSelect("Blank")}>
            <Box sx={cardStyles(settings.canvas === "Blank")}>
              <Typography variant="h6" gutterBottom>
                {t("pages.settings.tabs.canvas.blank")}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t("pages.settings.tabs.canvas.blankText")}
              </Typography>
            </Box>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardActionArea onClick={() => handleSelect("Full Width")}>
            <Box sx={cardStyles(settings.canvas === "Full Width")}>
              <Typography variant="h6" gutterBottom>
                {t("pages.settings.tabs.canvas.fullWidth")}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t("pages.settings.tabs.canvas.fullWidthText")}
              </Typography>
            </Box>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardActionArea onClick={() => handleSelect("Sidebar")}>
            <Box sx={cardStyles(settings.canvas === "Sidebar")}>
              <Typography variant="h6" gutterBottom>
                {t("pages.settings.tabs.canvas.sidebar")}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t("pages.settings.tabs.canvas.sidebarText")}
              </Typography>
            </Box>
          </CardActionArea>
        </Grid>
      </Grid>
      {settings.canvas && (
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          style={{ marginTop: "20px" }}
        >
          {t("pages.settings.tabs.canvas.currentSelection")}:{" "}
          <strong>
            {t(`pages.settings.tabs.canvas.modes.${settings.canvas}`)}
          </strong>
        </Typography>
      )}
    </Container>
  );
}

export default Canvas;

Canvas.propTypes = {
  settings: PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string,
  }),
  setSettings: PropTypes.func,
};
