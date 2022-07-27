import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { StyledWrapper } from "./styles";

const Mint = () => {
  const [count, setCount] = useState(1);

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

  return (
    <StyledWrapper>
      <h2>mint bored buddha nft</h2>
      <div className="mint-box">
        <ul>
          <li className="mint-details">
            <span>price</span>
            <span>0.02ETH/NFT</span>
          </li>
          <li className="mint-details">
            <span>amount</span>
            <span>8,888</span>
          </li>
          <li className="mint-counter">
            <button onClick={increaseCounter}>
              <HiPlus />
            </button>
            <span>{count}</span>
            <button onClick={decreaseCounter}>
              <HiMinus />
            </button>
          </li>
        </ul>
        <button className="mint-btn">mint now</button>
      </div>
    </StyledWrapper>
  );
};

export default Mint;
