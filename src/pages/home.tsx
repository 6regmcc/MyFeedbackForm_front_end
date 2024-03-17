import { Container } from "@chakra-ui/react";
import ListSurveys from "../components/listSurveys.tsx";
import HomeNavBar from "../components/homeNavBar.tsx";

const Home = () => {
  return (
    <Container maxW="1200px">
      <HomeNavBar />
      <ListSurveys />
    </Container>
  );
};

export default Home;
