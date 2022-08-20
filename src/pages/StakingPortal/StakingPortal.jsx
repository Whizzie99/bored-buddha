import Container from "../../components/shared/Container/Container";
import LegendColorBox from "../../components/LegendColorBox/LegendColorBox";
// import ComingSoon from "../../components/ComingSoon/ComingSoon";
import {
  StyledWrapper,
  StyledStakingHero,
  StyledStakingMetric,
  StyledStakingMechanism,
  StyledTokendDistribution,
} from "./styles";

import chartImg from "../../assets/images/pie-chart.png";

const StakingPortal = () => {
  return (
    <StyledWrapper>
      {/* <ComingSoon /> */}
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
          <div className="token-distribution-grid">
            <div className="grid-item-left">
              <img src={chartImg} alt="" />
            </div>
            <div className="grid-item-right">
              <div className="token-legend">
                <div className="legend-row">
                  <div className="legend-color">
                    <LegendColorBox boxColor="#863DAC" />
                  </div>
                  <p className="legend-text">staking reward</p>
                  <p className="legend-amount">70,000,000</p>
                </div>
                <div className="legend-row">
                  <div className="legend-color">
                    <LegendColorBox boxColor="#4E89FA" />
                  </div>
                  <p className="legend-text">treasury</p>
                  <p className="legend-amount">150,000,000</p>
                </div>
                <div className="legend-row">
                  <div className="legend-color">
                    <LegendColorBox boxColor="#3B944F" />
                  </div>
                  <p className="legend-text">IDO</p>
                  <p className="legend-amount">10,000,000</p>
                </div>
                <div className="legend-row">
                  <div className="legend-color">
                    <LegendColorBox boxColor="#E0C04A" />
                  </div>
                  <p className="legend-text">comunity reward</p>
                  <p className="legend-amount">5,000,000</p>
                </div>
                <div className="legend-row total-row">
                  <div className="legend-color">
                    <LegendColorBox />
                  </div>
                  <p className="legend-text">total</p>
                  <p className="legend-amount">100,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </StyledTokendDistribution>
      </Container>
    </StyledWrapper>
  );
};

export default StakingPortal;
