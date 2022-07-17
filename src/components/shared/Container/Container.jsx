import PropTypes from "prop-types";
import { StyledContainer } from "./styles";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

// PROPTYPES
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
