import parse from "html-react-parser";
import PropTypes from "prop-types";
import { StyledRoadMapCard } from "./styles";

const RoadMapCard = ({ phase, title, description }) => {
  return (
    <StyledRoadMapCard className="roadmap-card">
      <div className="card-container">
        <div className="card-header">
          <h3>
            <span className="card-phase">{`phase: ${phase}`}</span>
            <span>{title}</span>
          </h3>
        </div>
        <div className="card-content">
          <p>{parse(description)}</p>
        </div>
      </div>
      <div className="circle"></div>
      <div className="line"></div>
    </StyledRoadMapCard>
  );
};

export default RoadMapCard;

// PROPTYPES
RoadMapCard.propTypes = {
  phase: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
