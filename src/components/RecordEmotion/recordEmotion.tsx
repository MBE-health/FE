import { Button, Box, Typography, TextField, IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import { postComment } from "../../apis/Done.apis";
import { useState } from "react";

const RecordEmotion = () => {
  const [state, setState] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setState(event.target.value);
  }
  async function HandleCompleteBtn() {
    console.log("wpcnf");
    const response = await postComment(state);
    console.log(response);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginTop="1.5rem"
      justifyContent="space-around"
      height="25rem"
    >
      <Typography variant="h4">오늘의 상태</Typography>
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "round",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "4.5rem 5rem",
        }}
        width="90rem"
        borderRadius="1rem"
      >
        <Box
          width="15%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <InsertEmoticonIcon />
          <SentimentNeutralIcon />
          <SentimentVeryDissatisfiedIcon />
        </Box>

        <Box width="60%">
          <TextField
            id="outlined-controlled"
            label="state"
            value={state}
            onChange={handleInputChange}
            variant="standard"
            fullWidth
          />
        </Box>
      </Box>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={HandleCompleteBtn}
      >
        완료
      </Button>
    </Box>
  );
};

export default RecordEmotion;
