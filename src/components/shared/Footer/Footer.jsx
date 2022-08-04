import Container from "../Container/Container";
import { StyledFooter } from "./styles";

import logo from "../../../assets/images/new-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <div className="footer-section">
          <div className="left-section">
            <p>bored buddha, {currentYear}</p>
          </div>
          <div className="right-section">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
