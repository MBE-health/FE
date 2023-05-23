import { Box } from "@mui/material";
import { ShowPlan } from "../components";

const Home = () => {
  const IsLogin = localStorage.getItem("idToken") ? true : false;
  console.log(IsLogin);
  return (
    <Box
      width="100%"
      height="100%"
      style={{
        backgroundImage: "url(/assets/mainGround.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ShowPlan isLogin={IsLogin} />
    </Box>
  );
};

export default Home;
