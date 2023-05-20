import React, { FC } from "react";
import { Button } from "@mui/material";
import { FormikValues } from "formik";

interface Props {
  hasPrevious?: boolean;
  onBackClick: (values: FormikValues) => void;
  isLastStep: boolean;
  handleSubmit: any;
  onNextClick: any;
}

const FormNavigation: FC<Props> = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        marginTop: 5,
        justifyContent: "space-between",
      }}
    >
      {props.hasPrevious && (
        <Button
          variant="contained"
          type="button"
          onClick={props.onBackClick}
          sx={{ marginRight: "3rem" }}
        >
          Back
        </Button>
      )}
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={props.isLastStep ? props.handleSubmit : props.onNextClick}
      >
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
