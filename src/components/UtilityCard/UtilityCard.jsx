import { StyledUtilityCard } from "./styles";
import PropTypes from "prop-types";

// import sample from "../../assets/icons/utility_icons/diamond.svg";

const UtilityCard = ({ icon, title, description }) => {
  return (
    <StyledUtilityCard>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p>{description}</p>
      {/* <div className="small-box"></div> */}
    </StyledUtilityCard>
  );
};

export default UtilityCard;

UtilityCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
