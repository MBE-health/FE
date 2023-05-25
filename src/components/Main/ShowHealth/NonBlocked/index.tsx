import { useState, useEffect } from "react";
import { GraphRoutine } from "../../../../components";
import { getHealth } from "../../../../apis/Health.apis";
import { healthConditionProps } from "../../../../typings";
import { Box, Container } from "@mui/material";
import UserProfile from "./userProfile";

const NonBlock = () => {
  const [health, setHealthInfo] = useState<healthConditionProps | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const fetchData = async () => {
    const { data, status } = await getHealth();
    setHealthInfo(data as healthConditionProps);
    setWeight(data[data.length - 1]["체중"]);
    setHeight(data[data.length - 1]["신장"]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "round",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "row",
          margin: "5rem 0rem",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5rem",
          minHeight: "30rem",
        }}
        borderRadius="1rem"
      >
        {health !== null && (
          <UserProfile height={height as number} weight={weight as number} />
        )}

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <GraphRoutine width="60rem" height="15rem" />

          <Box>
            <GraphRoutine width="60rem" height="15rem" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NonBlock;
