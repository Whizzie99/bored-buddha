import Container from "../../components/shared/Container/Container";
import {
  StyledWrapper,
  StyledStakingHero,
  StyledStakingMetric,
  StyledStakingMechanism,
  StyledTokendDistribution,
} from "./styles";

const StakingPortal = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledStakingHero>
          <h2>staking portal</h2>
          <h3>connect portal to stake nft</h3>
          <p>stake your buddha nft for free and get rewarded in $budd</p>
          <button>stake now</button>
        </StyledStakingHero>
        <StyledStakingMetric>
          <h2>staking metric</h2>
          <div className="staking-metric-grid">
            <div className="staking-metric-grid-item">
              <ul>
                <li>
                  <span>total nft staked:</span>
                  <span>0/8,888</span>
                </li>
                <li>total percentage</li>
              </ul>
            </div>
            <div className="staking-metric-grid-item">
              <ul>
                <li>
                  <span>reward rate/per day</span>
                </li>
                <li>total reward</li>
              </ul>
            </div>
          </div>
        </StyledStakingMetric>
        <StyledStakingMechanism>
          <h2>staking mechanism</h2>
          <div className="content">
            <ol>
              <li>
                When an NFT is bought, buyers will get an option to stake their
                NFT for $BUDD.
              </li>
              <li>
                Token rewards can be based on how long and how rare the NFT is.
                Period of staking is 30 days, 60 days and 90 days.{" "}
              </li>
              <li>30 days = 0x, 60 days = 2X, 90 days = 3X </li>
              <li>
                <ul>
                  <li>Normal NFT = 10 ($BUDD) per day</li>
                  <li>Rare = 20 per day</li>
                  <li>Legendary = 30 per day</li>
                </ul>
              </li>
              <li>
                $Buddha can be used to purchase items on the store and will also
                be used for other things we are going to introduce soon.
              </li>
            </ol>
          </div>
        </StyledStakingMechanism>
        <StyledTokendDistribution>
          <h2>$buddha token distribution</h2>
        </StyledTokendDistribution>
      </Container>
    </StyledWrapper>
  );
};

export default StakingPortal;
