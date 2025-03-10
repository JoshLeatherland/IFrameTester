import { ThemeProvider } from "@mui/material/styles";
import {
  theme,
  Navbar,
  SettingsDialog,
  IFrame,
  EmptyState,
  ConfirmationDialog,
  FullWidthCanvas,
  SideBarCanvas,
} from "../../components";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useUrlDataImport } from "../../hooks";

function IFrameApp() {
  const defaultSettings = {
    url: "",
    height: "100%",
    width: "100%",
    border: "1px solid black",
    canvas: "Blank",
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

  const { importDialogOpen, handleImportDialogClose } =
    useUrlDataImport(setSettings);

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
          open={settingsOpen && !importDialogOpen}
          onClose={() => setSettingsOpen(false)}
          settings={settings}
          setSettings={setSettings}
        />

        <ConfirmationDialog
          open={importDialogOpen}
          title="Import Configuration from URL"
          description="We found configuration in the URL. Would you like to import it and overwrite your current setup?"
          onCancel={() => handleImportDialogClose(false)}
          onConfirm={() => handleImportDialogClose(true)}
        />

        {settings.url && settings.canvas === "Blank" && (
          <IFrame
            url={settings.url}
            iFrameProps={{
              height: settings.height,
              width: settings.width,
              style: { border: settings.border },
            }}
          />
        )}

        {settings.url && settings.canvas === "Full Width" && (
          <FullWidthCanvas
            url={settings.url}
            iFrameProps={{
              height: settings.height,
              width: settings.width,
              style: { border: settings.border },
            }}
          />
        )}

        {settings.url && settings.canvas === "Sidebar" && (
          <SideBarCanvas
            url={settings.url}
            iFrameProps={{
              height: settings.height,
              width: settings.width,
              style: { border: settings.border },
            }}
          />
        )}

        {!settings.url && <EmptyState />}
      </Box>
    </ThemeProvider>
  );
}

export default IFrameApp;
