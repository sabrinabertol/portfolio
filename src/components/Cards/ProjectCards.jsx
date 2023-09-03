import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: auto;
  height: 300px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    filter: brightness(1.1); 
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover; 

`;

const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  color: #fff;
  padding: 30px;
  opacity: 0;
  transition: 0.3s ease-in-out;

  ${Card}:hover & {
    opacity: 1;
  }
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
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
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
        <Card onClick={() => setOpenModal({state: true, project: project})}>
        <Image src={project.image}/>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
        </Card>
    )
}

export default ProjectCards