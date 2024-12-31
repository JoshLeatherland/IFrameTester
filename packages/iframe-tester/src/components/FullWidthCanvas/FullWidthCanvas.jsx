import React from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { IFrame } from "../../components";
import PlaceholderImg from "../../assets/400x300.png";

function FullWidthCanvas({ url, iFrameProps }) {
  return (
    <Container maxWidth="lg" style={{ marginTop: "40px" }}>
      <Paper elevation={0} style={{ padding: "10px", marginBottom: "10px" }}>
        <Typography variant="h6" gutterBottom>
          Introduction
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          condimentum eros a nunc tincidunt, vitae consectetur purus aliquam.
          Suspendisse potenti. Nulla facilisi. Nam id lectus malesuada, dapibus
          ligula in, iaculis ante. Phasellus feugiat urna eu arcu consectetur,
          sit amet sodales nisi fringilla. Curabitur ut arcu id dui posuere
          mollis.
        </Typography>
        <Typography paragraph>
          Ut aliquam dui nec gravida feugiat. Nulla facilisi. Donec condimentum
          ipsum eu odio maximus, non pharetra lorem malesuada. Nulla at sem
          vitae odio bibendum congue a a purus. In hac habitasse platea
          dictumst.
        </Typography>
      </Paper>

      <Paper elevation={0} style={{ padding: "10px", marginBottom: "10px" }}>
        <Typography variant="h5" gutterBottom>
          Another Random Title
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                height: "300px",
                backgroundColor: "#ddd",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={PlaceholderImg}
                alt="Placeholder"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </Typography>
            <Typography paragraph>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur? At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={0} style={{ padding: "10px", marginBottom: "10px" }}>
        <Box
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "20px",
          }}
        >
          <IFrame url={url} iFrameProps={iFrameProps} />
        </Box>
      </Paper>

      <Paper elevation={0} style={{ padding: "10px", marginBottom: "10px" }}>
        <Typography variant="h5" gutterBottom>
          Another Random Title
        </Typography>
        <Typography paragraph>
          Nulla facilisi. Integer feugiat, metus non egestas iaculis, mi felis
          egestas dui, eget tempor urna ante vel lorem. In ultricies justo vitae
          nibh congue, a pellentesque odio sollicitudin. Sed interdum neque ac
          sem fringilla, a ullamcorper dolor convallis. Donec volutpat, mi nec
          mollis auctor, risus justo porttitor risus, a elementum felis augue in
          purus.
        </Typography>
        <Typography paragraph>
          Vestibulum ullamcorper, sapien at fermentum mollis, nunc turpis
          fermentum purus, ut sollicitudin odio lorem a mi. Aliquam vel posuere
          felis. Duis in felis et dolor malesuada volutpat non at mauris.
        </Typography>
      </Paper>
    </Container>
  );
}

FullWidthCanvas.propTypes = {
  url: PropTypes.string.isRequired,
  iFrameProps: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    border: PropTypes.string,
  }),
};

export default FullWidthCanvas;
