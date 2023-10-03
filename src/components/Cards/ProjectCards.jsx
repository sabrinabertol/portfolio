import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 480px;
  background-color: ${({ theme }) => theme.bgLight};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &:hover {
    filter: opacity(0.8);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;



const Image = styled.img`
width: 100%;
height: 300px;
object-fit: cover; 

`;

const Details = styled.div`
text-align: left;
width: 100%;
display: flex;
flex-direction: column;
gap: 0px;
padding: 20px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
text-align: left;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
      <Card onClick={() => setOpenModal({ state: true, project: project })}>
        <Image src={project.image} />
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
      </Card>
    );
}

export default ProjectCards