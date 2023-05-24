import { Box } from "@mui/material";

const ImageWrapper = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-end"
      paddingTop="10rem"
      justifyContent="center"
      width="100%"
    >
      <img src="/assets/mainPic.png" alt="logo" width="90%" />;
    </Box>
  );
};

export default ImageWrapper;
