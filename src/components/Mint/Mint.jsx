import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiPlus, HiMinus } from "react-icons/hi";
import { StyledWrapper } from "./styles";

const Mint = () => {
  const [count, setCount] = useState(1);
  const location = useLocation();

  const increaseCounter = () => {
    setCount((count) => count + 1);
  };

  const decreaseCounter = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount((count) => count - 1);
    }
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
    <StyledWrapper id="mint">
      <h2 data-aos="fade-up" data-aos-duration="1100">
        mint bored buddha nft
      </h2>
      <div className="mint-box" data-aos="fade-up" data-aos-duration="1200">
        <ul>
          <li className="mint-details">
            <span>price:</span>
            <span>0.08 ETH/NFT</span>
          </li>
          <li className="mint-details">
            <span>amount:</span>
            <span>{count}</span>
          </li>
          <li className="mint-counter">
            <button onClick={decreaseCounter}>
              <HiMinus />
            </button>
            <span>
              <small>{count}</small>
            </span>
            <button onClick={increaseCounter}>
              <HiPlus />
            </button>
          </li>
        </ul>
        <button className="mint-btn">mint now</button>
      </div>
      <div className="blur-box-1"></div>
      <div className="blur-box-2"></div>
    </StyledWrapper>
  );
};

export default Mint;
