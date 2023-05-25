import {
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  yearArray,
  monthArray,
  day31Array,
  day30Array,
  isDay31,
} from "../../constant/date";
import { getCertainPlan } from "../../apis/Plan.apis";
import { useState } from "react";

const ShowRoutine = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [data, setData] = useState<any>(null);

  function handleChange(
    setData: React.Dispatch<React.SetStateAction<string>>,
    event: SelectChangeEvent
  ) {
    setData(event.target.value as string);
  }

  /*function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setState(event.target.value);
  }*/
  async function HandleCompleteBtn() {
    console.log("wpcnf");
    //const response = await postComment(state);
    let formedMonth = month;
    let formedDay = day;
    if (month.length < 2) {
      formedMonth = "0" + month;
    }
    if (day.length < 2) {
      formedDay = "0" + day;
    }
    console.log(month + year + day);
    const { data, status } = await getCertainPlan(
      year + formedMonth + formedDay
    );
    setData(data);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginTop="1.5rem"
      justifyContent="space-around"
    >
      <Typography variant="h4" marginLeft="1.5rem">
        과거의 루틴 조회
      </Typography>
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
          width="20%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormControl fullWidth sx={{ margin: "0.5rem" }}>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Year"
              onChange={(e) => handleChange(setYear, e)}
            >
              {yearArray.map((item) => (
                <MenuItem value={String(item)}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ margin: "0.5rem" }}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={month}
              label="Month"
              onChange={(e) => handleChange(setMonth, e)}
            >
              {monthArray.map((item) => (
                <MenuItem value={String(item)}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ margin: "0.5rem" }}>
            <InputLabel id="demo-simple-select-label">Day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              label="Day"
              onChange={(e) => handleChange(setDay, e)}
            >
              {month !== "" ? (
                isDay31(Number(month)) ? (
                  day31Array.map((item) => (
                    <MenuItem value={String(item)}>{item}</MenuItem>
                  ))
                ) : (
                  day30Array.map((item) => (
                    <MenuItem value={String(item)}>{item}</MenuItem>
                  ))
                )
              ) : (
                <div></div>
              )}
            </Select>
          </FormControl>
        </Box>

        <Box
          width="65%"
          style={{
            backgroundImage: "url(/assets/routine/background.png)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "4.5rem 5rem",
            height: "100%",
          }}
        >
          {data != null && (
            <>
              <center style={{ padding: "1rem 0rem" }}>
                <Typography variant="h5" fontWeight="bold">
                  준비운동
                </Typography>
                <Typography variant="h5">
                  {" "}
                  {data.step_1.exercise_list}
                </Typography>
              </center>
              <center style={{ padding: "1rem 0rem" }}>
                <Typography variant="h5" fontWeight="bold">
                  본운동
                </Typography>
                <Typography variant="h5">
                  {" "}
                  {data.step_2.exercise_list}
                </Typography>
              </center>
              <center style={{ padding: "1rem 0rem" }}>
                <Typography variant="h5" fontWeight="bold">
                  마무리운동
                </Typography>
                <Typography variant="h5">
                  {" "}
                  {data.step_3.exercise_list}
                </Typography>
              </center>
            </>
          )}
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
export default ShowRoutine;
