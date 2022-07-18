import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import { StyledWrapper } from "./styles";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero />
      <About />
    </StyledWrapper>
  );
};

export default Home;
