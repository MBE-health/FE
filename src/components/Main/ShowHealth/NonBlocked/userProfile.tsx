import { useState, useEffect } from "react";
import { Box, Stack, Divider, Typography } from "@mui/material";
import { getUser } from "../../../../apis/Auth.apis";
import { userInfoProps } from "../../../../typings";

interface UserProfileProps {
  height: number;
  weight: number;
}

const UserProfile = ({ height, weight }: UserProfileProps) => {
  const [userInfo, setUserInfo] = useState<userInfoProps | null>(null);

  const fetchData = async () => {
    const { data, status } = await getUser();
    const userData = data;
    console.log(userData);
    setUserInfo(userData as userInfoProps);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      style={{
        backgroundImage: "url(/assets/main/cardGround.png)",
        backgroundRepeat: "round",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "row",
        margin: "5rem 0rem",
        justifyContent: "space-around",
        padding: "5rem",
        height: "fit-content",
      }}
      borderRadius="1rem"
    >
      <Stack direction="column" spacing="2rem">
        <img src="/assets/main/user.png" alt="logo" />
        {userInfo !== null && (
          <center>
            <Box padding="0.5rem">
              <Typography
                variant="h4"
                display="inline"
                fontWeight="400"
                marginRight="5rem"
              >
                나이
              </Typography>
              <Typography variant="h4" display="inline">
                {userInfo.age}
              </Typography>
            </Box>
            <Box padding="0.5rem">
              <Typography
                variant="h4"
                display="inline"
                fontWeight="400"
                marginRight="5rem"
              >
                키
              </Typography>
              <Typography variant="h4" display="inline">
                {height}
              </Typography>
            </Box>

            <Box padding="0.5rem">
              <Typography
                variant="h4"
                display="inline"
                fontWeight="400"
                marginRight="5rem"
              >
                몸무게
              </Typography>
              <Typography variant="h4" display="inline">
                {weight}
              </Typography>
            </Box>
          </center>
        )}
      </Stack>
    </Box>
  );
};

export default UserProfile;
