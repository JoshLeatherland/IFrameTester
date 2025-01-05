import {
  Container,
  TextField,
  Typography,
  IconButton,
  Box,
  Alert,
  Tooltip,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { encodeData } from "../../../utils/base64";
import { copyToClipboard } from "../../../utils/clipboard";
import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";

function Export({ settings }) {
  const [shareUrl, setShareUrl] = useState("");

  const generateShareUrl = () => {
    const encodedData = encodeData(settings);
    const pathname = window.location.pathname;
    const baseUrl = pathname
      ? `${window.location.origin}${pathname}`
      : window.location.origin;
    const url = `${baseUrl}?configuration=${encodedData}`;
    setShareUrl(url);
  };

  useEffect(() => {
    if (open) {
      generateShareUrl();
    }
  }, [open]);

  const { t, ready } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  return (
    <Container disableGutters>
      <Typography variant="body1" gutterBottom>
        {t("pages.settings.tabs.export.description")}
      </Typography>
      <Alert severity="info" sx={{ marginBottom: 2, marginTop: 2 }}>
        {t("pages.settings.tabs.export.alert")}
      </Alert>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mb={3}
      >
        <Box flex={1}>
          <Typography variant="h6" gutterBottom>
            {t("pages.settings.tabs.export.option1")}
          </Typography>
          <Box display="flex">
            <TextField
              label={t("pages.settings.tabs.export.shareableUrl")}
              variant="outlined"
              fullWidth
              value={shareUrl}
              InputProps={{
                readOnly: true,
              }}
              margin="normal"
              sx={{ marginRight: 1 }}
            />
            <Tooltip title={t("pages.settings.tabs.export.clipboard")}>
              <IconButton
                onClick={() => copyToClipboard(shareUrl)}
                color="primary"
              >
                <ContentCopy />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            {t("pages.settings.tabs.export.urlHelper")}
          </Typography>
        </Box>

        <Box flex={1} textAlign="center">
          <Typography variant="h6" gutterBottom>
            {t("pages.settings.tabs.export.option2")}
          </Typography>
          <QRCodeSVG
            value={shareUrl}
            size={150}
            bgColor="#ffffff"
            fgColor="#000000"
            level="Q"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 2 }}
          >
            {t("pages.settings.tabs.export.qrHelper")}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Export;
