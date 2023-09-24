import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Currently working on personal projects (like this portfolio) to learn more about React, NextJs and other technologies.</Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          {toggle === 'dev' ?
            <ToggleButton active value="dev" onClick={() => setToggle('dev')}>Development</ToggleButton>
            :
            <ToggleButton value="dev" onClick={() => setToggle('dev')}>Development</ToggleButton>
          }
          {toggle === 'design' ?
            <ToggleButton active value="design" onClick={() => setToggle('design')}>Design</ToggleButton>
            :
            <ToggleButton value="design" onClick={() => setToggle('design')}>Design</ToggleButton>
          }
          {toggle === 'art' ?
            <ToggleButton active value="art" onClick={() => setToggle('art')}>Art</ToggleButton>
            :
            <ToggleButton value="art" onClick={() => setToggle('art')}>Art</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects