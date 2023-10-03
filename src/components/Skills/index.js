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
  margin-top: 30px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  max-width: 1350px;
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
  margin-bottom: 20px;
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
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  justify-content: center;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Skill = styled.div`
  width: 100%;
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

const SkillTitle = styled.h2`
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`;

const SkillDescription = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  margin-bottom: 20px;
`;

const SkillList = styled.div`
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 8px;
  place-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 10px 16px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 4px;
  place-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
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
          I believe adaptation is key. It is not about how many languages or tools you already know, but how fast and easily you can learn new ones.
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
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
        </Desc>
        </Wrapper>

    </Container>
  );
};

export default Skills;
