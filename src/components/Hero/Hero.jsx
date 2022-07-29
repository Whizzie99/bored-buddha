import { StyledHero } from "./styles";

import temple from "../../assets/images/temple-1.png";
import ellipseBlur from "../../assets/images/ellipse-blur.png";

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-title">
        <h3>welcome to</h3>
        <h2>the golden temple</h2>
      </div>

      <div className="temple-img">
        <img src={temple} alt="" />
      </div>

      <div className="ellipse-blur">
        <img src={ellipseBlur} alt="" />
      </div>
    </StyledHero>
  );
};

export default Hero;
