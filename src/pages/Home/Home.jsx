import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MindMap from "../../components/MindMap/MindMap";
import { StyledWrapper } from "./styles";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero />
      <About />
      <MindMap />
    </StyledWrapper>
  );
};

export default Home;
