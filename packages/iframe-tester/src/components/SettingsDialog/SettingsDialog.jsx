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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Settings
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
              label: "iFrame Settings",
            },
            {
              content: (
                <Canvas
                  settings={localSettings}
                  setSettings={setLocalSettings}
                />
              ),
              label: "Canvas",
            },
            ...(settings.url
              ? [
                  {
                    content: <Export settings={settings} />,
                    label: "Export",
                  },
                ]
              : []),
          ]}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
        <Button onClick={handleSettingsSave} color="primary">
          Save
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
