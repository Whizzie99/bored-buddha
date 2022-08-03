import { useState } from "react";
import Container from "../shared/Container/Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { StyledWrapper } from "./styles";
import { faqs } from "../../data/faqs";

// import goldDust1 from "../../assets/images/gold-dust-1.png";
// import goldDust2 from "../../assets/images/gold-dust-3.png";

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <StyledWrapper>
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
              data-aos="fade-up"
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
