import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface planWrapperProps {
  isLogin: boolean;
}
const PlanWrapper = ({ isLogin }: planWrapperProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Stack direction="column" spacing="3rem">
      <Box>
        {isLogin ? (
          <>로그인함</>
        ) : (
          <Typography
            variant="h3"
            display="inline"
            color="secondary.dark"
            onClick={handleClick}
          >
            → 플랜 추천 받으러 가기
          </Typography>
        )}
      </Box>

      {isLogin ? (
        <>로그인함</>
      ) : (
        <Stack direction="column" spacing="2rem">
          <img src="/assets/noUser/plan1.png" alt="blockedPlan1" />
          <img src="/assets/noUser/plan2.png" alt="blockedPlan2" />
          <img src="/assets/noUser/plan3.png" alt="blockedPlan3" />
        </Stack>
      )}
    </Stack>
  );
};

export default PlanWrapper;
