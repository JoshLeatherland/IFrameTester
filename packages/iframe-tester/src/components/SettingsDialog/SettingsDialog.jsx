import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { TabContainer } from "../../components";
import FrameSettings from "./FrameSettings";
import Export from "./Export";
import Canvas from "./Canvas";
import { useTranslation } from "react-i18next";

function SettingsDialog({ open, onClose, settings, setSettings }) {
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSettingsSave = () => {
    const url = localSettings.url;

    if (url) {
      const formattedUrl =
        url.startsWith("http://") || url.startsWith("https://")
          ? url
          : `https://${url}`;

      localSettings.url = formattedUrl;
    }

    setSettings(localSettings);
    onClose();
  };

  const { t, ready } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {t("pages.settings.title")}
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: "absolute", right: 8, top: 8 }}
        >
          <CancelIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TabContainer
          orientation="horizontal"
          tabs={[
            {
              content: (
                <FrameSettings
                  settings={localSettings}
                  setSettings={setLocalSettings}
                  onEnterKeyDown={handleSettingsSave}
                />
              ),
              label: t("pages.settings.tabs.iframeSettings.tabName"),
            },
            {
              content: (
                <Canvas
                  settings={localSettings}
                  setSettings={setLocalSettings}
                />
              ),
              label: t("pages.settings.tabs.canvas.tabName"),
            },
            ...(settings.url
              ? [
                  {
                    content: <Export settings={settings} />,
                    label: t("pages.settings.tabs.export.tabName"),
                  },
                ]
              : []),
          ]}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          {t("shared.close")}
        </Button>
        <Button onClick={handleSettingsSave} color="primary">
          {t("shared.save")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SettingsDialog;

SettingsDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  settings: PropTypes.shape({
    url: PropTypes.string,
  }),
  setSettings: PropTypes.func,
};
