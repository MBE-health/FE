import { Box, Container, Divider, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ExerciseCard from "./exerciseCard";
import { getAllPlan } from "../../../apis/Plan.apis";
import { recExProps } from "../../../typings";

interface ShowHealthProps {
  isLogin: boolean;
}

const ShowExercise = ({ isLogin }: ShowHealthProps) => {
  const [exerciseList, setExerciseList] = useState<recExProps[] | null>(null);

  const fetchData = async () => {
    const { data, status } = await getAllPlan();
    console.log(data);
    setExerciseList(data);
    console.log("gmgm", data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container maxWidth="xl">
      <Divider sx={{ margin: "0rem 5rem" }}>
        <Typography variant="h3">Exercise Information</Typography>
      </Divider>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5rem",
        }}
        borderRadius="1rem"
      >
        {isLogin && exerciseList != null ? (
          <ExerciseCard exercise={exerciseList} />
        ) : (
          <Stack direction="row" spacing="2rem">
            <img
              src="/assets/noUser/blockRoutine.png"
              alt="blockedPlan1"
              style={{ opacity: 0.5 }}
            />
            <img
              src="/assets/noUser/blockRoutine.png"
              alt="blockedPlan1"
              style={{ opacity: 0.5 }}
            />
            <img
              src="/assets/noUser/blockRoutine.png"
              alt="blockedPlan1"
              style={{ opacity: 0.5 }}
            />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default ShowExercise;
