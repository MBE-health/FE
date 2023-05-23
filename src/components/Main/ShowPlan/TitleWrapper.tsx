import { Box, Typography } from "@mui/material";

const TitleWrapper = () => {
  return (
    <Box>
      {" "}
      <Typography variant="h1">나의 신체 컨디션에 맞는</Typography>
      <Typography variant="h1" color="secondary.dark">
        전문가 처방 기반 AI 운동 플랜
      </Typography>
    </Box>
  );
};

export default TitleWrapper;
