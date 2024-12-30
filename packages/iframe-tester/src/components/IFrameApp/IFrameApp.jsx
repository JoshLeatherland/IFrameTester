import { ThemeProvider } from "@mui/material/styles";
import {
  theme,
  Navbar,
  SettingsDialog,
  IFrame,
  EmptyState,
} from "../../components";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

function IFrameApp() {
  const defaultSettings = {
    url: "",
    height: "100%",
    width: "100%",
    border: "1px solid black",
  };

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("iFrameSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("iFrameSettings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (!settings.url) setSettingsOpen(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Navbar onSettingsClick={() => setSettingsOpen(true)} />

        <SettingsDialog
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
          settings={settings}
          setSettings={setSettings}
        />

        <IFrame url={settings.url} iFrameProps={settings} />

        {!settings.url && <EmptyState />}
      </Box>
    </ThemeProvider>
  );
}

export default IFrameApp;
