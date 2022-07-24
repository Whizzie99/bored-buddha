import Container from "../../components/shared/Container/Container";
import RoadMapCard from "../RoadMapCard/RoadMapCard";
import { phases } from "../../data/data";
import { StyledWrapper } from "./styles";

const RoadMap = () => {
  return (
    <StyledWrapper>
      <Container>
        <div className="section-header">
          <h3>bored buddha nft</h3>
          <h2>roadmap</h2>
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
