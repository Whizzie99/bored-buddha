// import GalaxyParticles from "../GalaxyParticles/GalaxyParticles";
import { StyledHero } from "./styles";

import temple from "../../assets/images/temple-1.png";
import ellipseBlur from "../../assets/images/ellipse-blur.png";
import textStar from "../../assets/images/text-star.png";
import star from "../../assets/images/star-2.png";

const Hero = () => {
  return (
    <StyledHero>
      {/* <GalaxyParticles id="hero-particles" /> */}
      <div className="hero-title">
        <h3 data-aos="fade-up" data-aos-duration="1100">
          welcome to
        </h3>
        <h2 data-aos="fade-up" data-aos-duration="1200">
          th<span>e</span> go<span>l</span>den <span>t</span>emple
        </h2>
        <img
          src={textStar}
          alt="text-star"
          className="animate-star text-star text-star-1"
        />
        <img
          src={textStar}
          alt="text-star"
          className="animate-star text-star text-star-1"
        />
        <img
          src={textStar}
          alt="text-star"
          className="animate-star text-star text-star-2"
        />
        <img
          src={textStar}
          alt="text-star"
          className="animate-star text-star text-star-2"
        />
        <img
          src={textStar}
          alt="text-star"
          className="animate-star text-star text-star-3"
        />
        <img src={textStar} className="animate-star text-star text-star-3" />
      </div>

      <div className="temple-img">
        <img src={temple} className="temple" alt="" />
        <img src={star} alt="" className="temple-star-top" />
        {/* <img src={star} alt="" className="temple-star-left" /> */}
      </div>

      <div className="ellipse-blur">
        <img src={ellipseBlur} alt="" />
      </div>

      <div className="blur-box"></div>
    </StyledHero>
  );
};

export default Hero;
