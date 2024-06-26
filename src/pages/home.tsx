import { Container, Box } from "@chakra-ui/react";
import ListSurveys from "../components/listSurveys.tsx";
import HomeNavBar from "../components/navHeaders/homeNavBar.tsx";

const Home = () => {
  return (
    <Box>
      <Container my="30" maxW="1200px">
        <HomeNavBar />
        <ListSurveys />
      </Container>
      <Box height="50"></Box>
    </Box>
  );
};

export default Home;
