import { Box, Typography } from "@mui/material";

function EmptyState() {
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
        Welcome to the iFrame Testing App!
      </Typography>
      <Typography mt={1}>
        It looks like you haven't set up a URL for testing your iFrame yet.
      </Typography>
      <Typography mt={1}>
        To get started, click the Settings icon in the top-right corner and
        configure your URL.
      </Typography>
    </Box>
  );
}

export default EmptyState;
