import React from "react";
import {
  Grid,
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { exerciseConditionProps } from "../../../typings";
import { exercise } from "../../../constant/exercise";

interface SelectProps {
  label: "level" | "body" | "equipment" | "type";
  title: "운동 강도" | "운동 부위" | "사용 도구" | "운동 타입";
  data: exerciseConditionProps;
  setData: React.Dispatch<React.SetStateAction<exerciseConditionProps>>;
}

const SelectSection = ({ title, label, data, setData }: SelectProps) => {
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    const target = event.currentTarget;
    const isPressed = target.getAttribute("aria-pressed");
    console.log("isPressed?", isPressed);
    const { value, type } = target.dataset;

    if (isPressed === "false") {
      target.style.backgroundColor = "Red";
      target.setAttribute("aria-pressed", "true");
    } else {
      target.style.backgroundColor = "transparent";
      target.setAttribute("aria-pressed", "false");
    }

    if (value && type) {
      //console.log(data);
      if (data[type].includes(value)) {
        const selected = data[type].filter(
          (element: string) => element !== value
        );
        data[type] = selected;
      } else {
        data[type].push(value);
      }
      setData({ ...data });
    }

    //setData(()=>{...Preview, type:data[prev]+value})
  };
  return (
    <Grid
      container
      spacing={5}
      justifyContent="flex-start"
      alignItems="center"
      padding="0"
    >
      <Grid item xs={2}>
        <Typography variant="h4" color="main" textAlign="center">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ToggleButtonGroup
            // @ts-ignore
            value={exercise[label]}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            {
              // @ts-ignore
              exercise[label].map(({ name, value }: string) => (
                <ToggleButton
                  value="bold"
                  aria-label="bold"
                  data-type={label}
                  data-value={value}
                >
                  {name}
                </ToggleButton>
              ))
            }
          </ToggleButtonGroup>
          {/*{
            // @ts-ignore
            exercise[label].map(({ name }: string) => (
              <div
                onClick={(label: string, name: string) =>
                  handleBtnClick(label, name)
                }
              >
                {name}
              </div>
            ))
          }*/}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SelectSection;
