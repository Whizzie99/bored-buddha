import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MindMap from "../../components/MindMap/MindMap";
import Mint from "../../components/Mint/Mint";
import { StyledWrapper } from "./styles";
import RoadMap from "../../components/RoadMap/RoadMap";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero />
      <About />
      <MindMap />
      <Mint />
      <RoadMap />
      <Team />
    </StyledWrapper>
  );
};

export default Home;
