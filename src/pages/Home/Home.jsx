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
      <MindMap />
      <Mint />
      <div className="section-wrapper">
        <RoadMap />
        <Team />
      </div>
      <Faq />
    </StyledWrapper>
  );
};

export default Home;
