import { Grid, TextField, Container } from "@mui/material";
import PropTypes from "prop-types";

function FrameSettings({ settings, setSettings, onEnterKeyDown }) {
  const handleFieldUpdate = (field, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  return (
    <Container disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="URL"
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
            label="Width (px or %)"
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
            label="Height (px or %)"
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
            label="Border Style"
            variant="filled"
            fullWidth
            value={settings.border}
            onChange={(e) => handleFieldUpdate("border", e.target.value)}
            helperText="E.g., '1px solid black'"
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
