import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { recExProps } from "../../../typings";

interface ExerciseCardProps {
  exercise: recExProps[];
}

const ExerciseCard = (exercise: ExerciseCardProps) => {
  // console.log("exercise", exercise.exercise);
  const exerciseList =
    exercise.exercise.length > 3
      ? exercise.exercise.slice(0, 3)
      : exercise.exercise;

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {exerciseList.map((item) => (
          <Box
            sx={{
              backgroundImage: "url(/assets/main/exerciseGround.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2.0rem 2.5rem",
              width: "40rem",
              boxShadow: "0px 3px 30px 10px rgba(164, 160, 160, 0.25)",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom="0.8rem"
            >
              <Typography display="inline" variant="h4">
                준비운동
              </Typography>
              <Typography display="inline" variant="h4">
                {item.step_1.exercise_list}
              </Typography>
              <Typography display="inline" variant="h4">
                {item.step_1.time}min
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              borderTop="1px solid #C4C4C4"
              borderBottom="1px solid #C4C4C4"
              padding="0.8rem 0rem"
            >
              <Typography display="inline" variant="h4">
                본운동
              </Typography>
              <Typography display="inline" variant="h4">
                {item.step_2.exercise_list}
              </Typography>
              <Typography display="inline" variant="h4">
                {item.step_2.time}min
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              paddingTop="0.8rem"
            >
              <Typography display="inline" variant="h4">
                마무리운동
              </Typography>
              <Typography display="inline" variant="h4">
                {item.step_3.exercise_list}
              </Typography>
              <Typography display="inline" variant="h4">
                {item.step_3.time}min
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ExerciseCard;
