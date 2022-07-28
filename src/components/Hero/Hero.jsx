import { StyledHero } from "./styles";

import ellipseBlur from "../../assets/images/ellipse-blur.png";

const Hero = () => {
  return (
    <StyledHero>
      <div className="ellipse-blur">
        <img src={ellipseBlur} className="ellipse-blur" alt="" />
      </div>
    </StyledHero>
  );
};

export default Hero;
