function getMajibaUri() {
  return process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_MAJIBA_PROD
    : process.env.REACT_APP_MAJIBA_DV;
}

export default getMajibaUri;
