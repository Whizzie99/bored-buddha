import styled from "styled-components";

export const StyledWrapper = styled.span`
  display: block;
  height: 1.5em;
  width: 1.5em;
  background: ${(props) => (props.boxColor ? props.boxColor : "none")};
`;
