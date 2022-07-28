import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MindMap from "../../components/MindMap/MindMap";
import Mint from "../../components/Mint/Mint";
import { StyledWrapper } from "./styles";
import RoadMap from "../../components/RoadMap/RoadMap";
import Team from "../../components/Team/Team";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero />
      <About />
      <div className="section-wrapper">
        <MindMap />
        <Mint />
        <RoadMap />
      </div>
      <Team />
      <Faq />
    </StyledWrapper>
  );
};

export default Home;
