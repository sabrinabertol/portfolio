import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-bottom: 10%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.card};
  border: 0.5px solid ${({ theme }) => theme.bgLight};
  padding: 36px 18px;
  @media (max-width: 768px) {
    padding: 18px 16px;
  }
  @media (max-width: 500px) {
    padding: 18px 16px;
  }
`;

const SkillList = styled.div`
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 12px;
  place-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 8px;
  place-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
