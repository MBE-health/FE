import { Box, Typography, Container } from "@mui/material";
import { recDataProps } from "../../typings";

const RecForm = (props: { routines: recDataProps }) => {
  const {
    routines: { ex, group_num },
  } = props;
  const ex_cnt = Array.from(
    { length: ex.step_1.exercise_list.length },
    (v, i) => i
  );
  return (
    <Box
      style={{
        backgroundImage: "url(/assets/login/background.png)",
        backgroundRepeat: "round",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "4.5rem 0rem",
      }}
      borderRadius="1rem"
    >
      Recommend Form
      {ex_cnt.map((idx) => (
        <Box>
          <div>
            준비운동 : {ex.step_1.exercise_list[idx]} / {ex.step_1.time}
          </div>
          <div>
            본운동 : {ex.step_2.exercise_list[idx]} / {ex.step_2.time}
          </div>
          <div>
            마무리운동 : {ex.step_3.exercise_list[idx]} / {ex.step_3.time}
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default RecForm;
