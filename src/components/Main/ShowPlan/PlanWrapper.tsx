import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { recExProps } from "../../../typings";
import { getRecentPlan } from "../../../apis/Plan.apis";
import BlockedPlan from "./Blocked/Plan";
import NonBlockedPlan from "./NonBlocked/Plan";

interface planWrapperProps {
  isLogin: boolean;
}
const PlanWrapper = ({ isLogin }: planWrapperProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const [plan, setPlan] = useState<recExProps | null>(null);

  const fetchData = async () => {
    const { data, status } = await getRecentPlan();
    console.log(data, status);
    setPlan(data);
  };
  useEffect(() => {
         if (isLogin) {
           fetchData();
         }
  }, []);
  return (
    <Stack direction="column" spacing="3rem">
      <Box>
        {isLogin ? (
          <>
            <Typography variant="h3" display="inline" color="secondary.dark">
              오늘 운동 플랜
            </Typography>
          </>
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

      {isLogin && plan !== null ? (
        <NonBlockedPlan data={plan as recExProps} />
      ) : (
        <BlockedPlan />
      )}
    </Stack>
  );
};

export default PlanWrapper;
