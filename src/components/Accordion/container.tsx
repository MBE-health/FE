import StepAccordion from "./step";
import { Container, Box } from "@mui/material";

export interface stepAccordinProps {
  checkBoxTitle: string;
  title: string;
}
const stepContainer = ({ checkBoxTitle, title }: stepAccordinProps) => {
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
            padding: "0rem 2rem",
          }}
          borderRadius="1rem"
        >
          <StepAccordion checkBoxTitle={checkBoxTitle} title={title} />
        </Box>
      </Container>
    </center>
  );
};

export default stepContainer;
