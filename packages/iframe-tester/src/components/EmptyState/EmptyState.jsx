import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function EmptyState() {
  const { t, ready } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        marginTop: 4,
        color: "text.secondary",
        lineHeight: 1.6,
      }}
    >
      <Typography mt={1} variant="h6">
        {t("shared.pages.blankCanvas.welcome")}
      </Typography>
      <Typography mt={1}>{t("shared.pages.blankCanvas.noFrame")}</Typography>
      <Typography mt={1}>{t("shared.pages.blankCanvas.getStarted")}</Typography>
    </Box>
  );
}

export default EmptyState;
