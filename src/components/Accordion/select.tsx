import React from "react";
import {
  Grid,
  Stack,
  Button,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { stepContainerProps } from "./container";
import SelectSection from "./selectSection";
import { exercise } from "../../constant/exercise";
import { exerciseProps, exerciseConditionProps } from "../../typings";

function handleClickCheckbox(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) {
  e.stopPropagation();
}

interface setDataProps {
  setData: React.Dispatch<React.SetStateAction<exerciseConditionProps>>;
}

const SelectAccordion = ({
  checkBoxTitle,
  title,
  data,
  setData,
}: stepContainerProps & setDataProps) => {
  const handleSubmit = async (data: exerciseConditionProps) => {
    console.log("data", data);

    //setData(values);
    //const status = await SignUp(values);
    //handleRoute(navigate, status);
  };

  return (
    <Accordion sx={{ backgroundColor: "transparent", boxShadow: "unset" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
          width="40rem"
        >
          <Grid item xs={1}>
            <Checkbox
              checked={false}
              value="checkedB"
              color="primary"
              onClick={(e) => handleClickCheckbox(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>{checkBoxTitle}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "white",
          margin: "5.5rem",
          borderRadius: "10px",
        }}
      >
        <SelectSection
          label="level"
          title="운동 강도"
          data={data as exerciseConditionProps}
          setData={setData}
        />
        <SelectSection
          label="equipment"
          title="사용 도구"
          data={data as exerciseConditionProps}
          setData={setData}
        />
        <SelectSection
          label="body"
          title="운동 부위"
          data={data as exerciseConditionProps}
          setData={setData}
        />
        <SelectSection
          label="type"
          title="운동 타입"
          data={data as exerciseConditionProps}
          setData={setData}
        />

        <Button
          variant="contained"
          type="button"
          onClick={() => console.log(data)}
          fullWidth
          disableElevation
          sx={{
            backgroundColor: "secondary.light",
            margin: "6.5rem 0 1.5rem",
            "&:hover": {
              border: "2px solid secondary.main",
              borderColor: "secondary.main",
              backgroundColor: "secondary.main",
            },
          }}
        >
          저장
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default SelectAccordion;
