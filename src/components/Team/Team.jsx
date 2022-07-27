import Container from "../shared/Container/Container";
import TeamCard from "../TeamCard/TeamCard";
import { teamMembers } from "../../data/team";
import { StyledWrapper } from "./styles";

import bulb1 from "../../assets/images/trad-bulb-1.png";
import bulb2 from "../../assets/images/trad-bulb-2.png";

const Team = () => {
  return (
    <StyledWrapper>
      <Container>
        <div className="section-title">
          <h2>meet the bored buddha team</h2>
          <div className="bulb bulb-left">
            <img src={bulb1} alt="" />
          </div>
          <div className="bulb bulb-right">
            <img src={bulb2} alt="" />
          </div>
        </div>
        <div className="team-grid">
          {teamMembers.map((teamMember) => (
            <TeamCard
              key={teamMember.name}
              img={teamMember.image}
              name={teamMember.name}
              title={teamMember.title}
            />
          ))}
        </div>
      </Container>
    </StyledWrapper>
  );
};

export default Team;
