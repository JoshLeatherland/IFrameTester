import {
  Container,
  Grid,
  Card,
  CardActionArea,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

function Canvas({ settings, setSettings }) {
  const handleSelect = (value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      canvas: value,
    }));
  };

  const theme = useTheme();

  const cardStyles = (isSelected) => ({
    border: isSelected ? "2px solid #141F2F" : "1px solid #ddd",
    height: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
    padding: "1em",
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h6" mb={2} gutterBottom align="center">
        Select Your Canvas Layout
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <CardActionArea onClick={() => handleSelect("Blank")}>
            <Box sx={cardStyles(settings.canvas === "Blank")}>
              <Typography variant="h6" gutterBottom>
                Blank
              </Typography>
              <Typography variant="body2" color="textSecondary">
                The iFrame will be rendered on a completley blank page.
              </Typography>
            </Box>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardActionArea onClick={() => handleSelect("Full Width")}>
            <Box sx={cardStyles(settings.canvas === "Full Width")}>
              <Typography variant="h6" gutterBottom>
                Full Width
              </Typography>
              <Typography variant="body2" color="textSecondary">
                The iFrame will be placed in the middle of a pre-built demo
                page, which can take up the full width of the page.
              </Typography>
            </Box>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardActionArea onClick={() => handleSelect("Sidebar")}>
            <Box sx={cardStyles(settings.canvas === "Sidebar")}>
              <Typography variant="h6" gutterBottom>
                Sidebar
              </Typography>
              <Typography variant="body2" color="textSecondary">
                The iFrame will be placed in the middle of a pre-built demo
                page, which can take up the full sidebar of the page.
              </Typography>
            </Box>
          </CardActionArea>
        </Grid>
      </Grid>
      {settings.canvas && (
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          style={{ marginTop: "20px" }}
        >
          Current Selection: <strong>{settings.canvas}</strong>
        </Typography>
      )}
    </Container>
  );
}

export default Canvas;

Canvas.propTypes = {
  settings: PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string,
  }),
  setSettings: PropTypes.func,
};
