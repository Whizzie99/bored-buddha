import PropTypes from "prop-types";
import { StyledWrapper } from "./styles";

const LegendColorBox = ({ boxColor }) => {
  return <StyledWrapper boxColor={boxColor} />;
};

export default LegendColorBox;

// PROPTPYES
LegendColorBox.propTypes = {
  boxColor: PropTypes.string,
};
