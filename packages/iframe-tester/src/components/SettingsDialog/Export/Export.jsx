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

  return (
    <Container disableGutters>
      <Typography variant="body1" gutterBottom>
        You can share your configuration using the options below. Either copy
        the URL or scan the QR code to view your setup exactly as you see it.
      </Typography>
      <Alert severity="info" sx={{ marginBottom: 2, marginTop: 2 }}>
        Please note that any changes made by the person opening the link will
        only apply to their own view, and will not affect your view. Likewise,
        any changes you make will not be reflected in the shared link.
      </Alert>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mb={3}
      >
        <Box flex={1}>
          <Typography variant="h6" gutterBottom>
            Option 1: Copy the URL
          </Typography>
          <Box display="flex">
            <TextField
              label="Shareable URL"
              variant="outlined"
              fullWidth
              value={shareUrl}
              InputProps={{
                readOnly: true,
              }}
              margin="normal"
              sx={{ marginRight: 1 }}
            />
            <Tooltip title="Copy URL to clipboard">
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
            Use this link to share your configuration.
          </Typography>
        </Box>

        <Box flex={1} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Option 2: Scan the QR Code
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
            Scan this code with your phone to view the configuration.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Export;
