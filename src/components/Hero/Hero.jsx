// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
import GalaxyParticles from "../GalaxyParticles/GalaxyParticles";
import { StyledHero } from "./styles";

import temple from "../../assets/images/temple-1.png";
import ellipseBlur from "../../assets/images/ellipse-blur.png";
// import textStar from "../../assets/images/text-star.png";

const Hero = () => {
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);
  // const ref6 = useRef(null);

  // useEffect(() => {
  //   // const group1 = [ref1.current, ref2.current];
  //   // const group2 = [ref3.current, ref4.current];
  //   // const group3 = [ref5.current, ref6.current];

  //   // const star1 = ref1.current;
  //   // const star2 = ref2.current;
  //   // const star3 = ref3.current;
  //   // const star4 = ref4.current;
  //   // const star5 = ref5.current;
  //   // const star6 = ref6.current;

  //   // gsap.to(group1, 5, {
  //   //   // y: -20,
  //   //   delay: 1,
  //   //   ease: "none",
  //   //   yoyo: true,
  //   //   opacity: 1,
  //   //   repeat: -1,
  //   //   repeatDelay: 0,
  //   // });

  //   // gsap.fromTo(
  //   //   group1,
  //   //   { opacity: 0 },
  //   //   { opacity: 1, ease: "elastic", repeat: -1, repeatDelay: 0, delay: 1, yoyo: }
  //   // );
  //   // gsap.fromTo(group2, { opacity: 0 }, { opacity: 1 });
  //   // gsap.fromTo(group1, { opacity: 0 }, { opacity: 1 });

  //   // gsap.to(group2, 5, {
  //   //   // y: -20,
  //   //   delay: 1,
  //   //   ease: "none",
  //   //   opacity: 1,
  //   //   repeat: -1,
  //   //   repeatDelay: 0,
  //   //   yoyo: true,
  //   // });

  //   // gsap.to(group3, 5, {
  //   //   // y: -20,
  //   //   delay: 1,
  //   //   ease: "none",
  //   //   opacity: 1,
  //   //   repeat: -1,
  //   //   repeatDelay: 0,
  //   // });
  // }, []);

  return (
    <StyledHero>
      <GalaxyParticles id="hero-particles" />
      <div className="hero-title">
        <h3 data-aos="fade-up" data-aos-duration="1100">
          welcome to
        </h3>
        <h2 data-aos="fade-up" data-aos-duration="1200">
          the golden temple
        </h2>
        {/* <img src={textStar} alt="text-star" className="text-star text-star-1" />
        <img src={textStar} alt="text-star" className="text-star text-star-1" />
        <img src={textStar} alt="text-star" className="text-star text-star-2" />
        <img src={textStar} alt="text-star" className="text-star text-star-2" />
        <img src={textStar} alt="text-star" className="text-star text-star-3" />
        <img src={textStar} className="text-star text-star-3" /> */}
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
