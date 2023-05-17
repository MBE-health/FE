import StepAccordion from "./step";
import SelectAccordion from "./select";
import { Container, Box } from "@mui/material";
import { healthConditionProps, exerciseConditionProps } from "../../typings";

export interface stepContainerProps {
  checkBoxTitle: string;
  title: string;
  data: healthConditionProps | exerciseConditionProps;
}
export interface setDataProps {
  setData: any;
}
export interface typeProps {
  type: "form" | "select";
}
const StepContainer = ({
  checkBoxTitle,
  title,
  data,
  setData,
  type,
}: stepContainerProps & typeProps & setDataProps) => {
  return (
    <center>
      <Container maxWidth="xl" sx={{ marginBottom: "3rem" }}>
        <Box
          style={{
            backgroundImage: "url(/assets/login/background.png)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "2rem",
          }}
          /*border="5px solid transparent"
          borderRadius="1rem"*/
        >
          {type === "form" && (
            <StepAccordion
              checkBoxTitle={checkBoxTitle}
              title={title}
              data={data}
              setData={setData}
            />
          )}
          {type === "select" && (
            <SelectAccordion
              title={title}
              checkBoxTitle={checkBoxTitle}
              data={data}
              setData={setData}
            />
          )}
        </Box>
      </Container>
    </center>
  );
};

export default StepContainer;
