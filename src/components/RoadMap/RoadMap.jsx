import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Container from "../../components/shared/Container/Container";
import RoadMapCard from "../RoadMapCard/RoadMapCard";
import { phases } from "../../data/phases";
import { StyledWrapper } from "./styles";

import bulb1 from "../../assets/images/trad-bulb-1.png";
import bulb2 from "../../assets/images/trad-bulb-2.png";
import candleLight from "../../assets/images/candle-light-overlay.png";

const RoadMap = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const lantern1 = ref1.current;
    const lantern2 = ref2.current;
    const lantern3 = ref3.current;
    const lantern4 = ref4.current;

    gsap.to(lantern1, 5, {
      y: -20,
      delay: 1,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 1.5,
    });

    gsap.to(lantern2, 5, {
      y: -200,
      delay: 1,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 1.5,
    });

    gsap.to(lantern3, 5, {
      y: -500,
      delay: 1,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 1.5,
    });

    gsap.to(lantern4, 5, {
      y: -700,
      delay: 1,
      ease: "none",
      opacity: 0,
      repeat: -1,
      repeatDelay: 1.5,
    });
  }, []);

  return (
    <StyledWrapper>
      <Container>
        <div className="section-header">
          <h3>bored buddha nft</h3>
          <h2>roadmap</h2>
          <div className="bulb bulb-left">
            <img src={bulb1} alt="" />
          </div>
          <div className="bulb bulb-right">
            <img src={bulb2} alt="" />
          </div>
        </div>
        <p className="section-description">
          Our club will not be road map driven. With or without a “% mint”, we
          ALL should be doing what we can to spread the movement of peace. But
          to give you a SMALL peek of what we had in store:
        </p>
        <div className="map-section">
          {phases.map((phase) => (
            <RoadMapCard
              key={phase.phaseNumber}
              phase={phase.phaseNumber}
              title={phase.title}
              description={phase.description}
            />
          ))}
        </div>
      </Container>
      <div className="candle candle-light-1" ref={ref1}>
        <img src={candleLight} alt="" />
      </div>
      <div className="candle candle-light-2" ref={ref2}>
        <img src={candleLight} alt="" />
      </div>
      <div className="candle candle-light-3" ref={ref3}>
        <img src={candleLight} alt="" />
      </div>
      <div className="candle candle-light-4" ref={ref4}>
        <img src={candleLight} alt="" />
      </div>
      <div className="blur-box"></div>
    </StyledWrapper>
  );
};

export default RoadMap;
