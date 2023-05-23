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
        minHeight: "30rem",
      }}
      borderRadius="1rem"
    >
      <Stack direction="column" spacing="2rem">
        <img src="/assets/main/user.png" alt="logo" />
        {userInfo !== null && (
          <>
            <div>{userInfo.age}</div>
            <div>{height}</div>
            <div>{weight}</div>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default UserProfile;
