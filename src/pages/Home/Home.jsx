import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import MindMap from "../../components/MindMap/MindMap";
import Mint from "../../components/Mint/Mint";
import RoadMap from "../../components/RoadMap/RoadMap";
import Team from "../../components/Team/Team";
import Faq from "../../components/Faq/Faq";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { StyledWrapper } from "./styles";

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
      <AudioPlayer />
    </StyledWrapper>
  );
};

export default Home;
