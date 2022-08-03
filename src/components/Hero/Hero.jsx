// import { motion, useViewportScroll, useTransform } from "framer-motion";
import GalaxyParticles from "../GalaxyParticles/GalaxyParticles";
import { StyledHero } from "./styles";

import temple from "../../assets/images/temple-1.png";
import ellipseBlur from "../../assets/images/ellipse-blur.png";

const Hero = () => {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  return (
    <StyledHero>
      <GalaxyParticles id="hero-particles" />
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
      <div className="blur-box"></div>
    </StyledHero>
  );
};

export default Hero;
