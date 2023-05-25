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
    if (isLogin) {
      fetchData();
    }
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
        {" "}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          {isLogin && exerciseList != null ? (
            <ExerciseCard exercise={exerciseList} />
          ) : (
            <Container maxWidth="xl">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="/assets/noUser/blockRoutine.png"
                  alt="blockedPlan1"
                  style={{
                    opacity: 0.5,
                  }}
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
              </Box>
            </Container>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ShowExercise;
