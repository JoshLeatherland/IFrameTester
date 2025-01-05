import { Grid, TextField, Container } from "@mui/material";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function FrameSettings({ settings, setSettings, onEnterKeyDown }) {
  const handleFieldUpdate = (field, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  const { t, ready } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  return (
    <Container disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label={t("pages.settings.tabs.iframeSettings.url")}
            variant="filled"
            fullWidth
            value={settings.url}
            onChange={(e) => handleFieldUpdate("url", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onEnterKeyDown();
              }
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={t("pages.settings.tabs.iframeSettings.width")}
            variant="filled"
            fullWidth
            value={settings.width}
            onChange={(e) => handleFieldUpdate("width", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onEnterKeyDown();
              }
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={t("pages.settings.tabs.iframeSettings.height")}
            variant="filled"
            fullWidth
            value={settings.height}
            onChange={(e) => handleFieldUpdate("height", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onEnterKeyDown();
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t("pages.settings.tabs.iframeSettings.border")}
            variant="filled"
            fullWidth
            value={settings.border}
            onChange={(e) => handleFieldUpdate("border", e.target.value)}
            helperText={t("pages.settings.tabs.iframeSettings.borderEg")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onEnterKeyDown();
              }
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FrameSettings;

FrameSettings.propTypes = {
  settings: PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string,
  }),
  setSettings: PropTypes.func,
  onEnterKeyDown: PropTypes.func,
};
