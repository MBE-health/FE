import { Box, Typography } from "@mui/material";

import GraphItem from "./graphItem";

const GraphContainer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginTop="1.5rem"
      justifyContent="space-around"
      marginBottom="9.2rem"
    >
      <Typography variant="h4">루틴 달성 여부</Typography>
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "round",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "4.5rem 5rem",
        }}
        width="100%"
        borderRadius="1rem"
      >
        <GraphItem />
      </Box>
    </Box>
  );
};

export default GraphContainer;
