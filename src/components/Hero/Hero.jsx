import GalaxyParticles from "../GalaxyParticles/GalaxyParticles";
import { StyledHero } from "./styles";

import temple from "../../assets/images/temple-1.png";
import ellipseBlur from "../../assets/images/ellipse-blur.png";
import templText from "../../assets/images/temple-text-img.png";
// import textStar from "../../assets/images/text-star.png";
// import star from "../../assets/images/star-2.png";

const Hero = () => {
  return (
    <StyledHero>
      <GalaxyParticles id="hero-particles" />
      {/* <h3 className="hero-small-title">welcome to</h3> */}
      <div className="hero-title">
        <h3 data-aos="fade-up" data-aos-duration="1100">
          welcome to
        </h3>
        <img
          src={templText}
          alt=""
          className="temple-text-img"
          data-aos="fade-up"
          data-aos-duration="1100"
        />
      </div>

      <div className="temple-img">
        <img src={temple} className="temple" alt="" />
      </div>

      <div className="ellipse-blur">
        <img src={ellipseBlur} alt="" />
      </div>

      <div className="blur-box"></div>
    </StyledHero>
  );
};

export default Hero;
