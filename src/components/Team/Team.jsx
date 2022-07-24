import Container from "../shared/Container/Container";
import TeamCard from "../TeamCard/TeamCard";
import { teamMembers } from "../../data/team";
import { StyledWrapper } from "./styles";

const Team = () => {
  return (
    <StyledWrapper>
      <Container>
        <div className="section-title">
          <h2>meet the bored buddha team</h2>
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
