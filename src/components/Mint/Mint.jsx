import { StyledWrapper } from "./styles";

const Mint = () => {
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
            <button>+</button>
            <span>0</span>
            <button>_</button>
          </li>
        </ul>
        <button className="mint-btn">mint now</button>
      </div>
    </StyledWrapper>
  );
};

export default Mint;
