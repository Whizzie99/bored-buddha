import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MindMap from "../../components/MindMap/MindMap";
import Mint from "../../components/Mint/Mint";
import { StyledWrapper } from "./styles";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero />
      <About />
      <MindMap />
      <Mint />
    </StyledWrapper>
  );
};

export default Home;
