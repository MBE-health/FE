import { Box, Typography } from "@mui/material";

import GraphItem from "./graphItem";

interface GraphContainerProps {
  width: string;
  height: string;
}

const GraphContainer = ({ width, height }: GraphContainerProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginTop="1.5rem"
      justifyContent="space-around"
      width="100%"
      /*marginBottom="9.2rem"*/
    >
      <Typography variant="h4" marginLeft="1.5rem">
        루틴 달성 여부
      </Typography>
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "4.5rem 5rem",
          width: "100%",
        }}
        borderRadius="1rem"
      >
        <GraphItem width={width} height={height} />
      </Box>
    </Box>
  );
};

export default GraphContainer;
