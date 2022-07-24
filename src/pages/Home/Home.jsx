import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MindMap from "../../components/MindMap/MindMap";
import Mint from "../../components/Mint/Mint";
import { StyledWrapper } from "./styles";
import RoadMap from "../../components/RoadMap/RoadMap";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero />
      <About />
      <MindMap />
      <Mint />
      <RoadMap />
    </StyledWrapper>
  );
};

export default Home;
