import PropTypes from "prop-types";

function IFrame({ url, iFrameProps }) {
  if (!url) return <div></div>;

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <iframe src={url} {...iFrameProps}></iframe>
    </div>
  );
}

export default IFrame;

IFrame.propTypes = {
  url: PropTypes.string,
  iFrameProps: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    border: PropTypes.string,
  }),
};
