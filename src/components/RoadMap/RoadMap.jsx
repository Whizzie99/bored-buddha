import Container from "../../components/shared/Container/Container";
import RoadMapCard from "../RoadMapCard/RoadMapCard";
import { phases } from "../../data/data";
import { StyledWrapper } from "./styles";

import bulb1 from "../../assets/images/trad-bulb-1.png";
import bulb2 from "../../assets/images/trad-bulb-2.png";

const RoadMap = () => {
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
    </StyledWrapper>
  );
};

export default RoadMap;
