import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../shared/Container/Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { StyledWrapper } from "./styles";
import { faqs } from "../../data/faqs";

// import goldDust1 from "../../assets/images/gold-dust-1.png";
// import goldDust2 from "../../assets/images/gold-dust-3.png";

const Faq = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <StyledWrapper id="faqs">
      <Container>
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          faqs
        </h2>
        <div className="faq-section">
          {faqs.map((faq, index) => (
            <div
              className="faq-card"
              key={faq.id}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="faq-card-top" onClick={() => toggle(index)}>
                <h3>{faq.question}</h3>
                <span>
                  {clicked === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              {clicked === index ? (
                <div className="faq-card-bottom">
                  <p>{faq.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
      {/* <div className="gold-dust gold-dust-1">
        <img src={goldDust1} alt="" />
      </div>
      <div className="gold-dust gold-dust-2">
        <img src={goldDust2} alt="" />
      </div> */}
    </StyledWrapper>
  );
};

export default Faq;
