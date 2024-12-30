import { Grid, TextField, Container } from "@mui/material";

function FrameSettings({ settings, setSettings }) {
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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Width (px or %)"
            variant="filled"
            fullWidth
            value={settings.width}
            onChange={(e) => handleFieldUpdate("width", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Height (px or %)"
            variant="filled"
            fullWidth
            value={settings.height}
            onChange={(e) => handleFieldUpdate("height", e.target.value)}
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
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FrameSettings;
